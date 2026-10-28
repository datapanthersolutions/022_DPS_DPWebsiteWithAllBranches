"""Calls Claude and turns its streamed reply into the events the website's chat widget reads."""

import json
import logging
import time
from collections.abc import AsyncIterator

import anthropic

from app.chat.prompt import system_blocks
from app.core.config import Settings
from app.schemas.chat import ChatMessage

log = logging.getLogger(__name__)

# Shown in the widget when no answer can be produced. Kept short and actionable.
MSG_BUSY = "The assistant is busy right now. Please try again in a minute."
MSG_UNAVAILABLE = (
    "The assistant is unavailable right now. Please try again, or email info@datapanthersolutions.com."
)
MSG_REFUSAL = (
    "Sorry, I can't help with that request. I'm happy to answer questions about Data Panther's services, "
    "solutions and case studies, or you can reach the team at [Contact us](/ContactUs/)."
)


def sse(event: str, data: dict) -> str:
    """One Server-Sent Event."""
    return f"event: {event}\ndata: {json.dumps(data, ensure_ascii=False)}\n\n"


def build_messages(history: list[ChatMessage], page: str | None, max_messages: int) -> list[dict]:
    """Conversation for the API: the most recent turns only, starting with a visitor message, and the
    current page attached to the newest message (after the cached prefix, so caching still works)."""
    recent = history[-max_messages:]
    while recent and recent[0].role != "user":
        recent = recent[1:]
    messages: list[dict] = [{"role": m.role, "content": m.content} for m in recent]
    if page:
        messages[-1]["content"] = [
            {"type": "text", "text": f"<page_context>The visitor is viewing {page}</page_context>"},
            {"type": "text", "text": recent[-1].content},
        ]
    return messages


async def stream_reply(
    client: anthropic.AsyncAnthropic, settings: Settings, history: list[ChatMessage], page: str | None
) -> AsyncIterator[str]:
    """Yields SSE strings: `delta` events with text as it is written, then one `done`, `refusal` or
    `error` event. Text already sent is never taken back, except that a `refusal` tells the widget to
    replace the partial reply with MSG_REFUSAL."""
    started = time.monotonic()
    yield ": connected\n\n"  # flushes headers through proxies right away
    try:
        async with client.beta.messages.stream(
            model=settings.chat_model,
            max_tokens=settings.chat_max_output_tokens,
            system=system_blocks(),
            messages=build_messages(history, page, settings.chat_max_messages),
            output_config={"effort": settings.chat_effort},
            # If the model's safety classifiers decline, the API retries on Anthropic's recommended
            # fallback model inside the same stream.
            betas=["server-side-fallback-2026-07-01"],
            fallbacks="default",
        ) as stream:
            async for text in stream.text_stream:
                yield sse("delta", {"text": text})
            final = await stream.get_final_message()
    except anthropic.RateLimitError as e:
        log.warning("chat: Anthropic rate limit (request %s)", e.request_id)
        yield sse("error", {"code": "busy", "message": MSG_BUSY})
        return
    except anthropic.APIStatusError as e:
        level = logging.WARNING if e.status_code in (500, 502, 503, 504, 529) else logging.ERROR
        log.log(level, "chat: Anthropic API %s (request %s): %s", e.status_code, e.request_id, e.message)
        yield sse("error", {"code": "unavailable", "message": MSG_UNAVAILABLE})
        return
    except anthropic.APIConnectionError as e:
        log.warning("chat: cannot reach Anthropic: %s", e)
        yield sse("error", {"code": "unavailable", "message": MSG_UNAVAILABLE})
        return

    # Token counts only, never message text: conversations are not stored or logged.
    u = final.usage
    ms = (time.monotonic() - started) * 1000
    log.info(
        "chat: model=%s stop=%s in=%d cache_read=%s cache_write=%s out=%d ms=%d request=%s",
        final.model, final.stop_reason, u.input_tokens, u.cache_read_input_tokens,
        u.cache_creation_input_tokens, u.output_tokens, ms, stream.request_id,
    )  # fmt: skip

    if final.stop_reason == "refusal":
        yield sse("refusal", {"message": MSG_REFUSAL})
    else:
        yield sse("done", {"truncated": final.stop_reason == "max_tokens"})

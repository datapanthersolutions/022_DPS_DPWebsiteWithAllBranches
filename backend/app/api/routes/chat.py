"""Website chat assistant. The reply streams back as Server-Sent Events (see app/chat/service.py)."""

from typing import Annotated

import anthropic
from fastapi import APIRouter, Depends, HTTPException, Request
from fastapi.responses import StreamingResponse

from app.chat.service import stream_reply
from app.core.config import Settings, get_settings
from app.core.http import client_ip
from app.core.ratelimit import FixedWindowLimiter
from app.schemas.chat import ChatRequest

router = APIRouter(prefix="/chat", tags=["chat"])

SettingsDep = Annotated[Settings, Depends(get_settings)]

per_minute = FixedWindowLimiter(60)
per_day = FixedWindowLimiter(24 * 60 * 60)


def get_anthropic(request: Request) -> anthropic.AsyncAnthropic | None:
    """Shared Claude client, created in app.main's lifespan (None when no API key is set)."""
    return getattr(request.app.state, "anthropic", None)


AnthropicDep = Annotated[anthropic.AsyncAnthropic | None, Depends(get_anthropic)]


@router.post(
    "",
    response_class=StreamingResponse,
    responses={200: {"content": {"text/event-stream": {}}, "description": "SSE: delta*, then one end event"}},
)
async def chat(body: ChatRequest, request: Request, settings: SettingsDep, client: AnthropicDep):
    if client is None or not settings.chat_enabled:
        raise HTTPException(503, "The chat assistant is not configured")
    if len(body.messages[-1].content) > settings.chat_max_message_chars:
        raise HTTPException(413, f"Please keep messages under {settings.chat_max_message_chars} characters")

    ip = client_ip(request)
    limits = ((per_minute, settings.chat_rate_per_minute), (per_day, settings.chat_rate_per_day))
    for limiter, limit in limits:
        if (wait := limiter.hit(ip, limit)) is not None:
            raise HTTPException(429, "Too many messages, please wait a moment", {"Retry-After": str(wait)})

    return StreamingResponse(
        stream_reply(client, settings, body.messages, body.page),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},  # no proxy buffering
    )

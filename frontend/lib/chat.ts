// Client for the AI chat API (backend/app/api/routes/chat.py). Only used when NEXT_PUBLIC_CHAT_AI=true;
// otherwise the assistant answers from the site's content without AI (components/chat/bot.ts).
// The reply streams back as Server-Sent Events: `delta` events with text, then one of
// `done` / `refusal` / `error`. The API keeps no state, so every request carries the conversation.

export const AI_ENABLED = process.env.NEXT_PUBLIC_CHAT_AI === "true";
export const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000").replace(/\/$/, "");

export type ChatTurn = { role: "user" | "assistant"; content: string };
export type ChatEnd = { kind: "done"; truncated: boolean } | { kind: "refusal"; message: string };

const MAX_HISTORY = 20; // the API trims longer conversations too; this just keeps requests small

// "unavailable": AI is off, misconfigured or down, so the widget answers from the site instead.
export type ChatErrorCode = "unavailable" | "busy" | "rate_limited" | "too_long" | "cut_off";

export class ChatError extends Error {
  constructor(message: string, public code: ChatErrorCode = "unavailable") {
    super(message);
  }
}

const FALLBACK = "The assistant is unavailable right now. Please try again, or email info@datapanthersolutions.com.";

async function httpError(res: Response): Promise<ChatError> {
  if (res.status === 429) {
    const wait = Number(res.headers.get("Retry-After")) || 30;
    return new ChatError(`You're sending messages quickly. Please wait ${wait} seconds and try again.`, "rate_limited");
  }
  if (res.status === 413) return new ChatError("That message is too long. Please shorten it and try again.", "too_long");
  return new ChatError(FALLBACK);
}

/** Sends the conversation and calls onDelta with each piece of the reply. Resolves when the reply ends;
 *  throws ChatError (show its message) or an AbortError (the visitor pressed stop). */
export async function streamChat(
  history: ChatTurn[],
  page: string,
  { onDelta, signal }: { onDelta: (text: string) => void; signal?: AbortSignal },
): Promise<ChatEnd> {
  let messages = history.slice(-MAX_HISTORY);
  while (messages.length && messages[0].role !== "user") messages = messages.slice(1);

  let res: Response;
  try {
    res = await fetch(`${API_URL}/api/v1/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages, page }),
      signal,
    });
  } catch (e) {
    if ((e as Error).name === "AbortError") throw e;
    throw new ChatError(FALLBACK);
  }
  if (!res.ok || !res.body) throw await httpError(res);

  const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
  let buf = "";
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    buf += value.replace(/\r\n/g, "\n");
    let cut: number;
    while ((cut = buf.indexOf("\n\n")) !== -1) {
      const chunk = buf.slice(0, cut);
      buf = buf.slice(cut + 2);
      let event = "message";
      let data = "";
      for (const line of chunk.split("\n")) {
        if (line.startsWith("event: ")) event = line.slice(7);
        else if (line.startsWith("data: ")) data += line.slice(6);
      }
      if (!data) continue; // keep-alive comment
      const payload = JSON.parse(data);
      if (event === "delta") onDelta(payload.text);
      else if (event === "done") return { kind: "done", truncated: Boolean(payload.truncated) };
      else if (event === "refusal") return { kind: "refusal", message: payload.message };
      else if (event === "error") {
        throw new ChatError(payload.message || FALLBACK, payload.code === "busy" ? "busy" : "unavailable");
      }
    }
  }
  throw new ChatError("The reply was cut off. Please try again.", "cut_off"); // stream closed without an end event
}

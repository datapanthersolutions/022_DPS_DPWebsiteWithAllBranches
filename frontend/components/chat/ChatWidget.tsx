"use client";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, MessageCircle, RotateCcw, Sparkles, Square, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import Link from "@/components/TLink";
import { AI_ENABLED, ChatError, streamChat } from "@/lib/chat";
import { preloadSearch, type SearchHit } from "@/lib/site-search";
import { MAIN_CHIPS, asText, localReply, menuReply, type ChatMsg } from "./bot";
import ChatMarkdown from "./ChatMarkdown";

// Website chat assistant: launcher button + chat panel (full screen on phones).
//
// Without AI (the default) it answers from the site itself: topic menus, common questions and a search
// of every page (components/chat/bot.ts). With NEXT_PUBLIC_CHAT_AI=true, typed questions go to the AI
// API instead, and if that is unavailable the site answers are used as a fallback.
// The conversation lives in this browser tab only (sessionStorage); nothing is stored on a server.

const STORE_KEY = "dp-chat";
const MAX_CHARS = 2000; // matches CHAT_MAX_MESSAGE_CHARS on the API
const LOCAL_DELAY = 350; // ms; an instant reply feels abrupt
const GREETING = AI_ENABLED
  ? "Hi! I'm Data Panther's AI assistant. Pick a topic or ask me anything about our services, solutions and case studies."
  : "Hi! I'm Data Panther's assistant. Pick a topic or type a question, and I'll point you to the right page.";

const isStr = (v: unknown): v is string => typeof v === "string";

function load(): ChatMsg[] {
  try {
    const v = JSON.parse(sessionStorage.getItem(STORE_KEY) ?? "[]");
    if (!Array.isArray(v)) return [];
    return v.filter((m) => (m?.role === "user" || m?.role === "assistant") && isStr(m.content)).map((m) => ({
      role: m.role,
      content: m.content,
      chips: Array.isArray(m.chips) ? m.chips.filter(isStr) : undefined,
      results: Array.isArray(m.results)
        ? m.results.filter((r: SearchHit) => isStr(r?.title) && isStr(r.url) && isStr(r.kind) && isStr(r.snippet))
        : undefined,
    }));
  } catch { return []; }
}

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function ChatWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [pending, setPending] = useState<string | null>(null); // AI reply being streamed; null when idle
  const [thinking, setThinking] = useState(false); // working on a reply that isn't streamed
  const [error, setError] = useState<string | null>(null);
  const [input, setInput] = useState("");

  const abortRef = useRef<AbortController | null>(null);
  const convoRef = useRef(0); // bumped on reset, so a reply that finishes late can't restore the old chat
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const stickToBottom = useRef(true);
  const streaming = pending !== null;
  const busy = streaming || thinking;

  useEffect(() => { setMessages(load()); }, []);
  useEffect(() => {
    if (busy) return;
    try { sessionStorage.setItem(STORE_KEY, JSON.stringify(messages)); } catch {}
  }, [messages, busy]);
  useEffect(() => () => abortRef.current?.abort(), []);

  // Follow the reply as it arrives, unless the visitor scrolled up to read.
  useEffect(() => {
    const el = listRef.current;
    if (el && stickToBottom.current) el.scrollTop = el.scrollHeight;
  }, [messages, pending, thinking, error, open]);

  useEffect(() => {
    if (!open) return;
    preloadSearch();
    const t = setTimeout(() => inputRef.current?.focus(), 250);
    return () => clearTimeout(t);
  }, [open]);

  const close = useCallback(() => { setOpen(false); launcherRef.current?.focus(); }, []);

  // Reply from the site's own content (no AI).
  const answerLocally = useCallback(async (history: ChatMsg[], reply: Promise<ChatMsg>) => {
    const convo = convoRef.current;
    setThinking(true);
    try {
      const [msg] = await Promise.all([reply, wait(LOCAL_DELAY)]);
      if (convo === convoRef.current) setMessages([...history, msg]);
    } finally {
      if (convo === convoRef.current) setThinking(false);
    }
  }, []);

  // Reply from the AI API, streamed. Falls back to the site's content if the AI is unavailable.
  const answerWithAI = useCallback(async (history: ChatMsg[], question: string) => {
    const controller = new AbortController();
    const convo = convoRef.current;
    abortRef.current = controller;
    setPending("");
    let text = "";
    try {
      const end = await streamChat(history.map((m) => ({ role: m.role, content: asText(m) })), pathname, {
        signal: controller.signal,
        onDelta: (t) => { text += t; setPending(text); },
      });
      if (convo !== convoRef.current) return;
      if (end.kind === "refusal") text = end.message;
      else if (end.truncated) text += "…";
      setMessages([...history, { role: "assistant", content: text }]);
    } catch (e) {
      if (convo !== convoRef.current) return;
      if ((e as Error).name === "AbortError") {
        if (text) setMessages([...history, { role: "assistant", content: text }]); // keep what arrived
      } else if (e instanceof ChatError && e.code === "unavailable" && !text) {
        setPending(null);
        await answerLocally(history, localReply(question));
      } else {
        setError(e instanceof ChatError ? e.message : "Something went wrong. Please try again.");
      }
    } finally {
      if (abortRef.current === controller) abortRef.current = null;
      if (convo === convoRef.current) setPending(null);
    }
  }, [pathname, answerLocally]);

  const respond = useCallback((history: ChatMsg[], question: string) => {
    stickToBottom.current = true;
    setError(null);
    const menu = menuReply(question); // topic buttons are always answered locally: instant and free
    if (menu) return answerLocally(history, menu);
    return AI_ENABLED ? answerWithAI(history, question) : answerLocally(history, localReply(question));
  }, [answerLocally, answerWithAI]);

  const send = (raw: string) => {
    const text = raw.trim().slice(0, MAX_CHARS);
    if (!text || busy) return;
    const next: ChatMsg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    if (inputRef.current) inputRef.current.style.height = "";
    respond(next, text);
  };

  const reset = () => {
    convoRef.current += 1;
    abortRef.current?.abort();
    setMessages([]); setError(null); setInput(""); setPending(null); setThinking(false);
    inputRef.current?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) { e.preventDefault(); send(input); }
  };

  // On phones the panel covers the page, so close it when the visitor follows a link.
  const onNavigate = () => { if (window.matchMedia("(max-width: 639px)").matches) setOpen(false); };

  const last = messages.at(-1);
  const canRetry = !!error && last?.role === "user";
  const chips = busy || error ? [] : messages.length === 0 ? MAIN_CHIPS : last?.role === "assistant" ? last.chips ?? [] : [];

  return (
    <MotionConfig reducedMotion="user">
      <motion.button ref={launcherRef} type="button" onClick={() => (open ? close() : setOpen(true))}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"} aria-expanded={open} aria-controls="dp-chat-panel"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.7, type: "spring" }} whileHover={{ scale: 1.08 }}
        className="fixed bottom-5 right-[5.5rem] z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-electric to-violet text-white shadow-[0_15px_40px_-10px_rgba(0,26,255,0.7)]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={open ? "x" : "chat"} initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.18 }}>
            {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.section id="dp-chat-panel" role="dialog" aria-label="Chat with Data Panther's assistant"
            onKeyDown={(e) => { if (e.key === "Escape") close(); }} data-lenis-prevent
            initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[80] flex origin-bottom-right flex-col overflow-hidden bg-white sm:inset-auto sm:bottom-24 sm:right-5 sm:h-[min(640px,calc(100dvh-7.5rem))] sm:w-[400px] sm:rounded-3xl sm:border sm:border-line sm:shadow-[0_40px_80px_-30px_rgba(4,0,56,0.45)]">

            <header className="flex items-center gap-3 bg-night px-5 py-4 text-white">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-electric to-violet-soft">
                <Sparkles className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-[15px] font-semibold leading-tight">Data Panther Assistant</p>
                <p className="text-xs text-white/60">{AI_ENABLED ? "AI assistant · replies in seconds" : "Instant answers from our website"}</p>
              </div>
              <button type="button" onClick={reset} disabled={!messages.length && !error} aria-label="Start a new conversation" title="New conversation"
                className="grid h-9 w-9 place-items-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-30">
                <RotateCcw className="h-4 w-4" />
              </button>
              <button type="button" onClick={close} aria-label="Close chat" className="grid h-9 w-9 place-items-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </header>

            <div ref={listRef} role="log" aria-live="polite" aria-busy={busy}
              onScroll={(e) => { const el = e.currentTarget; stickToBottom.current = el.scrollHeight - el.scrollTop - el.clientHeight < 40; }}
              className="flex-1 space-y-4 overflow-y-auto overscroll-contain bg-paper-cool/60 px-4 py-5 text-[14.5px] leading-relaxed">
              <Bubble role="assistant"><p>{GREETING}</p></Bubble>
              {messages.map((m, i) => (
                <Bubble key={i} role={m.role}>
                  {m.role === "assistant" ? (
                    <>
                      <ChatMarkdown text={m.content} onNavigate={onNavigate} />
                      {!!m.results?.length && <Results hits={m.results} onNavigate={onNavigate} />}
                    </>
                  ) : <p className="whitespace-pre-wrap">{m.content}</p>}
                </Bubble>
              ))}
              {busy && (
                <Bubble role="assistant">
                  {pending ? <ChatMarkdown text={pending} onNavigate={onNavigate} /> : <Typing />}
                </Bubble>
              )}
              {error && (
                <div role="alert" className="rounded-2xl border border-ember/30 bg-ember/5 px-4 py-3 text-[13.5px] text-ink">
                  <p>{error}</p>
                  {canRetry && (
                    <button type="button" onClick={() => respond(messages, last.content)} className="mt-2 font-medium text-electric underline underline-offset-2">Try again</button>
                  )}
                </div>
              )}
              {chips.length > 0 && (
                <div className="flex flex-wrap gap-2 pl-1">
                  {chips.map((c) => (
                    <button key={c} type="button" onClick={() => send(c)}
                      className="rounded-full border border-electric/20 bg-white px-3.5 py-2 text-left text-[13px] text-electric transition-colors hover:border-electric hover:bg-electric hover:text-white">
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="border-t border-line bg-white px-4 pb-3 pt-3">
              <div className="flex items-end gap-2 rounded-2xl border border-line bg-white px-3 py-2 transition-shadow focus-within:border-electric focus-within:shadow-[0_0_0_4px_rgba(0,26,255,0.08)]">
                <label htmlFor="dp-chat-input" className="sr-only">Your message</label>
                <textarea id="dp-chat-input" ref={inputRef} rows={1} value={input} maxLength={MAX_CHARS} onKeyDown={onKeyDown}
                  onChange={(e) => { setInput(e.target.value); e.target.style.height = ""; e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`; }}
                  placeholder={AI_ENABLED ? "Ask about our services…" : "Type a question, e.g. healthcare AI"}
                  className="max-h-[120px] flex-1 resize-none bg-transparent py-1.5 text-[16px] outline-none placeholder:text-ink-soft/60 sm:text-[14.5px]" />
                {streaming ? (
                  <button type="button" onClick={() => abortRef.current?.abort()} aria-label="Stop the reply"
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-white transition-colors hover:bg-electric">
                    <Square className="h-3.5 w-3.5 fill-current" />
                  </button>
                ) : (
                  <button type="submit" disabled={!input.trim() || busy} aria-label="Send message"
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-electric text-white transition-colors hover:bg-ink disabled:bg-line disabled:text-ink-soft">
                    <ArrowUp className="h-4 w-4" />
                  </button>
                )}
              </div>
              <p className="mt-2 flex justify-between gap-3 text-[11px] leading-snug text-ink-soft">
                {AI_ENABLED ? (
                  <span>AI can make mistakes. Please don&apos;t share sensitive information. <Link href="/privacy/" onClick={onNavigate} className="underline">Privacy</Link></span>
                ) : (
                  <span>Answers come from our website. For anything else, <Link href="/ContactUs/" onClick={onNavigate} className="underline">contact the team</Link>.</span>
                )}
                {input.length > MAX_CHARS * 0.8 && <span className="shrink-0 tabular-nums">{input.length}/{MAX_CHARS}</span>}
              </p>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}

function Results({ hits, onNavigate }: { hits: SearchHit[]; onNavigate: () => void }) {
  return (
    <ul className="mt-3 space-y-2">
      {hits.map((h) => (
        <li key={h.url}>
          <Link href={h.url} onClick={onNavigate}
            className="group block rounded-xl border border-line bg-paper-cool/50 px-3.5 py-3 transition-colors hover:border-electric/40 hover:bg-electric-mist/40">
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-electric">{h.kind}</span>
            <span className="mt-0.5 flex items-start justify-between gap-2 font-medium leading-snug text-ink">
              {h.title}
              <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-ink-soft transition-colors group-hover:text-electric" aria-hidden />
            </span>
            <span className="mt-1 block text-[13px] leading-snug text-ink-soft">{h.snippet}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Bubble({ role, children }: { role: ChatMsg["role"]; children: React.ReactNode }) {
  return role === "user" ? (
    <div className="ml-10 flex justify-end">
      <div className="rounded-2xl rounded-br-md bg-electric px-4 py-2.5 text-white">{children}</div>
    </div>
  ) : (
    <div className="mr-6">
      <div className="rounded-2xl rounded-bl-md border border-line bg-white px-4 py-3 text-ink">{children}</div>
    </div>
  );
}

function Typing() {
  return (
    <span className="flex h-5 items-center gap-1" aria-label="Assistant is typing">
      {[0, 1, 2].map((i) => (
        <motion.span key={i} className="h-1.5 w-1.5 rounded-full bg-electric/60"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }} />
      ))}
    </span>
  );
}

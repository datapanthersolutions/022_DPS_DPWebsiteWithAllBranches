import { Fragment, type ReactNode } from "react";
import Link from "@/components/TLink";

// Renders the small Markdown subset the assistant is asked to use: paragraphs, bullet and numbered
// lists, **bold** and [links](/path/). Builds React elements (never raw HTML), so replies can't inject
// markup, and only site paths, http(s), mailto: and tel: links become clickable.

const INLINE = /(\*\*[^*\n]+\*\*|\[[^\]\n]+\]\([^)\s]+\))/g;

function SafeLink({ href, children, onNavigate }: { href: string; children: ReactNode; onNavigate?: () => void }) {
  const cls = "font-medium text-electric underline decoration-electric/30 underline-offset-2 hover:decoration-electric";
  if (href.startsWith("/") && !href.startsWith("//")) {
    return <Link href={href} className={cls} onClick={onNavigate}>{children}</Link>;
  }
  if (/^https?:\/\//i.test(href)) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  }
  if (/^(mailto|tel):/i.test(href)) return <a href={href} className={cls}>{children}</a>;
  return <>{children}</>;
}

function inline(text: string, onNavigate?: () => void): ReactNode[] {
  return text.split(INLINE).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={i} className="font-semibold text-ink">{inline(part.slice(2, -2), onNavigate)}</strong>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) return <SafeLink key={i} href={link[2]} onNavigate={onNavigate}>{link[1]}</SafeLink>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}

const BULLET = /^\s*[-*•]\s+/;
const NUMBER = /^\s*\d+[.)]\s+/;

export default function ChatMarkdown({ text, onNavigate }: { text: string; onNavigate?: () => void }) {
  const blocks: ReactNode[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;
  let para: string[] = [];

  const flushPara = () => {
    if (para.length) blocks.push(<p key={blocks.length}>{inline(para.join(" "), onNavigate)}</p>);
    para = [];
  };
  const flushList = () => {
    if (!list) return;
    const items = list.items.map((it, i) => <li key={i}>{inline(it, onNavigate)}</li>);
    blocks.push(list.ordered
      ? <ol key={blocks.length} className="list-decimal space-y-1 pl-5">{items}</ol>
      : <ul key={blocks.length} className="list-disc space-y-1 pl-5 marker:text-electric">{items}</ul>);
    list = null;
  };

  for (const raw of text.split("\n")) {
    const line = raw.replace(/^#{1,6}\s+/, ""); // headings aren't wanted in chat; show as text
    const ordered = NUMBER.test(line);
    if (BULLET.test(line) || ordered) {
      flushPara();
      if (!list || list.ordered !== ordered) { flushList(); list = { ordered, items: [] }; }
      list.items.push(line.replace(ordered ? NUMBER : BULLET, ""));
    } else if (!line.trim()) {
      flushPara(); flushList();
    } else if (list && /^\s{2,}/.test(raw)) {
      list.items[list.items.length - 1] += " " + line.trim(); // wrapped list item
    } else {
      flushList(); para.push(line.trim());
    }
  }
  flushPara(); flushList();
  return <div className="space-y-2.5">{blocks}</div>;
}

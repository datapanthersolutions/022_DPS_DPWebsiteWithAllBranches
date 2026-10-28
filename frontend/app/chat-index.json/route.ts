// Builds /chat-index.json: the site's text, which the chat assistant searches in the browser.
// Generated at build time from content/, so it is always in step with the pages.
import { pages, caseStudies, blogPosts, articles } from "@/content";
import { contact, mainNav } from "@/content/nav";
import { siteDocuments } from "@/lib/site-text";

export const dynamic = "force-static";

export function GET() {
  const docs = siteDocuments({ pages, caseStudies, blogPosts, articles, mainNav, contact }).map((d, id) => ({
    id,
    title: d.title,
    url: d.url,
    kind: d.kind,
    meta: d.meta,
    summary: d.summary,
    // "### " marks titles in the AI knowledge file; search just needs the words.
    text: d.lines.map((l) => l.replace(/^### /, "")).join("\n"),
  }));
  return Response.json(docs);
}

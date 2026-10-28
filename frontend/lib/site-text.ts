// Turns the site's content (content/) into plain-text documents, one per page.
// Used for the chat assistant's search index (app/chat-index.json) and, through
// scripts/export-knowledge.mjs, for the AI assistant's knowledge file. Keep imports type-only:
// the export script loads this file on its own.
import type { Page, CaseStudy, Post } from "@/content/types";

export type SiteDoc = {
  title: string;
  url: string;
  kind: string;      // "Service", "Industry solution", "Case study", "Blog post", "Insight article" or "Page"
  meta?: string;     // e.g. "AIOps · Technology · February 2026"
  summary: string;
  lines: string[];   // readable text; section titles start with "### "
};

type NavMenu = { href: string; menu?: readonly { href: string }[] };

export type Contact = { email: string; phone: string; whatsapp: string; office: string; hours: string };

// Fields that are layout, styling or media, not words a visitor reads.
const SKIP = new Set(["type", "image", "icon", "variant", "columns", "reverse", "dark", "featured", "slug",
  "kind", "level", "numbered", "tone", "placeholder", "button", "href", "readTime"]);

function flatten(value: unknown, key = "", out: string[] = []): string[] {
  if (typeof value === "string") {
    const text = value.replace(/\s+/g, " ").trim();
    if (text) out.push(key === "title" || key === "heading" ? `### ${text}` : text);
  } else if (Array.isArray(value)) {
    for (const v of value) flatten(v, key, out);
  } else if (value && typeof value === "object") {
    const o = value as Record<string, unknown>;
    if (typeof o.label === "string" && typeof o.href === "string") {
      out.push(`${o.label} (${o.href})`);
      return out;
    }
    for (const [k, v] of Object.entries(o)) if (!SKIP.has(k)) flatten(v, k, out);
  }
  return out;
}

export function siteDocuments(c: {
  pages: Page[]; caseStudies: CaseStudy[]; blogPosts: Post[]; articles: Post[];
  mainNav: readonly NavMenu[]; contact: Contact;
}): SiteDoc[] {
  const menuHrefs = (href: string) => new Set(c.mainNav.find((n) => n.href === href)?.menu?.map((m) => m.href));
  const services = menuHrefs("/Services/");
  const solutions = menuHrefs("/Solutions/");
  const docs: SiteDoc[] = [];

  for (const p of c.pages) {
    const url = `/${p.slug}/`;
    docs.push({
      title: p.title.replace(/ \| Data Panther$/, ""), url, summary: p.description,
      kind: services.has(url) ? "Service" : solutions.has(url) ? "Industry solution" : "Page",
      lines: flatten(p.sections),
    });
  }
  for (const s of c.caseStudies) {
    docs.push({
      title: s.title, url: `/case-studies/${s.slug}/`, kind: "Case study", summary: s.summary,
      meta: `${s.category} · ${s.industry} · ${s.date}`,
      lines: [s.subtitle, ...flatten(s.sections), "### Results & Impact", ...s.results.map((r) => `- ${r}`),
        `Technologies: ${s.technologies.join(", ")}`],
    });
  }
  for (const [list, prefix, kind] of [[c.blogPosts, "blog", "Blog post"], [c.articles, "article", "Insight article"]] as const) {
    for (const p of list) {
      docs.push({
        title: p.title, url: `/${prefix}/${p.slug}/`, kind, summary: p.excerpt,
        meta: [p.category, p.date].filter(Boolean).join(" · "),
        lines: [...flatten(p.body), ...flatten(p.extras ?? [])],
      });
    }
  }
  const ct = c.contact;
  docs.push({
    title: "Contact us", url: "/ContactUs/", kind: "Page",
    summary: "Get in touch with the Data Panther team about a project, a quote or a demo.",
    lines: [`Email: ${ct.email}`, `Phone and WhatsApp: ${ct.phone}`, `Office: ${ct.office}`, `Business hours: ${ct.hours}`,
      "Send us a message with the contact form and the team will get back to you."],
  });
  return docs;
}

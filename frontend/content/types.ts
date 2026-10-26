// Shared content schema. Every page's copy lives in /content as data and is
// rendered by the animated section components in /components/sections.

export type IconName =
  | "brain" | "chart" | "shield" | "cloud" | "cpu" | "database" | "layers" | "zap"
  | "users" | "target" | "compass" | "sparkles" | "bot" | "lock" | "globe" | "rocket"
  | "workflow" | "eye" | "heart" | "scale" | "check" | "code" | "message" | "server"
  | "trend" | "factory" | "truck" | "cart" | "bank" | "hospital" | "leaf" | "search"
  | "book" | "award" | "handshake" | "clock" | "lightbulb" | "settings" | "file"
  | "image" | "gauge" | "network" | "alert" | "dollar" | "refresh" | "puzzle";

export type Link = { label: string; href: string };

export type Item = {
  title: string;
  text?: string;          // paragraph under the title
  extra?: string[];       // extra paragraphs
  bullets?: string[];     // bullet list inside the card
  note?: string;          // small footnote, e.g. "Benefits: ..."
  image?: string;         // "/img/foo.webp"
  icon?: IconName;
  tag?: string;           // small label above title
  value?: string;         // big number for stats ("40%")
  href?: string;
};

export type Section =
  // Page-top hero. `title` may contain a line break "\n"; the 2nd line is accented.
  | { type: "hero"; eyebrow?: string; title: string; text?: string[]; cta?: Link; secondary?: Link; image?: string }
  // Text + image side-by-side.
  | { type: "split"; eyebrow?: string; title: string; text?: string[]; bullets?: string[]; image?: string;
      reverse?: boolean; cta?: Link; subTitle?: string; subText?: string[]; quote?: string }
  // Grid of cards. variant hints at styling.
  | { type: "cards"; eyebrow?: string; title: string; text?: string[]; items: Item[];
      variant?: "icon" | "image" | "numbered" | "bento" | "list"; columns?: 2 | 3 | 4; dark?: boolean;
      cta?: Link; image?: string }
  // Ordered process / timeline.
  | { type: "steps"; eyebrow?: string; title: string; text?: string[]; items: Item[]; dark?: boolean }
  // Big numbers.
  | { type: "stats"; eyebrow?: string; title?: string; text?: string[]; items: Item[]; dark?: boolean }
  // One or more titled checklists side by side (e.g. "Common challenges" / "The result").
  | { type: "checklist"; eyebrow?: string; title: string; text?: string[];
      columns: { title?: string; items: string[]; tone?: "neg" | "pos" }[]; note?: string }
  // Large pull-quote.
  | { type: "quote"; eyebrow?: string; title?: string; quote: string }
  // Dark immersive section: big stacked lines revealed on scroll.
  | { type: "statement"; eyebrow?: string; title?: string; lines: string[]; text?: string[] }
  // Long-form text (legal pages, etc.).
  | { type: "prose"; blocks: { heading?: string; paragraphs?: string[]; bullets?: string[] }[] }
  // Closing call to action.
  | { type: "cta"; eyebrow?: string; title: string; text?: string[]; primary?: Link; secondary?: Link }
  // Email capture (newsletter / talent community).
  | { type: "subscribe"; eyebrow?: string; title: string; text?: string[]; placeholder: string; button: string }
  // Highlighted notice box (e.g. careers fraud alert).
  | { type: "notice"; title: string; text: string };

export type Page = {
  slug: string;           // URL path without slashes, e.g. "AboutUs" or "GenerativeAI"
  title: string;          // <title> text
  description: string;    // meta description
  sections: Section[];
};

// ---- Case studies ----------------------------------------------------------
export type CaseStudy = {
  slug: string;
  category: string;       // e.g. "AIOps"
  date: string;           // e.g. "February 2026"
  readTime: string;       // e.g. "8 min read"
  title: string;
  subtitle: string;       // the "How Data Panther helped..." line
  summary: string;        // card summary paragraph
  image?: string;
  featured?: boolean;
  sections: { eyebrow: string; heading: string; paragraphs: string[] }[]; // Challenge, Solution
  results: string[];      // "Results & Impact" list (no leading numbers)
  industry: string;
  technologies: string[];
};

// ---- Blog posts & insight articles -----------------------------------------
export type Post = {
  slug: string;
  kind: "blog" | "article";
  category: string;
  date?: string;
  readTime?: string;
  title: string;
  excerpt: string;
  image?: string;
  featured?: boolean;
  tags?: string[];
  body: { heading?: string; level?: 2 | 3; paragraphs?: string[]; bullets?: string[]; numbered?: boolean }[];
  // anything else on the page that doesn't fit (key takeaways, CTA box text...)
  extras?: { heading: string; paragraphs?: string[]; bullets?: string[] }[];
};

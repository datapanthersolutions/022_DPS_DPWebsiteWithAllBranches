// Answers that need no AI: topic menus, common questions (contact, pricing, careers) and a search
// of the site's own pages for anything else. Everything here runs in the browser.
import { contact, mainNav } from "@/content/nav";
import { listSite, searchSite, type SearchHit } from "@/lib/site-search";

export type ChatMsg = {
  role: "user" | "assistant";
  content: string;          // Markdown (see ChatMarkdown)
  results?: SearchHit[];    // pages shown as cards under the text
  chips?: string[];         // quick replies, shown under the newest message only
};

export const MENU = {
  services: "Our services",
  industries: "Industries we serve",
  cases: "Case studies",
  careers: "Careers",
  contact: "Contact the team",
} as const;
export const MAIN_CHIPS: string[] = Object.values(MENU);

const say = (content: string, chips: string[] = MAIN_CHIPS, results?: SearchHit[]): ChatMsg =>
  ({ role: "assistant", content, chips, results });

const menuList = (href: string) =>
  (mainNav.find((n) => n.href === href) as { menu?: readonly { label: string; text: string; href: string }[] })?.menu ?? [];

const CONTACT_LINES = [
  "- **Contact form:** [Contact us](/ContactUs/)",
  `- **Email:** [${contact.email}](mailto:${contact.email})`,
  `- **Phone / WhatsApp:** [${contact.phone}](${contact.whatsapp})`,
  `- **Hours:** ${contact.hours}`,
  `- **Office:** ${contact.office}`,
].join("\n");

const replies = {
  greeting: () => say("Hello! What would you like to know? Pick a topic or type a question."),
  thanks: () => say("You're welcome! Anything else I can help with?"),
  menu: () => say("Here's what I can help with. Pick a topic or type a question."),
  contact: () => say(`The team will gladly help with quotes, demos and project questions:\n\n${CONTACT_LINES}`,
    [MENU.services, MENU.cases]),
  pricing: () => say("Every project is scoped to your goals, so pricing depends on what you need. " +
    `Tell the team a little about your project and they'll come back with a proposal:\n\n${CONTACT_LINES}`,
    [MENU.services, MENU.cases]),
  careers: () => say("We're always keen to meet talented engineers and consultants. See open roles and life at " +
    "Data Panther on our [Careers](/careers/) page. Please note: Data Panther does not charge any fees at any stage of recruitment.",
    [MENU.services, MENU.contact]),
  services: () => {
    const items = menuList("/Services/");
    return say(`We offer ${items.length} services:\n\n${items.map((i) => `- [${i.label}](${i.href}): ${i.text}`).join("\n")}` +
      "\n\nSee them all on the [Services](/Services/) page.", [MENU.industries, MENU.cases, MENU.contact]);
  },
  industries: () => {
    const items = menuList("/Solutions/");
    return say(`We build solutions for:\n\n${items.map((i) => `- [${i.label}](${i.href}): ${i.text}`).join("\n")}`,
      [MENU.services, MENU.cases, MENU.contact]);
  },
  cases: async () => {
    const all = await listSite("Case study");
    return say(`Here are some of our client projects:\n\n${all.slice(0, 6).map((c) => `- [${c.title}](${c.url})`).join("\n")}` +
      `\n\nBrowse all ${all.length} on the [Case studies](/case-studies/) page, or ask about an industry, ` +
      "for example \"healthcare case study\".", [MENU.services, MENU.contact]);
  },
};

type Intent = keyof typeof replies;

// Exact menu labels (quick-reply buttons).
const LABELS: Record<string, Intent> = Object.fromEntries(
  (Object.entries(MENU) as [Intent, string][]).map(([k, v]) => [v.toLowerCase(), k]),
);

// Common typed questions. Checked in order; anything else goes to search.
const PATTERNS: [Intent, RegExp][] = [
  ["greeting", /^(hi|hello|hey|hiya|good (morning|afternoon|evening)|namaste|hola)\b[\s!.,]*(there)?[\s!.]*$/],
  ["thanks", /^(thanks|thank you|thx|cheers|great|ok|okay|cool|got it)\b[\s\w!.]{0,20}$/],
  ["menu", /^(menu|help|start|options|main menu|topics|what can you do\??)$/],
  ["pricing", /\b(price|prices|pricing|how much (does|do|is|will|would|for)|what does it cost|cost of (your|a|an|the) (service|project|engagement)|quote|quotation)\b/],
  ["contact", /\b(contact|call (you|me)|phone|e-?mail|whatsapp|talk to|speak (to|with)|reach (you|out)|get in touch|book|meeting|demo|consultation|address|office|located|location)\b/],
  ["careers", /\b(jobs?|careers?|hiring|vacanc\w*|openings?|internships?|work (for|at|with) (you|data panther)|join (you|your team))\b/],
  ["services", /^(what|which) services\b|\bservices (do )?you (offer|provide)\b|^(our |your )?services\??$|^what do you (do|offer)\b/],
  ["industries", /^(what|which) (industries|sectors)\b|^(industries|sectors|solutions)( (you|we) serve)?\??$/],
  ["cases", /^((show me |any )?(some )?(case stud(y|ies)|examples|portfolio|projects|clients))\??$/],
];

const normalise = (text: string) => text.toLowerCase().replace(/[’']/g, "'").replace(/\s+/g, " ").trim();

/** Reply for a quick-reply button, or null if the text isn't one. */
export function menuReply(text: string): Promise<ChatMsg> | null {
  const intent = LABELS[normalise(text)];
  return intent ? Promise.resolve(replies[intent]()) : null;
}

/** Reply without AI: menus, common questions, then a search of the site. */
export async function localReply(text: string): Promise<ChatMsg> {
  const q = normalise(text);
  const intent = LABELS[q] ?? PATTERNS.find(([, re]) => re.test(q))?.[0];
  if (intent) return replies[intent]();

  let hits: SearchHit[];
  try {
    hits = await searchSite(q);
  } catch {
    return say(`Sorry, I can't search the site right now. The team can answer directly:\n\n${CONTACT_LINES}`);
  }
  if (!hits.length) {
    return say("I couldn't find that on our website. Try different words, pick a topic below, " +
      "or ask the team directly on the [Contact us](/ContactUs/) page.");
  }
  return say("Here's what I found on our website:", [MENU.contact, MENU.services], hits);
}

/** Text form of a message for the AI API, which takes plain text turns. */
export function asText(m: ChatMsg): string {
  const results = m.results?.map((r) => `- [${r.title}](${r.url}): ${r.snippet}`).join("\n");
  return results ? `${m.content}\n\n${results}` : m.content;
}

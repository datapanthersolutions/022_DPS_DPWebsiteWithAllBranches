// Searches the site's own content in the browser, for the chat assistant's answers.
// The index (/chat-index.json, built from content/) and the search library load on first use,
// so they add nothing to normal page loads.
import type MiniSearch from "minisearch";

export type IndexDoc = {
  id: number; title: string; url: string; kind: string; meta?: string; summary: string; text: string;
};
export type SearchHit = { title: string; url: string; kind: string; snippet: string };

// Words that say nothing about what the visitor is looking for.
const STOP = new Set(("a an and any are as at be can could do does for from get give have help how i " +
  "in is it me my of on or our panther please show some tell that the their them there this to us we what when " +
  "where which who why will with would you your about know more want need looking info information").split(" "));

let ready: Promise<{ engine: MiniSearch<IndexDoc>; docs: IndexDoc[] }> | null = null;

function load() {
  ready ??= (async () => {
    const [{ default: MiniSearchCtor }, res] = await Promise.all([import("minisearch"), fetch("/chat-index.json")]);
    if (!res.ok) throw new Error(`chat index: ${res.status}`);
    const docs: IndexDoc[] = await res.json();
    const engine = new MiniSearchCtor<IndexDoc>({
      fields: ["title", "summary", "text", "meta", "kind"],
      storeFields: ["kind"],
      processTerm: (term) => {
        const t = term.toLowerCase();
        return t.length < 2 || STOP.has(t) ? null : t;
      },
      searchOptions: {
        boost: { title: 4, summary: 2, meta: 1.5, kind: 2 },
        prefix: (t) => t.length > 3,
        fuzzy: (t) => (t.length > 4 ? 0.2 : false),
        // Service and industry pages are the best first stop for broad questions.
        boostDocument: (_id, _term, stored) => (stored?.kind === "Service" || stored?.kind === "Industry solution" ? 1.4 : 1),
      },
    });
    engine.addAll(docs);
    return { engine, docs };
  })().catch((e) => { ready = null; throw e; }); // let the next question try again
  return ready;
}

/** Starts downloading the index (call when the chat opens, so the first answer is instant). */
export function preloadSearch() { load().catch(() => {}); }

// The sentence that mentions the most matched words, else the page summary.
function snippet(doc: IndexDoc, terms: string[]): string {
  // Real sentences only: short lines are headlines, and lines ending in ")" are button links.
  const sentences = doc.text.split(/\n|(?<=[.!?])\s+/).filter((s) => s.length > 60 && !s.endsWith(")"));
  let best = "", bestScore = 0;
  for (const s of sentences) {
    const low = s.toLowerCase();
    const score = terms.reduce((n, t) => n + (low.includes(t) ? 1 : 0), 0);
    if (score > bestScore) { best = s; bestScore = score; }
  }
  const text = best || doc.summary;
  return text.length > 190 ? `${text.slice(0, 187).replace(/\s+\S*$/, "")}…` : text;
}

/** Best matching pages for a question, most relevant first. Empty when nothing matches well. */
export async function searchSite(query: string, limit = 3): Promise<SearchHit[]> {
  const { engine, docs } = await load();
  const results = engine.search(query);
  if (!results.length) return [];
  const top = results[0].score;
  return results
    .filter((r) => r.score >= top * 0.3) // drop weak matches that only share a common word
    .slice(0, limit)
    .map((r) => {
      const doc = docs[r.id as number];
      return { title: doc.title, url: doc.url, kind: doc.kind, snippet: snippet(doc, r.terms) };
    });
}

/** All documents of one kind, in site order (e.g. every case study). */
export async function listSite(kind: string): Promise<IndexDoc[]> {
  const { docs } = await load();
  return docs.filter((d) => d.kind === kind);
}

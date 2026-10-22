"use client";
import Link from "@/components/TLink";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search, Clock } from "lucide-react";
import type { Post } from "@/content/types";
import PostCover from "./PostCover";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

// Filterable, searchable grid of posts with animated re-layout.
export default function PostGrid({ posts, filters, placeholder, base }: { posts: Post[]; filters: string[]; placeholder: string; base: "blog" | "article" }) {
  const [f, setF] = useState(filters[0]);
  const [q, setQ] = useState("");
  const shown = useMemo(() => posts.filter((p) =>
    (f === filters[0] || p.category === f) &&
    (!q || `${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(q.toLowerCase()))), [posts, f, q, filters]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((x) => (
            <button key={x} onClick={() => setF(x)} className={cn("relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors", f === x ? "text-white" : "text-ink-soft hover:text-ink")}>
              {f === x && <motion.span layoutId={`pill-${base}`} className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
              <span className="relative">{x}</span>
            </button>
          ))}
        </div>
        <label className="flex items-center gap-3 rounded-full border border-line bg-white px-5 py-3 focus-within:border-electric lg:w-80">
          <Search className="h-4 w-4 text-ink-soft" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={placeholder} className="w-full bg-transparent text-[15px] outline-none" />
        </label>
      </div>
      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <motion.div key={p.slug} layout initial={{ opacity: 0, y: 30, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.6, ease, delay: i * 0.04 }}>
              <Link href={`/${base}/${p.slug}/`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_80px_-40px_rgba(0,26,255,0.4)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <PostCover image={p.image} title={p.title} index={i} label={p.image ? undefined : p.category} />
                  <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-ink transition-all duration-500 group-hover:rotate-45 group-hover:bg-electric group-hover:text-white"><ArrowUpRight className="h-4 w-4" /></span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3 text-xs">
                    {p.category && <span className="font-semibold uppercase tracking-[0.14em] text-electric">{p.category}</span>}
                    {p.date && <span className="text-ink-soft">{p.date}</span>}
                    {p.readTime && <span className="inline-flex items-center gap-1 text-ink-soft"><Clock className="h-3 w-3" />{p.readTime}</span>}
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight group-hover:text-electric">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{p.excerpt}</p>
                  <span className="mt-auto pt-6 text-sm font-medium">{base === "blog" ? "Read Article" : "Read More"} →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {shown.length === 0 && <p className="py-20 text-center text-ink-soft">No results.</p>}
    </div>
  );
}

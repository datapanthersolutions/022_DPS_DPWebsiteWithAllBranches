"use client";
import Link from "@/components/TLink";
import { ArrowUpRight, Clock } from "lucide-react";
import type { CaseStudy } from "@/content/types";
import TiltCard from "./motion/TiltCard";
import { cn } from "@/lib/utils";

const gradients = [
  "from-electric via-electric-2 to-violet", "from-night via-violet-deep to-electric", "from-mint-deep via-[#0E7A4A] to-electric",
  "from-[#842C09] via-ember to-violet", "from-violet-deep via-violet to-electric-soft", "from-night-3 via-electric to-mint",
];

export default function CaseCard({ c, index = 0, large, blurb }: { c: CaseStudy; index?: number; large?: boolean; blurb?: string }) {
  return (
    <TiltCard className="h-full rounded-[2rem]">
      <Link href={`/case-studies/${c.slug}/`} className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-line bg-white transition-shadow duration-500 hover:shadow-[0_40px_80px_-40px_rgba(0,26,255,0.4)]">
        <div className={cn("relative overflow-hidden", large ? "aspect-[16/11]" : "aspect-[16/10]")}>
          {c.image ? (
            <img src={c.image} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
          ) : (
            <div className={cn("relative h-full w-full bg-gradient-to-br", gradients[index % gradients.length])}>
              <div className="grid-bg-dark absolute inset-0 opacity-70" />
              <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full border border-white/20 transition-transform duration-700 group-hover:scale-125" />
              <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-110" />
              <span className="absolute bottom-6 left-6 font-display text-2xl font-semibold text-white/90">{c.category}</span>
            </div>
          )}
          <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-electric backdrop-blur">{c.category}</span>
          <span className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-ink transition-all duration-500 group-hover:rotate-45 group-hover:bg-electric group-hover:text-white">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
        <div className="flex flex-1 flex-col p-7">
          <span className="flex items-center gap-2 text-[13px] text-ink-soft"><Clock className="h-3.5 w-3.5" />{[c.date, c.readTime].filter(Boolean).join(" · ")}</span>
          <h3 className={cn("mt-3 font-display font-semibold tracking-tight transition-colors group-hover:text-electric", large ? "text-2xl" : "text-xl")}>{c.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{blurb ?? c.summary}</p>
          <span className="mt-auto pt-6 text-sm font-medium text-ink">Read Case Study →</span>
        </div>
      </Link>
    </TiltCard>
  );
}

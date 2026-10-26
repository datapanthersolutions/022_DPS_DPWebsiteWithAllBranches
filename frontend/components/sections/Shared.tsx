"use client";
import Link from "@/components/TLink";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Link as L } from "@/content/types";
import Magnetic from "../motion/Magnetic";
import SplitHeading from "../motion/SplitHeading";
import { Reveal } from "../motion/Reveal";
import { cn } from "@/lib/utils";

export function Btn({ link, variant = "primary", className }: { link: L; variant?: "primary" | "ghost" | "light" | "outline-light" | "electric"; className?: string }) {
  const ext = link.href.startsWith("http");
  return (
    <Magnetic>
      <Link href={link.href} target={ext ? "_blank" : undefined} className={cn("btn group", `btn-${variant}`, className)}>
        <span>{link.label}</span>
        <span className="relative h-4 w-4 overflow-hidden">
          <ArrowUpRight className="absolute inset-0 h-4 w-4 transition-transform duration-500 group-hover:-translate-y-5 group-hover:translate-x-5" />
          <ArrowUpRight className="absolute inset-0 h-4 w-4 -translate-x-5 translate-y-5 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
        </span>
      </Link>
    </Magnetic>
  );
}

export function TextLink({ href, children, light }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <Link href={href} className={cn("group inline-flex items-center gap-2 font-medium", light ? "text-white" : "text-ink")}>
      <span className="relative">{children}<span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" /></span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

// Eyebrow + split-word headline + intro paragraphs.
// `wide` puts the intro text in a right-hand column so the header fills the row.
export function SectionHead({ eyebrow, title, text, center, className, dark, wide }:
  { eyebrow?: string; title?: string; text?: string[]; center?: boolean; className?: string; dark?: boolean; wide?: boolean }) {
  const accent = dark ? "accent-serif text-electric-soft" : "accent-serif text-electric";
  if (wide && text && text.length > 0 && !center) {
    return (
      <div className={cn("grid gap-8 lg:grid-cols-12 lg:items-end", className)}>
        <div className="lg:col-span-7">
          {eyebrow && <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>}
          {title && <SplitHeading text={title} className={cn("h-section mt-5", dark && "text-white")} accentClass={accent} />}
        </div>
        <div className="lg:col-span-5">
          {text.map((t, i) => <Reveal key={i} delay={0.1 + i * 0.05}><p className={cn("lead", i > 0 && "mt-4")}>{t}</p></Reveal>)}
        </div>
      </div>
    );
  }
  return (
    <div className={cn(center ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      {eyebrow && <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>}
      {title && <SplitHeading text={title} className={cn("h-section mt-5", dark && "text-white")} accentClass={accent} />}
      {text?.map((t, i) => <Reveal key={i} delay={0.1 + i * 0.05}><p className="lead mt-5">{t}</p></Reveal>)}
    </div>
  );
}

export function Section({ children, className, dark, id, tone = "white" }:
  { children: React.ReactNode; className?: string; dark?: boolean; id?: string; tone?: "white" | "warm" | "cool" | "mint" }) {
  const bg = dark ? "bg-night text-white on-dark" : { white: "bg-white", warm: "bg-paper-warm", cool: "bg-paper-cool", mint: "bg-mint-bg" }[tone];
  return (
    <section id={id} className={cn("relative overflow-clip py-20 lg:py-24", bg, className)}>
      {dark && <>
        <div aria-hidden className="grid-bg-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div aria-hidden className="absolute -right-32 top-0 h-[480px] w-[480px] rounded-full bg-electric/30 blur-[140px]" />
        <div aria-hidden className="absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-violet/30 blur-[140px]" />
      </>}
      <div className="container-site relative">{children}</div>
    </section>
  );
}

// Spans for a grid so every row is full: returns a class per item.
// 3 columns: 4 -> [2,1][1,2]... kept simple: pad the first (and last) item wider.
export function fillSpans(n: number, cols: 2 | 3 | 4): string[] {
  const out = Array(n).fill("");
  const rem = n % cols;
  if (rem === 0) return out;
  if (cols === 3) {
    if (rem === 2) { out[0] = "lg:col-span-2"; }                          // 5 -> 2+1 / 1+1+1
    if (rem === 1) { out[0] = "lg:col-span-2"; out[n - 1] = "lg:col-span-2"; } // 7 -> 2+1 / 1+1+1 / 1+2
  }
  if (cols === 4) {
    if (rem === 1) out[n - 1] = "lg:col-span-4";
    if (rem === 2) { out[n - 2] = "lg:col-span-2"; out[n - 1] = "lg:col-span-2"; }
    if (rem === 3) out[0] = "lg:col-span-2";
  }
  if (cols === 2 && rem === 1) out[n - 1] = "md:col-span-2";
  return out;
}

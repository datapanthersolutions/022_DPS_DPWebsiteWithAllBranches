"use client";
import Link from "@/components/TLink";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Linkedin } from "lucide-react";
import { footerCols, legalLinks, linkedin, copyright } from "@/content/nav";
import Logo from "./Logo";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["12%", "0%"]);
  const o = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <footer ref={ref} className="on-dark noise relative overflow-hidden bg-night text-white">
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-electric/40 blur-[140px]" />
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-violet/40 blur-[140px]" />
      <div className="grid-bg-dark absolute inset-0 opacity-50" aria-hidden />
      <div className="container-site relative pt-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-8 text-sm font-medium uppercase tracking-[0.18em] text-white/50">Stay Connected</p>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="mt-4 inline-grid h-11 w-11 place-items-center rounded-full border border-white/15 transition-colors hover:border-electric hover:bg-electric">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-8">
            {footerCols.map((col, i) => (
              <ul key={i} className="space-y-4">
                {col.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="group inline-flex items-center gap-1.5 text-[13px] font-medium tracking-[0.12em] text-white/75 transition-colors hover:text-white">
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <motion.div style={{ x, opacity: o }} aria-hidden
          className="select-none whitespace-nowrap py-6 font-display text-[18vw] font-semibold leading-[0.85] tracking-[-0.06em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.18)] lg:text-[15vw]">
          Data Panther
        </motion.div>
        <div className="flex flex-col gap-6 border-t border-white/10 py-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-3xl text-[12px] leading-relaxed text-white/50">{copyright}</p>
          <div className="flex flex-wrap gap-5">
            {legalLinks.map((l) => <Link key={l.label} href={l.href} className="text-[13px] text-white/60 hover:text-white">{l.label}</Link>)}
          </div>
        </div>
      </div>
    </footer>
  );
}

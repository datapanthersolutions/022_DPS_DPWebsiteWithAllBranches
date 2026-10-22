"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { CaseStudy } from "@/content/types";
import SplitHeading from "./motion/SplitHeading";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";
import { Btn, Section, SectionHead, TextLink } from "./sections/Shared";
import CaseCard from "./CaseCard";
import { pad } from "@/lib/utils";
import dynamic from "next/dynamic";
import type { ObjectVariant } from "./three/HeroObject";

const HeroObject = dynamic(() => import("./three/HeroObject"), { ssr: false });
const byCategory: Record<string, ObjectVariant> = {
  "AIOps": "blocks", "Generative AI": "blob", "Data Modernisation": "blocks", "Predictive Analytics": "crystal",
  "Cloud Migration": "orbit", "Cybersecurity": "shield", "Natural Language Processing": "knot", "Conversational AI": "orbit",
  "Machine Learning": "rings", "Operational AI": "orbit",
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function CaseStudyView({ c, more, back }: { c: CaseStudy; more: CaseStudy[]; back: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  return (
    <>
      <section ref={ref} className="on-dark noise relative overflow-hidden bg-night pb-24 pt-36 text-white sm:pt-44">
        {c.image && <motion.img style={{ y }} src={c.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-night/40 via-night/80 to-night" />
        <div aria-hidden className="absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-electric/40 blur-[140px]" />
        <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4, ease, delay: 0.4 }}
          className="pointer-events-none absolute -right-10 top-1/2 hidden h-[560px] w-[560px] -translate-y-1/2 lg:block xl:right-8">
          <HeroObject variant={byCategory[c.category] ?? "knot"} className="h-full w-full" />
        </motion.div>
        <div className="container-site relative">
          {back}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7, ease }} className="mt-10 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-electric px-3 py-1.5 font-semibold">{c.category}</span>
            <span className="text-white/60">{c.date} · {c.readTime}</span>
          </motion.div>
          <SplitHeading as="h1" text={c.title} immediate delay={0.5} className="h-display mt-6 max-w-4xl text-4xl sm:text-6xl lg:text-[4.2rem]" />
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8, ease }} className="mt-6 max-w-2xl font-serif text-2xl italic text-electric-soft sm:text-3xl">{c.subtitle}</motion.p>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8, ease }} className="mt-6 max-w-2xl text-lg text-white/70">{c.summary}</motion.p>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="container-site grid gap-16 lg:grid-cols-12">
          <div className="space-y-20 lg:col-span-8">
            {c.sections.map((s) => (
              <div key={s.heading}>
                <Reveal><span className="eyebrow">{s.eyebrow}</span></Reveal>
                <SplitHeading text={s.heading} className="h-section mt-4" />
                {s.paragraphs.map((p) => <Reveal key={p}><p className="mt-6 text-[17px] leading-[1.8] text-ink-soft">{p}</p></Reveal>)}
              </div>
            ))}
            <div>
              <Reveal><span className="eyebrow">THE OUTCOME</span></Reveal>
              <SplitHeading text="Results & Impact" className="h-section mt-4" />
              <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
                {c.results.map((r, i) => (
                  <StaggerItem key={r} className="group rounded-3xl border border-line bg-paper-cool p-6 transition-colors duration-500 hover:border-electric hover:bg-electric hover:text-white">
                    <span className="font-display text-sm font-semibold text-electric group-hover:text-white/70">{pad(i + 1)}</span>
                    <p className="mt-3 text-[15.5px] leading-relaxed">{r}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
          <aside className="lg:col-span-4">
            <div className="space-y-5 lg:sticky lg:top-28">
              <Reveal className="rounded-3xl border border-line p-7">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">INDUSTRY</h3>
                <p className="mt-3 font-display text-xl font-semibold">{c.industry}</p>
                <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">Technologies Used</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.technologies.map((t) => <span key={t} className="rounded-full border border-line bg-paper-cool px-3 py-1.5 text-[13px] transition-colors hover:border-electric hover:text-electric">{t}</span>)}
                </div>
              </Reveal>
              <Reveal delay={0.1} className="on-dark relative overflow-hidden rounded-3xl bg-night p-7 text-white">
                <div aria-hidden className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-electric blur-3xl opacity-60" />
                <h3 className="relative font-display text-2xl font-semibold">Ready to see similar results?</h3>
                <p className="relative mt-3 text-white/70">Our team of experts is ready to help you achieve measurable business impact through AI and data modernisation.</p>
                <div className="relative mt-6"><Btn link={{ label: "Get in Touch", href: "/ContactUs/" }} variant="light" /></div>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      <Section tone="cool">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHead title="Explore More Case Studies" />
          <TextLink href="/case-studies/">View All Case Studies</TextLink>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {more.map((m, i) => <CaseCard key={m.slug} c={m} index={i} blurb={m.subtitle} />)}
        </div>
      </Section>
    </>
  );
}

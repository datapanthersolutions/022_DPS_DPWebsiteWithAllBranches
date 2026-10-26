"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import { Check, X, Quote as QuoteIcon, ShieldAlert } from "lucide-react";
import type { Section as S, Item } from "@/content/types";
import { Section, SectionHead, Btn, fillSpans } from "./Shared";
import MarqueeBand from "../motion/MarqueeBand";
import { Reveal, Stagger, StaggerItem } from "../motion/Reveal";
import SplitHeading from "../motion/SplitHeading";
import ScrubText from "../motion/ScrubText";
import ParallaxImage from "../motion/ParallaxImage";
import TiltCard from "../motion/TiltCard";
import Counter from "../motion/Counter";
import Icon from "../Icon";
import { gsap } from "@/lib/gsap";
import dynamic from "next/dynamic";
import type { ObjectVariant } from "../three/HeroObject";
import { heroObject, sectionObject } from "@/lib/objects";
import { cn, pad } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;
const tones = ["white", "cool", "white", "warm"] as const;

// ---------------------------------------------------------------- 3D stage
const HeroObject = dynamic(() => import("../three/HeroObject"), { ssr: false });

function Stage({ variant, image, label, light, className }: { variant: ObjectVariant; image?: string; label?: string; light?: boolean; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const chipY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div initial={{ opacity: 0, scale: 0.94, y: 30 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.1, ease }}
        className={cn("relative h-full overflow-hidden rounded-[2.25rem]", light ? "border border-line bg-paper-cool" : "on-dark bg-night")}>
        <div aria-hidden className={cn("absolute inset-0", light ? "grid-bg" : "grid-bg-dark")} />
        {!light && <>
          <div aria-hidden className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-electric/60 blur-[90px]" />
          <div aria-hidden className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-violet/50 blur-[90px]" />
        </>}
        {light && <div aria-hidden className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/15 blur-[70px]" />}
        <div aria-hidden className={cn("absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 animate-spinslow rounded-full border border-dashed", light ? "border-ink/10" : "border-white/10")} />
        <HeroObject variant={variant} tone={light ? "light" : "dark"} className="absolute inset-0" />
      </motion.div>
      {image && (
        <motion.div style={{ y: imgY }} className="absolute -bottom-6 left-3 w-[40%] sm:-left-8">
          <motion.div initial={{ opacity: 0, rotate: -12, y: 60 }} whileInView={{ opacity: 1, rotate: -5, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, ease, delay: 0.3 }}
            className="aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white shadow-[0_30px_60px_-20px_rgba(4,0,56,0.5)]">
            <img src={image} alt="" className="h-full w-full object-cover" />
          </motion.div>
        </motion.div>
      )}
      {label && (
        <motion.div style={{ y: chipY }} className="absolute -right-2 top-8 sm:-right-5">
          <motion.span initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease, delay: 0.5 }}
            className="flex items-center gap-2 rounded-full border border-line bg-white/90 px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink shadow-xl backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-mint" />{label}
          </motion.span>
        </motion.div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------- Hero
function Hero({ s, slug }: { s: Extract<S, { type: "hero" }>; slug?: string }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const plain = slug === "legal" || slug === "privacy" || slug === "cookies";
  return (
    <section ref={ref} className="relative overflow-hidden bg-white pb-16 pt-28 lg:pb-20 lg:pt-32">
      <div aria-hidden className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
      <motion.div aria-hidden style={{ y }} className="absolute -top-40 left-[20%] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-electric/20 via-electric-soft/15 to-violet-soft/25 blur-[100px]" />
      <div className="container-site relative">
        <div className={cn("grid items-center gap-12 lg:gap-16", !plain && "lg:min-h-[560px] lg:grid-cols-12")}>
          <motion.div style={{ y: textY, opacity: fade }} className={plain ? "max-w-4xl" : "lg:col-span-6"}>
            {s.eyebrow && <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, ease, duration: 0.8 }} className="eyebrow">{s.eyebrow}</motion.span>}
            <SplitHeading as="h1" text={s.title} immediate delay={0.45} className="h-display mt-6 text-[2.5rem] sm:text-6xl lg:text-[4.1rem] xl:text-[4.5rem]" />
            {s.text?.map((t, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.1, ease, duration: 0.9 }} className="lead mt-6 max-w-xl">{t}</motion.p>
            ))}
            {(s.cta || s.secondary) && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, ease, duration: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {s.cta && <Btn link={s.cta} />}
                {s.secondary && <Btn link={s.secondary} variant="ghost" />}
              </motion.div>
            )}
          </motion.div>
          {!plain && <Stage variant={heroObject(slug)} image={s.image} label={s.eyebrow} className="h-[380px] sm:h-[460px] lg:col-span-6 lg:h-[580px]" />}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------- Split
function Split({ s, i, slug, nth }: { s: Extract<S, { type: "split" }>; i: number; slug?: string; nth: number }) {
  const reverse = s.image ? s.reverse : nth % 2 === 1;
  return (
    <Section tone={tones[i % 4]}>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className={cn(reverse && "lg:order-2")}>
          <SectionHead eyebrow={s.eyebrow} title={s.title} text={s.text} />
          {s.quote && <Reveal><blockquote className="mt-8 border-l-2 border-electric pl-6 font-serif text-2xl italic text-ink">{s.quote}</blockquote></Reveal>}
          {s.bullets && (
            <Stagger className={cn("mt-8 grid gap-3", s.bullets.length > 4 && "sm:grid-cols-2")}>
              {s.bullets.map((b) => (
                <StaggerItem key={b} className="group flex items-start gap-3 rounded-2xl border border-line bg-white/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-electric/40 hover:shadow-lg">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-electric/10 text-electric transition-colors group-hover:bg-electric group-hover:text-white"><Check className="h-3.5 w-3.5" /></span>
                  <span className="text-[15px] text-ink">{b}</span>
                </StaggerItem>
              ))}
            </Stagger>
          )}
          {s.subTitle && (
            <Reveal className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-electric to-violet p-8 text-white">
              <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 animate-spinslow rounded-full border border-dashed border-white/30" />
              <h3 className="relative font-display text-2xl font-semibold">{s.subTitle}</h3>
              {s.subText?.map((t) => <p key={t} className="relative mt-3 text-white/80">{t}</p>)}
            </Reveal>
          )}
          {s.cta && <Reveal className="mt-10"><Btn link={s.cta} /></Reveal>}
        </div>
        {s.image
          ? <ParallaxImage src={s.image} alt={s.title} className={cn("aspect-[5/4] w-full", reverse && "lg:order-1")} />
          : <Stage variant={sectionObject(slug, nth)} light className={cn("h-[340px] sm:h-[420px] lg:h-[520px]", reverse && "lg:order-1")} />}
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------- Cards
function CardBody({ it, idx, variant, dark }: { it: Item; idx: number; variant?: string; dark?: boolean }) {
  return (
    <>
      {it.image && variant === "image" ? (
        <div className="relative -mx-px -mt-px mb-6 aspect-[16/10] overflow-hidden rounded-t-3xl">
          <img src={it.image} alt={it.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      ) : it.image ? (
        <img src={it.image} alt="" className="mb-6 h-14 w-14 rounded-2xl object-cover" loading="lazy" />
      ) : variant === "numbered" || it.value ? (
        <span className={cn("mb-6 block font-display text-5xl font-semibold tracking-tight", dark ? "text-white/20" : "text-electric/20", "transition-colors duration-500 group-hover:text-electric")}>{it.value ?? pad(idx + 1)}</span>
      ) : (
        <span className={cn("mb-6 grid h-12 w-12 place-items-center rounded-2xl transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110",
          dark ? "bg-white/10 text-electric-soft group-hover:bg-electric group-hover:text-white" : "bg-electric/10 text-electric group-hover:bg-electric group-hover:text-white")}>
          <Icon name={it.icon} index={idx} />
        </span>
      )}
      <div className={cn(variant === "image" && "px-7 pb-7")}>
        {it.tag && <span className={cn("mb-2 block text-xs font-semibold uppercase tracking-[0.16em]", dark ? "text-electric-soft" : "text-electric")}>{it.tag}</span>}
        <h3 className={cn("font-display text-xl font-semibold tracking-tight", dark && "text-white")}>{it.title}</h3>
        {it.text && <p className={cn("mt-3 text-[15px] leading-relaxed", dark ? "text-white/65" : "text-ink-soft", variant === "list" && "font-medium text-electric")}>{it.text}</p>}
        {it.extra?.map((e) => <p key={e} className={cn("mt-3 text-[15px] leading-relaxed", dark ? "text-white/65" : "text-ink-soft")}>{e}</p>)}
        {it.bullets && (
          <ul className="mt-5 space-y-2">
            {it.bullets.map((b, bi) => (
              <li key={bi} className={cn("flex items-start gap-2.5 text-[14.5px]", dark ? "text-white/80" : "text-ink")}>
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />{b}
              </li>
            ))}
          </ul>
        )}
        {it.note && <p className={cn("mt-5 rounded-2xl p-4 text-[14px] leading-relaxed", dark ? "bg-white/5 text-white/70" : "bg-mint-bg text-mint-deep")}>{it.note}</p>}
      </div>
    </>
  );
}

function Cards({ s, i }: { s: Extract<S, { type: "cards" }>; i: number }) {
  const cols = s.columns ?? (s.items.length === 4 ? 4 : s.items.length % 3 === 0 ? 3 : s.items.length <= 2 ? 2 : 3);
  const grid = { 2: "md:grid-cols-2", 3: "md:grid-cols-2 lg:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4" }[cols];
  const list = s.variant === "list";
  const spans = fillSpans(s.items.length, list ? 2 : cols);
  return (
    <Section dark={s.dark} tone={tones[i % 4]}>
      <div className={cn("grid gap-10", s.image && "lg:grid-cols-2 lg:items-center")}>
        <div>
          <SectionHead eyebrow={s.eyebrow} title={s.title} text={s.text} dark={s.dark} wide={!s.image} />
          {s.cta && <Reveal className="mt-8"><Btn link={s.cta} variant={s.dark ? "light" : "primary"} /></Reveal>}
        </div>
        {s.image && <ParallaxImage src={s.image} alt={s.title} className="aspect-[16/10] w-full" />}
      </div>
      <Stagger className={cn("mt-14 grid gap-5", list ? "lg:grid-cols-2" : grid)}>
        {s.items.map((it, idx) => (
          <StaggerItem key={it.title + idx} className={spans[idx]}>
            <TiltCard className="h-full rounded-3xl" glow={s.dark ? "rgba(93,143,255,0.18)" : "rgba(0,26,255,0.10)"}>
              <div className={cn("card card-hover h-full overflow-hidden", s.variant === "image" ? "p-0" : "p-7 sm:p-8",
                s.dark && "border-white/10 bg-white/[0.04] backdrop-blur")}>
                <CardBody it={it} idx={idx} variant={s.variant} dark={s.dark} />
              </div>
            </TiltCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

// ---------------------------------------------------------------- Steps (scroll-drawn timeline)
function Steps({ s, i }: { s: Extract<S, { type: "steps" }>; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const h = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const short = s.items.every((it) => !it.bullets && (it.text ?? "").length < 90);
  if (short && s.items.length <= 6) return <StepsRow s={s} i={i} />;
  return (
    <Section dark={s.dark} tone={tones[i % 4]}>
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32"><SectionHead eyebrow={s.eyebrow} title={s.title} text={s.text} dark={s.dark} /></div>
        </div>
        <div ref={ref} className="relative lg:col-span-7">
          <div className={cn("absolute bottom-0 left-[27px] top-0 w-px", s.dark ? "bg-white/10" : "bg-line")} />
          <motion.div style={{ height: h }} className="absolute left-[27px] top-0 w-px bg-gradient-to-b from-electric via-electric-soft to-violet-soft" />
          <div className="space-y-6">
            {s.items.map((it, idx) => (
              <Reveal key={it.title + idx} className="relative flex gap-6">
                <span className={cn("relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border font-display text-sm font-semibold",
                  s.dark ? "border-white/15 bg-night text-white" : "border-line bg-white text-electric")}>
                  {it.tag ?? it.value ?? pad(idx + 1)}
                </span>
                <div className={cn("flex-1 rounded-3xl border p-6 sm:p-7", s.dark ? "border-white/10 bg-white/[0.04]" : "border-line bg-white")}>
                  <h3 className={cn("font-display text-xl font-semibold", s.dark && "text-white")}>{it.title}</h3>
                  {it.text && <p className={cn("mt-2 text-[15px] leading-relaxed", s.dark ? "text-white/65" : "text-ink-soft")}>{it.text}</p>}
                  {it.bullets && <ul className="mt-3 space-y-1.5">{it.bullets.map((b) => <li key={b} className={cn("text-[14.5px]", s.dark ? "text-white/75" : "text-ink")}>— {b}</li>)}</ul>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// Short steps: a horizontal process with a line that draws across as you scroll.
function StepsRow({ s, i }: { s: Extract<S, { type: "steps" }>; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const w = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const n = s.items.length;
  const cols = { 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5", 6: "lg:grid-cols-6" }[n] ?? "lg:grid-cols-4";
  const dark = s.dark;
  return (
    <Section dark={dark} tone={tones[i % 4]}>
      <SectionHead eyebrow={s.eyebrow} title={s.title} text={s.text} dark={dark} wide />
      <div ref={ref} className="relative mt-16">
        <div className={cn("absolute left-0 right-0 top-7 hidden h-px lg:block", dark ? "bg-white/10" : "bg-line")} />
        <motion.div style={{ width: w }} className="absolute left-0 top-7 hidden h-px bg-gradient-to-r from-electric via-electric-soft to-violet-soft lg:block" />
        <div className={cn("grid gap-6 sm:grid-cols-2", cols)}>
          {s.items.map((it, idx) => (
            <motion.div key={it.title + idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, ease, delay: idx * 0.12 }} className="group relative">
              <span className={cn("relative z-10 hidden h-14 w-14 place-items-center rounded-full border font-display text-sm font-semibold transition-all duration-500 group-hover:scale-110 group-hover:border-electric group-hover:bg-electric group-hover:text-white lg:grid",
                dark ? "border-white/15 bg-night text-white" : "border-line bg-white text-electric")}>
                {it.tag ?? it.value ?? pad(idx + 1)}
              </span>
              <div className={cn("rounded-3xl border p-6 transition-all duration-500 group-hover:-translate-y-1 lg:mt-6", dark ? "border-white/10 bg-white/[0.04] group-hover:border-electric-soft/40" : "border-line bg-white group-hover:border-electric/30 group-hover:shadow-[0_30px_60px_-30px_rgba(0,26,255,0.35)]")}>
                <span className={cn("block font-display text-6xl font-semibold leading-none tracking-tight", dark ? "text-white/10" : "text-electric/10")}>{pad(idx + 1)}</span>
                <h3 className={cn("mt-4 font-display text-xl font-semibold", dark && "text-white")}>{it.title}</h3>
                {it.text && <p className={cn("mt-2 text-[15px] leading-relaxed", dark ? "text-white/65" : "text-ink-soft")}>{it.text}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------- Stats
function Stats({ s }: { s: Extract<S, { type: "stats" }> }) {
  const dark = s.dark ?? true;
  return (
    <Section dark={dark} tone="cool">
      {(s.title || s.eyebrow) && <SectionHead eyebrow={s.eyebrow} title={s.title} text={s.text} dark={dark} />}
      <Stagger className={cn("grid gap-px overflow-hidden rounded-3xl sm:grid-cols-2", s.items.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3", (s.title || s.eyebrow) && "mt-16", dark ? "bg-white/10" : "bg-line")}>
        {s.items.map((it) => (
          <StaggerItem key={it.title} className={cn("group p-8 sm:p-10", dark ? "bg-night" : "bg-white")}>
            <div className={cn("font-display text-5xl font-semibold tracking-tight sm:text-6xl", dark ? "text-white" : "text-ink")}>
              <Counter value={it.value ?? ""} />
            </div>
            <div className="mt-4 h-px w-10 bg-electric transition-all duration-500 group-hover:w-20" />
            <p className={cn("mt-4 text-[13px] font-medium uppercase tracking-[0.14em]", dark ? "text-white/60" : "text-ink-soft")}>{it.title}</p>
            {it.text && <p className={cn("mt-2 text-sm", dark ? "text-white/50" : "text-ink-soft")}>{it.text}</p>}
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

// ---------------------------------------------------------------- Checklist
function Checklist({ s, i }: { s: Extract<S, { type: "checklist" }>; i: number }) {
  return (
    <Section tone={i % 2 ? "warm" : "white"}>
      <SectionHead eyebrow={s.eyebrow} title={s.title} text={s.text} wide />
      <div className={cn("mt-12 grid gap-5", s.columns.length > 1 && "lg:grid-cols-2", s.columns.length > 2 && "xl:grid-cols-3")}>
        {s.columns.map((c, ci) => (
          <Reveal key={ci} delay={ci * 0.1}
            className={cn("rounded-3xl border p-7 sm:p-9", c.tone === "neg" ? "border-ember/20 bg-[#FFF7F1]" : c.tone === "pos" ? "border-mint/25 bg-mint-bg" : "border-line bg-white")}>
            {c.title && <h3 className="font-display text-xl font-semibold">{c.title}</h3>}
            <ul className={cn("grid gap-3", c.title && "mt-6", s.columns.length === 1 ? "sm:grid-cols-2 lg:grid-cols-3" : c.items.length > 6 && "sm:grid-cols-2")}>
              {c.items.map((it, k) => (
                <motion.li key={k} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: k * 0.04, ease, duration: 0.6 }}
                  className="flex items-start gap-3 text-[15px]">
                  <span className={cn("mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                    c.tone === "neg" ? "bg-ember/15 text-ember" : c.tone === "pos" ? "bg-mint/20 text-mint-deep" : "bg-electric/10 text-electric")}>
                    {c.tone === "neg" ? <X className="h-3 w-3" /> : <Check className="h-3 w-3" />}
                  </span>
                  {it}
                </motion.li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
      {s.note && <Reveal><p className="lead mt-8">{s.note}</p></Reveal>}
    </Section>
  );
}

// ---------------------------------------------------------------- Quote (scroll-scrubbed)
function QuoteBlock({ s }: { s: Extract<S, { type: "quote" }> }) {
  return (
    <Section tone="cool">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            {s.eyebrow && <Reveal><span className="eyebrow">{s.eyebrow}</span></Reveal>}
            {s.title && <SplitHeading text={s.title} className="h-section mt-5" />}
            <motion.div initial={{ scale: 0, rotate: -20 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 160, damping: 14 }}
              className="mt-8 grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-electric to-violet text-white shadow-[0_20px_50px_-15px_rgba(0,26,255,0.6)]">
              <QuoteIcon className="h-9 w-9" strokeWidth={1.4} />
            </motion.div>
          </div>
        </div>
        <div className="relative lg:col-span-8">
          <div aria-hidden className="absolute -left-6 top-0 hidden h-full w-px bg-gradient-to-b from-electric via-violet-soft to-transparent lg:block" />
          <ScrubText text={s.quote} className="font-display text-[1.7rem] font-medium leading-[1.25] tracking-[-0.02em] sm:text-4xl lg:text-[2.6rem]" />
        </div>
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------- Statement (dark, stacked lines lit on scroll)
function Statement({ s }: { s: Extract<S, { type: "statement" }> }) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      el.querySelectorAll<HTMLElement>("[data-line]").forEach((line) => {
        gsap.fromTo(line, { opacity: 0.32, filter: "blur(2px)", x: -16 }, {
          opacity: 1, filter: "blur(0px)", x: 0, ease: "none",
          scrollTrigger: { trigger: line, start: "top 85%", end: "top 50%", scrub: true },
        });
      });
    }, el);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="on-dark noise relative overflow-hidden bg-night py-28 text-white sm:py-40">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(0,26,255,0.55),transparent_60%)]" />
      <div aria-hidden className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 animate-spinslow rounded-full border border-white/5" />
      <div aria-hidden className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/5" />
      <div className="container-site relative text-center">
        {s.eyebrow && <span className="eyebrow">{s.eyebrow}</span>}
        {s.title && <h2 className="h-section mx-auto mt-5 max-w-3xl text-white">{s.title}</h2>}
        {s.text?.map((t) => <p key={t} className="lead mx-auto mt-5 max-w-2xl">{t}</p>)}
        <div className="mt-14 space-y-2 sm:space-y-3">
          {s.lines.map((l) => (
            <p data-line key={l} className="font-display text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              {l}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------- Prose
function Prose({ s }: { s: Extract<S, { type: "prose" }> }) {
  const heads = s.blocks.map((b) => b.heading).filter(Boolean) as string[];
  const slug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <Section tone="white" className="!pt-6">
      <div className="grid gap-12 lg:grid-cols-12">
        <aside className="hidden lg:col-span-4 lg:block">
          <nav className="sticky top-28 rounded-3xl border border-line bg-paper-cool p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">On this page</p>
            <ol className="mt-4 space-y-1">
              {heads.map((h, i) => (
                <li key={h}><a href={`#${slug(h)}`} onClick={(e) => { e.preventDefault(); document.getElementById(slug(h))?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
                  className="flex gap-3 rounded-xl px-3 py-2 text-[14px] text-ink-soft transition-colors hover:bg-white hover:text-electric">
                  <span className="font-display font-semibold text-electric">{pad(i + 1)}</span>{h}</a></li>
              ))}
            </ol>
          </nav>
        </aside>
        <div className="space-y-6 lg:col-span-8">
          {s.blocks.map((b, i) => (
            <Reveal key={i}>
              <div id={b.heading ? slug(b.heading) : undefined} className="scroll-mt-28 rounded-3xl border border-line p-7 transition-colors hover:border-electric/30 sm:p-9">
                {b.heading && <h2 className="flex items-baseline gap-4 font-display text-2xl font-semibold tracking-tight"><span className="text-electric">{pad(i + 1)}</span>{b.heading}</h2>}
                {b.paragraphs?.map((p) => <p key={p} className="mt-4 text-[16.5px] leading-relaxed text-ink-soft">{p}</p>)}
                {b.bullets && <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] text-ink-soft marker:text-electric">{b.bullets.map((x) => <li key={x}>{x}</li>)}</ul>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------- CTA
export function Cta({ s, image = "/img/cta.webp" }: { s: Extract<S, { type: "cta" }>; image?: string }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  return (
    <section ref={ref} className="bg-white px-3 py-6 sm:px-6">
      <motion.div style={{ scale }} className="on-dark noise relative mx-auto max-w-[1500px] overflow-hidden rounded-[2.5rem] bg-night px-6 py-24 text-center text-white sm:py-32">
        <motion.img style={{ y }} src={image} alt="" className="absolute inset-0 h-[130%] w-full object-cover opacity-25 mix-blend-luminosity" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-electric/70 via-night/80 to-violet/70" />
        <div aria-hidden className="absolute -bottom-40 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-electric blur-[120px] opacity-60" />
        <HeroObject variant="knot" className="pointer-events-none absolute -right-24 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 opacity-90 lg:block" />
        <div className="relative mx-auto max-w-3xl">
          {s.eyebrow && <span className="eyebrow">{s.eyebrow}</span>}
          <SplitHeading text={s.title} className="h-display mt-4 text-4xl text-white sm:text-5xl lg:text-6xl" accentClass="accent-serif text-electric-soft" />
          {s.text?.map((t) => <Reveal key={t}><p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">{t}</p></Reveal>)}
          <Reveal delay={0.2} className="mt-10 flex flex-wrap justify-center gap-3">
            {s.primary && <Btn link={s.primary} variant="light" />}
            {s.secondary && <Btn link={s.secondary} variant="outline-light" />}
          </Reveal>
        </div>
      </motion.div>
    </section>
  );
}

// ---------------------------------------------------------------- Subscribe
export function Subscribe({ s }: { s: Extract<S, { type: "subscribe" }> }) {
  return (
    <Section tone="cool">
      <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-8 sm:p-14">
        <div aria-hidden className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-electric/15 blur-3xl" />
        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <SectionHead eyebrow={s.eyebrow} title={s.title} text={s.text} />
          <Reveal>
            <form onSubmit={(e) => { e.preventDefault(); (e.currentTarget.querySelector("button") as HTMLButtonElement).textContent = "Subscribed ✓"; }}
              className="flex flex-col gap-3 rounded-full sm:flex-row sm:border sm:border-line sm:bg-paper-cool sm:p-2">
              <input type="email" required placeholder={s.placeholder} className="flex-1 rounded-full border border-line bg-white px-6 py-4 text-[15px] outline-none focus:border-electric sm:border-0 sm:bg-transparent" />
              <button className="btn btn-electric">{s.button}</button>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function Notice({ s }: { s: Extract<S, { type: "notice" }> }) {
  return (
    <section className="bg-white pb-24">
      <div className="container-site">
        <Reveal className="flex items-start gap-5 rounded-3xl border border-ember/30 bg-[#FFF7F1] p-7 sm:p-9">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-ember/15 text-ember"><ShieldAlert className="h-6 w-6" /></span>
          <div><p className="font-display text-xl font-semibold">{s.title}</p><p className="mt-2 text-ink-soft">{s.text}</p></div>
        </Reveal>
      </div>
    </section>
  );
}

// Hero buttons like "#capabilities" scroll to the section whose eyebrow/title
// mentions that word, falling back to the section right after the hero.
function anchorTargets(sections: S[]) {
  const ids: Record<number, string> = {};
  sections.forEach((s) => {
    if (s.type !== "hero" || !s.cta?.href.startsWith("#")) return;
    const id = s.cta.href.slice(1);
    const word = id.split("-")[0].toLowerCase();
    let idx = sections.findIndex((x, k) => k > 0 && `${"eyebrow" in x ? x.eyebrow ?? "" : ""} ${"title" in x ? x.title ?? "" : ""}`.toLowerCase().includes(word));
    if (idx < 0) idx = 1;
    ids[idx] = id;
  });
  return ids;
}

export default function Sections({ sections, slug }: { sections: S[]; slug?: string }) {
  const ids = anchorTargets(sections);
  let nth = 0;
  const heroTitle = sections[0]?.type === "hero" ? sections[0].title.split("\n")[0] : undefined;
  const plain = slug === "legal" || slug === "privacy" || slug === "cookies";
  return (
    <>
      {sections.map((s, i) => {
        const key = `${s.type}-${i}`;
        const n = s.type === "split" && !s.image ? nth++ : 0;
        const node = render(s, i, slug, n, ids[i] ? undefined : key);
        const out = ids[i] ? <div key={key} id={ids[i]} className="scroll-mt-20">{node}</div> : node;
        if (i === 0 && s.type === "hero" && heroTitle && !plain) return [out, <MarqueeBand key="band" text={heroTitle} />];
        return out;
      })}
    </>
  );
}

function render(s: S, i: number, slug: string | undefined, nth: number, key?: string) {
  switch (s.type) {
    case "hero": return <Hero key={key} s={s} slug={slug} />;
    case "split": return <Split key={key} s={s} i={i} slug={slug} nth={nth} />;
    case "cards": return <Cards key={key} s={s} i={i} />;
    case "steps": return <Steps key={key} s={s} i={i} />;
    case "stats": return <Stats key={key} s={s} />;
    case "checklist": return <Checklist key={key} s={s} i={i} />;
    case "quote": return <QuoteBlock key={key} s={s} />;
    case "statement": return <Statement key={key} s={s} />;
    case "prose": return <Prose key={key} s={s} />;
    case "cta": return <Cta key={key} s={s} />;
    case "subscribe": return <Subscribe key={key} s={s} />;
    case "notice": return <Notice key={key} s={s} />;
  }
}

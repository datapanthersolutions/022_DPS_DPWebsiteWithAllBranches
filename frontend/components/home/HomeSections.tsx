"use client";
import Link from "@/components/TLink";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import type { ObjectVariant } from "../three/HeroObject";
const ShowcaseScene = dynamic(() => import("../three/ShowcaseScene"), { ssr: false });
import { ArrowRight, Check } from "lucide-react";
import type { CaseStudy, IconName } from "@/content/types";
import { Section, SectionHead, TextLink } from "../sections/Shared";
import { Reveal, Stagger, StaggerItem } from "../motion/Reveal";
import SplitHeading from "../motion/SplitHeading";
import ScrubText from "../motion/ScrubText";
import ParallaxImage from "../motion/ParallaxImage";
import CaseCard from "../CaseCard";
import Icon from "../Icon";
import { gsap } from "@/lib/gsap";
import { pad } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

// ---------------------------------------------------------------- client logos
const logos = [
  { src: "/img/tecversenew.png", alt: "Tecverse" }, { src: "/img/kanoons.png", alt: "Kanoons" },
  { src: "/img/digiting.webp", alt: "Digiting" }, { src: "/img/axar.webp", alt: "Axartechs" },
];
export function LogoMarquee() {
  const row = [...logos, ...logos, ...logos];
  return (
    <section className="border-b border-line bg-white py-10">
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-20 pr-20">
          {[...row, ...row].map((l, i) => (
            <img key={i} src={l.src} alt={l.alt} className="h-10 w-auto object-contain opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 sm:h-12" />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------- the problem
const problems = ["Rising Operational Costs", "Repetitive and Inefficient Workflows", "Siloed and Underutilized Data", "Slow and Delayed Decision Making", "AI Proof-of-Concepts That Never Scale"];
export function Problem() {
  return (
    <section id="problem" className="relative overflow-clip bg-white py-20 lg:py-28">
      <div aria-hidden className="absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-ember/10 blur-[120px]" />
      <div className="container-site relative">
        <Reveal><span className="eyebrow">The Problem Organizations Face</span></Reveal>
        <ScrubText text="Artificial Intelligence is no longer a future concept — it is a business necessity."
          className="mt-8 max-w-6xl font-display text-[2.3rem] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-6xl lg:text-[5rem]" />
        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="lead lg:sticky lg:top-32">While many organizations experiment with AI, very few successfully turn those experiments into scalable, production-ready solutions that deliver real business value. Several common challenges prevent companies from realizing the full potential of AI:</p>
          </Reveal>
          <div className="lg:col-span-7">
            {problems.map((p, i) => (
              <div key={p} className="sticky pb-4 lg:pb-14 lg:last:pb-4" style={{ top: `${110 + i * 22}px` }}>
                <motion.div initial={{ opacity: 0, y: 50, rotate: 1.5 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease }}
                  className="group relative flex items-center gap-6 overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-[0_20px_50px_-30px_rgba(17,25,39,0.35)] sm:p-9">
                  <span aria-hidden className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-700 ease-out group-hover:scale-x-100" />
                  <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ember/10 font-display text-sm font-semibold text-ember transition-colors group-hover:bg-ember group-hover:text-white">{pad(i + 1)}</span>
                  <h3 className="relative flex-1 font-display text-xl font-semibold tracking-tight transition-colors duration-500 group-hover:text-white sm:text-2xl">{p}</h3>
                  <ArrowRight className="relative h-5 w-5 -rotate-45 text-ink transition-all duration-500 group-hover:rotate-0 group-hover:text-white" />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------- our solution
const solutionPoints = ["From Discovery to Production Deployment", "GCP (Vertex AI) & Azure Native Delivery", "ROI-first Scoping and Prioritization", "Agentic AI, ML Models, and GenAI Integration", "Ongoing MLOps and Performance Monitoring", "Security, Compliance, and Governance Built In"];
export function OurSolution() {
  return (
    <Section tone="mint">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <ParallaxImage src="/img/solutions.webp" alt="AI Solutions" className="aspect-[4/5] w-full" />
          <motion.div initial={{ opacity: 0, y: 40, rotate: -4 }} whileInView={{ opacity: 1, y: 0, rotate: -3 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 1, ease }}
            className="absolute -bottom-6 -right-2 hidden w-56 animate-float rounded-3xl bg-white p-5 shadow-2xl sm:block lg:-right-8">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-mint-deep">Our Solution</span>
            <div className="mt-3 flex items-end gap-1.5">
              {[40, 65, 50, 80, 70, 95].map((h, k) => (
                <motion.span key={k} initial={{ height: 0 }} whileInView={{ height: h * 0.6 }} viewport={{ once: true }} transition={{ delay: 0.8 + k * 0.08, duration: 0.8, ease }}
                  className="w-full rounded-t-md bg-gradient-to-t from-mint to-electric-soft" />
              ))}
            </div>
          </motion.div>
        </div>
        <div>
          <SectionHead eyebrow="Our Solution" title={"Turning AI Potential into\nReal Business Impact"}
            text={["At Data Panther, we help organizations bridge the gap between AI experimentation and real business impact. Our approach focuses on practical implementation and long-term value:"]} />
          <Stagger className="mt-10 grid gap-3 sm:grid-cols-2">
            {solutionPoints.map((p) => (
              <StaggerItem key={p} className="group flex items-start gap-3 rounded-2xl border border-mint/20 bg-white/80 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-mint hover:shadow-lg">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint text-white transition-transform group-hover:scale-110"><Check className="h-3.5 w-3.5" /></span>
                <p className="text-[15px] font-medium text-ink">{p}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------- what we build (bento)
const builds: { title: string; text: string; icon: IconName; accent: string }[] = [
  { title: "Agentic AI & Autonomous Systems", text: "Multi-agent pipelines and autonomous workflow systems built on Vertex AI ADK, LangChain, and CrewAI.", icon: "bot", accent: "from-electric to-violet" },
  { title: "Custom ML Model Engineering", text: "Predictive analytics, demand forecasting, churn modeling, and classification systems built for production.", icon: "brain", accent: "from-violet to-violet-soft" },
  { title: "GenAI & LLM Integration", text: "RAG systems, enterprise copilots, document intelligence, and GPT-powered applications.", icon: "sparkles", accent: "from-ember to-sun" },
  { title: "Intelligent Process Automation", text: "Replace repetitive manual tasks with AI-driven automation using Azure Durable Functions.", icon: "workflow", accent: "from-mint to-electric-soft" },
  { title: "Data Pipelines & Analytics", text: "End-to-end data infrastructure including ETL pipelines and real-time dashboards.", icon: "database", accent: "from-electric-soft to-electric" },
  { title: "AI Deployment & MLOps", text: "Scalable AI infrastructure with CI/CD for ML, drift detection, and model governance.", icon: "rocket", accent: "from-violet-deep to-electric" },
];
const buildObjects: ObjectVariant[] = ["orbit", "crystal", "blob", "rings", "blocks", "knot"];

// Pinned showcase: the 3D object morphs as each service scrolls into focus.
export function WhatWeBuild() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i)); });
    }, { rootMargin: "-45% 0px -45% 0px" });
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  const b = builds[active];
  return (
    <section className="relative bg-white py-20 lg:py-24">
      <div className="container-site">
        <SectionHead eyebrow="What We Build" title="AI & ML Services Engineered for Impact" text={["From strategy to production — delivering across the full AI lifecycle."]} wide />
        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="on-dark relative h-[380px] overflow-hidden rounded-[2.25rem] bg-night sm:h-[460px] lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] lg:max-h-[680px]">
              <div aria-hidden className="grid-bg-dark absolute inset-0" />
              <motion.div aria-hidden key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
                className={`absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gradient-to-br ${b.accent} opacity-60 blur-[100px]`} />
              <div aria-hidden className="absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-violet/40 blur-[100px]" />
              <ShowcaseScene variants={buildObjects} active={active} className="absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7 sm:p-9">
                <div className="overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.p key={active} initial={{ y: "110%" }} animate={{ y: "0%" }} exit={{ y: "-110%" }} transition={{ duration: 0.5, ease }}
                      className="font-display text-2xl font-semibold text-white sm:text-3xl">{b.title}</motion.p>
                  </AnimatePresence>
                </div>
                <span className="font-display text-sm tabular-nums text-white/50">{pad(active + 1)} / {pad(builds.length)}</span>
              </div>
              <div className="absolute left-7 right-7 top-7 flex gap-1.5 sm:left-9 sm:right-9">
                {builds.map((_, k) => (
                  <span key={k} className="h-1 flex-1 overflow-hidden rounded-full bg-white/15">
                    <motion.span className="block h-full origin-left bg-white" animate={{ scaleX: k <= active ? 1 : 0 }} transition={{ duration: 0.6, ease }} />
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            {builds.map((it, i) => (
              <div key={it.title} ref={(el) => { refs.current[i] = el; }} data-i={i}
                className="flex min-h-[38vh] items-center border-b border-line py-8 last:border-b-0 lg:min-h-[52vh]">
                <motion.div animate={{ opacity: i === active ? 1 : 0.35, x: i === active ? 0 : -8 }} transition={{ duration: 0.5, ease }} className="w-full">
                  <div className="flex items-center gap-4">
                    <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${it.accent} text-white shadow-lg transition-transform duration-500 ${i === active ? "scale-110 -rotate-6" : ""}`}>
                      <Icon name={it.icon} className="h-6 w-6" />
                    </span>
                    <span className="font-display text-sm font-semibold text-ink/40">{pad(i + 1)}</span>
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{it.title}</h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">{it.text}</p>
                </motion.div>
              </div>
            ))}
            <Reveal className="pt-6"><TextLink href="/Services/">Explore Services</TextLink></Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------- case studies (horizontal scroll on desktop)
export function HomeCases({ cases }: { cases: CaseStudy[] }) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const el = track.current!, w = wrap.current!;
      const dist = () => Math.max(0, el.scrollWidth - w.clientWidth);
      const t = gsap.to(el, { x: () => -dist(), ease: "none",
        scrollTrigger: { trigger: w, start: "top 15%", end: () => `+=${dist()}`, scrub: 1, pin: true, invalidateOnRefresh: true } });
      return () => t.kill();
    });
    return () => mm.revert();
  }, []);
  return (
    <section className="bg-paper-cool py-24 sm:py-32">
      <div ref={wrap} className="overflow-hidden">
        <div className="container-site flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHead eyebrow="Case Studies" title="Proven Enterprise Success" text={["Explore how Data Panther delivers measurable business impact through applied AI, operational intelligence, and data modernisation."]} />
          <Reveal><TextLink href="/case-studies/">View All Case Studies</TextLink></Reveal>
        </div>
        <div ref={track} className="container-site mt-14 flex flex-col gap-6 lg:w-max lg:flex-row">
          {cases.map((c, i) => (
            <div key={c.slug} className="lg:w-[440px]"><CaseCard c={c} index={i} large /></div>
          ))}
          <Link href="/case-studies/" className="group hidden w-[320px] flex-col items-center justify-center rounded-[2rem] border border-dashed border-electric/40 text-center lg:flex">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-electric text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-45deg]"><ArrowRight className="h-7 w-7" /></span>
            <span className="mt-6 font-display text-xl font-semibold">View All Case Studies →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------- core capabilities (dark, sticky)
const capabilities = [
  { title: "Enterprise AI Engineering", text: "Architect scalable AI systems integrating computer vision, NLP, and intelligent automation into complex enterprise ecosystems.", icon: "cpu" as IconName },
  { title: "Machine Learning Systems", text: "Deploy production-grade predictive models that enhance operational intelligence, optimize workflows, and drive data-driven strategy.", icon: "brain" as IconName },
  { title: "Data Platform Engineering", text: "Design resilient data architectures, real-time pipelines, and enterprise-grade storage systems for high-volume analytics workloads.", icon: "database" as IconName },
  { title: "Strategic Business Intelligence", text: "Enable executive decision-making with advanced analytics, KPI command centers, and predictive intelligence dashboards.", icon: "chart" as IconName },
];
export function Capabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rot = useTransform(scrollYProgress, [0, 1], [0, 180]);
  return (
    <section ref={ref} className="on-dark noise relative overflow-clip bg-night py-20 text-white lg:py-28">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(0,26,255,0.45),transparent_50%),radial-gradient(ellipse_at_0%_100%,rgba(115,65,173,0.45),transparent_50%)]" />
      <motion.div aria-hidden style={{ rotate: rot }} className="absolute -left-40 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full border border-white/10">
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-soft shadow-[0_0_20px_#5D8FFF]" />
        <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-violet-soft shadow-[0_0_20px_#C68FFF]" />
      </motion.div>
      <div className="container-site relative grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal><span className="eyebrow">Core Capabilities</span></Reveal>
            <SplitHeading text="Enterprise AI Solutions Built for Scale & Resilience" className="h-section mt-5 text-white" />
            <Reveal><p className="lead mt-6">We deliver intelligence-driven platforms that modernize enterprise operations, accelerate innovation cycles, and create measurable business impact across global organizations.</p></Reveal>
          </div>
        </div>
        <div className="space-y-5 lg:col-span-7">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition-colors duration-500 hover:border-electric-soft/50 sm:p-10">
                <div aria-hidden className="absolute inset-0 -translate-x-full bg-gradient-to-r from-electric/30 to-transparent transition-transform duration-700 group-hover:translate-x-0" />
                <div className="relative flex items-start gap-6">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/10 text-electric-soft transition-all duration-500 group-hover:bg-white group-hover:text-electric"><Icon name={c.icon} className="h-6 w-6" /></span>
                  <div>
                    <span className="font-display text-sm text-white/40">{pad(i + 1)} / {pad(capabilities.length)}</span>
                    <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{c.title}</h3>
                    <p className="mt-3 text-white/65">{c.text}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

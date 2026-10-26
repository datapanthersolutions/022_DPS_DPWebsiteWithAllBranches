"use client";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import LazySphere from "../three/LazySphere";
import { Btn } from "../sections/Shared";
import { onIntroDone } from "@/lib/intro";

const ease = [0.22, 1, 0.36, 1] as const;

const slides = [
  { tag: "FOR DIGITAL TRANSFORMATION", title: "Turning Complex Data Into Clear Business Strategy", text: "From infrastructure to intelligence, we design ecosystems that unlock impact.", image: "/img/slide2.webp" },
  { tag: "FOR SCALABLE GROWTH", title: "Secure, Intelligent & Future-Ready Data Solutions", text: "Build resilient systems that reduce risk and enhance performance.", image: "/img/test.webp" },
  { tag: "FOR ENTERPRISE LEADERS", title: "Strategic Insights for Modern Data-Driven Organizations", text: "We empower decision-makers with advanced analytics and scalable AI systems.", image: "/img/moderndata.webp" },
];
const DURATION = 7000;

export default function HomeHero() {
  const [i, setI] = useState(0);
  const [ready, setReady] = useState(false);
  useEffect(() => onIntroDone(() => setReady(true)), []);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const sphereScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);

  useEffect(() => {
    if (!ready) return;
    const t = setTimeout(() => setI((x) => (x + 1) % slides.length), DURATION);
    return () => clearTimeout(t);
  }, [i, ready]);

  const s = slides[i];
  const words = s.title.split(" ");

  return (
    <section ref={ref} className="on-dark noise relative min-h-[100svh] overflow-hidden bg-night text-white">
      {/* slide photo, heavily tinted, crossfading underneath the 3D scene */}
      <AnimatePresence>
        <motion.img key={s.image} src={s.image} alt="" initial={{ opacity: 0, scale: 1.12 }} animate={{ opacity: 0.22, scale: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease }} className="absolute inset-0 h-full w-full object-cover mix-blend-luminosity" />
      </AnimatePresence>
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(0,26,255,0.45),transparent_55%),radial-gradient(ellipse_at_10%_90%,rgba(115,65,173,0.5),transparent_50%)]" />
      <div aria-hidden className="grid-bg-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <motion.div style={{ scale: sphereScale }} className="absolute inset-0 lg:left-[35%]">
        <LazySphere className="h-full w-full" />
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-night via-night/60 to-transparent lg:via-night/30" />

      <motion.div style={{ y: textY, opacity: fade }} className="container-site relative flex min-h-[100svh] flex-col justify-center pb-44 pt-36">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            {ready && <motion.div key={i} exit={{ opacity: 0, y: -30, filter: "blur(8px)" }} transition={{ duration: 0.5, ease }}>
              <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.7, ease }} className="eyebrow">{s.tag}</motion.span>
              <h1 className="h-display mt-6 text-[2.7rem] sm:text-6xl lg:text-[5.2rem]" aria-label={s.title}>
                {words.map((w, k) => (
                  <span key={k} className="split-word" aria-hidden>
                    <motion.span initial={{ y: "110%", rotate: 6 }} animate={{ y: "0%", rotate: 0 }} transition={{ delay: 0.35 + k * 0.06, duration: 1.1, ease }}
                      className={k >= words.length - 2 ? "accent-serif text-gradient pr-[0.08em]" : ""}>
                      {w}&nbsp;
                    </motion.span>
                  </span>
                ))}
              </h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8, ease }} className="mt-7 max-w-xl text-lg text-white/70 sm:text-xl">
                {s.text}
              </motion.p>
            </motion.div>}
          </AnimatePresence>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.9, duration: 0.8, ease }} className="mt-10 flex flex-wrap items-center gap-4">
            <Btn link={{ label: "Discover More", href: "/Services/" }} variant="light" />
            <a href="#problem" className="group inline-flex items-center gap-3 text-sm text-white/70 hover:text-white">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition-colors group-hover:border-white"><ArrowDown className="h-4 w-4 animate-bounce" /></span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* slide tabs with progress bars */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="container-site grid grid-cols-3 gap-2 pb-6 sm:gap-4 sm:pb-10">
          {slides.map((x, k) => (
            <button key={x.tag} onClick={() => setI(k)} className={`group relative overflow-hidden rounded-2xl border p-3 text-left backdrop-blur-md transition-colors sm:p-4 ${k === i ? "border-white/25 bg-white/10" : "border-white/10 bg-white/[0.03] hover:bg-white/[0.07]"}`}>
              <div className="flex items-center gap-3">
                <img src={x.image} alt="" className="hidden h-12 w-12 shrink-0 rounded-xl object-cover md:block" />
                <div className="min-w-0">
                  <span className="block truncate text-[10px] font-semibold tracking-[0.14em] text-white/50 sm:text-[11px]">{x.tag}</span>
                  <span className="mt-1 hidden text-[13.5px] leading-snug text-white/90 sm:line-clamp-2">{x.title}</span>
                </div>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-white/10">
                {k === i && ready && <motion.span key={i} className="block h-full origin-left bg-gradient-to-r from-electric-soft to-violet-soft" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: DURATION / 1000, ease: "linear" }} />}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

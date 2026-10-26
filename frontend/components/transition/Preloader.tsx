"use client";
import { AnimatePresence, animate, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { markIntroDone } from "@/lib/intro";

const ease = [0.76, 0, 0.24, 1] as const;

// First-visit intro: counter to 100 with the brand line, then the panel lifts away.
export default function Preloader() {
  const [show, setShow] = useState(true);
  const [n, setN] = useState(0);
  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem("dp-intro") === "1"; sessionStorage.setItem("dp-intro", "1"); } catch { /* storage blocked */ }
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setShow(false); markIntroDone(); return; }
    const c = animate(0, 100, {
      duration: 1.6, ease: [0.65, 0, 0.35, 1], onUpdate: (v) => setN(Math.round(v)),
      onComplete: () => setTimeout(() => { setShow(false); setTimeout(markIntroDone, 350); }, 200),
    });
    return () => c.stop();
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div key="pre" className="fixed inset-0 z-[100] flex flex-col justify-between overflow-hidden bg-night p-6 text-white sm:p-10"
          exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.9, ease }}>
          <div aria-hidden className="absolute -bottom-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-electric/50 blur-[140px]" />
          <div className="relative flex items-center gap-3">
            <img src="/img/dpfavicon.png" alt="" className="h-8 w-8 brightness-0 invert" />
            <span className="font-display text-lg font-semibold">Data Panther</span>
          </div>
          <div className="relative overflow-hidden">
            <motion.p initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 0.9, ease, delay: 0.1 }}
              className="font-display text-4xl font-semibold tracking-tight sm:text-7xl">
              From data <span className="accent-serif text-electric-soft">to action</span>
            </motion.p>
          </div>
          <div className="relative flex items-end gap-6">
            <div className="mb-4 h-px flex-1 bg-white/10">
              <motion.div className="h-px origin-left bg-gradient-to-r from-electric-soft to-violet-soft" style={{ scaleX: n / 100 }} />
            </div>
            <span className="font-display text-7xl font-semibold tabular-nums leading-none tracking-tight sm:text-9xl">{n}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

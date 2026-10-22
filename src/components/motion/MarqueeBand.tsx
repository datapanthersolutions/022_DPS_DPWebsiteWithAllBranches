"use client";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { useRef } from "react";

// Big moving title band. Scrolling speeds it up and flips its direction; fast scrolls skew it.
export default function MarqueeBand({ text, dark = true, words = ["From data to action"] }: { text: string; dark?: boolean; words?: string[] }) {
  const base = useMotionValue(0);
  const { scrollY } = useScroll();
  const vel = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(vel, [-2000, 0, 2000], [-4, 0, 4], { clamp: false });
  const skew = useTransform(vel, [-3000, 0, 3000], [8, 0, -8]);
  const dir = useRef(1);
  useAnimationFrame((_, delta) => {
    let move = dir.current * -2.2 * (delta / 1000);
    const f = factor.get();
    if (f < 0) dir.current = -1; else if (f > 0) dir.current = 1;
    move += dir.current * move * f;
    let v = base.get() + move;
    if (v <= -50) v += 50; if (v > 0) v -= 50;
    base.set(v);
  });
  const x = useTransform(base, (v) => `${v}%`);
  const items = [text, ...words];
  const row = [...items, ...items, ...items];
  return (
    <section className={dark ? "on-dark relative overflow-hidden bg-night py-7 text-white" : "relative overflow-hidden border-y border-line bg-white py-7"} aria-hidden>
      <motion.div style={{ x, skewX: skew }} className="flex w-max items-center whitespace-nowrap">
        {[0, 1].map((k) => (
          <div key={k} className="flex items-center">
            {row.map((t, i) => (
              <span key={i} className="flex items-center">
                <span className={i % 2 === 0
                  ? "font-display text-5xl font-semibold tracking-[-0.03em] sm:text-7xl"
                  : "accent-serif text-5xl text-transparent [-webkit-text-stroke:1px_rgba(93,143,255,0.9)] sm:text-7xl"}>{t}</span>
                <svg viewBox="0 0 24 24" className="mx-8 h-8 w-8 animate-spinslow fill-electric-soft sm:h-10 sm:w-10"><path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" /></svg>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}

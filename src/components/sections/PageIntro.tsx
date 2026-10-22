"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";
import SplitHeading from "../motion/SplitHeading";
import type { ObjectVariant } from "../three/HeroObject";

const HeroObject = dynamic(() => import("../three/HeroObject"), { ssr: false });
const ease = [0.22, 1, 0.36, 1] as const;

// Header for listing pages: centered title with two 3D objects drifting on either side.
export default function PageIntro({ eyebrow, title, text, children, objects = ["crystal", "rings"] }:
  { eyebrow?: string; title: string; text?: string; children?: React.ReactNode; objects?: [ObjectVariant, ObjectVariant] }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yL = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yR = useTransform(scrollYProgress, [0, 1], [0, -120]);
  return (
    <section ref={ref} className="relative overflow-hidden bg-white pb-16 pt-32 sm:pt-40">
      <div aria-hidden className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div aria-hidden className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-electric/20 via-electric-soft/15 to-violet-soft/25 blur-[100px]" />
      <motion.div style={{ y: yL }} className="pointer-events-none absolute -left-24 top-24 hidden h-[360px] w-[360px] lg:block xl:left-0">
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4, ease, delay: 0.3 }} className="h-full w-full">
          <HeroObject variant={objects[0]} tone="light" className="h-full w-full" />
        </motion.div>
      </motion.div>
      <motion.div style={{ y: yR }} className="pointer-events-none absolute -right-20 top-40 hidden h-[320px] w-[320px] lg:block xl:right-4">
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4, ease, delay: 0.5 }} className="h-full w-full">
          <HeroObject variant={objects[1]} tone="light" className="h-full w-full" />
        </motion.div>
      </motion.div>
      <div className="container-site relative text-center">
        {eyebrow && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="eyebrow">{eyebrow}</motion.span>}
        <SplitHeading as="h1" text={title} immediate delay={0.3} className="h-display mx-auto mt-6 max-w-3xl text-[2.6rem] sm:text-6xl lg:text-7xl" />
        {text && <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, ease, duration: 0.8 }} className="lead mx-auto mt-6 max-w-2xl">{text}</motion.p>}
        {children}
      </div>
    </section>
  );
}

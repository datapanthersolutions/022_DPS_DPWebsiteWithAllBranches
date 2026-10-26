"use client";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

// Fade + rise when scrolled into view.
export function Reveal({ children, delay = 0, y = 40, className, as = "div" }:
  { children: ReactNode; delay?: number; y?: number; className?: string; as?: "div" | "li" | "span" | "p" }) {
  const C = motion[as];
  return (
    <C className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9, delay, ease }}>
      {children}
    </C>
  );
}

const parent: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const child: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease } },
};

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={parent} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
      {children}
    </motion.div>
  );
}
export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} variants={child}>{children}</motion.div>;
}

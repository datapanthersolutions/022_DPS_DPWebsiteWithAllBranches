"use client";
import { motion } from "framer-motion";

// Content settles in after the transition panels lift.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={() => { (document.querySelector("[data-tpl]") as HTMLElement | null)?.style.removeProperty("filter"); }}
      data-tpl>
      {children}
    </motion.div>
  );
}

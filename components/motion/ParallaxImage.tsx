"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

// Image that drifts inside its frame on scroll and un-clips when it appears.
export default function ParallaxImage({ src, alt, className, amount = 12, rounded = "rounded-[2rem]" }:
  { src: string; alt: string; className?: string; amount?: number; rounded?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);
  return (
    <motion.div ref={ref} className={cn("relative overflow-hidden", rounded, className)}
      initial={{ clipPath: "inset(12% 8% 12% 8% round 2rem)", opacity: 0.4 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 2rem)", opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}>
      <motion.img src={src} alt={alt} style={{ y, scale: 1 + amount / 50 }} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
    </motion.div>
  );
}

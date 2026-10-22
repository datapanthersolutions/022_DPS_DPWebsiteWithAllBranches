"use client";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// 3D tilt + cursor spotlight card.
export default function TiltCard({ children, className, glow = "rgba(0,26,255,0.14)" }: { children: ReactNode; className?: string; glow?: string }) {
  const rx = useMotionValue(0), ry = useMotionValue(0), mx = useMotionValue(-999), my = useMotionValue(-999);
  const srx = useSpring(rx, { stiffness: 150, damping: 18 }), sry = useSpring(ry, { stiffness: 150, damping: 18 });
  const bg = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, ${glow}, transparent 70%)`;
  return (
    <motion.div className={cn("group relative [transform-style:preserve-3d]", className)}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1100 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        ry.set((px - 0.5) * 8); rx.set(-(py - 0.5) * 8);
        mx.set(e.clientX - r.left); my.set(e.clientY - r.top);
      }}
      onMouseLeave={() => { rx.set(0); ry.set(0); mx.set(-999); my.set(-999); }}>
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: bg }} />
      {children}
    </motion.div>
  );
}

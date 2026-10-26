"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

// Dot + trailing ring. The ring grows over links and buttons; card links show "View".
export default function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 260, damping: 26, mass: 0.6 }), ry = useSpring(y, { stiffness: 260, damping: 26, mass: 0.6 });
  const [mode, setMode] = useState<"none" | "link" | "view">("none");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX); y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      const a = t?.closest("a, button, input, textarea, label");
      if (!a) setMode("none");
      else if (a.tagName === "A" && a.querySelector("img, h3")) setMode("view");
      else setMode("link");
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;
  const size = mode === "view" ? 88 : mode === "link" ? 56 : 34;
  return (
    <>
      <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[120] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric mix-blend-difference" style={{ x, y }} />
      <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[119] grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border text-[11px] font-semibold uppercase tracking-[0.14em]"
        style={{ x: rx, y: ry }}
        animate={{ width: size, height: size, backgroundColor: mode === "view" ? "rgba(0,26,255,0.92)" : "rgba(0,26,255,0)", borderColor: mode === "none" ? "rgba(0,26,255,0.45)" : "rgba(0,26,255,0.9)", color: "#fff" }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}>
        {mode === "view" && <span>View</span>}
      </motion.div>
    </>
  );
}

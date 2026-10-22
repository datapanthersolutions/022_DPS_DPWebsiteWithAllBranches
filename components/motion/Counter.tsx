"use client";
import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

// Counts up the numeric part of values like "40%", "$2M", "99.9%", "2x", "24/7", "50+".
export default function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const m = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
  const isPlain = !m || value.includes("/");
  const target = m ? parseFloat(m[2].replace(/,/g, "")) : 0;
  const decimals = m && m[2].includes(".") ? m[2].split(".")[1].length : 0;
  const [n, setN] = useState(isPlain ? value : `${m![1]}0${m![3]}`);

  useEffect(() => {
    if (!inView || isPlain || !m) return;
    const c = animate(0, target, {
      duration: 2, ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(`${m[1]}${v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${m[3]}`),
    });
    return () => c.stop();
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return <span ref={ref} className={className}>{n}</span>;
}

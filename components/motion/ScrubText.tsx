"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

// Large paragraph whose words light up one by one as you scroll through it.
export default function ScrubText({ text, className, dim = "rgba(17,25,39,0.14)", lit = "#0B1220" }:
  { text: string; className?: string; dim?: string; lit?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const words = el.querySelectorAll("span");
      gsap.fromTo(words, { color: dim }, {
        color: lit, stagger: 0.1, ease: "none",
        scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true },
      });
    }, el);
    return () => ctx.revert();
  }, [text, dim, lit]);
  return (
    <p ref={ref} className={cn(className)}>
      {text.split(" ").map((w, i) => <span key={i} style={{ color: dim }}>{w} </span>)}
    </p>
  );
}

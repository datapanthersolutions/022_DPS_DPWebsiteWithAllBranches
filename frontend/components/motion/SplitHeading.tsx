"use client";
import { useEffect, useRef, useState, type ElementType } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { onIntroDone } from "@/lib/intro";

// Headline whose words slide up from a mask. It reveals when it actually enters the screen
// (IntersectionObserver), so late-loading content above it can never leave it hidden.
// A "\n" starts a new line; the line after it gets the accent style.
export default function SplitHeading({ text, as: Tag = "h2", className, accentClass = "accent-serif text-electric", immediate = false, delay = 0 }:
  { text: string; as?: ElementType; className?: string; accentClass?: string; immediate?: boolean; delay?: number }) {
  const ref = useRef<HTMLElement>(null);
  const [armed, setArmed] = useState(false);
  const lines = text.split("\n");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLElement>(".split-word > span");
    gsap.set(words, { yPercent: 110, rotate: 4 });
    setArmed(true);
    let played = false;
    const play = () => {
      if (played) return;
      played = true;
      gsap.to(words, { yPercent: 0, rotate: 0, duration: 1.1, ease: "expo.out", stagger: 0.045, delay });
    };
    if (immediate) return onIntroDone(play);
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { play(); io.disconnect(); } }, { rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    // Safety net: anything already scrolled past still shows.
    const t = setTimeout(() => { if (el.getBoundingClientRect().top < window.innerHeight) play(); }, 2500);
    return () => { io.disconnect(); clearTimeout(t); gsap.killTweensOf(words); gsap.set(words, { clearProps: "all" }); };
  }, [text, immediate, delay]);

  return (
    <Tag ref={ref} className={cn(className)} aria-label={text.replace(/\n/g, " ")} data-armed={armed || undefined}>
      {lines.map((line, li) => (
        <span key={li} className={cn("block", li > 0 && lines.length > 1 && accentClass)} aria-hidden>
          {line.split(" ").map((w, wi) => (
            <span key={wi} className="split-word"><span>{w}&nbsp;</span></span>
          ))}
        </span>
      ))}
    </Tag>
  );
}

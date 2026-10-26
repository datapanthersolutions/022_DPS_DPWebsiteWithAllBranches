"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { mainNav } from "@/content/nav";

type Ctx = { navigate: (href: string) => void };
const TransitionCtx = createContext<Ctx>({ navigate: () => {} });
export const usePageTransition = () => useContext(TransitionCtx);

const ease = [0.76, 0, 0.24, 1] as const;
const COLS = 5;
const norm = (p: string) => (p.endsWith("/") ? p : p + "/");

// Human label for the destination, shown on the transition panel.
function labelFor(href: string) {
  const path = norm(href.split("#")[0] || "/");
  if (path === "/") return "Home";
  for (const n of mainNav) {
    if (n.href === path) return n.label;
    if ("menu" in n) for (const m of n.menu) if (m.href === path) return m.label;
  }
  const last = path.split("/").filter(Boolean).pop() ?? "";
  if (last.toLowerCase() === "contactus") return "Contact Us";
  return last.replace(/-/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^\w/, (c) => c.toUpperCase());
}

// Covers the screen with staggered panels, swaps the route underneath, then lifts.
export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<"idle" | "cover" | "reveal">("idle");
  const [label, setLabel] = useState("");
  const pending = useRef<string | null>(null);
  const covered = useRef(false);

  const navigate = useCallback((href: string) => {
    if (phase !== "idle") return;
    if (norm(href.split("#")[0] || "/") === norm(pathname)) { router.push(href); return; }
    pending.current = href;
    covered.current = false;
    setLabel(labelFor(href));
    setPhase("cover");
  }, [phase, pathname, router]);

  // Route changed while covered: give the new page a beat to mount, then lift.
  useEffect(() => {
    if (phase === "cover" && covered.current) {
      const t = setTimeout(() => setPhase("reveal"), 300);
      return () => clearTimeout(t);
    }
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const onCovered = () => {
    covered.current = true;
    const href = pending.current;
    pending.current = null;
    window.scrollTo(0, 0);
    if (href) router.push(href);
    // Never leave the screen covered if the route doesn't change.
    setTimeout(() => setPhase((p) => (p === "cover" ? "reveal" : p)), 1500);
  };

  return (
    <TransitionCtx.Provider value={{ navigate }}>
      {children}
      <AnimatePresence>
        {phase !== "idle" && (
          <div key="t" className="fixed inset-0 z-[90] flex" aria-hidden>
            {Array.from({ length: COLS }).map((_, i) => (
              <motion.span key={i} className="h-full flex-1 bg-night"
                style={{ originY: phase === "reveal" ? 0 : 1, marginLeft: -1 }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: phase === "reveal" ? 0 : 1 }}
                transition={{ duration: 0.55, ease, delay: (phase === "reveal" ? COLS - 1 - i : i) * 0.05 }}
                onAnimationComplete={() => {
                  if (i !== COLS - 1) return;
                  if (phase === "cover" && !covered.current) onCovered();
                  else if (phase === "reveal") setPhase("idle");
                }} />
            ))}
            <motion.div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white"
              initial={{ opacity: 0 }} animate={{ opacity: phase === "cover" ? 1 : 0 }}
              transition={{ duration: 0.3, delay: phase === "cover" ? 0.3 : 0 }}>
              <motion.img src="/img/dpfavicon.png" alt="" className="h-12 w-12 brightness-0 invert"
                initial={{ rotate: -90, scale: 0.6 }} animate={{ rotate: 0, scale: 1 }} transition={{ duration: 0.7, ease, delay: 0.3 }} />
              <div className="mt-6 overflow-hidden pb-2">
                <motion.p initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 0.6, ease, delay: 0.35 }}
                  className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">{label}</motion.p>
              </div>
              <motion.span className="mt-5 h-px w-40 origin-left bg-gradient-to-r from-electric-soft to-violet-soft"
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, ease, delay: 0.4 }} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </TransitionCtx.Provider>
  );
}

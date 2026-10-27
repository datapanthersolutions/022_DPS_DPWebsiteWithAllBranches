"use client";
import Link from "@/components/TLink";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { whatsapp } from "@/content/nav";
import { hasConsent, setConsent } from "@/lib/analytics";

// Scroll progress bar, WhatsApp chat button and the cookie consent banner.
// The banner's choice controls every tracking tag via Consent Mode (docs/integrations/consent.md).
export default function Floating() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [consent, setChoice] = useState<boolean | null | "pending">("pending");

  useEffect(() => { setChoice(hasConsent()); }, []);
  const decide = (granted: boolean) => { setConsent(granted); setChoice(granted); };

  return (
    <>
      <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-electric via-electric-soft to-violet-soft" />
      <motion.a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with us"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5, type: "spring" }} whileHover={{ scale: 1.08 }}
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.7)]">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
        <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-current"><path d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.5.7 4.9 2 7L3 29l6.6-2.2a12.6 12.6 0 0 0 6.4 1.7c7 0 12.7-5.6 12.7-12.6S23 3 16 3Zm0 23.1c-2 0-4-.6-5.7-1.6l-.4-.2-3.9 1.3 1.3-3.8-.3-.4a10.4 10.4 0 0 1-1.6-5.6C5.4 9.9 10.2 5.2 16 5.2s10.6 4.7 10.6 10.4S21.8 26.1 16 26.1Zm5.8-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.6 8.6 0 0 1-4.3-3.7c-.3-.6.3-.5 1-1.7.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.4c.2.2 2.4 3.6 5.8 5 2.2.9 3 1 4.1.8.7-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4Z"/></svg>
      </motion.a>
      <AnimatePresence>
        {consent === null && (
          <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} transition={{ delay: 1.2, duration: 0.6 }}
            className="fixed bottom-24 left-4 right-4 z-50 max-w-sm rounded-3xl border border-line bg-white/90 p-6 shadow-2xl backdrop-blur-xl sm:left-6 sm:right-auto">
            <p className="font-display text-lg font-semibold">We Value Your Privacy</p>
            <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
              We use cookies to enhance your experience, analyze traffic, and improve our services. Learn more in our{" "}
              <Link href="/cookies/" className="text-electric underline">Cookie Policy</Link> and <Link href="/privacy/" className="text-electric underline">Privacy Policy</Link>.
            </p>
            <div className="mt-5 flex gap-3">
              <button onClick={() => decide(false)} className="btn btn-ghost !px-5 !py-2.5 !text-sm">Reject</button>
              <button onClick={() => decide(true)} className="btn btn-electric !px-5 !py-2.5 !text-sm">Accept</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";
import Link from "@/components/TLink";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { mainNav, contactHref } from "@/content/nav";
import Logo from "./Logo";
import Magnetic from "../motion/Magnetic";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > 400 && y > prev && !open);
  });
  useEffect(() => { setOpen(null); setMobile(false); }, [pathname]);

  // Pages whose hero is dark get a light header until the user scrolls.
  const darkHero = pathname === "/" || pathname.startsWith("/ContactUs") || /^\/case-studies\/[^/]+\/?$/.test(pathname);
  const light = darkHero && !scrolled && !open;
  const active = (href: string) => href === "/" ? pathname === "/" : pathname.toLowerCase().startsWith(href.toLowerCase());
  const current = mainNav.find((n) => n.label === open && "menu" in n);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        animate={{ y: hidden ? -110 : 0 }} transition={{ duration: 0.5, ease }}
        onMouseLeave={() => setOpen(null)}>
        <div className={cn("transition-all duration-500", scrolled || open ? "bg-white/80 shadow-[0_1px_0_rgba(17,25,39,0.06)] backdrop-blur-xl" : "bg-transparent")}>
          <div className="container-site flex h-[76px] items-center justify-between gap-6">
            <Logo light={light} />
            <nav className="hidden items-center gap-1 lg:flex">
              {mainNav.map((item) => (
                <div key={item.label} onMouseEnter={() => setOpen("menu" in item ? item.label : null)}>
                  <Link href={item.href}
                    className={cn("relative flex items-center gap-1 rounded-full px-3.5 py-2 text-[14.5px] font-medium transition-colors",
                      active(item.href) ? (light ? "text-white" : "text-electric") : light ? "text-white/75 hover:text-white" : "text-ink/80 hover:text-ink")}>
                    {item.label}
                    {"menu" in item && <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", open === item.label && "rotate-180")} />}
                    {active(item.href) && <motion.span layoutId="nav-dot" className={cn("absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full", light ? "bg-white" : "bg-electric")} />}
                  </Link>
                </div>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <Magnetic className="hidden sm:block">
                <Link href={contactHref} className={cn("btn group !py-3 !text-[14px]", light ? "btn-light" : "btn-primary")}>
                  Contact Us <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                </Link>
              </Magnetic>
              <button className={cn("grid h-11 w-11 place-items-center rounded-full lg:hidden", light ? "bg-white text-ink" : "bg-ink text-white")} onClick={() => setMobile(true)} aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mega menu */}
          <AnimatePresence>
            {current && "menu" in current && (
              <motion.div key="mega" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease }} className="hidden overflow-hidden border-t border-line/70 lg:block">
                <motion.div key={current.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease }}
                  className="container-site grid grid-cols-12 gap-8 py-8">
                  <div className="col-span-8 grid grid-cols-2 gap-1">
                    {current.menu.map((m, i) => (
                      <motion.div key={m.href + m.label} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03, duration: 0.4, ease }}>
                        <Link href={m.href} className="group flex items-start justify-between gap-4 rounded-2xl p-4 transition-colors hover:bg-paper-cool">
                          <span>
                            <span className="block font-display text-[16px] font-semibold text-ink group-hover:text-electric">{m.label}</span>
                            <span className="mt-1 block text-[13.5px] text-ink-soft">{m.text}</span>
                          </span>
                          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-electric" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  <Link href={current.feature.href} className="group relative col-span-4 overflow-hidden rounded-3xl bg-night p-6 text-white">
                    <img src={current.feature.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-night via-night/70 to-transparent" />
                    <div className="relative flex h-full min-h-[220px] flex-col justify-end">
                      <span className="font-display text-xl font-semibold">{current.feature.title}</span>
                      <span className="mt-2 text-sm text-white/70">{current.feature.text}</span>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-electric-soft">{current.feature.cta} <ArrowUpRight className="h-4 w-4" /></span>
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobile && (
          <motion.div className="fixed inset-0 z-[60] overflow-y-auto bg-night text-white lg:hidden"
            initial={{ clipPath: "circle(0% at 92% 4%)" }} animate={{ clipPath: "circle(150% at 92% 4%)" }} exit={{ clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.7, ease }}>
            <div className="container-site flex h-[76px] items-center justify-between">
              <Logo light />
              <button className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink" onClick={() => setMobile(false)} aria-label="Close menu"><X className="h-5 w-5" /></button>
            </div>
            <div className="container-site pb-16 pt-6">
              {mainNav.map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.05, ease, duration: 0.6 }} className="border-b border-white/10 py-3">
                  <Link href={item.href} className="font-display text-3xl font-semibold tracking-tight">{item.label}</Link>
                  {"menu" in item && (
                    <div className="mt-3 grid grid-cols-1 gap-2 pl-1 sm:grid-cols-2">
                      {item.menu.map((m) => <Link key={m.href + m.label} href={m.href} className="text-[15px] text-white/60 hover:text-white">{m.label}</Link>)}
                    </div>
                  )}
                </motion.div>
              ))}
              <Link href={contactHref} className="btn btn-electric mt-8 w-full">Contact Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

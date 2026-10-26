"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import SplitHeading from "./motion/SplitHeading";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";
import TiltCard from "./motion/TiltCard";
import LazySphere from "./three/LazySphere";

const ease = [0.22, 1, 0.36, 1] as const;

const info = [
  { icon: Mail, title: "Email", text: "Send us your inquiry anytime", value: "info@datapanthersolutions.com", href: "mailto:info@datapanthersolutions.com" },
  { icon: Phone, title: "Phone", text: "Monday – Friday", value: "917075928464", href: "tel:917075928464" },
  { icon: MapPin, title: "Office", text: "Hyderabad, Telangana, India" },
  { icon: Clock, title: "Business Hours", text: "9:00 AM – 6:00 PM IST" },
];

function Field({ label, name, type = "text", placeholder, area }: { label: string; name: string; type?: string; placeholder: string; area?: boolean }) {
  const cls = "peer mt-2 w-full rounded-2xl border border-line bg-white px-5 py-4 text-[15px] outline-none transition-all focus:border-electric focus:shadow-[0_0_0_4px_rgba(0,26,255,0.1)]";
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">{label} <span className="text-electric">*</span></span>
      {area ? <textarea name={name} required rows={5} placeholder={placeholder} className={cls} /> : <input name={name} type={type} required placeholder={placeholder} className={cls} />}
    </label>
  );
}

export default function ContactView() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="on-dark noise relative overflow-hidden bg-night pb-28 pt-36 text-white sm:pt-44">
        <img src="/img/contact-bg.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-night via-night/90 to-night/30" />
        <LazySphere className="absolute -right-[10%] top-0 hidden h-full w-[60%] opacity-90 lg:block" />
        <div className="container-site relative">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="eyebrow">LET’S COLLABORATE</motion.span>
          <SplitHeading as="h1" text="Let’s Build Something Extraordinary Together" immediate delay={0.5} className="h-display mt-6 max-w-3xl text-[2.6rem] sm:text-6xl lg:text-7xl" />
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, ease, duration: 0.8 }} className="mt-6 max-w-xl text-lg text-white/70">
            Partner with us to design intelligent solutions that combine advanced AI capabilities with measurable business impact.
          </motion.p>
        </div>
      </section>

      <section className="relative bg-paper-cool py-24 sm:py-32">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal><span className="eyebrow">CONTACT</span></Reveal>
            <SplitHeading text="Connect With Our Team" className="h-section mt-5" />
            <Reveal><p className="lead mt-5">Speak with our specialists to explore how AI-driven solutions can strengthen your operations and accelerate business growth.</p></Reveal>
            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {info.map((c) => (
                <StaggerItem key={c.title}>
                  <TiltCard className="rounded-3xl">
                    <div className="group flex items-start gap-4 rounded-3xl border border-line bg-white p-6 transition-colors hover:border-electric/40">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-electric/10 text-electric transition-colors group-hover:bg-electric group-hover:text-white"><c.icon className="h-5 w-5" /></span>
                      <div>
                        <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                        <p className="text-[14.5px] text-ink-soft">{c.text}</p>
                        {c.value && <a href={c.href} className="mt-1 inline-block font-medium text-electric hover:underline">{c.value}</a>}
                      </div>
                    </div>
                  </TiltCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div className="lg:col-span-7">
            <Reveal className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-8 shadow-[0_40px_100px_-50px_rgba(0,26,255,0.35)] sm:p-12">
              <div aria-hidden className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-soft/30 blur-3xl" />
              <AnimatePresence mode="wait">
                {!sent ? (
                  <motion.form key="form" exit={{ opacity: 0, y: -20 }} onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="relative space-y-6">
                    <div>
                      <h2 className="font-display text-3xl font-semibold tracking-tight">Send us a Message</h2>
                      <p className="mt-2 text-ink-soft">Fill out the form and we&apos;ll be in touch soon!</p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field label="Full Name" name="fullName" placeholder="Your Name" />
                      <Field label="Email Address" name="email" type="email" placeholder="Mail@example.com" />
                    </div>
                    <Field label="Your Message" name="message" placeholder="Tell us how we can help you..." area />
                    <button className="btn btn-electric group w-full !py-4">Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></button>
                    <p className="text-center text-xs text-ink-soft">Protected by Cloudflare Turnstile Privacy Policy and Terms of Service.</p>
                  </motion.form>
                ) : (
                  <motion.div key="ok" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ ease, duration: 0.6 }} className="relative py-16 text-center">
                    <CheckCircle2 className="mx-auto h-16 w-16 text-mint" strokeWidth={1.3} />
                    <h2 className="mt-6 font-display text-3xl font-semibold">Message sent</h2>
                    <p className="mt-2 text-ink-soft">Fill out the form and we&apos;ll be in touch soon!</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

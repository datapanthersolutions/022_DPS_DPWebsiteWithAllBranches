"use client";
import Link from "@/components/TLink";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, Clock, Calendar, Share2 } from "lucide-react";
import type { Post } from "@/content/types";
import SplitHeading from "./motion/SplitHeading";
import { Reveal } from "./motion/Reveal";
import PostCover from "./PostCover";
import { Btn } from "./sections/Shared";

const ease = [0.22, 1, 0.36, 1] as const;
const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Splits "Label: rest" list items so the label can be emphasised.
function Li({ t }: { t: string }) {
  const m = t.match(/^([^:]{2,60}):\s(.+)$/);
  return m ? <><strong className="font-semibold text-ink">{m[1]}:</strong> {m[2]}</> : <>{t}</>;
}

export default function PostView({ post, back, related }: { post: Post; back: { label: string; href: string }; related: Post[] }) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const toc = post.body.filter((b) => b.heading && b.heading !== post.title).map((b) => b.heading!);
  const [active, setActive] = useState(toc[0]);

  useEffect(() => {
    const obs = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.getAttribute("data-h")!)), { rootMargin: "-30% 0px -60% 0px" });
    document.querySelectorAll("[data-h]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const meta = [post.date && { icon: Calendar, t: post.date }, post.readTime && { icon: Clock, t: post.readTime }].filter(Boolean) as { icon: typeof Clock; t: string }[];

  return (
    <article>
      <section className="relative overflow-hidden bg-white pb-12 pt-36 sm:pt-44">
        <div aria-hidden className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div aria-hidden className="absolute -top-32 right-0 h-[480px] w-[640px] rounded-full bg-gradient-to-br from-electric/20 to-violet-soft/25 blur-[100px]" />
        <div className="container-site relative max-w-5xl">
          <Link href={back.href} className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-electric"><ArrowLeft className="h-4 w-4" />{back.label}</Link>
          {post.category && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="eyebrow mt-10 flex">{post.category}</motion.span>}
          <SplitHeading as="h1" text={post.title} immediate delay={0.5} className="h-display mt-5 text-4xl sm:text-5xl lg:text-6xl" />
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, ease, duration: 0.8 }} className="lead mt-6 max-w-3xl">{post.excerpt}</motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-8 flex flex-wrap items-center gap-5 text-sm text-ink-soft">
            {meta.map(({ icon: I, t }) => <span key={t} className="inline-flex items-center gap-2"><I className="h-4 w-4" />{t}</span>)}
            <button onClick={() => navigator.share?.({ title: post.title, url: location.href }).catch(() => {})} className="inline-flex items-center gap-2 hover:text-electric"><Share2 className="h-4 w-4" />Share</button>
          </motion.div>
        </div>
        <motion.div initial={{ clipPath: "inset(30% 10% 30% 10% round 2rem)", opacity: 0 }} animate={{ clipPath: "inset(0% 0% 0% 0% round 2rem)", opacity: 1 }} transition={{ delay: 0.7, duration: 1.3, ease }}
          className="container-site relative mt-12 max-w-6xl">
          <div className="aspect-[21/9] overflow-hidden rounded-[2rem]"><PostCover image={post.image} title={post.title} label={post.category} index={post.title.length} /></div>
        </motion.div>
      </section>

      <motion.div style={{ scaleX: progress }} className="sticky top-0 z-40 h-1 origin-left bg-electric" />

      <section className="bg-white pb-24 pt-10">
        <div className="container-site grid max-w-6xl gap-14 lg:grid-cols-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28">
              {toc.length > 1 && <>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">ON THIS PAGE</h3>
                <ul className="mt-5 space-y-1 border-l border-line">
                  {toc.map((h) => (
                    <li key={h}><a href={`#${slugify(h)}`} className={`-ml-px block border-l-2 py-1.5 pl-4 text-[13.5px] transition-colors ${active === h ? "border-electric text-electric" : "border-transparent text-ink-soft hover:text-ink"}`}>{h}</a></li>
                  ))}
                </ul>
              </>}
              {post.tags && post.tags.length > 0 && <>
                <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">TAGS</h3>
                <div className="mt-4 flex flex-wrap gap-2">{post.tags.map((t) => <span key={t} className="rounded-full bg-paper-cool px-3 py-1 text-[12.5px] text-ink-soft">#{t}</span>)}</div>
              </>}
            </div>
          </aside>
          <div className="lg:col-span-9">
            {post.body.map((b, i) => (
              <Reveal key={i} y={24}>
                <div data-h={b.heading} id={b.heading ? slugify(b.heading) : undefined} className="scroll-mt-28">
                  {b.heading && b.heading !== post.title && (b.level === 3
                    ? <h3 className="mt-10 font-display text-2xl font-semibold tracking-tight">{b.heading}</h3>
                    : <h2 className="mt-14 font-display text-3xl font-semibold tracking-tight first:mt-0">{b.heading}</h2>)}
                  {b.paragraphs?.map((p, k) => <p key={k} className="mt-5 text-[17.5px] leading-[1.8] text-ink-soft">{p}</p>)}
                  {b.bullets && (
                    <ul className="mt-6 space-y-3">
                      {b.bullets.map((x, k) => (
                        <li key={k} className="flex gap-4 rounded-2xl border border-line bg-paper-cool/60 p-4 text-[16px] leading-relaxed text-ink-soft">
                          <span className="mt-0.5 font-display text-sm font-semibold text-electric">{b.numbered ? String(k + 1).padStart(2, "0") : "→"}</span>
                          <span><Li t={x} /></span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
            {post.extras?.map((e) => (
              <Reveal key={e.heading} className="mt-12 rounded-3xl bg-mint-bg p-8">
                <h3 className="font-display text-xl font-semibold text-mint-deep">{e.heading}</h3>
                {e.paragraphs?.map((p) => <p key={p} className="mt-3 text-mint-deep/90">{p}</p>)}
                {e.bullets && <ul className="mt-3 list-disc space-y-1 pl-5 text-mint-deep/90">{e.bullets.map((x) => <li key={x}>{x}</li>)}</ul>}
              </Reveal>
            ))}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 flex flex-wrap gap-2 lg:hidden">{post.tags.map((t) => <span key={t} className="rounded-full bg-paper-cool px-3 py-1 text-[12.5px] text-ink-soft">#{t}</span>)}</div>
            )}
            <Reveal className="on-dark relative mt-16 overflow-hidden rounded-[2rem] bg-night p-8 text-white sm:p-12">
              <div aria-hidden className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-electric blur-3xl opacity-60" />
              <h3 className="relative font-display text-3xl font-semibold">Enjoyed this article?</h3>
              <p className="relative mt-3 max-w-xl text-white/70">Explore more insights from the Data Panther team on AI, data analytics, and digital transformation.</p>
              <div className="relative mt-6"><Btn link={{ label: post.kind === "blog" ? "Browse all articles" : "Browse all insights", href: back.href }} variant="light" /></div>
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-paper-cool py-24">
          <div className="container-site">
            <h2 className="h-section">Keep reading</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((r, i) => (
                <Link key={r.slug} href={`/${r.kind === "blog" ? "blog" : "article"}/${r.slug}/`} className="group overflow-hidden rounded-3xl border border-line bg-white">
                  <div className="aspect-[16/10] overflow-hidden"><PostCover image={r.image} title={r.title} index={i + 2} label={r.category} /></div>
                  <div className="p-6">
                    {r.category && <span className="text-xs font-semibold uppercase tracking-[0.16em] text-electric">{r.category}</span>}
                    <h3 className="mt-2 font-display text-lg font-semibold group-hover:text-electric">{r.title}</h3>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium">Read <ArrowUpRight className="h-4 w-4" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}

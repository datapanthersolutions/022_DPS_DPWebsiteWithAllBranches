"use client";
import Link from "@/components/TLink";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import type { Post } from "@/content/types";
import PostCover from "./PostCover";
import { Reveal } from "./motion/Reveal";
import TiltCard from "./motion/TiltCard";

export default function FeaturedPost({ post, href, label, cta }: { post: Post; href: string; label: string; cta: string }) {
  return (
    <Reveal>
      <TiltCard className="rounded-[2rem]">
        <Link href={href} className="group grid overflow-hidden rounded-[2rem] border border-line bg-white lg:grid-cols-2">
          <div className="relative aspect-[16/11] overflow-hidden lg:aspect-auto lg:min-h-[420px]"><PostCover image={post.image} title={post.title} label={post.image ? undefined : post.category} /></div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <span className="eyebrow">{label}</span>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight group-hover:text-electric sm:text-4xl">{post.title}</h2>
            <p className="lead mt-4">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-5 text-sm text-ink-soft">
              {post.date && <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" />{post.date}</span>}
              {post.readTime && <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" />{post.readTime}</span>}
            </div>
            <span className="btn btn-primary mt-8 w-fit">{cta} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" /></span>
          </div>
        </Link>
      </TiltCard>
    </Reveal>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    Clock,
    Calendar,
    Share2,
    Bookmark,
    Heart,
    Tag,
    ChevronRight,
} from "lucide-react";

interface Section {
    id: string;
    heading: string;
    content: string;
    bullets?: string[];
}

interface BlogData {
    slug: string;
    title: string;
    excerpt: string;
    author: { name: string; role: string };
    date: string;
    readTime: string;
    category: string;
    tags: string[];
    sections: Section[];
}

export default function ReadBlogPost({ data }: { data: BlogData }) {
    const [activeSection, setActiveSection] = useState(
        data.sections[0]?.id || ""
    );
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(42);
    const [readProgress, setReadProgress] = useState(0);

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikes(isLiked ? likes - 1 : likes + 1);
    };

    const handleShare = () => {
        if (typeof navigator !== "undefined" && navigator.share) {
            navigator.share({ title: data.title, url: window.location.href });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            setReadProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

            const sections = data.sections.map((s) =>
                document.getElementById(s.id)
            );

            const scrollPosition = window.scrollY + 150;

            sections.forEach((section, index) => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (
                        scrollPosition >= sectionTop &&
                        scrollPosition < sectionTop + sectionHeight
                    ) {
                        setActiveSection(data.sections[index].id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [data.sections]);

    return (
        <div className="min-h-screen bg-dp-navy/5">
            {/* Reading Progress */}
            <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-dp-navy/10">
                <motion.div
                    className="h-full bg-dp-gradient"
                    style={{ width: `${readProgress}%` }}
                    transition={{ duration: 0.1 }}
                />
            </div>

            {/* ── HERO HEADER ── */}
            <header
                className="relative pt-28 pb-16 md:pt-32 md:pb-20 bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: "url('/blogbg.png')" }}
            >
                {/* brand wash over the photo */}
                <div className="absolute inset-0 bg-dp-navy/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-dp-gradient opacity-60"></div>

                <div className="relative max-w-4xl mx-auto px-4">
                    {/* Back */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    {/* Category */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium border border-white/30">
                            {data.category}
                        </span>

                        {data.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="text-white/70 text-xs flex items-center gap-1"
                            >
                                <Tag className="w-3 h-3" />
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-light text-white mb-6 leading-tight tracking-tight"
                    >
                        {data.title}
                    </motion.h1>

                    {/* Excerpt */}
                    <p className="text-lg text-white/80 max-w-3xl mb-8 leading-relaxed">
                        {data.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex flex-wrap items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white font-medium text-base">
                                {data.author.name.charAt(0)}
                            </div>

                            <div>
                                <p className="text-white font-medium text-sm">
                                    {data.author.name}
                                </p>
                                <p className="text-white/70 text-xs">
                                    {data.author.role}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-white/70 text-sm">
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                {data.date}
                            </span>

                            <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" />
                                {data.readTime}
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            {/* ── MAIN CONTENT ── */}
            <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-10">

                {/* Article */}
                <main className="flex-1 max-w-3xl">

                    {/* Interaction */}
                    <div className="flex items-center gap-4 mb-10 pb-6 border-b border-dp-navy/15">
                        <button
                            onClick={handleLike}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isLiked
                                ? "bg-red-50 text-red-600 border border-red-200"
                                : "bg-dp-navy/5 text-dp-navy/70 hover:bg-dp-navy/10"
                                }`}
                        >
                            <Heart
                                className={`w-4 h-4 ${isLiked ? "fill-current" : ""
                                    }`}
                            />
                            {likes}
                        </button>

                        <button
                            onClick={() =>
                                setIsBookmarked(!isBookmarked)
                            }
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isBookmarked
                                ? "bg-amber-50 text-amber-600 border border-amber-200"
                                : "bg-dp-navy/5 text-dp-navy/70 hover:bg-dp-navy/10"
                                }`}
                        >
                            <Bookmark
                                className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""
                                    }`}
                            />
                            Save
                        </button>

                        <button
                            onClick={handleShare}
                            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-dp-navy/5 text-dp-navy/70 hover:bg-dp-navy/10 transition-all duration-300"
                        >
                            <Share2 className="w-4 h-4" />
                            Share
                        </button>
                    </div>

                    {/* Sections */}
                    {data.sections.map((section, idx) => (
                        <motion.section
                            key={section.id}
                            id={section.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-semibold text-dp-navy mb-4">
                                {section.heading}
                            </h2>

                            <p className="text-dp-navy/70 leading-[1.8] mb-5 text-[15px]">
                                {section.content}
                            </p>

                            {section.bullets && (
                                <ul className="space-y-3">
                                    {section.bullets.map((bullet, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3"
                                        >
                                            <ChevronRight className="w-4 h-4 text-dp-magenta mt-1 shrink-0" />
                                            <span className="text-dp-navy/70 text-[15px] leading-relaxed">
                                                {bullet}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.section>
                    ))}

                    {/* CTA */}
                    <div className="relative mt-16 p-8 rounded-xl bg-dp-gradient overflow-hidden">
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Enjoyed this article?
                        </h3>

                        <p className="text-white/85 mb-5">
                            Explore more insights from the Data Panther team
                            on AI, data analytics, and digital transformation.
                        </p>

                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 bg-white text-dp-navy font-medium px-6 py-3 rounded-lg hover:bg-white/90 transition-all"
                        >
                            Browse all articles
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </main>

                {/* Sidebar */}
                <aside className="hidden lg:block w-72 border-l border-dp-navy/15 pl-8">
                    <div className="sticky top-20">

                        {/* Table of contents */}
                        <div className="mb-10">
                            <h3 className="text-xs text-dp-navy/40 uppercase tracking-widest mb-5">
                                On this page
                            </h3>

                            <ul className="space-y-1">
                                {data.sections.map((section) => (
                                    <li key={section.id}>
                                        <a
                                            href={`#${section.id}`}
                                            className={`block py-2 text-sm transition-colors border-l-2 -ml-[2px] pl-4 ${activeSection === section.id
                                                ? "text-dp-magenta font-medium border-dp-magenta"
                                                : "text-dp-navy/50 hover:text-dp-navy border-transparent"
                                                }`}
                                        >
                                            {section.heading}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tags */}
                        <div>
                            <h3 className="text-xs text-dp-navy/40 uppercase tracking-widest mb-4">
                                Tags
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {data.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs text-dp-magenta"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </aside>
            </div>
        </div>
    );
}
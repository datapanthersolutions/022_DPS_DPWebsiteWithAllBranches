"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Share2,
  Bookmark,
  MessageSquare,
  Heart,
  ChevronRight,
} from "lucide-react";

interface Section {
  id: string;
  heading: string;
  content: string;
  bullets?: string[];
}

interface ArticleData {
  title: string;
  author: string;
  date: string;
  readTime: string;
  likes: number;
  comments: number;
  sections: Section[];
}

export default function ReadArticle({ data }: { data: ArticleData }) {
  const [activeSection, setActiveSection] = useState(
    data.sections[0]?.id || ""
  );
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(data.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: data.title,
        url: window.location.href,
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
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
    <div className="min-h-screen bg-[#fafbfc]">
      {/* HERO */}
      <section className="relative bg-[#29235B] pt-36 pb-24 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/blogbg.webp')" }}
        />

        <div className="relative max-w-4xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-light text-white leading-tight"
          >
            {data.title}
          </motion.h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-14 flex flex-col lg:flex-row gap-12">
        {/* Article */}
        <main className="flex-1 max-w-3xl">
          <article>
            {/* Meta */}
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {data.author}
                </span>

                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {data.date}
                </span>

                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {data.readTime}
                </span>

                <button
                  onClick={handleLike}
                  className="flex items-center gap-1 hover:text-red-500 transition"
                >
                  <Heart
                    className={`w-4 h-4 ${isLiked ? "text-red-600 fill-current" : ""
                      }`}
                  />
                  {likes}
                </button>

                <span className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  {data.comments}
                </span>

                <button
                  onClick={handleShare}
                  className="flex items-center gap-1 hover:text-[#29235B] transition"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>

                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`flex items-center gap-1 transition ${isBookmarked
                    ? "text-amber-600"
                    : "text-gray-500 hover:text-gray-700"
                    }`}
                >
                  <Bookmark
                    className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""
                      }`}
                  />
                  Save
                </button>
              </div>
            </header>

            {/* Sections */}
            {data.sections.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-light text-gray-900 mb-4">
                  {section.heading}
                </h2>

                <p className="text-gray-600 leading-[1.8] text-[15px] mb-5">
                  {section.content}
                </p>

                {section.bullets && (
                  <ul className="space-y-3">
                    {section.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-4 h-4 text-[#29235B] mt-1" />

                        <span className="text-gray-600 text-[15px] leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.section>
            ))}
          </article>
        </main>

        {/* Sidebar */}
        <aside className="hidden lg:block w-64">
          <div className="sticky top-24 border-l border-gray-200 pl-6">
            <h3 className="text-xs text-gray-400 uppercase tracking-widest mb-6">
              On this page
            </h3>

            <ul className="space-y-2">
              {data.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(section.id)
                        ?.scrollIntoView({ behavior: "smooth" });

                      setActiveSection(section.id);
                    }}
                    className={`block text-sm transition ${activeSection === section.id
                      ? "text-[#29235B] font-medium"
                      : "text-gray-500 hover:text-gray-800"
                      }`}
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
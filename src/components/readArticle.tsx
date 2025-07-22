
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Share2,
  Bookmark,
  MessageSquare,
  Heart
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
  const [activeSection, setActiveSection] = useState(data.sections[0]?.id || "");
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
      const sections = data.sections.map(section => document.getElementById(section.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(data.sections[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data.sections]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center text-indigo-600 hover:underline">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
          </Link>
          <div className="flex items-center space-x-4">
            <button onClick={handleShare} className="text-gray-500 hover:text-indigo-600">
              <Share2 className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsBookmarked(!isBookmarked)} 
              className={`text-gray-500 hover:text-yellow-600 ${isBookmarked ? 'text-yellow-600' : ''}`}
            >
              <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        <main className="flex-1">
          <article>
            <header className="mb-8">
              <div className="mb-4 text-sm text-gray-500 flex items-center space-x-4">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />{data.readTime}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />{data.date}
                </span>
              </div>
              <h1 className="text-4xl font-serif font-semibold mb-4 leading-tight">
                {data.title}
              </h1>
              <div className="text-sm text-gray-600 flex items-center space-x-3">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />{data.author}
                </div>
                <div className="flex items-center cursor-pointer" onClick={handleLike}>
                  <Heart className={`w-4 h-4 mr-1 ${isLiked ? 'fill-red-600 text-red-600' : ''}`} />
                  {likes}
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-1" />{data.comments} comments
                </div>
              </div>
            </header>

            {/* Dynamic Sections */}
            {data.sections.map((section) => (
              <section key={section.id} id={section.id} className="mb-12">
                <h2 className="text-2xl font-serif mb-4">{section.heading}</h2>
                <p className="leading-relaxed mb-4">{section.content}</p>
                {section.bullets && (
                  <ul className="list-disc list-inside text-gray-700">
                    {section.bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>
        </main>

        {/* Sidebar Table of Contents */}
        <aside className="hidden lg:block w-64 sticky top-24 self-start">
          <div className="border-l-2 border-gray-100 pl-4 space-y-4">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              On this page
            </h3>
            <ul className="space-y-2">
              {data.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                      setActiveSection(section.id);
                    }}
                    className={`flex items-center text-sm font-medium transition-colors ${
                      activeSection === section.id
                        ? "text-indigo-600"
                        : "text-gray-600 hover:text-indigo-500"
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
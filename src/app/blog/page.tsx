"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Search,
    Clock,
    Calendar,
    ArrowRight,
    ChevronRight,
    BookOpen,
    TrendingUp,
} from "lucide-react";

interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    image: string;
    author: { name: string; role: string };
    date: string;
    readTime: string;
    category: string;
    tags: string[];
}

const blogPosts: BlogPost[] = [
    {
        slug: "ai-business-growth-across-industries",
        title: "How AI Can Accelerate Business Growth Across Industries",
        image: "/Blog5.webp",
        excerpt:
            "AI is no longer a future technology — it's a growth technology. See how manufacturing, supply chain, healthcare, retail, and real estate turn data into faster, more profitable growth.",
        author: { name: "Rajesh Verma", role: "AI Strategy Consultant" },
        date: "March 18, 2026",
        readTime: "11 min read",
        category: "Business Strategy",
        tags: ["AI Strategy", "Automation", "Digital Transformation"],
    },
    {
        slug: "25-reasons-hospitals-should-use-ai",
        title: "25 Reasons Hospitals Should Use AI More (With Real-World Examples)",
        image: "/Blog4.webp",
        excerpt:
            "AI in healthcare is no longer experimental — it's operational. 25 real-world reasons hospitals should accelerate AI adoption to improve outcomes, cut costs, and scale care.",
        author: { name: "Dr. Aisha Rahman", role: "Healthcare AI Lead" },
        date: "March 5, 2026",
        readTime: "10 min read",
        category: "Healthcare",
        tags: ["AI in Healthcare", "Hospitals", "Clinical AI"],
    },
    {
        slug: "ai-transforming-business",
        title: "How AI is Transforming Modern Business Operations",
        image: "/Blog1.webp",
        excerpt:
            "Artificial intelligence is redefining operational efficiency, enabling predictive decision-making and reshaping enterprise strategy.",
        author: { name: "Ali Hassan", role: "AI Strategy Lead" },
        date: "February 20, 2026",
        readTime: "10 min read",
        category: "Artificial Intelligence",
        tags: ["AI", "Automation", "Enterprise"],
    },
    {
        slug: "data-driven-decision-making",
        title: "The Art and Science of Data-Driven Decision Making",
        image: "/AdvanceBI.webp",
        excerpt:
            "How leading enterprises leverage analytics to accelerate insight and competitive advantage.",
        author: { name: "Priya Sharma", role: "Data Analytics Director" },
        date: "February 15, 2026",
        readTime: "8 min read",
        category: "Data Analytics",
        tags: ["Analytics", "Business Intelligence"],
    },
    {
        slug: "future-of-llms",
        title: "The Future of Large Language Models",
        image: "/ETHICALAI.webp",
        excerpt:
            "Understanding the enterprise impact of next-generation language AI systems.",
        author: { name: "Ahmed Khan", role: "ML Research Engineer" },
        date: "February 10, 2026",
        readTime: "12 min read",
        category: "Machine Learning",
        tags: ["LLMs", "NLP"],
    },
];

const categories = [
    "All",
    "Artificial Intelligence",
    "Data Analytics",
    "Machine Learning",
];

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => setIsLoaded(true), []);

    const filtered = blogPosts.filter((post) => {
        const matchCategory =
            selectedCategory === "All" || post.category === selectedCategory;
        const matchSearch =
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchCategory && matchSearch;
    });

    const featured = blogPosts[0];

    return (
        <div className="min-h-screen bg-white text-dp-navy">

            {/* HERO */}
            <section
                className="relative pt-40 pb-28 text-center overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/blogbg.webp')" }}
            >
                {/* brand wash over the photo */}
                <div className="absolute inset-0 bg-dp-navy/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-dp-gradient opacity-60"></div>

                <div className="relative max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="uppercase tracking-[0.3em] text-white/70 text-sm mb-6 font-medium">
                            Insights & Research
                        </p>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
                            Data Panther
                            <span className="block font-light">
                                Intelligence Journal
                            </span>
                        </h1>

                        <p className="text-white/80 text-lg max-w-2xl mx-auto">
                            Strategic thought leadership on artificial intelligence,
                            analytics, and enterprise innovation.
                        </p>
                    </motion.div>

                    {/* Search */}
                    <div className="mt-12 max-w-xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-dp-navy/40 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-5 py-4 rounded-xl bg-white text-dp-navy border border-white/20 focus:ring-2 focus:ring-dp-magenta focus:outline-none"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED */}
            <section className="max-w-6xl mx-auto px-6 -mt-20 mb-24 relative z-10">
                <Link href={`/blog/${featured.slug}`}>
                    <div className="group relative bg-white rounded-3xl border border-dp-navy/15 overflow-hidden transition-all duration-300 cursor-pointer hover:border-dp-magenta/40 hover:shadow-xl">
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                        <div className="p-6 sm:p-10 md:p-14">
                            <span className="uppercase text-sm tracking-wider text-dp-magenta font-medium">
                                Featured · {featured.category}
                            </span>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-dp-navy mt-6 mb-6">
                                {featured.title}
                            </h2>

                            <p className="text-dp-navy/70 text-lg mb-8 leading-relaxed max-w-3xl">
                                {featured.excerpt}
                            </p>

                            <div className="flex items-center gap-6 text-sm text-dp-navy/50">
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    {featured.date}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    {featured.readTime}
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>

            {/* FILTERS */}
            <section className="max-w-6xl mx-auto px-6 mb-12">
                <div className="flex flex-wrap gap-3 justify-center">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm transition ${selectedCategory === cat
                                ? "bg-dp-magenta text-white"
                                : "bg-white border border-dp-navy/20 text-dp-navy/70 hover:text-dp-magenta hover:border-dp-magenta/40"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* GRID */}
            <section className="max-w-6xl mx-auto px-6 pb-32">

                {/* Top bar */}
                <div className="flex justify-between mb-10 text-sm text-dp-navy/50">
                    <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        {filtered.length} Articles
                    </div>

                    <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Latest First
                    </div>
                </div>

                <div className="space-y-6">

                    {filtered.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                        >
                            <Link href={`/blog/${post.slug}`}>

                                <article className="group relative flex flex-col sm:flex-row gap-5 sm:gap-8 bg-white border border-dp-navy/15 rounded-xl p-4 sm:p-6 cursor-pointer overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1">

                                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />

                                    {/* Image */}
                                    <div className="w-full sm:w-[180px] sm:h-[180px] h-48 flex-shrink-0 overflow-hidden rounded-lg">
                                        <img
                                            src={post.image || "/blog-default.jpg"}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Right Content */}
                                    <div className="flex flex-col justify-between">

                                        <div>
                                            <span className="text-xs uppercase tracking-wider text-dp-magenta font-medium">
                                                {post.category}
                                            </span>

                                            <h3 className="text-lg sm:text-xl font-semibold text-dp-navy mt-2 mb-2 group-hover:text-dp-magenta transition">
                                                {post.title}
                                            </h3>

                                            <p className="text-sm text-dp-navy/60 mb-3">
                                                {post.date} — {post.excerpt}
                                            </p>
                                        </div>

                                        {/* Read Article */}
                                        <span className="text-sm text-dp-magenta font-medium flex items-center gap-2 mt-3">
                                            Read Article
                                            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </span>

                                    </div>

                                </article>

                            </Link>
                        </motion.div>
                    ))}

                </div>

            </section>

            {/* NEWSLETTER */}
            <section className="relative bg-[url('/subscribe.webp')] bg-cover bg-center py-24">

                {/* brand wash */}
                <div className="absolute inset-0 bg-dp-navy/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-dp-gradient opacity-60"></div>

                {/* Content */}
                <div className="relative z-10 max-w-6xl mx-auto px-6">

                    <div className="max-w-lg text-left">

                        <h2 className="text-4xl font-light text-white mb-6">
                            Stay Ahead of the Curve
                        </h2>

                        <p className="text-white/90 mb-10 text-lg">
                            Receive curated insights on AI, analytics, and enterprise innovation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 border border-white/30 rounded-xl bg-white text-dp-navy focus:ring-2 focus:ring-dp-magenta focus:outline-none"
                            />

                            <button className="px-8 py-4 bg-white text-dp-navy font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-white/90 transition">
                                Subscribe
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}
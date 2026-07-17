"use client";
import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  Calendar,
  Clock,
  Filter,
  ChevronDown,
  ChevronRight,
  Search,
  Eye,
  Award,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface Insight {
  id: string;
  articleSlug?: string;
  title: string;
  category: string;
  description: string;
  readTime: string;
  date: string;
  featured?: boolean;
  trending?: boolean;
  image?: string;
  views?: number;
  tags?: string[];
}

const insights: Insight[] = [
  {
    id: "1",
    articleSlug: "real-time-analytics",
    title: "The Future of Real-Time Analytics in Enterprise",
    category: "Technology",
    description:
      "Explore how real-time analytics is transforming decision-making by enabling instant data insights and faster response times across industries.",
    readTime: "8 min read",
    date: "2025-07-10",
    featured: true,
    trending: true,
    image: "/RTA.jpeg",
    views: 12500,
    tags: ["Real-time", "Analytics", "Enterprise", "AI"],
  },
  {
    id: "2",
    articleSlug: "ml-model-deployment",
    title: "Machine Learning Model Deployment at Scale",
    category: "AI/ML",
    description:
      "Discover the key strategies for deploying machine learning models efficiently in large-scale production environments.",
    readTime: "12 min read",
    date: "2025-07-08",
    image: "/MLMDAS.jpeg",
    views: 8900,
    tags: ["ML", "Deployment", "DevOps", "Scale"],
  },
  {
    id: "3",
    articleSlug: "data-privacy-regulations",
    title: "Data Privacy Regulations: What Businesses Need to Know",
    category: "Compliance",
    description:
      "Understand key global data privacy frameworks and how businesses can maintain compliance and customer trust.",
    readTime: "6 min read",
    date: "2025-07-05",
    trending: true,
    image: "/DPRFB.jpeg",
    views: 15200,
    tags: ["Privacy", "GDPR", "Compliance"],
  },
  {
    id: "4",
    articleSlug: "customer-analytics",
    title: "Customer Analytics: Beyond Traditional Metrics",
    category: "Strategy",
    description:
      "Learn how advanced analytics techniques are redefining customer insights and improving engagement strategies.",
    readTime: "10 min read",
    date: "2025-07-02",
    image: "/ACABTM.jpeg",
    views: 9800,
    tags: ["Analytics", "Customer", "Strategy"],
  },
  {
    id: "5",
    articleSlug: "edge-computing-data-processing",
    title: "The Rise of Edge Computing in Data Processing",
    category: "Technology",
    description:
      "See how edge computing is reshaping data processing with reduced latency and real-time decision-making.",
    readTime: "7 min read",
    date: "2025-06-28",
    image: "/REC.jpeg",
    views: 6700,
    tags: ["Edge", "IoT", "Processing"],
  },
  {
    id: "6",
    articleSlug: "ethical-ai",
    title: "Ethical AI: Building Responsible Machine Learning Systems",
    category: "AI/ML",
    description:
      "Understand the importance of ethical AI, bias detection, and fairness in machine learning development.",
    readTime: "9 min read",
    date: "2025-06-25",
    image: "/ETHICALAI.png",
    views: 11400,
    tags: ["Ethics", "AI", "Bias"],
  },
];

const categories = ["All", "Technology", "AI/ML", "Strategy", "Compliance"];

export default function ProfessionalInsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  const filteredInsights = insights
    .filter((insight) => {
      const matchesCategory =
        selectedCategory === "All" || insight.category === selectedCategory;
      const matchesSearch =
        insight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        insight.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        insight.tags?.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "views":
          return (b.views || 0) - (a.views || 0);
        case "date":
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

  const featuredInsight = insights.find((i) => i.featured);

  const LoadingSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-48 bg-dp-navy/10 rounded-xl mb-4"></div>
      <div className="h-4 bg-dp-navy/10 rounded mb-2"></div>
      <div className="h-4 bg-dp-navy/10 rounded w-3/4"></div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dp-navy/5 flex justify-center items-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 w-full max-w-6xl">
          {[...Array(6)].map((_, i) => (
            <LoadingSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dp-navy/5 mt-12">

      <header className="relative py-28 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/blogbg.png"
            alt="Insights Background"
            className="w-full h-full object-cover"
          />
          {/* brand gradient wash instead of flat black */}
          <div className="absolute inset-0 bg-dp-navy/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-dp-gradient opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <p className="uppercase tracking-[0.35em] text-xs mb-4 text-white/70 font-medium">
            Data Insights Hub
          </p>
          <h1 className="text-5xl font-light text-white mb-4">
            Data Insights Hub
          </h1>

          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            Explore trends, innovations, and expert insights shaping the future
            of analytics and AI.
          </p>
        </div>

      </header>

      {/* Featured Insight */}
      {featuredInsight && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-dp-magenta text-white px-4 py-2 rounded-full text-sm">
                <Award className="w-4 h-4" />
                Featured Insight
              </div>
              <h2 className="text-3xl font-light text-dp-navy mt-4">
                Editor&rsquo;s Pick
              </h2>
            </div>

            <div className="relative flex flex-col md:flex-row gap-8 items-center bg-white border border-dp-navy/15 rounded-xl p-8 overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
              <img
                src={featuredInsight.image}
                alt={featuredInsight.title}
                className="w-full md:w-1/2 h-96 object-cover rounded-lg"
              />
              <div className="flex flex-col gap-4">
                <span className="bg-dp-magenta text-white px-4 py-1 rounded-full text-sm w-fit">
                  {featuredInsight.category}
                </span>
                <h3 className="text-2xl font-semibold text-dp-navy leading-snug">
                  {featuredInsight.title}
                </h3>
                <p className="text-dp-navy/70">{featuredInsight.description}</p>
                <div className="flex items-center gap-4 text-sm text-dp-navy/50">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredInsight.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredInsight.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {featuredInsight.views?.toLocaleString()}
                  </span>
                </div>
                <Link href={`/article/${featuredInsight.articleSlug}`} passHref>
                  <button className="mt-4 bg-dp-magenta text-white px-6 py-3 rounded-lg hover:bg-dp-magenta/90 transition-all flex items-center gap-2 w-fit">
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="py-10 bg-white border-t border-dp-navy/10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                  ? "bg-dp-magenta text-white"
                  : "bg-dp-navy/5 text-dp-navy/80 hover:bg-dp-navy/10"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex gap-4 items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dp-navy/40 w-4 h-4" />
              <input
                type="text"
                placeholder="Search insights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 border border-dp-navy/20 rounded-lg focus:ring-1 focus:ring-dp-magenta focus:border-dp-magenta focus:outline-none"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-dp-navy/20 rounded-lg focus:ring-1 focus:ring-dp-magenta focus:outline-none"
            >
              <option value="date">Latest</option>
              <option value="views">Most Viewed</option>
            </select>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-dp-navy/20 rounded-lg hover:bg-dp-navy/5"
            >
              <Filter className="w-4 h-4" />
              Filters
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""
                  }`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-14 bg-dp-navy/5">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInsights.map((insight) => (
            <div
              key={insight.id}
              className="group relative bg-white border border-dp-navy/15 rounded-xl overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient z-10" />
              <div className="overflow-hidden">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-dp-navy/80 bg-dp-navy/5 px-3 py-1 rounded-full">
                    {insight.category}
                  </span>
                  {insight.trending && (
                    <span className="text-xs text-dp-magenta font-medium flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> Trending
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-dp-navy mb-2 line-clamp-2">
                  {insight.title}
                </h3>
                <p className="text-dp-navy/70 text-sm mb-4 line-clamp-3">
                  {insight.description}
                </p>
                <div className="flex items-center justify-between text-sm border-t border-dp-navy/10 pt-3">
                  <Link href={`/article/${insight.articleSlug}`} passHref>
                    <span className="text-dp-magenta hover:text-dp-magenta/80 font-medium flex items-center gap-1 cursor-pointer">
                      Read More <ChevronRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

"use client";
import React, { useState, useEffect } from 'react';
import {
  BarChart3,
  TrendingUp,
  Calendar,
  Clock,
  Users,
  Target,
  Globe,
  ChevronRight,
  Search,
  Brain,
  ArrowRight,
  BookOpen,
  Eye,
  Heart,
  Share2,
  Filter,
  Sparkles,
  Zap,
  Award,
  Star,
  Play,
  Download,
  Bell,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import { article } from 'framer-motion/client';


interface Insight {
  id: string;
  articleSlug?: string; // Optional for articles that may not have a slug
  title: string;
  category: string;
  description: string;
  readTime: string;
  date: string;
  featured?: boolean;
  trending?: boolean;
  image?: string;
  views?: number;
  likes?: number;
  author?: string;
  tags?: string[];
}

const insights: Insight[] = [
  {
    id: '1',
    articleSlug: 'real-time-analytics',
    title: 'The Future of Real-Time Analytics in Enterprise',
    category: 'Technology',
    description: 'Explore how real-time analytics is revolutionizing enterprise decision-making by enabling instant data insights, smarter forecasting, and faster response times. From financial services to manufacturing, see how companies are gaining competitive advantages through real-time intelligence.',
    readTime: '8 min read',
    date: '2025-07-10',
    featured: true,
    trending: true,
    image: '/Realtimeanalytics.png',
    views: 12500,
    likes: 245,
    author: 'Ali Hassan',
    tags: ['Real-time', 'Analytics', 'Enterprise', 'AI']
  },
  {
    id: '2',
    articleSlug: 'ml-model-deployment',
    title: 'Machine Learning Model Deployment at Scale',
    category: 'AI/ML',
    description: 'Learn the key challenges and proven strategies for deploying machine learning models across large-scale production environments. This guide covers CI/CD for ML, model versioning, monitoring, and ensuring model performance and reliability post-deployment.',
    readTime: '12 min read',
    date: '2025-07-08',
    image: '/ModelEvaluation.png',
    views: 8900,
    likes: 189,
    author: 'Mujeeb ur Rehman',
    tags: ['ML', 'Deployment', 'DevOps', 'Scale']
  },
  {
    id: '3',
    articleSlug: 'data-privacy-regulations',
    title: 'Data Privacy Regulations: What Businesses Need to Know',
    category: 'Compliance',
    description: 'A deep dive into global data privacy regulations like GDPR, CCPA, and other emerging frameworks. Understand how to stay compliant, protect customer data, and build trust in an era of increasing regulatory scrutiny and consumer awareness.',
    readTime: '6 min read',
    date: '2025-07-05',
    trending: true,
    image: '/BusinessSecurity.png',
    views: 15200,
    likes: 312,
    author: 'Tauseef ur rahman',
    tags: ['Privacy', 'GDPR', 'Compliance', 'Legal']
  },
  {
    id: '4',
    articleSlug: 'customer-analytics',
    title: 'Customer Analytics: Beyond Traditional Metrics',
    category: 'Strategy',
    description: 'Discover how modern businesses are using advanced customer analytics — including behavioral modeling, sentiment analysis, and predictive segmentation — to go beyond basic KPIs and drive long-term growth, loyalty, and personalized engagement.',
    readTime: '10 min read',
    date: '2025-07-02',
    image: '/CustomerAnalytics.png',
    views: 9800,
    likes: 156,
    author: '',
    tags: ['Analytics', 'Customer', 'Strategy', 'Growth']
  },
  {
    id: '5',
    articleSlug: 'edge-computing-data-processing',
    title: 'The Rise of Edge Computing in Data Processing',
    category: 'Technology',
    description: 'Explore how edge computing is transforming data processing by bringing computation closer to data sources. Learn about reduced latency, improved privacy, and new possibilities for IoT and real-time applications.',
    readTime: '7 min read',
    date: '2025-06-28',
    image: '/EdgeComputing.png',
    views: 6700,
    likes: 98,
    author: 'Abdul Rehman',
    tags: ['Edge Computing', 'IoT', 'Processing', 'Technology']
  },
  {
    id: '6',
    articleSlug: 'ethical-ai',
    title: 'Ethical AI: Building Responsible Machine Learning Systems',
    category: 'AI/ML',
    description: 'Navigate the complex landscape of ethical AI development. Learn about bias detection, fairness metrics, transparency requirements, and best practices for building responsible AI systems that benefit everyone.',
    readTime: '9 min read',
    date: '2025-06-25',
    image: '/EthicalAi.png',
    views: 11400,
    likes: 203,
    author: 'Abdul Malik',
    tags: ['Ethics', 'AI', 'Responsibility', 'Bias']
  }
];

const categories = ['All', 'Technology', 'AI/ML', 'Strategy', 'Compliance'];


const trendingTopics = [
  { name: 'Real-time Analytics', count: 45 },
  { name: 'Machine Learning', count: 38 },
  { name: 'Data Privacy', count: 32 },
  { name: 'Edge Computing', count: 28 },
  { name: 'Ethical AI', count: 24 }
];

export default function EnhancedInsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [isLoading, setIsLoading] = useState(true);
  const [likedInsights, setLikedInsights] = useState(new Set());
  const [showFilters, setShowFilters] = useState(false);


  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const filteredInsights = insights.filter(insight => {
    const matchesCategory = selectedCategory === 'All' || insight.category === selectedCategory;
    const matchesSearch = insight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         insight.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         insight.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'views':
        return (b.views || 0) - (a.views || 0);
      case 'likes':
        return (b.likes || 0) - (a.likes || 0);
      case 'date':
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  const featuredInsight = insights.find(insight => insight.featured);

  const handleLike = (id: string) => {
    setLikedInsights(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const LoadingSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-48 bg-gray-200 rounded-xl mb-4"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <LoadingSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 mt-11">
      {/* Animated Header */}
      {/* <header className="relative py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden"> */}
        {/* <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/80 to-gray-400/80"></div> */}
         <header className="relative py-32 bg-black">
        {/* <div className="absolute inset-0 bg-black/20"></div> */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/8 to-black-600/80"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-md animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-sm animate-pulse delay-500"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm text-white">
            <Sparkles className="w-4 h-4" />
            Latest Insights & Trends
          </div>
          {/* <h1 className="text-6xl font-serif mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent text-green-500"> */}
          {/* <h1 className='text-6xl font-serif mb-6 text-green-500 bg-clip-text text-transparent'>
            Data Insights Hub
          </h1> */}
          <h1 className="text-6xl font-serif mb-6 text-transparent bg-gradient-to-r from-green-400 to-green-600 bg-clip-text">
  Data Insights Hub
</h1>

          <p className="text-xl max-w-3xl mx-auto text-blue-100 mb-8 leading-relaxed">
            Discover cutting-edge trends, strategies, and innovations shaping the future of data analytics and artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semiserif hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <Play className="w-5 h-5 inline mr-2" />
              Watch Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semiserif hover:bg-white hover:text-blue-600 transition-all duration-300">
              <Download className="w-5 h-5 inline mr-2" />
              Download Report
            </button>
          </div>
        </div>
      </header>

    
      {/* Enhanced Featured Insight */}
      {featuredInsight && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-black to-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Award className="w-4 h-4" />
                Featured Insight
              </div>
              <h2 className="text-4xl font-serif text-gray-800 mb-4">Editor's Pick</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our most popular and impactful insight this week
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative group">
                  <img 
                    src={featuredInsight.image} 
                    alt={featuredInsight.title}
                    className="w-full  object-cover rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    <Eye className="w-4 h-4 inline mr-1" />
                    {featuredInsight.views?.toLocaleString()}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semiserif">
                      {featuredInsight.category}
                    </span>
                    <span className="flex items-center text-green-600 font-semiserif">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Trending
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-serif text-gray-800 mb-4 leading-tight">
                    {featuredInsight.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredInsight.description}
                  </p>
                  
                  <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <img 
                        src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face`}
                        alt={featuredInsight.author}
                        className="w-8 h-8 rounded-full"
                      />
                      <span>{featuredInsight.author}</span>
                    </div>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredInsight.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredInsight.readTime}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Link href={`/article/${featuredInsight.articleSlug}`} passHref>

                    <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semiserif hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
                      Read Full Article
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    </Link>
                    <button 
                      onClick={() => handleLike(featuredInsight.id)}
                      className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                        likedInsights.has(featuredInsight.id) 
                          ? 'border-red-500 bg-red-50 text-red-600' 
                          : 'border-gray-200 hover:border-red-300 text-gray-400 hover:text-red-400'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${likedInsights.has(featuredInsight.id) ? 'fill-current' : ''}`} />
                    </button>
                    <button className="p-3 rounded-xl border-2 border-gray-200 hover:border-blue-300 text-gray-400 hover:text-blue-400 transition-all duration-300">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Enhanced Filter and Search */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-300"
              >
                <Filter className="w-4 h-4" />
                Filters
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            <div className="flex gap-4 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search insights, topics, authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="date">Latest</option>
                <option value="views">Most Viewed</option>
                <option value="likes">Most Liked</option>
              </select>
            </div>
          </div>
          
          {showFilters && (
            <div className="mt-6 p-6 bg-gray-50 rounded-xl border animate-fadeIn">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semiserif mb-3">Reading Time</h4>
                  <div className="space-y-2">
                    {['< 5 min', '5-10 min', '10+ min'].map(time => (
                      <label key={time} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">{time}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semiserif mb-3">Date Range</h4>
                  <div className="space-y-2">
                    {['Last week', 'Last month', 'Last 3 months'].map(range => (
                      <label key={range} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semiserif mb-3">Trending Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {trendingTopics.map(topic => (
                      <button key={topic.name} className="bg-white px-3 py-1 rounded-full text-sm border hover:bg-blue-50 transition-colors">
                        {topic.name} ({topic.count})
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Insights Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((insight, index) => (
              <div 
                key={insight.id} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full  object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semiserif">
                      {insight.category}
                    </span>
                    {insight.trending && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semiserif flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {insight.views?.toLocaleString()}
                    </span>
                    <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {insight.likes}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face`}
                      alt={insight.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-800">{insight.author}</p>
                      <p className="text-xs text-gray-500">{new Date(insight.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-serif text-gray-800 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                    {insight.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {insight.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {insight.tags?.slice(0, 3).map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {insight.readTime}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleLike(insight.id)}
                        className={`p-2 rounded-full transition-all duration-300 ${
                          likedInsights.has(insight.id) 
                            ? 'bg-red-100 text-red-600' 
                            : 'hover:bg-gray-100 text-gray-400 hover:text-red-400'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${likedInsights.has(insight.id) ? 'fill-current' : ''}`} />
                      </button>
                      <button className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-blue-400 transition-all duration-300">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <Link href={`/article/${insight.articleSlug}`} passHref>
                      <button className="text-blue-600 hover:text-blue-700 font-semiserif text-sm flex items-center gap-1 hover:gap-2 transition-all duration-300">
                        Read More
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Enhanced Community CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-800 mb-4">Join Our Global Community</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with 50,000+ data professionals, share insights, and collaborate on the future of analytics.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-900 to-blue-400 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semiserif mb-2">Active Discussions</h3>
              <p className="text-gray-600">Engage in meaningful conversations about data trends, tools, and techniques.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-900 to-blue-400 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semiserif mb-2">Expert Insights</h3>
              <p className="text-gray-600">Learn from industry leaders and share your own expertise with the community.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-900 to-blue-400 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semiserif mb-2">Real-time Updates</h3>
              <p className="text-gray-600">Stay ahead with instant notifications about new insights and trending topics.</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-serif text-gray-800 mb-4">Ready to Connect?</h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of data professionals sharing knowledge, asking questions, and building the future of analytics together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://join.slack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semiserif transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                  >
                    Join Slack Community
                  </a>
                  <a
                    href="https://www.linkedin.com/company"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-semiserif transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                  >
                    Follow on LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-semiserif text-gray-800">25K+</p>
                        <p className="text-xs text-gray-600">Members</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-semiserif text-gray-800">4.9/5</p>
                        <p className="text-xs text-gray-600">Rating</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-semiserif text-gray-800">500+</p>
                        <p className="text-xs text-gray-600">Resources</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Globe className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-semiserif text-gray-800">Global</p>
                        <p className="text-xs text-gray-600">Network</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
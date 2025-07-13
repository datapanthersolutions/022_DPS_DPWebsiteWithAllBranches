import React from 'react';
import { Search, Calendar, Clock, User, ArrowRight, TrendingUp, Database, BarChart3 } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
}

const BlogPage: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Advanced Data Analytics with Machine Learning: A Complete Guide',
      excerpt: 'Discover how machine learning transforms raw data into actionable insights. Learn about the latest techniques in predictive analytics and data modeling.',
      author: 'Sarah Chen',
      date: '2025-07-10',
      readTime: '8 min read',
      category: 'Machine Learning',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: '2',
      title: 'Real-time Data Processing with Apache Kafka',
      excerpt: 'Build scalable data pipelines that handle millions of events per second. A deep dive into stream processing and event-driven architectures.',
      author: 'Michael Rodriguez',
      date: '2025-07-08',
      readTime: '12 min read',
      category: 'Data Engineering',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: '3',
      title: 'Data Visualization Best Practices for Business Intelligence',
      excerpt: 'Create compelling dashboards that tell stories with your data. Learn design principles that make complex information accessible.',
      author: 'Emma Thompson',
      date: '2025-07-05',
      readTime: '6 min read',
      category: 'Visualization',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: '4',
      title: 'Building Data Lakes with Cloud Infrastructure',
      excerpt: 'Modern approaches to data storage and management in the cloud. Compare AWS, Azure, and GCP solutions for enterprise data needs.',
      author: 'David Kim',
      date: '2025-07-03',
      readTime: '10 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: '5',
      title: 'Privacy-First Analytics in the Age of GDPR',
      excerpt: 'Navigate data privacy regulations while maintaining analytical capabilities. Implement privacy-preserving techniques in your data pipeline.',
      author: 'Lisa Wang',
      date: '2025-07-01',
      readTime: '7 min read',
      category: 'Privacy',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: '6',
      title: 'AI-Powered Anomaly Detection for Business Operations',
      excerpt: 'Automatically detect unusual patterns in your business data. Implement early warning systems that prevent costly issues.',
      author: 'James Miller',
      date: '2025-06-28',
      readTime: '9 min read',
      category: 'Artificial Intelligence',
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const categories = ['All', 'Machine Learning', 'Data Engineering', 'Visualization', 'Cloud Computing', 'Privacy', 'Artificial Intelligence'];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Data Panther</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#" className="text-white font-medium">Blog</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Data Insights & 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Analytics</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover the latest trends, techniques, and best practices in data science, analytics, and business intelligence
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === 'All'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-purple-300 text-sm">{featuredPost.category}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all flex items-center space-x-2">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <TrendingUp className="w-6 h-6 text-purple-400" />
            <h2 className="text-3xl font-bold text-white">Latest Articles</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-purple-400 hover:text-purple-300 font-medium text-sm flex items-center space-x-2 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 text-center">
            <BarChart3 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest insights on data analytics, machine learning, and business intelligence delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Data Panther</span>
              </div>
              <p className="text-gray-400">
                Empowering businesses with data-driven insights and analytics solutions.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Whitepapers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Data Panther. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
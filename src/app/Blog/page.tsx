

"use client";
import React from 'react';
import {
  Search,
  Calendar,
  Clock,
  User,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

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
  const [searchTerm, setSearchTerm] = React.useState('');

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Advanced Data Analytics with Machine Learning: A Complete Guide',
      excerpt: 'Discover how machine learning transforms raw data into actionable insights...',
      author: 'Mohammed Shoaib Asim',
      date: '2025-07-10',
      readTime: '8 min read',
      category: 'Machine Learning',
      image: 'https://ieor.columbia.edu/sites/default/files/styles/cu_crop/public/content/images/research-machine-learning-01.jpg?itok=3v5fw0s9',
      featured: true
    },
    {
      id: '2',
      title: 'Real-time Data Processing with Apache Kafka',
      excerpt: 'Build scalable data pipelines that handle millions of events per second...',
      author: 'Azeem',
      date: '2025-07-08',
      readTime: '12 min read',
      category: 'Data Engineering',
      image: 'https://miro.medium.com/v2/resize:fit:997/1*lsjUYaBQkl4rpbbBdf7aVQ.png',
      featured: false
    },
    {
      id: '3',
      title: 'Data Visualization Best Practices for Business Intelligence',
      excerpt: 'Create compelling dashboards that tell stories with your data...',
      author: 'Hakeem',
      date: '2025-07-05',
      readTime: '6 min read',
      category: 'Visualization',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsUEK-4cNUV68GlaIixxpR0rCBwp4C0a6WWZchq74yX49Tc7Gsj1rfDdU9A-aQ-ijCvg8&usqp=CAU',
      featured: false
    },
    {
      id: '4',
      title: 'Building Data Lakes with Cloud Infrastructure',
      excerpt: 'Modern approaches to data storage and management in the cloud...',
      author: 'Irfan',
      date: '2025-07-03',
      readTime: '10 min read',
      category: 'Cloud Computing',
      image: 'https://www.qubole.com/wp-content/uploads/2020/11/ODL-pillar-image.jpg',
      featured: false
    },
    {
      id: '5',
      title: 'Privacy-First Analytics in the Age of GDPR',
      excerpt: 'Navigate data privacy regulations while maintaining analytical capabilities...',
      author: 'Mujeeb',
      date: '2025-07-01',
      readTime: '7 min read',
      category: 'Privacy',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2xCp--kfep25Vyxwvx8yppVT1onrvlk8Ea369T-4O68Zd0USvmhbf2uzJ3hOry9vMiac&usqp=CAU',
      featured: false
    }
  ];

  const categories = [
    'All',
    'Machine Learning',
    'Data Engineering',
    'Visualization',
    'Cloud Computing',
    'Privacy',
    'Artificial Intelligence'
  ];

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter(
    (post) =>
      !post.featured &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen mt-7 bg-white text-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Data Insights & <span className="text-green-500">Analytics</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover the latest trends, techniques, and best practices in data science, analytics, and business intelligence
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-green-100'
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
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow">
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
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-gray-500 text-sm">{featuredPost.category}</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-700 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
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
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-all flex items-center space-x-2">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <TrendingUp className="w-6 h-6 text-green-600" />
            <h2 className="text-3xl font-bold">Latest Articles</h2>
          </div>

          {regularPosts.length === 0 ? (
            <p className="text-gray-500 text-center">No articles found for “{searchTerm}”</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
                >
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
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
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center space-x-2 transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

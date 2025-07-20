
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Calendar, 
  Share2, 
  Bookmark, 
  Eye,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Users,
  MessageSquare,
  Heart
} from "lucide-react";

export default function ReadArticle() {
  const [activeSection, setActiveSection] = useState("overview");
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(142);

  const topics = [
    { id: "overview", label: "Overview", icon: <Sparkles className="w-4 h-4" /> },
    { id: "why-it-matters", label: "Why it Matters", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "use-cases", label: "Business Use Cases", icon: <Users className="w-4 h-4" /> },
    { id: "future", label: "Looking Ahead", icon: <Eye className="w-4 h-4" /> },
  ];

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "The Transformational Impact of Generative AI",
        url: window.location.href,
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = topics.map(topic => document.getElementById(topic.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(topics[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
           <Link
  href="/"
  className="flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200 group"
>
  <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
  Back to Home
</Link>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleShare}
                className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all duration-200"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-full transition-all duration-200 ${
                  isBookmarked 
                    ? 'text-yellow-600 bg-yellow-50' 
                    : 'text-gray-500 hover:text-yellow-600 hover:bg-yellow-50'
                }`}
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Article */}
          <div className="lg:col-span-3">
            {/* Article Header */}
            <div className="mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Featured Article
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  8 min read
                </div>
              </div>
              
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                The Transformational Impact of Generative AI
              </h1>
              
              <div className="flex items-center justify-between py-6 border-y border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Shoaib Asim</div>
                    <div className="text-gray-500 text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      July 15, 2025
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <button
                    onClick={handleLike}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                      isLiked 
                        ? 'text-red-600 bg-red-50' 
                        : 'text-gray-500 hover:text-red-600 hover:bg-red-50'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                    <span className="font-medium">{likes}</span>
                  </button>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    24 comments
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <section id="overview" className="mb-16">
                <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl p-8 mb-8 border border-indigo-200/50">
                  <p className="text-xl text-gray-700 leading-relaxed m-0">
                    Generative AI is revolutionizing how businesses operate. From
                    automating customer interactions to generating personalized
                    content, its capabilities are reshaping industries at an
                    unprecedented pace.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Sparkles className="w-6 h-6 mr-2 text-indigo-600" />
                    Key Insights
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                      <div className="text-3xl font-bold text-indigo-600 mb-2">85%</div>
                      <div className="text-gray-700">of businesses report increased efficiency</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                      <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                      <div className="text-gray-700">reduction in operational costs</div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="why-it-matters" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-8 h-8 mr-3 text-indigo-600" />
                  Why it Matters
                </h2>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    AI enables scalability, personalization, and data-driven
                    decision-making like never before. By incorporating generative
                    models into workflows, companies can dramatically reduce costs
                    while increasing efficiency.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Scalability</h4>
                      <p className="text-gray-600 text-sm">Handle growing demands effortlessly</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Personalization</h4>
                      <p className="text-gray-600 text-sm">Tailor experiences for each user</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Insights</h4>
                      <p className="text-gray-600 text-sm">Make data-driven decisions</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="use-cases" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="w-8 h-8 mr-3 text-indigo-600" />
                  Business Use Cases
                </h2>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50">
                  <div className="grid gap-6">
                    {[
                      { title: "Automated Content Writing", desc: "Generate product descriptions and marketing copy at scale" },
                      { title: "Customer Service Chatbots", desc: "Provide natural conversation and instant support" },
                      { title: "Personalized Marketing", desc: "Create targeted campaigns for individual customers" },
                      { title: "Dynamic Data Reporting", desc: "Transform complex data into readable insights" }
                    ].map((useCase, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:shadow-md transition-shadow duration-200">
                        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <ChevronRight className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{useCase.title}</h4>
                          <p className="text-gray-600">{useCase.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="future" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Eye className="w-8 h-8 mr-3 text-indigo-600" />
                  Looking Ahead
                </h2>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200/50">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    As models continue to advance, the need for responsible AI
                    implementation and data governance becomes critical. Generative
                    AI will soon become a standard tool across every department—from
                    HR to R&D.
                  </p>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-4">What's Next?</h4>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        Enhanced AI governance frameworks
                      </div>
                      <div className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        Cross-departmental AI integration
                      </div>
                      <div className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                        Ethical AI implementation standards
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Enhanced Sidebar */}
          <aside className="lg:block sticky top-28 h-fit">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/50 p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-indigo-600" />
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {topics.map((topic) => (
                  <a
                    key={topic.id}
                    href={`#${topic.id}`}
                    className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${
                      activeSection === topic.id
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                    }`}
                  >
                    <span className={`mr-3 ${activeSection === topic.id ? 'text-white' : 'text-indigo-500'}`}>
                      {topic.icon}
                    </span>
                    <span className="font-medium">{topic.label}</span>
                    {activeSection === topic.id && (
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    )}
                  </a>
                ))}
              </nav>
            </div>

            {/* Article Stats */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/50 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Article Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Eye className="w-4 h-4 mr-2" />
                    <span className="text-sm">Views</span>
                  </div>
                  <span className="font-semibold text-gray-900">2,847</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Heart className="w-4 h-4 mr-2" />
                    <span className="text-sm">Likes</span>
                  </div>
                  <span className="font-semibold text-gray-900">{likes}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Share2 className="w-4 h-4 mr-2" />
                    <span className="text-sm">Shares</span>
                  </div>
                  <span className="font-semibold text-gray-900">89</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
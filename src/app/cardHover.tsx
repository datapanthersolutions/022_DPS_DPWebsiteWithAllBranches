import { HoverEffect } from "../components/ui/card-hover-effect";
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  Globe, 
  Sparkles, 
  Database,
  Zap,
  Target
} from "lucide-react";

export function CardHoverEffectDemo() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_70%)]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#06923E]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#06923E]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#06923E]/10 backdrop-blur-sm border border-green-500/20 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-white/90">AI-Powered Solutions</span>
          </div>
          
          <h1 className="font-bold text-5xl md:text-7xl text-white py-4 mb-6 tracking-tight leading-tight">
            Our Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover our range of{" "}
            <span className="text-green-400 font-semibold">AI-powered products</span>{" "}
            and solutions designed to help you{" "}
            <span className="text-green-300 font-semibold">unlock the full potential</span>{" "}
            of your data.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Enterprise Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#06923E] rounded-full animate-pulse delay-300" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse delay-700" />
              <span>Advanced AI</span>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <HoverEffect 
          items={projects} 
          variant="default"
          enableParallax={true}
          columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
          animationDelay={0.15}
        />

       

       
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "Retrieval-Augmented Generation",
    description:
      "Advanced RAG system that intelligently fetches data from documents, creates semantic embeddings, and stores them in optimized vector databases. Our solution provides contextually accurate answers by combining the power of large language models with your proprietary data, ensuring responses are both relevant and grounded in your specific information.",
    badge: "Most Popular",
    icon: <Brain className="w-6 h-6" />,
    tags: ["RAG", "Vector DB", "LLM", "Embeddings", "AI"],
    featured: true,
    date: "Latest Release",
    author: "AI Research Team",
    stats: {
      views: 15420,
      likes: 892,
      comments: 156
    },
    href: "#rag-solution"
  },
  {
    title: "Conversational Data Analytics",
    description:
      "Transform your data exploration experience with our intelligent chat interface. Simply ask questions in natural language and get instant insights, visualizations, and reports. Our platform understands context, maintains conversation history, and can handle complex multi-step analytical queries across diverse data sources.",
    badge: "Enterprise",
    icon: <MessageSquare className="w-6 h-6" />,
    tags: ["Chat", "Analytics", "NLP", "Business Intelligence", "Insights"],
    date: "Updated Dec 2024",
    author: "Data Science Team",
    stats: {
      views: 12350,
      likes: 743,
      comments: 98
    },
    href: "#chat-analytics"
  },
  {
    title: "Computer Vision Intelligence",
    description:
      "See beyond pixels with our advanced computer vision platform. Extract meaningful insights from images, videos, and visual content using state-of-the-art AI models. From object detection and classification to optical character recognition and scene understanding, unlock the hidden value in your visual data.",
    badge: "AI-Powered",
    icon: <Eye className="w-6 h-6" />,
    tags: ["Computer Vision", "OCR", "Object Detection", "Image Analysis", "ML"],
    date: "New Features",
    author: "Vision AI Team",
    stats: {
      views: 9876,
      likes: 567,
      comments: 89
    },
    href: "#vision-ai"
  },
  {
    title: "Web Intelligence Platform",
    description:
      "Gain comprehensive insights into web presence and digital performance. Our platform crawls, analyzes, and extracts actionable intelligence from websites, providing competitive analysis, content optimization suggestions, and market trend identification. Stay ahead with data-driven web strategies.",
    badge: "Enterprise+",
    icon: <Globe className="w-6 h-6" />,
    tags: ["Web Scraping", "SEO", "Analytics", "Competitive Intelligence", "Automation"],
    date: "Beta Access",
    author: "Web Analytics Team",
    stats: {
      views: 7234,
      likes: 445,
      comments: 67
    },
    href: "#web-intelligence"
  }
];


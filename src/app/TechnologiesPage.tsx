
'use client';
import {
  Sparkles,
  Zap,
  Layers,
  ChevronRight,
  Brain,
  Network,
  Cpu,
  MessageSquare,
  Eye,
  Container,
  Server,
  Radio,
  Cloud,
  Database,
  HardDrive,
  Repeat,
  Box,
  BarChart,
  PieChart,
  Bot,
  Book,
  Pen,
  MessageCircle,
  Image,
  CloudRain,
  Activity,
  Code,
  GitBranch,
  TestTube,
  FlaskConical,
  Globe,
  Smartphone,
  Palette,
  MousePointer,
  Framer,
  Layers3,
  Square,
  Hexagon,
  CloudUpload,
  Search,
} from 'lucide-react';
import { useState } from 'react';

export default function TechnologiesPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

    const categories = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      description:
        'At Data Panther, we leverage advanced AI and Machine Learning to create intelligent systems that learn, adapt, and deliver measurable impact. From automation to decision intelligence, we empower businesses to evolve faster.',
      mainLabel: 'AI/ML',
      iconComponent: <Brain className="w-8 h-8 text-slate-800" />,
      technologies: [
        { name: 'Generative AI', icon: <Sparkles className="w-5 h-5 text-slate-700" /> },
        { name: 'Deep Learning', icon: <Network className="w-5 h-5 text-slate-700" /> },
        { name: 'Predictive Analytics', icon: <Cpu className="w-5 h-5 text-slate-700" /> },
        { name: 'Natural Language Processing', icon: <MessageSquare className="w-5 h-5 text-slate-700" /> },
        { name: 'Computer Vision', icon: <Eye className="w-5 h-5 text-slate-700" /> },
        { name: 'Reinforcement Learning', icon: <Activity className="w-5 h-5 text-slate-700" /> },
      ],
    },
    {
      title: 'Data Engineering & Analytics',
      description:
        'Data Panther transforms raw data into actionable intelligence. Our end-to-end data solutions help organizations design pipelines, optimize infrastructure, and unlock insights that drive business growth.',
      mainLabel: 'Data',
      iconComponent: <Database className="w-8 h-8 text-slate-800" />,
      technologies: [
        { name: 'Big Data Processing', icon: <HardDrive className="w-5 h-5 text-slate-700" /> },
        { name: 'ETL Pipelines', icon: <Repeat className="w-5 h-5 text-slate-700" /> },
        { name: 'Data Warehousing', icon: <Box className="w-5 h-5 text-slate-700" /> },
        { name: 'Data Visualization', icon: <BarChart className="w-5 h-5 text-slate-700" /> },
        { name: 'Business Intelligence', icon: <PieChart className="w-5 h-5 text-slate-700" /> },
        { name: 'Stream Processing', icon: <CloudRain className="w-5 h-5 text-slate-700" /> },
      ],
    },
    {
      title: 'Generative AI & Automation',
      description:
        "We design and deploy Generative AI systems that innovate, create, and automate complex processes. From content generation to intelligent agents, Data Panther helps businesses reimagine what's possible with AI.",
      mainLabel: 'Gen AI',
      iconComponent: <Bot className="w-8 h-8 text-slate-800" />,
      technologies: [
        { name: 'Large Language Models', icon: <Book className="w-5 h-5 text-slate-700" /> },
        { name: 'Prompt Engineering', icon: <Pen className="w-5 h-5 text-slate-700" /> },
        { name: 'AI Chatbots & Assistants', icon: <MessageCircle className="w-5 h-5 text-slate-700" /> },
        { name: 'Text-to-Image Models', icon: <Image className="w-5 h-5 text-slate-700" /> },
        { name: 'AI Automation Workflows', icon: <Zap className="w-5 h-5 text-slate-700" /> },
        { name: 'Multimodal AI', icon: <Layers3 className="w-5 h-5 text-slate-700" /> },
      ],
    },
   
    
  ];

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-montserrat text-slate-900 mb-6">
            Technological Excellence
          </h1>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
            The backbone of every intelligent solution we build. Discover our comprehensive technology stack.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="relative"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="grid lg:grid-cols-[2fr_auto_1.5fr] gap-12 items-start">
              {/* Left Section */}
              <div className="lg:pr-8">
                <div className="bg-white p-8">
                  <h2 className="text-3xl font-montserrat text-slate-900 mb-4">
                    {cat.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-lg">{cat.description}</p>
                </div>
              </div>

              {/* Center Icon Hub */}
              <div className="flex flex-col items-center lg:items-start relative">
                <div className="relative z-20">
                  {/* Main Circle */}
                  <div
                    className={`w-36 h-36 rounded-full border-4 border-slate-200 bg-white shadow-xl flex items-center justify-center transition-all duration-300 ${
                      hoveredIndex === idx ? 'scale-110 shadow-2xl' : ''
                    }`}
                  >
                    {cat.iconComponent}
                  </div>

                  {/* Label Badge */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <div
                      className={`bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-montserrat shadow-lg ${
                        hoveredIndex === idx ? 'scale-105' : ''
                      } transition-transform duration-300`}
                    >
                      {cat.mainLabel}
                    </div>
                  </div>

                  {/* Horizontal Connector Line */}
                  <div className="hidden lg:block absolute left-full top-1/2 -translate-y-1/2 w-16 h-0.5 ml-4 bg-slate-300"></div>
                </div>

                {/* Vertical Connector to Next Section */}
                {idx < categories.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full mt-12 w-0.5 h-full bg-slate-200"></div>
                )}
              </div>

              {/* Right Technologies Grid */}
              <div className="space-y-6 lg:pl-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cat.technologies.map((tech, tIdx) => (
                    <div
                      key={tIdx}
                      className={`group relative bg-white border-2 rounded-xl p-5 transition-all duration-300 cursor-pointer ${
                        hoveredTech === `${idx}-${tIdx}`
                          ? 'shadow-xl -translate-y-1'
                          : 'border-slate-200 hover:border-slate-300 shadow-sm'
                      }`}
                      onMouseEnter={() => setHoveredTech(`${idx}-${tIdx}`)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <div className="flex items-center gap-4">
                        {tech.icon}
                        <span className="font-montserrat text-slate-800 text-sm flex-1">
                          {tech.name}
                        </span>
                        <ChevronRight
                          className={`w-5 h-5 text-slate-400 transition-all duration-300 ${
                            hoveredTech === `${idx}-${tIdx}` ? 'translate-x-1 text-slate-700' : ''
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

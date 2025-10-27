
import React, { useState } from 'react';
import Image from 'next/image';

export default function LLMWeAreExcelAt() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const llms = [
    { name: 'ChatGPT', description: "OpenAI's versatile conversational AI model", tag: 'General Purpose', icon: '/cgpt.png' },
    { name: 'Claude', description: "Anthropic's safety-focused reasoning assistant", tag: 'Safety-Focused', icon: '/claude-logo-png_seeklogo-554534.png' },
    { name: 'Gemini', description: "Google's multimodal AI understanding text & images", tag: 'Multimodal', icon: 'https://img.freepik.com/premium-vector/gemini-logo-icon_1273375-845.jpg' },
    { name: 'LLaMA', description: "Meta's open-weight research advancement model", tag: 'Open Source', icon: '/llama.png' },
    { name: 'Mistral', description: 'European AI with efficient architecture', tag: 'Efficient', icon: '/Mistral.png' },
    { name: 'GPT-4', description: "OpenAI's most advanced multimodal model", tag: 'Advanced', icon: '/GPT4o.png' }
  ];

  return (
    <div>
      {/* Top SVG Wave */}
      {/* <div className="relative">
        <svg className="w-full h-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 Q360,100 720,50 T1440,50 L1440,0 L0,0 Z" fill="#03020A"/>
        </svg>
      </div> */}

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-24">
        <h1 className="text-4xl text-[#4E9F3D] md:text-6xl font-montserrat mb-6 tracking-tight leading-tight">
          <span className="bg-[#191A19] bg-clip-text text-transparent">
            Strategic AI Integration
          </span>{' '}
          with Harnessed LLM Intelligence
        </h1>
        <div className="w-48 h-1 bg-red-500 mx-auto rounded-full"></div>
        <p className="text-lg text-[#1E5128] md:text-xl mb-10 max-w-2xl mx-auto py-8">
          Elite AI solutions powered by cutting-edge language models and advanced RAG technology
        </p>
        <button className="bg-[#1E5128] text-[#D8E9A8] px-30 py-3 text-4xl rounded-full font-semibold uppercase tracking-wide transition-all duration-300 hover:scale-105 shadow-xl">
          Explore Excellence
        </button>
      </div>

      {/* LLM Cards Section */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-[#4E9F3D] md:text-5xl font-montserrat mb-3">
            <span className="text-[#1E5128]">Premier</span> Models
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {llms.map((llm, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group rounded-sm p-6 transition-all duration-500 cursor-pointer ${
                hoveredCard === index
                  ? 'transform -translate-y-2 shadow-xl hover:shadow-[#D3ECCD]'
                  : 'border-slate-100 hover:border-gray-700'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-5 relative">
                  <Image
                    src={llm.icon}
                    alt={`${llm.name} icon`}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>

                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  hoveredCard === index ? 'text-green-400' : 'text-[#1E5128]'
                }`}>
                  {llm.name}
                </h3>

                <p className="text-[#1E5128] text-sm leading-relaxed">{llm.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


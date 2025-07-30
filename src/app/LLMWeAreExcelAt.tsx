

import React, { useState } from 'react';

export default function LLMWeAreExcelAt() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const llms = [
    { name: 'ChatGPT', description: "OpenAI's versatile conversational AI model", tag: 'General Purpose', icon: 'https://accountpro.store/wp-content/uploads/2025/07/stsmall507x507-pad600x600f8f8f8.jpg' },
    { name: 'Claude', description: "Anthropic's safety-focused reasoning assistant", tag: 'Safety-Focused', icon: 'claude-logo-png_seeklogo-554534.png' },
    { name: 'Gemini', description: "Google's multimodal AI understanding text & images", tag: 'Multimodal', icon: 'https://img.freepik.com/premium-vector/gemini-logo-icon_1273375-845.jpg' },
    { name: 'LLaMA', description: "Meta's open-weight research advancement model", tag: 'Open Source', icon: 'llama.png' },
    { name: 'Mistral', description: 'European AI with efficient architecture', tag: 'Efficient', icon: 'Mistral.png' },
    { name: 'GPT-4', description: "OpenAI's most advanced multimodal model", tag: 'Advanced', icon: 'GPT4o.png' }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-16">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-24">
        <div className="inline-block p-4 bg-green-500/20 rounded-full mb-6 animate-pulse">
          <div className="bg-green-600/20 text-green-400 p-4 rounded-full">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.95 9 11 5.16-1.05 9-5.45 9-11V7l-10-5z" />
            </svg>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Strategic AI Integration
          </span>{' '}
          with Harnessed LLM Intelligence
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Elite AI solutions powered by cutting-edge language models and advanced RAG technology
        </p>
        <button className="bg-green-500 hover:bg-green-400 text-black px-10 py-3 rounded-xl font-semibold uppercase tracking-wide transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-green-500/25">
          Explore Excellence
        </button>
      </div>

      {/* Models Grid */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="text-green-400">Premier</span> Models
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {llms.map((llm, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group rounded-xl p-6 transition-all duration-500 cursor-pointer border-2 ${
                hoveredCard === index
                  ? 'border-green-400 transform -translate-y-2 shadow-xl bg-gray-900'
                  : 'border-gray-800 hover:border-gray-700 bg-gray-950'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon Container: no hover change */}
                <div className="w-auto h-auto rounded-xl flex items-center justify-center mb-5 border border-transparent">
                  <img
                    src={llm.icon}
                    alt={`${llm.name} icon`}
                    className="w-12 h-12"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* Tag */}
                <span className={`px-4 py-1 text-xs font-bold rounded-full mb-4 uppercase tracking-wide transition-all duration-300 ${
                  hoveredCard === index
                    ? 'bg-green-400 text-black'
                    : 'bg-gray-800 text-green-400 border border-green-400'
                }`}>
                  {llm.tag}
                </span>

                {/* Title */}
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  hoveredCard === index ? 'text-green-400' : 'text-white'
                }`}>
                  {llm.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {llm.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

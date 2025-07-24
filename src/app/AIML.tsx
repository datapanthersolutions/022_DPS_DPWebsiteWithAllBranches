"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AIML() {
  return (
    <div className="relative bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full filter blur-3xl opacity-30 animate-pulse"
        animate={{ x: [0, 100, -100, 0], y: [0, -100, 100, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 rounded-full filter blur-3xl opacity-30 animate-pulse"
        animate={{ x: [0, -120, 100, 0], y: [0, 100, -100, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-3xl text-green-500 sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
          Leveraging AI & ML Solutions for Process Automation and Smart Decision Making
        </h1>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* 📘 Left - Text */}
        <div className="text-gray-400 text-lg leading-relaxed">
          <p>
            Leveraging advanced Artificial Intelligence and Machine Learning technologies, we design intelligent systems that drive process automation and empower organizations to make smarter, faster decisions.
            By integrating predictive analytics, natural language processing, and cognitive automation, our solutions help businesses eliminate repetitive tasks, uncover actionable insights, and respond to dynamic challenges with agility.
            These AI-driven capabilities not only streamline workflows and reduce operational costs but also enhance scalability, improve customer experiences, and enable data-informed strategic growth.
            Whether it's automating internal operations or enhancing decision intelligence, our generative AI solutions are built to transform the way you work.
          </p>
        </div>

        <div className="flex justify-center">
          <img
          src="/3.jpg"
            alt="AI ML Illustration"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
            
          />
        </div>
      </div>
    </div>
  );
}
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AIML() {
  return (
    <div className="relative bg-[#D3ECCD] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
    
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-3xl text-[#212121] sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-semibold
         leading-tight">
           AI & ML Solutions for Process Automation
        </h1>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* 📘 Left - Text */}
        <div className="text-[#212121] text-lg leading-relaxed">
          <p>
           Utilizing cutting-edge Artificial Intelligence and Machine Learning technologies, we create intelligent systems that power process automation and enable organizations to make more informed, quicker decisions. By combining predictive analytics, natural language understanding, and cognitive automation, our solutions enable businesses to eliminate mundane tasks, find actionable insights, and react to changing challenges with resilience. These AI capabilities not only optimize processes and minimize costs but also heighten scalability, facilitate better customer experience, and support data-driven strategic development. From automating enterprise functions to maximizing decision intelligence, our generative AI capabilities are designed to reinvent how you work.
          </p>
        </div>

        <div className="flex justify-center">
          <img
          src="/image.jpeg"
            alt="AI ML Illustration"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
            
          />
        </div>
        
      </div>
      
    </div>
  );
}
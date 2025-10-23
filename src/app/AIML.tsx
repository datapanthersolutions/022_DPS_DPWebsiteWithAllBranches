
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, TrendingUp, Cpu, Rocket, Users, Shield, Clock } from "lucide-react";

const features = [
  { icon: <Zap className="w-6 h-6 text-green-500 mt-1" />, title: "Automation Boost", desc: "Streamline tasks with AI & ML." },
  { icon: <TrendingUp className="w-6 h-6 text-green-500 mt-1" />, title: "Smart Insights", desc: "Predict trends and opportunities." },
  { icon: <Cpu className="w-6 h-6 text-green-500 mt-1" />, title: "Cognitive Power", desc: "Enhance responsiveness with AI." },
  { icon: <Rocket className="w-6 h-6 text-green-500 mt-1" />, title: "Growth Acceleration", desc: "Scale operations & improve CX." }
];

const benefits = [
  { icon: <Users className="w-5 h-5 text-green-500" />, title: "Better Collaboration", desc: "Teams can focus on meaningful work while AI handles repetitive tasks." },
  { icon: <Shield className="w-5 h-5 text-green-500" />, title: "Security & Compliance", desc: "AI-driven processes ensure higher accuracy and compliance." },
  { icon: <Clock className="w-5 h-5 text-green-500" />, title: "Time Savings", desc: "Reduce turnaround time and accelerate project delivery." }
];

export default function AIML() {
  return (
    <div
      className="relative py-20 px-4 sm:px-6 lg:px-12 overflow-hidden bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/dotbg.png')" }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Title Section */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl font-montserrat leading-tight"
        >
          AI & ML Solutions for Process Automation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gray-200 mt-4 text-lg sm:text-xl"
        >
          Unlock intelligent automation, predictive insights, and business growth with cutting-edge AI.
        </motion.p>
        <div className="flex justify-center mt-6">
          <span className="block w-72 h-1 bg-green-600 rounded mb-6"></span>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Features */}
        <div className="text-white text-lg leading-relaxed space-y-6 order-2 lg:order-1">
          {features.map((feature, idx) => (
            <div key={idx} className="group flex flex-col cursor-pointer">
              <div className="flex items-center gap-3 mb-1">
                {feature.icon}
                <span className="text-xl font-semibold">{feature.title}</span>
              </div>
              <motion.p
                className="ml-9 text-gray-200"
                initial={{ opacity: 0, x: -50 }}
                whileHover={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
              >
                {feature.desc}
              </motion.p>
            </div>
          ))}
        </div>

        {/* Right - Image */}
        <div className="flex justify-center order-1 lg:order-2">
          <motion.img
            src="/Generative-AI-automation (1).png"
            alt="AI ML Illustration"
            className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-5xl h-auto object-contain "
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative z-10 max-w-5xl mx-auto mt-20">
        <h2 className="text-3xl sm:text-5xl text-white font-montserrat text-center mb-10">
          Why Choose Our AI Solutions?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-start bg-white/10 p-6 rounded-lg border border-green-200 hover:bg-green-500/10 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              {benefit.icon}
              <h3 className="text-2xl font-montserrat text-white mt-3">{benefit.title}</h3>
              <p className="text-gray-200 mt-2">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


"use client";
import React from "react";
import {
  Server,
  ShieldCheck,
  Activity,
  Cpu,
  BarChart3,
  Zap,
  Users,
} from "lucide-react";
import { img } from "framer-motion/client";

const useCases = [
 {
  icon: <Cpu className="w-8 h-8 text-green-600" />,
  img: "1.jpg",
  title: "Automated IT Operations (AIOps)",
  description:
    "AIOps leverages artificial intelligence and machine learning to streamline IT operations by analyzing real-time data, detecting anomalies, and automating responses. It helps predict incidents, reduce downtime, and improve service performance across complex digital infrastructures.",
},

{
  icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
  img: "/8.jpg",
  title: "Intelligent Threat Detection",
  description:
    "Leverage machine learning-based security systems to detect threats, analyze anomalies, and respond to potential breaches in real time. Ensure continuous protection and compliance across your entire IT infrastructure.",
},
{
  icon: <Activity className="w-8 h-8 text-green-600" />,
  img: "performance.png",
  title: "Performance Analytics",
  description:
    "Gain deep visibility into application and infrastructure performance using predictive analytics. Identify trends, prevent slowdowns, and proactively optimize systems to ensure seamless user experiences and operational efficiency.",
},
{
  icon: <BarChart3 className="w-8 h-8 text-green-600" />,
  img: "decision.png",
  title: "Data-Driven Decision Making",
  description:
    "Transform operational data into actionable insights with advanced analytics and interactive dashboards. Improve IT budgeting, resource planning, and capacity forecasting through smarter, data-informed decisions.",
},
{
  icon: <Zap className="w-8 h-8 text-green-600" />,
  img: "/DevOpsAI1.png",
  title: "Generative AI in DevOps",
  description:
    "Empower your DevOps teams with generative AI that streamlines development workflows—auto-generating documentation, test cases, and context-aware code suggestions. Enhance productivity and accelerate delivery cycles with AI-tailored to your stack.",
},
{
  icon: <Users className="w-8 h-8 text-green-600" />,
  img: "/AIChatBotCS.png",
  title: "Personalized IT Support",
  description:
    "Deliver faster, smarter IT support using conversational AI trained on historical tickets and user behavior. Provide personalized resolutions, reduce response times, and enable self-service for a better end-user experience.",
},

];

export default function IndustryUseCases() {
  return (
    <div className="min-h-screen bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
          Industry Use Cases for IT Enterprises
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Data Panther empowers IT companies with intelligent automation,
          predictive analytics, and generative AI to reshape operations and drive innovation.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {useCases.map((useCase, idx) => (
            <div
              key={idx}
              className=" p-6 text-left bg-white transform transition-all duration-300 hover:shadow-xl hover:border hover:border-purple-200"
            >
              <div className="mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-semiserif text-gray-800 mb-2">
                {useCase.title}
              </h3>
              <img
                src={useCase.img}
                alt={useCase.title}
                className="w-full h-80 object-cover mb-4 "
              />
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
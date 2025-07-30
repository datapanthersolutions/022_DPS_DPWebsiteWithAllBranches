

"use client";
import Head from "next/head";
import React, { useState } from "react";
import {
  ShieldCheck,
  Activity,
  Cpu,
  BarChart3,
  Zap,
  Users,
  X,
  User,
  Mail,
  Phone,
  Building,
  Calendar,
} from "lucide-react";
import { CardHoverEffectDemo } from "../cardHover";

const useCases = [
  {
    icon: <Cpu className="w-8 h-8 text-green-600" />,
    img: "/1.jpg",
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
    img: "/performance.png",
    title: "Performance Analytics",
    description:
      "Gain deep visibility into application and infrastructure performance using predictive analytics. Identify trends, prevent slowdowns, and proactively optimize systems to ensure seamless user experiences and operational efficiency.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-green-600" />,
    img: "/decision.png",
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

export default function SolutionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    preferredTime: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Head>
        <title>Solutions | Data Panther</title>
      </Head>

      <main className="bg-gray-50 min-h-screen">
        {/* Header Section */}
        <section className="text-center py-16 px-6 md:px-16 bg-black mt-9">
          <h1 className="text-6xl font-serif mb-6 text-transparent bg-gradient-to-r from-green-400 to-green-600 bg-clip-text">
            Explore Our Smart Solutions
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Empowering enterprises with AI-driven automation, real-time analytics, and personalized support systems.
          </p>
        </section>

        {/* Use Cases */}
        <section className="bg-white py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
              Industry Use Cases for IT Enterprises
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Data Panther empowers IT companies with intelligent automation, predictive analytics, and generative AI to reshape operations and drive innovation.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {useCases.map((useCase, idx) => (
                <div
                  key={idx}
                  className="p-6 text-left bg-white transform transition-all duration-300 hover:shadow-xl hover:border hover:border-purple-200 rounded-xl"
                >
                  <div className="mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {useCase.title}
                  </h3>
                  <img
                    src={useCase.img}
                    alt={useCase.title}
                    className="w-full h-80 object-cover mb-4 rounded-md"
                  />
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CardHoverEffectDemo />

        {/* CTA */}
        <section className="mt-12 bg-green-50 py-12 px-6 text-center rounded-xl mx-auto max-w-5xl shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Transform Your Data?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether it's scaling automation, integrating AI, or improving analytics—we’ll help you build it.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Collaborate With Us
          </button>
        </section>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-serif text-gray-900">Schedule a Call</h3>
                    <p className="text-gray-600 mt-1">Let's explore how we can address your data challenges and achieve your goals together.</p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 placeholder-gray-500 placeholder-opacity-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 placeholder-gray-500 placeholder-opacity-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 placeholder-gray-500 placeholder-opacity-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      <Building className="w-4 h-4 inline mr-2" />
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 placeholder-gray-500 placeholder-opacity-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  >
                    <option  value="">Select preferred time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 text-gray-500 placeholder-gray-500 placeholder-opacity-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Describe your data challenges, goals, or any specific requirements..."
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-6 py-3  border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

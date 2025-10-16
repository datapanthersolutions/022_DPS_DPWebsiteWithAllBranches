
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
import SolutionsSection from "@/components/SolutionsSection";

const useCases = [
  {
    icon: <Cpu className="w-8 h-8 text-green-600" />,
    img: "/AIOPS.jpeg",
    title: "Automated IT Operations (AIOps)",
    description:
      "AIOps utilizes AI and ML to optimize IT operations by analyzing real-time data, identifying anomalies, and automating responses. This helps forecast incidents, minimize downtime, and improve performance across complex digital systems.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    img: "/AITHREATDETECTION.png",
    title: "Intelligent Threat Detection",
    description:
      "Leverage machine learning-based security systems to detect threats, analyze anomalies, and respond to breaches in real time—ensuring continuous protection and compliance across your IT infrastructure.",
  },
  {
    icon: <Activity className="w-8 h-8 text-green-600" />,
    img: "/PERFORMANCEANALYTICS.png",
    title: "Performance Analytics",
    description:
      "Leverage predictive analytics to monitor infrastructure and application performance, detect trends early, and prevent potential issues—ensuring seamless user experiences and optimized operational efficiency.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-green-600" />,
    img: "/DDDM.jpeg",
    title: "Data-Driven Decision Making",
    description:
      "Use advanced analytics and dashboards to turn operational data into insights. Improve budgeting, resource allocation, and capacity planning with data-backed decisions.",
  },
  {
    icon: <Zap className="w-8 h-8 text-green-600" />,
    img: "/AIDEVOPS.jpeg",
    title: "Generative AI in DevOps",
    description:
      "Empower DevOps teams with generative AI to streamline workflows—auto-generating documentation, test cases, and smart code suggestions. Boost productivity and accelerate delivery cycles.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    img: "/AIPERSONLIZEDSUPPORT.jpeg",
    title: "Personalized IT Support",
    description:
      "Use conversational AI trained on past tickets and user behavior to deliver smarter, faster IT support. Reduce response times, provide tailored resolutions, and enhance user satisfaction.",
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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Head>
        <title>Solutions | Data Panther</title>
      </Head>

      <main className=" min-h-screen">
        {/* Header Section */}
        <section className="py-20  mt-12 px-6 md:px-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat mb-6 text-transparent bg-gradient-to-r from-black to-black/90 bg-clip-text">
                Explore Our Smart Solutions
              </h1>
              <span className="block w-24 h-1 bg-green-600 rounded mb-6"></span>
              <p className="text-gray-500 text-lg leading-relaxed">
                Empowering businesses with real-time analytics, AI-powered
                automation, and personalized support systems.
              </p>
            </div>

            {/* Right - Image */}
            <div className="w-full">
              <img
                src="/datasolutions.jpeg"
                alt="Smart Solutions"
                className="rounded-xl w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className=" py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-7xl font-[montserrat] font-semibold text-gray-800 mb-6">
              Industry Use Cases for IT Enterprises
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Data Panther empowers IT companies with intelligent automation,
              predictive analytics, and generative AI to transform operations
              and drive innovation.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {useCases.map((useCase, idx) => (
                <div
                  key={idx}
                  className="flex flex-col bg-black overflow-hidden shadow-sm hover:shadow-xl hover:border hover:border-green-200 transition-all duration-300 h-[520px]"
                >
                  <div className="w-full h-64 overflow-hidden flex-shrink-0">
                    <img
                      src={useCase.img}
                      alt={useCase.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="flex flex-col p-6 flex-grow">
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-400 flex-grow overflow-hidden">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <SolutionsSection />

        {/* CTA Section */}
        <section className="mt-12 py-12 px-6 text-center mx-auto max-w-5xl">
          <h2 className="text-3xl font-montserrat text-gray-800 mb-4">
            Ready to Transform Your Data?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether it's scaling automation, integrating AI, or improving
            analytics—we’ll help you build it.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block border border-xl border-green-500 text-green-600  px-6 py-3 font-montserrat  hover:bg-green-600 hover:text-white "
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
                    <h3 className="text-2xl font-serif text-gray-900">
                      Schedule a Call
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Let's explore how we can address your data challenges and
                      achieve your goals together.
                    </p>
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
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      <Building className="w-4 h-4 inline mr-2" />
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="preferredTime"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition text-gray-500"
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition text-gray-500 resize-none"
                    placeholder="Describe your data challenges, goals, or specific requirements..."
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
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



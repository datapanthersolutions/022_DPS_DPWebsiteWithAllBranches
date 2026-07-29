
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
    icon: <Cpu className="w-7 h-7" />,
    img: "/AIOPS.webp",
    title: "Automated IT Operations (AIOps)",
    description:
      "AIOps utilizes AI and ML to optimize IT operations by analyzing real-time data, identifying anomalies, and automating responses. This helps forecast incidents, minimize downtime, and improve performance across complex digital systems.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    img: "/AITHREATDETECTION.webp",
    title: "Intelligent Threat Detection",
    description:
      "Leverage machine learning-based security systems to detect threats, analyze anomalies, and respond to breaches in real time—ensuring continuous protection and compliance across your IT infrastructure.",
  },
  {
    icon: <Activity className="w-7 h-7" />,
    img: "/PERFORMANCEANALYTICS.webp",
    title: "Performance Analytics",
    description:
      "Leverage predictive analytics to monitor infrastructure and application performance, detect trends early, and prevent potential issues—ensuring seamless user experiences and optimized operational efficiency.",
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    img: "/DDDM.webp",
    title: "Data-Driven Decision Making",
    description:
      "Use advanced analytics and dashboards to turn operational data into insights. Improve budgeting, resource allocation, and capacity planning with data-backed decisions.",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    img: "/AIDEVOPS.webp",
    title: "Generative AI in DevOps",
    description:
      "Empower DevOps teams with generative AI to streamline workflows—auto-generating documentation, test cases, and smart code suggestions. Boost productivity and accelerate delivery cycles.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    img: "/AIPERSONLIZEDSUPPORT.webp",
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

      <main className="min-h-screen bg-white text-dp-navy">

        <section className="relative w-full min-h-[80vh] flex items-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/aisolutions.webp')" }}
        >

          {/* brand wash over the photo */}
          <div className="absolute inset-0 bg-dp-navy/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-dp-gradient opacity-60"></div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">

            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div className="hidden lg:block"></div>

              <div className="text-white max-w-xl">

                <p className="uppercase tracking-[0.3em] text-sm text-white/70 font-medium mb-6">
                  Enterprise Innovation
                </p>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
                  AI Solutions
                  <span className="block font-light">
                    Engineered for Global Scale
                  </span>
                </h2>

                <div className="w-20 h-1 bg-white/60 rounded-full mb-8"></div>

                <p className="text-lg text-white/85 leading-relaxed mb-8">
                  We architect intelligent AI ecosystems that integrate seamlessly
                  into enterprise environments—enhancing decision velocity, automating
                  complex operations, and delivering measurable business transformation
                  across global organizations.
                </p>

                <button className="px-8 py-4 bg-white text-dp-navy font-medium rounded-lg hover:bg-white/90 transition">
                  Schedule Executive Consultation
                </button>

              </div>
            </div>

          </div>
        </section>

        {/* Use Cases */}
        <section className="py-32 bg-white px-6 md:px-12">
          <div className="max-w-7xl mx-auto text-center">

            {/* Section Label */}
            <p className="uppercase tracking-[0.3em] text-sm text-dp-magenta font-medium mb-6">
              Industry Solutions
            </p>

            {/* Heading */}
            <h2 className="text-5xl md:text-6xl font-light text-dp-navy leading-tight mb-6">
              AI Use Cases for IT Enterprises
              <span className="block font-light">
                Driving Scalable Digital Transformation
              </span>
            </h2>

            <div className="w-20 h-1 bg-dp-magenta rounded-full mx-auto mb-8"></div>

            {/* Description */}
            <p className="text-lg text-dp-navy/70 mb-20 max-w-3xl mx-auto leading-relaxed">
              Data Panther enables IT organizations to modernize operations,
              accelerate delivery cycles, and unlock intelligent automation
              through enterprise-grade AI and advanced analytics frameworks.
            </p>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {useCases.map((useCase, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white border border-dp-navy/15 rounded-xl overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient z-10" />

                  {/* Image */}
                  <div className="relative w-full h-64 overflow-hidden">
                    <img
                      src={useCase.img}
                      alt={useCase.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 text-left">
                    <div className="w-12 h-12 -mt-12 mb-4 relative z-10 rounded-xl bg-dp-gradient flex items-center justify-center text-white shadow-lg">
                      {useCase.icon}
                    </div>

                    <h3 className="text-2xl font-semibold text-dp-navy mb-4">
                      {useCase.title}
                    </h3>

                    <p className="text-dp-navy/70 leading-relaxed">
                      {useCase.description}
                    </p>

                    <div className="mt-6 w-10 h-1 bg-dp-magenta rounded-full transition-all duration-300 group-hover:w-16"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-dp-navy/5 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

            {/* Left Content */}
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-dp-magenta font-medium mb-6">
                AI Strategy & Advisory
              </p>

              <h2 className="text-5xl md:text-6xl font-light text-dp-navy leading-tight mb-6">
                Enterprise AI Roadmapping
                <span className="block font-light">
                  From Vision to Execution
                </span>
              </h2>

              <div className="w-20 h-1 bg-dp-magenta rounded-full mb-8"></div>

              <p className="text-lg text-dp-navy/70 leading-relaxed mb-10">
                We help executive teams define AI adoption strategies aligned with
                business priorities, regulatory frameworks, and long-term digital
                transformation objectives.
              </p>

              <ul className="space-y-3 text-dp-navy/80">
                {["Enterprise AI maturity assessment", "ROI-driven use case prioritization", "Governance & compliance framework design", "Organization-wide AI enablement"].map((li, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dp-magenta shrink-0" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Box */}
            <div className="relative bg-white p-12 rounded-xl border border-dp-navy/15 shadow-lg overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
              <h3 className="text-2xl font-semibold text-dp-navy mb-4">
                Why It Matters
              </h3>
              <p className="text-dp-navy/70 leading-relaxed">
                Enterprise AI initiatives fail without strategic alignment.
                We ensure AI investments translate into measurable value,
                reduced risk exposure, and sustainable competitive advantage.
              </p>
            </div>

          </div>
        </section>

        {/* STATS — gradient band */}
        <section className="py-28 bg-dp-gradient text-white px-6 md:px-12">
          <div className="max-w-7xl mx-auto text-center">

            <h2 className="text-5xl md:text-6xl font-light leading-tight mb-6">
              Transforming Enterprise Operations
              <span className="block font-light">
                Through Intelligent Automation
              </span>
            </h2>

            <p className="text-lg text-white/85 max-w-3xl mx-auto mb-20">
              Our AI solutions drive operational resilience, improve cost efficiency,
              and accelerate innovation cycles across global IT enterprises.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

              <div>
                <h3 className="text-5xl font-semibold mb-2">40%</h3>
                <p className="text-white/80">Operational Efficiency Improvement</p>
              </div>

              <div>
                <h3 className="text-5xl font-semibold mb-2">30%</h3>
                <p className="text-white/80">Reduction in Manual Processes</p>
              </div>

              <div>
                <h3 className="text-5xl font-semibold mb-2">2x</h3>
                <p className="text-white/80">Faster Decision Cycles</p>
              </div>

              <div>
                <h3 className="text-5xl font-semibold mb-2">99.9%</h3>
                <p className="text-white/80">System Availability & Reliability</p>
              </div>

            </div>
          </div>
        </section>

        {/* GOVERNANCE */}
        <section className="py-32 bg-white px-6 md:px-12">
          <div className="max-w-7xl mx-auto text-center">

            <p className="uppercase tracking-[0.3em] text-sm text-dp-magenta font-medium mb-6">
              Responsible AI
            </p>

            <h2 className="text-5xl md:text-6xl font-light text-dp-navy leading-tight mb-6">
              Governance, Security & Compliance
              <span className="block font-light">
                Built Into Every AI System
              </span>
            </h2>

            <div className="w-20 h-1 bg-dp-magenta rounded-full mx-auto mb-8"></div>

            <p className="text-lg text-dp-navy/70 max-w-3xl mx-auto mb-20 leading-relaxed">
              We embed governance, cybersecurity, and regulatory compliance into
              the foundation of every AI deployment—ensuring ethical, secure, and
              enterprise-ready intelligence systems.
            </p>

            <div className="grid md:grid-cols-3 gap-12 text-left">

              {[
                { title: "AI Risk Management", desc: "Continuous monitoring, bias detection, and model validation frameworks to minimize operational risk." },
                { title: "Enterprise Security", desc: "End-to-end encryption, identity governance, and secure data architecture aligned with global standards." },
                { title: "Regulatory Compliance", desc: "AI systems aligned with GDPR, SOC2, ISO frameworks, and industry-specific regulatory requirements." },
              ].map((card, i) => (
                <div key={i} className="group relative p-8 bg-white border border-dp-navy/15 rounded-xl overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                  <h3 className="text-2xl font-semibold text-dp-navy mb-4">{card.title}</h3>
                  <p className="text-dp-navy/70">{card.desc}</p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <SolutionsSection />

        {/* ================= Enterprise CTA Section ================= */}
        <section className="py-32 bg-white text-dp-navy px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-5xl md:text-6xl font-light leading-tight mb-6">
              Ready to Accelerate Enterprise AI?
              <span className="block font-light">
                Let&rsquo;s Build Your Transformation Roadmap
              </span>
            </h2>

            <div className="w-16 h-1 bg-dp-magenta rounded-full mx-auto mb-8"></div>

            <p className="text-lg text-dp-navy/70 mb-12 leading-relaxed">
              Connect with our AI leadership team to explore scalable,
              governance-driven solutions tailored to your enterprise objectives.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-dp-magenta text-white px-8 py-4 rounded-lg font-medium hover:bg-dp-magenta/90 transition duration-300"
            >
              Schedule Executive Consultation
            </button>

          </div>
        </section>

        {/* ================= Executive Consultation Modal ================= */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-dp-navy/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">

            <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden">

              {/* Header */}
              <div className="relative p-8 border-b border-dp-navy/15 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                <div className="flex items-start justify-between">

                  <div>
                    <h3 className="text-2xl font-semibold text-dp-navy">
                      Executive Consultation Request
                    </h3>
                    <p className="text-dp-navy/70 mt-2 leading-relaxed">
                      Share your strategic priorities and operational challenges.
                      Our enterprise AI specialists will connect to design a
                      tailored transformation roadmap.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 hover:bg-dp-navy/5 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-dp-navy/40" />
                  </button>

                </div>
              </div>

              {/* Form Content */}
              <div className="p-8 space-y-8">

                <div className="grid md:grid-cols-2 gap-6">

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dp-navy/80 mb-2">
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
                      className="w-full px-4 py-3 border border-dp-navy/20 rounded-lg focus:ring-2 focus:ring-dp-magenta focus:border-transparent transition"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dp-navy/80 mb-2">
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
                      className="w-full px-4 py-3 border border-dp-navy/20 rounded-lg focus:ring-2 focus:ring-dp-magenta focus:border-transparent transition"
                      placeholder="your@email.com"
                    />
                  </div>

                </div>

                <div className="grid md:grid-cols-2 gap-6">

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dp-navy/80 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-dp-navy/20 rounded-lg focus:ring-2 focus:ring-dp-magenta focus:border-transparent transition"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-dp-navy/80 mb-2">
                      <Building className="w-4 h-4 inline mr-2" />
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-dp-navy/20 rounded-lg focus:ring-2 focus:ring-dp-magenta focus:border-transparent transition"
                      placeholder="Your company name"
                    />
                  </div>

                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-dp-navy/80 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-dp-navy/20 rounded-lg focus:ring-2 focus:ring-dp-magenta focus:border-transparent transition text-dp-navy/70"
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dp-navy/80 mb-2">
                    Tell us about your initiative
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-dp-navy/20 rounded-lg focus:ring-2 focus:ring-dp-magenta focus:border-transparent transition resize-none"
                    placeholder="Describe your enterprise objectives, AI priorities, or operational challenges..."
                  />
                </div>

                <div className="flex gap-4 pt-4">

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-6 py-3 border border-dp-navy/20 text-dp-navy/80 rounded-lg hover:bg-dp-navy/5 transition"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-dp-magenta text-white rounded-lg hover:bg-dp-magenta/90 transition flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Request Consultation
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


"use client";
import React, { useState } from "react";
import {
  TrendingUp,
  Zap,
  Code,
  Globe,
  Shield,
  Headphones,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Play,
  Clock,
  X,
  Calendar,
  Mail,
  Phone,
  Building,
  User
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  popular?: boolean;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  preferredTime: string;
}

const services: Service[] = [
  {
    id: "data-analytics",
    title: "Data Analytics & BI",
    description: "Turn raw data into actionable insights using modern BI tools.",
    icon: <TrendingUp className="w-8 h-8" />,
    features: ["Interactive Dashboards", "Real-time Insights", "Data Warehousing", "Data Storytelling"]
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Build intelligent systems with predictive analytics and ML algorithms.",
    icon: <Zap className="w-8 h-8" />,
    features: ["Model Development", "Forecasting", "NLP & CV", "Model Monitoring"],
    popular: true
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    description: "Design scalable data pipelines and automate workflows.",
    icon: <Code className="w-8 h-8" />,
    features: ["ETL/ELT Pipelines", "Data Lakes & Warehouses", "Batch & Streaming", "Cloud Integration"]
  },
  {
    id: "cloud-solutions",
    title: "Cloud & DevOps",
    description: "Deploy secure, scalable infrastructure for data platforms.",
    icon: <Globe className="w-8 h-8" />,
    features: ["CI/CD for Data", "Kubernetes & Docker", "AWS/GCP/Azure", "DataOps & MLOps"]
  },
  {
    id: "consulting",
    title: "Data Strategy Consulting",
    description: "Align your business goals with a future-ready data roadmap.",
    icon: <Shield className="w-8 h-8" />,
    features: ["Architecture Design", "Tech Stack Selection", "Governance", "Compliance Readiness"]
  },
  {
    id: "support",
    title: "Ongoing Support & Optimization",
    description: "Ensure reliability and performance of data systems over time.",
    icon: <Headphones className="w-8 h-8" />,
    features: ["Monitoring", "Bug Fixes", "Performance Tuning", "24/7 Support"]
  }
];

const stats = [
  { icon: <Award className="w-6 h-6" />, value: "50+", label: "Projects Completed" },
  { icon: <TrendingUp className="w-6 h-6" />, value: "99%", label: "Success Rate" },
  { icon: <Star className="w-6 h-6" />, value: "4.9/5", label: "Client Rating" },
  { icon: <Clock className="w-6 h-6" />, value: "10+", label: "Years of Experience" }
];

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    preferredTime: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      preferredTime: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/schedule-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        resetForm();
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitStatus(null);
        }, 3000);
      } else {
        setSubmitStatus('error');
        console.error('Submission failed:', result.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitStatus(null);
    if (!isSubmitting) {
      resetForm();
    }
  };

  return (
    <div className="min-h-screen bg-white text-dp-navy">

      {/* AI SERVICES HERO */}
      <section className="relative w-full bg-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="py-16 lg:py-32 pr-0 lg:pr-16 relative z-10">

            <p className="uppercase tracking-[0.3em] text-sm text-dp-magenta font-medium mb-6">
              AI Services
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-dp-navy leading-tight mb-8">
              Engineering Intelligent
              <span className="block font-semibold text-dp-gradient">
                Enterprise Systems
              </span>
            </h2>

            <div className="w-20 h-1 bg-dp-magenta rounded-full mb-8"></div>

            <p className="text-base sm:text-lg text-dp-navy/70 leading-relaxed mb-8">
              We design and deploy enterprise-grade artificial intelligence solutions
              that enhance operational efficiency, enable predictive decision-making,
              and accelerate sustainable business growth.
            </p>

            <p className="text-base sm:text-lg text-dp-navy/70 leading-relaxed mb-10">
              From machine learning engineering to AI strategy advisory,
              our approach integrates technology, governance, and business alignment
              to deliver measurable and scalable outcomes.
            </p>

            <button className="px-8 py-4 bg-dp-magenta text-white font-medium rounded-lg hover:bg-dp-magenta/90 transition duration-300">
              Explore AI Capabilities
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mt-10 lg:mt-0 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">

            <img
              src="/aiservices.webp"
              alt="AI Services"
              className="w-full h-[300px] sm:h-[400px] lg:h-full object-cover"
            />

          </div>

        </div>

      </section>

      {/* Why Choose Section */}
      <section className="relative py-32 bg-dp-gradient overflow-hidden">

        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT CONTENT */}
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-white/70 font-medium mb-6">
              Why Choose Us
            </p>

            <h2 className="text-5xl md:text-6xl font-light text-white leading-tight mb-8">
              Strategic Intelligence.
              <span className="block font-light">
                Measurable Business Impact.
              </span>
            </h2>

            <div className="w-16 h-1 bg-white/60 rounded-full mb-8"></div>

            <p className="text-white/85 text-lg leading-relaxed mb-6">
              At Data Panther, we don&rsquo;t just build AI systems — we engineer intelligent
              ecosystems that align with your business strategy, operational goals,
              and long-term growth vision.
            </p>

            <p className="text-white/85 text-lg leading-relaxed mb-10">
              Our approach combines deep technical expertise with strategic consulting,
              ensuring every solution we deliver generates measurable ROI, enhances
              decision-making, and reduces operational complexity.
            </p>

            <button className="px-8 py-4 bg-white text-dp-navy font-medium rounded-lg hover:bg-white/90 transition duration-300">
              Speak With Our Experts
            </button>
          </div>

          {/* RIGHT VALUE PILLARS */}
          <div className="space-y-10">

            {[
              {
                title: "Business-First AI Strategy",
                desc: "We align artificial intelligence initiatives with executive priorities, ensuring every model, dashboard, and automation serves a defined business outcome."
              },
              {
                title: "Scalable & Secure Infrastructure",
                desc: "From cloud-native architectures to governance frameworks, we design enterprise-grade systems built for scale, compliance, and resilience."
              },
              {
                title: "Long-Term Partnership",
                desc: "We operate as strategic partners — supporting implementation, optimization, and continuous innovation to keep your organization ahead of the curve."
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-white/10 border border-white/25 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-dp-magenta font-medium mb-6">
              What You Receive
            </p>

            <h2 className="text-5xl md:text-6xl font-light text-dp-navy leading-tight mb-8">
              Tangible Outcomes.
              <span className="block font-light">
                Enterprise-Grade Delivery.
              </span>
            </h2>

            <div className="w-16 h-1 bg-dp-magenta rounded-full mb-8"></div>

            <p className="text-lg text-dp-navy/70 leading-relaxed mb-10">
              We go beyond implementation. Every engagement results in production-ready,
              strategically aligned systems built for scalability, resilience, and measurable business performance.
              Our deliverables are engineered to create long-term value — not short-term fixes.
            </p>

            <div className="space-y-5">

              {[
                "Production-ready AI & analytics solutions",
                "Secure, scalable cloud and backend architecture",
                "Comprehensive documentation and executive reporting",
                "Performance monitoring and integrated analytics",
                "Ongoing optimization and post-deployment support"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-dp-gradient text-white">
                    <CheckCircle className="w-4 h-4" />
                  </span>
                  <span className="text-dp-navy/80 text-base leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Enterprise AI Deliverables"
              className="relative w-full object-cover rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Side Image */}
            <div className="relative">
              <img
                src="/IndustriesTransform.webp"
                alt="Industries Transformation"
                className="w-full h-auto rounded-3xl shadow-xl object-cover"
              />
            </div>

            {/* Right Side Content */}
            <div className="text-left">

              <p className="uppercase tracking-[0.3em] text-sm text-dp-magenta font-medium mb-6">
                Industries
              </p>

              <h2 className="text-4xl md:text-5xl font-light text-dp-navy leading-tight mb-6">
                Industries We
                <span className="block font-light">
                  Transform
                </span>
              </h2>

              <div className="w-16 h-1 bg-dp-magenta rounded-full mb-8"></div>

              <p className="text-lg text-dp-navy/70 leading-relaxed mb-12">
                We design and deploy intelligent systems across high-impact industries —
                modernizing operations, enhancing decision intelligence, and unlocking
                scalable digital transformation.
              </p>

            </div>

          </div>

          {/* Industry Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

            {[
              {
                title: "Healthcare",
                desc: "AI-driven diagnostics, predictive analytics, and operational optimization to improve patient outcomes and system efficiency."
              },
              {
                title: "Financial Services",
                desc: "Fraud detection, risk modelling, and intelligent automation to enhance compliance, security, and decision speed."
              },
              {
                title: "Logistics & Supply Chain",
                desc: "Demand forecasting, route optimization, and real-time analytics for resilient and cost-efficient operations."
              },
              {
                title: "Retail & E-Commerce",
                desc: "Personalized recommendation engines, customer intelligence, and performance analytics to drive conversion growth."
              },
              {
                title: "Manufacturing",
                desc: "Predictive maintenance, quality control automation, and production intelligence powered by advanced analytics."
              },
              {
                title: "Technology & SaaS",
                desc: "Scalable AI integration, product intelligence, and data-driven feature optimization."
              }
            ].map((industry, index) => (
              <div
                key={index}
                className="group relative bg-white border border-dp-navy/15 rounded-xl p-8 overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                <h3 className="text-xl font-semibold text-dp-navy mb-4">
                  {industry.title}
                </h3>

                <p className="text-dp-navy/70 leading-relaxed">
                  {industry.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Premium Services Section */}
      <section className="py-32 bg-dp-navy/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Section Header */}
          <div className="text-center mb-28">
            <p className="uppercase tracking-[0.3em] text-sm text-dp-magenta font-medium mb-6">
              Our Capabilities
            </p>

            <h2 className="text-5xl md:text-6xl font-light text-dp-navy leading-tight mb-6">
              AI & Data Solutions
              <span className="block font-light">
                Built for Enterprise Scale
              </span>
            </h2>

            <div className="w-20 h-1 bg-dp-magenta rounded-full mx-auto mb-8"></div>

            <p className="text-lg text-dp-navy/70 max-w-3xl mx-auto leading-relaxed">
              We design, engineer, and deploy intelligent systems that enhance
              decision-making, optimize operations, and unlock measurable business growth.
            </p>
          </div>

          {/* Service 1 */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">

            {/* Content */}
            <div>
              <h3 className="text-3xl font-semibold text-dp-navy mb-6">
                Artificial Intelligence Engineering
              </h3>

              <div className="w-12 h-1 bg-dp-magenta rounded-full mb-6"></div>

              <p className="text-dp-navy/70 leading-relaxed mb-8">
                We build production-grade machine learning systems and AI-driven
                applications that automate complex workflows, enhance predictive
                intelligence, and generate scalable business value.
              </p>

              <ul className="space-y-3 text-dp-navy/80">
                {["Custom machine learning model development", "Generative AI & LLM integration", "Intelligent automation systems", "MLOps & deployment pipelines"].map((li, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dp-magenta shrink-0" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="/aiengineering.webp"
                alt="AI Engineering"
                className="relative w-full object-cover rounded-xl"
              />
            </div>

          </div>

          {/* Service 2 */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">

            {/* Image Left */}
            <div className="relative order-2 lg:order-1">
              <img
                src="/advanceBI.webp"
                alt="Data Analytics"
                className="relative w-full object-cover rounded-xl"
              />
            </div>

            {/* Content Right */}
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-semibold text-dp-navy mb-6">
                Advanced Analytics & Business Intelligence
              </h3>

              <div className="w-12 h-1 bg-dp-magenta rounded-full mb-6"></div>

              <p className="text-dp-navy/70 leading-relaxed mb-8">
                Transform raw data into strategic insight with scalable analytics
                architectures, executive dashboards, and predictive decision systems.
              </p>

              <ul className="space-y-3 text-dp-navy/80">
                {["Executive KPI dashboards", "Predictive & prescriptive analytics", "Real-time data pipelines", "Enterprise reporting systems"].map((li, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dp-magenta shrink-0" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Service 3 */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Content */}
            <div>
              <h3 className="text-3xl font-semibold text-dp-navy mb-6">
                Cloud & Data Infrastructure
              </h3>

              <div className="w-12 h-1 bg-dp-magenta rounded-full mb-6"></div>

              <p className="text-dp-navy/70 leading-relaxed mb-8">
                Architect secure, scalable cloud environments optimized for AI workloads,
                analytics processing, and enterprise performance resilience.
              </p>

              <ul className="space-y-3 text-dp-navy/80">
                {["Cloud-native architecture design", "Data governance frameworks", "Security & compliance implementation", "Performance optimization & scaling"].map((li, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dp-magenta shrink-0" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="/cloud-service.webp"
                alt="Cloud Infrastructure"
                className="relative w-full object-cover rounded-xl"
              />
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-white">

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">

          <h2 className="text-4xl md:text-5xl font-light text-dp-navy leading-tight mb-6">
            Ready to Strengthen Your Data Strategy?
          </h2>

          <div className="w-16 h-1 bg-dp-magenta rounded-full mx-auto mb-8"></div>

          <p className="text-lg text-dp-navy/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let&rsquo;s discuss how we can help you improve decision-making,
            streamline operations, and build scalable AI solutions
            for your organization.
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group rounded-lg bg-dp-magenta text-white px-8 py-4 font-medium hover:bg-dp-magenta/90 transition-all duration-300 flex items-center gap-2"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-dp-navy/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative p-6 border-b border-dp-navy/15 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-dp-navy">Schedule a Call</h3>
                  <p className="text-dp-navy/70 mt-1">Let's explore how we can address your data challenges and achieve your goals together.</p>
                </div>
                <button
                  onClick={closeModal}
                  disabled={isSubmitting}
                  className="p-2 hover:bg-dp-navy/5 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <X className="w-6 h-6 text-dp-navy/40" />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-semibold">Success!</div>
                    <div className="text-sm">Your call has been scheduled successfully! We'll contact you within 24 hours.</div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800 flex items-center gap-3">
                  <X className="w-5 h-5 text-red-600" />
                  <div>
                    <div className="font-semibold">Error</div>
                    <div className="text-sm">There was an error scheduling your call. Please try again or contact us directly.</div>
                  </div>
                </div>
              )}

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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-dp-navy/20 rounded-lg focus:ring-2 focus:ring-dp-magenta focus:border-transparent transition-colors disabled:bg-dp-navy/5 disabled:cursor-not-allowed"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-dp-navy/20 rounded-lg focus:ring-2 focus:ring-dp-magenta focus:border-transparent transition-colors disabled:bg-dp-navy/5 disabled:cursor-not-allowed"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-dp-navy/20 rounded-lg focus:ring-2 focus:ring-dp-magenta focus:border-transparent transition-colors disabled:bg-dp-navy/5 disabled:cursor-not-allowed"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-dp-navy/20 rounded-lg focus:ring-2 focus:ring-dp-magenta focus:border-transparent transition-colors disabled:bg-dp-navy/5 disabled:cursor-not-allowed"
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
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-dp-navy/20 rounded-lg focus:ring-2 focus:ring-dp-magenta focus:border-transparent transition-colors disabled:bg-dp-navy/5 disabled:cursor-not-allowed"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                  <option value="evening">Evening (5 PM - 8 PM)</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dp-navy/80 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-dp-navy/20 rounded-lg focus:ring-2 focus:ring-dp-magenta focus:border-transparent transition-colors resize-none disabled:bg-dp-navy/5 disabled:cursor-not-allowed"
                  placeholder="Describe your data challenges, goals, or any specific requirements..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 border border-dp-navy/20 text-dp-navy/80 rounded-lg hover:bg-dp-navy/5 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  className="flex-1 px-6 py-3 bg-dp-magenta text-white rounded-lg hover:bg-dp-magenta/90 transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Scheduling...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Scheduled!
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      Schedule Call
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
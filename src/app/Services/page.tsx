

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
  Users,
  Award,
  Sparkles,
  Play,
  Download,
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
  const [formData, setFormData] = useState({
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
    alert('Thank you for your interest! We\'ll get back to you soon.');
    setIsModalOpen(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      preferredTime: ''
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 mt-10">
      {/* Hero Section */}
      <header className="relative py-32 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/8 to-black-600/80"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-md animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-sm animate-pulse delay-500"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Play className="w-4 h-4 text-blue-100" />
            <span className="text-blue-100">Our Services</span>
          </div>
          <h1 className="text-6xl font-serif mb-6 bg-gradient-to-r from-white to-black-100 bg-clip-text text-transparent relative">
            <span className="text-green-500">Services</span>
            <span className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-70 h-1 bg-green-500 rounded"></span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100 mb-8 leading-relaxed">
            Data-first solutions designed to empower your business through analytics, automation, and innovation.
          </p>
        </div>
      </header>

      <section className="py-20 bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-green-500 font-serif mb-4 relative inline-block">
              Why Choose Data Panther?
              <span className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-70 h-1 bg-black rounded"></span>
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto my-5">
              At <span className="font-semibold text-black">Data Panther</span>, we specialize in delivering cutting-edge solutions in <strong>Data Science</strong>, <strong>Analytics</strong>, and <strong>Generative AI</strong>. From building intelligent automation systems to unlocking valuable insights through advanced analytics, our solutions are engineered to drive innovation and success in your business.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-4xl font-serif text-green-600 mb-2">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-1">{stat.value}</h3>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-serif text-green-500 mb-6">
              What You Get When You Work With Us
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We don't just deliver code — we deliver complete, production-ready solutions. Our team ensures every project is
              tailored to your business goals, technically sound, and scalable for the future. From intuitive interfaces to
              secure backends and performance analytics, you'll walk away with a fully polished product and the peace of mind
              of post-launch support.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Complete deployment-ready applications</li>
              <li>Technical documentation and training (on request)</li>
              <li>Optimized, secure backend infrastructure</li>
              <li>Integrated analytics and SEO-ready pages</li>
              <li>Continuous communication and post-launch support</li>
            </ul>
          </div>

          {/* Image */}
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Deliverables preview"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-serif text-white inline-block mb-2 relative">
            Industries We Serve
            <span className="block mt-2 mx-auto w-32 h-1 bg-green-500 rounded"></span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed">
            We've built transformative solutions across diverse sectors — enabling innovation in healthcare, boosting operational
            efficiency in logistics, streamlining financial systems, and enhancing user experiences in e-commerce and beyond.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4 text-white">What We Offer</h2>
            <span className="block mt-2 mx-auto w-32 h-1 bg-green-500 rounded"></span>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
              From strategy to execution—empowering your team with data-driven capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="relative group cursor-pointer hover:scale-105 transition-all duration-500"
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 h-full shadow hover:shadow-lg transition-all duration-300">
                  <div className="mb-6">
                    <div className="p-3 w-fit bg-green-100 rounded-lg text-green-600 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-serif mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's talk about how Data Panther can help you scale with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        // <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select preferred time</option>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Describe your data challenges, goals, or any specific requirements..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
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
    </div>
  );
}
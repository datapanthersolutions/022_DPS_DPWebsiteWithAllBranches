
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
    <div className="min-h-screen bg-white text-gray-800">
 

  
    <section className="relative w-full flex items-center justify-center text-center text-white">
  <div className="relative w-full overflow-hidden" style={{ paddingTop: "56.25%" }}>
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/servicesvideo1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</section>



      
{/* Stats Section */}
<section className="relative overflow-hidden text-gray-900 bg-[url('/whychooseus.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center">
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-28 text-left">
    {/* Heading */}
    <div className="mb-12 sm:mb-16 max-w-3xl">
      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#D3ECCD] font-montserrat mb-4">
        Why Choose Data Panther
      </h2>
      <div className="w-32 sm:w-48 h-1 bg-red-500 mb-4 sm:mb-6"></div>
      <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
        We specialize in cutting-edge solutions in <strong>Data Science</strong>,{" "}
        <strong>Analytics</strong>, and <strong>Generative AI</strong>. From automation
        systems to advanced analytics, we deliver innovation that moves your
        business forward.
      </p>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="group relative bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl p-6 sm:p-8 
                     shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 overflow-hidden"
        >
          {/* Gradient hover effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/40 via-green-400/20 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-6 rounded-xl 
                            bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-white 
                            transition-colors duration-500">
              {stat.icon}
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-1 sm:mb-2 text-center 
                           transition-colors duration-500 group-hover:text-green-100">
              {stat.value}
            </h3>

            <p className="text-sm sm:text-base text-gray-300 text-center leading-relaxed 
                          group-hover:text-green-50 transition-colors duration-500">
              {stat.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* Deliverables Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            
            <h2 className="text-4xl md:text-5xl font-montserrat font-semibold text-gray-900 mb-6">
              What You Get When You <span className="text-green-600">Work With Us</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
We don't just deliver code — we deliver complete, production-ready solutions. Our team ensures every project is tailored to your business goals, technically sound, and scalable for the future. From intuitive interfaces to secure backends and performance analytics, you'll walk away with a fully polished product and the assurance of post-launch support.             </p>
            <div className="space-y-4">
              {[
                "Complete deployment-ready applications",
                "Technical documentation and training (on request)",
                "Optimized, secure backend infrastructure",
                "Integrated analytics and SEO-ready pages",
                "Continuous communication and post-launch support"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                  <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <img
              src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Deliverables preview"
              className="relative rounded-2xl shadow-2xl w-full object-cover transform group-hover:-translate-y-2 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

    
<div className="w-full h-[120px]  relative overflow-hidden leading-none">
  <svg
    className="absolute top-0 left-0 w-full h-full"
    viewBox="0 0 1440 120"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path d="M0,0 L1440,60 L1440,120 L0,120 Z" fill="#000000ff" />
  </svg>
</div>

{/* Industries Section */}
<section
  className="py-16 relative z-10 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/dark.png')" }}
> 
  {/* Dim overlay */}
  <div className="absolute inset-0 bg-black/50 z-0"></div>

  {/* Content */}
  <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
    <h2 className="text-3xl sm:text-4xl font-montserrat text-[#D3ECCD] mb-6">
      Industries We Transform
    </h2>
    <div className="w-24 h-1 bg-red-500 rounded mx-auto mb-6"></div>
    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
      We've built transformative solutions across diverse sectors enabling innovation in healthcare, boosting operational efficiency in logistics, 
      streamlining financial systems, and enhancing user experiences in e-commerce and beyond.
    </p>
  </div>
</section>




      {/* Slanted Divider */}
      <div className="relative bg-[#000000ff]">
        <svg className="w-full h-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 L1440,0 L1440,100 Z" fill="white"/>
        </svg>
      </div>

      {/* Services Section */}
     <section
  className="py-20 relative overflow-hidden bg-[#212121]"
  style={{
    backgroundImage: "url('/blackandwhite.png')", // 🔹 replace with your image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Dark overlay for dim effect */}
  <div className="absolute inset-0 bg-black/80 z-0"></div>

  {/* Main content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-montserrat mb-4 text-[#D3ECCD]">
        What We <span className="text-green-400">Offer</span>
      </h2>
      <div className="w-24 h-1 bg-red-500 rounded mx-auto mb-6"></div>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        From strategy to execution—empowering your team with data-driven
        capabilities.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <div
          key={service.id}
          onMouseEnter={() => setHoveredService(service.id)}
          onMouseLeave={() => setHoveredService(null)}
          className="group relative cursor-pointer"
        >
          <div className="relative p-8 h-full border border-gray-700 group-hover:border-green-500/50 shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 bg-[#1b1b1b]/70 backdrop-blur-sm">
            <div className="mb-6">
              <div className="p-4 w-fit bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl text-[#E1FFC2] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {service.icon}
              </div>
            </div>

            <h3 className="text-xl font-montserrat mb-3 text-gray-100 group-hover:text-green-400 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-400 font-montserrat mb-6 leading-relaxed">
              {service.description}
            </p>

            <div className="space-y-3 mb-4">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center text-[#CCEABB] group-hover:translate-x-1 transition-transform duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className="text-sm">{feature}</span>
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
      <section className="py-20  relative overflow-hidden">
   
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
         
          <h2 className="text-4xl md:text-5xl font-montserrat mb-6 text-gray-900">
            Ready to Transform Your <span className="text-green-600">Data Strategy?</span>
          </h2>
          <p className=" text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how Data Panther can help you unlock insights, scale with confidence, and achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
className="group border-2 border-green-500 text-green-600 px-8 py-4 font-montserrat hover:bg-green-500 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Schedule a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
          
         
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-Mobile text-gray-900">Schedule a Call</h3>
                  <p className="text-gray-600 mt-1">Let's explore how we can address your data challenges and achieve your goals together.</p>
                </div>
                <button
                  onClick={closeModal}
                  disabled={isSubmitting}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <X className="w-6 h-6 text-gray-400" />
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Describe your data challenges, goals, or any specific requirements..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
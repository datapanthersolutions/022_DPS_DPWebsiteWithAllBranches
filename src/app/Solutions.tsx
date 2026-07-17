import React, { useState } from 'react';
import {
  Database,
  BarChart3,
  Brain,
  Cloud,
  Shield,
  Zap,
  Target,
  Users,
  TrendingUp,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  Code,
  LineChart,
  PieChart,
  Activity,
  Lock,
  Rocket,
  Award,
  Building,
  Factory,
  ShoppingCart,
  Briefcase,
  Heart,
  GraduationCap,
  Phone,
  Calendar
} from 'lucide-react';

const SolutionsPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const solutions = [
    {
      id: 'analytics',
      title: 'Advanced Analytics Platform',
      subtitle: 'Real-time insights and predictive analytics',
      description: 'Transform your raw data into actionable insights with our comprehensive analytics platform featuring machine learning algorithms, real-time processing, and intuitive visualizations.',
      icon: BarChart3,
      features: [
        'Real-time data processing',
        'Predictive analytics & forecasting',
        'Custom dashboard creation',
        'Automated reporting',
        'Data visualization tools',
        'Multi-source data integration'
      ],
      benefits: [
        'Reduce decision-making time by 60%',
        'Increase operational efficiency by 40%',
        'Improve forecast accuracy by 35%',
        'Cut reporting time by 80%'
      ],
      pricing: 'Starting at $499/month',
      category: 'core'
    },
    {
      id: 'ml',
      title: 'Machine Learning Suite',
      subtitle: 'AI-powered intelligent automation',
      description: 'Leverage the power of artificial intelligence to automate complex processes, detect patterns, and make intelligent predictions that drive business growth.',
      icon: Brain,
      features: [
        'Automated model training',
        'Anomaly detection',
        'Natural language processing',
        'Computer vision capabilities',
        'Recommendation engines',
        'Fraud detection algorithms'
      ],
      benefits: [
        'Automate 70% of routine tasks',
        'Detect issues 50x faster',
        'Reduce false positives by 90%',
        'Increase customer satisfaction by 45%'
      ],
      pricing: 'Starting at $799/month',
      category: 'advanced'
    },
    {
      id: 'cloud',
      title: 'Cloud Data Infrastructure',
      subtitle: 'Scalable, secure cloud solutions',
      description: 'Build robust data infrastructure in the cloud with auto-scaling capabilities, enterprise-grade security, and seamless integration with your existing systems.',
      icon: Cloud,
      features: [
        'Auto-scaling architecture',
        'Multi-cloud deployment',
        'Data lake & warehouse setup',
        'ETL/ELT pipeline automation',
        'Disaster recovery systems',
        'Cost optimization tools'
      ],
      benefits: [
        'Scale to handle 10x data volume',
        'Reduce infrastructure costs by 30%',
        'Achieve 99.9% uptime SLA',
        'Improve data processing speed by 5x'
      ],
      pricing: 'Starting at $299/month',
      category: 'infrastructure'
    },
    {
      id: 'security',
      title: 'Data Security & Compliance',
      subtitle: 'Enterprise-grade data protection',
      description: 'Ensure your data remains secure and compliant with industry regulations through advanced encryption, access controls, and audit trails.',
      icon: Shield,
      features: [
        'End-to-end encryption',
        'Role-based access control',
        'Compliance monitoring',
        'Audit trail management',
        'Data anonymization',
        'Privacy policy automation'
      ],
      benefits: [
        'Meet GDPR, HIPAA, SOX compliance',
        'Reduce security incidents by 95%',
        'Automate compliance reporting',
        'Protect against data breaches'
      ],
      pricing: 'Starting at $399/month',
      category: 'security'
    },
    {
      id: 'realtime',
      title: 'Real-time Data Streaming',
      subtitle: 'Instant data processing and alerts',
      description: 'Process and analyze data as it flows through your systems with real-time streaming capabilities, instant alerts, and live dashboards.',
      icon: Zap,
      features: [
        'Stream processing engines',
        'Real-time alerting system',
        'Live dashboard updates',
        'Event-driven architecture',
        'Low-latency data pipelines',
        'Continuous monitoring'
      ],
      benefits: [
        'React to issues in milliseconds',
        'Process millions of events/second',
        'Reduce system downtime by 85%',
        'Improve customer experience'
      ],
      pricing: 'Starting at $599/month',
      category: 'realtime'
    },
    {
      id: 'consulting',
      title: 'Data Strategy Consulting',
      subtitle: 'Expert guidance for data transformation',
      description: 'Work with our data experts to develop a comprehensive data strategy that aligns with your business objectives and accelerates digital transformation.',
      icon: Target,
      features: [
        'Data maturity assessment',
        'Strategy roadmap development',
        'Technology stack recommendations',
        'Team training & workshops',
        'Implementation planning',
        'Ongoing support & optimization'
      ],
      benefits: [
        'Accelerate time-to-value by 50%',
        'Avoid costly implementation mistakes',
        'Build internal data capabilities',
        'Achieve measurable ROI'
      ],
      pricing: 'Custom pricing',
      category: 'consulting'
    }
  ];

  const industries = [
    {
      id: 'finance',
      name: 'Financial Services',
      icon: Building,
      description: 'Risk management, fraud detection, and regulatory compliance solutions for banks and financial institutions.',
      useCases: ['Fraud Detection', 'Risk Assessment', 'Regulatory Reporting', 'Customer Analytics']
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: Heart,
      description: 'Patient data analytics, clinical insights, and operational efficiency solutions for healthcare providers.',
      useCases: ['Patient Outcomes', 'Clinical Analytics', 'Operational Efficiency', 'Research Insights']
    },
    {
      id: 'retail',
      name: 'Retail & E-commerce',
      icon: ShoppingCart,
      description: 'Customer behavior analysis, inventory optimization, and personalized marketing solutions.',
      useCases: ['Customer Segmentation', 'Inventory Optimization', 'Price Analytics', 'Recommendation Systems']
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: Factory,
      description: 'Predictive maintenance, quality control, and supply chain optimization for manufacturers.',
      useCases: ['Predictive Maintenance', 'Quality Control', 'Supply Chain', 'Production Optimization']
    },
    {
      id: 'education',
      name: 'Education',
      icon: GraduationCap,
      description: 'Student performance analytics, learning insights, and institutional effectiveness solutions.',
      useCases: ['Student Analytics', 'Learning Outcomes', 'Resource Optimization', 'Performance Tracking']
    },
    {
      id: 'technology',
      name: 'Technology',
      icon: Code,
      description: 'Product analytics, user behavior insights, and performance monitoring for tech companies.',
      useCases: ['Product Analytics', 'User Behavior', 'Performance Monitoring', 'A/B Testing']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Data Officer',
      company: 'TechCorp Inc.',
      rating: 5,
      text: 'Data Panther transformed our analytics capabilities. We now make data-driven decisions 10x faster than before.',
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Michael Chen',
      role: 'VP of Operations',
      company: 'RetailMax',
      rating: 5,
      text: 'The ML suite helped us reduce operational costs by 35% while improving customer satisfaction significantly.',
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Head of Analytics',
      company: 'FinanceFlow',
      rating: 5,
      text: 'Outstanding platform with excellent support. The real-time insights have been game-changing for our business.',
      avatar: '/api/placeholder/60/60'
    }
  ];

  const stats = [
    { value: '500+', label: 'Enterprise Clients', icon: Users },
    { value: '99.9%', label: 'Uptime SLA', icon: Activity },
    { value: '10PB+', label: 'Data Processed Daily', icon: Database },
    { value: '50ms', label: 'Average Response Time', icon: Zap }
  ];

  const filteredSolutions = solutions;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-[#29235B]/20 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-serif text-white">Data Panther</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#" className="text-white font-medium">Solutions</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Insights</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Transform Your Business with
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Data Intelligence</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Unlock the full potential of your data with our comprehensive suite of analytics, machine learning, and data infrastructure solutions designed for enterprise success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 border border-purple-500/30 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-all flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-3xl font-serif text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-white mb-4">Our Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive data solutions designed to meet your organization's unique needs and drive measurable results
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredSolutions.map((solution) => (
              <div key={solution.id} className="bg-white/5 backdrop-blur-sm  p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl flex items-center justify-center group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all">
                    <solution.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-white mb-2">{solution.title}</h3>
                    <p className="text-purple-300 font-medium">{solution.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{solution.description}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-white font-semiserif mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {solution.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semiserif mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {solution.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-300 text-sm">
                          <TrendingUp className="w-4 h-4 text-purple-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-serif text-white">{solution.pricing}</div>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all flex items-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#29235B]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-white mb-4">Industry Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored data solutions for specific industry challenges and requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div key={industry.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg flex items-center justify-center group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all">
                    <industry.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-serif text-white">{industry.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{industry.description}</p>
                <div className="space-y-2">
                  <h4 className="text-white font-medium text-sm">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.useCases.map((useCase, index) => (
                      <span key={index} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">Trusted by leading organizations worldwide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="text-white font-medium">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    <div className="text-purple-300 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm  p-12 border border-purple-500/20 text-center">
            <Rocket className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-4xl font-serif text-white mb-4">Ready to Transform Your Data?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations that have already revolutionized their data operations with Data Panther
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Schedule Demo</span>
              </button>
              <button className="bg-white/10 border border-purple-500/30 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-all flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Contact Sales</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#29235B]/20 backdrop-blur-md border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-serif text-white">Data Panther</span>
              </div>
              <p className="text-gray-400">
                Empowering businesses with intelligent data solutions and advanced analytics.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semiserif mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Analytics Platform</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Machine Learning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cloud Infrastructure</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semiserif mb-4">Industries</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Financial Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Healthcare</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Retail</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Manufacturing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semiserif mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Data Panther. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SolutionsPage;
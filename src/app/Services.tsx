import React, { useState } from 'react';
import { 
  Database, 
  Users, 
  Rocket, 
  Shield, 
  Headphones, 
  GraduationCap,
  Settings,
  Code,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Calendar,
  MessageCircle,
  FileText,
  BarChart3,
  Brain,
  Cloud,
  Zap,
  Target,
  Award,
  Building,
  Phone,
  Mail,
  Globe,
  Users2,
  Briefcase,
  Wrench,
  BookOpen,
  Coffee,
  Video,
  Download,
  Search,
  Filter
} from 'lucide-react';

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedServiceType, setSelectedServiceType] = useState('consulting');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'consulting', name: 'Consulting', icon: Users },
    { id: 'implementation', name: 'Implementation', icon: Rocket },
    { id: 'support', name: 'Support', icon: Headphones },
    { id: 'training', name: 'Training', icon: GraduationCap }
  ];

  const consultingServices = [
    {
      id: 'strategy',
      title: 'Data Strategy Consulting',
      subtitle: 'Strategic roadmap for data transformation',
      description: 'Work with our experts to develop a comprehensive data strategy that aligns with your business objectives and accelerates digital transformation.',
      icon: Target,
      duration: '4-8 weeks',
      deliverables: [
        'Data maturity assessment',
        'Strategic roadmap & implementation plan',
        'Technology stack recommendations',
        'ROI projections & business case',
        'Governance framework design'
      ],
      benefits: [
        'Accelerate time-to-value by 50%',
        'Avoid costly implementation mistakes',
        'Build data-driven culture',
        'Achieve measurable ROI'
      ],
      pricing: 'Starting at $25,000',
      featured: true
    },
    {
      id: 'architecture',
      title: 'Data Architecture Design',
      subtitle: 'Scalable data infrastructure planning',
      description: 'Design robust, scalable data architectures that support current needs and future growth while ensuring security and compliance.',
      icon: Building,
      duration: '6-12 weeks',
      deliverables: [
        'Technical architecture blueprint',
        'Data flow diagrams',
        'Security & compliance framework',
        'Integration specifications',
        'Performance optimization plan'
      ],
      benefits: [
        'Future-proof architecture',
        'Reduce integration complexity',
        'Improve data quality',
        'Enable real-time processing'
      ],
      pricing: 'Starting at $35,000'
    },
    {
      id: 'assessment',
      title: 'Data Maturity Assessment',
      subtitle: 'Comprehensive evaluation of current state',
      description: 'Evaluate your organization\'s data capabilities, identify gaps, and create a prioritized improvement plan.',
      icon: Search,
      duration: '2-4 weeks',
      deliverables: [
        'Current state analysis',
        'Gap analysis report',
        'Maturity scoring',
        'Improvement recommendations',
        'Quick wins identification'
      ],
      benefits: [
        'Understand current capabilities',
        'Identify improvement opportunities',
        'Prioritize investments',
        'Benchmark against industry'
      ],
      pricing: 'Starting at $15,000'
    }
  ];

  const implementationServices = [
    {
      id: 'platform',
      title: 'Platform Implementation',
      subtitle: 'End-to-end deployment and configuration',
      description: 'Complete implementation of Data Panther solutions with custom configuration, integration, and optimization for your environment.',
      icon: Rocket,
      duration: '8-16 weeks',
      deliverables: [
        'Platform deployment & configuration',
        'Data pipeline development',
        'Custom dashboard creation',
        'Integration with existing systems',
        'Performance testing & optimization'
      ],
      benefits: [
        'Faster deployment',
        'Reduced implementation risk',
        'Optimized performance',
        'Seamless integration'
      ],
      pricing: 'Starting at $50,000'
    },
    {
      id: 'migration',
      title: 'Data Migration Services',
      subtitle: 'Secure and efficient data transitions',
      description: 'Migrate your data from legacy systems to modern platforms with zero downtime and complete data integrity.',
      icon: Database,
      duration: '4-12 weeks',
      deliverables: [
        'Migration strategy & plan',
        'Data mapping & transformation',
        'Quality validation testing',
        'Rollback procedures',
        'Go-live support'
      ],
      benefits: [
        'Zero data loss',
        'Minimal downtime',
        'Improved performance',
        'Enhanced security'
      ],
      pricing: 'Starting at $30,000'
    },
    {
      id: 'integration',
      title: 'System Integration',
      subtitle: 'Connect all your data sources',
      description: 'Integrate Data Panther solutions with your existing technology stack for seamless data flow and unified analytics.',
      icon: Settings,
      duration: '6-10 weeks',
      deliverables: [
        'Integration architecture design',
        'API development & testing',
        'Real-time sync configuration',
        'Error handling & monitoring',
        'Documentation & handover'
      ],
      benefits: [
        'Unified data view',
        'Real-time synchronization',
        'Automated workflows',
        'Reduced manual work'
      ],
      pricing: 'Starting at $40,000'
    }
  ];

  const supportServices = [
    {
      id: 'managed',
      title: 'Managed Services',
      subtitle: '24/7 platform management and optimization',
      description: 'Let our experts manage your Data Panther platform while you focus on deriving insights and driving business value.',
      icon: Headphones,
      duration: 'Ongoing',
      deliverables: [
        '24/7 monitoring & support',
        'Performance optimization',
        'Regular health checks',
        'Proactive maintenance',
        'Monthly reporting'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Expert management',
        'Cost optimization',
        'Focus on core business'
      ],
      pricing: 'Starting at $5,000/month'
    },
    {
      id: 'premium',
      title: 'Premium Support',
      subtitle: 'Priority support with dedicated resources',
      description: 'Get priority access to our support team with guaranteed response times and dedicated technical account management.',
      icon: Award,
      duration: 'Ongoing',
      deliverables: [
        'Dedicated support team',
        '2-hour response time',
        'Monthly review calls',
        'Priority bug fixes',
        'Feature request acceleration'
      ],
      benefits: [
        'Faster issue resolution',
        'Dedicated resources',
        'Strategic guidance',
        'Direct access to engineers'
      ],
      pricing: 'Starting at $2,500/month'
    },
    {
      id: 'health',
      title: 'Health Check Services',
      subtitle: 'Regular platform optimization reviews',
      description: 'Quarterly health checks to ensure optimal platform performance, identify optimization opportunities, and plan for growth.',
      icon: Activity,
      duration: 'Quarterly',
      deliverables: [
        'Performance analysis',
        'Optimization recommendations',
        'Security assessment',
        'Usage analytics',
        'Growth planning'
      ],
      benefits: [
        'Optimal performance',
        'Proactive issue detection',
        'Cost optimization',
        'Strategic planning'
      ],
      pricing: 'Starting at $7,500/quarter'
    }
  ];

  const trainingServices = [
    {
      id: 'onboarding',
      title: 'User Onboarding',
      subtitle: 'Get your team productive quickly',
      description: 'Comprehensive onboarding program to get your team up and running with Data Panther solutions efficiently.',
      icon: Users2,
      duration: '1-2 weeks',
      deliverables: [
        'Role-based training sessions',
        'Hands-on workshops',
        'Best practices guide',
        'Quick reference materials',
        'Certification completion'
      ],
      benefits: [
        'Faster user adoption',
        'Reduced learning curve',
        'Best practice implementation',
        'Increased productivity'
      ],
      pricing: 'Starting at $5,000'
    },
    {
      id: 'advanced',
      title: 'Advanced Analytics Training',
      subtitle: 'Master advanced features and capabilities',
      description: 'Deep-dive training on advanced analytics, machine learning, and complex data visualization techniques.',
      icon: Brain,
      duration: '3-5 days',
      deliverables: [
        'Advanced feature training',
        'ML model development',
        'Complex visualization techniques',
        'Custom analytics creation',
        'Performance optimization'
      ],
      benefits: [
        'Unlock advanced capabilities',
        'Build internal expertise',
        'Improve analysis quality',
        'Reduce external dependencies'
      ],
      pricing: 'Starting at $8,000'
    },
    {
      id: 'certification',
      title: 'Certification Programs',
      subtitle: 'Industry-recognized credentials',
      description: 'Comprehensive certification programs that validate expertise and provide industry-recognized credentials.',
      icon: Award,
      duration: '4-6 weeks',
      deliverables: [
        'Structured learning path',
        'Practical assessments',
        'Industry certification',
        'Continuing education credits',
        'Professional recognition'
      ],
      benefits: [
        'Industry recognition',
        'Career advancement',
        'Validated expertise',
        'Professional network access'
      ],
      pricing: 'Starting at $3,500'
    }
  ];

  const servicePackages = [
    {
      name: 'Starter Package',
      description: 'Perfect for small to medium businesses getting started with data analytics',
      price: '$25,000',
      duration: '6-8 weeks',
      includes: [
        'Data maturity assessment',
        'Basic platform implementation',
        'Standard training for 5 users',
        '3 months of standard support',
        'Basic dashboard setup'
      ],
      popular: false
    },
    {
      name: 'Enterprise Package',
      description: 'Comprehensive solution for large organizations with complex requirements',
      price: '$125,000',
      duration: '12-16 weeks',
      includes: [
        'Complete data strategy consulting',
        'Full platform implementation',
        'Advanced training for 25 users',
        '12 months of premium support',
        'Custom integrations & dashboards',
        'Dedicated success manager'
      ],
      popular: true
    },
    {
      name: 'Transformation Package',
      description: 'End-to-end digital transformation for data-driven organizations',
      price: 'Custom Pricing',
      duration: '6-12 months',
      includes: [
        'Complete organizational assessment',
        'Multi-platform implementation',
        'Organization-wide training program',
        '24/7 managed services',
        'Change management support',
        'Ongoing optimization & evolution'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'CTO',
      company: 'TechFlow Solutions',
      rating: 5,
      text: 'The Data Panther team transformed our entire data infrastructure. Their consulting services were invaluable.',
      service: 'Platform Implementation',
      result: '300% faster data processing'
    },
    {
      name: 'Maria Garcia',
      role: 'Data Director',
      company: 'RetailCorp',
      rating: 5,
      text: 'Exceptional training program. Our team became proficient with the platform in record time.',
      service: 'Advanced Training',
      result: '85% user adoption rate'
    },
    {
      name: 'David Kim',
      role: 'VP Operations',
      company: 'ManufacturingPro',
      rating: 5,
      text: 'Their managed services allow us to focus on business while they handle all technical aspects.',
      service: 'Managed Services',
      result: '99.9% uptime achieved'
    }
  ];

  const getCurrentServices = () => {
    switch(selectedServiceType) {
      case 'consulting': return consultingServices;
      case 'implementation': return implementationServices;
      case 'support': return supportServices;
      case 'training': return trainingServices;
      default: return consultingServices;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Data Panther</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Solutions</a>
              <a href="#" className="text-white font-medium">Services</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Professional
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Data Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Expert consulting, implementation, and support services to maximize your data investment and accelerate business outcomes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Schedule Consultation</span>
            </button>
            <button className="bg-white/10 border border-purple-500/30 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-all flex items-center justify-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Service Catalog</span>
            </button>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedServiceType(category.id === 'all' ? 'consulting' : category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                  (selectedServiceType === category.id || (category.id === 'all' && selectedServiceType)) 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Service Details */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {getCurrentServices().map((service) => (
              <div key={service.id} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 group ${
                service.featured ? 'border-purple-400/50 ring-2 ring-purple-500/20' : 'border-purple-500/20 hover:border-purple-500/40'
              }`}>
                {service.featured && (
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    Most Popular
                  </div>
                )}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl flex items-center justify-center group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all">
                    <service.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-purple-300 font-medium">{service.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-purple-400" />
                      <span>Duration: {service.duration}</span>
                    </h4>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Deliverables</h4>
                    <ul className="space-y-2">
                      {service.deliverables.slice(0, 3).map((deliverable, index) => (
                        <li key={index} className="flex items-start space-x-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                      {service.deliverables.length > 3 && (
                        <li className="text-purple-300 text-sm">+{service.deliverables.length - 3} more</li>
                      )}
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-purple-500/20">
                  <div className="text-2xl font-bold text-white">{service.pricing}</div>
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

      {/* Service Packages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Service Packages</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive packages designed to meet different organizational needs and budgets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 relative ${
                pkg.popular ? 'border-purple-400/50 ring-2 ring-purple-500/20 scale-105' : 'border-purple-500/20 hover:border-purple-500/40'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-300 mb-4">{pkg.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">{pkg.price}</div>
                  <div className="text-purple-300">{pkg.duration}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-lg font-medium transition-all ${
                  pkg.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                    : 'bg-white/10 border border-purple-500/30 text-white hover:bg-white/20'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful outcomes and measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understand your business needs, current state, and objectives', icon: Search },
              { step: '02', title: 'Strategy', description: 'Develop comprehensive plan with clear milestones and deliverables', icon: Target },
              { step: '03', title: 'Implementation', description: 'Execute with experienced team using proven methodologies', icon: Rocket },
              { step: '04', title: 'Optimization', description: 'Continuous improvement and ongoing support for maximum value', icon: TrendingUp }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full flex items-center justify-center mx-auto group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all">
                    <phase.icon className="w-10 h-10 text-purple-400" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {phase.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-300">Real results from organizations that chose Data Panther services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm">
                    <div className="text-purple-300 font-medium">{testimonial.service}</div>
                    <div className="text-green-400 font-semibold">{testimonial.result}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 pt-4 border-t border-purple-500/20">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
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
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20 text-center">
            <Briefcase className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our professional services can accelerate your data transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Schedule Consultation</span>
              </button>
              <button className="bg-white/10 border border-purple-500/30 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-all flex items-center justify-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Contact Expert</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Data Panther</span>
              </div>
              <p className="text-gray-400">
                Professional data services that drive measurable business outcomes and accelerate digital transformation.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Data Strategy Consulting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Platform Implementation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Managed Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training & Certification</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">24/7 Technical Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Knowledge Base</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community Forum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Service Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>services@datapanther.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Live Chat Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Consultation</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Data Panther. All rights reserved. | Professional Services Excellence Since 2020</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;
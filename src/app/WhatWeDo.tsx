import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";

// Utility function
const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

// Floating Particles Component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => {
        const width = typeof window !== "undefined" ? window.innerWidth : 1920;
        const height = typeof window !== "undefined" ? window.innerHeight : 1080;
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{
              x: Math.random() * width,
              y: Math.random() * height,
            }}
            animate={{
              x: Math.random() * width,
              y: Math.random() * height,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
};

// Animated Icon Component
type AnimatedIconProps = {
  children: React.ReactNode;
  delay?: number;
};

const AnimatedIcon = ({ children, delay = 0 }: AnimatedIconProps) => {
  return (
    <motion.div
      className="relative"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: 360,
        transition: { duration: 0.6 }
      }}
    >
      {children}
    </motion.div>
  );
};

// Service Card Component
type Service = {
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  features: string[];
};

type ServiceCardProps = {
  service: Service;
  index: number;
  isActive: number | null;
  onHover: (index: number | null) => void;
};

const ServiceCard = ({ service, index, isActive, onHover }: ServiceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      whileHover={{ y: -20 }}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${service.color}20 0%, transparent 70%)`,
          filter: "blur(20px)",
        }}
      />
      
      {/* Main Card */}
      <motion.div
        className={cn(
          "relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full",
          "transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20",
          isActive === index && "bg-white/10 border-white/20"
        )}
        whileHover={{ 
          boxShadow: `0 25px 50px ${service.color}30`,
        }}
      >
        {/* Service Icon */}
        <div className="flex justify-center mb-8">
          <motion.div
            className={cn(
              "w-20 h-20 rounded-2xl flex items-center justify-center text-4xl",
              "bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm",
              "border border-white/20 group-hover:border-white/30",
              "transition-all duration-500"
            )}
            whileHover={{ 
              scale: 1.2,
              rotateY: 180,
              background: `linear-gradient(135deg, ${service.color}40, ${service.color}20)`
            }}
          >
            <AnimatedIcon delay={index * 0.3}>
              {service.icon}
            </AnimatedIcon>
          </motion.div>
        </div>

        {/* Service Content */}
        <div className="text-center space-y-6">
          <motion.h3
            className="text-2xl font-serif text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
          >
            {service.title}
          </motion.h3>

          <motion.p
            className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
          >
            {service.description}
          </motion.p>

          {/* Features List */}
          <motion.ul
            className="space-y-3 text-left"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
          >
            {service.features.map((feature, idx) => (
              <motion.li
                key={idx}
                className="flex items-center space-x-3 text-gray-400 group-hover:text-gray-200 transition-colors duration-500"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.8 + idx * 0.1 }}
              >
                <motion.div
                  className={cn(
                    "w-2 h-2 rounded-full",
                    `bg-gradient-to-r from-${service.color.replace('#', '')} to-${service.color.replace('#', '')}`
                  )}
                  style={{ backgroundColor: service.color }}
                  whileHover={{ scale: 1.5 }}
                />
                <span className="text-sm">{feature}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.button
            className={cn(
              "w-full py-3 px-6 rounded-xl font-medium transition-all duration-500",
              "bg-gradient-to-r from-white/10 to-white/5 border border-white/20",
              "hover:from-white/20 hover:to-white/10 hover:border-white/30",
              "text-white hover:text-white group-hover:shadow-lg"
            )}
            whileHover={{ 
              scale: 1.05,
              boxShadow: `0 10px 30px ${service.color}40`
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 1 }}
          >
            Learn More
          </motion.button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
          <div className="w-16 h-16 border border-white/20 rounded-full" />
          <div className="absolute top-2 left-2 w-12 h-12 border border-white/10 rounded-full" />
        </div>
      </motion.div>
    </motion.div>
  );
};

// Stats Counter Component
type StatsCounterProps = {
  end: number;
  duration?: number;
  suffix?: string;
};

const StatsCounter = ({ end, duration = 2, suffix = "" }: StatsCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="text-4xl font-serif">
      {count}{suffix}
    </span>
  );
};

// Main Component
export default function FancyWhatWeDo() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const services = [
    {
      title: "Automate Customer Support",
      icon: "🤖",
      color: "#3B82F6",
      description: "Transform your customer service with AI-powered automation that provides instant, accurate responses 24/7.",
      features: [
        "Intelligent chatbots with natural language processing",
        "Automated ticket routing and prioritization",
        "Real-time sentiment analysis and escalation",
        "Multi-language support and translation",
        "Integration with existing CRM systems"
      ]
    },
    {
      title: "Accelerate Decision Making",
      icon: "⚡",
      color: "#10B981",
      description: "Leverage real-time data analytics and AI insights to make faster, more informed business decisions.",
      features: [
        "Real-time data visualization dashboards",
        "Predictive analytics and forecasting",
        "Automated report generation",
        "Risk assessment and mitigation tools",
        "Collaborative decision-making platforms"
      ]
    },
    {
      title: "Integrate Advanced LLMs",
      icon: "🧠",
      color: "#8B5CF6",
      description: "Seamlessly integrate cutting-edge Large Language Models to enhance your applications and workflows.",
      features: [
        "Custom model fine-tuning and training",
        "API integration and deployment",
        "Content generation and optimization",
        "Code generation and documentation",
        "Multilingual processing capabilities"
      ]
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-950 to-white-800 relative overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Header Section */}
      <motion.div
        className="relative z-10 pt-20 pb-16"
        style={{ y: textY }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-serif text-white mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              What We{" "}
              <span className="bg-green-500 bg-clip-text text-transparent">
                Do
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering businesses with cutting-edge AI solutions that transform operations, 
              accelerate growth, and unlock unlimited potential.
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { number: 500, suffix: "+", label: "Projects Completed" },
              { number: 99, suffix: "%", label: "Client Satisfaction" },
              { number: 24, suffix: "/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              >
                <div className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                  <StatsCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="relative z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-serif text-white mb-4">Our Core Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover how our AI-powered solutions can revolutionize your business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                isActive={activeService}
                onHover={setActiveService}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="relative z-10 py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-black/3 backdrop-blur-xl border border-white/10 rounded-3xl p-12"
            whileHover={{
              boxShadow: "0 25px 50px rgba(144, 230, 123, 0.3)",
              y: -10
            }}
          >
            <h3 className="text-3xl font-serif text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Let's discuss how our AI solutions can accelerate your growth and innovation.
            </p>
            <motion.button
              className="bg-slate-500 hover:shadow-2xl   text-white font-serif py-4 px-8 rounded-xl shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(9, 48, 8, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
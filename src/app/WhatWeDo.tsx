

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// Utility class combiner
const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(" ");
};

// Stats Counter
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
      {count}
      {suffix}
    </span>
  );
};

// Service Type
type Service = {
  title: string;
  icon: string;
  color: string;
  description: string;
  features: string[];
};

// ServiceCard (Alternating Half Layout, Fullscreen)
const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className="w-full h-screen flex flex-col md:flex-row items-stretch justify-between m-0"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Image Half */}
      <div
        className={cn(
          "w-full md:w-1/2 h-1/2 md:h-full overflow-hidden",
          isEven ? "order-1" : "order-2"
        )}
      >
        <motion.img
          src={service.icon}
          alt={service.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      {/* Content Half */}
      <div
        className={cn(
          "w-full md:w-1/2 h-1/2 md:h-full px-6 md:px-16",
          isEven ? "order-2" : "order-1",
          "flex flex-col justify-center items-start"
        )}
      >
        <motion.h3
          className="text-4xl font-serif text-white mb-4"
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {service.title}
        </motion.h3>

        <motion.p
          className="text-gray-300 leading-relaxed text-lg mb-4"
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {service.description}
        </motion.p>

        <motion.ul
          className="space-y-2 text-gray-400"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <div
                className="w-2 h-2 mt-2 rounded-full"
                style={{ backgroundColor: service.color }}
              />
              <span>{feature}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

// Main Component
export default function FancyWhatWeDo() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const services: Service[] = [
    {
      title: "Accelerate Decision Making",
      icon: "/aidecisionmaking.png",
      color: "#4CAF50",
      description:
        "Leverage real-time data analytics and AI insights to make faster, more informed business decisions.",
      features: [
        "Use real-time data analytics and AI insights to make business decisions more quickly and intelligently.",
        
       " Dashboards for the visualisation of data in real time.",
        
        "Analytical forecasting and prediction", 
        
       " Automatic generation of reports.", 
        
        "Tools for risk assessment and mitigation.", 
        
       " Platforms for collaborative decision-making." 
        
 
      ]
    },
    {
      title: "Integrate Advanced LLMs",
      icon: "/advimgllm.png",
      color: "#4CAF50",
      description:
        "Advanced Large Language Models can be seamlessly integrated to optimise processes and applications. ",
      features: [
        "Training and fine-tuning custom models.",

"Integrating and deploying APIs.",

"Automated code generation and documentation.",

"Multilingual processing and support.",

"Content creation and optimisation."
      ]
    },
    {
      title: "Automate Customer Support",
      icon: "/ACS.png",
      color: "#4CAF50",
      description:
        "Use automation driven by artificial intelligence to revolutionize customer service by giving immediate, accurate, and constant feedback. ",
      features: [
        "Artificial intelligence-driven natural language processing-intelligent chatbot. ",
        "Automated prioritization and routing of tickets. ",
        "Real-time sentiment analysis and real-time escalation controls.",
        "Support for multiple languages and seamless translation.",
        "Integration with existing CRM systems."
      ]
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#03020A] relative overflow-hidden text-white"
    >
      {/* Animated Background */}
      <motion.div className="absolute inset-0 opacity-30" style={{ y: backgroundY }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#06923E]/20 rounded-full blur-3xl" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-[#06923E]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-[#06923E]/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Header */}
      <motion.div
        className="relative z-10 pt-20 pb-16 text-center mb-24"
        style={{ y: textY }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-5xl md:text-7xl font-serif text-white mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            What We{" "}
            <span className="bg-[#06923E] bg-clip-text text-transparent">
              Do
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empowering businesses with cutting-edge AI solutions that
            transform operations, accelerate growth, and unlock unlimited
            potential.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3  gap-8 mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { number: 50, suffix: "+", label: "Projects Completed" },
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
                <div className="text-transparent bg-gradient-to-r from-green-400 to-green-500 bg-clip-text">
                  <StatsCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Services */}
      <div className="relative z-10">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}

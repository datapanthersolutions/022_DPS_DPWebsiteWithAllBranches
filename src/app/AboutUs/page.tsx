
"use client";

import {
  Shield,
  Users,
  Globe,
  Heart,
  Target,
  Award,
  Zap,
  Lock,
  ChevronDown,
  Play,
  Pause
} from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  image: string;
}

interface ValueCardProps {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
  delay: number;
}

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay, image }) => (
  <div
    className="group backdrop-blur-sm shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-dp-navy/30 hover:border-dp-magenta hover:-translate-y-2 transform bg-zinc-900/80"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="relative overflow-hidden mb-6 h-48 bg-zinc-800 rounded-lg">
      <img
        src={image}
        alt="Service"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-dp-navy/50"></div>

      <div className="absolute bottom-4 left-4">
        <div className="w-16 h-1 bg-dp-magenta rounded-full group-hover:w-24 transition-all duration-500"></div>
      </div>
    </div>
    <h3 className="text-2xl font-Mobile text-white mb-4 group-hover:text-dp-magenta transition-colors duration-300">{title}</h3>
    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{description}</p>

  </div>
);


const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, delay }) => (
  <div
    className="group text-center p-8 bg-zinc-900/80 backdrop-blur-sm rounded-xl hover:bg-zinc-900 transition-all duration-500 border border-dp-navy/30 hover:border-dp-magenta hover:scale-105 transform"
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* Centered, Large Icon */}
    <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
      {React.isValidElement(icon)
        ? React.cloneElement(icon, { className: "w-full h-full" })
        : icon}
    </div>

    <h3 className="text-2xl font-Mobile text-white mb-4 group-hover:text-dp-magenta transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
      {description}
    </p>
  </div>
);


const AboutUs: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      setIsVideoPlaying(!videoRef.current.paused);
    }
  }, []);

  return (
    <div className="min-h-screen bg-dp-navy overflow-x-hidden">


      <section className="relative w-full min-h-[90vh] grid lg:grid-cols-2">

        <div className="flex items-center bg-white px-8 md:px-16 py-20">
          <div className="max-w-xl">

            <p className="uppercase tracking-[0.3em] text-sm text-dp-magenta font-medium mb-4">
              About Data Panther
            </p>

            <h2 className="text-4xl md:text-5xl font-light text-dp-navy leading-tight mb-6">
              Intelligence Designed for
              <span className="block font-light">
                Measurable Impact
              </span>
            </h2>

            <div className="w-16 h-1 bg-dp-magenta rounded-full mb-6"></div>

            <p className="text-gray-600 leading-relaxed mb-8">
              At Data Panther, we integrate artificial intelligence with strategic business
              insight to solve complex challenges with clarity and precision. Our solutions
              are built to enhance decision-making, strengthen operational efficiency, and
              create sustainable competitive advantage.
            </p>

            <button className="bg-dp-blue text-white px-8 py-4 rounded-lg hover:bg-dp-magenta transition-all duration-300">
              Learn More About Us
            </button>

          </div>
        </div>

        <div className="relative min-h-[400px] lg:min-h-full">
          <img
            src="/aboutus.webp"
            alt="AI Business"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </section>

      {/* About DataPanther Section */}
      <section className="relative z-10 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-10">

              <div>
                <p className="uppercase tracking-[0.3em] text-sm text-dp-magenta font-medium mb-4">
                  About Us
                </p>

                <h2 className="text-5xl md:text-6xl font-light text-dp-navy leading-tight mb-6">
                  Who We Are
                </h2>

                <div className="w-20 h-1 bg-dp-magenta rounded-full"></div>
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <span className="font-medium text-dp-navy">Data Panther</span> is an AI-driven
                  business intelligence firm focused on transforming data into
                  strategic direction. We combine advanced artificial intelligence
                  with executive-level insight to help organizations operate with
                  precision and clarity.
                </p>

                <p>
                  Our expertise spans machine learning, analytics infrastructure,
                  and intelligent automation — always aligned with measurable
                  business outcomes and long-term scalability.
                </p>

                <p>
                  We partner with forward-thinking organizations ready to strengthen
                  performance, reduce complexity, and build intelligent systems that
                  evolve with their growth.
                </p>
              </div>
            </div>

            {/* RIGHT STATS */}
            <div className="bg-dp-gradient p-14 text-white">
              <div className="grid grid-cols-1 gap-12">

                <div className="text-center">
                  <div className="text-5xl font-light mb-3">
                    <Counter end={50} duration={2000} suffix="+" />
                  </div>
                  <div className="uppercase tracking-widest text-sm opacity-80">
                    Projects Delivered
                  </div>
                </div>

                <div className="text-center border-t border-white/20 pt-10">
                  <div className="text-5xl font-light mb-3">
                    <Counter end={100} duration={2000} suffix="+" />
                  </div>
                  <div className="uppercase tracking-widest text-sm opacity-80">
                    Enterprise Clients
                  </div>
                </div>

                <div className="text-center border-t border-white/20 pt-10">
                  <div className="text-5xl font-light mb-3">
                    24/7
                  </div>
                  <div className="uppercase tracking-widest text-sm opacity-80">
                    Strategic Support
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Client Services Section */}
      <section className="relative py-4 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-24">
            <p className="uppercase tracking-[0.3em] text-sm text-dp-magenta font-medium mb-4">
              Our Capabilities
            </p>

            <h2 className="text-5xl md:text-6xl font-light text-dp-navy leading-tight mb-6">
              AI-Powered Solutions
              <span className="block font-light">
                Designed for Business Performance
              </span>
            </h2>

            <div className="w-20 h-1 bg-dp-magenta rounded-full mx-auto mb-8"></div>

            <p className="text-lg text-gray-600 leading-relaxed">
              We integrate artificial intelligence with strategic advisory to deliver
              measurable impact across operations, decision-making, and long-term growth.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

            {[
              {
                title: "Data Analytics & Intelligence",
                desc: "Transform complex datasets into executive-ready insights through advanced analytics, interactive dashboards, and predictive modelling."
              },
              {
                title: "AI & Machine Learning Engineering",
                desc: "Develop scalable AI systems and machine learning models that automate workflows, enhance forecasting, and improve operational efficiency."
              },
              {
                title: "Data Governance & Risk Management",
                desc: "Establish enterprise-grade governance frameworks ensuring data quality, regulatory compliance, and secure information management."
              },
              {
                title: "Cloud & AI Infrastructure",
                desc: "Architect secure, scalable cloud environments optimized for analytics workloads and AI-driven applications."
              },
              {
                title: "Strategic AI Advisory",
                desc: "Align AI initiatives with core business objectives through roadmap development, transformation planning, and executive strategy support."
              },
              {
                title: "Capability Development",
                desc: "Enable internal teams with structured training programs, AI adoption frameworks, and long-term knowledge transfer strategies."
              }
            ].map((card, i) => (
              <div
                key={i}
                className="group relative bg-white border border-dp-navy/15 p-10 rounded-xl overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
              >
                {/* gradient top edge */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />

                <h3 className="text-xl font-semibold text-dp-navy mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>



      <section className="relative z-10 py-4 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section Heading */}
          <div className="py-4 mb-8 max-w-4xl">
            <p className="uppercase tracking-[0.3em] text-sm text-dp-magenta font-medium mb-4">
              Governance
            </p>

            <h2 className="text-5xl md:text-6xl font-light text-dp-navy mb-6 leading-tight">
              Governance
            </h2>

            <div className="w-20 h-1 bg-dp-magenta rounded-full mb-2"></div>

            <p className="text-xl text-gray-600 leading-relaxed">
              Excellence in governance through accountability, transparency, and unwavering commitment to ethical practices
            </p>
          </div>

          {/* First Row: Leadership & Image */}
          <div className="grid md:grid-cols-2 gap-20 items-center mb-12">

            {/* Leadership Card */}
            <div>
              <div className="bg-dp-blue p-12 rounded-xl">
                <h3 className="text-3xl font-light text-white mb-8">
                  Leadership Excellence
                </h3>

                <p className="text-white/90 mb-8 text-lg leading-relaxed">
                  Our leadership team combines decades of experience in data science, technology innovation, and strategic business transformation. We operate with clear accountability structures and transparent decision-making processes.
                </p>

                <div className="border-t border-white/20 pt-8">
                  <h4 className="text-xl text-white mb-3 font-medium">
                    Executive Board
                  </h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Our board of directors ensures regulatory compliance, provides strategic oversight and maintains the highest standards of corporate governance across all operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Image (UNCHANGED) */}
            <div className="relative">
              <div className="overflow-hidden border border-gray-200 shadow-sm rounded-xl">
                <img
                  src="/dg.webp"
                  alt="Governance Illustration"
                  className="w-full h-auto object-contain max-h-[600px]"
                />
              </div>
            </div>

          </div>

          {/* Compliance Framework */}
          <div>
            <h3 className="text-3xl font-light text-dp-navy mb-4">
              Compliance Framework
            </h3>

            <div className="space-y-4">

              {/* Card 1 */}
              <div className="flex items-start gap-6 bg-white p-8 rounded-xl border border-gray-200 hover:border-dp-magenta transition-colors duration-300">
                <div className="w-12 h-12 flex items-center justify-center border border-dp-magenta rounded-full shrink-0">
                  <Lock className="w-5 h-5 text-dp-magenta" />
                </div>
                <div>
                  <h4 className="text-xl text-dp-navy mb-3 font-medium">
                    Data Privacy & Security
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    100% compliance with GDPR, CCPA, HIPAA, and SOX regulations. ISO 27001 certified security practices with end-to-end encryption and zero-trust architecture.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-start gap-6 bg-white p-8 rounded-xl border border-gray-200 hover:border-dp-magenta transition-colors duration-300">
                <div className="w-12 h-12 flex items-center justify-center border border-dp-magenta rounded-full shrink-0">
                  <Shield className="w-5 h-5 text-dp-magenta" />
                </div>
                <div>
                  <h4 className="text-xl text-dp-navy mb-3 font-medium">
                    Quality Assurance
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Rigorous testing protocols, continuous monitoring, and automated quality controls ensure consistent delivery of enterprise-grade solutions.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-start gap-6 bg-white p-8 rounded-xl border border-gray-200 hover:border-dp-magenta transition-colors duration-300">
                <div className="w-12 h-12 flex items-center justify-center border border-dp-magenta rounded-full shrink-0">
                  <Award className="w-5 h-5 text-dp-magenta" />
                </div>
                <div>
                  <h4 className="text-xl text-dp-navy mb-3 font-medium">
                    Industry Standards
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Adherence to industry best practices including COBIT, ITIL, and Agile methodologies with continuous improvement and stakeholder feedback integration.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>



      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-24">
            <p className="uppercase tracking-[0.3em] text-sm text-dp-magenta font-medium mb-4">
              Our Values
            </p>

            <h2 className="text-5xl md:text-6xl font-light text-dp-navy mb-6 leading-tight">
              The Principles That Guide Us
            </h2>

            <div className="w-20 h-1 bg-dp-magenta rounded-full mx-auto mb-8"></div>

            <p className="text-lg text-gray-600 leading-relaxed">
              The core principles that drive our operations and define our culture of excellence
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

            {[
              { img: "/icon1.webp", title: "Integrity", desc: "We build trust through transparency, ethical practices, and unwavering commitment to doing what's right for our clients and communities." },
              { img: "/integrity.webp", title: "Innovation", desc: "We embrace cutting-edge technologies and innovative approaches to tackle difficult problems, pushing the boundaries of possibility." },
              { img: "/collaborationnew.webp", title: "Collaboration", desc: "We firmly believe in the power of collaboration, working closely with teams and clients to accomplish remarkable outcomes." },
              { img: "/excellence.webp", title: "Excellence", desc: "We pursue perfection in every detail, delivering solutions that surpass expectations and set new industry standards." }
            ].map((value, i) => (
              <div
                key={i}
                className="group border border-dp-navy/15 rounded-xl p-10 text-center transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex justify-center mb-8">
                  <img
                    src={value.img}
                    alt={`${value.title} Icon`}
                    className="w-28 h-28 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-xl font-semibold text-dp-navy mb-4">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>





      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;

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
    className="group backdrop-blur-sm  shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-green-900/30 hover:border-green-500 hover:-translate-y-2 transform bg-zinc-900/80"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="relative overflow-hidden mb-6 h-48 bg-zinc-800 rounded-lg">
      <img
        src={image}
        alt="Service"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/50"></div>
    
      <div className="absolute bottom-4 left-4">
        <div className="w-16 h-1 bg-[#06923E] rounded-full group-hover:w-24 transition-all duration-500"></div>
      </div>
    </div>
    <h3 className="text-2xl font-Mobile text-white mb-4 group-hover:text-green-400 transition-colors duration-300">{title}</h3>
    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{description}</p>
    
  </div>
);


const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, delay }) => (
  <div
    className="group text-center p-8 bg-zinc-900/80 backdrop-blur-sm rounded-xl hover:bg-zinc-900 transition-all duration-500 border border-green-900/30 hover:border-green-500 hover:scale-105 transform"
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* Centered, Large Icon */}
    <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
      {React.isValidElement(icon)
        ? React.cloneElement(icon, { className: "w-full h-full" }) // for Lucide icons
        : icon}
    </div>

    <h3 className="text-2xl font-Mobile text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
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
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Professional Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-600 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-700 rounded-full filter blur-3xl"></div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/ourStory.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/60 z-1"></div>
        
        <div 
          className="absolute inset-0 bg-black/20 z-2"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-7xl md:text-8xl font-black mb-8 text-white leading-tight">
              DataPanther
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Unleashing the <span className="text-green-400 font-semibold">Power of Data</span> with 
              <span className="text-green-400 font-semibold"> AI-Driven Analytics</span>
            </p>
          </div>
          
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 text-green-500 mx-auto" />
          </div>
        </div>
      </div>

      {/* About DataPanther Section */}
      <section className="relative z-10 py-32 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="relative">
                <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                  Who We Are
                </h2>
                <div className="w-24 h-1 bg-red-500 mb-6"></div>
              </div>
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p className="hover:text-gray-300 transition-colors duration-300">
                  <span className="text-green-400 font-semibold">DataPanther</span> is a pioneering force in the data revolution, transforming how 
                  organizations understand and leverage their most valuable asset: <span className="text-green-400 font-semibold">data</span>. 
                  We don't just analyze data—we unleash its potential.
                </p>
                <p className="hover:text-gray-300 transition-colors duration-300">
                  Our team of visionary data scientists, cutting-edge engineers, and strategic 
                  analysts work in perfect harmony to deliver solutions that don't just meet 
                  expectations—they <span className="text-green-400 font-semibold">exceed imagination</span>.
                </p>
                <p className="hover:text-gray-300 transition-colors duration-300">
                  From Fortune 500 enterprises to innovative startups, we've established ourselves 
                  as the trusted partner for organizations ready to embrace the future of 
                  <span className="text-green-400 font-semibold"> data-driven excellence</span>.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-8 border border-green-900/30">
                <div className="grid grid-cols-1 gap-8">
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-5xl text-green-400 mb-3 font-bold">
                      <Counter end={50} duration={2000} suffix="+" />
                    </div>
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Projects Completed</div>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-5xl text-green-400 mb-3 font-bold">
                      <Counter end={100} duration={2000} suffix="+" />
                    </div>
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Happy Clients</div>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-5xl text-green-400 mb-3 font-bold">24/7</div>
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Services Section */}
      <section className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Client <span className="text-green-500">Services</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Comprehensive data solutions designed to transform your business and accelerate growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              delay={0}
              image="/dabi.png"
              icon={<Target className="w-8 h-8 text-white" />}
              title="Data Analytics & BI"
              description="Transform raw data into powerful insights with our advanced analytics platform featuring real-time dashboards, predictive modelling, and interactive visualizations that drive strategic business decisions. "
            />
            <ServiceCard
              delay={200}
              image="/aimlimg.png"
              icon={<Zap className="w-8 h-8 text-white" />}
              title="AI & Machine Learning"
              description="Leveraging deep learning algorithms, automated decision making systems that learn and adjust to your business needs, and custom machine learning models to fully harness the potential of artificial intelligence."
            />
            <ServiceCard
              delay={400}
              image="/datagov.png"
              icon={<Shield className="w-8 h-8 text-white" />}
              title="Data Governance"
              description="Ensure data integrity, compliance, and security with our comprehensive data governance framework featuring automated quality checks, privacy controls, and audit trails. "
            />
            <ServiceCard
              delay={600}
              image="/cloudTrans.png"
              icon={<Globe className="w-8 h-8 text-white" />}
              title="Cloud Transformation"
              description="Seamlessly migrate to the cloud with our expert-led transformation services, including architecture design, migration planning, and optimization strategies. "
            />
            <ServiceCard
              delay={800}
              image="/stconsulting.png"
              icon={<Users className="w-8 h-8 text-white" />}
              title="Strategic Consulting"
              description="Get personalized guidance from our data strategy experts to develop comprehensive roadmaps that align technology investments with business objectives. "
            />
            <ServiceCard
              delay={1000}
              image="/traning.png"
              icon={<Award className="w-8 h-8 text-white" />}
              title="Training & Enablement"
              description="Empower your team with hands-on training programs, certification pathways, and ongoing support to maximize the value of your data investments. "
            />
          </div>
        </div>
      </section>

      
      
    <section className="relative z-10 py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-left mb-20">
          <h2 className="text-5xl md:text-6xl font-black font-Mobile text-white mb-6">
            <span className="text-green-500 ">Governance</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mb-6"></div>
          <p className="text-xl text-gray-400 max-w-4xl">
Excellence in governance through accountability, transparency, and unwavering commitment to ethical practices           </p>
        </div>

        {/* First Row: Leadership & Image */}
        <div className="flex flex-col md:flex-row gap-12 mb-20">
          {/* Leadership Card */}
          <div className="md:w-2/3">
            <div className="bg-zinc-900/80 backdrop-blur-sm rounded-xl p-8 border border-green-900/30 hover:border-green-500/50 transition-colors duration-500">
              <h3 className="text-3xl font-Mobile text-white mb-6">Leadership Excellence</h3>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                Our leadership team combines decades of experience in data science, technology innovation, and strategic business transformation. We operate with clear accountability structures and transparent decision-making processes. 
              </p>
              <div className="bg-zinc-800/50 p-6 rounded-lg border border-green-900/20">
                <h4 className="font-Mobile text-white mb-2 text-xl">Executive Board</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                 Our board of directors ensures regulatory compliance, provides strategic oversight and maintains the highest standards of corporate governance across all operations. 
                </p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="md:w-2/3 w-full">
            <img
              src="/dg.png"
              alt="Governance Illustration"
              className="w-full h-auto object-contain rounded-xl shadow-2xl max-h-[600px]"
            />
          </div>
        </div>

        {/* Second Row: Compliance Framework */}
        <div className="space-y-6">
          <h3 className="text-3xl font-Mobile text-white mb-8">Compliance Framework</h3>

          {/* Card 1 */}
          <div className="group flex items-start bg-zinc-900/50 backdrop-blur-sm p-6 rounded-lg border border-green-900/30 hover:border-green-500 transition-all duration-500">
            <div className="p-3 rounded-lg mr-6 group-hover:scale-110 transition-transform duration-300">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-Mobile text-white mb-2 text-xl">Data Privacy & Security</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                100% compliance with GDPR, CCPA, HIPAA, and SOX regulations. ISO 27001 certified security practices with end-to-end encryption and zero-trust architecture. 
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group flex items-start bg-zinc-900/50 backdrop-blur-sm p-6 rounded-lg border border-green-900/30 hover:border-green-500 transition-all duration-500">
            <div className="p-3 rounded-lg mr-6 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-Mobile text-white mb-2 text-xl">Quality Assurance</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Rigorous testing protocols, continuous monitoring, and automated quality controls ensure consistent delivery of enterprise-grade solutions. 
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group flex items-start bg-zinc-900/50 backdrop-blur-sm p-6 rounded-lg border border-green-900/30 hover:border-green-500 transition-all duration-500">
            <div className="p-3 rounded-lg mr-6 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-Mobile text-white mb-2 text-xl">Industry Standards</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Adherence to industry best practices including COBIT, ITIL, and Agile methodologies with continuous improvement and stakeholder feedback integration. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
      

      {/* Our Values Section */}
      <section className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Our <span className="text-green-500">Values</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
The core principles that drive our operations and define our culture of excellence             </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard
              delay={0}
              icon={
                <img
                  src="/icon1.png"
                  alt="Integrity Icon"
                  className="w-10 h-10 object-contain"
                />
              }
              title="Integrity"
              description="We build trust through transparency, ethical practices, and unwavering commitment to doing what's right for our clients and communities."
            />
            <ValueCard
              delay={200}
              icon={
                <img
                  src="/integrity.png"
                  alt="Innovation Icon"
                  className="w-10 h-10 object-contain"
                />
              }
              title="Innovation"
              description="We embrace cutting-edge technologies and innovative approaches to tackle difficult problems, pushing the boundaries of possibility. "
            />
            <ValueCard
              delay={400}
              icon={
                <img
                  src="/collaborationnew.png"
                  alt="Collaboration Icon"
                  className=" object-contain"
                />
              }
              title="Collaboration"
              description="We firmly believe in the power of collaboration, working closely with teams and clients to accomplish remarkable outcomes. "
            />
            <ValueCard
              delay={600}
              icon={
                <img
                  src="/excellence.png"
                  alt="Excellence Icon"
                  className="w-10 h-10 object-contain"
                />
              }
              title="Excellence"
              description="We pursue perfection in every detail, delivering solutions that surpass expectations and set new industry standards."
            />
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
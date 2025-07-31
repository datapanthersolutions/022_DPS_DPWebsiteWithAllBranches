"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }
    
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen mt-12 relative">
      <div className="absolute inset-0 z-0">
        {/* Animated Background */}
        <div className="w-full h-full bg-gradient-to-br from-black via-emerald-900 to-black relative overflow-hidden">
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-400/30 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-green-600/15 rounded-full blur-2xl animate-ping"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-lime-500/25 rounded-full blur-xl animate-pulse"></div>
          
          {/* Animated Lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent animate-pulse"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent animate-pulse delay-1000"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-500/20 to-transparent animate-pulse delay-2000"></div>
          </div>
          
          {/* Moving Particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-10 w-2 h-2 bg-green-400 rounded-full opacity-60 animate-bounce delay-300"></div>
            <div className="absolute top-2/3 right-16 w-1 h-1 bg-emerald-300 rounded-full opacity-80 animate-ping delay-700"></div>
            <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-lime-400 rounded-full opacity-50 animate-pulse delay-1500"></div>
            <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-green-500 rounded-full opacity-40 animate-bounce delay-2000"></div>
            <div className="absolute top-20 right-10 w-1 h-1 bg-emerald-400 rounded-full opacity-70 animate-ping delay-500"></div>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
          <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div className="text-white lg:w-1/2 lg:mx-6">
              <h1 className="text-3xl font-semibold capitalize">
                Empowering IT with AI-Driven Innovation
              </h1>
              <p className="max-w-xl mt-6">
                At{" "}
                <span className="font-semibold text-green-400">
                  Data Panther
                </span>
                , we help IT companies unlock business potential with advanced
                analytics, AI solutions, and intelligent automation.
              </p>
              <button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-black bg-gradient-to-r from-green-400 to-emerald-500 rounded-md hover:from-green-500 hover:to-emerald-600 focus:outline-none transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
                Get in Touch
              </button>

              <div className="mt-8">
                <h3 className="text-sm uppercase text-gray-300 tracking-wide">
                  Follow us
                </h3>
                <div className="flex mt-4 gap-6">
                  <a
                    href="https://linkedin.com/company/data-panther"
                    className="text-white hover:text-green-400 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 8.98h4v12H3zM9.5 8.98h3.8v1.64h.05c.53-.99 1.84-2.04 3.78-2.04 4.05 0 4.8 2.67 4.8 6.13V21h-4v-5.2c0-1.24-.03-2.84-1.73-2.84-1.74 0-2 1.36-2 2.75V21h-4z" />
                    </svg>
                  </a>

                  <a
                    href="mailto:info@datapanther.com"
                    className="text-white hover:text-green-400 transition-colors duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M20 4H4a2 2 0 0 0-2 2v12c0 1.103.897 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.511l-8 5.333-8-5.333V6h16ZM4 18V8.489l8 5.333 8-5.333V18H4Z" />
                    </svg>
                  </a>

                  <a
                    href="tel:+1234567890"
                    className="text-white hover:text-green-400 transition-colors duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 bg-black/40 backdrop-blur-md border border-green-500/20 rounded-xl shadow-2xl lg:max-w-xl">
                <h2 className="text-xl font-medium text-white">
                  Contact Form
                </h2>
                <p className="mt-2 text-green-200">
                  Ask us anything. We would love to hear from you.
                </p>

                <div className="mt-6 space-y-6">
                  <div>
                    <label className="block text-sm text-green-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-2 mt-1 bg-black/30 backdrop-blur-sm border border-green-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white placeholder-green-200/50 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-green-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2 mt-1 bg-black/30 backdrop-blur-sm border border-green-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white placeholder-green-200/50 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-green-300">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Write your message..."
                      className="w-full px-4 py-2 mt-1 bg-black/30 backdrop-blur-sm border border-green-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white placeholder-green-200/50 resize-vertical transition-all duration-300"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full px-4 py-2 text-black font-semibold bg-gradient-to-r from-green-400 to-emerald-500 rounded-md hover:from-green-500 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
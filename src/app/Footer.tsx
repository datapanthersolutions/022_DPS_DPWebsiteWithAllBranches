
"use client";
import React from "react";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

export default function ModernLightFooter() {
  return (
    <footer className="bg-dp-gradient text-white">



      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">

        {/* Main Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start border-t border-white/30 py-6 gap-8">

          {/* Left Section */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start">

            {/* Logo */}
            <img
              src="/bglessdp.png"
              alt="Data Panther"
              className="w-48 sm:w-40 flex-shrink-0"
            />

            {/* Navigation Columns */}
            <div className="flex flex-wrap gap-8 sm:gap-12 text-xs tracking-wide">

              <div className="space-y-2">
                <a href="/Services" className="block hover:text-gray-300">SERVICES</a>
                <a href="/Solutions" className="block hover:text-gray-300">SOLUTIONS</a>
                <a href="/Insights" className="block hover:text-gray-300">INSIGHTS</a>
              </div>

              <div className="space-y-2">
                <a href="/case-studies" className="block hover:text-gray-300">CASE STUDIES</a>
                <a href="/ContactUs" className="block hover:text-gray-300">LOCATIONS</a>
                <a href="/careers" className="block hover:text-gray-300">CAREERS</a>
              </div>

              <div className="space-y-2">
                <a href="/AboutUs" className="block hover:text-gray-300">ABOUT DATA PANTHER</a>
                <a href="/OurStory" className="block hover:text-gray-300">OUR STORY</a>
                <a href="/Investor" className="block hover:text-gray-300">INVESTOR RELATIONS</a>
              </div>

            </div>
          </div>

          {/* Right Section */}
          <div className="lg:text-right">

            <p className="text-xs mb-3 text-white">Stay Connected</p>

            <div className="flex gap-4 lg:justify-end">

              <a
                href="https://www.linkedin.com/company/data-panther/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-white/40 rounded-full flex items-center justify-center hover:bg-white hover:text-[#062138] transition"
              >
                <Linkedin size={16} />
              </a>

              <a className="w-8 h-8 border border-white/40 rounded-full flex items-center justify-center hover:bg-white hover:text-[#062138] transition">
                <Mail size={16} />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Legal */}
        <div className="mt-10  flex flex-col lg:flex-row justify-between items-start gap-6 text-[9px] text-white">

          <p className="max-w-4xl leading-snug">
            © {new Date().getFullYear()} Data Panther Solutions, Inc., including its
            subsidiaries and affiliates, is a technology and consulting firm providing
            data, AI, and digital transformation services. The information on this
            website is intended for general informational purposes only and does not
            constitute professional advice. All rights reserved.
          </p>

          <div className="flex gap-5 whitespace-nowrap text-[10px]">
            <a href="/legal" className="hover:text-white">Legal</a>
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/cookies" className="hover:text-white">Cookie Policy</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>

        </div>

      </div>
    </footer>
  );
}



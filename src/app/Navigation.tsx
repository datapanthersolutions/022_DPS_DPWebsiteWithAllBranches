
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";

const ModernNavbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {name:"Home", href:"/"},
    { name: "About Us", href: "/AboutUs" },
    { name: "Our Services", href: "/Services" },
    // { name: "Insights", href: "/Insights" },
    // { name: "Platforms", href: "/platforms" },
    {name: "Solutions", href:"/Solutions"},
    { name: "Contact Us", href: "/Contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/resetdatapanther-removebg-preview.png"
              alt="Data Panther Logo"
              className="h-60 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium ${
                  pathname === item.href
                    ? "text-green-600 font-semiserif"
                    : scrolled
                    ? "text-gray-950 hover:text-green-600 hover:bg-green-50"
                    : "text-gray-950 hover:text-green-300 hover:bg-white/10"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              className={`p-2 rounded-xl transition-all duration-300 ${
                scrolled
                  ? "text-gray-600 hover:text-green-600 hover:bg-green-50"
                  : "text-gray-500 hover:text-green-300 hover:bg-white/10"
              }`}
            >
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              scrolled
                ? "text-gray-600 hover:text-green-600 hover:bg-green-50"
                : "text-white hover:text-green-300 hover:bg-white/10"
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block w-full px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default ModernNavbar;

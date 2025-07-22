"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Search,
} from "lucide-react";

const ModernNavbar = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Services", href: "/Services" },
    {
      name: "About",
      href: "/about",
      dropdown: [
        { name: "Our Story", href: "/about/story" },
        { name: "Team", href: "/about/team" },
        { name: "Careers", href: "/about/careers" },
        { name: "Partners", href: "/about/partners" },
      ],
    },
    {
      name: "Insights",
      href: "/Insights",
      // dropdown: [
      //   { name: "Web Development", href: "/insights/web-dev" },
      //   { name: "Mobile Apps", href: "/insights/mobile" },
      //   { name: "AI Solutions", href: "/insights/ai" },
      //   { name: "Cloud Services", href: "/insights/cloud" },
      //   { name: "Consulting", href: "/insights/consulting" },
      // ],
    },
    { name: "Platforms", href: "/platforms" },
    { name: "Contact", href: "/Contact" },
  ];

  const handleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  return (
    <nav
      // className={`fixed w-full z-50 transition-all duration-300  ${
      //   scrolled
      //     ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50"
      //     : "bg-white/10 backdrop-blur-md"
      // }`}
      className="fixed w-full z-50 bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
           <Link href="/" className="flex items-center space-x-3">
    <img
      src="/resetdatapanther-removebg-preview.png"
      alt="Data Panther Logo"
      className="h-40 w-auto object-contain" 
    />
  </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdown(index)}
                      className={`flex items-center space-x-1 px-4 py-2 rounded-xl transition-all duration-300 font-medium ${
                        scrolled
                          ? "text-gray-950 hover:text-white hover:bg-black"
                          : "text-gray-950 hover:text-white-300 hover:bg-black"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === index && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200/50 backdrop-blur-lg py-2 animate-fade-in">
                        {item.dropdown.map((dropItem, dropIndex) => (
                          <Link
                            key={dropIndex}
                            href={dropItem.href}
                            className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-black transition-colors duration-200"
                            onClick={closeAllDropdowns}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium ${
                      pathname === item.href
                        ? "text-green-600 font-semiserif"
                        : scrolled
                        ? "text-gray-950 hover:text-green-600 hover:bg-green-50"
                        : "text-gray-950 hover:text-green-300 hover:bg-white/10"
                    }`}
                    onClick={closeAllDropdowns}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right Side Icons */}
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
                <div key={index}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdown(index)}
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-300"
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeDropdown === index && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdown.map((dropItem, dropIndex) => (
                            <Link
                              key={dropIndex}
                              href={dropItem.href}
                              className="block px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block w-full px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-300 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

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

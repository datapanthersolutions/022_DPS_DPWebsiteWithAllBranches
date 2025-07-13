import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, Bell, User, Settings, LogOut } from 'lucide-react';

const ModernNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '#home' },
    { 
      name: 'About', 
      href: '#about',
      dropdown: [
        { name: 'Our Story', href: '#story' },
        { name: 'Team', href: '#team' },
        { name: 'Careers', href: '#careers' },
        { name: 'Partners', href: '#partners' }
      ]
    },
    { 
      name: 'Insights', 
      href: '#services',
      dropdown: [
        { name: 'Web Development', href: '#web-dev' },
        { name: 'Mobile Apps', href: '#mobile' },
        { name: 'AI Solutions', href: '#ai' },
        { name: 'Cloud Services', href: '#cloud' },
        { name: 'Consulting', href: '#consulting' }
      ]
    },
    { name: 'Platforms', href: '#portfolio' },
    { name: 'About', href: '#About' },
    { name: 'Contact', href: '#contact'},
    {name: 'Technologies', href: '#Technologies' },


    
  ];

  interface DropdownItem {
    name: string;
    href: string;
  }

  interface NavItem {
    name: string;
    href: string;
    dropdown?: DropdownItem[];
  }

  const handleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsProfileOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 mt-5${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50' 
        : 'bg-white/10 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
         
            <img
              src="/dataPantherLogo-removebg-preview.png"
              alt="Data Panther Logo"
              className="w-40 h-30 rounded-xl  object-cover"
            />
            
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => item.dropdown ? handleDropdown(index) : closeAllDropdowns()}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-xl transition-all duration-300 font-medium ${
                    scrolled 
                      ? 'text-gray-950 hover:text-purple-600 hover:bg-purple-50' 
                      : 'text-gray-950 hover:text-purple-300 hover:bg-white/10'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-300 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === index && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200/50 backdrop-blur-lg py-2 animate-fade-in">
                    {item.dropdown.map((dropItem, dropIndex) => (
                      <a
                        key={dropIndex}
                        href={dropItem.href}
                        className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200"
                        onClick={closeAllDropdowns}
                      >
                        {dropItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Search */}
            <button className={`p-2 rounded-xl transition-all duration-300 ${
              scrolled 
                ? 'text-gray-600 hover:text-purple-600 hover:bg-purple-50' 
                : 'text-gray-500 hover:text-purple-300 hover:bg-white/10'
            }`}>
              <Search size={20} />
            </button>


       
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className={`flex items-center space-x-2 p-2 rounded-xl transition-all duration-300 ${
                  scrolled 
                    ? 'hover:bg-purple-50' 
                    : 'hover:bg-white/10'
                }`}
              >
             
              </button>

      
            </div>

          
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              scrolled 
                ? 'text-gray-600 hover:text-purple-600 hover:bg-purple-50' 
                : 'text-white hover:text-purple-300 hover:bg-white/10'
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
                  <button
                    onClick={() => item.dropdown ? handleDropdown(index) : setIsMenuOpen(false)}
                    className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300"
                  >
                    <span className="font-medium">{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>
                  
                  {item.dropdown && activeDropdown === index && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropItem, dropIndex) => (
                        <a
                          key={dropIndex}
                          href={dropItem.href}
                          className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="border-t border-gray-200 pt-4 space-y-3">
                <button className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300">
                  <Search size={20} />
                  <span>Search</span>
                </button>
             
              </div>
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
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

type DropdownLink = {
  name: string;
  href: string;
  description?: string;
};

type DropdownSection = {
  title: string;
  links: DropdownLink[];
};

type DropdownFeaturedCard = {
  title: string;
  description: string;
  image: string;
  href: string;
  ctaText: string;
};

type NavItem = {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownSections?: DropdownSection[];
  featuredCard?: DropdownFeaturedCard;
};

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/AboutUs",
    hasDropdown: true,
    dropdownSections: [
      {
        title: "Company",
        links: [
          { name: "Our Story", href: "/OurStory", description: "Discover how we started and our journey." },
          { name: "Mission & Vision", href: "/MissionAndVision", description: "Our core values and where we're heading." },
          { name: "Leadership", href: "/Leadership", description: "Meet the team driving Data Panther." },
          { name: "About Us", href: "/AboutUs", description: "Discover how we started and our journey." },

        ]
      },
      {
        title: "Opportunities",
        links: [
          { name: "Careers", href: "/careers", description: "Join our team of elite engineers." },
          { name: "Partners", href: "/Partners", description: "Our global technology partnerships." },
          { name: "Investors", href: "/Investor", description: "Financial tracking and corporate governance." },
        ]
      }
    ],
    featuredCard: {
      title: "Life at Data Panther",
      description: "See what it's like to work at the forefront of AI. Explore our culture and open roles.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
      href: "/careers",
      ctaText: "Explore Careers"
    }
  },
  {
    name: "Services",
    href: "/Services",
    hasDropdown: true,
    dropdownSections: [
      {
        title: "Artificial Intelligence",
        links: [
          { name: "Generative AI", href: "/GenerativeAI", description: "Custom LLMs and enterprise AI agents." },
          { name: "AIOps", href: "/AIOps", description: "Automated IT operations and infrastructure." },
          { name: "Conversational AI", href: "/ConversationalAI", description: "Intelligent customer service solutions." },
        ]
      },
      {
        title: "Data & Systems",
        links: [
          { name: "Data Modernisation", href: "/DataModernisation", description: "Cloud-native data lakes and analytics." },
          { name: "Mainframe Modernisation", href: "/Mainframe", description: "Migrate legacy systems to the cloud." },
        ]
      },
      {
        title: "Cybersecurity & IT",
        links: [
          { name: "Threat Detection", href: "/ThreatDetection", description: "ML-powered security analytics." },
          { name: "Cloud Migration", href: "/CloudMigration", description: "Seamless transition to hybrid cloud." },
          { name: "IT Support", href: "/ITSupport", description: "Managed services and helpdesk." },
        ]
      }
    ],
    featuredCard: {
      title: "Generative AI in Action",
      description: "Learn how we accelerated software delivery for a major financial institution by 3 months.",
      image: "https://www.q3tech.com/wp-content/uploads/2025/12/AI-in-DevOps.jpg",
      href: "/case-studies/accelerating-software-delivery-through-generative-ai",
      ctaText: "Read Case Study"
    }
  },
  {
    name: "Solutions",
    href: "/Solutions",
    hasDropdown: true,
    dropdownSections: [
      {
        title: "By Industry",
        links: [
          { name: "Financial Services", href: "/FinancialServices", description: "Banking, wealth management, and fin-tech." },
          { name: "Healthcare", href: "/Healthcare", description: "NHS trusts, pharma, and patient care." },
          { name: "Retail & E-commerce", href: "/RetailEcommerce", description: "Supply chain and digital storefronts." },
          { name: "Manufacturing", href: "/Manufacturing", description: "Industry 4.0 and predictive maintenance." },
        ]
      },
      {
        title: "By Business Need",
        links: [
          { name: "Supply Chain Optimisation", href: "/SupplyChain", description: "AI-driven logistics and inventory." },
          { name: "Customer Experience", href: "/CustomerExperience", description: "Personalisation and retention." },
          { name: "Risk Management", href: "/RiskManagement", description: "Fraud detection and compliance." },
          { name: "Sustainability", href: "/Sustainability", description: "Green IT and ESG reporting." },
        ]
      }
    ],
    featuredCard: {
      title: "Proven Enterprise Success",
      description: "Browse our full portfolio of case studies detailing how we've driven measurable results for global clients.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      href: "/case-studies",
      ctaText: "View All Case Studies"
    }
  },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Insights", href: "/Insights" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/ContactUs" },
];

const MegaDropdown = ({
  sections,
  featuredCard,
}: {
  sections?: DropdownSection[];
  featuredCard?: DropdownFeaturedCard;
}) => (
  <div className="fixed left-0 right-0 bg-white shadow-xl border-t border-gray-100 z-40 transform origin-top transition-all duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Links section */}
        <div className={`flex-1 grid grid-cols-1 ${featuredCard ? 'md:grid-cols-2' : 'md:grid-cols-3'} lg:grid-cols-3 gap-8`}>
          {sections?.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xs font-heading text-gray-400 tracking-wider uppercase mb-5">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="group flex items-start text-left">
                      <div>
                        <div className="text-gray-900 font-heading group-hover:text-[#29235B] transition-colors">
                          {link.name}
                        </div>
                        {link.description && (
                          <div className="text-sm text-gray-500 mt-1 leading-relaxed">
                            {link.description}
                          </div>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured Card */}
        {featuredCard && (
          <div className="lg:w-1/3 w-full bg-[#f6f8fb]  p-6 border border-gray-100 flex flex-col group">
            <Link href={featuredCard.href} className="flex flex-col h-full focus:outline-none">
              <div className="aspect-video rounded-xl overflow-hidden mb-5">
                <img
                  src={featuredCard.image}
                  alt={featuredCard.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-heading text-gray-900 mb-2 group-hover:text-[#29235B] transition-colors">
                {featuredCard.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 flex-1 leading-relaxed">
                {featuredCard.description}
              </p>
              <div className="inline-flex items-center text-[#29235B] font-semilight text-sm group-hover:gap-2 transition-all">
                {featuredCard.ctaText} <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  </div>
);

const MobileNavItem = ({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    if (item.hasDropdown) {
      setOpen((prev) => !prev);
    } else {
      onClose();
    }
  };

  return (
    <div className="border-b border-gray-100 last:border-0 pb-2 mb-2 last:mb-0 last:pb-0">
      <button
        onClick={handleClick}
        className={`flex w-full items-center justify-between px-2 py-3 rounded-lg font-medium transition-colors
          ${pathname === item.href
            ? "bg-[#29235B] text-white"
            : "text-[#29235B] text-lg hover:bg-[#293D97] hover:text-white text-left font-heading"
          }`}
      >
        {item.hasDropdown ? (
          <span>{item.name}</span>
        ) : (
          <Link href={item.href} className="flex-1 text-left" onClick={onClose}>
            {item.name}
          </Link>
        )}
        {item.hasDropdown && (
          <ChevronDown
            size={18}
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        )}
      </button>

      {item.hasDropdown && open && (
        <div className="px-2 pt-2 animate-fade-in-down">
          {item.dropdownSections?.map((section, idx) => (
            <div key={idx} className="mb-6">
              <h4 className="text-[10px] font-heading text-gray-400 uppercase tracking-widest mb-3">
                {section.title}
              </h4>
              <div className="space-y-4">
                {section.links.map((child) => (
                  <Link
                    key={child.name}
                    href={child.href}
                    onClick={onClose}
                    className="block text-[#29235B] hover:underline"
                  >
                    <div className="font-heading text-sm tracking-wide">{child.name}</div>
                    {child.description && (
                      <div className="text-xs text-gray-500 mt-0.5 leading-snug">
                        {child.description}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {item.featuredCard && (
            <div className="mt-6 pt-6 border-t border-gray-100 pb-4">
              <Link href={item.featuredCard.href} onClick={onClose} className="group block">
                <div className="w-full h-32 rounded-lg overflow-hidden mb-3">
                  <img
                    src={item.featuredCard.image}
                    alt={item.featuredCard.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h5 className="font-heading text-[#29235B] mb-1 leading-snug">
                  {item.featuredCard.title}
                </h5>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                  {item.featuredCard.description}
                </p>
                <div className="text-xs font-heading text-[#29235B] mt-2 inline-flex items-center">
                  {item.featuredCard.ctaText} <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const ModernNavbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    hideTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/DP.png"
                alt="Data Panther"
                className="h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1.5">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.name}
                  onMouseEnter={() =>
                    item.hasDropdown ? handleMouseEnter(item.name) : undefined
                  }
                  onMouseLeave={item.hasDropdown ? handleMouseLeave : undefined}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-lg font-heading font-semibold  tracking-wide transition-all duration-200
                      ${pathname === item.href
                        ? "text-[#29235B] bg-blue-50"
                        : "text-[#29235B] hover:text-[#FFFFFF] hover:bg-[#293D97]"
                      }`}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`}
                      />
                    )}
                  </Link>
                </div>
              ))}


            </div>

            {/* Mobile toggle */}
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden p-2.5 rounded-xl text-[#29235B] bg-blue-50 hover:bg-[#29235B] hover:text-white transition-colors"
            >
              {mobileOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] absolute w-full max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="px-4 py-5 space-y-1">
              {NAV_ITEMS.map((item) => (
                <MobileNavItem
                  key={item.name}
                  item={item}
                  onClose={() => setMobileOpen(false)}
                />
              ))}

            </div>
          </div>
        )}
      </nav>

      {/* Full-width mega dropdown rendered OUTSIDE the nav so nothing clips it */}
      <div className={`transition-opacity duration-200 ${activeDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {activeDropdown && (() => {
          const item = NAV_ITEMS.find((i) => i.name === activeDropdown);
          if (!item?.dropdownSections && !item?.featuredCard) return null;
          return (
            <div
              style={{ top: "80px" }} // matches h-20
              className="fixed left-0 right-0 z-40"
              onMouseEnter={() => handleMouseEnter(activeDropdown)}
              onMouseLeave={handleMouseLeave}
            >
              <MegaDropdown sections={item.dropdownSections} featuredCard={item.featuredCard} />
            </div>
          );
        })()}
      </div>

      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default ModernNavbar;
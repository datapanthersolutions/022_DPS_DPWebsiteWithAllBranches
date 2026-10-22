// Navigation, mirrored from the live site's header menus and footer.
export const mainNav = [
  { label: "Home", href: "/" },
  {
    label: "About", href: "/AboutUs/",
    menu: [
      { label: "Our Story", text: "Discover how we started and our journey.", href: "/OurStory/" },
      { label: "Mission & Vision", text: "Our core values and where we're heading.", href: "/MissionAndVision/" },
      { label: "About Us", text: "Discover how we started and our journey.", href: "/AboutUs/" },
      { label: "Careers", text: "Join our team of elite engineers.", href: "/careers/" },
      { label: "Partners", text: "Our global technology partnerships.", href: "/Partners/" },
      { label: "Investors", text: "Financial tracking and corporate governance.", href: "/Investor/" },
    ],
    feature: { title: "Life at Data Panther", text: "See what it's like to work at the forefront of AI. Explore our culture and open roles.", cta: "Explore Careers", href: "/careers/", image: "/img/lifeatdp.webp" },
  },
  {
    label: "Services", href: "/Services/",
    menu: [
      { label: "Generative AI", text: "Custom LLMs and enterprise AI agents.", href: "/GenerativeAI/" },
      { label: "AIOps", text: "Automated IT operations and infrastructure.", href: "/AIOps/" },
      { label: "Conversational AI", text: "Intelligent customer service solutions.", href: "/ConversationalAI/" },
      { label: "Data Modernisation", text: "Cloud-native data lakes and analytics.", href: "/DataModernisation/" },
      { label: "Mainframe Modernisation", text: "Migrate legacy systems to the cloud.", href: "/Mainframe/" },
      { label: "Threat Detection", text: "ML-powered security analytics.", href: "/ThreatDetection/" },
      { label: "Cloud Migration", text: "Seamless transition to hybrid cloud.", href: "/CloudMigration/" },
      { label: "IT Support", text: "Managed services and helpdesk.", href: "/ITSupport/" },
    ],
    feature: { title: "Generative AI in Action", text: "Learn how we accelerated software delivery for a major financial institution by 3 months.", cta: "Read Case Study", href: "/case-studies/accelerating-software-delivery-through-generative-ai/", image: "/img/softwaredeliver.webp" },
  },
  {
    label: "Solutions", href: "/Solutions/",
    menu: [
      { label: "Financial Services", text: "Banking, wealth management, and fin-tech.", href: "/FinancialServices/" },
      { label: "Healthcare", text: "NHS trusts, pharma, and patient care.", href: "/Healthcare/" },
      { label: "Retail & E-commerce", text: "Supply chain and digital storefronts.", href: "/RetailEcommerce/" },
      { label: "Manufacturing", text: "Industry 4.0 and predictive maintenance.", href: "/Manufacturing/" },
      { label: "Supply Chain Optimisation", text: "AI-driven logistics and inventory.", href: "/SupplyChain/" },
      { label: "Customer Experience", text: "Personalisation and retention.", href: "/CustomerExperience/" },
      { label: "Risk Management", text: "Fraud detection and compliance.", href: "/RiskManagement/" },
      { label: "Sustainability", text: "Green IT and ESG reporting.", href: "/Sustainability/" },
    ],
    feature: { title: "Proven Enterprise Success", text: "Browse our full portfolio of case studies detailing how we've driven measurable results for global clients.", cta: "View All Case Studies", href: "/case-studies/", image: "/img/datamodern.webp" },
  },
  { label: "Case Studies", href: "/case-studies/" },
  { label: "Insights", href: "/Insights/" },
  { label: "Blog", href: "/blog/" },
] as const;

export const contactHref = "/ContactUs/";

export const footerCols = [
  [{ label: "SERVICES", href: "/Services/" }, { label: "SOLUTIONS", href: "/Solutions/" }, { label: "INSIGHTS", href: "/Insights/" }],
  [{ label: "CASE STUDIES", href: "/case-studies/" }, { label: "LOCATIONS", href: "/ContactUs/" }, { label: "CAREERS", href: "/careers/" }],
  [{ label: "ABOUT DATA PANTHER", href: "/AboutUs/" }, { label: "OUR STORY", href: "/OurStory/" }, { label: "INVESTOR RELATIONS", href: "/Investor/" }],
];

export const legalLinks = [
  { label: "Legal", href: "/legal/" }, { label: "Privacy", href: "/privacy/" },
  { label: "Cookie Policy", href: "/cookies/" }, { label: "Sitemap", href: "/sitemap/" },
];

export const whatsapp = "https://wa.me/917075928464?text=Hi%20Data%20Panther%2C%20I'd%20like%20to%20know%20more%20about%20your%20services.";
export const linkedin = "https://www.linkedin.com/company/data-panther/";
export const copyright = "© 2026 Data Panther Solutions, Inc., including its subsidiaries and affiliates, is a technology and consulting firm providing data, AI, and digital transformation services. The information on this website is intended for general informational purposes only and does not constitute professional advice. All rights reserved.";

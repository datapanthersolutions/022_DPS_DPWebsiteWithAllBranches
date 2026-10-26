import type { Page } from "../types";

const page: Page = {
  slug: "Services",
  title: "Services | Data Panther",
  description:
    "We design and deploy enterprise-grade artificial intelligence solutions that enhance operational efficiency, enable predictive decision-making, and accelerate sustainable business growth.",
  sections: [
    {
      type: "hero",
      eyebrow: "AI SERVICES",
      title: "Engineering Intelligent Enterprise Systems",
      text: [
        "We design and deploy enterprise-grade artificial intelligence solutions that enhance operational efficiency, enable predictive decision-making, and accelerate sustainable business growth.",
        "From machine learning engineering to AI strategy advisory, our approach integrates technology, governance, and business alignment to deliver measurable and scalable outcomes.",
      ],
      cta: { label: "Explore AI Capabilities", href: "#capabilities" },
      image: "/img/aiservices.webp",
    },
    {
      type: "cards",
      eyebrow: "WHY CHOOSE US",
      title: "Strategic Intelligence. Measurable Business Impact.",
      text: [
        "At Data Panther, we don’t just build AI systems — we engineer intelligent ecosystems that align with your business strategy, operational goals, and long-term growth vision.",
        "Our approach combines deep technical expertise with strategic consulting, ensuring every solution we deliver generates measurable ROI, enhances decision-making, and reduces operational complexity.",
      ],
      variant: "icon",
      columns: 3,
      cta: { label: "Speak With Our Experts", href: "/ContactUs/" },
      items: [
        {
          title: "Business-First AI Strategy",
          text: "We align artificial intelligence initiatives with executive priorities, ensuring every model, dashboard, and automation serves a defined business outcome.",
          icon: "target",
        },
        {
          title: "Scalable & Secure Infrastructure",
          text: "From cloud-native architectures to governance frameworks, we design enterprise-grade systems built for scale, compliance, and resilience.",
          icon: "shield",
        },
        {
          title: "Long-Term Partnership",
          text: "We operate as strategic partners — supporting implementation, optimization, and continuous innovation to keep your organization ahead of the curve.",
          icon: "handshake",
        },
      ],
    },
    {
      type: "split",
      eyebrow: "WHAT YOU RECEIVE",
      title: "Tangible Outcomes. Enterprise-Grade Delivery.",
      text: [
        "We go beyond implementation. Every engagement results in production-ready, strategically aligned systems built for scalability, resilience, and measurable business performance. Our deliverables are engineered to create long-term value — not short-term fixes.",
      ],
      bullets: [
        "Production-ready AI & analytics solutions",
        "Secure, scalable cloud and backend architecture",
        "Comprehensive documentation and executive reporting",
        "Performance monitoring and integrated analytics",
        "Ongoing optimization and post-deployment support",
      ],
      image:
        "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      type: "cards",
      eyebrow: "INDUSTRIES",
      title: "Industries We Transform",
      image: "/img/IndustriesTransform.webp",
      text: [
        "We design and deploy intelligent systems across high-impact industries — modernizing operations, enhancing decision intelligence, and unlocking scalable digital transformation.",
      ],
      variant: "icon",
      columns: 3,
      dark: true,
      items: [
        {
          title: "Healthcare",
          text: "AI-driven diagnostics, predictive analytics, and operational optimization to improve patient outcomes and system efficiency.",
          icon: "hospital",
        },
        {
          title: "Financial Services",
          text: "Fraud detection, risk modelling, and intelligent automation to enhance compliance, security, and decision speed.",
          icon: "bank",
        },
        {
          title: "Logistics & Supply Chain",
          text: "Demand forecasting, route optimization, and real-time analytics for resilient and cost-efficient operations.",
          icon: "truck",
        },
        {
          title: "Retail & E-Commerce",
          text: "Personalized recommendation engines, customer intelligence, and performance analytics to drive conversion growth.",
          icon: "cart",
        },
        {
          title: "Manufacturing",
          text: "Predictive maintenance, quality control automation, and production intelligence powered by advanced analytics.",
          icon: "factory",
        },
        {
          title: "Technology & SaaS",
          text: "Scalable AI integration, product intelligence, and data-driven feature optimization.",
          icon: "cpu",
        },
      ],
    },
    {
      type: "split",
      eyebrow: "OUR CAPABILITIES",
      title: "AI & Data Solutions Built for Enterprise Scale",
      text: [
        "We design, engineer, and deploy intelligent systems that enhance decision-making, optimize operations, and unlock measurable business growth.",
      ],
      subTitle: "Artificial Intelligence Engineering",
      subText: [
        "We build production-grade machine learning systems and AI-driven applications that automate complex workflows, enhance predictive intelligence, and generate scalable business value.",
      ],
      bullets: [
        "Custom machine learning model development",
        "Generative AI & LLM integration",
        "Intelligent automation systems",
        "MLOps & deployment pipelines",
      ],
      image: "/img/aiengineering.webp",
    },
    {
      type: "split",
      title: "Advanced Analytics & Business Intelligence",
      text: [
        "Transform raw data into strategic insight with scalable analytics architectures, executive dashboards, and predictive decision systems.",
      ],
      bullets: [
        "Executive KPI dashboards",
        "Predictive & prescriptive analytics",
        "Real-time data pipelines",
        "Enterprise reporting systems",
      ],
      image: "/img/advanceBI.webp",
      reverse: true,
    },
    {
      type: "split",
      title: "Cloud & Data Infrastructure",
      text: [
        "Architect secure, scalable cloud environments optimized for AI workloads, analytics processing, and enterprise performance resilience.",
      ],
      bullets: [
        "Cloud-native architecture design",
        "Data governance frameworks",
        "Security & compliance implementation",
        "Performance optimization & scaling",
      ],
      image: "/img/cloud-service.webp",
    },
    {
      type: "cta",
      title: "Ready to Strengthen Your Data Strategy?",
      text: [
        "Let’s discuss how we can help you improve decision-making, streamline operations, and build scalable AI solutions for your organization.",
      ],
      primary: { label: "Schedule a Consultation", href: "/ContactUs/" },
    },
  ],
};

export default page;

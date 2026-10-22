import type { Page } from "../types";

const page: Page = {
  slug: "AboutUs",
  title: "About Us | Data Panther",
  description:
    "At Data Panther, we integrate artificial intelligence with strategic business insight to solve complex challenges with clarity and precision. Our solutions are built to enhance decision-making, strengthen operational efficiency, and create sustainable competitive advantage.",
  sections: [
    {
      type: "hero",
      eyebrow: "ABOUT DATA PANTHER",
      title: "Intelligence Designed for Measurable Impact",
      text: [
        "At Data Panther, we integrate artificial intelligence with strategic business insight to solve complex challenges with clarity and precision. Our solutions are built to enhance decision-making, strengthen operational efficiency, and create sustainable competitive advantage.",
      ],
      cta: { label: "Learn More About Us", href: "#who-we-are" },
      image: "/img/aboutus.webp",
    },
    {
      type: "split",
      eyebrow: "ABOUT US",
      title: "Who We Are",
      text: [
        "Data Panther is an AI-driven business intelligence firm focused on transforming data into strategic direction. We combine advanced artificial intelligence with executive-level insight to help organizations operate with precision and clarity.",
        "Our expertise spans machine learning, analytics infrastructure, and intelligent automation — always aligned with measurable business outcomes and long-term scalability.",
        "We partner with forward-thinking organizations ready to strengthen performance, reduce complexity, and build intelligent systems that evolve with their growth.",
      ],
    },
    {
      type: "stats",
      items: [
        { value: "50+", title: "PROJECTS DELIVERED" },
        { value: "100+", title: "ENTERPRISE CLIENTS" },
        { value: "24/7", title: "STRATEGIC SUPPORT" },
      ],
    },
    {
      type: "cards",
      eyebrow: "OUR CAPABILITIES",
      title: "AI-Powered Solutions Designed for Business Performance",
      text: [
        "We integrate artificial intelligence with strategic advisory to deliver measurable impact across operations, decision-making, and long-term growth.",
      ],
      variant: "icon",
      columns: 3,
      items: [
        {
          title: "Data Analytics & Intelligence",
          text: "Transform complex datasets into executive-ready insights through advanced analytics, interactive dashboards, and predictive modelling.",
          icon: "chart",
        },
        {
          title: "AI & Machine Learning Engineering",
          text: "Develop scalable AI systems and machine learning models that automate workflows, enhance forecasting, and improve operational efficiency.",
          icon: "brain",
        },
        {
          title: "Data Governance & Risk Management",
          text: "Establish enterprise-grade governance frameworks ensuring data quality, regulatory compliance, and secure information management.",
          icon: "shield",
        },
        {
          title: "Cloud & AI Infrastructure",
          text: "Architect secure, scalable cloud environments optimized for analytics workloads and AI-driven applications.",
          icon: "cloud",
        },
        {
          title: "Strategic AI Advisory",
          text: "Align AI initiatives with core business objectives through roadmap development, transformation planning, and executive strategy support.",
          icon: "compass",
        },
        {
          title: "Capability Development",
          text: "Enable internal teams with structured training programs, AI adoption frameworks, and long-term knowledge transfer strategies.",
          icon: "book",
        },
      ],
    },
    {
      type: "split",
      eyebrow: "GOVERNANCE",
      title: "Governance",
      text: [
        "Excellence in governance through accountability, transparency, and unwavering commitment to ethical practices",
      ],
      subTitle: "Leadership Excellence",
      subText: [
        "Our leadership team combines decades of experience in data science, technology innovation, and strategic business transformation. We operate with clear accountability structures and transparent decision-making processes.",
      ],
      image: "/img/dg.webp",
      reverse: true,
    },
    {
      type: "cards",
      title: "Compliance Framework",
      variant: "icon",
      columns: 4,
      items: [
        {
          title: "Executive Board",
          text: "Our board of directors ensures regulatory compliance, provides strategic oversight and maintains the highest standards of corporate governance across all operations.",
          icon: "users",
        },
        {
          title: "Data Privacy & Security",
          text: "100% compliance with GDPR, CCPA, HIPAA, and SOX regulations. ISO 27001 certified security practices with end-to-end encryption and zero-trust architecture.",
          icon: "lock",
        },
        {
          title: "Quality Assurance",
          text: "Rigorous testing protocols, continuous monitoring, and automated quality controls ensure consistent delivery of enterprise-grade solutions.",
          icon: "check",
        },
        {
          title: "Industry Standards",
          text: "Adherence to industry best practices including COBIT, ITIL, and Agile methodologies with continuous improvement and stakeholder feedback integration.",
          icon: "award",
        },
      ],
    },
    {
      type: "cards",
      eyebrow: "OUR VALUES",
      title: "The Principles That Guide Us",
      text: ["The core principles that drive our operations and define our culture of excellence"],
      variant: "image",
      columns: 4,
      dark: true,
      items: [
        {
          title: "Integrity",
          text: "We build trust through transparency, ethical practices, and unwavering commitment to doing what's right for our clients and communities.",
          image: "/img/icon1.webp",
        },
        {
          title: "Innovation",
          text: "We embrace cutting-edge technologies and innovative approaches to tackle difficult problems, pushing the boundaries of possibility.",
          image: "/img/integrity.webp",
        },
        {
          title: "Collaboration",
          text: "We firmly believe in the power of collaboration, working closely with teams and clients to accomplish remarkable outcomes.",
          image: "/img/collaborationnew.webp",
        },
        {
          title: "Excellence",
          text: "We pursue perfection in every detail, delivering solutions that surpass expectations and set new industry standards.",
          image: "/img/excellence.webp",
        },
      ],
    },
  ],
};

export default page;

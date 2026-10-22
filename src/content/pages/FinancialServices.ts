import type { Page } from "../types";

const page: Page = {
  slug: "FinancialServices",
  title: "Financial Services | Data Panther",
  description:
    "Driving the future of banking and finance through intelligent automation, secure data ecosystems, and cloud-native modernisation.",
  sections: [
    {
      type: "hero",
      eyebrow: "INDUSTRIES",
      title: "Financial Services",
      text: [
        "Driving the future of banking and finance through intelligent automation, secure data ecosystems, and cloud-native modernisation.",
      ],
      image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?w=800&q=80",
    },
    {
      type: "quote",
      eyebrow: "OVERVIEW",
      title: "Accelerating Digital Finance",
      quote:
        "The financial sector is undergoing a massive shift. Institutions that embrace AI and cloud modernisation today will lead the market tomorrow. Data Panther is the catalyst for that change.",
    },
    {
      type: "cards",
      variant: "icon",
      eyebrow: "WHAT WE DO",
      title: "Our Specialisations",
      columns: 4,
      items: [
        {
          title: "Digital Banking Transformation",
          text: "Modernising legacy banking infrastructure with cloud-native solutions and API-first architectures.",
          icon: "bank",
        },
        {
          title: "AI-Powered Fraud Detection",
          text: "Real-time monitoring and predictive analytics to identify and prevent sophisticated financial crimes.",
          icon: "shield",
        },
        {
          title: "Regulatory Compliance (RegTech)",
          text: "Automating compliance workflows and reporting to meet evolving global financial regulations.",
          icon: "scale",
        },
        {
          title: "Wealth Management Analytics",
          text: "Data-driven insights to provide personalised investment strategies and enhance client portfolios.",
          icon: "trend",
        },
      ],
    },
    {
      type: "cta",
      title: "Ready to Transform Your Financial Ecosystem?",
      text: ["Let's discuss how our AI-driven solutions can drive efficiency and security for your institution."],
      primary: { label: "Contact Our Experts", href: "/ContactUs/" },
    },
  ],
};

export default page;

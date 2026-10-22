import type { Page } from "../types";

const page: Page = {
  slug: "RiskManagement",
  title: "Risk Management | Data Panther",
  description:
    "Building resilient organisations through predictive intelligence, millisecond fraud detection, and automated compliance ecosystems.",
  sections: [
    {
      type: "hero",
      eyebrow: "BUSINESS SOLUTIONS",
      title: "Risk Management",
      text: [
        "Building resilient organisations through predictive intelligence, millisecond fraud detection, and automated compliance ecosystems.",
      ],
      image: "/img/riskmanagementai.webp",
    },
    {
      type: "quote",
      eyebrow: "OVERVIEW",
      title: "Stability in a Changing World",
      quote:
        "Risk is inherent, but vulnerability is optional. We build the intelligent shields that allow global enterprises to navigate uncertainty with absolute confidence.",
    },
    {
      type: "cards",
      variant: "icon",
      eyebrow: "WHAT WE DO",
      title: "Predictive Protection",
      columns: 4,
      items: [
        {
          title: "Predictive Risk Modeling",
          text: "Advanced ML models to anticipate market shifts, credit risks, and operational vulnerabilities before they escalate.",
          icon: "trend",
        },
        {
          title: "Real-time Fraud Prevention",
          text: "Continuous monitoring of transaction and user behavior to detect and block malicious activity with millisecond precision.",
          icon: "shield",
        },
        {
          title: "Automated Regulatory Compliance",
          text: "Streamlining legal and industrial reporting through AI-driven automated document processing and auditing.",
          icon: "file",
        },
        {
          title: "Infrastructure Threat Analysis",
          text: "Protecting critical digital assets through AIOps-driven vulnerability detection and automated response.",
          icon: "alert",
        },
      ],
    },
    {
      type: "cta",
      title: "Secure Your Enterprise Today",
      text: ["Let's discuss how our predictive risk modeling and fraud prevention can protect your business operations."],
      primary: { label: "Consult Our Risk Strategists", href: "/ContactUs/" },
    },
  ],
};

export default page;

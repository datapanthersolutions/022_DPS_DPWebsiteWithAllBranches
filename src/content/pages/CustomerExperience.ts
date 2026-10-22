import type { Page } from "../types";

const page: Page = {
  slug: "CustomerExperience",
  title: "Customer Experience (CX) | Data Panther",
  description:
    "Redefining the digital journey through intelligent personalisation, automated support, and deep customer sentiment insights.",
  sections: [
    {
      type: "hero",
      eyebrow: "BUSINESS SOLUTIONS",
      title: "Customer Experience (CX)",
      text: [
        "Redefining the digital journey through intelligent personalisation, automated support, and deep customer sentiment insights.",
      ],
    },
    {
      type: "quote",
      eyebrow: "OVERVIEW",
      title: "Engaging the Digital Customer",
      quote:
        "CX is no longer a department; it's a data-driven strategy. We build the interfaces and intelligence that allow brands to build lasting, human-centric relationships at scale.",
    },
    {
      type: "cards",
      variant: "icon",
      eyebrow: "WHAT WE DO",
      title: "Intelligent Engagement",
      columns: 4,
      items: [
        {
          title: "Conversational AI Assistants",
          text: "24/7 intelligent support agents that understand context and resolve customer queries with human-like accuracy.",
          icon: "bot",
        },
        {
          title: "Hyper-Personalised Campaigns",
          text: "Using predictive analytics to deliver the right message to the right customer at the right time.",
          icon: "target",
        },
        {
          title: "Customer Sentiment Analysis",
          text: "Monitoring social, support, and review channels in real-time to sense and respond to market needs.",
          icon: "message",
        },
        {
          title: "AI-Driven Loyalty Programs",
          text: "Building deeper engagement through data-driven reward systems that increase customer lifetime value.",
          icon: "heart",
        },
      ],
    },
    {
      type: "cta",
      title: "Elevate Your Customer Journey Today",
      text: ["Discover how our AI-driven personalisation can transform your customer engagement strategy."],
      primary: { label: "Consult Our CX Experts", href: "/ContactUs/" },
    },
  ],
};

export default page;

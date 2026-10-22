import type { Page } from "../types";

const page: Page = {
  slug: "Sustainability",
  title: "Sustainable Technology | Data Panther",
  description:
    "Driving the future of green enterprise through ESG data automation, energy-efficient infrastructure, and intelligent supply chain waste reduction.",
  sections: [
    {
      type: "hero",
      eyebrow: "BUSINESS SOLUTIONS",
      title: "Sustainable Technology",
      text: [
        "Driving the future of green enterprise through ESG data automation, energy-efficient infrastructure, and intelligent supply chain waste reduction.",
      ],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    },
    {
      type: "quote",
      eyebrow: "OVERVIEW",
      title: "Intelligence for a Greener Future",
      quote:
        "Technology is the key to sustainability. We build the intelligence that allows organisations to thrive while minimizing their environmental impact through precision analytics.",
    },
    {
      type: "cards",
      variant: "icon",
      eyebrow: "WHAT WE DO",
      title: "ESG Mastery through AI",
      columns: 4,
      items: [
        {
          title: "Green IT Infrastructure",
          text: "Optimising cloud and on-premise infrastructure for minimum energy consumption and carbon footprint.",
          icon: "server",
        },
        {
          title: "ESG Data Automation",
          text: "Automating the collection and reporting of Environmental, Social, and Governance metrics through AI-driven pipelines.",
          icon: "leaf",
        },
        {
          title: "Sustainable Supply Chain AI",
          text: "Predictive modeling to ensure ethical sourcing and reduced logistical waste in your global supply network.",
          icon: "truck",
        },
        {
          title: "Predictive Energy Management",
          text: "Using AI to forecast and optimize energy usage across corporate and industrial facilities.",
          icon: "zap",
        },
      ],
    },
    {
      type: "cta",
      title: "Ready to Build a Greener Enterprise?",
      text: ["Let's discuss how our sustainability analytics can drive both environmental and operational efficiency."],
      primary: { label: "Consult Our Sustainability Experts", href: "/ContactUs/" },
    },
  ],
};

export default page;

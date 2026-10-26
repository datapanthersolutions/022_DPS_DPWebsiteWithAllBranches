import type { Page } from "../types";

const page: Page = {
  slug: "MissionAndVision",
  title: "Mission & Vision | Data Panther",
  description:
    "At Data Panther, we believe intelligence should be embedded into every business decision. Our mission and vision guide us toward building AI-powered solutions that redefine how organizations operate and innovate.",
  sections: [
    {
      type: "hero",
      eyebrow: "MISSION & VISION",
      title: "Shaping the Future\nWith Intelligent Systems",
      text: [
        "At Data Panther, we believe intelligence should be embedded into every business decision. Our mission and vision guide us toward building AI-powered solutions that redefine how organizations operate and innovate.",
      ],
    },
    {
      type: "checklist",
      title: "Our Mission",
      text: [
        "Our mission is to empower organizations with intelligent technologies that transform raw data into actionable insights.",
        "Through advanced artificial intelligence, machine learning, and predictive analytics, we help businesses automate processes, anticipate trends, and make smarter decisions that drive sustainable growth.",
      ],
      columns: [
        {
          title: "What We Aim To Do",
          tone: "pos",
          items: [
            "Transform complex data into intelligent insights",
            "Enable automation through AI-driven systems",
            "Help organizations make predictive decisions",
            "Build scalable AI platforms for the future",
          ],
        },
      ],
    },
    {
      type: "quote",
      title: "Our Long-Term Vision",
      quote:
        "We envision a world where intelligent systems seamlessly collaborate with humans to unlock new possibilities, accelerate innovation, and solve global challenges.",
    },
    {
      type: "split",
      title: "Our Vision",
      text: [
        "Our vision is to become a global leader in artificial intelligence solutions, enabling businesses to unlock the full potential of their data.",
        "By combining innovation, research, and cutting-edge technology, Data Panther aims to shape a future where AI drives smarter industries and more efficient systems.",
      ],
      reverse: true,
    },
    {
      type: "cards",
      eyebrow: "WHAT WE STAND ON",
      title: "Our Strategic Pillars",
      variant: "icon",
      columns: 3,
      dark: true,
      items: [
        {
          title: "Innovation",
          text: "Continuously advancing AI research and developing next-generation intelligent technologies.",
          icon: "sparkles",
        },
        {
          title: "Impact",
          text: "Delivering measurable value by transforming business data into strategic intelligence.",
          icon: "trend",
        },
        {
          title: "Scalability",
          text: "Designing AI systems that grow with organizations and adapt to evolving challenges.",
          icon: "layers",
        },
      ],
    },
    {
      type: "cta",
      title: "Driving the Next Era of Intelligence",
      text: [
        "Data Panther is committed to pushing the boundaries of artificial intelligence and enabling organizations to unlock the full power of their data. Our mission and vision guide us toward building a smarter and more intelligent future.",
      ],
      primary: { label: "Contact Us", href: "/ContactUs/" },
    },
  ],
};

export default page;

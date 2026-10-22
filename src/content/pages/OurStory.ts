import type { Page } from "../types";

const page: Page = {
  slug: "OurStory",
  title: "Our Story | Data Panther",
  description:
    "Data Panther was founded on a simple belief — data should not remain dormant. It should think, learn, and drive decisions. We set out to build intelligent systems that transform raw data into powerful insights that shape the future of businesses.",
  sections: [
    {
      type: "hero",
      eyebrow: "OUR STORY",
      title: "The Evolution of Data Panther",
      text: [
        "Data Panther was founded on a simple belief — data should not remain dormant. It should think, learn, and drive decisions. We set out to build intelligent systems that transform raw data into powerful insights that shape the future of businesses.",
      ],
    },
    {
      type: "split",
      title: "Where Intelligence Meets Innovation",
      text: [
        "In a world overflowing with data, organizations often struggle to convert information into meaningful action. Data Panther was born to bridge that gap.",
        "Our mission is to design AI-powered systems that empower businesses to anticipate change, automate decisions, and unlock opportunities hidden within their data. We don't just build technology — we build intelligence.",
      ],
      subTitle: "Our Purpose",
      subText: [
        "To help organizations harness artificial intelligence to solve complex problems and accelerate innovation.",
        "From predictive analytics to intelligent automation, we build solutions that transform the way businesses operate and grow.",
      ],
    },
    {
      type: "steps",
      eyebrow: "MILESTONES",
      title: "Our Journey",
      items: [
        {
          title: "Foundation",
          text: "Data Panther was established with a vision to bring intelligent decision-making to modern enterprises.",
        },
        {
          title: "Innovation",
          text: "We began building advanced AI models that transform data into predictive insights.",
        },
        {
          title: "Expansion",
          text: "Our services expanded into enterprise AI solutions, automation, and scalable machine learning systems.",
        },
        {
          title: "Future",
          text: "Today we continue to push boundaries, creating intelligent platforms that power the next generation of businesses.",
        },
      ],
    },
    {
      type: "cards",
      eyebrow: "WHAT DRIVES US",
      title: "Our Core Values",
      variant: "icon",
      columns: 3,
      dark: true,
      items: [
        {
          title: "Innovation",
          text: "We continuously explore new AI methodologies and technologies to build intelligent solutions.",
          icon: "lightbulb",
        },
        {
          title: "Precision",
          text: "Our data-driven approach ensures every insight and model delivers measurable impact.",
          icon: "target",
        },
        {
          title: "Trust",
          text: "Transparency, security, and reliability are embedded in every solution we build.",
          icon: "shield",
        },
      ],
    },
    {
      type: "cta",
      title: "The Future is Intelligent",
      text: [
        "At Data Panther, we believe the next era of innovation will be powered by intelligent systems that learn, adapt, and evolve. Our journey has just begun — and we are building the future one intelligent solution at a time.",
      ],
      primary: { label: "Contact Us", href: "/ContactUs/" },
    },
  ],
};

export default page;

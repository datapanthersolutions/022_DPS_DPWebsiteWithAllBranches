import type { Page } from "../types";

const page: Page = {
  slug: "Manufacturing",
  title: "Advanced Manufacturing | Data Panther",
  description:
    "Empowering Industry 4.0 through predictive maintenance, AI-driven quality control, and intelligent operational automation.",
  sections: [
    {
      type: "hero",
      eyebrow: "INDUSTRIES",
      title: "Advanced Manufacturing",
      text: [
        "Empowering Industry 4.0 through predictive maintenance, AI-driven quality control, and intelligent operational automation.",
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    },
    {
      type: "quote",
      eyebrow: "OVERVIEW",
      title: "The Future of Industry 4.0",
      quote:
        "Efficiency isn't just about faster machines; it's about smarter ones. We build the decision-making brains that power the next generation of global manufacturing.",
    },
    {
      type: "cards",
      variant: "icon",
      eyebrow: "WHAT WE DO",
      title: "Operational Intelligence",
      columns: 4,
      items: [
        {
          title: "Predictive Maintenance (PdM)",
          text: "ML algorithms to monitor equipment health and predict failures before they occur, reducing unplanned downtime.",
          icon: "settings",
        },
        {
          title: "Smart Factory Automation",
          text: "Integrating IoT and AIOps to create a fully connected, self-optimising manufacturing floor.",
          icon: "factory",
        },
        {
          title: "Quality Control through Vision AI",
          text: "Automated visual inspection systems that identify defects with superhuman precision on the production line.",
          icon: "eye",
        },
        {
          title: "Supply Chain Material Analytics",
          text: "Predictive models to manage raw material usage and optimize production scheduling for efficiency.",
          icon: "chart",
        },
      ],
    },
    {
      type: "cta",
      title: "Ready to Build the Factory of Tomorrow?",
      text: ["Discover how our predictive maintenance and AIOps solutions can optimize your production line."],
      primary: { label: "Consult Our Industry Experts", href: "/ContactUs/" },
    },
  ],
};

export default page;

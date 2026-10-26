import type { Page } from "../types";

const page: Page = {
  slug: "Partners",
  title: "Partners | Data Panther",
  description:
    "At Data Panther, innovation is never built in isolation. We collaborate with forward-thinking organizations, technology providers, and research communities to develop intelligent solutions that drive real-world impact.",
  sections: [
    {
      type: "hero",
      eyebrow: "STRATEGIC PARTNERSHIPS",
      title: "Building Intelligence\nThrough Collaboration",
      text: [
        "At Data Panther, innovation is never built in isolation. We collaborate with forward-thinking organizations, technology providers, and research communities to develop intelligent solutions that drive real-world impact.",
      ],
    },
    {
      type: "checklist",
      title: "Our Partnership Philosophy",
      text: [
        "We believe that the most impactful innovations emerge when diverse expertise comes together.",
        "Data Panther works alongside organizations across industries to develop AI-powered systems that transform data into strategic intelligence. Through collaboration, we accelerate innovation and create solutions that redefine how businesses operate.",
      ],
      columns: [
        {
          title: "What We Value in Partnerships",
          tone: "pos",
          items: [
            "Shared vision for innovation",
            "Commitment to technological advancement",
            "Long-term strategic collaboration",
            "Ethical and responsible AI development",
          ],
        },
      ],
    },
    {
      type: "cards",
      eyebrow: "WHO WE WORK WITH",
      title: "Our Partnership Ecosystem",
      variant: "icon",
      columns: 3,
      items: [
        {
          title: "Technology Partners",
          text: "Collaborating with leading technology providers to build scalable AI infrastructure and advanced analytics platforms.",
          icon: "cpu",
        },
        {
          title: "Enterprise Collaborations",
          text: "Working with global organizations to design intelligent systems that transform operational efficiency.",
          icon: "handshake",
        },
        {
          title: "Research Alliances",
          text: "Partnering with research communities and innovation labs to explore the future of artificial intelligence.",
          icon: "search",
        },
      ],
    },
    {
      type: "steps",
      eyebrow: "OUR PROCESS",
      title: "How We Work Together",
      dark: true,
      items: [
        { tag: "01", title: "Strategic Alignment" },
        { tag: "02", title: "Innovation Planning" },
        { tag: "03", title: "Technology Integration" },
        { tag: "04", title: "Long-Term Growth" },
      ],
    },
    {
      type: "cta",
      title: "Partner With Data Panther",
      text: [
        "We are always looking to collaborate with organizations that share our vision of building intelligent systems and transforming industries through data.",
      ],
      primary: { label: "Become a Partner", href: "/ContactUs/" },
    },
  ],
};

export default page;

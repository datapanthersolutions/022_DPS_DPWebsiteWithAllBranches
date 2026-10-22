import type { Page } from "../types";

const page: Page = {
  slug: "Investor",
  title: "Investors | Data Panther",
  description:
    "Data Panther is backed by visionary investors who believe in the transformative power of artificial intelligence. Their support enables us to push the boundaries of intelligent technologies and build solutions that shape the future of modern enterprises.",
  sections: [
    {
      type: "hero",
      eyebrow: "INVESTORS",
      title: "Supporting Innovation Behind Data Panther",
      text: [
        "Data Panther is backed by visionary investors who believe in the transformative power of artificial intelligence. Their support enables us to push the boundaries of intelligent technologies and build solutions that shape the future of modern enterprises.",
      ],
    },
    {
      type: "split",
      title: "Our Investment Philosophy",
      text: [
        "We collaborate with investors who share our belief in responsible innovation and long-term technological impact.",
        "Together, we focus on building intelligent systems that help organizations transform data into actionable intelligence and sustainable growth.",
      ],
      subTitle: "What Drives Our Investors",
      bullets: [
        "Commitment to AI-driven innovation",
        "Long-term technological impact",
        "Scalable and intelligent solutions",
        "Sustainable business transformation",
      ],
    },
    {
      type: "cards",
      eyebrow: "WHY INVEST",
      title: "Creating Long-Term Value",
      variant: "icon",
      columns: 3,
      dark: true,
      items: [
        {
          title: "AI Innovation",
          text: "Continuous development of advanced artificial intelligence technologies that redefine how organizations use data.",
          icon: "brain",
        },
        {
          title: "Enterprise Solutions",
          text: "Delivering scalable platforms and intelligent systems that empower modern businesses.",
          icon: "server",
        },
        {
          title: "Global Impact",
          text: "Building technologies that influence industries and accelerate digital transformation worldwide.",
          icon: "globe",
        },
      ],
    },
    {
      type: "quote",
      eyebrow: "LOOKING AHEAD",
      title: "Our Growth Vision",
      quote:
        "With the support of forward-thinking investors, Data Panther continues to expand its capabilities in artificial intelligence, machine learning, and advanced analytics. Our focus remains on creating intelligent platforms that transform how organizations operate in a data-driven world.",
    },
    {
      type: "cta",
      title: "Investor Relations",
      text: [
        "For partnership opportunities or investor inquiries, connect with our team to explore how Data Panther is shaping the future of artificial intelligence.",
      ],
      primary: { label: "Contact Investor Relations", href: "/ContactUs/" },
    },
  ],
};

export default page;

import type { Page } from "../types";

const page: Page = {
  slug: "careers",
  title: "Careers | Data Panther",
  description:
    "Join a team of engineers, designers, and innovators who are transforming industries with AI-driven solutions. We believe in ownership, continuous learning, and building technology that creates real-world impact.",
  sections: [
    {
      type: "hero",
      eyebrow: "CAREERS",
      title: "Build the Future of Intelligent Systems",
      text: [
        "Join a team of engineers, designers, and innovators who are transforming industries with AI-driven solutions. We believe in ownership, continuous learning, and building technology that creates real-world impact.",
      ],
      cta: { label: "Explore Open Roles", href: "#roles" },
      image: "/img/careers.webp",
    },
    {
      type: "split",
      eyebrow: "LIFE AT DATA PANTHER",
      title: "Where Ambition Meets Innovation",
      text: [
        "We operate like a startup, think like researchers, and execute like an enterprise team. You'll work on real-world AI systems deployed across industries — not experimental prototypes.",
      ],
      bullets: [
        "Work directly with enterprise clients",
        "Build production-scale AI systems",
        "Rapid ownership & leadership growth",
        "Zero bureaucracy",
      ],
      image: "/img/lifeatdp.webp",
      reverse: true,
    },
    {
      type: "steps",
      eyebrow: "HIRING PROCESS",
      title: "What to Expect",
      items: [
        { title: "Application Review", text: "We evaluate your resume & portfolio." },
        { title: "Technical Round", text: "Hands-on problem solving & architecture discussion." },
        { title: "Culture Fit", text: "Meet the team & leadership." },
        { title: "Offer", text: "Transparent compensation discussion." },
      ],
    },
    {
      type: "cards",
      eyebrow: "OUR CULTURE",
      title: "What Drives Our Thinking",
      text: ["The mindset behind every AI solution we build."],
      variant: "icon",
      columns: 4,
      dark: true,
      items: [
        { title: "Move with Purpose", text: "We ship fast, learn faster, and iterate relentlessly.", icon: "rocket" },
        { title: "Stay Curious", text: "We treat every project as a chance to learn something new.", icon: "lightbulb" },
        { title: "Win Together", text: "Individual brilliance, collective impact. We celebrate team wins.", icon: "users" },
        { title: "Build Trust", text: "With clients, with data, with each other — integrity is non-negotiable.", icon: "handshake" },
      ],
    },
    {
      type: "cards",
      eyebrow: "BENEFITS",
      title: "Why You'll Love Working Here",
      text: ["We invest in our people — because exceptional teams build exceptional AI systems."],
      variant: "icon",
      columns: 3,
      items: [
        {
          title: "Growth-First Culture",
          text: "Annual learning budgets, certifications, and conference sponsorships to keep you at the cutting edge.",
          icon: "trend",
        },
        {
          title: "Remote Flexibility",
          text: "Work from anywhere with flexible hours. We trust outcomes over presence.",
          icon: "globe",
        },
        {
          title: "Health & Wellness",
          text: "Comprehensive health insurance for you and your family, plus mental health support.",
          icon: "heart",
        },
        {
          title: "Collaborative Teams",
          text: "Small, cross-functional squads with real ownership — no bureaucracy, just impact.",
          icon: "puzzle",
        },
        {
          title: "Work-Life Balance",
          text: "Generous PTO, no-meeting Fridays, and a culture that respects personal time.",
          icon: "scale",
        },
        {
          title: "Equity & Transparency",
          text: "Competitive compensation, performance bonuses, and full transparency on company direction.",
          icon: "eye",
        },
      ],
    },
    {
      type: "subscribe",
      eyebrow: "JOIN OUR TALENT COMMUNITY",
      title: "Stay connected and learn more about Data Panther and career opportunities.",
      placeholder: "Email address",
      button: "Subscribe →",
      list: "talent_community",
    },
    {
      type: "notice",
      title: "Fraud Alert",
      text: "Data Panther does not charge any fees at any stage of the recruitment process. If you receive suspicious communication claiming to represent us, please report it immediately.",
    },
  ],
};

export default page;

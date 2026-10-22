import type { Page } from "../types";

const data: Page = {
  slug: "cookies",
  title: "Cookie Policy",
  description: "Understanding how cookies are used across the Data Panther website.",
  sections: [
    {
      type: "hero",
      eyebrow: "LEGAL",
      title: "Cookie Policy",
      text: [
        "Understanding how cookies are used across the Data Panther website.",
      ],
    },
    {
      type: "prose",
      blocks: [
        {
          heading: "What Are Cookies",
          paragraphs: [
            "Cookies are small text files stored on your device when visiting a website. They help websites function effectively and improve user experience.",
          ],
        },
        {
          heading: "Types of Cookies We Use",
          bullets: [
            "Essential cookies required for website functionality",
            "Analytics cookies to measure website performance",
            "Preference cookies to remember user settings",
            "Marketing cookies for relevant communications",
          ],
        },
        {
          heading: "Managing Cookies",
          paragraphs: [
            "Users can control or disable cookies through browser settings. However, disabling cookies may affect website functionality.",
          ],
        },
      ],
    },
  ],
};

export default data;

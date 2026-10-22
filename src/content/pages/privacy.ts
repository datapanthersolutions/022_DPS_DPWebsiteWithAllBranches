import type { Page } from "../types";

const data: Page = {
  slug: "privacy",
  title: "Privacy Policy",
  description: "How Data Panther collects, protects, and manages your information.",
  sections: [
    {
      type: "hero",
      eyebrow: "LEGAL",
      title: "Privacy Policy",
      text: [
        "How Data Panther collects, protects, and manages your information.",
      ],
    },
    {
      type: "prose",
      blocks: [
        {
          heading: "Information We Collect",
          paragraphs: [
            "We may collect personal information such as name, email address, organization details, and other contact information when users interact with our website or services.",
          ],
        },
        {
          heading: "Use of Information",
          paragraphs: [
            "Collected information helps us provide services, improve website performance, respond to inquiries, and deliver relevant content related to our technology and consulting solutions.",
          ],
        },
        {
          heading: "Data Security",
          paragraphs: [
            "Data Panther applies appropriate technical and organizational measures to protect personal information from unauthorized access, disclosure, or misuse.",
          ],
        },
      ],
    },
  ],
};

export default data;

import type { Page } from "../types";

const data: Page = {
  slug: "legal",
  title: "Legal Terms of Use",
  description: "Terms governing access and use of the Data Panther website and services.",
  sections: [
    {
      type: "hero",
      eyebrow: "LEGAL",
      title: "Legal Terms of Use",
      text: [
        "Terms governing access and use of the Data Panther website and services.",
      ],
    },
    {
      type: "prose",
      blocks: [
        {
          heading: "Acceptance of Terms",
          paragraphs: [
            "By accessing this website, you agree to be bound by these terms and conditions. If you do not agree to these terms, you must discontinue the use of this website immediately.",
          ],
        },
        {
          heading: "Use of Website",
          paragraphs: [
            "Users may only use this website for lawful purposes. Unauthorized access attempts, malicious activities, or misuse of the website are strictly prohibited.",
          ],
        },
        {
          heading: "Intellectual Property",
          paragraphs: [
            "All materials on this website including logos, content, graphics, and software are the intellectual property of Data Panther Solutions and may not be copied or redistributed without written permission.",
          ],
        },
        {
          heading: "Limitation of Liability",
          paragraphs: [
            "Data Panther Solutions shall not be liable for any damages arising from the use of this website including loss of data, service interruptions, or reliance on information provided on the website.",
          ],
        },
      ],
    },
  ],
};

export default data;

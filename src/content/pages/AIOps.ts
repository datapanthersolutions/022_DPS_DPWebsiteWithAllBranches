import type { Page } from "../types";

const page: Page = {
  slug: "AIOps",
  title: "AIOps | Data Panther",
  description: "Data Panther leverages Artificial Intelligence for IT Operations to transform how organizations manage infrastructure, monitor systems, and resolve operational issues with speed and precision.",
  sections: [
    {
      "type": "hero",
      "eyebrow": "AIOPS",
      "title": "AIOps\nIntelligent IT Operations",
      "text": [
        "Data Panther leverages Artificial Intelligence for IT Operations to transform how organizations manage infrastructure, monitor systems, and resolve operational issues with speed and precision."
      ],
      "image": "/img/aiop.webp"
    },
    {
      "type": "split",
      "title": "What is AIOps?",
      "text": [
        "AIOps combines artificial intelligence and machine learning with IT operations to automatically detect, analyze, and resolve operational issues across complex digital infrastructures.",
        "By analyzing massive volumes of logs, metrics, and events, AIOps platforms help organizations maintain high system availability, reduce downtime, and improve operational efficiency."
      ],
      "image": "/img/aiopdashboard.webp",
      "reverse": true
    },
    {
      "type": "cards",
      "eyebrow": "WHAT WE BUILD",
      "title": "AIOps Capabilities",
      "variant": "icon",
      "columns": 3,
      "items": [
        {
          "title": "Intelligent Monitoring",
          "text": "Use AI to monitor infrastructure, applications, and networks in real-time for proactive issue detection.",
          "icon": "eye"
        },
        {
          "title": "Automated Incident Response",
          "text": "Automatically detect anomalies and trigger corrective actions to minimize downtime.",
          "icon": "alert"
        },
        {
          "title": "Predictive Maintenance",
          "text": "Identify potential system failures before they occur using predictive analytics.",
          "icon": "trend"
        },
        {
          "title": "Root Cause Analysis",
          "text": "AI-powered analysis identifies the root cause of complex operational issues quickly.",
          "icon": "search"
        },
        {
          "title": "Log & Event Correlation",
          "text": "Analyze massive volumes of logs and events to uncover patterns and operational insights.",
          "icon": "network"
        },
        {
          "title": "Operational Automation",
          "text": "Automate repetitive IT operations tasks to increase efficiency and reduce manual effort.",
          "icon": "settings"
        }
      ]
    },
    {
      "type": "cards",
      "eyebrow": "WHERE IT APPLIES",
      "title": "Industry Applications",
      "variant": "numbered",
      "columns": 4,
      "items": [
        {
          "title": "Infrastructure Monitoring"
        },
        {
          "title": "Cloud Operations Optimization"
        },
        {
          "title": "Incident Detection & Resolution"
        },
        {
          "title": "Enterprise IT Automation"
        }
      ]
    },
    {
      "type": "steps",
      "eyebrow": "HOW WE DELIVER",
      "title": "Our Implementation Approach",
      "dark": true,
      "items": [
        {
          "title": "Infrastructure Assessment"
        },
        {
          "title": "AI Model Deployment"
        },
        {
          "title": "Operational Integration"
        },
        {
          "title": "Continuous Optimization"
        }
      ]
    },
    {
      "type": "cta",
      "title": "Transform Your IT Operations",
      "text": [
        "Partner with Data Panther to implement AI-driven operational intelligence that enhances reliability, reduces downtime, and optimizes enterprise IT systems."
      ],
      "primary": {
        "label": "Explore AIOps Solutions",
        "href": "/ContactUs/"
      }
    }
  ],
};

export default page;

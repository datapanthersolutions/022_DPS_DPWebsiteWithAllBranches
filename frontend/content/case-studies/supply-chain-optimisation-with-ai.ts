import type { CaseStudy } from "../types";

const data: CaseStudy = {
  slug: "supply-chain-optimisation-with-ai",
  category: "Operational AI",
  date: "November 2025",
  readTime: "9 min read",
  title: "AI-Driven Supply Chain Optimisation for Global Logistics",
  subtitle: "Cutting logistics costs by £18M annually and improving on-time delivery from 71% to 94% for a multinational logistics provider",
  summary: "Data Panther built an AI-powered supply chain optimisation platform for a multinational logistics provider, improving on-time delivery rates from 71% to 94% and cutting total logistics costs by £18M per year.",
  sections: [
    {
      eyebrow: "THE CHALLENGE",
      heading: "The Challenge",
      paragraphs: [
        "A multinational third-party logistics (3PL) provider managing supply chains for 120 enterprise clients across 38 countries was struggling with chronic operational inefficiency. On-time in-full (OTIF) delivery rates sat at a disappointing 71%, well below the industry benchmark of 90%+. The central planning team used a combination of spreadsheets and a 15-year-old ERP system to schedule shipments, allocate warehouse capacity, and route last-mile delivery vehicles. The planning process was entirely reactive: planners responded to disruptions as they occurred rather than anticipating and preventing them. Rising fuel costs, post-pandemic carrier capacity constraints, and increasingly demanding client SLAs created an urgent need for a fundamentally different approach.",
      ],
    },
    {
      eyebrow: "OUR APPROACH",
      heading: "Our Solution",
      paragraphs: [
        "Data Panther delivered an end-to-end AI supply chain platform in four integrated modules. The Demand Sensing module ingested client inventory data, point-of-sale signals, weather forecasts, public holiday calendars, and macroeconomic indicators to produce 8-week shipment demand forecasts at SKU and lane level, refreshed daily. The Dynamic Routing Engine used a combination of mixed-integer programming and reinforcement learning to optimise multi-stop vehicle routing plans in real time, accounting for live traffic data (Google Maps Platform API), carrier capacity availability, and fuel pricing. The Disruption Prediction module used natural language processing to monitor 14,000 daily news sources, port authority bulletins, and weather feeds, flagging supply chain risks 3–7 days before they materialised and automatically triggering contingency routing plans. The Warehouse Slotting Optimiser used historical pick frequency data and machine learning to continuously recommend optimal inventory placement within 12 distribution centres, reducing picker travel distances by an average of 28%.",
      ],
    },
  ],
  results: [
    "On-time in-full (OTIF) delivery rate improved from 71% to 94% within 9 months of deployment",
    "Total annual logistics costs reduced by £18M through route optimisation, fuel efficiency, and warehouse improvements",
    "Average vehicle utilisation increased from 67% to 89%, reducing the required fleet size by 14%",
    "Supply chain disruptions predicted an average of 4.8 days in advance, enabling proactive contingency planning",
    "Picker travel distances in distribution centres reduced by 28%, increasing warehouse throughput by 19%",
    "Client OTIF penalties (contract-mandated fines for missed SLAs) reduced by 91% year-on-year",
  ],
  industry: "Logistics / Supply Chain",
  technologies: [
    "Python",
    "Google OR-Tools",
    "Reinforcement Learning (Ray RLlib)",
    "Apache Spark",
    "Azure Databricks",
    "Google Maps Platform",
    "NLP (spaCy)",
    "Power BI",
    "PostgreSQL",
  ],
};

export default data;

import type { CaseStudy } from "../types";

const data: CaseStudy = {
  slug: "establishing-a-data-driven-decision-ecosystem",
  category: "Data Modernisation",
  date: "December 2025",
  readTime: "9 min read",
  title: "Establishing a Data-Driven Decision Ecosystem",
  subtitle: "How Data Panther helped a 500-location retail chain eliminate data silos and boost inventory efficiency by 25%",
  summary: "Data Panther engineered a scalable cloud-native operational intelligence platform for a top-tier retail chain, reducing inventory stockouts by 25% and increasing operational efficiency by 15%.",
  image: "/img/datamodern.webp",
  featured: true,
  sections: [
    {
      eyebrow: "THE CHALLENGE",
      heading: "The Challenge",
      paragraphs: [
        "A leading UK retail group with 500+ physical locations and a growing e-commerce channel was generating vast quantities of data — over 8 million transactions per day — but was unable to capitalise on it. Legacy point-of-sale systems, separate warehouse management software, and a disconnected e-commerce platform each generated data in incompatible formats and stored it in isolated silos. Supply chain managers relied on weekly static Excel reports, meaning decisions were always based on information that was days out of date. During peak trading periods (Christmas and summer sales), inventory stockout rates reached 18%, resulting in an estimated £12M in lost annual revenue. Board-level reporting took three full working weeks to compile manually.",
      ],
    },
    {
      eyebrow: "OUR APPROACH",
      heading: "Our Solution",
      paragraphs: [
        "Data Panther delivered a phased data modernisation programme over 14 months. In phase one, the team established a cloud-native data lakehouse on Microsoft Azure (using Azure Data Lake Storage Gen2 and Databricks Delta Lake) that ingested real-time event streams from all 500 stores, the e-commerce platform, and third-party logistics providers via Apache Kafka. Automated data quality pipelines validated, cleansed, and standardised incoming records using Great Expectations, eliminating the incompatibility issues that had previously made cross-system analysis impossible. In phase two, Data Panther built a semantic layer and a suite of interactive Power BI dashboards tailored to each business function: supply chain managers received live inventory heatmaps with automated reorder alerts; category buyers accessed demand-forecasting models built with Prophet and XGBoost; and the C-suite gained a single-page executive dashboard updated every 15 minutes. Phase three introduced a machine-learning-driven demand-sensing model that dynamically adjusted procurement orders based on weather data, local events, and social media sentiment, further reducing overstock and understock situations.",
      ],
    },
  ],
  results: [
    "Inventory stockout rate reduced from 18% to 13.5% — a 25% relative improvement — preventing approximately £3M in annual lost sales",
    "Operational efficiency across the retail network improved by 15% during peak trading periods",
    "Board reporting cycle reduced from 3 weeks to real-time (15-minute data refresh)",
    "Data pipeline operational costs reduced by 31% through cloud-native architecture replacing legacy ETL servers",
    "Demand forecast accuracy improved to 89% (from 71%) for the top 500 SKUs",
    "Time-to-insight for supply chain decisions reduced from 72 hours to under 30 minutes",
  ],
  industry: "Retail",
  technologies: [
    "Microsoft Azure",
    "Azure Databricks",
    "Apache Kafka",
    "Delta Lake",
    "Power BI",
    "Python",
    "Prophet",
    "XGBoost",
    "Great Expectations",
  ],
};

export default data;

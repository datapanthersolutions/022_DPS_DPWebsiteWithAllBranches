"use client";

import {
  IconTerminal2,
  IconEaseInOut,
  IconCurrencyDollar,
  IconCloud,
  IconRouteAltLeft,
  IconHelp,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Agentic AI & Autonomous Systems",
      description:
        "Multi-agent pipelines and autonomous workflow systems built on Vertex AI ADK, LangChain, and CrewAI.",
      icon: <IconTerminal2 size={32} stroke={1.5} />,
    },
    {
      title: "Custom ML Model Engineering",
      description:
        "Predictive analytics, demand forecasting, churn modeling, and classification systems built for production.",
      icon: <IconEaseInOut size={32} stroke={1.5} />,
    },
    {
      title: "GenAI & LLM Integration",
      description:
        "RAG systems, enterprise copilots, document intelligence, and GPT-powered applications.",
      icon: <IconCurrencyDollar size={32} stroke={1.5} />,
    },
    {
      title: "Intelligent Process Automation",
      description:
        "Replace repetitive manual tasks with AI-driven automation using Azure Durable Functions.",
      icon: <IconCloud size={32} stroke={1.5} />,
    },
    {
      title: "Data Pipelines & Analytics",
      description:
        "End-to-end data infrastructure including ETL pipelines and real-time dashboards.",
      icon: <IconRouteAltLeft size={32} stroke={1.5} />,
    },
    {
      title: "AI Deployment & MLOps",
      description:
        "Scalable AI infrastructure with CI/CD for ML, drift detection, and model governance.",
      icon: <IconHelp size={32} stroke={1.5} />,
    },
  ];

  return (
    <section className="py-8 bg-white">

      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto px-6 mb-20">
        <p className="uppercase tracking-[0.3em] text-sm text-dp-magenta font-medium mb-4">
          What We Build
        </p>

        <h2 className="text-4xl md:text-5xl font-light text-dp-navy leading-tight">
          AI & ML Services Engineered for Impact
        </h2>

        <p className="mt-6 text-dp-navy/70 text-lg">
          From strategy to production — delivering across the full AI lifecycle.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative bg-white border border-dp-navy/15 p-10 rounded-xl overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
          >
            {/* gradient top edge */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />

            {/* gradient icon tile */}
            <div className="w-14 h-14 rounded-xl bg-dp-gradient flex items-center justify-center text-white mb-6">
              {feature.icon}
            </div>

            <h3 className="text-xl font-semibold text-dp-navy mb-4">
              {feature.title}
            </h3>

            <p className="text-dp-navy/70 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
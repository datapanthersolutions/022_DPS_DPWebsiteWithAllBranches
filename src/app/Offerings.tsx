"use client";

import { motion } from "framer-motion";
import {
  IconCpu,
  IconRobot,
  IconDatabase,
  IconChartLine,
} from "@tabler/icons-react";

const offerings = [
  {
    title: "Enterprise AI Engineering",
    icon: <IconRobot size={28} stroke={1.5} />,
    description:
      "Architect scalable AI systems integrating computer vision, NLP, and intelligent automation into complex enterprise ecosystems.",
  },
  {
    title: "Machine Learning Systems",
    icon: <IconCpu size={28} stroke={1.5} />,
    description:
      "Deploy production-grade predictive models that enhance operational intelligence, optimize workflows, and drive data-driven strategy.",
  },
  {
    title: "Data Platform Engineering",
    icon: <IconDatabase size={28} stroke={1.5} />,
    description:
      "Design resilient data architectures, real-time pipelines, and enterprise-grade storage systems for high-volume analytics workloads.",
  },
  {
    title: "Strategic Business Intelligence",
    icon: <IconChartLine size={28} stroke={1.5} />,
    description:
      "Enable executive decision-making with advanced analytics, KPI command centers, and predictive intelligence dashboards.",
  },
];

export default function OurOfferings() {
  return (
    <section className="bg-white py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">

        {/* Section Label */}
        <p className="uppercase tracking-[0.3em] text-sm text-dp-magenta font-medium mb-2">
          Core Capabilities
        </p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-light text-dp-navy leading-tight mb-6"
        >
          Enterprise AI Solutions
          <span className="block font-light">
            Built for Scale & Resilience
          </span>
        </motion.h2>

        <div className="w-20 h-1 bg-dp-magenta rounded-full mx-auto mb-8"></div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-lg text-dp-navy/70 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          We deliver intelligence-driven platforms that modernize enterprise
          operations, accelerate innovation cycles, and create measurable
          business impact across global organizations.
        </motion.p>

        {/* Offerings Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative bg-white border border-dp-navy/15 rounded-xl p-8 overflow-hidden text-left transition-all duration-300 hover:border-dp-magenta/40 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* gradient top edge */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />

              {/* gradient icon tile */}
              <div className="w-14 h-14 rounded-xl bg-dp-gradient flex items-center justify-center text-white mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-dp-navy mb-4">
                {item.title}
              </h3>

              <p className="text-dp-navy/70 leading-relaxed text-sm">
                {item.description}
              </p>

              <div className="mt-6 w-10 h-1 bg-dp-magenta rounded-full transition-all duration-300 group-hover:w-16"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
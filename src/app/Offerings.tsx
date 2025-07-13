"use client";

import { motion } from "framer-motion";
import { IconCpu, IconRobot, IconDatabase, IconChartLine } from "@tabler/icons-react";

const offerings = [
  {
    title: "AI Development",
    icon: <IconRobot size={32} className="text-primary-600" />,
    description:
      "Custom AI solutions using natural language processing, computer vision, and intelligent automation.",
  },
  {
    title: "Machine Learning Models",
    icon: <IconCpu size={32} className="text-primary-600" />,
    description:
      "Deploy predictive models trained on your data to optimize performance and forecasting.",
  },
  {
    title: "Data Engineering",
    icon: <IconDatabase size={32} className="text-primary-600" />,
    description:
      "Design and manage scalable data pipelines and storage systems for real-time analytics.",
  },
  {
    title: "Business Intelligence",
    icon: <IconChartLine size={32} className="text-primary-600" />,
    description:
      "Interactive dashboards, KPI tracking, and visual analytics to drive informed decisions.",
  },
];

export default function OurOfferings() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
        >
          Our Offerings
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Explore our core capabilities and services designed to transform your business with AI, ML, and data solutions.
        </motion.p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

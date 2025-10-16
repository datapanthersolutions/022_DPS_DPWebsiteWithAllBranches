"use client";

import { motion } from "framer-motion";
import { IconCpu, IconRobot, IconDatabase, IconChartLine } from "@tabler/icons-react";

const offerings = [
  {
    title: "AI Development",
    icon: (
    <div className="flex justify-center mb-2">
      <IconRobot size={32} className="text-green-500" />
    </div>
    ),
    description:
      "Design unique AI solutions that use computer vision, intelligent automation, and natural language processing to solve particular business problems and boost innovation.",
  },
  {
    title: "Machine Learning Models",
    icon: (
    <div className="flex justify-center mb-2">
    <IconCpu size={32} className="text-green-500" />
    </div>
    ),
    description:
      "Use predictive models that have been trained on your data to improve performance, find trends, and facilitate more intelligent, data-driven choices.",
  },
  {
    title: "Data Engineering",
    icon: (
    <div className="flex justify-center mb-2">
    <IconDatabase size={32} className="text-green-500" />
    </div>
	),
    description:
      "Develop, build, and oversee scalable data pipelines and storage systems that can handle high-volume data processing and real-time analytics.",
  },
  {
    title: "Business Intelligence",
    icon: (
    <div className="flex justify-center mb-2">
    <IconChartLine size={32} className="text-green-500" />
    </div>
	),
    description:
      "Apply advanced visual analytics, KPI tracking, and interactive dashboards to enhance decision-making.",
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
          className="text-4xl md:text-5xl font-serif text-black-950 dark:text-white mb-4"
        >
          Our Offerings
        </motion.h2>
                          <div className="w-48 h-1 bg-red-500 mx-auto rounded-full mb-5"></div>

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
              <h3 className="text-xl font-semiserif text-gray-900 dark:text-white mb-2">
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
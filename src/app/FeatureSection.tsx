
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { motion } from "motion/react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Engineered for Developers",
      description: "Data Panther provides the flexibility, scalability, and tools required to develop and implement cutting-edge data and AI solutions, making it ideal for engineers, innovators, and problem-solvers.",
      icon: <IconTerminal2 size={32} />,
    },
    {
      title: "Effortless Usability",
      description: "Discover a user-friendly platform built for optimal effectiveness. There is no steep learning curve and only smooth productivity.",
      icon: <IconEaseInOut size={32} />,
    },
    {
      title: "Flexible & Transparent Pricing",
      description: "Experience straightforward, value-driven pricing that scales with your needs and has no unexpected or hidden fees. ",
      icon: <IconCurrencyDollar size={32} />,
    },
    {
      title: "Rock-Solid Uptime",
      description: "Reliability is assured with Data Panther. Take advantage of constant service with almost 100% uptime, wherever you are and at any time. ",
      icon: <IconCloud size={32} />,
    },
    {
      title: "Multi-Tenant Ready",
      description: "Facilitate smooth collaboration by providing a single workspace that can safely and effectively accommodate several teams. ",
      icon: <IconRouteAltLeft size={32} />,
    },
    {
      title: "24/7 Live Support",
      description: "Get assistance whenever you need it. Our team of experts and AI agents are on call 24/7 to guarantee continuous assistance. ",
      icon: <IconHelp size={32} />,
    },
    {
      title: "Risk-Free Guarantee",
      description: "Try Data Panther without taking risks of any kind. We're sure you'll stay. ",
      icon: <IconAdjustmentsBolt size={32} />,
    },
    {
      title: "Constant Innovation",
      description: "We're just getting started, but we're constantly improving our platform to satisfy your evolving needs. ",
      icon: <IconHeart size={32} />,
    },
  ];

  return (
    <section className="relative z-10 py-24 bg-gradient-to-b from-white to-neutral-100 dark:from-black dark:to-neutral-900">
      {/* Fancy Heading */}
      <div className="text-center mb-20 px-6">
        <h2 className="text-4xl  sm:text-5xl font-serif text-neutral-900 dark:text-green-500 tracking-tight">
          Why Choose Data Panther
        </h2>
                          <div className="w-48 h-1 bg-red-500 mt-4 mx-auto rounded-full"></div>

        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Everything you need to build, scale, and automate your data operations.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative group bg-white/80 dark:bg-white/5 backdrop-blur-lg  p-6  shadow-md transition-transform duration-300 hover:-translate-y-2 "
    >
        {/* Icon */}
        <div className="mb-4 text-green-600 dark:text-green-400">{icon}</div>

        {/* Title */}
        <h3 className="text-lg font-semiserif text-neutral-800 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-gray-400 transition-colors">
            {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
            {description}
        </p>

       
    </motion.div>
  );
};
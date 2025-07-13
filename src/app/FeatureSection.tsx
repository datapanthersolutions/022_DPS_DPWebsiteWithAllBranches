
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
      description: "Data Panther is purpose-built for engineers, thinkers, and innovators.",
      icon: <IconTerminal2 size={32} />,
    },
    {
      title: "Effortless Usability",
      description: "As intuitive as it gets — no learning curve, just pure efficiency.",
      icon: <IconEaseInOut size={32} />,
    },
    {
      title: "Flexible & Transparent Pricing",
      description: "No surprises. No hidden fees. Only value.",
      icon: <IconCurrencyDollar size={32} />,
    },
    {
      title: "Rock-Solid Uptime",
      description: "Data Panther never sleeps. Enjoy 100% uptime, always.",
      icon: <IconCloud size={32} />,
    },
    {
      title: "Multi-Tenant Ready",
      description: "Collaborate freely — one workspace, many teams.",
      icon: <IconRouteAltLeft size={32} />,
    },
    {
      title: "24/7 Live Support",
      description: "Reach out anytime. Our human and AI agents are always ready.",
      icon: <IconHelp size={32} />,
    },
    {
      title: "Risk-Free Guarantee",
      description: "Try Data Panther, risk-free. We’re confident you’ll stay.",
      icon: <IconAdjustmentsBolt size={32} />,
    },
    {
      title: "Constant Innovation",
      description: "We evolve with your needs — and we're just getting started.",
      icon: <IconHeart size={32} />,
    },
  ];

  return (
    <section className="relative z-10 py-24 bg-gradient-to-b from-white to-neutral-100 dark:from-black dark:to-neutral-900">
      {/* Fancy Heading */}
      <div className="text-center mb-20 px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
          Why Choose Data Panther
        </h2>
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
        className="relative group bg-white/80 dark:bg-white/5 backdrop-blur-lg border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
        {/* Icon */}
        <div className="mb-4 text-blue-600 dark:text-blue-400">{icon}</div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
            {description}
        </p>

        {/* Hover effect */}
        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-500 transition duration-300 pointer-events-none" />
    </motion.div>
  );
};

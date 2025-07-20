
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const cn = (...classes) => classes.filter(Boolean).join(" ");

export const HoverEffect = ({ items, className, variant = "default" }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-4",
        className
      )}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item, idx) => (
        <motion.a
          href={item.link}
          key={item.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          variants={itemVariants}
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.98 }}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className={cn(
                  "absolute inset-0 h-full w-full block rounded-3xl",
                  variant === "glass" && "bg-white/10 backdrop-blur-lg border border-white/20",
                  variant === "neon" && "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30",
                  variant === "minimal" && "bg-gray-100 dark:bg-gray-800",
                  variant === "default" && "bg-neutral-200 dark:bg-slate-800/[0.8]"
                )}
                layoutId="hoverBackground"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
              />
            )}
          </AnimatePresence>

          <Card variant={variant} isHovered={hoveredIndex === idx}>
            {item.image && <CardImage src={item.image} alt={item.title} />}
            {item.badge && <CardBadge variant={variant}>{item.badge}</CardBadge>}
            {item.icon && <CardIcon variant={variant}>{item.icon}</CardIcon>}
            <CardTitle variant={variant}>{item.title}</CardTitle>
            <CardDescription variant={variant}>{item.description}</CardDescription>
            {item.tags && <CardTags tags={item.tags} variant={variant} />}
            <CardFooter variant={variant} />
          </Card>
        </motion.a>
      ))}
    </motion.div>
  );
};

const Card = ({ className, children, variant = "default", isHovered = false }) => (
  <motion.div
    className={cn(
      "rounded-2xl h-full w-full p-6 overflow-hidden relative z-20 transition-all duration-300",
      variant === "default" && "bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700",
      variant === "glass" && "bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-white/20",
      variant === "neon" && "bg-gray-900 border border-purple-500/20 group-hover:border-purple-500/40 group-hover:shadow-lg group-hover:shadow-purple-500/25",
      variant === "minimal" && "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 group-hover:border-gray-300 dark:group-hover:border-gray-600 shadow-sm group-hover:shadow-md",
      className
    )}
    animate={{
      boxShadow: isHovered
        ? variant === "neon"
          ? "0 20px 40px rgba(139, 92, 246, 0.3)"
          : "0 20px 40px rgba(0, 0, 0, 0.1)"
        : "0 4px 6px rgba(0, 0, 0, 0.05)",
    }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative z-50 h-full flex flex-col">{children}</div>
  </motion.div>
);

const CardImage = ({ src, alt, className }) => (
  <div className={cn("w-full h-48 mb-4 rounded-xl overflow-hidden", className)}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  </div>
);

const CardBadge = ({ children, variant = "default", className }) => (
  <motion.span
    className={cn(
      "inline-block px-3 py-1 rounded-full text-xs font-medium mb-3",
      variant === "default" && "bg-blue-500/20 text-blue-400 border border-blue-500/30",
      variant === "glass" && "bg-white/20 text-white border border-white/30",
      variant === "neon" && "bg-purple-500/20 text-purple-300 border border-purple-500/40",
      variant === "minimal" && "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300",
      className
    )}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.2 }}
  >
    {children}
  </motion.span>
);

const CardIcon = ({ children, variant = "default", className }) => (
  <motion.div
    className={cn(
      "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
      variant === "default" && "bg-blue-500/20 text-blue-400",
      variant === "glass" && "bg-white/20 text-white",
      variant === "neon" && "bg-purple-500/20 text-purple-300",
      variant === "minimal" && "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300",
      className
    )}
    whileHover={{ rotate: 360 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

const CardTitle = ({ children, variant = "default", className }) => (
  <motion.h4
    className={cn(
      "font-bold tracking-wide mb-3 text-lg",
      variant === "default" && "text-zinc-100",
      variant === "glass" && "text-white",
      variant === "neon" && "text-white group-hover:text-purple-200",
      variant === "minimal" && "text-gray-900 dark:text-white",
      className
    )}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.3 }}
  >
    {children}
  </motion.h4>
);

const CardDescription = ({ children, variant = "default", className }) => (
  <motion.p
    className={cn(
      "tracking-wide leading-relaxed text-sm flex-grow",
      variant === "default" && "text-zinc-400",
      variant === "glass" && "text-white/80",
      variant === "neon" && "text-gray-300",
      variant === "minimal" && "text-gray-600 dark:text-gray-300",
      className
    )}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
  >
    {children}
  </motion.p>
);

const CardTags = ({ tags, variant = "default", className }) => (
  <motion.div
    className={cn("flex flex-wrap gap-2 mt-4", className)}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
  >
    {tags.map((tag, idx) => (
      <span
        key={idx}
        className={cn(
          "px-2 py-1 rounded-md text-xs",
          variant === "default" && "bg-gray-700 text-gray-300",
          variant === "glass" && "bg-white/10 text-white/80",
          variant === "neon" && "bg-purple-500/10 text-purple-300",
          variant === "minimal" && "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
        )}
      >
        {tag}
      </span>
    ))}
  </motion.div>
);

const CardFooter = ({ variant = "default", className }) => (
  <motion.div
    className={cn(
      "flex items-center justify-between mt-6 pt-4 border-t",
      variant === "default" && "border-gray-700",
      variant === "glass" && "border-white/20",
      variant === "neon" && "border-purple-500/20",
      variant === "minimal" && "border-gray-200 dark:border-gray-700",
      className
    )}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
  >
    <span
      className={cn(
        "text-sm font-medium",
        variant === "default" && "text-blue-400",
        variant === "glass" && "text-white",
        variant === "neon" && "text-purple-300",
        variant === "minimal" && "text-blue-600 dark:text-blue-400"
      )}
    >
      Learn more
    </span>
    <motion.svg
      className={cn("w-4 h-4", variant === "default" && "text-blue-400", variant === "glass" && "text-white", variant === "neon" && "text-purple-300", variant === "minimal" && "text-blue-600 dark:text-blue-400")}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </motion.svg>
  </motion.div>
);

export default function EnhancedHoverEffectDemo() {
  const [currentVariant, setCurrentVariant] = useState("default");

  const demoItems = [
    {
      title: "Data Analytics Platform",
      description: "Transform raw data into actionable insights. Real-time processing and AI-powered visualizations.",
      link: "#analytics",
      badge: "Popular",
      icon: "📊",
      tags: ["Analytics", "AI", "Real-time"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
    },
    {
      title: "Machine Learning Suite",
      description: "Build and deploy ML models at scale with AutoML and monitoring support.",
      link: "#ml",
      badge: "New",
      icon: "🤖",
      tags: ["ML", "AutoML", "Deployment"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop",
    },
    {
      title: "Business Intelligence",
      description: "Interactive dashboards and automated reporting to support decision making.",
      link: "#bi",
      badge: "Enterprise",
      icon: "📈",
      tags: ["BI", "Dashboards", "Reports"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-violet-950 p-6 md:p-12">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight text-balance">
          Explore Our Intelligent Platform Stack
        </h1>
        <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
          Choose your preferred visual theme and explore cutting-edge solutions in AI, ML, and Data Intelligence.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["default", "glass", "neon", "minimal"].map((variant) => (
            <button
              key={variant}
              onClick={() => setCurrentVariant(variant)}
              className={cn(
                "px-5 py-2.5 rounded-full font-semibold capitalize transition-all duration-300 text-sm shadow-md backdrop-blur-md",
                currentVariant === variant
                  ? "bg-white text-gray-900 shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20"
              )}
            >
              {variant}
            </button>
          ))}
        </div>

        <HoverEffect items={demoItems} variant={currentVariant} className="max-w-6xl mx-auto" />
      </div>
    </div>
  );
}
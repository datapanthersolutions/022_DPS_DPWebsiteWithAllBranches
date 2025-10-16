
"use client";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useInView, useSpring, useMotionValue, useTransform } from "framer-motion";

const cn = (...classes: (string | boolean | undefined | null)[]) =>
  classes.filter(Boolean).join(" ");

interface HoverEffectItem {
  title: string;
  description: string;
  badge?: string;
  icon?: React.ReactNode;
  tags?: string[];
  image?: string;
  href?: string;
  date?: string;
  author?: string;
  featured?: boolean;
  stats?: {
    views?: number;
    likes?: number;
    comments?: number;
  };
}

interface HoverEffectProps {
  items: HoverEffectItem[];
  className?: string;
  variant?: "default" | "glass" | "neon" | "minimal" | "gradient" | "modern";
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  animationDelay?: number;
  enableParallax?: boolean;
  enableSound?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const HoverEffect: React.FC<HoverEffectProps> = ({
  items,
  className,
  variant = "default",
  columns = { sm: 1, md: 2, lg: 3, xl: 3 },
  animationDelay = 0.1,
  enableParallax = false,
  enableSound = false,
  autoPlay = false,
  autoPlayInterval = 3000,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [currentAutoIndex, setCurrentAutoIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentAutoIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);
    
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, items.length]);

  // Sound effects
  const playHoverSound = () => {
    if (!enableSound) return;
    // Create a subtle hover sound
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  const getGridCols = () => {
    const { sm = 1, md = 2, lg = 3, xl = 3 } = columns;
    return `grid-cols-${sm} md:grid-cols-${md} lg:grid-cols-${lg} xl:grid-cols-${xl}`;
  };

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "grid gap-8 py-10 px-4",
        getGridCols(),
        className
      )}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { 
            staggerChildren: animationDelay,
            delayChildren: 0.2 
          },
        },
      }}
    >
      {items.map((item, idx) => (
        <CardWrapper
          key={idx}
          item={item}
          index={idx}
          variant={variant}
          hoveredIndex={hoveredIndex}
          focusedIndex={focusedIndex}
          currentAutoIndex={currentAutoIndex}
          autoPlay={autoPlay}
          enableParallax={enableParallax}
          onHover={(index) => {
            setHoveredIndex(index);
            playHoverSound();
          }}
          onFocus={setFocusedIndex}
          onLeave={() => {
            setHoveredIndex(null);
            setFocusedIndex(null);
          }}
        />
      ))}
    </motion.div>
  );
};

interface CardWrapperProps {
  item: HoverEffectItem;
  index: number;
  variant: string;
  hoveredIndex: number | null;
  focusedIndex: number | null;
  currentAutoIndex: number;
  autoPlay: boolean;
  enableParallax: boolean;
  onHover: (index: number) => void;
  onFocus: (index: number) => void;
  onLeave: () => void;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  item,
  index,
  variant,
  hoveredIndex,
  focusedIndex,
  currentAutoIndex,
  autoPlay,
  enableParallax,
  onHover,
  onFocus,
  onLeave,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);
  
  const isActive = hoveredIndex === index || focusedIndex === index || (autoPlay && currentAutoIndex === index);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!enableParallax) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const CardElement = item.href ? motion.a : motion.div;
  const cardProps = item.href ? { href: item.href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <CardElement
      className="relative group block p-2 h-full w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-3xl"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      onFocus={() => onFocus(index)}
      onBlur={onLeave}
      onMouseMove={handleMouseMove}
      variants={{
        hidden: { 
          opacity: 0, 
          y: 50,
          scale: 0.9,
          filter: "blur(10px)"
        },
        visible: { 
          opacity: 1, 
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { 
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        },
      }}
      whileHover={{ 
        y: -12,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.95 }}
      style={enableParallax ? {
        rotateY: rotateY,
        rotateX: rotateX,
        transformStyle: "preserve-3d",
      } : {}}
      {...cardProps}
    >
      <AnimatePresence>
        {isActive && (
          <motion.span
            layoutId={`hoverBackground-${variant}`}
            className={cn(
              "absolute inset-0 h-full w-full block rounded-3xl",
              getBackgroundClass(variant)
            )}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.85, 
              transition: { duration: 0.3 } 
            }}
          />
        )}
      </AnimatePresence>

      <Card variant={variant} isActive={isActive} item={item}>
        {item.featured && <FeaturedBadge variant={variant} />}
        {item.image && <CardImage src={item.image} alt={item.title} variant={variant} />}
        {item.badge && <CardBadge variant={variant}>{item.badge}</CardBadge>}
        {item.icon && <CardIcon variant={variant}>{item.icon}</CardIcon>}
        <CardTitle variant={variant}>{item.title}</CardTitle>
        <CardDescription variant={variant}>{item.description}</CardDescription>
        {item.tags && <CardTags tags={item.tags} variant={variant} />}
        <CardMeta item={item} variant={variant} />
        {item.stats && <CardStats stats={item.stats} variant={variant} />}
        <CardFooter variant={variant} hasLink={!!item.href} />
      </Card>
    </CardElement>
  );
};

const getBackgroundClass = (variant: string): string => {
  const backgrounds = {
    glass: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl",
    neon: "bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20 border border-purple-500/30 shadow-lg shadow-purple-500/25",
    minimal: "bg-gray-100 dark:bg-gray-800 shadow-xl",
    gradient: "bg-gradient-to-br from-green-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/20",
    modern: "bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/20",
    default: "bg-neutral-200 dark:bg-slate-800/90 shadow-xl"
  };
  return backgrounds[variant as keyof typeof backgrounds] || backgrounds.default;
};

const Card: React.FC<{
  children: React.ReactNode;
  variant: string;
  isActive: boolean;
  item: HoverEffectItem;
}> = ({ children, variant, isActive, item }) => (
  <motion.div
    className={cn(
      "rounded-2xl h-full w-full p-6 overflow-hidden relative z-20 transition-all duration-500",
      getCardClass(variant)
    )}
    animate={{
      boxShadow: isActive ? getShadow(variant, true) : getShadow(variant, false),
      scale: isActive ? 1.02 : 1,
      borderWidth: isActive ? "2px" : "1px",
    }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    <div className="relative z-50 h-full flex flex-col">
      {children}
    </div>
    {/* Animated background particles for neon variant */}
    {variant === "neon" && isActive && <BackgroundParticles />}
  </motion.div>
);

const getCardClass = (variant: string): string => {
  const classes = {
    default: "bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700",
    glass: "bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-white/20",
    neon: "bg-gray-900 border border-purple-500/20 group-hover:border-purple-500/40",
    minimal: "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 group-hover:border-gray-300 dark:group-hover:border-gray-600 shadow-sm",
    gradient: "bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 border border-purple-500/20",
    modern: "bg-white/10 backdrop-blur-2xl border border-white/10 group-hover:border-white/20"
  };
  return classes[variant as keyof typeof classes] || classes.default;
};

const getShadow = (variant: string, isActive: boolean): string => {
  if (!isActive) return "0 4px 6px rgba(0, 0, 0, 0.05)";
  
  const shadows = {
    neon: "0 25px 50px rgba(139, 92, 246, 0.4), 0 0 0 1px rgba(139, 92, 246, 0.2)",
    glass: "0 25px 50px rgba(255, 255, 255, 0.1)",
    gradient: "0 25px 50px rgba(139, 92, 246, 0.3)",
    modern: "0 25px 50px rgba(0, 0, 0, 0.2)",
    default: "0 25px 50px rgba(0, 0, 0, 0.15)"
  };
  return shadows[variant as keyof typeof shadows] || shadows.default;
};

const FeaturedBadge: React.FC<{ variant: string }> = ({ variant }) => (
  <motion.div
    className="absolute -top-2 -right-2 z-30"
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
  >
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
      ⭐ Featured
    </div>
  </motion.div>
);

const CardImage: React.FC<{ 
  src: string; 
  alt: string; 
  variant: string;
}> = ({ src, alt, variant }) => (
  <motion.div 
    className="w-full h-48 mb-4 rounded-xl overflow-hidden relative"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.div>
);

const CardBadge: React.FC<{ children: React.ReactNode; variant: string }> = ({ children, variant }) => (
  <motion.span
    className={cn(
      "inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 backdrop-blur-sm",
      getBadgeClass(variant)
    )}
    initial={{ opacity: 0, scale: 0.8, y: -10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
    whileHover={{ scale: 1.05 }}
  >
    {children}
  </motion.span>
);

const getBadgeClass = (variant: string): string => {
  const classes = {
    default: "bg-[#06923E]/20 text-green-400 border border-green-500/30",
    glass: "bg-white/20 text-white border border-white/30",
    neon: "bg-purple-500/20 text-purple-300 border border-purple-500/40",
    minimal: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300",
    gradient: "bg-gradient-to-r from-green-500/20 to-purple-500/20 text-green-300 border border-green-500/30",
    modern: "bg-white/20 text-white border border-white/30"
  };
  return classes[variant as keyof typeof classes] || classes.default;
};

const CardIcon: React.FC<{ children: React.ReactNode; variant: string }> = ({ children, variant }) => (
  <motion.div
    className={cn(
      "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
      getIconClass(variant)
    )}
    whileHover={{ 
      rotate: 360,
      scale: 1.1,
      transition: { duration: 0.6, ease: "easeInOut" }
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
  >
    {children}
  </motion.div>
);

const getIconClass = (variant: string): string => {
  const classes = {
    default: "bg-[#06923E]/20 text-green-400",
    glass: "bg-white/20 text-white",
    neon: "bg-purple-500/20 text-purple-300",
    minimal: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300",
    gradient: "bg-gradient-to-br from-green-500/20 to-purple-500/20 text-green-300",
    modern: "bg-white/20 text-white"
  };
  return classes[variant as keyof typeof classes] || classes.default;
};

const CardTitle: React.FC<{ children: React.ReactNode; variant: string }> = ({ children, variant }) => (
  <motion.h4
    className={cn(
      "font-bold tracking-tight mb-3 text-xl lg:text-2xl",
      getTitleClass(variant)
    )}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.4, duration: 0.5 }}
    whileHover={{ 
      scale: 1.02,
      transition: { duration: 0.2 }
    }}
  >
    {children}
  </motion.h4>
);

const getTitleClass = (variant: string): string => {
  const classes = {
    default: "text-white",
    glass: "text-white",
    neon: "text-white group-hover:text-purple-200",
    minimal: "text-gray-900 dark:text-gray-100",
    gradient: "text-white",
    modern: "text-white"
  };
  return classes[variant as keyof typeof classes] || classes.default;
};

const CardDescription: React.FC<{ children: React.ReactNode; variant: string }> = ({ children, variant }) => (
  <motion.p
    className={cn(
      "tracking-wide leading-relaxed text-sm flex-grow mb-4",
      getDescriptionClass(variant)
    )}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.5 }}
  >
    {children}
  </motion.p>
);

const getDescriptionClass = (variant: string): string => {
  const classes = {
    default: "text-zinc-400",
    glass: "text-white/80",
    neon: "text-gray-300",
    minimal: "text-gray-600 dark:text-gray-300",
    gradient: "text-gray-200",
    modern: "text-white/90"
  };
  return classes[variant as keyof typeof classes] || classes.default;
};

const CardTags: React.FC<{ tags: string[]; variant: string }> = ({ tags, variant }) => (
  <motion.div
    className="flex flex-wrap gap-2 mb-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6, staggerChildren: 0.1 }}
  >
    {tags.map((tag, idx) => (
      <motion.span
        key={idx}
        className={cn(
          "px-2 py-1 rounded-md text-xs font-medium",
          getTagClass(variant)
        )}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 + idx * 0.1 }}
        whileHover={{ scale: 1.05 }}
      >
        {tag}
      </motion.span>
    ))}
  </motion.div>
);

const getTagClass = (variant: string): string => {
  const classes = {
    default: "bg-gray-700 text-gray-300",
    glass: "bg-white/10 text-white/80",
    neon: "bg-purple-500/10 text-purple-300",
    minimal: "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
    gradient: "bg-[#06923E]/10 text-green-300",
    modern: "bg-white/10 text-white/80"
  };
  return classes[variant as keyof typeof classes] || classes.default;
};

const CardMeta: React.FC<{ item: HoverEffectItem; variant: string }> = ({ item, variant }) => {
  if (!item.date && !item.author) return null;
  
  return (
    <motion.div
      className={cn(
        "flex items-center gap-4 text-xs mb-4 pb-2 border-b",
        getMetaBorderClass(variant)
      )}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
    >
      {item.date && (
        <span className={getMetaTextClass(variant)}>
          📅 {item.date}
        </span>
      )}
      {item.author && (
        <span className={getMetaTextClass(variant)}>
          👤 {item.author}
        </span>
      )}
    </motion.div>
  );
};

const getMetaBorderClass = (variant: string): string => {
  const classes = {
    default: "border-gray-700",
    glass: "border-white/20",
    neon: "border-purple-500/20",
    minimal: "border-gray-200 dark:border-gray-700",
    gradient: "border-green-500/20",
    modern: "border-white/20"
  };
  return classes[variant as keyof typeof classes] || classes.default;
};

const getMetaTextClass = (variant: string): string => {
  const classes = {
    default: "text-zinc-500",
    glass: "text-white/60",
    neon: "text-gray-400",
    minimal: "text-gray-500 dark:text-gray-400",
    gradient: "text-gray-300",
    modern: "text-white/70"
  };
  return classes[variant as keyof typeof classes] || classes.default;
};

const CardStats: React.FC<{ 
  stats: { views?: number; likes?: number; comments?: number }; 
  variant: string 
}> = ({ stats, variant }) => (
  <motion.div
    className="flex items-center gap-4 text-xs mb-4"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8 }}
  >
    {stats.views && (
      <span className={cn("flex items-center gap-1", getMetaTextClass(variant))}>
        👁️ {stats.views.toLocaleString()}
      </span>
    )}
    {stats.likes && (
      <span className={cn("flex items-center gap-1", getMetaTextClass(variant))}>
        ❤️ {stats.likes.toLocaleString()}
      </span>
    )}
    {stats.comments && (
      <span className={cn("flex items-center gap-1", getMetaTextClass(variant))}>
        💬 {stats.comments.toLocaleString()}
      </span>
    )}
  </motion.div>
);

const CardFooter: React.FC<{ variant: string; hasLink: boolean }> = ({ variant, hasLink }) => (
  <motion.div
    className={cn(
      "flex items-center justify-between mt-auto pt-4 border-t",
      getMetaBorderClass(variant)
    )}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.9 }}
  >
    {hasLink && (
      <motion.div
        className="flex items-center gap-2 text-sm font-medium"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <span className={getFooterTextClass(variant)}>
          Learn more
        </span>
        <motion.svg
          className={cn("w-4 h-4", getFooterIconClass(variant))}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </motion.svg>
      </motion.div>
    )}
  </motion.div>
);

const getFooterTextClass = (variant: string): string => {
  const classes = {
    default: "text-green-400",
    glass: "text-white",
    neon: "text-purple-300",
    minimal: "text-green-600 dark:text-green-400",
    gradient: "text-green-300",
    modern: "text-white"
  };
  return classes[variant as keyof typeof classes] || classes.default;
};

const getFooterIconClass = (variant: string): string => {
  const classes = {
    default: "text-green-400",
    glass: "text-white",
    neon: "text-purple-300",
    minimal: "text-green-600 dark:text-green-400",
    gradient: "text-green-300",
    modern: "text-white"
  };
  return classes[variant as keyof typeof classes] || classes.default;
};

const BackgroundParticles: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-purple-400 rounded-full"
        initial={{
          x: Math.random() * 400,
          y: Math.random() * 300,
          opacity: 0,
        }}
        animate={{
          x: Math.random() * 400,
          y: Math.random() * 300,
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2 + Math.random() * 2,
          repeat: Infinity,
          repeatType: "loop",
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Utility function for conditional classes
const cn = (...classes: (string | boolean | undefined | null)[]) =>
  classes.filter(Boolean).join(' ');

// ==============================
// Hover Effect Component
// ==============================
export const HoverEffect = ({
  items,
  className,
  variant = 'default',
}: {
  items: {
    title: string;
    description: string;
    link: string;
    badge?: string;
    icon?: React.ReactNode;
    tags?: string[];
    image?: string;
  }[];
  className?: string;
  variant?: 'default' | 'glass' | 'neon' | 'minimal';
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-4',
        className
      )}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 },
        },
      }}
    >
      {items.map((item, idx) => (
        <motion.a
          href={item.link}
          key={item.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.98 }}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                layoutId="hoverBackground"
                className={cn(
                  'absolute inset-0 h-full w-full block rounded-3xl',
                  variant === 'glass' &&
                    'bg-white/10 backdrop-blur-lg border border-white/20',
                  variant === 'neon' &&
                    'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30',
                  variant === 'minimal' &&
                    'bg-gray-100 dark:bg-gray-800',
                  variant === 'default' &&
                    'bg-neutral-200 dark:bg-slate-800/[0.8]'
                )}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.3 },
                }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
              />
            )}
          </AnimatePresence>

          <Card variant={variant} isHovered={hoveredIndex === idx}>
            {item.image && (
              <CardImage src={item.image} alt={item.title} />
            )}
            {item.badge && (
              <CardBadge variant={variant}>{item.badge}</CardBadge>
            )}
            {item.icon && (
              <CardIcon variant={variant}>{item.icon}</CardIcon>
            )}
            <CardTitle variant={variant}>{item.title}</CardTitle>
            <CardDescription variant={variant}>
              {item.description}
            </CardDescription>
            {item.tags && (
              <CardTags tags={item.tags} variant={variant} />
            )}
            <CardFooter variant={variant} />
          </Card>
        </motion.a>
      ))}
    </motion.div>
  );
};

// ==============================
// Subcomponents
// ==============================

const Card = ({
  children,
  className,
  variant = 'default',
  isHovered,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: string;
  isHovered: boolean;
}) => (
  <motion.div
    className={cn(
      'rounded-2xl h-full w-full p-6 overflow-hidden relative z-20 transition-all duration-300',
      variant === 'default' &&
        'bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700',
      variant === 'glass' &&
        'bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-white/20',
      variant === 'neon' &&
        'bg-gray-900 border border-purple-500/20 group-hover:border-purple-500/40 group-hover:shadow-lg group-hover:shadow-purple-500/25',
      variant === 'minimal' &&
        'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 group-hover:border-gray-300 dark:group-hover:border-gray-600 shadow-sm group-hover:shadow-md',
      className
    )}
    animate={{
      boxShadow: isHovered
        ? variant === 'neon'
          ? '0 20px 40px rgba(139, 92, 246, 0.3)'
          : '0 20px 40px rgba(0, 0, 0, 0.1)'
        : '0 4px 6px rgba(0, 0, 0, 0.05)',
    }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative z-50 h-full flex flex-col">{children}</div>
  </motion.div>
);

const CardImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <div className={cn('w-full h-48 mb-4 rounded-xl overflow-hidden', className)}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  </div>
);

const CardBadge = ({
  children,
  variant = 'default',
  className,
}: {
  children: React.ReactNode;
  variant?: string;
  className?: string;
}) => (
  <motion.span
    className={cn(
      'inline-block px-3 py-1 rounded-full text-xs font-medium mb-3',
      variant === 'default' &&
        'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      variant === 'glass' &&
        'bg-white/20 text-white border border-white/30',
      variant === 'neon' &&
        'bg-purple-500/20 text-purple-300 border border-purple-500/40',
      variant === 'minimal' &&
        'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300',
      className
    )}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.2 }}
  >
    {children}
  </motion.span>
);

const CardIcon = ({
  children,
  variant = 'default',
  className,
}: {
  children: React.ReactNode;
  variant?: string;
  className?: string;
}) => (
  <motion.div
    className={cn(
      'w-12 h-12 rounded-lg flex items-center justify-center mb-4',
      variant === 'default' && 'bg-blue-500/20 text-blue-400',
      variant === 'glass' && 'bg-white/20 text-white',
      variant === 'neon' && 'bg-purple-500/20 text-purple-300',
      variant === 'minimal' &&
        'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300',
      className
    )}
    whileHover={{ rotate: 360 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

const CardTitle = ({
  children,
  variant = 'default',
  className,
}: {
  children: React.ReactNode;
  variant?: string;
  className?: string;
}) => (
  <motion.h4
    className={cn(
      'font-serif tracking-wide mb-3 text-lg',
      variant === 'default' && 'text-zinc-100',
      variant === 'glass' && 'text-white',
      variant === 'neon' && 'text-white group-hover:text-purple-200',
      variant === 'minimal' && 'text-gray-900 dark:text-white',
      className
    )}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.3 }}
  >
    {children}
  </motion.h4>
);

const CardDescription = ({
  children,
  variant = 'default',
  className,
}: {
  children: React.ReactNode;
  variant?: string;
  className?: string;
}) => (
  <motion.p
    className={cn(
      'tracking-wide leading-relaxed text-sm flex-grow',
      variant === 'default' && 'text-zinc-400',
      variant === 'glass' && 'text-white/80',
      variant === 'neon' && 'text-gray-300',
      variant === 'minimal' && 'text-gray-600 dark:text-gray-300',
      className
    )}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
  >
    {children}
  </motion.p>
);

const CardTags = ({
  tags,
  variant = 'default',
  className,
}: {
  tags: string[];
  variant?: string;
  className?: string;
}) => (
  <motion.div
    className={cn('flex flex-wrap gap-2 mt-4', className)}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
  >
    {tags.map((tag, idx) => (
      <span
        key={idx}
        className={cn(
          'px-2 py-1 rounded-md text-xs',
          variant === 'default' && 'bg-gray-700 text-gray-300',
          variant === 'glass' && 'bg-white/10 text-white/80',
          variant === 'neon' && 'bg-purple-500/10 text-purple-300',
          variant === 'minimal' &&
            'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
        )}
      >
        {tag}
      </span>
    ))}
  </motion.div>
);

const CardFooter = ({
  variant = 'default',
  className,
}: {
  variant?: string;
  className?: string;
}) => (
  <motion.div
    className={cn(
      'flex items-center justify-between mt-6 pt-4 border-t',
      variant === 'default' && 'border-gray-700',
      variant === 'glass' && 'border-white/20',
      variant === 'neon' && 'border-purple-500/20',
      variant === 'minimal' && 'border-gray-200 dark:border-gray-700',
      className
    )}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
  >
    <span
      className={cn(
        'text-sm font-medium',
        variant === 'default' && 'text-blue-400',
        variant === 'glass' && 'text-white',
        variant === 'neon' && 'text-purple-300',
        variant === 'minimal' && 'text-blue-600 dark:text-blue-400'
      )}
    >
      Learn more
    </span>
    <motion.svg
      className={cn(
        'w-4 h-4',
        variant === 'default' && 'text-blue-400',
        variant === 'glass' && 'text-white',
        variant === 'neon' && 'text-purple-300',
        variant === 'minimal' && 'text-blue-600 dark:text-blue-400'
      )}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </motion.svg>
  </motion.div>
);

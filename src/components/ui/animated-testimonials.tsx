"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const isActive = (index: number) => index === active;

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="mx-auto max-w-7xl px-4 py-60 font-sans antialiased">
      {/* Two column layout */}
      <div className="flex flex-col md:flex-row gap-50">
        {/* Left Box - Heading */}
        <div className="w-full md:w-1/3 flex items-start justify-start">
          <div className="flex flex-col gap-6">
            <h2 className="text-7xl font-extraserif text-[#29235B] dark:text-white">
              Meet Our Experts
            </h2>
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              Discover insights and experiences from our team of industry-leading professionals.
            </p>
          </div>
        </div>

        {/* Right Box - Testimonials */}
        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="relative h-80 w-full">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      rotate: isActive(index) ? 0 : randomRotateY(),
                      zIndex: isActive(index)
                        ? 40
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="flex flex-col justify-between py-4">
              <motion.div
                key={active}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <h3 className="text-2xl font-serif text-[#29235B] dark:text-white">
                  {testimonials[active].name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  {testimonials[active].designation}
                </p>
                <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
                  {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>

              <div className="flex gap-4 pt-12 md:pt-4">
                <button
                  onClick={handlePrev}
                  className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
                >
                  <IconArrowLeft className="h-5 w-5 text-[#29235B] group-hover/button:rotate-12 transition-transform duration-300 dark:text-neutral-400" />
                </button>
                <button
                  onClick={handleNext}
                  className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
                >
                  <IconArrowRight className="h-5 w-5 text-[#29235B] group-hover/button:-rotate-12 transition-transform duration-300 dark:text-neutral-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 mt-30 text-center">
        <h1 className="text-5xl">Work with us now!</h1>
        <p className="text-lg text-gray-600 dark:text-neutral-400">
          Automating routine tasks, enabling smarter decision-making and unlocking <br /> new possibilities every single day
        </p>
      </div>
    </div>
  );
};
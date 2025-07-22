"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ColourfulText } from "@/components/ui/colourful-text";
import { motion } from "motion/react";

export default function LandingPage() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        
        <div className="text-3xl md:text-7xl font-serif dark:text-white text-center">
            <ColourfulText text="Data Panther" /><br />
            A
            <span className="text-green-500"> Data</span> platform that
            <span className="text-green-500"> helps you</span> Debug your Data.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          And this, is Chemical Burn.
        </div>
        <button
          className="bg-transparent border-2 border-green-500 rounded-full px-8 py-3 text-lg font-serif text-green-500 shadow-lg hover:bg-green-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 cursor-pointer font-mono"
          style={{ letterSpacing: "0.08em" }}
          onClick={() => {
            alert("Get Started clicked!");
          }}
        >
          GET STARTED
        </button>
      </motion.div>
    </AuroraBackground>
  );
}

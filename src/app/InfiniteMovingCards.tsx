"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-7xl font-bold mb-8 text-center">
      What People Are Saying
      </h1>
      <div className="mb-8" /> {/* Adds extra gap */}
      <InfiniteMovingCards
      items={testimonials}
      direction="right"
      speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Hey Data Panther, data can change the world!",
    name: "Irfan Shareef",
    title: "Message to Data Panther",
  },
  {
    quote:
      "Data is the new oil; when refined, it has the power to transform industries, societies, and the world.",
    name: "Mohammed Shoaib Asim",
    title: "Data can change the world",
  },
  {
    quote:
      "With Data Panther, raw numbers become powerful stories—data visualization that brings insights to life.",
    name: "Mujeeb",
    title: "Data Visualization with Data Panther",
  },
  {
    quote: " Data Panther is not just a tool; it's a movement towards data-driven decision-making.",
    name: "Habeeb Moosa",
    title: "Data Panther Movement",
  },
 
];

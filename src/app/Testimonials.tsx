"use client";

import React from "react";
import Image from "next/image";

const companyLogos = [
  { name: "Tecverse", src: "/tecversenew.png" },
  { name: "Kanoons", src: "/kanoons.png" },
  { name: "Digiting", src: "/digiting.png" },
  { name: "Axartechs", src: "/axar.png" },
];

const CompaniesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-grid-gray-200/[0.05] bg-[length:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-[montserrat] font-semibold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
Join a league of innovators who trust us to amplify impact, spark progress, and accelerate results.          </p>
        </div>

        <div className="relative">
          <div className="flex animate-scroll-slow space-x-12 md:space-x-16 py-6">
            {companyLogos.concat(companyLogos).map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0   p-4  transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={company.src}
                  alt={company.name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-slow {
          display: flex;
          width: max-content;
          animation: scroll-slow 30s linear infinite;
        }
        .animate-scroll-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default CompaniesSection;

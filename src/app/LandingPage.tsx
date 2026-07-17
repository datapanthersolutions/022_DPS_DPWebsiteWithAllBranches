

"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import CompaniesSection from "./Testimonials";

const SLIDE_DURATION = 6000;

const slides = [
  {
    tag: "FOR DIGITAL TRANSFORMATION",
    title: "Turning Complex Data Into Clear Business Strategy",
    description:
      "From infrastructure to intelligence, we design ecosystems that unlock impact.",
    image: "/slide2.jpg",
  },
  {
    tag: "FOR SCALABLE GROWTH",
    title: "Secure, Intelligent & Future-Ready Data Solutions",
    description:
      "Build resilient systems that reduce risk and enhance performance.",
    image: "/test.jpg",
  },
  {
    tag: "FOR ENTERPRISE LEADERS",
    title: "Strategic Insights for Modern Data-Driven Organizations",
    description:
      "We empower decision-makers with advanced analytics and scalable AI systems.",
    image: "/moderndata.jpg",
  },
];

export default function LandingPage() {
  const [current, setCurrent] = useState(0);
  const [timerKey, setTimerKey] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setTimerKey((k) => k + 1);
    }, SLIDE_DURATION);
  }, []);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startInterval]);

  const goToSlide = useCallback(
    (index: number) => {
      if (index === current) return;
      setCurrent(index);
      setTimerKey((k) => k + 1);
      startInterval();
    },
    [current, startInterval]
  );

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Slide Images */}
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{
              opacity: index === current ? 1 : 0,
              willChange: "opacity",
            }}
            aria-hidden={index !== current}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}

        {/* Left-to-Right Image Overlay Matching image_897608.png Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #8C62AC 0%, #443B8E 40%, #29235B 25%, transparent 90%)",
          }}
        />

        {/* Bottom Fade Overlay to bridge smoothly into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#29235B]/90 to-transparent pointer-events-none" />

        {/* Hero Content Section */}
        <div className="relative z-10 flex h-full flex-col justify-center px-12 md:px-24 max-w-3xl">
          <div
            key={`tag-${current}`}
            className="mb-4 inline-block text-xs font-light uppercase tracking-widest text-[#FFFFFF] animate-fadeIn"
          >
            {slides[current].tag}
          </div>

          <h1
            key={`title-${current}`}
            className="mb-6 text-4xl md:text-5xl font-light leading-tight text-white animate-slideUp"
          >
            {slides[current].title}
          </h1>

          <p
            key={`desc-${current}`}
            className="mb-8 text-base text-xl text-gray-300 animate-fadeIn"
          >
            {slides[current].description}
          </p>

          <a
            href="#"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#29235B] transition-transform hover:scale-105"
          >
            Discover More →
          </a>
        </div>

        {/* Bottom Carousel Controls */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-6">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative flex items-center gap-4 w-[360px] p-4 text-left transition-all duration-300 rounded overflow-hidden ${
                current === index
                  ? "bg-[#29235B]/95 shadow-lg border border-white/10"
                  : "bg-[#29235B]/70 hover:bg-[#29235B]/90"
              }`}
            >
              {/* Thumbnail Image */}
              <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Control Text */}
              <div>
                <p className="text-[10px] text-gray-400 font-light mb-1">
                  {slide.tag}
                </p>
                <p className="text-sm text-white font-light leading-snug line-clamp-2">
                  {slide.title}
                </p>
              </div>

              {/* Slide Active Timer Bar */}
              {current === index && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#293D97]">
                  <div
                    key={timerKey}
                    className="h-full bg-[#B13C96]"
                    style={{
                      animation: `timerBar ${SLIDE_DURATION}ms linear forwards`,
                    }}
                  />
                </div>
              )}
            </button>
          ))}
        </div>
      </section>

      <CompaniesSection />

      <style jsx global>{`
        @keyframes timerBar {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease forwards;
        }
      `}</style>
    </>
  );
}






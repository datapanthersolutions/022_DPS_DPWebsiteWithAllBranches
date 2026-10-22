import { caseStudies } from "@/content";
import HomeHero from "@/components/home/HomeHero";
import { LogoMarquee, Problem, OurSolution, WhatWeBuild, HomeCases, Capabilities } from "@/components/home/HomeSections";
import { Cta } from "@/components/sections/Sections";

const featured = ["automating-global-it-operations-with-aiops", "accelerating-software-delivery-through-generative-ai", "establishing-a-data-driven-decision-ecosystem"];

export default function Home() {
  const cases = featured.map((s) => caseStudies.find((c) => c.slug === s)!).filter(Boolean)
    .map((c) => ({ ...c, summary: c.summary }));
  return (
    <>
      <HomeHero />
      <LogoMarquee />
      <Problem />
      <OurSolution />
      <WhatWeBuild />
      <HomeCases cases={cases} />
      <Capabilities />
      <Cta s={{ type: "cta", title: "Ready to Build Intelligent Solutions?", text: ["Partner with Data Panther to unlock the power of AI, automation, and intelligent systems that drive measurable business impact."],
        primary: { label: "Get Started", href: "/ContactUs/" }, secondary: { label: "Explore Services", href: "/Services/" } }} />
    </>
  );
}

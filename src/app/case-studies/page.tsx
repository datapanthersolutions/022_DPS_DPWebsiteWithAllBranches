import type { Metadata } from "next";
import { caseStudies } from "@/content";
import PageIntro from "@/components/sections/PageIntro";
import CaseCard from "@/components/CaseCard";
import { Section, SectionHead } from "@/components/sections/Shared";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export const metadata: Metadata = { title: "Case Studies | Data Panther", description: "Discover the strategies, technologies, and outcomes behind Data Panther's enterprise engagements across AI, data modernisation, AIOps, and cybersecurity." };

const featuredOrder = ["accelerating-software-delivery-through-generative-ai", "automating-global-it-operations-with-aiops", "establishing-a-data-driven-decision-ecosystem"];

export default function CaseStudies() {
  const featured = featuredOrder.map((s) => caseStudies.find((c) => c.slug === s)!).filter(Boolean);
  const archive = caseStudies.filter((c) => !featuredOrder.includes(c.slug));
  return (
    <>
      <PageIntro eyebrow="CASE STUDIES" title="How We Drive Real Results" objects={["blocks", "knot"]}
        text="Discover the strategies, technologies, and outcomes behind Data Panther's enterprise engagements across AI, data modernisation, AIOps, and cybersecurity." />
      <Section tone="white" className="!pt-10">
        <SectionHead eyebrow="HIGHLIGHTS" title="Featured" />
        <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured.map((c, i) => <StaggerItem key={c.slug}><CaseCard c={c} index={i} large /></StaggerItem>)}
        </Stagger>
      </Section>
      <Section tone="cool">
        <SectionHead eyebrow="THE ARCHIVE" title="More Case Studies" />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {archive.map((c, i) => <StaggerItem key={c.slug}><CaseCard c={c} index={i + 1} blurb={c.subtitle} /></StaggerItem>)}
        </Stagger>
      </Section>
    </>
  );
}

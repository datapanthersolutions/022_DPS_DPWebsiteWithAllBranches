import type { Metadata } from "next";
import Link from "@/components/TLink";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { caseStudies } from "@/content";
import CaseStudyView from "@/components/CaseStudyView";

export function generateStaticParams() { return caseStudies.map((c) => ({ slug: c.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = caseStudies.find((x) => x.slug === params.slug);
  return c ? { title: `${c.title} | Data Panther`, description: c.summary } : {};
}

export default function Page({ params }: { params: { slug: string } }) {
  const c = caseStudies.find((x) => x.slug === params.slug);
  if (!c) notFound();
  const more = caseStudies.filter((x) => x.slug !== c.slug).slice(0, 3);
  return <CaseStudyView c={c} more={more} back={<Link href="/case-studies/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white"><ArrowLeft className="h-4 w-4" /> All Case Studies</Link>} />;
}

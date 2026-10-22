import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pages } from "@/content";
import Sections from "@/components/sections/Sections";

export function generateStaticParams() { return pages.map((p) => ({ slug: p.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = pages.find((x) => x.slug === params.slug);
  return p ? { title: p.title, description: p.description } : {};
}

export default function GenericPage({ params }: { params: { slug: string } }) {
  const page = pages.find((p) => p.slug === params.slug);
  if (!page) notFound();
  return <Sections sections={page.sections} slug={page.slug} />;
}

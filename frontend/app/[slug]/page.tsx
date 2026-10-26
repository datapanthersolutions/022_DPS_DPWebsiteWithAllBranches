import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pages } from "@/content";
import Sections from "@/components/sections/Sections";
import { seo } from "@/lib/seo";

export function generateStaticParams() { return pages.map((p) => ({ slug: p.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = pages.find((x) => x.slug === params.slug);
  return p ? seo({ title: p.title, description: p.description, path: `/${p.slug}/` }) : {};
}

export default function GenericPage({ params }: { params: { slug: string } }) {
  const page = pages.find((p) => p.slug === params.slug);
  if (!page) notFound();
  return <Sections sections={page.sections} slug={page.slug} />;
}

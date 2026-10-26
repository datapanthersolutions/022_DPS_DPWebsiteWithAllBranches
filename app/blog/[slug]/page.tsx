import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content";
import PostView from "@/components/PostView";
import { seo } from "@/lib/seo";

export function generateStaticParams() { return blogPosts.map((p) => ({ slug: p.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = blogPosts.find((x) => x.slug === params.slug);
  return p ? seo({ title: `${p.title} | Data Panther`, description: p.excerpt, path: `/blog/${p.slug}/`, type: "article" }) : {};
}
export default function Page({ params }: { params: { slug: string } }) {
  const p = blogPosts.find((x) => x.slug === params.slug);
  if (!p) notFound();
  return <PostView post={p} back={{ label: "All articles", href: "/blog/" }} related={blogPosts.filter((x) => x.slug !== p.slug).slice(0, 3)} />;
}

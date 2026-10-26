import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { blogPosts } from "@/content";
import PageIntro from "@/components/sections/PageIntro";
import PostGrid from "@/components/PostGrid";
import FeaturedPost from "@/components/FeaturedPost";
import { Subscribe } from "@/components/sections/Sections";

export const metadata: Metadata = seo({ title: "Blog | Data Panther", description: "Strategic thought leadership on artificial intelligence, analytics, and enterprise innovation.", path: "/blog/" });

const order = (d?: string) => (d ? Date.parse(d) : 0);

export default function Blog() {
  const posts = [...blogPosts].sort((a, b) => order(b.date) - order(a.date));
  const featured = posts.find((p) => p.featured) ?? posts[0];
  return (
    <>
      <PageIntro eyebrow="INSIGHTS & RESEARCH" title="Data Panther Intelligence Journal" objects={["blob", "crystal"]} text="Strategic thought leadership on artificial intelligence, analytics, and enterprise innovation." />
      <section className="bg-white pb-24">
        <div className="container-site">
          <FeaturedPost post={featured} href={`/blog/${featured.slug}/`} label={`FEATURED · ${featured.category.toUpperCase()}`} cta="Read Article" />
          <div className="mt-20">
            <PostGrid posts={posts} base="blog" placeholder="Search articles..." filters={["All", "Artificial Intelligence", "Data Analytics", "Machine Learning"]} />
          </div>
        </div>
      </section>
      <Subscribe s={{ type: "subscribe", title: "Stay Ahead of the Curve", text: ["Receive curated insights on AI, analytics, and enterprise innovation."], placeholder: "Enter your email", button: "Subscribe" }} />
    </>
  );
}

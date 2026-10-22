import type { Metadata } from "next";
import { articles } from "@/content";
import PageIntro from "@/components/sections/PageIntro";
import PostGrid from "@/components/PostGrid";
import FeaturedPost from "@/components/FeaturedPost";

export const metadata: Metadata = { title: "Insights | Data Panther", description: "Explore how real-time analytics is transforming decision-making by enabling instant data insights and faster response times across industries." };

const order = ["real-time-analytics", "ml-model-deployment", "data-privacy-regulations", "customer-analytics", "edge-computing-data-processing", "ethical-ai"];

export default function Insights() {
  const list = order.map((s) => articles.find((a) => a.slug === s)!).filter(Boolean);
  const pick = list[0];
  return (
    <>
      <PageIntro title="Editor’s Pick" objects={["orbit", "blocks"]} />
      <section className="bg-white pb-28">
        <div className="container-site">
          <FeaturedPost post={pick} href={`/article/${pick.slug}/`} label={pick.category} cta="Read Full Article" />
          <div className="mt-20">
            <PostGrid posts={list.slice(1)} base="article" placeholder="Search insights..." filters={["All", "Technology", "AI/ML", "Strategy", "Compliance"]} />
          </div>
        </div>
      </section>
    </>
  );
}

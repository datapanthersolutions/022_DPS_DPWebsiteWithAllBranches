import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import Link from "@/components/TLink";
import { mainNav } from "@/content/nav";
import { caseStudies, blogPosts, articles, pages } from "@/content";
import PageIntro from "@/components/sections/PageIntro";

export const metadata: Metadata = seo({ title: "Sitemap | Data Panther", path: "/sitemap/" });

export default function Sitemap() {
  const groups: { title: string; links: { label: string; href: string }[] }[] = [
    ...mainNav.filter((n) => "menu" in n).map((n) => ({ title: n.label, links: [{ label: n.label, href: n.href }, ...("menu" in n ? n.menu.map((m) => ({ label: m.label, href: m.href })) : [])] })),
    { title: "Case Studies", links: caseStudies.map((c) => ({ label: c.title, href: `/case-studies/${c.slug}/` })) },
    { title: "Blog", links: blogPosts.map((p) => ({ label: p.title, href: `/blog/${p.slug}/` })) },
    { title: "Insights", links: articles.map((p) => ({ label: p.title, href: `/article/${p.slug}/` })) },
    { title: "Company", links: [{ label: "Home", href: "/" }, { label: "Contact Us", href: "/ContactUs/" }, ...pages.filter((p) => ["legal", "privacy", "cookies"].includes(p.slug)).map((p) => ({ label: p.title.split(" | ")[0], href: `/${p.slug}/` }))] },
  ];
  return (
    <>
      <PageIntro title="Sitemap" />
      <section className="bg-white pb-28">
        <div className="container-site grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="eyebrow">{g.title}</h2>
              <ul className="mt-5 space-y-2.5">{g.links.map((l) => <li key={l.href + l.label}><Link href={l.href} className="text-[15px] text-ink-soft hover:text-electric">{l.label}</Link></li>)}</ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

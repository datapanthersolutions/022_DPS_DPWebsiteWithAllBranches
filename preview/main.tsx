import { StrictMode, useCallback, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "../app/globals.css";
import { RouterCtx } from "./shims/router";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Floating from "@/components/layout/Floating";
import SmoothScroll, { getLenis } from "@/components/motion/SmoothScroll";
import TransitionProvider from "@/components/transition/TransitionProvider";
import Preloader from "@/components/transition/Preloader";
import Cursor from "@/components/motion/Cursor";
import Template from "../app/template";
import Home from "../app/page";
import NotFound from "../app/not-found";
import Generic from "../app/[slug]/page";
import CaseStudies from "../app/case-studies/page";
import CaseDetail from "../app/case-studies/[slug]/page";
import Blog from "../app/blog/page";
import BlogPost from "../app/blog/[slug]/page";
import Insights from "../app/Insights/page";
import Article from "../app/article/[slug]/page";
import Contact from "../app/ContactUs/page";
import Sitemap from "../app/sitemap/page";
import { pages, caseStudies, blogPosts, articles } from "@/content";

function resolve(path: string) {
  const parts = path.split("/").filter(Boolean);
  const [a, b] = parts;
  const lower = (a ?? "").toLowerCase();
  if (!a) return <Home />;
  if (lower === "case-studies") return !b ? <CaseStudies /> : caseStudies.some((c) => c.slug === b) ? <CaseDetail params={{ slug: b }} /> : <NotFound />;
  if (lower === "blog") return !b ? <Blog /> : blogPosts.some((c) => c.slug === b) ? <BlogPost params={{ slug: b }} /> : <NotFound />;
  if (lower === "article" && b && articles.some((c) => c.slug === b)) return <Article params={{ slug: b }} />;
  if (lower === "insights") return <Insights />;
  if (lower === "contactus") return <Contact />;
  if (lower === "sitemap") return <Sitemap />;
  const page = pages.find((p) => p.slug.toLowerCase() === lower);
  return page && !b ? <Generic params={{ slug: page.slug }} /> : <NotFound />;
}

const norm = (p: string) => (p.endsWith("/") ? p : p + "/");

function App() {
  // Optional deep link: #AboutUs, #case-studies, etc. opens that page.
  const initial = () => {
    try { const h = location.hash.slice(1); return h ? norm("/" + h.replace(/__/g, "/")) : "/"; } catch { return "/"; }
  };
  const [path, setPath] = useState(initial);

  const push = useCallback((href: string) => {
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      if (el) { const l = getLenis(); l ? l.scrollTo(el, { offset: -80 }) : el.scrollIntoView({ behavior: "smooth" }); }
      return;
    }
    const [p, hash] = href.split("#");
    setPath(norm(p || "/"));
    if (hash) setTimeout(() => push("#" + hash), 900);
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, [path]);

  return (
    <RouterCtx.Provider value={{ path, push }}>
      <TransitionProvider>
        <SmoothScroll />
        <Preloader />
        <Header />
        <main><Template key={path}>{resolve(path)}</Template></main>
        <Footer />
        <Floating />
        <Cursor />
      </TransitionProvider>
    </RouterCtx.Provider>
  );
}

createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);

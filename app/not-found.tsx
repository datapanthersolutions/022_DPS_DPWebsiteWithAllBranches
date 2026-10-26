import Link from "@/components/TLink";
import CaseRedirect from "@/components/CaseRedirect";
import { pages } from "@/content";

// Top-level pages, so a URL typed in the wrong case (e.g. /aboutus/) can be sent to the real one.
const routes = ["/ContactUs/", "/Insights/", "/blog/", "/case-studies/", "/sitemap/", ...pages.map((p) => `/${p.slug}/`)];

export default function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center bg-white px-4 pt-24 text-center">
      <CaseRedirect routes={routes} />
      <div>
        <p className="font-display text-[8rem] font-semibold leading-none text-gradient">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold">This Page Does Not Exist</h1>
        <Link href="/" className="btn btn-primary mt-8">Back to Home</Link>
      </div>
    </section>
  );
}

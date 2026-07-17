import fs from "fs/promises";
import path from "path";
import Link from "next/link";

interface CaseStudy {
    slug: string;
    title: string;
    subtitle: string;
    img: string;
    category: string;
    date: string;
    readTime: string;
    summary: string;
    challenge: string;
    solution: string;
    results: string[];
    technologies: string[];
    industry: string;
}

export async function generateStaticParams() {
    const dir = path.join(process.cwd(), "data/case-studies");
    const files = await fs.readdir(dir);
    return files
        .filter((f) => f.endsWith(".json"))
        .map((file) => ({ slug: file.replace(".json", "") }));
}

export default async function CaseStudyDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const filePath = path.join(process.cwd(), "data/case-studies", `${slug}.json`);
    const raw = await fs.readFile(filePath, "utf-8");
    const cs: CaseStudy = JSON.parse(raw);

    return (
        <main className="min-h-screen bg-white text-dp-navy">
            {/* Hero Banner */}
            <section className="relative bg-dp-gradient pt-24 pb-16 px-6 lg:px-24 overflow-hidden">
                <div className="relative max-w-5xl mx-auto">
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 no-underline transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16L3 12m0 0l4-4M3 12h18" />
                        </svg>
                        All Case Studies
                    </Link>

                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="text-xs font-medium px-4 py-1.5 rounded-full bg-white text-dp-navy">
                            {cs.category}
                        </span>
                        <span className="text-xs text-white/70 flex items-center gap-1">
                            {cs.date} · {cs.readTime}
                        </span>
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                        {cs.title}
                    </h1>
                    <p className="text-xl text-white/85 leading-relaxed max-w-3xl">
                        {cs.subtitle}
                    </p>
                </div>
            </section>

            {/* Hero Image */}
            {/* <div className="w-full" style={{ maxHeight: "480px", overflow: "hidden" }}>
                <img
                    src={cs.img}
                    alt={cs.title}
                    className="w-full object-cover"
                    style={{ maxHeight: "480px" }}
                />
            </div> */}

            {/* Content */}
            <section className="py-20 px-6 lg:px-24">
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 flex flex-col gap-14">
                        {/* Summary */}
                        <div className="border-l-4 border-dp-magenta pl-6 py-1">
                            <p className="text-xl text-dp-navy/80 leading-relaxed font-medium">
                                {cs.summary}
                            </p>
                        </div>

                        {/* The Challenge */}
                        <div>
                            <p className="uppercase tracking-[0.35em] text-xs mb-3 text-dp-magenta font-medium">
                                The Challenge
                            </p>
                            <h2 className="text-3xl font-light mb-5">
                                The Challenge
                            </h2>
                            <p className="text-dp-navy/80 text-lg leading-loose">
                                {cs.challenge}
                            </p>
                        </div>

                        {/* The Solution */}
                        <div>
                            <p className="uppercase tracking-[0.35em] text-xs mb-3 text-dp-magenta font-medium">
                                Our Approach
                            </p>
                            <h2 className="text-3xl font-light mb-5">
                                Our Solution
                            </h2>
                            <p className="text-dp-navy/80 text-lg leading-loose">
                                {cs.solution}
                            </p>
                        </div>

                        {/* Results */}
                        <div>
                            <p className="uppercase tracking-[0.35em] text-xs mb-3 text-dp-magenta font-medium">
                                The Outcome
                            </p>
                            <h2 className="text-3xl font-light mb-6">
                                Results &amp; Impact
                            </h2>
                            <ul className="flex flex-col gap-4">
                                {cs.results.map((r, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-semibold bg-dp-magenta">
                                            {i + 1}
                                        </span>
                                        <p className="text-dp-navy/80 text-lg leading-relaxed">{r}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="flex flex-col gap-8">
                        {/* Industry */}
                        <div className="rounded-xl p-6 bg-dp-gradient">
                            <h3 className="text-white/70 font-medium uppercase tracking-widest text-xs mb-2">Industry</h3>
                            <p className="text-white text-lg">{cs.industry}</p>
                        </div>

                        {/* Technologies */}
                        <div className="relative rounded-xl border border-dp-navy/15 p-6 overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                            <h3 className="font-semibold text-lg mb-4">
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {cs.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-medium px-3 py-1.5 rounded-full border border-dp-magenta/30 text-dp-navy"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="rounded-xl bg-dp-navy/5 border border-dp-navy/10 p-6">
                            <h3 className="font-semibold text-lg mb-3">
                                Ready to see similar results?
                            </h3>
                            <p className="text-dp-navy/70 text-sm mb-5">
                                Our team of experts is ready to help you achieve measurable
                                business impact through AI and data modernisation.
                            </p>
                            <Link
                                href="/ContactUs"
                                className="block text-center w-full font-medium py-3 rounded-lg text-white bg-dp-magenta hover:bg-dp-magenta/90 no-underline transition-colors"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </aside>
                </div>
            </section>

            {/* Back CTA */}
            <section className="bg-dp-magenta py-16 px-6 lg:px-24">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <h2 className="text-3xl font-light text-white">
                        Explore More Case Studies
                    </h2>
                    <Link
                        href="/case-studies"
                        className="inline-block bg-white text-dp-navy font-medium px-8 py-3 rounded-lg no-underline hover:bg-white/90 transition-colors"
                    >
                        View All Case Studies →
                    </Link>
                </div>
            </section>
        </main>
    );
}
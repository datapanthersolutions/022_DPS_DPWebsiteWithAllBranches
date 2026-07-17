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
    featured: boolean;
    summary: string;
}

export default async function CaseStudiesPage() {
    const dir = path.join(process.cwd(), "data/case-studies");
    const files = await fs.readdir(dir);

    const caseStudies: CaseStudy[] = await Promise.all(
        files
            .filter((f) => f.endsWith(".json"))
            .map(async (file) => {
                const raw = await fs.readFile(path.join(dir, file), "utf-8");
                return JSON.parse(raw) as CaseStudy;
            })
    );

    const featured = caseStudies.filter((cs) => cs.featured);
    const rest = caseStudies.filter((cs) => !cs.featured);

    return (
        <main className="min-h-screen bg-white text-dp-navy">
            {/* Hero */}
            <section className="relative bg-dp-gradient py-24 px-6 lg:px-24 overflow-hidden">
                <div className="relative max-w-7xl mx-auto">
                    <p className="text-sm font-medium uppercase tracking-widest text-white/70 mb-4">
                        Case Studies
                    </p>
                    <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 max-w-4xl leading-tight">
                        How We Drive Real Results
                    </h1>
                    <p className="text-xl text-white/85 max-w-3xl leading-relaxed">
                        Discover the strategies, technologies, and outcomes behind Data
                        Panther&apos;s enterprise engagements across AI, data modernisation,
                        AIOps, and cybersecurity.
                    </p>
                </div>
            </section>

            {/* Featured Case Studies */}
            <section className="py-16 px-6 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                        Highlights
                    </p>
                    <h2 className="text-3xl font-light mb-10">
                        Featured
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featured.map((cs) => (
                            <Link
                                key={cs.slug}
                                href={`/case-studies/${cs.slug}`}
                                className="group relative bg-white rounded-xl overflow-hidden border border-dp-navy/15 flex flex-col no-underline transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient z-10" />
                                <div className="w-full h-52 overflow-hidden">
                                    <img
                                        src={cs.img}
                                        alt={cs.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-xs font-medium px-3 py-1 rounded-full text-white bg-dp-magenta">
                                            {cs.category}
                                        </span>
                                        <span className="text-xs text-dp-navy/50">{cs.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-dp-navy mb-3 leading-snug">
                                        {cs.title}
                                    </h3>
                                    <p className="text-dp-navy/70 text-sm leading-relaxed flex-1">
                                        {cs.summary}
                                    </p>
                                    <div className="mt-6 flex items-center gap-2 font-medium text-sm text-dp-magenta">
                                        Read Case Study
                                        <svg
                                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Other Case Studies */}
            {rest.length > 0 && (
                <section className="py-16 px-6 lg:px-24 bg-dp-navy/5">
                    <div className="max-w-7xl mx-auto">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            The Archive
                        </p>
                        <h2 className="text-3xl font-light mb-10">
                            More Case Studies
                        </h2>
                        <div className="flex flex-col gap-8">
                            {rest.map((cs) => (
                                <Link
                                    key={cs.slug}
                                    href={`/case-studies/${cs.slug}`}
                                    className="group relative flex flex-col md:flex-row bg-white border border-dp-navy/15 rounded-xl overflow-hidden no-underline transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg"
                                >
                                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient z-10" />
                                    <div className="md:w-64 w-full h-48 md:h-auto overflow-hidden flex-shrink-0">
                                        <img
                                            src={cs.img}
                                            alt={cs.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col justify-center flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-xs font-medium px-3 py-1 rounded-full text-white bg-dp-magenta">
                                                {cs.category}
                                            </span>
                                            <span className="text-xs text-dp-navy/50">
                                                {cs.date} · {cs.readTime}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-semibold text-dp-navy mb-2">
                                            {cs.title}
                                        </h3>
                                        <p className="text-dp-navy/60 text-sm">{cs.subtitle}</p>
                                        <div className="mt-4 flex items-center gap-2 font-medium text-sm text-dp-magenta">
                                            Read Case Study
                                            <svg
                                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
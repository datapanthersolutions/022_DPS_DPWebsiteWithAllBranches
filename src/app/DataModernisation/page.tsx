"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DataModernisation() {

    const legacyIssues = [
        "Fragmented databases",
        "Legacy ERP/CRM systems",
        "Manual reporting workflows",
        "Siloed operational data",
        "Inconsistent and poor-quality data"
    ];

    const legacyResults = [
        "Slow decision-making",
        "Limited visibility",
        "Inefficient operations",
        "Inability to leverage AI effectively"
    ];

    const modernisationSupports = [
        "Advanced analytics",
        "Automation",
        "AI/ML applications",
        "Real-time business intelligence"
    ];

    const achieve = [
        {
            title: "Real-Time Business Insights",
            desc: "Move from delayed reports to live operational intelligence."
        },
        {
            title: "Unified Data Ecosystem",
            desc: "Integrate data across ERP, CRM, finance, operations, logistics, and customer systems."
        },
        {
            title: "AI-Ready Infrastructure",
            desc: "Build a foundation that enables predictive analytics, automation, and AI-driven decision making."
        },
        {
            title: "Scalable Digital Transformation",
            desc: "Future-proof your business with modern architecture built for scale."
        }
    ];

    const services = [
        {
            title: "Legacy System Transformation",
            desc: "Modernize outdated infrastructure and eliminate data silos.",
            points: [
                "Legacy database modernization",
                "Data architecture redesign",
                "System consolidation",
                "Cloud migration support"
            ],
            impact: "Faster access to information, lower maintenance costs, and improved operational agility."
        },
        {
            title: "Data Integration & Centralization",
            desc: "Connect disconnected systems into a unified data ecosystem.",
            points: [
                "ERP systems",
                "CRM platforms",
                "Finance systems",
                "Operational databases",
                "Third-party applications"
            ],
            impact: "A single source of truth with improved collaboration and better reporting accuracy."
        },
        {
            title: "Cloud Data Migration",
            desc: "Move from rigid legacy infrastructure to scalable cloud environments.",
            points: [
                "AWS",
                "Microsoft Azure",
                "Google Cloud"
            ],
            impact: "Scalability, improved performance, and reduced infrastructure overhead."
        },
        {
            title: "Data Warehousing & Lakehouse Solutions",
            desc: "Build centralized repositories for analytics and AI workloads.",
            points: [
                "Data lakes",
                "Lakehouse architecture",
                "Enterprise data warehouses",
                "Structured & unstructured data processing"
            ],
            impact: "Faster analytics, AI-ready datasets, and improved governance."
        },
        {
            title: "Business Intelligence & Analytics",
            desc: "Turn raw data into actionable business insights.",
            points: [
                "Executive dashboards",
                "Operational reporting",
                "KPI visualization",
                "Predictive analytics"
            ],
            impact: "Faster decisions, better forecasting, and real-time visibility."
        },
        {
            title: "AI & Predictive Intelligence Enablement",
            desc: "Prepare your organization for AI-powered operations.",
            points: [
                "Predictive analytics",
                "Intelligent automation",
                "AI copilots",
                "Machine learning workflows"
            ],
            impact: "Transform data from passive storage into active intelligence."
        },
        {
            title: "Data Governance & Quality Management",
            desc: "Ensure your data is secure, accurate, compliant, and trustworthy.",
            points: [
                "Data quality",
                "Master data management",
                "Compliance & governance",
                "Access control & security"
            ],
            impact: "Trustworthy, compliant data your teams can rely on."
        }
    ];

    const industries = [
        "Healthcare",
        "Real Estate",
        "Finance",
        "Logistics & Supply Chain",
        "Retail & E-commerce",
        "Manufacturing"
    ];

    const challenges = [
        {
            problem: "Data scattered across systems",
            solution: "We unify and centralize your data"
        },
        {
            problem: "Slow reporting & delayed decisions",
            solution: "We enable real-time analytics"
        },
        {
            problem: "Manual reporting workflows",
            solution: "We automate data processing"
        },
        {
            problem: "Legacy systems blocking innovation",
            solution: "We modernize infrastructure for AI readiness"
        },
        {
            problem: "Poor visibility into operations",
            solution: "We build intelligent dashboards and insights systems"
        }
    ];

    const transformation = [
        {
            step: "Data Assessment & Audit",
            desc: "Evaluate current infrastructure, workflows, and bottlenecks."
        },
        {
            step: "Architecture & Strategy Design",
            desc: "Design scalable, AI-ready data ecosystems."
        },
        {
            step: "Integration & Migration",
            desc: "Connect systems and modernize infrastructure."
        },
        {
            step: "Analytics & AI Enablement",
            desc: "Implement dashboards, predictive systems, and automation."
        },
        {
            step: "Optimization & Scaling",
            desc: "Continuously improve performance and intelligence capabilities."
        }
    ];

    const outcomes = [
        "Faster business decisions",
        "Improved operational efficiency",
        "Reduced manual work",
        "Better customer insights",
        "AI-ready infrastructure",
        "Scalable digital operations"
    ];

    const whyFocus = [
        "Business outcomes first",
        "AI-ready systems",
        "Scalable architecture",
        "Real operational impact"
    ];

    return (
        <main className="bg-white text-dp-navy">


            {/* HERO */}
            <section className="relative py-32 text-center overflow-hidden">
                {/* subtle brand glow */}
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-dp-magenta/10 blur-3xl pointer-events-none" />

                <div className="relative max-w-5xl mx-auto px-6">

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="uppercase tracking-[0.35em] text-sm mb-6 text-dp-magenta font-medium"
                    >
                        Data Modernisation
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-light leading-tight"
                    >
                        Data Modernisation
                        <span className="block font-semibold text-dp-gradient">
                            Transform Legacy Data Systems into Intelligent, AI-Ready
                            Infrastructure
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 text-lg leading-relaxed text-dp-navy/80"
                    >
                        Data Panther helps organizations modernize their data
                        infrastructure to unlock real-time insights, enable
                        AI-driven decision making, and support scalable
                        digital transformation.
                    </motion.p>

                </div>
            </section>



            {/* HERO IMAGE */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-xl overflow-hidden border border-dp-navy/15 shadow-sm"
                    >
                        <Image
                            src="/datamodernizationarchitecture.webp"
                            alt="Data modernization architecture"
                            width={1200}
                            height={700}
                            className="w-full object-cover"
                        />
                    </motion.div>

                </div>
            </section>



            {/* INTRO PARAGRAPH */}
            <section className="pb-24">
                <div className="max-w-4xl mx-auto px-6 text-center">

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-lg leading-relaxed text-dp-navy/80"
                    >
                        Data is one of the most valuable assets in modern
                        business—but for many organizations, it remains trapped
                        in outdated systems, disconnected silos, spreadsheets,
                        and legacy infrastructure. At Data Panther Solutions, we
                        help organizations modernize their data ecosystem to
                        unlock real-time visibility, AI-powered insights,
                        scalable digital transformation, and faster, smarter
                        decision-making.
                    </motion.p>

                </div>
            </section>



            {/* THE PROBLEM WITH LEGACY DATA SYSTEMS */}
            <section className="py-28 bg-dp-navy/5">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            The Challenge
                        </p>
                        <h2 className="text-4xl font-light">
                            The Problem with Legacy Data Systems
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative bg-white border border-dp-navy/15 rounded-xl p-10 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                            <h3 className="text-2xl font-semibold mb-6">
                                Many businesses still operate with
                            </h3>

                            <ul className="space-y-3">
                                {legacyIssues.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 leading-relaxed text-dp-navy/80">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dp-magenta shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative bg-white border border-dp-navy/15 rounded-xl p-10 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                            <h3 className="text-2xl font-semibold mb-6">
                                The result
                            </h3>

                            <ul className="space-y-3">
                                {legacyResults.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 leading-relaxed text-dp-navy/80">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dp-magenta shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                    </div>

                </div>

            </section>



            {/* WHAT IS DATA MODERNISATION */}
            <section className="py-28">

                <div className="max-w-5xl mx-auto px-6 text-center">

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-light mb-8"
                    >
                        What is Data Modernisation?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg leading-relaxed mb-12 text-dp-navy/80"
                    >
                        Data modernisation is the process of transforming
                        outdated data infrastructure into a scalable,
                        intelligent, cloud-ready ecosystem that supports:
                    </motion.p>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {modernisationSupports.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-white border border-dp-navy/15 rounded-xl p-6 text-lg overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                {item}
                            </motion.div>
                        ))}
                    </div>

                </div>

            </section>



            {/* WHY IT MATTERS */}
            <section className="py-28 bg-dp-navy/5">

                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-light mb-6">
                            Why Data Modernisation Matters
                        </h2>

                        <div className="w-16 h-1 bg-dp-magenta rounded-full mb-8" />

                        <p className="leading-relaxed mb-6 text-dp-navy/80">
                            Legacy data systems often limit the ability of
                            organizations to leverage advanced analytics,
                            machine learning, and real-time insights.
                        </p>

                        <p className="leading-relaxed text-dp-navy/80">
                            Data modernization enables enterprises to migrate
                            from outdated infrastructure to modern platforms
                            capable of supporting AI, automation, and
                            scalable analytics.
                        </p>

                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-xl overflow-hidden border border-dp-navy/15"
                    >
                        <Image
                            src="/moderndataplatform.webp"
                            alt="Modern data platform"
                            width={600}
                            height={400}
                            className="w-full object-cover"
                        />
                    </motion.div>

                </div>

            </section>



            {/* WHAT WE HELP YOU ACHIEVE */}
            <section className="py-28">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            The Outcome
                        </p>
                        <h2 className="text-4xl font-light">
                            What We Help You Achieve
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">

                        {achieve.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-white border border-dp-navy/15 rounded-xl p-10 overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                <h3 className="text-2xl font-semibold mb-3">
                                    {item.title}
                                </h3>

                                <p className="leading-relaxed text-dp-navy/80">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}

                    </div>

                </div>

            </section>



            {/* SERVICES */}
            <section className="py-28 bg-dp-navy/5">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            What We Do
                        </p>
                        <h2 className="text-4xl font-light">
                            Our Data Modernisation Services
                        </h2>
                    </div>


                    <div className="space-y-10">

                        {services.map((service, i) => (

                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-white border border-dp-navy/15 rounded-xl p-10 overflow-hidden flex flex-col md:flex-row md:items-start md:justify-between gap-8 transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />

                                <div className="max-w-2xl">
                                    <h3 className="text-2xl font-semibold mb-3">
                                        {service.title}
                                    </h3>

                                    <p className="leading-relaxed mb-6 text-dp-navy/80">
                                        {service.desc}
                                    </p>

                                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                                        {service.points.map((point, p) => (
                                            <li key={p} className="flex items-start gap-3 leading-relaxed text-dp-navy/80">
                                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dp-magenta shrink-0" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="leading-relaxed text-dp-navy/70">
                                        <span className="font-semibold text-dp-magenta">
                                            Business impact:{" "}
                                        </span>
                                        {service.impact}
                                    </p>
                                </div>

                                <div className="text-4xl font-semibold shrink-0 text-dp-gradient">
                                    0{i + 1}
                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>



            {/* INDUSTRIES WE SUPPORT */}
            <section className="py-28">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            Who We Serve
                        </p>
                        <h2 className="text-4xl font-light">
                            Industries We Support
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

                        {industries.map((industry, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-white border border-dp-navy/15 rounded-xl p-8 text-center text-lg font-semibold overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                {industry}
                            </motion.div>
                        ))}

                    </div>

                </div>

            </section>



            {/* COMMON BUSINESS CHALLENGES WE SOLVE */}
            <section className="py-28 bg-dp-gradient">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-white/70 font-medium">
                            Problem → Solution
                        </p>
                        <h2 className="text-4xl text-white font-light">
                            Common Business Challenges We Solve
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">

                        {challenges.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="border border-white/25 bg-white/10 backdrop-blur-sm rounded-xl p-10"
                            >
                                <p className="text-white/60 mb-4 leading-relaxed line-through decoration-white/30">
                                    {item.problem}
                                </p>

                                <p className="text-xl font-semibold leading-relaxed text-white">
                                    {item.solution}
                                </p>
                            </motion.div>
                        ))}

                    </div>

                </div>

            </section>



            {/* TRANSFORMATION TIMELINE */}
            <section className="py-28 bg-dp-navy/5">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            Our Process
                        </p>
                        <h2 className="text-4xl font-light">
                            Our Modernisation Approach
                        </h2>
                    </div>


                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">

                        {transformation.map((item, i) => (

                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-white border border-dp-navy/15 rounded-xl p-8 overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />

                                <div className="text-3xl font-semibold mb-4 text-dp-gradient">
                                    0{i + 1}
                                </div>

                                <p className="text-lg font-semibold mb-3">
                                    {item.step}
                                </p>

                                <p className="leading-relaxed text-dp-navy/70">
                                    {item.desc}
                                </p>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>



            {/* BUSINESS OUTCOMES */}
            <section className="py-28">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            The Results
                        </p>
                        <h2 className="text-4xl font-light">
                            Business Outcomes You Can Expect
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

                        {outcomes.map((outcome, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-white border border-dp-navy/15 rounded-xl p-8 text-lg overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                {outcome}
                            </motion.div>
                        ))}

                    </div>

                </div>

            </section>



            {/* WHY DATA PANTHER */}
            <section className="py-28 bg-dp-navy/5">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            Why Us
                        </p>
                        <h2 className="text-4xl font-light mb-6">
                            Why Data Panther Solutions?
                        </h2>

                        <p className="text-lg leading-relaxed max-w-3xl mx-auto text-dp-navy/80">
                            We don&apos;t just move data. We transform how your
                            business uses it.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

                        {whyFocus.map((focus, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-white border border-dp-navy/15 rounded-xl p-8 text-center text-lg font-semibold overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                {focus}
                            </motion.div>
                        ))}

                    </div>

                </div>

            </section>



            {/* CTA */}
            <section className="py-32 text-center bg-white">

                <div className="max-w-4xl mx-auto px-6">

                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-light mb-8"
                    >
                        Modernize Your Data Infrastructure
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg leading-relaxed mb-10 text-dp-navy/80"
                    >
                        Partner with Data Panther to transform legacy data
                        systems into modern intelligent platforms capable of
                        supporting AI, analytics, and scalable enterprise
                        operations.
                    </motion.p>

                    <button className="px-8 py-4 rounded-lg bg-dp-magenta text-white hover:bg-dp-magenta/90 transition">
                        Start Data Transformation
                    </button>

                </div>

            </section>


        </main>
    );
}
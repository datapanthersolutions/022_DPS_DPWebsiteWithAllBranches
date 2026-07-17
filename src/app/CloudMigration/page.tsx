"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CloudMigration() {

    const legacyIssues = [
        "High maintenance costs",
        "Limited scalability",
        "Security risks",
        "Slow deployments",
        "Data silos"
    ];

    const traditionalProblems = [
        "Performance bottlenecks",
        "Expensive hardware dependencies",
        "Limited flexibility",
        "Difficult integrations",
        "Slow digital transformation"
    ];

    const cloudEnables = [
        "Scale faster",
        "Improve operational agility",
        "Reduce infrastructure overhead",
        "Accelerate innovation"
    ];

    const whatMoves = [
        "Applications",
        "Data",
        "Infrastructure",
        "Workloads"
    ];

    const platforms = [
        "AWS",
        "Microsoft Azure",
        "Google Cloud Platform (GCP)"
    ];

    const services = [
        {
            title: "Cloud Readiness Assessment",
            desc: "Evaluate your current systems, workloads, dependencies, and migration feasibility.",
            label: "We assess",
            points: [
                "Infrastructure complexity",
                "Application dependencies",
                "Security requirements",
                "Performance bottlenecks",
                "Cost optimization opportunities"
            ]
        },
        {
            title: "Legacy Application Migration",
            desc: "Modernize and migrate outdated applications to cloud-native environments.",
            label: "Benefits",
            points: [
                "Improved scalability",
                "Better performance",
                "Faster deployments",
                "Reduced maintenance costs"
            ]
        },
        {
            title: "Data & Database Migration",
            desc: "Securely migrate structured and unstructured data to cloud environments.",
            label: "Migration support",
            points: [
                "SQL databases",
                "ERP systems",
                "CRM platforms",
                "Data warehouses",
                "File storage systems"
            ]
        },
        {
            title: "Hybrid & Multi-Cloud Architecture",
            desc: "Design flexible cloud ecosystems that balance performance, security, and scalability.",
            label: "Solutions",
            points: [
                "Hybrid cloud environments",
                "Multi-cloud orchestration",
                "Workload optimization",
                "Disaster recovery systems"
            ]
        },
        {
            title: "Cloud Security & Compliance",
            desc: "Protect sensitive business and customer data during and after migration.",
            label: "Focus areas",
            points: [
                "Access management",
                "Encryption",
                "Compliance frameworks",
                "Backup & disaster recovery",
                "Threat monitoring"
            ]
        },
        {
            title: "AI-Ready Cloud Infrastructure",
            desc: "Build scalable cloud ecosystems designed for intelligent operations.",
            label: "Built for",
            points: [
                "AI applications",
                "Predictive analytics",
                "Automation workflows",
                "Real-time intelligence systems"
            ]
        }
    ];

    const outcomes = [
        {
            title: "Scalability",
            desc: "Scale infrastructure based on business demand."
        },
        {
            title: "Lower Infrastructure Costs",
            desc: "Reduce hardware and maintenance overhead."
        },
        {
            title: "Faster Innovation",
            desc: "Deploy systems and applications rapidly."
        },
        {
            title: "Improved Security",
            desc: "Modern cloud security architecture and monitoring."
        },
        {
            title: "AI Enablement",
            desc: "Prepare infrastructure for future AI transformation."
        }
    ];

    const industries = [
        "Healthcare",
        "Finance",
        "Logistics",
        "Real Estate",
        "Retail & E-commerce",
        "Manufacturing"
    ];

    const process = [
        {
            step: "Assessment & Strategy",
            desc: "Evaluate systems, risks, and opportunities."
        },
        {
            step: "Migration Planning",
            desc: "Design migration roadmap with minimal disruption."
        },
        {
            step: "Migration Execution",
            desc: "Securely migrate applications, data, and workloads."
        },
        {
            step: "Optimization & Monitoring",
            desc: "Improve cloud performance, security, and cost efficiency."
        }
    ];

    const whyFocus = [
        "Modernize operations",
        "Build scalable infrastructure",
        "Enable AI-driven transformation"
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
                        Cloud Migration
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-light"
                    >
                        Cloud Migration
                        <span className="block font-semibold text-dp-gradient">
                            Move to Modern Infrastructure
                        </span>
                    </motion.h1>

                    <p className="mt-6 text-lg text-dp-navy/80">
                        Data Panther enables organizations to migrate
                        legacy systems to scalable, secure cloud platforms
                        that support modern applications and AI workloads.
                    </p>

                </div>

            </section>


            {/* HERO IMAGE */}
            <section className="pb-20 max-w-7xl mx-auto px-6">

                <div className="rounded-xl overflow-hidden border border-dp-navy/15 shadow-sm">
                    <Image
                        src="/cloud-migration.png"
                        alt="Cloud infrastructure"
                        width={1200}
                        height={600}
                        className="w-full object-cover"
                    />
                </div>

            </section>


            {/* INTRO — LEGACY SLOWS INNOVATION */}
            <section className="py-28 bg-dp-navy/5">

                <div className="max-w-5xl mx-auto px-6 text-center">

                    <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                        The Case for Change
                    </p>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-light mb-8"
                    >
                        Modernize Infrastructure. Improve Scalability.
                        <span className="block">Enable AI-Ready Operations.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg leading-relaxed mb-12 max-w-3xl mx-auto text-dp-navy/80"
                    >
                        Legacy infrastructure slows innovation. Outdated
                        on-premise systems create real barriers to growth. At
                        Data Panther Solutions, we help organizations migrate to
                        modern cloud environments that are scalable, secure,
                        cost-efficient, and ready for AI-driven operations.
                    </motion.p>

                    <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
                        {legacyIssues.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative border border-dp-navy/15 rounded-xl p-6 bg-white overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                {item}
                            </motion.div>
                        ))}
                    </div>

                </div>

            </section>


            {/* WHY BUSINESSES MOVE TO THE CLOUD */}
            <section className="py-28">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            The Shift
                        </p>
                        <h2 className="text-4xl font-light">
                            Why Businesses Move to the Cloud
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative border border-dp-navy/15 rounded-xl p-10 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                            <h3 className="text-2xl font-semibold mb-6">
                                Traditional infrastructure creates
                            </h3>

                            <ul className="space-y-3">
                                {traditionalProblems.map((item, i) => (
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
                            className="relative border border-dp-navy/15 rounded-xl p-10 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                            <h3 className="text-2xl font-semibold mb-6">
                                Cloud migration enables you to
                            </h3>

                            <ul className="space-y-3">
                                {cloudEnables.map((item, i) => (
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


            {/* WHAT IS CLOUD MIGRATION */}
            <section className="py-28 bg-dp-gradient">

                <div className="max-w-5xl mx-auto px-6 text-center">

                    <p className="uppercase tracking-[0.35em] text-xs mb-4 text-white/70 font-medium">
                        The Fundamentals
                    </p>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-light mb-8 text-white"
                    >
                        What is Cloud Migration?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg leading-relaxed mb-12 text-white/85"
                    >
                        Cloud migration is the process of moving applications,
                        data, infrastructure, and workloads from legacy or
                        on-premise systems to modern cloud environments.
                    </motion.p>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                        {whatMoves.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="border border-white/25 bg-white/10 backdrop-blur-sm rounded-xl p-6 text-lg text-white"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {platforms.map((item, i) => (
                            <span
                                key={i}
                                className="border border-white/40 text-white rounded-lg px-6 py-3 font-semibold"
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                </div>

            </section>


            {/* SERVICES */}
            <section className="py-28">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            What We Do
                        </p>
                        <h2 className="text-4xl font-light">
                            Our Cloud Migration Services
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

                                    <p className="font-semibold mb-3 text-dp-magenta">
                                        {service.label}
                                    </p>

                                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                                        {service.points.map((point, p) => (
                                            <li key={p} className="flex items-start gap-3 leading-relaxed text-dp-navy/80">
                                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dp-magenta shrink-0" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="text-4xl font-semibold shrink-0 text-dp-gradient">
                                    0{i + 1}
                                </div>

                            </motion.div>
                        ))}

                    </div>

                </div>

            </section>


            {/* BUSINESS OUTCOMES */}
            <section className="py-28 bg-dp-navy/5">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            The Results
                        </p>
                        <h2 className="text-4xl font-light">
                            Business Outcomes
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {outcomes.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative border border-dp-navy/15 rounded-xl p-8 bg-white overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                <h3 className="text-xl font-semibold mb-3">
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
                                className="group relative border border-dp-navy/15 rounded-xl p-8 text-center text-lg font-semibold overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                {industry}
                            </motion.div>
                        ))}

                    </div>

                </div>

            </section>


            {/* CLOUD MIGRATION PROCESS */}
            <section className="py-28 bg-dp-navy/5">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            Our Process
                        </p>
                        <h2 className="text-4xl font-light">
                            Our Cloud Migration Process
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-10 text-center">

                        {process.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative border border-dp-navy/15 rounded-xl p-8 bg-white overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
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


            {/* WHY DATA PANTHER */}
            <section className="py-28">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            Why Us
                        </p>
                        <h2 className="text-4xl font-light mb-6">
                            Why Data Panther Solutions?
                        </h2>

                        <p className="text-lg leading-relaxed max-w-3xl mx-auto text-dp-navy/80">
                            We don&apos;t just move systems to the cloud. We help
                            organizations modernize how they operate.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6">

                        {whyFocus.map((focus, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative border border-dp-navy/15 rounded-xl p-8 text-center text-lg font-semibold overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
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
                        Ready to Migrate to the Cloud?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg leading-relaxed mb-10 text-dp-navy/80"
                    >
                        Cloud migration is no longer optional for businesses that
                        want scalability, agility, AI readiness, and operational
                        resilience. Let&apos;s modernize your infrastructure for
                        the future.
                    </motion.p>

                    <button className="px-8 py-4 rounded-lg bg-dp-magenta text-white hover:bg-dp-magenta/90 transition">
                        Book a Cloud Migration Assessment
                    </button>

                </div>

            </section>

        </main>
    );
}
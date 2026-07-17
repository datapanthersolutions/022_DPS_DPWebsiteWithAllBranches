"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AIOps() {

    const capabilities = [
        {
            title: "Intelligent Monitoring",
            desc: "Use AI to monitor infrastructure, applications, and networks in real-time for proactive issue detection."
        },
        {
            title: "Automated Incident Response",
            desc: "Automatically detect anomalies and trigger corrective actions to minimize downtime."
        },
        {
            title: "Predictive Maintenance",
            desc: "Identify potential system failures before they occur using predictive analytics."
        },
        {
            title: "Root Cause Analysis",
            desc: "AI-powered analysis identifies the root cause of complex operational issues quickly."
        },
        {
            title: "Log & Event Correlation",
            desc: "Analyze massive volumes of logs and events to uncover patterns and operational insights."
        },
        {
            title: "Operational Automation",
            desc: "Automate repetitive IT operations tasks to increase efficiency and reduce manual effort."
        }
    ];

    const useCases = [
        "Infrastructure Monitoring",
        "Cloud Operations Optimization",
        "Incident Detection & Resolution",
        "Enterprise IT Automation"
    ];

    const process = [
        "Infrastructure Assessment",
        "AI Model Deployment",
        "Operational Integration",
        "Continuous Optimization"
    ];

    return (
        <main className="bg-white text-dp-navy">

            {/* HERO */}
            <section className="relative py-32 text-center overflow-hidden">
                {/* subtle brand glow */}
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-dp-magenta/10 blur-3xl pointer-events-none" />

                <div className="relative max-w-6xl mx-auto px-6">

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="uppercase tracking-[0.35em] text-sm mb-6 text-dp-magenta font-medium"
                    >
                        AIOps
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-light leading-tight"
                    >
                        AIOps
                        <span className="block font-semibold text-dp-gradient">
                            Intelligent IT Operations
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 text-lg max-w-3xl mx-auto text-dp-navy/80"
                    >
                        Data Panther leverages Artificial Intelligence for IT Operations
                        to transform how organizations manage infrastructure, monitor
                        systems, and resolve operational issues with speed and precision.
                    </motion.p>

                    <div className="mt-14 rounded-xl overflow-hidden border border-dp-navy/15 shadow-sm">
                        <Image
                            src="/aiop.png"
                            alt="AIOps monitoring"
                            width={1200}
                            height={700}
                            className="w-full object-cover"
                        />
                    </div>

                </div>
            </section>


            {/* WHAT IS AIOPS */}
            <section className="py-28">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-light mb-6">
                            What is AIOps?
                        </h2>

                        <div className="w-16 h-1 bg-dp-magenta rounded-full mb-8" />

                        <p className="leading-relaxed mb-6 text-dp-navy/80">
                            AIOps combines artificial intelligence and machine learning
                            with IT operations to automatically detect, analyze, and
                            resolve operational issues across complex digital
                            infrastructures.
                        </p>

                        <p className="leading-relaxed text-dp-navy/80">
                            By analyzing massive volumes of logs, metrics, and events,
                            AIOps platforms help organizations maintain high system
                            availability, reduce downtime, and improve operational
                            efficiency.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-xl overflow-hidden border border-dp-navy/15"
                    >
                        <Image
                            src="/aiopdashboard.png"
                            alt="AI IT operations dashboard"
                            width={700}
                            height={500}
                            className="w-full object-cover"
                        />
                    </motion.div>

                </div>
            </section>


            {/* CAPABILITIES */}
            <section className="py-28">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            What We Build
                        </p>
                        <h2 className="text-4xl font-light">
                            AIOps Capabilities
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">

                        {capabilities.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-white border border-dp-navy/15 p-10 rounded-xl overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                {/* gradient top edge */}
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />

                                <h3 className="text-2xl font-semibold mb-4">
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


            {/* USE CASES */}
            <section className="py-28 bg-dp-gradient">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-white/70 font-medium">
                            Where It Applies
                        </p>
                        <h2 className="text-4xl text-white font-light">
                            Industry Applications
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-10 text-center">

                        {useCases.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="border border-white/25 bg-white/10 backdrop-blur-sm p-8 rounded-xl"
                            >
                                <div className="text-3xl text-white font-semibold mb-4">
                                    0{i + 1}
                                </div>

                                <p className="text-lg text-white/90">
                                    {item}
                                </p>

                            </motion.div>
                        ))}

                    </div>

                </div>

            </section>


            {/* IMPLEMENTATION PROCESS */}
            <section className="py-28">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            How We Deliver
                        </p>
                        <h2 className="text-4xl font-light">
                            Our Implementation Approach
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-10 text-center">

                        {process.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-white border border-dp-navy/15 p-8 rounded-xl overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                {/* gradient top edge */}
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />

                                <div className="text-3xl font-semibold mb-4 text-dp-gradient">
                                    0{i + 1}
                                </div>

                                <p className="text-lg text-dp-navy/80">
                                    {step}
                                </p>

                            </motion.div>
                        ))}

                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="relative py-32 text-center overflow-hidden">

                <div className="relative max-w-4xl mx-auto px-6">

                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-light mb-8 text-dp-navy"
                    >
                        Transform Your IT Operations
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg leading-relaxed mb-10 text-dp-navy/85"
                    >
                        Partner with Data Panther to implement AI-driven
                        operational intelligence that enhances reliability,
                        reduces downtime, and optimizes enterprise IT systems.
                    </motion.p>

                    <button className="px-8 py-4 rounded-lg bg-dp-magenta text-white font-medium hover:bg-dp-magenta/90 transition">
                        Explore AIOps Solutions
                    </button>

                </div>

            </section>

        </main>
    );
}
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ITSupport() {

    const supportServices = [
        {
            title: "24/7 Infrastructure Monitoring",
            desc: "Round-the-clock monitoring of servers, networks, and systems to catch issues before they cause downtime."
        },
        {
            title: "Technical Helpdesk",
            desc: "Responsive multi-channel support for employees and end users, with clear SLAs and fast resolution."
        },
        {
            title: "System Maintenance",
            desc: "Proactive patching, updates, and performance tuning that keep your systems stable and secure."
        },
        {
            title: "Network Support",
            desc: "Configuration, troubleshooting, and optimization across wired, wireless, and cloud networks."
        }
    ];

    const coverage = [
        {
            title: "End-User Support",
            desc: "Desktop, laptop, mobile, and application support for your entire workforce."
        },
        {
            title: "Server & Infrastructure",
            desc: "Management of physical, virtual, and cloud server environments."
        },
        {
            title: "Security & Compliance",
            desc: "Patch management, access control, and adherence to industry standards."
        },
        {
            title: "Backup & Recovery",
            desc: "Automated backups and tested disaster-recovery procedures."
        },
        {
            title: "Cloud & SaaS Support",
            desc: "Administration of Microsoft 365, Google Workspace, and cloud platforms."
        },
        {
            title: "Asset & License Management",
            desc: "Tracking hardware, software licenses, and renewals across the organization."
        }
    ];

    const whyPoints = [
        "Reduced downtime and faster issue resolution",
        "Predictable IT costs and better budgeting",
        "Stronger security and compliance posture",
        "Scalable support that grows with your business"
    ];

    const process = [
        {
            step: "Assessment",
            desc: "Review your current infrastructure, tools, and support gaps."
        },
        {
            step: "Onboarding",
            desc: "Set up monitoring, documentation, and support workflows."
        },
        {
            step: "Active Support",
            desc: "Deliver responsive helpdesk and proactive maintenance."
        },
        {
            step: "Continuous Improvement",
            desc: "Optimize performance, security, and cost over time."
        }
    ];

    const outcomes = [
        {
            title: "Higher Uptime",
            desc: "Keep systems and teams running without interruption."
        },
        {
            title: "Faster Resolution",
            desc: "Resolve issues quickly with clear escalation paths."
        },
        {
            title: "Lower Operational Risk",
            desc: "Stay secure, backed up, and compliant."
        }
    ];

    return (
        <main className="bg-white text-dp-navy">

            {/* HERO */}
            <section className="relative py-28 overflow-hidden">
                {/* subtle brand glow */}
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-dp-magenta/10 blur-3xl pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <p className="uppercase tracking-[0.35em] text-sm mb-6 text-dp-magenta font-medium">
                            IT Support
                        </p>

                        <h1 className="text-5xl font-light">
                            IT Support
                            <span className="block font-semibold text-dp-gradient">
                                Reliable Technology Operations
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-dp-navy/80">
                            Data Panther provides enterprise-grade IT support
                            services that ensure infrastructure stability,
                            system performance, and uninterrupted operations.
                        </p>

                        <button className="mt-10 px-8 py-4 rounded-lg bg-dp-magenta text-white hover:bg-dp-magenta/90 transition">
                            Talk to Our Team
                        </button>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="rounded-xl overflow-hidden border border-dp-navy/15"
                    >
                        <Image
                            src="/ITSupportService.png"
                            alt="IT support services"
                            width={700}
                            height={500}
                            className="w-full object-cover"
                        />
                    </motion.div>

                </div>
            </section>


            {/* CORE SERVICES */}
            <section className="py-28 bg-dp-navy/5">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            What We Provide
                        </p>
                        <h2 className="text-4xl font-light">
                            Core Support Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                        {supportServices.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-white border border-dp-navy/15 p-8 rounded-xl overflow-hidden text-center transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />

                                <div className="text-3xl font-semibold mb-4 text-dp-gradient">
                                    0{i + 1}
                                </div>

                                <h3 className="text-lg font-semibold mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-sm leading-relaxed text-dp-navy/80">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}

                    </div>

                </div>

            </section>


            {/* WHAT WE COVER */}
            <section className="py-28">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            Full Coverage
                        </p>
                        <h2 className="text-4xl font-light">
                            What We Cover
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

                        {coverage.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-white border border-dp-navy/15 p-10 rounded-xl overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
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


            {/* WHY IT MATTERS */}
            <section className="py-28 bg-dp-gradient">

                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-white/70 font-medium">
                            Why It Matters
                        </p>
                        <h2 className="text-4xl text-white font-light mb-6">
                            Support That Keeps Business Moving
                        </h2>

                        <div className="w-16 h-1 bg-white/60 rounded-full mb-8" />

                        <p className="leading-relaxed text-white/90">
                            Reliable IT support is the difference between minor
                            hiccups and costly disruptions. We keep your systems
                            stable so your teams stay productive and your
                            operations stay uninterrupted.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="border border-white/25 bg-white/10 backdrop-blur-sm rounded-xl p-10"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            What you gain
                        </h3>

                        <ul className="space-y-4 text-lg text-white/90">
                            {whyPoints.map((point, i) => (
                                <li key={i} className="flex items-start gap-3 leading-relaxed">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70 shrink-0" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>

            </section>


            {/* PROCESS */}
            <section className="py-28 bg-dp-navy/5">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            Our Process
                        </p>
                        <h2 className="text-4xl font-light">
                            How We Work With You
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-10 text-center">

                        {process.map((item, i) => (
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


            {/* OUTCOMES */}
            <section className="py-28">

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
                                className="group relative bg-white border border-dp-navy/15 rounded-xl p-8 overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
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


            {/* CTA */}
            <section className="py-32 text-center bg-white">

                <div className="max-w-4xl mx-auto px-6">

                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-light mb-8"
                    >
                        Keep Your Operations Running
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg leading-relaxed mb-10 text-dp-navy/80"
                    >
                        Partner with Data Panther for dependable, proactive IT
                        support that keeps your infrastructure stable and your
                        teams productive.
                    </motion.p>

                    <button className="px-8 py-4 rounded-lg bg-dp-magenta text-white hover:bg-dp-magenta/90 transition">
                        Get IT Support
                    </button>

                </div>

            </section>

        </main>
    );
}
"use client";

import { motion } from "framer-motion";

export default function RiskManagement() {
    const capabilities = [
        {
            title: "Predictive Risk Modeling",
            desc: "Advanced ML models to anticipate market shifts, credit risks, and operational vulnerabilities before they escalate."
        },
        {
            title: "Real-time Fraud Prevention",
            desc: "Continuous monitoring of transaction and user behavior to detect and block malicious activity with millisecond precision."
        },
        {
            title: "Automated Regulatory Compliance",
            desc: "Streamlining legal and industrial reporting through AI-driven automated document processing and auditing."
        },
        {
            title: "Infrastructure Threat Analysis",
            desc: "Protecting critical digital assets through AIOps-driven vulnerability detection and automated response."
        }
    ];

    return (
        <main className="bg-white text-dp-navy">

            {/* HERO SECTION */}
            <section className="relative py-32 bg-dp-gradient text-white overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-white/70 uppercase tracking-widest text-sm mb-4 font-medium">Business Solutions</p>
                        <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8">
                            Risk <span className="font-semibold text-white">Management</span>
                        </h1>
                        <p className="text-xl text-white/85 leading-relaxed max-w-xl">
                            Building resilient organisations through predictive intelligence, millisecond fraud detection,
                            and automated compliance ecosystems.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="/riskmanagementai.png"
                            alt="Risk Management AI"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* OVERVIEW SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">Overview</p>
                    <h2 className="text-4xl font-light mb-8">Stability in a Changing World</h2>
                    <p className="text-lg text-dp-navy/70 leading-relaxed italic">
                        "Risk is inherent, but vulnerability is optional. We build the intelligent shields that allow
                        global enterprises to navigate uncertainty with absolute confidence."
                    </p>
                </div>
            </section>

            {/* CAPABILITIES SECTION */}
            <section className="py-24 bg-dp-navy/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">What We Do</p>
                        <h2 className="text-4xl font-light">Predictive Protection</h2>
                        <div className="h-1 w-20 bg-dp-magenta rounded-full mx-auto mt-4"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {capabilities.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-white p-10 rounded-xl border border-dp-navy/15 overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                <h3 className="text-2xl font-semibold mb-4 text-dp-navy">{item.title}</h3>
                                <p className="text-dp-navy/80 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl font-light mb-8">Secure Your Enterprise Today</h2>
                    <p className="text-xl text-dp-navy/80 mb-12 font-light">
                        Let's discuss how our predictive risk modeling and fraud prevention can protect your business operations.
                    </p>
                    <a
                        href="/ContactUs"
                        className="inline-block px-10 py-4 rounded-lg font-medium text-lg bg-dp-magenta text-white hover:bg-dp-magenta/90 transition-all"
                    >
                        Consult Our Risk Strategists
                    </a>
                </div>
            </section>

        </main>
    );
}
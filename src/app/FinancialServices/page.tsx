"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FinancialServices() {
    const capabilities = [
        {
            title: "Digital Banking Transformation",
            desc: "Modernising legacy banking infrastructure with cloud-native solutions and API-first architectures."
        },
        {
            title: "AI-Powered Fraud Detection",
            desc: "Real-time monitoring and predictive analytics to identify and prevent sophisticated financial crimes."
        },
        {
            title: "Regulatory Compliance (RegTech)",
            desc: "Automating compliance workflows and reporting to meet evolving global financial regulations."
        },
        {
            title: "Wealth Management Analytics",
            desc: "Data-driven insights to provide personalised investment strategies and enhance client portfolios."
        }
    ];

    return (
        <main className="bg-white text-dp-navy">

            {/* HERO SECTION */}
            <section className="relative py-32 overflow-hidden bg-dp-gradient text-white">
                <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-white/70 uppercase tracking-widest text-sm mb-4 font-medium">Industries</p>
                        <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8">
                            Financial <span className="font-semibold text-white">Services</span>
                        </h1>
                        <p className="text-xl text-white/85 leading-relaxed max-w-xl">
                            Driving the future of banking and finance through intelligent automation,
                            secure data ecosystems, and cloud-native modernisation.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?w=800&q=80"
                            alt="Financial Services"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* OVERVIEW SECTION */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                        Overview
                    </p>
                    <h2 className="text-4xl font-light mb-8">Accelerating Digital Finance</h2>
                    <p className="text-lg text-dp-navy/70 leading-relaxed italic">
                        "The financial sector is undergoing a massive shift. Institutions that embrace AI and cloud
                        modernisation today will lead the market tomorrow. Data Panther is the catalyst for that change."
                    </p>
                </div>
            </section>

            {/* CAPABILITIES SECTION */}
            <section className="py-24 bg-dp-navy/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            What We Do
                        </p>
                        <h2 className="text-4xl font-light">Our Specialisations</h2>
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

            {/* CALL TO ACTION */}
            <section className="py-32 bg-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl font-light mb-8">Ready to Transform Your Financial Ecosystem?</h2>
                    <p className="text-xl text-dp-navy/80 mb-12 font-light">
                        Let's discuss how our AI-driven solutions can drive efficiency and security for your institution.
                    </p>
                    <a
                        href="/ContactUs"
                        className="inline-block px-10 py-4 rounded-lg font-medium text-lg bg-dp-magenta text-white hover:bg-dp-magenta/90 transition-all"
                    >
                        Contact Our Experts
                    </a>
                </div>
            </section>

        </main>
    );
}
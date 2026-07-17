"use client";

import { motion } from "framer-motion";

export default function Sustainability() {
    const capabilities = [
        {
            title: "Green IT Infrastructure",
            desc: "Optimising cloud and on-premise infrastructure for minimum energy consumption and carbon footprint."
        },
        {
            title: "ESG Data Automation",
            desc: "Automating the collection and reporting of Environmental, Social, and Governance metrics through AI-driven pipelines."
        },
        {
            title: "Sustainable Supply Chain AI",
            desc: "Predictive modeling to ensure ethical sourcing and reduced logistical waste in your global supply network."
        },
        {
            title: "Predictive Energy Management",
            desc: "Using AI to forecast and optimize energy usage across corporate and industrial facilities."
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
                            Sustainable <span className="font-semibold text-white">Technology</span>
                        </h1>
                        <p className="text-xl text-white/85 leading-relaxed max-w-xl">
                            Driving the future of green enterprise through ESG data automation,
                            energy-efficient infrastructure, and intelligent supply chain waste reduction.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
                            alt="Sustainability AI"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* OVERVIEW SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">Overview</p>
                    <h2 className="text-4xl font-light mb-8">Intelligence for a Greener Future</h2>
                    <p className="text-lg text-dp-navy/70 leading-relaxed italic">
                        "Technology is the key to sustainability. We build the intelligence that allows
                        organisations to thrive while minimizing their environmental impact through precision analytics."
                    </p>
                </div>
            </section>

            {/* CAPABILITIES SECTION */}
            <section className="py-24 bg-dp-navy/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">What We Do</p>
                        <h2 className="text-4xl font-light">ESG Mastery through AI</h2>
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
                    <h2 className="text-4xl font-light mb-8">Ready to Build a Greener Enterprise?</h2>
                    <p className="text-xl text-dp-navy/80 mb-12 font-light">
                        Let's discuss how our sustainability analytics can drive both environmental and operational efficiency.
                    </p>
                    <a
                        href="/ContactUs"
                        className="inline-block px-10 py-4 rounded-lg font-medium text-lg bg-dp-magenta text-white hover:bg-dp-magenta/90 transition-all"
                    >
                        Consult Our Sustainability Experts
                    </a>
                </div>
            </section>

        </main>
    );
}
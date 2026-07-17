"use client";

import { motion } from "framer-motion";

export default function CustomerExperience() {
    const capabilities = [
        {
            title: "Conversational AI Assistants",
            desc: "24/7 intelligent support agents that understand context and resolve customer queries with human-like accuracy."
        },
        {
            title: "Hyper-Personalised Campaigns",
            desc: "Using predictive analytics to deliver the right message to the right customer at the right time."
        },
        {
            title: "Customer Sentiment Analysis",
            desc: "Monitoring social, support, and review channels in real-time to sense and respond to market needs."
        },
        {
            title: "AI-Driven Loyalty Programs",
            desc: "Building deeper engagement through data-driven reward systems that increase customer lifetime value."
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
                            Customer <span className="font-semibold text-white">Experience (CX)</span>
                        </h1>
                        <p className="text-xl text-white/85 leading-relaxed max-w-xl">
                            Redefining the digital journey through intelligent personalisation,
                            automated support, and deep customer sentiment insights.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="https://projectsnco.com/wp-content/uploads/2024/10/Customer-Experience-Transformation.jpg"
                            alt="Customer Experience AI"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* OVERVIEW SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">Overview</p>
                    <h2 className="text-4xl font-light mb-8">Engaging the Digital Customer</h2>
                    <p className="text-lg text-dp-navy/70 leading-relaxed italic">
                        "CX is no longer a department; it's a data-driven strategy. We build the interfaces and intelligence
                        that allow brands to build lasting, human-centric relationships at scale."
                    </p>
                </div>
            </section>

            {/* CAPABILITIES SECTION */}
            <section className="py-24 bg-dp-navy/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">What We Do</p>
                        <h2 className="text-4xl font-light">Intelligent Engagement</h2>
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
                    <h2 className="text-4xl font-light mb-8">Elevate Your Customer Journey Today</h2>
                    <p className="text-xl text-dp-navy/80 mb-12 font-light">
                        Discover how our AI-driven personalisation can transform your customer engagement strategy.
                    </p>
                    <a
                        href="/ContactUs"
                        className="inline-block px-10 py-4 rounded-lg font-medium text-lg bg-dp-magenta text-white hover:bg-dp-magenta/90 transition-all"
                    >
                        Consult Our CX Experts
                    </a>
                </div>
            </section>

        </main>
    );
}
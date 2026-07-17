"use client";

import { motion } from "framer-motion";

export default function Investors() {
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
                        Investors
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-6xl font-light leading-tight"
                    >
                        Supporting Innovation
                        <span className="block font-semibold text-dp-gradient">
                            Behind Data Panther
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 text-lg max-w-3xl mx-auto leading-relaxed text-dp-navy/80"
                    >
                        Data Panther is backed by visionary investors who believe
                        in the transformative power of artificial intelligence.
                        Their support enables us to push the boundaries of
                        intelligent technologies and build solutions that shape
                        the future of modern enterprises.
                    </motion.p>

                </div>
            </section>


            {/* INVESTMENT PHILOSOPHY */}
            <section className="py-28 bg-dp-gradient">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl text-white font-light mb-6">
                            Our Investment Philosophy
                        </h2>

                        <div className="w-16 h-1 bg-white/60 rounded-full mb-8" />

                        <p className="leading-relaxed text-white/90 mb-6">
                            We collaborate with investors who share our belief in
                            responsible innovation and long-term technological impact.
                        </p>

                        <p className="leading-relaxed text-white/90">
                            Together, we focus on building intelligent systems
                            that help organizations transform data into actionable
                            intelligence and sustainable growth.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="border border-white/25 bg-white/10 backdrop-blur-sm rounded-xl p-10"
                    >
                        <h3 className="text-2xl text-white font-semibold mb-6">
                            What Drives Our Investors
                        </h3>

                        <ul className="space-y-4 text-lg text-white/90">
                            <li>• Commitment to AI-driven innovation</li>
                            <li>• Long-term technological impact</li>
                            <li>• Scalable and intelligent solutions</li>
                            <li>• Sustainable business transformation</li>
                        </ul>
                    </motion.div>

                </div>
            </section>


            {/* VALUE CREATION */}
            <section className="py-28">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            Why Invest
                        </p>
                        <h2 className="text-4xl font-light">
                            Creating Long-Term Value
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">

                        {[
                            {
                                title: "AI Innovation",
                                desc: "Continuous development of advanced artificial intelligence technologies that redefine how organizations use data."
                            },
                            {
                                title: "Enterprise Solutions",
                                desc: "Delivering scalable platforms and intelligent systems that empower modern businesses."
                            },
                            {
                                title: "Global Impact",
                                desc: "Building technologies that influence industries and accelerate digital transformation worldwide."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-white border border-dp-navy/15 rounded-xl p-10 overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
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


            {/* GROWTH VISION */}
            <section className="py-28 bg-dp-navy/5">
                <div className="max-w-5xl mx-auto text-center px-6">

                    <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                        Looking Ahead
                    </p>

                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-light mb-10"
                    >
                        Our Growth Vision
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg leading-relaxed text-dp-navy/80"
                    >
                        With the support of forward-thinking investors,
                        Data Panther continues to expand its capabilities
                        in artificial intelligence, machine learning,
                        and advanced analytics. Our focus remains on
                        creating intelligent platforms that transform
                        how organizations operate in a data-driven world.
                    </motion.p>

                </div>
            </section>


            {/* CTA */}
            <section className="py-32 text-center">
                <div className="max-w-4xl mx-auto px-6">

                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-light mb-8"
                    >
                        Investor Relations
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg leading-relaxed mb-10 text-dp-navy/80"
                    >
                        For partnership opportunities or investor
                        inquiries, connect with our team to explore
                        how Data Panther is shaping the future
                        of artificial intelligence.
                    </motion.p>

                    <button className="px-8 py-4 rounded-lg bg-dp-magenta text-white hover:bg-dp-magenta/90 transition">
                        Contact Investor Relations
                    </button>

                </div>
            </section>

        </main>
    );
}
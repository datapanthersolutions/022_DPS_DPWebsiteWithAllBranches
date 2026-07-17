"use client";

import { motion } from "framer-motion";

export default function Partners() {
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
                        Strategic Partnerships
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-6xl font-light leading-tight"
                    >
                        Building Intelligence
                        <span className="block font-semibold text-dp-gradient">
                            Through Collaboration
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 text-lg max-w-3xl mx-auto leading-relaxed text-dp-navy/80"
                    >
                        At Data Panther, innovation is never built in isolation.
                        We collaborate with forward-thinking organizations,
                        technology providers, and research communities to
                        develop intelligent solutions that drive real-world impact.
                    </motion.p>

                </div>
            </section>


            {/* COLLABORATION PHILOSOPHY */}
            <section className="py-28 bg-dp-gradient">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl text-white font-light mb-6">
                            Our Partnership Philosophy
                        </h2>

                        <div className="w-16 h-1 bg-white/60 rounded-full mb-8" />

                        <p className="leading-relaxed text-white/90 mb-6">
                            We believe that the most impactful innovations emerge
                            when diverse expertise comes together.
                        </p>

                        <p className="leading-relaxed text-white/90">
                            Data Panther works alongside organizations across
                            industries to develop AI-powered systems that transform
                            data into strategic intelligence. Through collaboration,
                            we accelerate innovation and create solutions that
                            redefine how businesses operate.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="border border-white/25 bg-white/10 backdrop-blur-sm rounded-xl p-10"
                    >
                        <h3 className="text-2xl text-white font-semibold mb-6">
                            What We Value in Partnerships
                        </h3>

                        <ul className="space-y-4 text-lg text-white/90">
                            <li>• Shared vision for innovation</li>
                            <li>• Commitment to technological advancement</li>
                            <li>• Long-term strategic collaboration</li>
                            <li>• Ethical and responsible AI development</li>
                        </ul>
                    </motion.div>

                </div>
            </section>


            {/* PARTNERSHIP ECOSYSTEM */}
            <section className="py-28">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            Who We Work With
                        </p>
                        <h2 className="text-4xl font-light">
                            Our Partnership Ecosystem
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">

                        {[
                            {
                                title: "Technology Partners",
                                desc: "Collaborating with leading technology providers to build scalable AI infrastructure and advanced analytics platforms."
                            },
                            {
                                title: "Enterprise Collaborations",
                                desc: "Working with global organizations to design intelligent systems that transform operational efficiency."
                            },
                            {
                                title: "Research Alliances",
                                desc: "Partnering with research communities and innovation labs to explore the future of artificial intelligence."
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


            {/* PARTNERSHIP PROCESS */}
            <section className="py-28 bg-dp-navy/5">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            Our Process
                        </p>
                        <h2 className="text-4xl font-light">
                            How We Work Together
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-10">

                        {[
                            "Strategic Alignment",
                            "Innovation Planning",
                            "Technology Integration",
                            "Long-Term Growth"
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group bg-white border border-dp-navy/15 rounded-xl p-8 text-center transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
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
            <section className="py-32 text-center">
                <div className="max-w-4xl mx-auto px-6">

                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-light mb-8"
                    >
                        Partner With Data Panther
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg leading-relaxed mb-10 text-dp-navy/80"
                    >
                        We are always looking to collaborate with organizations
                        that share our vision of building intelligent systems
                        and transforming industries through data.
                    </motion.p>

                    <button className="px-8 py-4 rounded-lg bg-dp-magenta text-white hover:bg-dp-magenta/90 transition">
                        Become a Partner
                    </button>

                </div>
            </section>

        </main>
    );
}
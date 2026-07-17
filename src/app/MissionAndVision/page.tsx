"use client";

import { motion } from "framer-motion";

export default function MissionVision() {
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
                        transition={{ duration: 0.6 }}
                        className="uppercase tracking-[0.35em] text-sm mb-6 text-dp-magenta font-medium"
                    >
                        Mission & Vision
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-6xl font-light leading-tight"
                    >
                        Shaping the Future
                        <span className="block font-semibold text-dp-gradient">
                            With Intelligent Systems
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 text-lg leading-relaxed max-w-3xl mx-auto text-dp-navy/80"
                    >
                        At Data Panther, we believe intelligence should be embedded
                        into every business decision. Our mission and vision guide us
                        toward building AI-powered solutions that redefine how
                        organizations operate and innovate.
                    </motion.p>

                </div>
            </section>


            {/* MISSION */}
            <section className="py-28 bg-dp-gradient">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl text-white font-light mb-8">
                            Our Mission
                        </h2>

                        <div className="w-16 h-1 bg-white/60 rounded-full mb-8" />

                        <p className="text-lg text-white/90 leading-relaxed mb-6">
                            Our mission is to empower organizations with
                            intelligent technologies that transform raw data into
                            actionable insights.
                        </p>

                        <p className="leading-relaxed text-white/90">
                            Through advanced artificial intelligence, machine
                            learning, and predictive analytics, we help businesses
                            automate processes, anticipate trends, and make
                            smarter decisions that drive sustainable growth.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="border border-white/25 bg-white/10 backdrop-blur-sm rounded-xl p-10"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            What We Aim To Do
                        </h3>

                        <ul className="space-y-4 text-lg text-white/90">
                            <li>• Transform complex data into intelligent insights</li>
                            <li>• Enable automation through AI-driven systems</li>
                            <li>• Help organizations make predictive decisions</li>
                            <li>• Build scalable AI platforms for the future</li>
                        </ul>
                    </motion.div>

                </div>
            </section>


            {/* VISION */}
            <section className="py-28">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative bg-white border border-dp-navy/15 rounded-xl p-10 overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                    >
                        {/* gradient top edge */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />

                        <h3 className="text-2xl font-semibold mb-6">
                            Our Long-Term Vision
                        </h3>

                        <p className="leading-relaxed text-dp-navy/80">
                            We envision a world where intelligent systems
                            seamlessly collaborate with humans to unlock new
                            possibilities, accelerate innovation, and solve
                            global challenges.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-light mb-8">
                            Our Vision
                        </h2>

                        <div className="w-16 h-1 bg-dp-magenta rounded-full mb-8" />

                        <p className="text-lg leading-relaxed mb-6 text-dp-navy/80">
                            Our vision is to become a global leader in
                            artificial intelligence solutions, enabling
                            businesses to unlock the full potential of
                            their data.
                        </p>

                        <p className="leading-relaxed text-dp-navy/80">
                            By combining innovation, research, and
                            cutting-edge technology, Data Panther aims
                            to shape a future where AI drives smarter
                            industries and more efficient systems.
                        </p>
                    </motion.div>

                </div>
            </section>


            {/* STRATEGIC PILLARS */}
            <section className="py-28 bg-dp-navy/5">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            What We Stand On
                        </p>
                        <h2 className="text-4xl font-light">
                            Our Strategic Pillars
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">

                        {[
                            {
                                title: "Innovation",
                                desc: "Continuously advancing AI research and developing next-generation intelligent technologies."
                            },
                            {
                                title: "Impact",
                                desc: "Delivering measurable value by transforming business data into strategic intelligence."
                            },
                            {
                                title: "Scalability",
                                desc: "Designing AI systems that grow with organizations and adapt to evolving challenges."
                            }
                        ].map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="group relative bg-white border border-dp-navy/15 p-10 rounded-xl overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                {/* gradient top edge */}
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />

                                <h3 className="text-2xl font-semibold mb-4">
                                    {pillar.title}
                                </h3>

                                <p className="leading-relaxed text-dp-navy/80">
                                    {pillar.desc}
                                </p>
                            </motion.div>
                        ))}

                    </div>

                </div>
            </section>


            {/* CLOSING */}
            <section className="relative py-32 text-center  overflow-hidden">
                <div className="relative max-w-4xl mx-auto px-6">

                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-light mb-8 text-dp-navy"
                    >
                        Driving the Next Era of Intelligence
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg leading-relaxed text-dp-navy/80"
                    >
                        Data Panther is committed to pushing the boundaries of
                        artificial intelligence and enabling organizations to
                        unlock the full power of their data. Our mission and
                        vision guide us toward building a smarter and more
                        intelligent future.
                    </motion.p>

                </div>
            </section>

        </main>
    );
}
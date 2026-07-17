"use client";

import { motion } from "framer-motion";

const leaders = [
    {
        name: "Alex Carter",
        role: "Chief Executive Officer",
        desc: "Visionary leader driving Data Panther's mission to transform industries through intelligent data solutions."
    },
    {
        name: "Sophia Lin",
        role: "Chief Technology Officer",
        desc: "Leads AI innovation, building scalable machine learning systems that power enterprise transformation."
    },
    {
        name: "Daniel Brooks",
        role: "Head of AI Research",
        desc: "Oversees development of advanced algorithms and predictive intelligence frameworks."
    },
    {
        name: "Maya Rodriguez",
        role: "Director of Data Strategy",
        desc: "Specializes in translating complex data ecosystems into strategic business insights."
    }
];

export default function Leadership() {
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
                        Leadership
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-6xl font-light leading-tight"
                    >
                        The Minds Behind
                        <span className="block font-semibold text-dp-gradient">Data Panther</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 text-lg max-w-3xl mx-auto leading-relaxed text-dp-navy/80"
                    >
                        Our leadership team brings together deep expertise in artificial
                        intelligence, data science, and enterprise transformation.
                        Together, they guide Data Panther in building intelligent
                        technologies that shape the future of modern businesses.
                    </motion.p>

                </div>
            </section>


            {/* FOUNDER SPOTLIGHT */}
            <section className="py-28 bg-dp-navy/5">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative w-72 h-72 rounded-xl bg-dp-gradient flex items-center justify-center text-white/90 text-lg overflow-hidden shadow-lg"
                    >
                        Founder Image
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-light mb-6">
                            Message from Our Founder
                        </h2>

                        <div className="w-16 h-1 bg-dp-magenta rounded-full mb-8" />

                        <p className="leading-relaxed mb-6 text-dp-navy/80">
                            Data Panther was founded with a vision to unlock the true
                            potential of data through intelligent technologies.
                            We believe that the future belongs to organizations that
                            can transform data into meaningful action.
                        </p>

                        <p className="leading-relaxed text-dp-navy/80">
                            Our journey is driven by innovation, curiosity, and a
                            relentless commitment to building AI solutions that
                            create real-world impact.
                        </p>
                    </motion.div>

                </div>
            </section>


            {/* LEADERSHIP TEAM */}
            <section className="py-28">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            Our Team
                        </p>
                        <h2 className="text-4xl font-light">
                            Leadership Team
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                        {leaders.map((leader, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="group border border-dp-navy/15 rounded-xl p-8 text-center bg-white transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-dp-gradient flex items-center justify-center text-white text-sm font-medium">
                                    IMG
                                </div>

                                <h3 className="text-xl font-semibold mb-2">
                                    {leader.name}
                                </h3>

                                <p className="text-sm mb-4 text-dp-magenta font-medium">
                                    {leader.role}
                                </p>

                                <p className="text-sm leading-relaxed text-dp-navy/70">
                                    {leader.desc}
                                </p>
                            </motion.div>
                        ))}

                    </div>

                </div>
            </section>


            {/* LEADERSHIP PHILOSOPHY */}
            <section className="relative py-32  overflow-hidden">
                <div className="relative max-w-5xl mx-auto text-center px-6">

                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-light mb-10 text-dp-navy"
                    >
                        Leadership Philosophy
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg leading-relaxed text-dp-navy/80"
                    >
                        At Data Panther, leadership is about more than strategy —
                        it is about enabling innovation, fostering collaboration,
                        and pushing the boundaries of artificial intelligence.
                        Our leaders cultivate a culture where curiosity drives
                        discovery and technology creates meaningful progress.
                    </motion.p>

                </div>
            </section>

        </main>
    );
}
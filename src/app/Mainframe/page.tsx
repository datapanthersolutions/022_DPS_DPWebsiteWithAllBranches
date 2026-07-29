"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MainframeModernisation() {

    const services = [
        {
            title: "Mainframe Assessment",
            desc: "Evaluate legacy mainframe systems to identify modernization opportunities and migration strategies."
        },
        {
            title: "Application Replatforming",
            desc: "Move applications from legacy mainframes to modern cloud-native platforms."
        },
        {
            title: "Data Migration",
            desc: "Securely migrate mission-critical data from mainframes to scalable modern data environments."
        },
        {
            title: "API Enablement",
            desc: "Expose mainframe capabilities through modern APIs to integrate with new digital systems."
        }
    ];

    const roadmap = [
        "Legacy System Analysis",
        "Modern Architecture Design",
        "Migration & Integration",
        "Continuous Optimization"
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
                            Mainframe Modernisation
                        </p>

                        <h1 className="text-5xl md:text-6xl font-light leading-tight">
                            Mainframe Modernisation
                            <span className="block font-semibold text-dp-gradient">
                                Transform Legacy Infrastructure
                            </span>
                        </h1>

                        <p className="mt-8 text-lg leading-relaxed text-dp-navy/80">
                            Data Panther helps enterprises modernize legacy
                            mainframe systems by migrating workloads,
                            integrating modern technologies, and enabling
                            scalable digital transformation.
                        </p>

                        <button className="mt-10 px-8 py-4 rounded-lg bg-dp-magenta text-white hover:bg-dp-magenta/90 transition">
                            Explore Modernisation
                        </button>

                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="rounded-xl overflow-hidden border border-dp-navy/15"
                    >

                        <Image
                            src="/modernisationTransformLegacy.webp"
                            alt="Mainframe modernization infrastructure"
                            width={700}
                            height={500}
                            className="w-full object-cover"
                        />

                    </motion.div>

                </div>
            </section>



            {/* WHY MODERNIZE */}
            <section className="py-28 bg-dp-navy/5">

                <div className="max-w-6xl mx-auto px-6 text-center">

                    <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                        The Case for Change
                    </p>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-light mb-10"
                    >
                        Why Modernize Mainframe Systems?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-lg leading-relaxed max-w-3xl mx-auto text-dp-navy/80"
                    >
                        Legacy mainframe systems often limit innovation and
                        scalability. Modernization enables organizations to
                        integrate with modern digital platforms, reduce
                        operational costs, and unlock advanced analytics
                        capabilities powered by AI and cloud technologies.
                    </motion.p>

                </div>

            </section>



            {/* SERVICES */}
            <section className="py-28">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            What We Do
                        </p>
                        <h2 className="text-4xl font-light">
                            Mainframe Modernisation Services
                        </h2>
                    </div>


                    <div className="grid md:grid-cols-2 gap-12">

                        {services.map((service, i) => (

                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-white border border-dp-navy/15 rounded-xl p-10 overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                {/* gradient top edge */}
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />

                                <div className="text-sm mb-4 font-semibold text-dp-gradient">
                                    0{i + 1}
                                </div>

                                <h3 className="text-2xl font-semibold mb-4">
                                    {service.title}
                                </h3>

                                <p className="leading-relaxed text-dp-navy/80">
                                    {service.desc}
                                </p>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>



            {/* ROADMAP */}
            <section className="py-28 bg-dp-gradient">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-white/70 font-medium">
                            Our Process
                        </p>
                        <h2 className="text-4xl text-white font-light">
                            Our Modernisation Roadmap
                        </h2>
                    </div>


                    <div className="grid md:grid-cols-4 gap-10 text-center">

                        {roadmap.map((step, i) => (

                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="border border-white/25 bg-white/10 backdrop-blur-sm rounded-xl p-8"
                            >

                                <div className="text-3xl text-white font-semibold mb-4">
                                    0{i + 1}
                                </div>

                                <p className="text-lg text-white/90">
                                    {step}
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
                        Upgrade Your Legacy Systems
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg leading-relaxed mb-10 text-dp-navy/80"
                    >
                        Data Panther enables enterprises to transform
                        legacy mainframe environments into modern,
                        scalable, and intelligent digital platforms.
                    </motion.p>

                    <button className="px-8 py-4 rounded-lg bg-dp-magenta text-white hover:bg-dp-magenta/90 transition">
                        Start Modernisation
                    </button>

                </div>

            </section>


        </main>
    );
}
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GenerativeAI() {
    const capabilities = [
        {
            title: "AI Content Generation",
            desc: "Create marketing content, reports, and documentation automatically using advanced generative models."
        },
        {
            title: "Conversational AI",
            desc: "Develop intelligent chatbots and assistants capable of natural and contextual conversations."
        },
        {
            title: "Code Generation",
            desc: "Accelerate development with AI-powered code generation, debugging, and documentation."
        },
        {
            title: "Image Generation",
            desc: "Generate high-quality visuals and creative assets for digital products and marketing."
        },
        {
            title: "Knowledge Automation",
            desc: "Transform internal data and knowledge bases into intelligent searchable systems."
        },
        {
            title: "Workflow Automation",
            desc: "Integrate generative AI into enterprise processes to increase productivity and efficiency."
        }
    ];

    const useCases = [
        "Customer Support Automation",
        "Marketing Content Generation",
        "AI-Assisted Software Development",
        "Creative Media Production"
    ];

    const process = [
        "AI Strategy",
        "Model Development",
        "Enterprise Integration",
        "Continuous Optimization"
    ];

    return (
        <main className="bg-white text-dp-navy">

            {/* HERO */}
            <section className="relative py-32 text-center overflow-hidden">
                {/* subtle brand glow */}
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-dp-magenta/10 blur-3xl pointer-events-none" />

                <div className="relative max-w-6xl mx-auto px-6">

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="uppercase tracking-[0.35em] text-sm mb-6 text-dp-magenta font-medium"
                    >
                        Generative AI
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-light leading-tight"
                    >
                        Generative AI
                        <span className="block font-semibold text-dp-gradient">
                            Intelligent Content & Automation
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 text-lg max-w-3xl mx-auto text-dp-navy/80"
                    >
                        Data Panther helps organizations harness the power of
                        generative AI to automate creativity, enhance decision-making,
                        and unlock new possibilities in digital transformation.
                    </motion.p>

                    <div className="mt-14 rounded-xl overflow-hidden border border-dp-navy/15 shadow-sm">
                        <Image
                            src="/genaiimg.png"
                            alt="Generative AI"
                            width={1200}
                            height={700}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                </div>
            </section>


            {/* WHAT IS GENERATIVE AI */}
            <section className="py-28">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-light mb-6">
                            What is Generative AI?
                        </h2>

                        <div className="w-16 h-1 bg-dp-magenta rounded-full mb-8" />

                        <p className="leading-relaxed mb-6 text-dp-navy/80">
                            Generative AI refers to advanced artificial intelligence
                            systems capable of producing text, images, code, and
                            other digital content by learning patterns from massive
                            datasets.
                        </p>

                        <p className="leading-relaxed text-dp-navy/80">
                            At Data Panther, we implement state-of-the-art generative
                            models to help enterprises automate workflows, enhance
                            customer engagement, and accelerate innovation.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-xl overflow-hidden"
                    >
                        <Image
                            src="/aitech.png"
                            alt="AI Technology"
                            width={700}
                            height={500}
                            className="w-full object-cover"
                        />
                    </motion.div>

                </div>
            </section>


            {/* CAPABILITIES */}
            <section className="py-28">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            What We Build
                        </p>
                        <h2 className="text-4xl font-light">
                            Generative AI Capabilities
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">

                        {capabilities.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-white border border-dp-navy/15 p-10 rounded-xl overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
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


            {/* USE CASES */}
            <section className="py-28 bg-dp-gradient">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-white/70 font-medium">
                            Where It Applies
                        </p>
                        <h2 className="text-4xl text-white font-light">
                            Industry Applications
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-10 text-center">

                        {useCases.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="border border-white/25 bg-white/10 backdrop-blur-sm p-8 rounded-xl"
                            >
                                <div className="text-3xl text-white font-semibold mb-4">
                                    0{i + 1}
                                </div>

                                <p className="text-lg text-white/90">
                                    {item}
                                </p>

                            </motion.div>
                        ))}

                    </div>

                </div>
            </section>


            {/* IMPLEMENTATION PROCESS */}
            <section className="py-28">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            How We Deliver
                        </p>
                        <h2 className="text-4xl font-light">
                            Our Implementation Approach
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-10 text-center">

                        {process.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-white border border-dp-navy/15 p-8 rounded-xl overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                {/* gradient top edge */}
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />

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
            <section className="relative py-32 text-center overflow-hidden">
                <div className="relative max-w-4xl mx-auto px-6">

                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-light mb-8 text-dp-navy"
                    >
                        Build with Generative AI
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg leading-relaxed mb-10 text-dp-navy/85"
                    >
                        Partner with Data Panther to design intelligent generative
                        AI solutions that transform how your organization creates,
                        analyzes, and innovates.
                    </motion.p>

                    <button className="px-8 py-4 rounded-lg bg-dp-magenta text-white font-medium hover:bg-dp-magenta/90 transition">
                        Start Your AI Journey
                    </button>

                </div>
            </section>

        </main>
    );
}
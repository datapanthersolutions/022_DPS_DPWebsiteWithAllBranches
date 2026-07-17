"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ConversationalAI() {

    const features = [
        {
            title: "AI Chatbots",
            desc: "Deploy intelligent chatbots capable of understanding natural language and delivering human-like responses."
        },
        {
            title: "Voice Assistants",
            desc: "Build voice-enabled systems that allow users to interact naturally with applications and services."
        },
        {
            title: "Customer Support Automation",
            desc: "Automate support workflows to provide 24/7 assistance and reduce response times."
        },
        {
            title: "AI Knowledge Assistants",
            desc: "Transform company knowledge bases into conversational AI assistants for employees and customers."
        }
    ];

    const workflow = [
        "Intent Detection",
        "Context Understanding",
        "AI Response Generation",
        "Continuous Learning"
    ];

    return (
        <main className="bg-white text-dp-navy">


            {/* HERO SPLIT */}
            <section className="relative py-28 overflow-hidden">
                {/* subtle brand glow */}
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-dp-magenta/10 blur-3xl pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <p className="uppercase tracking-[0.35em] text-sm mb-6 text-dp-magenta font-medium">
                            Conversational AI
                        </p>

                        <h1 className="text-5xl md:text-6xl font-light leading-tight">
                            Conversational AI
                            <span className="block font-semibold text-dp-gradient">
                                Intelligent Digital Conversations
                            </span>
                        </h1>

                        <p className="mt-8 text-lg leading-relaxed text-dp-navy/80">
                            Data Panther develops conversational AI solutions that enable
                            businesses to interact with customers through intelligent
                            chatbots, voice assistants, and automated messaging systems.
                            Our AI-powered conversational platforms provide seamless,
                            natural communication experiences.
                        </p>

                        <button className="mt-10 px-8 py-4 rounded-lg bg-dp-magenta text-white hover:bg-dp-magenta/90 transition">
                            Explore Solutions
                        </button>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="rounded-xl overflow-hidden"
                    >
                        <Image
                            src="/convoai.png"
                            alt="Conversational AI"
                            width={700}
                            height={500}
                            className="w-full object-cover"
                        />
                    </motion.div>

                </div>
            </section>



            {/* WHAT IS SECTION */}
            <section className="py-28 bg-dp-navy/5">

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-xl overflow-hidden border border-dp-navy/15"
                    >
                        <Image
                            src="/humanlikeaiconv.png"
                            alt="AI chatbot interface"
                            width={700}
                            height={500}
                            className="w-full object-cover"
                        />
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-light mb-6">
                            Human-Like AI Communication
                        </h2>

                        <div className="w-16 h-1 bg-dp-magenta rounded-full mb-8" />

                        <p className="leading-relaxed mb-6 text-dp-navy/80">
                            Conversational AI combines natural language processing,
                            machine learning, and intelligent dialogue systems to
                            create interactive communication between humans and machines.
                        </p>

                        <p className="leading-relaxed text-dp-navy/80">
                            With Data Panther's conversational AI platforms, organizations
                            can automate customer interactions, streamline support services,
                            and enhance digital engagement across multiple channels.
                        </p>

                    </motion.div>

                </div>

            </section>



            {/* FEATURES */}
            <section className="py-28">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            What We Build
                        </p>
                        <h2 className="text-4xl font-light">
                            Conversational AI Capabilities
                        </h2>
                    </div>


                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                        {features.map((feature, i) => (

                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-white border border-dp-navy/15 rounded-xl p-8 overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                {/* gradient top edge */}
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />

                                <h3 className="text-xl font-semibold mb-4">
                                    {feature.title}
                                </h3>

                                <p className="leading-relaxed text-sm text-dp-navy/80">
                                    {feature.desc}
                                </p>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>



            {/* WORKFLOW */}
            <section className="py-28 bg-dp-gradient">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-white/70 font-medium">
                            How It Works
                        </p>
                        <h2 className="text-4xl text-white font-light">
                            How Conversational AI Works
                        </h2>
                    </div>


                    <div className="grid md:grid-cols-4 gap-10 text-center">

                        {workflow.map((step, i) => (

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
                        Build Intelligent Conversations
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg leading-relaxed mb-10 text-dp-navy/80"
                    >
                        Partner with Data Panther to design conversational AI
                        systems that transform customer interactions and
                        create seamless digital experiences.
                    </motion.p>

                    <button className="px-8 py-4 rounded-lg bg-dp-magenta text-white hover:bg-dp-magenta/90 transition">
                        Start Your AI Project
                    </button>

                </div>

            </section>

        </main>
    );
}
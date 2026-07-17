// "use client";

// import { motion } from "framer-motion";

// export default function OurStory() {
//     return (
//         <main className="bg-white text-[#29235B]">

//             {/* HERO SECTION */}
//             <section className="relative py-32 overflow-hidden">
//                 <div className="max-w-6xl mx-auto px-6 text-center">

//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="uppercase tracking-[0.4em] text-sm mb-6"
//                     >
//                         Our Story
//                     </motion.p>

//                     <motion.h1
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.2, duration: 0.7 }}
//                         className="text-5xl md:text-6xl font-light leading-tight"
//                     >
//                         The Evolution of
//                         <span className="block font-semibold">Data Panther</span>
//                     </motion.h1>

//                     <motion.p
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.4 }}
//                         className="mt-8 text-lg max-w-3xl mx-auto leading-relaxed"
//                     >
//                         Data Panther was founded on a simple belief — data should not
//                         remain dormant. It should think, learn, and drive decisions.
//                         We set out to build intelligent systems that transform raw data
//                         into powerful insights that shape the future of businesses.
//                     </motion.p>
//                 </div>
//             </section>


//             {/* STORY SECTION */}
//             <section className="py-28 bg-[#29235B]/5">
//                 <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

//                     <motion.div
//                         initial={{ opacity: 0, x: -40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <h2 className="text-4xl font-light mb-6">
//                             Where Intelligence Meets Innovation
//                         </h2>

//                         <p className="leading-relaxed mb-6">
//                             In a world overflowing with data, organizations often struggle
//                             to convert information into meaningful action. Data Panther was
//                             born to bridge that gap.
//                         </p>

//                         <p className="leading-relaxed">
//                             Our mission is to design AI-powered systems that empower
//                             businesses to anticipate change, automate decisions,
//                             and unlock opportunities hidden within their data.
//                             We don't just build technology — we build intelligence.
//                         </p>
//                     </motion.div>

//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                         className="border border-[#29235B]/20 p-10 rounded-xl"
//                     >
//                         <h3 className="text-2xl mb-6 font-semibold">Our Purpose</h3>

//                         <p className="leading-relaxed mb-4">
//                             To help organizations harness artificial intelligence
//                             to solve complex problems and accelerate innovation.
//                         </p>

//                         <p className="leading-relaxed">
//                             From predictive analytics to intelligent automation,
//                             we build solutions that transform the way businesses
//                             operate and grow.
//                         </p>
//                     </motion.div>

//                 </div>
//             </section>


//             {/* TIMELINE */}
//             <section className="py-28">
//                 <div className="max-w-6xl mx-auto px-6">

//                     <div className="text-center mb-20">
//                         <h2 className="text-4xl font-light">Our Journey</h2>
//                     </div>

//                     <div className="space-y-16">

//                         {[
//                             {
//                                 year: "Foundation",
//                                 text: "Data Panther was established with a vision to bring intelligent decision-making to modern enterprises."
//                             },
//                             {
//                                 year: "Innovation",
//                                 text: "We began building advanced AI models that transform data into predictive insights."
//                             },
//                             {
//                                 year: "Expansion",
//                                 text: "Our services expanded into enterprise AI solutions, automation, and scalable machine learning systems."
//                             },
//                             {
//                                 year: "Future",
//                                 text: "Today we continue to push boundaries, creating intelligent platforms that power the next generation of businesses."
//                             }
//                         ].map((item, index) => (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 40 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.5 }}
//                                 className="flex items-start gap-10"
//                             >
//                                 <div className="text-3xl font-semibold w-40">
//                                     {item.year}
//                                 </div>

//                                 <div className="border-l border-[#29235B]/30 pl-8">
//                                     <p className="text-lg leading-relaxed">{item.text}</p>
//                                 </div>

//                             </motion.div>
//                         ))}

//                     </div>
//                 </div>
//             </section>


//             {/* VALUES */}
//             <section className="py-28 bg-[#29235B]/5">
//                 <div className="max-w-6xl mx-auto px-6">

//                     <div className="text-center mb-20">
//                         <h2 className="text-4xl font-light">Our Core Values</h2>
//                     </div>

//                     <div className="grid md:grid-cols-3 gap-10">

//                         {[
//                             {
//                                 title: "Innovation",
//                                 desc: "We continuously explore new AI methodologies and technologies to build intelligent solutions."
//                             },
//                             {
//                                 title: "Precision",
//                                 desc: "Our data-driven approach ensures every insight and model delivers measurable impact."
//                             },
//                             {
//                                 title: "Trust",
//                                 desc: "Transparency, security, and reliability are embedded in every solution we build."
//                             }
//                         ].map((value, i) => (
//                             <motion.div
//                                 key={i}
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.5 }}
//                                 className="p-10 border border-[#29235B]/20 rounded-xl"
//                             >
//                                 <h3 className="text-2xl font-semibold mb-4">
//                                     {value.title}
//                                 </h3>

//                                 <p className="leading-relaxed">
//                                     {value.desc}
//                                 </p>
//                             </motion.div>
//                         ))}

//                     </div>
//                 </div>
//             </section>


//             {/* FINAL MESSAGE */}
//             <section className="py-32">
//                 <div className="max-w-4xl mx-auto text-center px-6">

//                     <motion.h2
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ once: true }}
//                         className="text-4xl md:text-5xl font-light mb-8"
//                     >
//                         The Future is Intelligent
//                     </motion.h2>

//                     <motion.p
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ delay: 0.2 }}
//                         viewport={{ once: true }}
//                         className="text-lg leading-relaxed"
//                     >
//                         At Data Panther, we believe the next era of innovation will be
//                         powered by intelligent systems that learn, adapt, and evolve.
//                         Our journey has just begun — and we are building the future
//                         one intelligent solution at a time.
//                     </motion.p>

//                 </div>
//             </section>

//         </main>
//     );
// }


"use client";

import { motion } from "framer-motion";

export default function OurStory() {
    return (
        <main className="bg-white text-dp-navy">

            {/* HERO SECTION */}
            <section className="relative py-32 overflow-hidden">
                {/* subtle brand glow behind the hero */}
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-dp-magenta/10 blur-3xl pointer-events-none" />

                <div className="relative max-w-6xl mx-auto px-6 text-center">

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="uppercase tracking-[0.4em] text-sm mb-6 text-dp-magenta font-medium"
                    >
                        Our Story
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="text-5xl md:text-6xl font-light leading-tight"
                    >
                        The Evolution of
                        <span className="block font-semibold text-dp-gradient">Data Panther</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 text-lg max-w-3xl mx-auto leading-relaxed text-dp-navy/80"
                    >
                        Data Panther was founded on a simple belief — data should not
                        remain dormant. It should think, learn, and drive decisions.
                        We set out to build intelligent systems that transform raw data
                        into powerful insights that shape the future of businesses.
                    </motion.p>
                </div>
            </section>


            {/* STORY SECTION */}
            <section className="py-28 bg-dp-navy/5">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-light mb-6">
                            Where Intelligence Meets Innovation
                        </h2>

                        {/* brand accent rule */}
                        <div className="w-16 h-1 bg-dp-magenta rounded-full mb-8" />

                        <p className="leading-relaxed mb-6 text-dp-navy/80">
                            In a world overflowing with data, organizations often struggle
                            to convert information into meaningful action. Data Panther was
                            born to bridge that gap.
                        </p>

                        <p className="leading-relaxed text-dp-navy/80">
                            Our mission is to design AI-powered systems that empower
                            businesses to anticipate change, automate decisions,
                            and unlock opportunities hidden within their data.
                            We don't just build technology — we build intelligence.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative border border-dp-navy/15 p-10 rounded-xl bg-white shadow-sm overflow-hidden"
                    >
                        {/* gradient top edge */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />

                        <h3 className="text-2xl mb-6 font-semibold">Our Purpose</h3>

                        <p className="leading-relaxed mb-4 text-dp-navy/80">
                            To help organizations harness artificial intelligence
                            to solve complex problems and accelerate innovation.
                        </p>

                        <p className="leading-relaxed text-dp-navy/80">
                            From predictive analytics to intelligent automation,
                            we build solutions that transform the way businesses
                            operate and grow.
                        </p>
                    </motion.div>

                </div>
            </section>


            {/* TIMELINE */}
            <section className="py-28">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.4em] text-xs mb-4 text-dp-magenta font-medium">
                            Milestones
                        </p>
                        <h2 className="text-4xl font-light">Our Journey</h2>
                    </div>

                    <div className="space-y-16">

                        {[
                            {
                                year: "Foundation",
                                text: "Data Panther was established with a vision to bring intelligent decision-making to modern enterprises."
                            },
                            {
                                year: "Innovation",
                                text: "We began building advanced AI models that transform data into predictive insights."
                            },
                            {
                                year: "Expansion",
                                text: "Our services expanded into enterprise AI solutions, automation, and scalable machine learning systems."
                            },
                            {
                                year: "Future",
                                text: "Today we continue to push boundaries, creating intelligent platforms that power the next generation of businesses."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex items-start gap-10"
                            >
                                <div className="text-3xl font-semibold w-40 shrink-0">
                                    {item.year}
                                </div>

                                <div className="relative border-l-2 border-dp-navy/15 pl-8">
                                    {/* magenta node on the timeline */}
                                    <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-dp-magenta ring-4 ring-dp-magenta/15" />
                                    <p className="text-lg leading-relaxed text-dp-navy/80">{item.text}</p>
                                </div>

                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>


            {/* VALUES */}
            <section className="py-28 bg-dp-gradient">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.4em] text-xs mb-4 text-white font-medium">
                            What Drives Us
                        </p>
                        <h2 className="text-4xl text-white font-light">Our Core Values</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">

                        {[
                            {
                                title: "Innovation",
                                desc: "We continuously explore new AI methodologies and technologies to build intelligent solutions."
                            },
                            {
                                title: "Precision",
                                desc: "Our data-driven approach ensures every insight and model delivers measurable impact."
                            },
                            {
                                title: "Trust",
                                desc: "Transparency, security, and reliability are embedded in every solution we build."
                            }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="group p-10 border border-dp-navy/15 rounded-xl bg-white transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="w-10 h-1 bg-dp-magenta rounded-full mb-6 transition-all duration-300 group-hover:w-16" />

                                <h3 className="text-2xl font-semibold mb-4">
                                    {value.title}
                                </h3>

                                <p className="leading-relaxed text-dp-navy/80">
                                    {value.desc}
                                </p>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>


            {/* FINAL MESSAGE */}
            <section className="relative py-32 overflow-hidden">
                <div className="relative max-w-4xl mx-auto text-center px-6">

                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-light mb-8 text-dp-navy"
                    >
                        The Future is Intelligent
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg leading-relaxed text-dp-navy/80"
                    >
                        At Data Panther, we believe the next era of innovation will be
                        powered by intelligent systems that learn, adapt, and evolve.
                        Our journey has just begun — and we are building the future
                        one intelligent solution at a time.
                    </motion.p>

                </div>
            </section>

        </main>
    );
}
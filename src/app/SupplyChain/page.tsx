"use client";

import { motion } from "framer-motion";

export default function SupplyChain() {

    const environment = [
        "Delays cost money",
        "Inefficiencies reduce margins",
        "Visibility is critical",
        "Data moves faster than people can process it"
    ];

    const howWeHelp = [
        "AI-powered automation",
        "Predictive analytics",
        "Intelligent tracking systems",
        "Real-time operational intelligence",
        "Cloud and data modernization"
    ];

    const operate = ["Faster", "Smarter", "More efficiently"];

    const challenges = [
        "Manual workflows and paperwork",
        "Poor shipment visibility",
        "Delayed operational decisions",
        "Route inefficiencies",
        "Rising fuel and operational costs",
        "Fragmented systems and disconnected data",
        "Inventory forecasting challenges",
        "Security and infrastructure risks"
    ];

    const challengeResults = [
        "Lower margins",
        "Slower delivery performance",
        "Customer dissatisfaction",
        "Operational bottlenecks"
    ];

    const aiTransforms = [
        "Predict delays before they happen",
        "Optimize routes dynamically",
        "Automate repetitive workflows",
        "Improve fleet utilization",
        "Analyze operational data in real time",
        "Reduce costs and inefficiencies"
    ];

    const services = [
        {
            title: "Logistics Workflow Automation",
            tagline: "Eliminate manual processes & operational bottlenecks.",
            desc: "Manual operations slow logistics businesses down. We automate the workflows that drain time.",
            points: [
                "Shipment processing",
                "Order workflows",
                "Dispatch coordination",
                "Invoice processing",
                "Documentation handling",
                "Inventory updates"
            ],
            benefits: "Reduced manual workload, faster processing, lower operational costs, and fewer human errors."
        },
        {
            title: "Intelligent Document Processing (OCR & Data Extraction)",
            tagline: "Automate logistics documentation.",
            desc: "Logistics operations involve massive volumes of paperwork. We automate the processing of it.",
            points: [
                "Invoices",
                "Bills of lading",
                "Delivery receipts",
                "Customs documents",
                "Shipment records",
                "Vendor documents"
            ],
            benefits: "Faster document handling, reduced data-entry errors, and improved operational speed."
        },
        {
            title: "Predictive Analytics & Logistics Intelligence",
            tagline: "Turn operational data into actionable insights.",
            desc: "Most logistics businesses sit on massive amounts of unused operational data.",
            points: [
                "Predictive demand forecasting",
                "Delay prediction models",
                "Fleet analytics",
                "Performance dashboards",
                "Improved resource allocation"
            ],
            benefits: "Better planning, faster decisions, and improved efficiency."
        },
        {
            title: "Route Optimization & Fleet Intelligence",
            tagline: "Reduce costs & improve delivery efficiency.",
            desc: "AI-powered route optimization improves every leg of the journey.",
            points: [
                "Dynamic routing",
                "Traffic-aware optimization",
                "Fuel consumption analysis",
                "Delivery scheduling intelligence"
            ],
            benefits: "Lower operational costs, improved on-time delivery, and better fleet utilization."
        },
        {
            title: "Warehouse & Inventory Intelligence",
            tagline: "Improve inventory visibility & warehouse efficiency.",
            desc: "Warehouse inefficiencies create delays and operational waste.",
            points: [
                "Inventory prediction",
                "Real-time stock tracking",
                "Warehouse performance analytics",
                "Picking & dispatch workflows"
            ],
            benefits: "Improved inventory visibility, accuracy, and warehouse throughput."
        },
        {
            title: "Cloud Migration for Logistics Infrastructure",
            tagline: "Modernize legacy systems & enable scalability.",
            desc: "Many logistics businesses still rely on fragmented legacy infrastructure.",
            points: [
                "Logistics platforms",
                "Operational databases",
                "Warehouse systems",
                "ERP infrastructure"
            ],
            benefits: "Better scalability, real-time access, improved collaboration, and reduced overhead."
        },
        {
            title: "Data Modernisation & Unified Logistics Intelligence",
            tagline: "Create a single source of operational truth.",
            desc: "Disconnected systems create operational blind spots. We unify the data.",
            points: [
                "Fleet systems",
                "Warehouse operations",
                "ERP systems",
                "Shipment tracking",
                "Customer platforms"
            ],
            benefits: "Real-time operational dashboards, unified reporting, and faster decision-making."
        },
        {
            title: "Threat Detection & Logistics Security Intelligence",
            tagline: "Protect infrastructure, data & operations.",
            desc: "Modern logistics systems are increasingly vulnerable to cyber and operational risk.",
            points: [
                "AI-powered threat detection",
                "Real-time monitoring",
                "Security analytics",
                "Endpoint protection"
            ],
            benefits: "Improved operational security, faster threat detection, and reduced cyber risk."
        },
        {
            title: "Custom AI Solutions for Logistics",
            tagline: "AI systems built around your operations.",
            desc: "Every logistics business operates differently. We design AI tailored to yours.",
            points: [
                "Operational workflows",
                "Fleet operations",
                "Warehouse processes",
                "Supply chain requirements",
                "Data ecosystems"
            ],
            benefits: "AI systems shaped around how your business actually runs."
        }
    ];

    const outcomes = [
        {
            title: "Faster Deliveries & Improved On-Time Performance",
            result: "Faster turnaround times, higher on-time delivery rates, and improved customer satisfaction and retention."
        },
        {
            title: "Lower Operational Costs",
            result: "Reduced operational expenditure, better profit margins, and more efficient resource allocation."
        },
        {
            title: "Increased Operational Efficiency",
            result: "Faster operational execution, reduced bottlenecks, and higher workforce productivity."
        },
        {
            title: "Real-Time Visibility Across Operations",
            result: "Centralized dashboards, real-time monitoring, and faster operational decision-making."
        },
        {
            title: "AI-Driven Forecasting & Smarter Planning",
            result: "Better planning accuracy, fewer operational surprises, and improved supply chain resilience."
        },
        {
            title: "Improved Inventory & Warehouse Management",
            result: "Improved inventory accuracy, faster order fulfillment, and reduced storage inefficiencies."
        },
        {
            title: "Faster Document Processing & Reduced Errors",
            result: "Faster document turnaround, fewer errors, and improved compliance and traceability."
        },
        {
            title: "Stronger Security & Operational Resilience",
            result: "Reduced cyber risk, improved resilience, and better protection of critical systems and data."
        },
        {
            title: "Scalable & Future-Ready Infrastructure",
            result: "Future-ready infrastructure, faster innovation, and easier system scalability."
        },
        {
            title: "Better Strategic Decision-Making",
            result: "Better executive decisions, improved operational agility, and smarter long-term planning."
        }
    ];

    const whyHelp = [
        "Modernize operations",
        "Integrate disconnected systems",
        "Unlock operational intelligence",
        "Build AI-ready infrastructure"
    ];

    const whyFocus = [
        "Real business outcomes",
        "Scalable AI systems",
        "Workflow automation",
        "Data-driven operations",
        "Future-ready infrastructure"
    ];

    const approach = [
        {
            step: "Operational Assessment",
            desc: "Identify inefficiencies, bottlenecks, and high-impact AI opportunities."
        },
        {
            step: "Workflow & Data Analysis",
            desc: "Map systems, operational workflows, and disconnected data sources."
        },
        {
            step: "AI & Infrastructure Design",
            desc: "Build scalable AI-powered systems tailored to your operations."
        },
        {
            step: "Integration & Deployment",
            desc: "Implement automation, analytics, dashboards, and monitoring systems."
        },
        {
            step: "Optimization & Scaling",
            desc: "Continuously improve performance, intelligence, and operational efficiency."
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
                            Supply Chain <span className="font-semibold text-white">Optimisation</span>
                        </h1>
                        <p className="text-xl text-white/85 leading-relaxed max-w-xl">
                            Building resilient, intelligent, and highly efficient global supply chains using predictive
                            analytics and automated logistics intelligence.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
                            alt="Supply Chain AI"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* OVERVIEW SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">Overview</p>
                    <h2 className="text-4xl font-light mb-8">Synchronised Global Logistics</h2>
                    <p className="text-lg text-dp-navy/70 leading-relaxed italic">
                        "The modern supply chain is a living ecosystem. We provide the neural network that allows
                        organisations to sense disruptions and respond with intelligent precision in real-time."
                    </p>
                </div>
            </section>

            {/* INTRO — SMARTER OPERATIONS */}
            <section className="py-24 bg-dp-navy/5">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">The Opportunity</p>
                        <h2 className="text-4xl font-light">
                            Smarter Operations. Faster Deliveries. Intelligent Decision-Making.
                        </h2>
                        <div className="h-1 w-20 bg-dp-magenta rounded-full mx-auto mt-4"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative bg-white p-10 rounded-xl border border-dp-navy/15 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                            <h3 className="text-2xl font-semibold mb-6">Where logistics operates today</h3>
                            <ul className="space-y-3">
                                {environment.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-dp-navy/80 leading-relaxed">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dp-magenta shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative bg-white p-10 rounded-xl border border-dp-navy/15 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                            <h3 className="text-2xl font-semibold mb-6">How we help you modernize</h3>
                            <ul className="space-y-3">
                                {howWeHelp.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-dp-navy/80 leading-relaxed">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dp-magenta shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {operate.map((word, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative bg-white p-8 rounded-xl border border-dp-navy/15 overflow-hidden text-center transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                <p className="text-2xl font-semibold text-dp-gradient">{word}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* CHALLENGES FACING LOGISTICS */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">The Challenge</p>
                        <h2 className="text-4xl font-light">Challenges Facing Logistics Companies Today</h2>
                        <div className="h-1 w-20 bg-dp-magenta rounded-full mx-auto mt-4"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative bg-white p-10 rounded-xl border border-dp-navy/15 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                            <h3 className="text-2xl font-semibold mb-6">Still struggling with</h3>
                            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                                {challenges.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-dp-navy/80 leading-relaxed">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dp-magenta shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative bg-white p-10 rounded-xl border border-dp-navy/15 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                            <h3 className="text-2xl font-semibold mb-6">The result</h3>
                            <ul className="space-y-3">
                                {challengeResults.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-dp-navy/80 leading-relaxed">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dp-magenta shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* HOW AI IS TRANSFORMING LOGISTICS */}
            <section className="py-24 bg-dp-gradient">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-white/70 font-medium">The Shift</p>
                        <h2 className="text-4xl font-light text-white">How AI is Transforming Logistics</h2>
                        <div className="h-1 w-20 bg-white/60 rounded-full mx-auto mt-4"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {aiTransforms.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="border border-white/25 bg-white/10 backdrop-blur-sm p-8 rounded-xl"
                            >
                                <p className="text-lg text-white font-medium leading-relaxed">{item}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* LOGISTICS AI & DIGITAL TRANSFORMATION SERVICES */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">What We Do</p>
                        <h2 className="text-4xl font-light">Our Logistics AI &amp; Digital Transformation Services</h2>
                        <div className="h-1 w-20 bg-dp-magenta rounded-full mx-auto mt-4"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (idx % 2) * 0.1 }}
                                className="group relative bg-white p-10 rounded-xl border border-dp-navy/15 overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-dp-magenta font-medium mb-4">{service.tagline}</p>
                                <p className="text-dp-navy/80 leading-relaxed mb-6">{service.desc}</p>

                                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                                    {service.points.map((point, p) => (
                                        <li key={p} className="flex items-start gap-3 text-dp-navy/80 leading-relaxed">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dp-magenta shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-dp-navy/80 leading-relaxed">
                                    <span className="font-semibold text-dp-magenta">Benefits: </span>
                                    {service.benefits}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* BUSINESS OUTCOMES */}
            <section className="py-24 bg-dp-navy/5">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">The Results</p>
                        <h2 className="text-4xl font-light">Business Outcomes You Can Expect</h2>
                        <div className="h-1 w-20 bg-dp-magenta rounded-full mx-auto mt-4"></div>
                        <p className="text-lg text-dp-navy/80 leading-relaxed max-w-3xl mx-auto mt-6">
                            AI-powered logistics is not just about technology — it&apos;s about measurable
                            operational and financial impact across your organization.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {outcomes.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (idx % 2) * 0.1 }}
                                className="group relative bg-white p-10 rounded-xl border border-dp-navy/15 overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                                <p className="text-dp-navy/80 leading-relaxed">{item.result}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* WHY CHOOSE DATA PANTHER */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">Why Us</p>
                        <h2 className="text-4xl font-light">Why Logistics Companies Choose Data Panther</h2>
                        <div className="h-1 w-20 bg-dp-magenta rounded-full mx-auto mt-4"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative bg-white p-10 rounded-xl border border-dp-navy/15 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                            <h3 className="text-2xl font-semibold mb-6">We help logistics organizations</h3>
                            <ul className="space-y-3">
                                {whyHelp.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-dp-navy/80 leading-relaxed">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dp-magenta shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative bg-white p-10 rounded-xl border border-dp-navy/15 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                            <h3 className="text-2xl font-semibold mb-6">Our focus</h3>
                            <ul className="space-y-3">
                                {whyFocus.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-dp-navy/80 leading-relaxed">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dp-magenta shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* OUR APPROACH */}
            <section className="py-24 bg-dp-navy/5">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">Our Process</p>
                        <h2 className="text-4xl font-light">Our Approach</h2>
                        <div className="h-1 w-20 bg-dp-magenta rounded-full mx-auto mt-4"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {approach.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-white p-10 rounded-xl border border-dp-navy/15 overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                <p className="text-3xl font-semibold text-dp-gradient mb-4">0{idx + 1}</p>
                                <h3 className="text-xl font-semibold mb-3">{item.step}</h3>
                                <p className="text-dp-navy/80 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* THE FUTURE OF LOGISTICS */}
            <section className="relative py-24 bg-dp-gradient overflow-hidden">
                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-light mb-8 text-white">The Future of Logistics is Intelligent</h2>
                    <div className="h-1 w-20 bg-white/60 rounded-full mx-auto mb-8"></div>
                    <p className="text-lg text-white/85 leading-relaxed">
                        The logistics industry is becoming faster, more data-driven, more automated, and more
                        AI-powered. Companies relying on manual systems and fragmented operations will struggle to
                        compete. Data Panther helps logistics businesses build intelligent systems that improve
                        efficiency, reduce costs, enhance visibility, and enable scalable growth.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl font-light mb-8">Optimise Your Logistics Today</h2>
                    <p className="text-xl text-dp-navy/80 mb-12 font-light">
                        Discover how our AI-driven insights can build a more resilient and efficient supply chain for your organisation.
                    </p>
                    <a
                        href="/ContactUs"
                        className="inline-block px-10 py-4 rounded-lg font-medium text-lg bg-dp-magenta text-white hover:bg-dp-magenta/90 transition-all"
                    >
                        Consult Our Logistics Analysts
                    </a>
                </div>
            </section>

        </main>
    );
}
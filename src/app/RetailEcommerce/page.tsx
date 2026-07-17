"use client";

import { motion } from "framer-motion";

export default function RetailEcommerce() {

    const struggles = [
        "Low conversion rates",
        "Cart abandonment",
        "Poor personalization",
        "Inventory inefficiencies",
        "Fragmented customer data",
        "Slow operational workflows",
        "Rising acquisition costs"
    ];

    const howWeHelp = [
        "AI-powered automation",
        "Customer intelligence systems",
        "Predictive analytics",
        "Intelligent recommendation engines",
        "Real-time business insights",
        "Data modernization and cloud transformation"
    ];

    const operate = ["Smarter", "Faster", "More profitably"];

    const environment = [
        "Customer expectations are rising",
        "Margins are tightening",
        "Competition is intensifying",
        "Marketing costs continue increasing"
    ];

    const challenges = [
        "Generic customer experiences",
        "Disconnected systems and data silos",
        "Manual inventory management",
        "Poor demand forecasting",
        "Inefficient customer support workflows",
        "Limited visibility into customer behavior",
        "Slow operational decision-making"
    ];

    const challengeResults = [
        "Lost sales opportunities",
        "Lower customer retention",
        "Overstocking or stock shortages",
        "Reduced operational efficiency"
    ];

    const aiTransforms = [
        "Personalize customer experiences at scale",
        "Predict customer behavior",
        "Optimize inventory and supply chains",
        "Automate repetitive workflows",
        "Improve conversion rates",
        "Generate real-time operational intelligence"
    ];

    const services = [
        {
            title: "Customer Personalization & Recommendation Engines",
            tagline: "Deliver smarter shopping experiences.",
            desc: "Modern customers expect personalized experiences across every touchpoint.",
            points: [
                "Product recommendation engines",
                "Behavioral analytics",
                "Personalized offers",
                "Dynamic customer segmentation"
            ],
            benefits: "Higher conversions, increased average order value, and improved customer retention."
        },
        {
            title: "Predictive Analytics & Retail Intelligence",
            tagline: "Turn customer & sales data into actionable insights.",
            desc: "Retail businesses collect massive amounts of data, but often struggle to turn it into decisions.",
            points: [
                "Sales forecasting",
                "Customer lifetime value prediction",
                "Churn prediction",
                "Seasonal demand forecasting"
            ],
            benefits: "Better strategic planning, smarter inventory decisions, and improved operational visibility."
        },
        {
            title: "Retail Workflow Automation",
            tagline: "Eliminate repetitive manual work.",
            desc: "Retail operations involve countless repetitive tasks that slow teams down.",
            points: [
                "Order processing",
                "Customer support workflows",
                "Product categorization",
                "Reporting and analytics",
                "Vendor communication workflows",
                "Inventory updates"
            ],
            benefits: "Faster operations, reduced manual workload, improved productivity, and lower costs."
        },
        {
            title: "Intelligent Document Processing (OCR & Data Extraction)",
            tagline: "Automate invoices, product data & operational documents.",
            desc: "Retail and e-commerce businesses manage large volumes of operational paperwork.",
            points: [
                "Vendor invoices",
                "Product catalogs",
                "Shipment documents",
                "Purchase orders",
                "Operational paperwork"
            ],
            benefits: "Faster processing, reduced errors, and better operational efficiency."
        },
        {
            title: "Inventory & Supply Chain Intelligence",
            tagline: "Optimize inventory and reduce operational waste.",
            desc: "Poor inventory visibility leads to overstocking, stock shortages, and lost sales.",
            points: [
                "Inventory forecasting",
                "Demand prediction",
                "Real-time inventory tracking",
                "Warehouse intelligence"
            ],
            benefits: "Improved stock accuracy, faster fulfillment, and reduced inventory waste."
        },
        {
            title: "AI Customer Support & Conversational Systems",
            tagline: "Improve customer experience at scale.",
            desc: "Customer expectations are higher than ever, across every channel.",
            points: [
                "AI chatbots",
                "Conversational commerce",
                "Automated support systems",
                "AI virtual shopping assistants"
            ],
            benefits: "Faster customer support, improved engagement, and better shopping experiences."
        },
        {
            title: "Cloud Migration & Retail Infrastructure Modernisation",
            tagline: "Build scalable, future-ready retail systems.",
            desc: "Legacy infrastructure slows innovation and scalability.",
            points: [
                "E-commerce infrastructure",
                "Retail applications",
                "Inventory systems",
                "Customer data platforms"
            ],
            benefits: "Scalability, faster performance, better agility, and AI-ready infrastructure."
        },
        {
            title: "Data Modernisation & Unified Customer Intelligence",
            tagline: "Create a single source of customer & operational truth.",
            desc: "Many retail businesses struggle with disconnected systems and fragmented customer data.",
            points: [
                "Sales systems",
                "Marketing platforms",
                "CRM systems",
                "Inventory systems",
                "E-commerce platforms"
            ],
            benefits: "Real-time customer insights, unified dashboards, and better strategic decision-making."
        },
        {
            title: "Threat Detection & Retail Security Intelligence",
            tagline: "Protect customer data & retail operations.",
            desc: "Retail businesses face increasing fraud, payment, and account-takeover threats.",
            points: [
                "AI-powered threat detection",
                "Real-time monitoring",
                "Fraud analytics",
                "Security intelligence systems"
            ],
            benefits: "Reduced cyber risk, better fraud detection, and improved operational security."
        },
        {
            title: "Custom AI Solutions for Retail & E-commerce",
            tagline: "AI systems built around your business.",
            desc: "Every retail business has unique customer journeys, workflows, and data ecosystems.",
            points: [
                "Customer journeys",
                "Operational workflows",
                "Sales models",
                "Data ecosystems"
            ],
            benefits: "Custom AI systems tailored to your business goals and operations."
        }
    ];

    const outcomes = [
        {
            title: "Higher Conversion Rates",
            desc: "Personalized experiences and AI recommendations improve customer engagement and purchasing behavior."
        },
        {
            title: "Increased Revenue & Average Order Value",
            desc: "AI-powered upselling, forecasting, and customer intelligence help maximize sales opportunities."
        },
        {
            title: "Better Inventory Optimization",
            desc: "Reduce stock shortages and overstocking through predictive inventory intelligence."
        },
        {
            title: "Faster Operational Workflows",
            desc: "Automate repetitive retail and e-commerce tasks to improve efficiency and reduce manual work."
        },
        {
            title: "Real-Time Customer & Business Insights",
            desc: "Gain visibility into customer behavior, operational performance, and sales trends instantly."
        },
        {
            title: "AI-Driven Decision-Making",
            desc: "Use predictive analytics and customer intelligence to make smarter strategic decisions."
        },
        {
            title: "Stronger Customer Data Protection",
            desc: "Improve fraud detection and operational security with AI-powered monitoring systems."
        },
        {
            title: "Scalable Digital Infrastructure",
            desc: "Modernize infrastructure to support growth, performance, and future AI innovation."
        }
    ];

    const whyFocus = [
        "Real business outcomes",
        "Intelligent automation",
        "Customer-centric AI systems",
        "Scalable digital transformation",
        "AI systems that integrate into your operations"
    ];

    const whyImprove = [
        "Customer experience",
        "Operational efficiency",
        "Profitability",
        "Scalability"
    ];

    const approach = [
        {
            step: "Retail & Operations Assessment",
            desc: "Identify operational inefficiencies and customer experience gaps."
        },
        {
            step: "Data & Workflow Analysis",
            desc: "Map systems, customer journeys, and operational workflows."
        },
        {
            step: "AI Solution Design",
            desc: "Build AI-powered systems tailored to your business goals."
        },
        {
            step: "Integration & Deployment",
            desc: "Implement automation, analytics, personalization, and intelligence systems."
        },
        {
            step: "Optimization & Scaling",
            desc: "Continuously improve performance, intelligence, and operational efficiency."
        }
    ];

    return (
        <main className="bg-white text-dp-navy overflow-x-hidden">

            {/* HERO SECTION */}
            <section className="relative py-20 sm:py-28 md:py-32 overflow-hidden bg-dp-gradient text-white">
                <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-white/70 uppercase tracking-widest text-sm mb-4 font-medium">Industries</p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight mb-6 sm:mb-8 text-white">
                            Retail & <span className="font-semibold text-white">E-commerce</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl">
                            Transforming the retail experience through AI-driven personalisation,
                            resilient supply chains, and intelligent data-driven storefronts.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-64 sm:h-80 md:h-[400px] rounded-xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                            alt="Retail AI"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* OVERVIEW SECTION */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">Overview</p>
                    <h2 className="text-3xl sm:text-4xl font-light mb-6 sm:mb-8">Modern Commerce Intelligence</h2>
                    <p className="text-base sm:text-lg text-dp-navy/70 leading-relaxed italic">
                        "Consumer expectations are evolving faster than ever. We provide the intelligence that allows
                        retailers to not just keep up, but to anticipate and lead the marketplace through data mastery."
                    </p>
                </div>
            </section>

            {/* INTRO — PERSONALIZE. AUTOMATE. GROW. */}
            <section className="py-16 sm:py-24 bg-dp-navy/5">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-12 sm:mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">The Opportunity</p>
                        <h2 className="text-3xl sm:text-4xl font-light">
                            Personalize Customer Experiences. Automate Operations. Drive Smarter Growth.
                        </h2>
                        <div className="h-1 w-20 bg-dp-magenta rounded-full mx-auto mt-4"></div>
                        <p className="text-base sm:text-lg text-dp-navy/80 leading-relaxed max-w-3xl mx-auto mt-6">
                            Modern retail and e-commerce businesses generate enormous amounts of customer, sales,
                            inventory, and operational data every day — but most of it goes underused.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative bg-white p-8 sm:p-10 rounded-xl border border-dp-navy/15 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Many businesses still struggle with</h3>
                            <ul className="grid lg:grid-cols-2 gap-x-8 gap-y-3">
                                {struggles.map((item, i) => (
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
                            className="relative bg-white p-8 sm:p-10 rounded-xl border border-dp-navy/15 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                            <h3 className="text-xl sm:text-2xl font-semibold mb-6">How we help you unlock growth</h3>
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

                    <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
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

            {/* CHALLENGES */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-12 sm:mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">The Challenge</p>
                        <h2 className="text-3xl sm:text-4xl font-light">Challenges Facing Retail & E-commerce Businesses</h2>
                        <div className="h-1 w-20 bg-dp-magenta rounded-full mx-auto mt-4"></div>
                        <p className="text-base sm:text-lg text-dp-navy/80 leading-relaxed max-w-3xl mx-auto mt-6">
                            Retailers operate in an increasingly competitive environment.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 sm:mb-12">
                        {environment.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative bg-dp-navy/5 p-8 rounded-xl border border-dp-navy/10 overflow-hidden text-center"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                <p className="text-dp-navy font-medium leading-relaxed">{item}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative bg-white p-8 sm:p-10 rounded-xl border border-dp-navy/15 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Still struggling with</h3>
                            <ul className="grid lg:grid-cols-2 gap-x-8 gap-y-3">
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
                            className="relative bg-white p-8 sm:p-10 rounded-xl border border-dp-navy/15 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                            <h3 className="text-xl sm:text-2xl font-semibold mb-6">The result</h3>
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

            {/* HOW AI IS TRANSFORMING RETAIL */}
            <section className="py-16 sm:py-24 bg-dp-gradient">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-12 sm:mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-white/70 font-medium">The Shift</p>
                        <h2 className="text-3xl sm:text-4xl font-light text-white">How AI is Transforming Retail & E-commerce</h2>
                        <div className="h-1 w-20 bg-white/60 rounded-full mx-auto mt-4"></div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {aiTransforms.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="border border-white/25 bg-white/10 backdrop-blur-sm p-8 rounded-xl"
                            >
                                <p className="text-base sm:text-lg text-white font-medium leading-relaxed">{item}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* AI & DIGITAL TRANSFORMATION SERVICES */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-12 sm:mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">What We Do</p>
                        <h2 className="text-3xl sm:text-4xl font-light">Our AI &amp; Digital Transformation Services</h2>
                        <div className="h-1 w-20 bg-dp-magenta rounded-full mx-auto mt-4"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (idx % 2) * 0.1 }}
                                className="group relative bg-white p-8 sm:p-10 rounded-xl border border-dp-navy/15 overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                <h3 className="text-xl sm:text-2xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-dp-magenta font-medium mb-4">{service.tagline}</p>
                                <p className="text-dp-navy/80 leading-relaxed mb-6">{service.desc}</p>

                                <ul className="grid lg:grid-cols-2 gap-x-8 gap-y-2 mb-6">
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
            <section className="py-16 sm:py-24 bg-dp-navy/5">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-12 sm:mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">The Results</p>
                        <h2 className="text-3xl sm:text-4xl font-light">Business Outcomes You Can Expect</h2>
                        <div className="h-1 w-20 bg-dp-magenta rounded-full mx-auto mt-4"></div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {outcomes.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (idx % 4) * 0.1 }}
                                className="group relative bg-white p-8 rounded-xl border border-dp-navy/15 overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                <h3 className="text-lg sm:text-xl font-semibold mb-3">{item.title}</h3>
                                <p className="text-dp-navy/80 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* WHY CHOOSE DATA PANTHER */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-12 sm:mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">Why Us</p>
                        <h2 className="text-3xl sm:text-4xl font-light">Why Retail & E-commerce Businesses Choose Data Panther</h2>
                        <div className="h-1 w-20 bg-dp-magenta rounded-full mx-auto mt-4"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative bg-white p-8 sm:p-10 rounded-xl border border-dp-navy/15 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                            <h3 className="text-xl sm:text-2xl font-semibold mb-6">We focus on</h3>
                            <ul className="space-y-3">
                                {whyFocus.map((item, i) => (
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
                            className="relative bg-white p-8 sm:p-10 rounded-xl border border-dp-navy/15 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                            <h3 className="text-xl sm:text-2xl font-semibold mb-6">We help you improve</h3>
                            <p className="text-dp-navy/80 leading-relaxed mb-6">
                                We don&apos;t just implement AI tools — we help businesses build intelligent retail
                                ecosystems that improve:
                            </p>
                            <ul className="space-y-3">
                                {whyImprove.map((item, i) => (
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
            <section className="py-16 sm:py-24 bg-dp-navy/5">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-12 sm:mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">Our Process</p>
                        <h2 className="text-3xl sm:text-4xl font-light">Our Approach</h2>
                        <div className="h-1 w-20 bg-dp-magenta rounded-full mx-auto mt-4"></div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {approach.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-white p-8 sm:p-10 rounded-xl border border-dp-navy/15 overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                <p className="text-3xl font-semibold text-dp-gradient mb-4">0{idx + 1}</p>
                                <h3 className="text-lg sm:text-xl font-semibold mb-3">{item.step}</h3>
                                <p className="text-dp-navy/80 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* THE FUTURE OF RETAIL */}
            <section className="relative py-16 sm:py-24 bg-dp-gradient overflow-hidden">
                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl font-light mb-6 sm:mb-8 text-white">The Future of Retail is Intelligent</h2>
                    <div className="h-1 w-20 bg-white/60 rounded-full mx-auto mb-8"></div>
                    <p className="text-base sm:text-lg text-white/85 leading-relaxed">
                        Retail and e-commerce are becoming more personalized, more automated, more data-driven, and
                        more AI-powered. Businesses relying on fragmented systems and manual workflows will struggle to
                        compete. Data Panther helps retail organizations build intelligent systems that improve customer
                        experiences, streamline operations, and enable scalable growth.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 sm:py-32 bg-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl font-light mb-6 sm:mb-8">Ready to Scale Your Digital Storefront?</h2>
                    <p className="text-lg sm:text-xl text-dp-navy/80 mb-10 sm:mb-12 font-light">
                        Let's discuss how our data strategies can drive conversions and operational resilience for your brand.
                    </p>
                    <a
                        href="/ContactUs"
                        className="inline-block px-8 sm:px-10 py-4 rounded-lg font-medium text-lg bg-dp-magenta text-white hover:bg-dp-magenta/90 transition-all"
                    >
                        Consult Our Retail Experts
                    </a>
                </div>
            </section>

        </main>
    );
}
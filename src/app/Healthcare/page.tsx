"use client";

import { motion } from "framer-motion";

export default function Healthcare() {

    const struggles = [
        "Administrative overload",
        "Staff burnout",
        "Long patient wait times",
        "Fragmented patient data",
        "Delayed decision-making",
        "Manual documentation processes",
        "Inefficient resource utilization",
        "Rising operational costs"
    ];

    const weHelp = [
        "Improve patient experiences",
        "Reduce administrative burden",
        "Increase operational efficiency",
        "Enable data-driven clinical and business decisions",
        "Prepare for the future of AI-powered healthcare"
    ];

    const challenges = [
        "Excessive administrative workload",
        "Physician and staff burnout",
        "Delayed access to critical information",
        "Inefficient patient scheduling",
        "High no-show rates",
        "Fragmented healthcare data",
        "Slow diagnostic workflows",
        "Manual claims and billing processes",
        "Regulatory and compliance requirements",
        "Limited visibility into operational performance"
    ];

    const challengeResults = [
        "Increased operating costs",
        "Lower staff productivity",
        "Poor patient satisfaction",
        "Delayed care delivery",
        "Reduced profitability"
    ];

    const aiTransforms = [
        "Automate administrative processes",
        "Improve patient engagement",
        "Accelerate diagnostics",
        "Predict patient risks",
        "Optimize resource allocation",
        "Improve clinical decision-making",
        "Enhance operational efficiency"
    ];

    const services = [
        {
            title: "Patient Experience & Engagement Systems",
            tagline: "Improve communication, scheduling & patient satisfaction.",
            desc: "Patients expect healthcare experiences that are fast, convenient, and personalized.",
            points: [
                "AI appointment scheduling",
                "Automated reminders",
                "Patient communication systems",
                "Self-service patient portals",
                "AI-powered virtual assistants",
                "Follow-up automation"
            ],
            benefits: "Reduced no-shows, improved patient satisfaction, increased appointment adherence, and better retention."
        },
        {
            title: "Healthcare Workflow Automation",
            tagline: "Reduce administrative burden.",
            desc: "Healthcare professionals spend a significant amount of time on non-clinical activities.",
            points: [
                "Appointment workflows",
                "Referral management",
                "Patient onboarding",
                "Claims processing",
                "Administrative documentation",
                "Operational reporting"
            ],
            benefits: "Reduced manual workload, faster processes, improved productivity, and lower administrative costs."
        },
        {
            title: "Medical Documentation & Intelligent OCR",
            tagline: "Eliminate manual data entry.",
            desc: "Healthcare organizations process enormous volumes of clinical and administrative documentation.",
            points: [
                "Medical records",
                "Patient intake forms",
                "Diagnostic reports",
                "Insurance claims",
                "Consent forms",
                "Laboratory reports"
            ],
            benefits: "Faster document processing, reduced errors, improved compliance, and better data accessibility."
        },
        {
            title: "Healthcare Analytics & Business Intelligence",
            tagline: "Turn healthcare data into actionable insights.",
            desc: "Most healthcare organizations have data. Few have actionable intelligence.",
            points: [
                "Executive dashboards",
                "Real-time operational reporting",
                "Performance monitoring",
                "Resource utilization analysis",
                "Financial analytics"
            ],
            benefits: "Better visibility, faster decisions, improved efficiency, and enhanced operational performance."
        },
        {
            title: "Predictive Analytics & Clinical Intelligence",
            tagline: "Anticipate risks before they become problems.",
            desc: "AI can identify patterns that humans often miss.",
            points: [
                "Forecast patient demand",
                "Predict readmissions",
                "Identify high-risk patients",
                "Optimize staffing",
                "Improve resource planning"
            ],
            benefits: "Improved care planning, better resource allocation, reduced avoidable costs, and better patient outcomes."
        },
        {
            title: "AI Decision Support Systems",
            tagline: "Empower clinicians with better information.",
            desc: "Healthcare professionals make hundreds of critical decisions every day.",
            points: [
                "Analyze patient trends",
                "Surface critical information",
                "Support diagnostic workflows",
                "Identify anomalies",
                "Prioritize cases"
            ],
            benefits: "Faster decision-making, improved diagnostic confidence, better care coordination, and reduced clinical risk."
        },
        {
            title: "Data Modernisation for Healthcare",
            tagline: "Create a unified healthcare data ecosystem.",
            desc: "Healthcare data is often scattered across multiple disconnected systems.",
            points: [
                "EHR systems",
                "Hospital management platforms",
                "Billing systems",
                "Laboratory systems",
                "Imaging platforms",
                "Operational databases"
            ],
            benefits: "A single source of truth, real-time visibility, improved reporting, and AI-ready infrastructure."
        },
        {
            title: "Cloud Migration for Healthcare Systems",
            tagline: "Build secure, scalable healthcare infrastructure.",
            desc: "Legacy healthcare systems often limit growth and innovation.",
            points: [
                "Clinical applications",
                "Healthcare data",
                "Core infrastructure",
                "Secure cloud environments"
            ],
            benefits: "Improved scalability, better performance, reduced costs, enhanced collaboration, and AI-ready environments."
        },
        {
            title: "Healthcare Cybersecurity & Threat Detection",
            tagline: "Protect sensitive patient data.",
            desc: "Healthcare is one of the most targeted industries for cyberattacks.",
            points: [
                "Networks",
                "Applications",
                "Connected devices",
                "Healthcare databases",
                "Cloud infrastructure"
            ],
            benefits: "Improved security posture, reduced breach risk, enhanced compliance, and better operational resilience."
        },
        {
            title: "Custom AI Solutions for Healthcare",
            tagline: "Built around your unique workflows.",
            desc: "Every healthcare organization operates differently.",
            points: [
                "Hospitals",
                "Clinics",
                "Diagnostic centers",
                "Specialty care providers",
                "Healthcare networks",
                "Telemedicine platforms"
            ],
            benefits: "Solutions tailored to your operational goals, workflows, and technology ecosystem."
        }
    ];

    const outcomes = [
        {
            title: "Improve Patient Satisfaction",
            desc: "Deliver faster, more responsive healthcare experiences."
        },
        {
            title: "Reduce Administrative Workload",
            desc: "Automate repetitive tasks and free healthcare professionals to focus on patient care."
        },
        {
            title: "Improve Clinical Efficiency",
            desc: "Streamline operations and accelerate care delivery."
        },
        {
            title: "Enable Better Decision-Making",
            desc: "Provide clinicians and leadership teams with actionable intelligence."
        },
        {
            title: "Improve Resource Utilization",
            desc: "Optimize staffing, facilities, and operational capacity."
        },
        {
            title: "Reduce Costs",
            desc: "Eliminate inefficiencies and improve productivity across departments."
        },
        {
            title: "Strengthen Security & Compliance",
            desc: "Protect patient information and meet regulatory requirements."
        },
        {
            title: "Build an AI-Ready Healthcare Organization",
            desc: "Prepare your healthcare systems for future innovation and growth."
        }
    ];

    const whyFocus = [
        "Operational efficiency",
        "Patient experience",
        "Clinical intelligence",
        "Data modernization",
        "AI readiness",
        "Long-term scalability"
    ];

    const approach = [
        {
            step: "Healthcare Assessment",
            desc: "Identify operational bottlenecks and AI opportunities."
        },
        {
            step: "Workflow & Data Analysis",
            desc: "Understand systems, processes, and healthcare data flows."
        },
        {
            step: "Solution Design",
            desc: "Create a tailored AI and digital transformation roadmap."
        },
        {
            step: "Implementation",
            desc: "Deploy automation, analytics, intelligence, and integration systems."
        },
        {
            step: "Continuous Optimization",
            desc: "Improve performance, efficiency, and outcomes over time."
        }
    ];

    return (
        <main className="bg-white text-dp-navy overflow-x-hidden">

            {/* HERO SECTION */}
            <section className="relative py-20 sm:py-28 md:py-32 overflow-hidden bg-white text-dp-navy">
                {/* subtle brand glow */}
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-dp-magenta/10 blur-3xl pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="uppercase tracking-[0.35em] text-sm mb-4 text-dp-magenta font-medium">Industries</p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight mb-6 sm:mb-8">
                            Healthcare <span className="font-semibold text-dp-gradient">& NHS</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-dp-navy/80 leading-relaxed max-w-xl">
                            Empowering healthcare providers with AI-driven insights to improve patient outcomes,
                            enhance operational efficiency, and secure clinical data.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-64 sm:h-80 md:h-[400px] rounded-xl overflow-hidden"
                    >
                        <img
                            src="/healthcareai.webp"
                            alt="Healthcare AI"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* QUOTE SECTION */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl font-light mb-6 sm:mb-8">Intelligence for Life</h2>
                    <p className="text-base sm:text-lg text-dp-navy/70 leading-relaxed italic">
                        "In healthcare, every data point represents a life. We build the intelligence that ensures
                        those lives receive the best care possible through predictive mastery and operational precision."
                    </p>
                </div>
            </section>

            {/* INTRO — TRANSFORM HEALTHCARE OPERATIONS */}
            <section className="py-16 sm:py-24 bg-dp-navy/5">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-12 sm:mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">The Opportunity</p>
                        <h2 className="text-3xl sm:text-4xl font-light">
                            Transform Healthcare Operations with Intelligent AI Systems
                        </h2>
                        <div className="h-1 w-20 bg-dp-magenta rounded-full mx-auto mt-4"></div>
                        <p className="text-base sm:text-lg text-dp-navy/80 leading-relaxed max-w-3xl mx-auto mt-6">
                            Healthcare organizations generate enormous volumes of data every day — from patient records
                            and diagnostics to operational workflows, billing systems, and clinical documentation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative bg-white p-8 sm:p-10 rounded-xl border border-dp-navy/15 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Many organizations still struggle with</h3>
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
                            <h3 className="text-xl sm:text-2xl font-semibold mb-6">We build systems that help you</h3>
                            <ul className="space-y-3">
                                {weHelp.map((item, i) => (
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

            {/* HEALTHCARE CHALLENGES WE SOLVE */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-12 sm:mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">The Challenge</p>
                        <h2 className="text-3xl sm:text-4xl font-light">Healthcare Challenges We Solve</h2>
                        <div className="h-1 w-20 bg-dp-magenta rounded-full mx-auto mt-4"></div>
                        <p className="text-base sm:text-lg text-dp-navy/80 leading-relaxed max-w-3xl mx-auto mt-6">
                            Modern healthcare organizations face growing pressure to improve care quality while controlling costs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative bg-white p-8 sm:p-10 rounded-xl border border-dp-navy/15 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Common challenges</h3>
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

            {/* HOW AI IS TRANSFORMING HEALTHCARE */}
            <section className="py-16 sm:py-24 bg-dp-gradient">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-12 sm:mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-white/70 font-medium">The Shift</p>
                        <h2 className="text-3xl sm:text-4xl font-light text-white">How AI is Transforming Healthcare</h2>
                        <div className="h-1 w-20 bg-white/60 rounded-full mx-auto mt-4"></div>
                        <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-3xl mx-auto mt-6">
                            AI is enabling healthcare organizations to move from reactive operations to proactive,
                            intelligent care delivery.
                        </p>
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

            {/* HEALTHCARE AI & DIGITAL TRANSFORMATION SERVICES */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-12 sm:mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">What We Do</p>
                        <h2 className="text-3xl sm:text-4xl font-light">Our Healthcare AI &amp; Digital Transformation Services</h2>
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
                        <h2 className="text-3xl sm:text-4xl font-light">Why Healthcare Organizations Choose Data Panther</h2>
                        <div className="h-1 w-20 bg-dp-magenta rounded-full mx-auto mt-4"></div>
                        <p className="text-base sm:text-lg text-dp-navy/80 leading-relaxed max-w-3xl mx-auto mt-6">
                            We don&apos;t simply deploy AI tools. We build intelligent healthcare systems that integrate
                            into your operations and deliver measurable outcomes.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {whyFocus.map((focus, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (i % 3) * 0.1 }}
                                className="group relative bg-white p-8 rounded-xl border border-dp-navy/15 overflow-hidden text-center text-lg font-semibold transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                {focus}
                            </motion.div>
                        ))}
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

            {/* THE FUTURE OF HEALTHCARE */}
            <section className="relative py-16 sm:py-24 bg-dp-gradient overflow-hidden">
                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl font-light mb-6 sm:mb-8 text-white">The Future of Healthcare is Intelligent</h2>
                    <div className="h-1 w-20 bg-white/60 rounded-full mx-auto mb-8"></div>
                    <p className="text-base sm:text-lg text-white/85 leading-relaxed">
                        Healthcare is becoming more data-driven, more connected, more personalized, more automated, and
                        more AI-powered. Organizations that modernize today will be better positioned to improve patient
                        outcomes, increase efficiency, and thrive in the future of healthcare.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 sm:py-32 bg-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl font-light mb-6 sm:mb-8">Advancing Patient Care with Data Panther</h2>
                    <p className="text-lg sm:text-xl text-dp-navy/80 mb-10 sm:mb-12 font-light">
                        Discover how our predictive analytics can transform elective care and hospital operations.
                    </p>
                    <a
                        href="/ContactUs"
                        className="inline-block px-8 sm:px-10 py-4 rounded-lg font-medium text-lg bg-dp-magenta text-white hover:bg-dp-magenta/90 transition-all"
                    >
                        Consult Our Healthcare Analysts
                    </a>
                </div>
            </section>

        </main>
    );
}
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ThreatDetection() {

    const threats = [
        "Sophisticated ransomware attacks",
        "Insider threats",
        "Credential theft",
        "Phishing campaigns",
        "Unauthorized access attempts",
        "Data exfiltration",
        "Zero-day vulnerabilities"
    ];

    const aiDelivers = [
        "Monitor environments in real time",
        "Detect anomalies instantly",
        "Predict suspicious behavior",
        "Accelerate incident response",
        "Strengthen cyber resilience"
    ];

    const traditionalReliance = [
        "Rule-based detection",
        "Manual monitoring",
        "Reactive security workflows",
        "Siloed security tools"
    ];

    const traditionalStruggles = [
        "Detect evolving attack patterns",
        "Analyze large-scale data in real time",
        "Identify insider threats",
        "Prioritize risks accurately"
    ];

    const traditionalResults = [
        "Alert fatigue",
        "Slow incident response",
        "Undetected threats",
        "Increased breach risk"
    ];

    const aiCombines = [
        "Machine learning",
        "Behavioral analytics",
        "Real-time monitoring",
        "Predictive intelligence",
        "Automated response systems"
    ];

    const aiLearnsFrom = [
        "User behavior",
        "Network traffic",
        "Endpoint activity",
        "System anomalies",
        "Historical attack patterns"
    ];

    const capabilities = [
        {
            title: "Real-Time Threat Monitoring",
            desc: "Continuously monitor networks, servers, cloud infrastructure, endpoints, applications, and user activity.",
            points: [
                "Unauthorized access attempts",
                "Malware activity",
                "Suspicious login behavior",
                "Network anomalies",
                "Data exfiltration attempts"
            ],
            impact: "Faster threat visibility, reduced response time, and lower breach risk."
        },
        {
            title: "AI-Based Behavioral Analytics",
            desc: "Traditional systems detect known threats; AI detects abnormal behavior — even when the threat is previously unknown.",
            points: [
                "User behavior patterns",
                "Device activity",
                "Login anomalies",
                "Access privilege misuse",
                "Insider threat indicators"
            ],
            impact: "Detect insider threats early, reduce false positives, and improve contextual threat intelligence."
        },
        {
            title: "Anomaly Detection & Machine Learning Intelligence",
            desc: "AI models identify unusual patterns across massive datasets.",
            points: [
                "Abnormal traffic spikes",
                "Suspicious API activity",
                "Irregular system behavior",
                "Unexpected data transfers"
            ],
            impact: "Continuously improves accuracy, learns evolving attack patterns, and detects threats traditional systems miss."
        },
        {
            title: "Endpoint Detection & Response (EDR)",
            desc: "Endpoints are one of the most common attack surfaces — laptops, servers, mobile devices, workstations, and remote employee systems.",
            points: [
                "Threat isolation",
                "Malware detection",
                "Device risk scoring",
                "Automated response actions"
            ],
            impact: "Reduce lateral movement and contain threats quickly."
        },
        {
            title: "Network Threat Detection",
            desc: "Monitor network traffic continuously to detect threats as they emerge.",
            points: [
                "Intrusions",
                "Lateral movement",
                "DDoS patterns",
                "Suspicious communication attempts"
            ],
            impact: "Stronger pattern recognition, threat correlation, and traffic anomaly detection."
        },
        {
            title: "Cloud Security Monitoring",
            desc: "As organizations migrate to AWS, Azure, Google Cloud, and SaaS, attack surfaces expand significantly.",
            points: [
                "Misconfigurations",
                "Unauthorized access",
                "Cloud workload anomalies",
                "Credential misuse"
            ],
            impact: "Continuous visibility across expanding cloud environments."
        },
        {
            title: "Threat Intelligence & Risk Analytics",
            desc: "Transform security data into actionable intelligence.",
            points: [
                "Threat scoring",
                "Vulnerability prioritization",
                "Risk heatmaps",
                "Incident correlation"
            ],
            impact: "Smarter decision-making, faster prioritization, and reduced alert overload."
        },
        {
            title: "Incident Response Automation (SOAR)",
            desc: "Reduce response time with intelligent automation.",
            points: [
                "Threat triage",
                "Alert escalation",
                "Initial containment",
                "Workflow orchestration"
            ],
            impact: "Faster response, reduced manual workload, and improved SOC efficiency."
        }
    ];

    const challenges = [
        {
            problem: "Too many alerts, not enough clarity",
            solution: "AI prioritizes real threats and reduces alert fatigue."
        },
        {
            problem: "Slow incident response",
            solution: "Automate detection and response workflows."
        },
        {
            problem: "Insider threats going undetected",
            solution: "Behavioral analytics identifies suspicious internal activity."
        },
        {
            problem: "Limited visibility across systems",
            solution: "Centralized threat monitoring dashboards."
        },
        {
            problem: "Expanding cloud attack surface",
            solution: "Secure cloud workloads and infrastructure."
        }
    ];

    const industries = [
        {
            title: "Healthcare",
            desc: "Protect sensitive patient and operational data."
        },
        {
            title: "Finance",
            desc: "Detect fraud, unauthorized access, and compliance risks."
        },
        {
            title: "Enterprise & Corporate",
            desc: "Monitor distributed infrastructure and remote work environments."
        },
        {
            title: "Logistics & Operations",
            desc: "Protect operational systems and connected infrastructure."
        },
        {
            title: "Retail & E-commerce",
            desc: "Secure payment systems and customer data."
        }
    ];

    const approach = [
        {
            step: "Security Assessment & Gap Analysis",
            points: [
                "Current security posture",
                "Existing tools",
                "Monitoring gaps",
                "Vulnerabilities"
            ]
        },
        {
            step: "Architecture & Integration",
            points: [
                "Networks",
                "Endpoints",
                "Cloud infrastructure",
                "Applications"
            ]
        },
        {
            step: "AI Intelligence & Detection Enablement",
            points: [
                "Behavioral analytics",
                "Anomaly detection",
                "Predictive threat intelligence"
            ]
        },
        {
            step: "Automation & Optimization",
            points: [
                "Incident response",
                "Security workflows",
                "Threat prioritization"
            ]
        }
    ];

    const outcomes = [
        {
            title: "Faster Threat Detection",
            desc: "Identify attacks before major damage occurs."
        },
        {
            title: "Reduced Financial Risk",
            desc: "Minimize breach-related losses."
        },
        {
            title: "Faster Incident Response",
            desc: "Automate triage and containment."
        },
        {
            title: "Real-Time Security Visibility",
            desc: "Gain centralized monitoring and intelligence."
        },
        {
            title: "Stronger Compliance & Governance",
            desc: "Support HIPAA, GDPR, ISO, and industry standards."
        },
        {
            title: "AI-Driven Security Operations",
            desc: "Enable scalable cyber resilience."
        }
    ];

    const whyFocus = [
        "AI intelligence",
        "Cybersecurity expertise",
        "Automation",
        "Real-time analytics"
    ];

    const ctaPoints = [
        "Detect threats faster",
        "Reduce operational risk",
        "Improve security visibility",
        "Build intelligent defense systems"
    ];

    return (
        <main className="bg-white text-dp-navy">

            {/* HERO */}
            <section className="relative py-28 overflow-hidden">
                {/* subtle brand glow */}
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-dp-magenta/10 blur-3xl pointer-events-none" />

                <div className="relative grid md:grid-cols-2 max-w-7xl mx-auto px-6 gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <p className="uppercase tracking-[0.35em] text-sm mb-6 text-dp-magenta font-medium">
                            Threat Detection
                        </p>

                        <h1 className="text-5xl font-light">
                            Threat Detection
                            <span className="block font-semibold text-dp-gradient">
                                Intelligent Cybersecurity
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-dp-navy/80">
                            Data Panther delivers AI-driven threat detection
                            systems that continuously monitor infrastructure,
                            identify anomalies, and prevent security incidents
                            before they impact operations.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="rounded-xl overflow-hidden border border-dp-navy/15"
                    >
                        <Image
                            src="/cyberthreatdetection.png"
                            alt="Cyber threat detection"
                            width={700}
                            height={500}
                            className="w-full object-cover"
                        />
                    </motion.div>

                </div>
            </section>


            {/* INTRO — DETECT THREATS BEFORE BREACHES */}
            <section className="py-28 bg-dp-navy/5">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            The Threat Landscape
                        </p>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-light mb-8"
                        >
                            Detect Threats Before They Become Breaches
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-lg leading-relaxed max-w-3xl mx-auto text-dp-navy/80"
                        >
                            Modern cyber threats move faster than traditional
                            security systems can respond. Traditional tools
                            generate massive volumes of alerts — but lack the
                            intelligence to prioritize and respond effectively.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative border border-dp-navy/15 rounded-xl p-10 bg-white overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                            <h3 className="text-2xl font-semibold mb-6">
                                Businesses today face
                            </h3>

                            <ul className="space-y-3">
                                {threats.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 leading-relaxed text-dp-navy/80">
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
                            className="relative border border-dp-navy/15 rounded-xl p-10 bg-white overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                            <h3 className="text-2xl font-semibold mb-6">
                                AI-powered detection that
                            </h3>

                            <ul className="space-y-3">
                                {aiDelivers.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 leading-relaxed text-dp-navy/80">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dp-magenta shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                    </div>

                </div>

            </section>


            {/* WHY TRADITIONAL SECURITY IS NO LONGER ENOUGH */}
            <section className="py-28">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            The Gap
                        </p>
                        <h2 className="text-4xl font-light">
                            Why Traditional Security Systems Are No Longer Enough
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">

                        {[
                            { heading: "Organizations still rely on", list: traditionalReliance },
                            { heading: "These systems struggle to", list: traditionalStruggles },
                            { heading: "The result", list: traditionalResults }
                        ].map((col, c) => (
                            <motion.div
                                key={c}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: c * 0.1 }}
                                className="group relative bg-white border border-dp-navy/15 rounded-xl p-10 overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                <h3 className="text-2xl font-semibold mb-6">
                                    {col.heading}
                                </h3>

                                <ul className="space-y-3">
                                    {col.list.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 leading-relaxed text-dp-navy/80">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dp-magenta shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}

                    </div>

                </div>

            </section>


            {/* WHAT IS AI-POWERED THREAT DETECTION */}
            <section className="py-28 bg-dp-gradient">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-white/70 font-medium">
                            The Shift
                        </p>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-light mb-8 text-white"
                        >
                            What is AI-Powered Threat Detection?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-lg leading-relaxed max-w-3xl mx-auto text-white/85"
                        >
                            AI-powered threat detection identifies suspicious
                            activity and cyber risks before they escalate into
                            major incidents — and continuously learns to get
                            sharper over time.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 mb-12">

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="border border-white/25 bg-white/10 backdrop-blur-sm rounded-xl p-10"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-white">
                                It combines
                            </h3>

                            <ul className="space-y-3">
                                {aiCombines.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 leading-relaxed text-white/90">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="border border-white/25 bg-white/10 backdrop-blur-sm rounded-xl p-10"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-white">
                                It continuously learns from
                            </h3>

                            <ul className="space-y-3">
                                {aiLearnsFrom.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 leading-relaxed text-white/90">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center text-2xl font-light text-white"
                    >
                        Reactive security
                        <span className="mx-4 font-semibold">→</span>
                        Proactive cyber intelligence
                    </motion.div>

                </div>

            </section>


            {/* CORE CAPABILITIES */}
            <section className="py-28">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            What We Build
                        </p>
                        <h2 className="text-4xl font-light">
                            Core Threat Detection Capabilities
                        </h2>
                    </div>

                    <div className="space-y-10">

                        {capabilities.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-white border border-dp-navy/15 rounded-xl p-10 overflow-hidden flex flex-col md:flex-row md:items-start md:justify-between gap-8 transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />

                                <div className="max-w-2xl">
                                    <h3 className="text-2xl font-semibold mb-3">
                                        {service.title}
                                    </h3>

                                    <p className="leading-relaxed mb-6 text-dp-navy/80">
                                        {service.desc}
                                    </p>

                                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                                        {service.points.map((point, p) => (
                                            <li key={p} className="flex items-start gap-3 leading-relaxed text-dp-navy/80">
                                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dp-magenta shrink-0" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="leading-relaxed text-dp-navy/70">
                                        <span className="font-semibold text-dp-magenta">
                                            Business impact:{" "}
                                        </span>
                                        {service.impact}
                                    </p>
                                </div>

                                <div className="text-4xl font-semibold shrink-0 text-dp-gradient">
                                    0{i + 1}
                                </div>

                            </motion.div>
                        ))}

                    </div>

                </div>

            </section>


            {/* COMMON SECURITY CHALLENGES */}
            <section className="py-28 bg-dp-navy/5">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            Problem → Solution
                        </p>
                        <h2 className="text-4xl font-light">
                            Common Security Challenges We Solve
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">

                        {challenges.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative border border-dp-navy/15 rounded-xl p-10 bg-white overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                <p className="text-dp-navy/50 mb-4 leading-relaxed line-through decoration-dp-navy/30">
                                    {item.problem}
                                </p>

                                <p className="text-xl font-semibold leading-relaxed">
                                    {item.solution}
                                </p>
                            </motion.div>
                        ))}

                    </div>

                </div>

            </section>


            {/* INDUSTRIES WE SUPPORT */}
            <section className="py-28">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            Who We Serve
                        </p>
                        <h2 className="text-4xl font-light">
                            Industries We Support
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {industries.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-white border border-dp-navy/15 rounded-xl p-8 overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                <h3 className="text-xl font-semibold mb-3">
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


            {/* THREAT DETECTION APPROACH */}
            <section className="py-28 bg-dp-navy/5">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            Our Process
                        </p>
                        <h2 className="text-4xl font-light">
                            Our Threat Detection Approach
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">

                        {approach.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative border border-dp-navy/15 rounded-xl p-10 bg-white overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                <div className="text-3xl font-semibold mb-4 text-dp-gradient">
                                    0{i + 1}
                                </div>

                                <h3 className="text-2xl font-semibold mb-6">
                                    {item.step}
                                </h3>

                                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                                    {item.points.map((point, p) => (
                                        <li key={p} className="flex items-start gap-3 leading-relaxed text-dp-navy/80">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dp-magenta shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}

                    </div>

                </div>

            </section>


            {/* BUSINESS OUTCOMES */}
            <section className="py-28">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            The Results
                        </p>
                        <h2 className="text-4xl font-light">
                            Business Outcomes to Expect
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {outcomes.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-white border border-dp-navy/15 rounded-xl p-8 overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                <h3 className="text-xl font-semibold mb-3">
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


            {/* WHY DATA PANTHER */}
            <section className="py-28 bg-dp-navy/5">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <p className="uppercase tracking-[0.35em] text-xs mb-4 text-dp-magenta font-medium">
                            Why Us
                        </p>
                        <h2 className="text-4xl font-light mb-6">
                            Why Data Panther Solutions?
                        </h2>

                        <p className="text-lg leading-relaxed max-w-3xl mx-auto text-dp-navy/80">
                            We combine intelligence, expertise, and automation to
                            build proactive security ecosystems for modern
                            businesses.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

                        {whyFocus.map((focus, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative border border-dp-navy/15 rounded-xl p-8 bg-white text-center text-lg font-semibold overflow-hidden transition-all duration-300 hover:border-dp-magenta/40 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-dp-gradient" />
                                {focus}
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
                        Ready to Strengthen Your Security Operations?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg leading-relaxed mb-10 text-dp-navy/80"
                    >
                        Cyber threats are getting faster, smarter, and more
                        automated. Data Panther helps businesses move beyond
                        reactive security and build AI-powered cyber resilience.
                    </motion.p>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {ctaPoints.map((item, i) => (
                            <span
                                key={i}
                                className="border border-dp-magenta/30 text-dp-navy rounded-lg px-5 py-3"
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    <button className="px-8 py-4 rounded-lg bg-dp-magenta text-white hover:bg-dp-magenta/90 transition">
                        Book a Security Consultation
                    </button>

                </div>

            </section>

        </main>
    );
}
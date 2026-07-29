"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import {
    MapPin,
    Clock,
    Briefcase,
    ChevronRight,
    Search,
    Heart,
    Rocket,
    Users,
    BookOpen,
    Shield,
    Coffee,
    Zap,
    Globe,
    ArrowRight,
    Sparkles,
} from "lucide-react";

/* ───────────────────── DATA ───────────────────── */

interface JobOpening {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    description: string;
    tags: string[];
}

const openings: JobOpening[] = [
    {
        id: "1",
        title: "Senior Data Engineer",
        department: "Engineering",
        location: "Hyderabad, India",
        type: "Full-time",
        experience: "4-7 years",
        description:
            "Design and build scalable data pipelines, ETL frameworks, and real-time ingestion systems powering our enterprise analytics platform.",
        tags: ["Python", "Spark", "Airflow", "AWS"],
    },
    {
        id: "2",
        title: "Machine Learning Engineer",
        department: "AI/ML",
        location: "Hyderabad, India",
        type: "Full-time",
        experience: "3-6 years",
        description:
            "Develop, train, and deploy production-grade ML models for predictive analytics, NLP, and recommendation systems.",
        tags: ["PyTorch", "TensorFlow", "MLOps", "Python"],
    },
    {
        id: "3",
        title: "Full-Stack Developer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        experience: "2-5 years",
        description:
            "Build intuitive analytics dashboards and data visualization interfaces using modern web technologies.",
        tags: ["React", "Next.js", "Node.js", "TypeScript"],
    },
    {
        id: "4",
        title: "AI Solutions Consultant",
        department: "Consulting",
        location: "Hyderabad, India",
        type: "Full-time",
        experience: "5-8 years",
        description:
            "Work directly with enterprise clients to design AI transformation strategies and guide implementation from ideation to deployment.",
        tags: ["AI Strategy", "Client Relations", "Data Analytics"],
    },
    {
        id: "5",
        title: "DevOps / Cloud Engineer",
        department: "Infrastructure",
        location: "Remote",
        type: "Full-time",
        experience: "3-5 years",
        description:
            "Architect and maintain cloud-native infrastructure, CI/CD pipelines, and Kubernetes-based deployment systems.",
        tags: ["AWS", "Kubernetes", "Terraform", "Docker"],
    },
    {
        id: "6",
        title: "Business Development Executive",
        department: "Sales",
        location: "Hyderabad, India",
        type: "Full-time",
        experience: "2-4 years",
        description:
            "Identify and nurture enterprise opportunities in AI and data analytics across industries and geographies.",
        tags: ["B2B Sales", "Enterprise", "Partnerships"],
    },
];

const perks = [
    {
        icon: Rocket,
        title: "Growth-First Culture",
        desc: "Annual learning budgets, certifications, and conference sponsorships to keep you at the cutting edge.",
    },
    {
        icon: Globe,
        title: "Remote Flexibility",
        desc: "Work from anywhere with flexible hours. We trust outcomes over presence.",
    },
    {
        icon: Heart,
        title: "Health & Wellness",
        desc: "Comprehensive health insurance for you and your family, plus mental health support.",
    },
    {
        icon: Users,
        title: "Collaborative Teams",
        desc: "Small, cross-functional squads with real ownership — no bureaucracy, just impact.",
    },
    {
        icon: Coffee,
        title: "Work-Life Balance",
        desc: "Generous PTO, no-meeting Fridays, and a culture that respects personal time.",
    },
    {
        icon: Shield,
        title: "Equity & Transparency",
        desc: "Competitive compensation, performance bonuses, and full transparency on company direction.",
    },
];

const values = [
    {
        icon: Zap,
        title: "Move with Purpose",
        desc: "We ship fast, learn faster, and iterate relentlessly.",
    },
    {
        icon: BookOpen,
        title: "Stay Curious",
        desc: "We treat every project as a chance to learn something new.",
    },
    {
        icon: Users,
        title: "Win Together",
        desc: "Individual brilliance, collective impact. We celebrate team wins.",
    },
    {
        icon: Shield,
        title: "Build Trust",
        desc: "With clients, with data, with each other — integrity is non-negotiable.",
    },
];

const departments = [
    "All",
    "Engineering",
    "AI/ML",
    "Consulting",
    "Infrastructure",
    "Sales",
];
const hiringSteps = [
    { title: "Application Review", desc: "We evaluate your resume & portfolio." },
    { title: "Technical Round", desc: "Hands-on problem solving & architecture discussion." },
    { title: "Culture Fit", desc: "Meet the team & leadership." },
    { title: "Offer", desc: "Transparent compensation discussion." },
];

/* ───────────────────── COMPONENT ───────────────────── */

export default function CareersPage() {
    const [selectedDept, setSelectedDept] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const filtered = openings.filter((job) => {
        const matchDept =
            selectedDept === "All" || job.department === selectedDept;
        const matchSearch =
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.tags.some((t) =>
                t.toLowerCase().includes(searchTerm.toLowerCase())
            );
        return matchDept && matchSearch;
    });

    return (
        <div className="min-h-screen">
            <section className="py-8 bg-dp-gradient">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 items-center">

                        <div>
                            <p className="uppercase tracking-[0.3em] text-sm text-white mb-6">
                                Careers
                            </p>

                            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                                Build the Future of Intelligent Systems
                            </h2>

                            <p className="text-lg text-white mb-8 leading-relaxed">
                                Join a team of engineers, designers, and innovators who are
                                transforming industries with AI-driven solutions. We believe in
                                ownership, continuous learning, and building technology that creates
                                real-world impact.
                            </p>

                            <button className="inline-flex items-center gap-2 bg-white text-[#29235B] px-6 py-3 rounded-full hover:bg-white">
                                Explore Open Roles
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <img
                                src="/careers.webp"
                                alt="Team collaboration"
                                className="object-cover w-full h-full"
                            />
                        </div>

                    </div>
                </div>
            </section>


            {/* ── Life at Company ── */}
            <section className="bg-white">
                <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <span className="text-[#29235B]/80 text-sm font-light uppercase tracking-wider">
                            Life at Data Panther
                        </span>

                        <h2 className="text-4xl font-light text-[#29235B] mt-3 mb-6">
                            Where Ambition Meets Innovation
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            We operate like a startup, think like researchers, and execute like an enterprise team.
                            You'll work on real-world AI systems deployed across industries — not experimental prototypes.
                        </p>

                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>Work directly with enterprise clients</li>
                            <li>Build production-scale AI systems</li>
                            <li>Rapid ownership & leadership growth</li>
                            <li>Zero bureaucracy</li>
                        </ul>
                    </div>

                    <div className="relative">
                        <img src="/lifeatdp.webp" alt="Life at Company" />
                    </div>

                </div>
            </section>
            {/* ── Hiring Process ── */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 text-center">

                    <span className="text-[#29235B]/80 text-sm font-light uppercase tracking-wider">
                        Hiring Process
                    </span>

                    <h2 className="text-4xl font-light text-[#29235B] mt-3 mb-14">
                        What to Expect
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {hiringSteps.map((step, i) => (
                            <div key={step.title} className="relative">
                                <div className="w-12 h-12 mx-auto bg-[#B13C96] text-white rounded-full flex items-center justify-center font-light mb-4">
                                    {i + 1}
                                </div>
                                <h3 className="font-light text-[#29235B] mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="py-28 bg-white">
                <div className="max-w-6xl mx-auto px-4">

                    {/* Heading */}
                    <div className="text-center mb-20">
                        <span className="text-[#29235B]/80 text-sm font-light tracking-widest uppercase">
                            Our Culture
                        </span>

                        <h2 className="text-4xl md:text-5xl font-light text-[#29235B] mt-4">
                            What Drives Our Thinking
                        </h2>

                        <p className="text-[#29235B]/80 mt-4 max-w-2xl mx-auto text-lg">
                            The mindset behind every AI solution we build.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 gap-12">
                        {values.map((v) => (
                            <div
                                key={v.title}
                                className="relative bg-white border border-[#29235B]/20  p-10"
                            >

                                {/* Accent Line */}
                                <div className="absolute left-0 top-8 bottom-8 w-1 bg-[#29235B] rounded-full" />

                                <div className="pl-6">
                                    <h3 className="text-2xl font-light text-[#29235B] mb-4">
                                        {v.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed">
                                        {v.desc}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>



            {/* ── Perks & Benefits ── */}
            {/* ── Benefits (Enhanced Enterprise Design) ── */}
            <section className="py-32 bg-[#f9fafb]">
                <div className="max-w-6xl mx-auto px-4">

                    {/* Heading */}
                    <div className="text-center mb-20">
                        <span className="text-[#29235B]/80 text-sm font-light tracking-widest uppercase">
                            Benefits
                        </span>

                        <h2 className="text-4xl md:text-5xl font-light text-[#29235B] mt-4">
                            Why You'll Love Working Here
                        </h2>

                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
                            We invest in our people — because exceptional teams build exceptional AI systems.
                        </p>
                    </div>

                    {/* Structured Grid */}
                    <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
                        {perks.map((perk) => (
                            <div
                                key={perk.title}
                                className="grid md:grid-cols-3 gap-8 py-12"
                            >
                                {/* Title Column */}
                                <div>
                                    <h3 className="text-xl font-light text-[#B13C96]">
                                        {perk.title}
                                    </h3>
                                </div>

                                {/* Description Column */}
                                <div className="md:col-span-2">
                                    <p className="text-gray-600 leading-relaxed max-w-2xl">
                                        {perk.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="relative py-48">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/talentcommunity.webp')" }} // replace with your image
                />


                <div className="relative max-w-7xl mx-auto px-6">

                    <div className="bg-white shadow-xl rounded-sm p-10 md:p-14 max-w-2xl">

                        <p className="text-xs font-light tracking-widest text-gray-500 uppercase mb-4">
                            Join Our Talent Community
                        </p>

                        <h2 className="text-3xl md:text-4xl font-light text-[#1f3c5b] leading-snug mb-8">
                            Stay connected and learn more about <br />
                            <span className="font-light">Data Panther</span> and career opportunities.
                        </h2>

                        {/* Email Form */}
                        <div className="flex flex-col sm:flex-row w-full">

                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 px-5 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1f3c5b]"
                            />

                            <button className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-light transition-all duration-300 flex items-center justify-center gap-2">
                                Subscribe →
                            </button>

                        </div>

                    </div>

                </div>
            </section>



            <div className="bg-[#FFFFFF] p-4 flex items-start gap-3 text-sm text-[#B13C96]">

                <AlertTriangle className="w-5 h-5 mt-0.5 text-[#B13C96] flex-shrink-0" />

                <div>
                    <p className="font-light">Fraud Alert</p>
                    <p className="text-[#29235B]   ">
                        Data Panther does not charge any fees at any stage of the recruitment process.
                        If you receive suspicious communication claiming to represent us, please report it immediately.
                    </p>
                </div>
            </div>
        </div>
    );
}

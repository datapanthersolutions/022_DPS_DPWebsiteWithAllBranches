
"use client";

import React from "react";
import Link from "next/link";

const featuredCaseStudies = [
    {
        slug: "automating-global-it-operations-with-aiops",
        title: "Automating Global IT Operations with AIOps",
        category: "AIOps",
        readTime: "8 min read",
        img: "/globalautoaiop.webp",
        summary:
            "A leading global enterprise partnered with Data Panther to implement an AIOps solution that autonomously remediated 75% of level-1 support tickets and saved over $2M annually.",
    },
    {
        slug: "accelerating-software-delivery-through-generative-ai",
        title: "Accelerating Software Delivery through Generative AI",
        category: "Generative AI",
        readTime: "7 min read",
        img: "softwaredeliver.webp",
        summary:
            "A major financial services firm integrated Generative AI into its DevOps workflows via Data Panther, realising a 40% reduction in deployment failures.",
    },
    {
        slug: "establishing-a-data-driven-decision-ecosystem",
        title: "Establishing a Data-Driven Decision Ecosystem",
        category: "Data Modernisation",
        readTime: "9 min read",
        img: "/datamodern.webp",
        summary:
            "Data Panther engineered a scalable cloud-native operational intelligence platform for a top-tier retail chain.",
    },
];

export default function CaseStudySection() {
    return (
        <section  className="py-20 px-6 bg-dp-gradient lg:px-24">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="mb-14">
                    <p className="text-sm uppercase tracking-widest text-blue-200 mb-3">
                        Case Studies
                    </p>

                    <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 max-w-3xl">
                        Proven Enterprise Success
                    </h2>

                    <p className="text-lg text-gray-200 max-w-2xl">
                        Explore how Data Panther delivers measurable business impact through
                        applied AI, operational intelligence, and data modernisation.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {featuredCaseStudies.map((cs) => (
                        <Link
                            key={cs.slug}
                            href={`/case-studies/${cs.slug}`}
                            className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition"
                        >

                            {/* Image */}
                            <div className="h-100 w-full overflow-hidden">
                                <img
                                    src={cs.img}
                                    alt={cs.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col">

                                <h3 className="text-lg font-medium text-gray-900 mb-3 leading-snug">
                                    {cs.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    {cs.summary}
                                </p>

                                {/* Meta */}
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span>{cs.category}</span>
                                </div>

                            </div>
                        </Link>
                    ))}

                </div>
                <div className="text-center">
                    <Link
                        href="/case-studies"
                        className="inline-block border-2 border-white text-white font-light px-10 py-4 mt-10 rounded-lg text-lg"
                        style={{ textDecoration: "none" }}
                    >
                        View All Case Studies →
                    </Link>
                </div>

            </div>
        </section>
    );
}
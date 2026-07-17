"use client";

import Image from "next/image";

export default function AISolution() {
    return (
        <section className="py-8 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT CONTENT */}
                    <div className="max-w-2xl">

                        <p className="uppercase tracking-[0.3em] text-sm text-dp-magenta font-medium mb-6">
                            Our Solution
                        </p>

                        <h2 className="text-4xl md:text-4xl font-light leading-tight text-dp-navy mb-8">
                            Turning AI Potential into
                            <span className="block">
                                Real Business Impact
                            </span>
                        </h2>

                        <div className="w-20 h-1 bg-dp-magenta rounded-full mb-4"></div>

                        <p className="text-lg text-dp-navy/70 leading-relaxed mb-12">
                            At Data Panther, we help organizations bridge the gap between AI experimentation and real business impact.

                            Our approach focuses on practical implementation and long-term value:
                        </p>

                        {/* Solution Points */}
                        <div className="space-y-4">

                            {[
                                "From Discovery to Production Deployment",
                                "GCP (Vertex AI) & Azure Native Delivery",
                                "ROI-first Scoping and Prioritization",
                                "Agentic AI, ML Models, and GenAI Integration",
                                "Ongoing MLOps and Performance Monitoring",
                                "Security, Compliance, and Governance Built In",
                            ].map((point, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-dp-gradient text-white text-xs font-bold">
                                        ✓
                                    </span>
                                    <p className="text-dp-navy/80">
                                        {point}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative w-full h-[500px]">
                        <Image
                            src="/solutions.jpg"
                            alt="AI Solutions"
                            fill
                            className="object-cover rounded-xl"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}
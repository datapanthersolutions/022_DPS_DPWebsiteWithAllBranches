"use client";

import Link from "next/link";

export default function PrivacyPage() {
    return (
        <main className="bg-white text-dp-navy">

            {/* Hero */}
            <section
                className="relative py-28 text-center text-white overflow-hidden"
                style={{
                    backgroundImage: "url('/blogbg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                {/* brand wash over the photo */}
                <div className="absolute inset-0 bg-dp-navy/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-dp-gradient opacity-60"></div>

                <div className="relative max-w-4xl mx-auto px-6">
                    <Link
                        href="/"
                        className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                        ← Back to Home
                    </Link>

                    <p className="uppercase tracking-[0.35em] text-xs mt-6 mb-4 text-white/70 font-medium">
                        Legal
                    </p>

                    <h1 className="text-4xl md:text-5xl font-light">
                        Privacy Policy
                    </h1>

                    <p className="text-white/85 mt-4 text-lg">
                        How Data Panther collects, protects, and manages your information.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-5xl mx-auto px-6 py-20 space-y-12 text-dp-navy/80">

                <div>
                    <h2 className="text-2xl font-semibold text-dp-navy mb-4">
                        Information We Collect
                    </h2>
                    <p className="leading-relaxed">
                        We may collect personal information such as name, email address,
                        organization details, and other contact information when users
                        interact with our website or services.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-dp-navy mb-4">
                        Use of Information
                    </h2>
                    <p className="leading-relaxed">
                        Collected information helps us provide services, improve website
                        performance, respond to inquiries, and deliver relevant content
                        related to our technology and consulting solutions.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-dp-navy mb-4">
                        Data Security
                    </h2>
                    <p className="leading-relaxed">
                        Data Panther applies appropriate technical and organizational
                        measures to protect personal information from unauthorized access,
                        disclosure, or misuse.
                    </p>
                </div>

            </section>

        </main>
    );
}
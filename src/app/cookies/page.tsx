"use client";

import Link from "next/link";

export default function CookiePage() {
    return (
        <main className="bg-white text-dp-navy">

            {/* Hero */}
            <section
                className="relative py-28 text-center text-white overflow-hidden"
                style={{
                    backgroundImage: "url('/blogbg.webp')",
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
                        Cookie Policy
                    </h1>

                    <p className="text-white/85 mt-4 text-lg">
                        Understanding how cookies are used across the Data Panther website.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-5xl mx-auto px-6 py-20 space-y-12 text-dp-navy/80">

                <div>
                    <h2 className="text-2xl font-semibold text-dp-navy mb-4">
                        What Are Cookies
                    </h2>
                    <p className="leading-relaxed">
                        Cookies are small text files stored on your device when visiting a
                        website. They help websites function effectively and improve user
                        experience.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-dp-navy mb-4">
                        Types of Cookies We Use
                    </h2>
                    <ul className="space-y-3">
                        {[
                            "Essential cookies required for website functionality",
                            "Analytics cookies to measure website performance",
                            "Preference cookies to remember user settings",
                            "Marketing cookies for relevant communications",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 leading-relaxed">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dp-magenta shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-dp-navy mb-4">
                        Managing Cookies
                    </h2>
                    <p className="leading-relaxed">
                        Users can control or disable cookies through browser settings.
                        However, disabling cookies may affect website functionality.
                    </p>
                </div>

            </section>

        </main>
    );
}
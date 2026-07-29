"use client";

import Link from "next/link";

export default function LegalPage() {
    return (
        <main className="bg-white">

            {/* Hero */}
            <section
                className="relative py-28 text-center text-white"
                style={{
                    backgroundImage: "url('/blogbg.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="absolute inset-0 bg-[#29235B]/80"></div>

                <div className="relative max-w-4xl mx-auto px-6">
                    <Link
                        href="/"
                        className="text-sm text-white/80 hover:text-white transition"
                    >
                        ← Back to Home
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-light mt-6">
                        Legal Terms of Use
                    </h1>

                    <p className="text-white/80 mt-4 text-lg">
                        Terms governing access and use of the Data Panther website and
                        services.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-5xl mx-auto px-6 py-20 space-y-12 text-gray-700">

                <div>
                    <h2 className="text-2xl font-light text-gray-900 mb-4">
                        Acceptance of Terms
                    </h2>
                    <p className="leading-relaxed">
                        By accessing this website, you agree to be bound by these terms and
                        conditions. If you do not agree to these terms, you must discontinue
                        the use of this website immediately.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-light text-gray-900 mb-4">
                        Use of Website
                    </h2>
                    <p className="leading-relaxed">
                        Users may only use this website for lawful purposes. Unauthorized
                        access attempts, malicious activities, or misuse of the website are
                        strictly prohibited.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-light text-gray-900 mb-4">
                        Intellectual Property
                    </h2>
                    <p className="leading-relaxed">
                        All materials on this website including logos, content, graphics,
                        and software are the intellectual property of Data Panther
                        Solutions and may not be copied or redistributed without written
                        permission.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-light text-gray-900 mb-4">
                        Limitation of Liability
                    </h2>
                    <p className="leading-relaxed">
                        Data Panther Solutions shall not be liable for any damages arising
                        from the use of this website including loss of data, service
                        interruptions, or reliance on information provided on the website.
                    </p>
                </div>

            </section>
        </main>
    );
}
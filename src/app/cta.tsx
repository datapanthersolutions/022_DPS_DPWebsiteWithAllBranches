
"use client";

import Image from "next/image";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="relative w-full py-32 flex items-center justify-center">

            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/cta.jpg"
                    alt="AI Background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* White Card */}
            <div className="relative z-10 bg-white max-w-4xl w-full mx-6  shadow-2xl p-12 text-center">

                <h2 className="text-4xl font-light text-[#29235B] mb-4">
                    Ready to Build Intelligent Solutions?
                </h2>

                <p className="text-gray-600 text-lg mb-8">
                    Partner with Data Panther to unlock the power of AI, automation,
                    and intelligent systems that drive measurable business impact.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">

                    <Link
                        href="/ContactUs"
                        className="bg-[#29235B] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#00294b] transition"
                    >
                        Get Started
                    </Link>

                    <Link
                        href="/Services"
                        className="border border-[#29235B] text-[#29235B] px-8 py-3 rounded-lg font-medium hover:bg-[#29235B] hover:text-white transition"
                    >
                        Explore Services
                    </Link>

                </div>

            </div>
        </section>
    );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");

        if (!consent) {
            setVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setVisible(false);
    };

    const rejectCookies = () => {
        localStorage.setItem("cookieConsent", "rejected");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm">

            <div className="bg-white border border-gray-200 shadow-xl p-6">

                <h3 className="text-md font-semibold text-[#29235B] mb-2">
                    We Value Your Privacy
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    We use cookies to enhance your experience, analyze traffic,
                    and improve our services. Learn more in our{" "}
                    <Link href="/cookie-policy" className="text-[#29235B] underline font-medium">
                        Cookie Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" className="text-[#29235B] underline font-medium">
                        Privacy Policy
                    </Link>.
                </p>

                <div className="flex gap-2">

                    <button
                        onClick={rejectCookies}
                        className="px-4 py-2 border border-gray-300 text-sm hover:bg-gray-100 transition"
                    >
                        Reject
                    </button>

                    <button
                        onClick={acceptCookies}
                        className="px-4 py-2 bg-[#29235B] text-white text-sm hover:bg-[#002a4d] transition"
                    >
                        Accept
                    </button>

                </div>

            </div>
        </div>
    );
}

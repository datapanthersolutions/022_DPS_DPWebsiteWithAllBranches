

// "use client";

// import React, { useState, useEffect } from "react";
// import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Globe } from "lucide-react";
// import Image from "next/image";
// declare global {
//   interface Window {
//     turnstile: any;
//     onTurnstileSuccess: (token: string) => void;
//   }
// }

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     message: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);
//   const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
//     script.async = true;
//     script.defer = true;
//     document.head.appendChild(script);

//     window.onTurnstileSuccess = (token: string) => {
//       setTurnstileToken(token);
//     };

//   }, []);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setError(null);
//     setSuccess(null);
//   };

//   const handleSubmit = async (e?: React.FormEvent) => {
//     if (e) e.preventDefault();

//     if (
//       !formData.fullName.trim() ||
//       !formData.email.trim() ||
//       !formData.message.trim()
//     ) {
//       setError("All fields are required.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       setError("Please enter a valid email address.");
//       return;
//     }

//     try {
//       setIsLoading(true);
//       setError(null);
//       setSuccess(null);

//       if (!turnstileToken) {
//         setError("Please verify that you are human.");
//         setIsLoading(false);
//         return;
//       }

//       const response = await fetch("/send-mail.php", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: formData.fullName,
//           email: formData.email,
//           message: formData.message,
//           turnstileToken
//         }),
//       });




//       const result = await response.json();
//       if (response.ok) {
//         setSuccess(result.message || "Your message was sent successfully..");
//         setFormData({ fullName: "", email: "", message: "" });
//         setTimeout(() => setSuccess(null), 5000);
//       } else {
//         setError(result.error || "Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       console.error("Submit error:", error);
//       setError("Network error. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-white">

//       <section className="relative w-full min-h-screen flex items-center justify-end">

//         <img
//           src="/contact-bg.png"
//           alt="Background"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         <div className="absolute inset-0 flex justify-end">
// <div className="w-full md:w-1/2 bg-gradient-to-l from-[#29235B]/95 via-[#29235B]/80 to-transparent" />        </div>

//         <div className="relative z-10 pr-6 md:pr-24 text-right text-white max-w-2xl">

//           {/* Small Tagline */}
//           <p className="uppercase tracking-[0.3em] text-sm text-white mb-4">
//             Let’s Collaborate
//           </p>

//           {/* Main Heading */}
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
//             Let’s Build Something
//             <span className="block font-light text-white bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
//               Extraordinary Together
//             </span>
//           </h1>

//           {/* Decorative Line */}
//           <div className="ml-auto w-24 h-[2px] bg-white mb-6"></div>

//           {/* Supporting Text */}
//           <p className="text-lg text-white leading-relaxed">
//             Partner with us to design intelligent solutions that combine advanced AI
//             capabilities with measurable business impact.
//           </p>

//         </div>

//       </section>




//       <section className="relative py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid lg:grid-cols-5 gap-12 items-start">





//             <div className="lg:col-span-2 space-y-12">

//               {/* Section Header */}
//               <div>
//                 <p className="uppercase tracking-[0.3em] text-sm text-[#29235B] mb-3">
//                   Contact
//                 </p>
//                 <h2 className="text-3xl font-light text-[#29235B] mb-6">
//                   Connect With Our Team
//                 </h2>
//                 <p className="text-gray-600 leading-relaxed max-w-md">
//                   Speak with our specialists to explore how AI-driven solutions can
//                   strengthen your operations and accelerate business growth.
//                 </p>
//               </div>

//               {/* Contact Items */}
//               <div className="space-y-8">

//                 {/* Email */}
//                 <div className="flex items-start gap-5 border-b border-gray-200 pb-6">
//                   <div className="w-10 h-10 rounded-full border border-[#29235B] flex items-center justify-center">
//                     <Mail className="w-5 h-5 text-[#29235B]" />
//                   </div>
//                   <div>
//                     <h3 className="text-base font-light text-[#29235B] mb-1">
//                       Email
//                     </h3>
//                     <p className="text-sm text-gray-600 mb-2">
//                       Send us your inquiry anytime
//                     </p>
//                     <a
//                       href="mailto:info@datapanthersolutions.com"
//                       className="text-[#29235B] font-medium text-sm hover:underline"
//                     >
//                       info@datapanthersolutions.com
//                     </a>
//                   </div>
//                 </div>

//                 {/* Phone */}
//                 <div className="flex items-start gap-5 border-b border-gray-200 pb-6">
//                   <div className="w-10 h-10 rounded-full border border-[#29235B] flex items-center justify-center">
//                     <Phone className="w-5 h-5 text-[#29235B]" />
//                   </div>
//                   <div>
//                     <h3 className="text-base font-light text-[#29235B] mb-1">
//                       Phone
//                     </h3>
//                     <p className="text-sm text-gray-600 mb-2">
//                       Monday – Friday
//                     </p>
//                     <a
//                       href="tel:+919948531867"
//                       className="text-[#29235B] font-medium text-sm hover:underline"
//                     >
//                       +91 99485 31867
//                     </a>
//                   </div>
//                 </div>

//                 {/* Location */}
//                 <div className="flex items-start gap-5 border-b border-gray-200 pb-6">
//                   <div className="w-10 h-10 rounded-full border border-[#29235B] flex items-center justify-center">
//                     <MapPin className="w-5 h-5 text-[#29235B]" />
//                   </div>
//                   <div>
//                     <h3 className="text-base font-light text-[#29235B] mb-1">
//                       Office
//                     </h3>
//                     <p className="text-sm text-gray-600">
//                       Hyderabad, Telangana, India
//                     </p>
//                   </div>
//                 </div>

//                 {/* Business Hours */}
//                 <div className="flex items-start gap-5">
//                   <div className="w-10 h-10 rounded-full border border-[#29235B] flex items-center justify-center">
//                     <Clock className="w-5 h-5 text-[#29235B]" />
//                   </div>
//                   <div>
//                     <h3 className="text-base font-light text-[#29235B] mb-1">
//                       Business Hours
//                     </h3>
//                     <p className="text-sm text-gray-600">
//                       9:00 AM – 6:00 PM IST
//                     </p>
//                   </div>
//                 </div>

//               </div>

//             </div>









//             <div className="lg:col-span-3">
//               <div className="bg-[#B13C96]  overflow-hidden">


//                 {/* Contact Form */}
//                 <div className="p-10">
//                   <div className="mb-8">
//                     <h2 className="text-3xl font-light text-white mb-3">Send us a Message</h2>
//                     <p className="text-white">Fill out the form and we'll be in touch soon!</p>
//                   </div>

//                   {success && (
//                     <div className="mb-6 px-4 py-4 rounded-xl bg-green-50 text-green-800 text-sm border border-green-200 flex items-start gap-3">
//                       <div className="w-5 h-5 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                         <svg className="w-3 h-3 text-green-700" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                         </svg>
//                       </div>
//                       <span>{success}</span>
//                     </div>
//                   )}

//                   {error && (
//                     <div className="mb-6 px-4 py-4 rounded-xl bg-red-50 text-red-800 text-sm border border-red-200 flex items-start gap-3">
//                       <div className="w-5 h-5 bg-red-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                         <svg className="w-3 h-3 text-red-700" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                         </svg>
//                       </div>
//                       <span>{error}</span>
//                     </div>
//                   )}

//                   <div className="space-y-5">
//                     <div>
//                       <label htmlFor="fullName" className="block text-sm font-light text-white mb-2">
//                         Full Name *
//                       </label>
//                       <input
//                         id="fullName"
//                         name="fullName"
//                         type="text"
//                         value={formData.fullName}
//                         onChange={handleInputChange}
//                         required
//                         disabled={isLoading}
//                         placeholder="Your Name"
//                         className="w-full px-4 py-3 border-2 border-gray-200  text-white focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="email" className="block text-sm font-light text-white mb-2">
//                         Email Address *
//                       </label>
//                       <input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                         disabled={isLoading}
//                         placeholder="Mail@example.com"
//                         className="w-full px-4 py-3 border-2 border-gray-200 text-white focus:ring-2 focus:ring-[#06923E] focus:border-transparent transition-all duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="message" className="block text-sm font-light text-white mb-2">
//                         Your Message *
//                       </label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         rows={5}
//                         value={formData.message}
//                         onChange={handleInputChange}
//                         required
//                         disabled={isLoading}
//                         placeholder="Tell us how we can help you..."
//                         className="w-full px-4 py-3 border-2 border-gray-200 text-white focus:ring-2 focus:ring-[#06923E] focus:border-transparent transition-all duration-200 resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
//                       ></textarea>
//                     </div>
//                     <div
//                       className="cf-turnstile my-4"
//                       data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
//                       data-callback="onTurnstileSuccess"
//                     ></div>

//                     <button
//                       type="button"
//                       onClick={handleSubmit}
//                       disabled={isLoading}
//                       className="w-full bg-white hover:from-[#1C352D] hover:to-[#06923E] text-[#29235B] font-light py-4 px-6  transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
//                     >
//                       {isLoading ? (
//                         <>
//                           <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                           </svg>
//                           Sending...
//                         </>
//                       ) : (
//                         <>
//                           Send Message
//                         </>
//                       )}
//                     </button>

//                     <p className="text-xs text-gray-100 text-center pt-2">
//                       Protected by Cloudflare Turnstile{" "}
//                       <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white underline">
//                         Privacy Policy
//                       </a>{" "}
//                       and{" "}
//                       <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white underline">
//                         Terms of Service
//                       </a>.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* </div> */}
//       </section >

//     </div >
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Globe } from "lucide-react";
import Image from "next/image";
declare global {
  interface Window {
    turnstile: any;
    onTurnstileSuccess: (token: string) => void;
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    window.onTurnstileSuccess = (token: string) => {
      setTurnstileToken(token);
    };

  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
    setSuccess(null);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setError("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      setSuccess(null);

      if (!turnstileToken) {
        setError("Please verify that you are human.");
        setIsLoading(false);
        return;
      }

      const response = await fetch("/send-mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          message: formData.message,
          turnstileToken
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess(result.message || "Your message was sent successfully..");
        setFormData({ fullName: "", email: "", message: "" });
        setTimeout(() => setSuccess(null), 5000);
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-dp-navy">

      <section className="relative w-full min-h-screen flex items-center justify-end">

        <img
          src="/contact-bg.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex justify-end">
          <div className="w-full md:w-1/2 bg-gradient-to-l from-dp-navy/95 via-dp-navy/80 to-transparent" />
        </div>

        <div className="relative z-10 pr-6 md:pr-24 text-right text-white max-w-2xl">

          {/* Small Tagline */}
          <p className="uppercase tracking-[0.3em] text-sm text-white/70 font-medium mb-4">
            Let&rsquo;s Collaborate
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
            Let&rsquo;s Build Something
            <span className="block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-dp-magenta/80">
              Extraordinary Together
            </span>
          </h1>

          {/* Decorative Line */}
          <div className="ml-auto w-24 h-1 rounded-full bg-dp-magenta mb-6"></div>

          {/* Supporting Text */}
          <p className="text-lg text-white/85 leading-relaxed">
            Partner with us to design intelligent solutions that combine advanced AI
            capabilities with measurable business impact.
          </p>

        </div>

      </section>

      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            <div className="lg:col-span-2 space-y-12">

              {/* Section Header */}
              <div>
                <p className="uppercase tracking-[0.3em] text-sm text-dp-magenta font-medium mb-3">
                  Contact
                </p>
                <h2 className="text-3xl font-light text-dp-navy mb-6">
                  Connect With Our Team
                </h2>
                <p className="text-dp-navy/70 leading-relaxed max-w-md">
                  Speak with our specialists to explore how AI-driven solutions can
                  strengthen your operations and accelerate business growth.
                </p>
              </div>

              {/* Contact Items */}
              <div className="space-y-8">

                {/* Email */}
                <div className="flex items-start gap-5 border-b border-dp-navy/15 pb-6">
                  <div className="w-10 h-10 rounded-full border border-dp-magenta flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-dp-magenta" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-dp-navy mb-1">
                      Email
                    </h3>
                    <p className="text-sm text-dp-navy/60 mb-2">
                      Send us your inquiry anytime
                    </p>
                    <a
                      href="mailto:info@datapanthersolutions.com"
                      className="text-dp-magenta font-medium text-sm hover:underline"
                    >
                      info@datapanthersolutions.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5 border-b border-dp-navy/15 pb-6">
                  <div className="w-10 h-10 rounded-full border border-dp-magenta flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-dp-magenta" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-dp-navy mb-1">
                      Phone
                    </h3>
                    <p className="text-sm text-dp-navy/60 mb-2">
                      Monday – Friday
                    </p>
                    <a
                      href="tel:+917075928464"
                      className="text-dp-magenta font-medium text-sm hover:underline"
                    >
                      +91 7075928464
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-5 border-b border-dp-navy/15 pb-6">
                  <div className="w-10 h-10 rounded-full border border-dp-magenta flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-dp-magenta" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-dp-navy mb-1">
                      Office
                    </h3>
                    <p className="text-sm text-dp-navy/60">
                      Hyderabad, Telangana, India
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full border border-dp-magenta flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-dp-magenta" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-dp-navy mb-1">
                      Business Hours
                    </h3>
                    <p className="text-sm text-dp-navy/60">
                      9:00 AM – 6:00 PM IST
                    </p>
                  </div>
                </div>

              </div>

            </div>

            <div className="lg:col-span-3">
              <div className="relative bg-dp-gradient rounded-xl overflow-hidden">

                {/* Contact Form */}
                <div className="p-10">
                  <div className="mb-8">
                    <h2 className="text-3xl font-semibold text-white mb-3">Send us a Message</h2>
                    <p className="text-white/85">Fill out the form and we'll be in touch soon!</p>
                  </div>

                  {success && (
                    <div className="mb-6 px-4 py-4 rounded-xl bg-green-50 text-green-800 text-sm border border-green-200 flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>{success}</span>
                    </div>
                  )}

                  {error && (
                    <div className="mb-6 px-4 py-4 rounded-xl bg-red-50 text-red-800 text-sm border border-red-200 flex items-start gap-3">
                      <div className="w-5 h-5 bg-red-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="space-y-5">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        disabled={isLoading}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-lg bg-white/95 text-dp-navy placeholder:text-dp-navy/40 border-2 border-transparent focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isLoading}
                        placeholder="Mail@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-white/95 text-dp-navy placeholder:text-dp-navy/40 border-2 border-transparent focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        disabled={isLoading}
                        placeholder="Tell us how we can help you..."
                        className="w-full px-4 py-3 rounded-lg bg-white/95 text-dp-navy placeholder:text-dp-navy/40 border-2 border-transparent focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                      ></textarea>
                    </div>
                    <div
                      className="cf-turnstile my-4"
                      data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                      data-callback="onTurnstileSuccess"
                    ></div>

                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="w-full bg-white text-dp-navy font-medium py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-dp-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-white/70 text-center pt-2">
                      Protected by Cloudflare Turnstile{" "}
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 underline">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 underline">
                        Terms of Service
                      </a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
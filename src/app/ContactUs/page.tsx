
// "use client";

// import React, { useState, useEffect } from "react";
// import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Globe } from "lucide-react";

// declare global {
//   interface Window {
//     grecaptcha: any;
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
//   const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

//   useEffect(() => {
//     const loadRecaptcha = () => {
//       if (
//         typeof window !== "undefined" &&
//         !window.grecaptcha &&
//         process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
//       ) {
//         const script = document.createElement("script");
//         script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
//         script.async = true;
//         script.defer = true;
//         script.onload = () => setRecaptchaLoaded(true);
//         script.onerror = () => console.warn("Failed to load reCAPTCHA");
//         document.head.appendChild(script);
//       } else if (window.grecaptcha) {
//         setRecaptchaLoaded(true);
//       }
//     };
//     loadRecaptcha();
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

//       let recaptchaToken = null;
//       if (
//         recaptchaLoaded &&
//         window.grecaptcha &&
//         process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
//       ) {
//         try {
//           recaptchaToken = await window.grecaptcha.execute(
//             process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
//             { action: "contact_form" }
//           );
//         } catch (err) {
//           console.warn("reCAPTCHA error:", err);
//         }
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
//           recaptchaToken
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
//       <section className="relative h-[50vh] min-h-[400px] bg-gradient-to-br from-[#D3ECCD] via-[#BBF1C8] to-[#41B06E] overflow-hidden">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <Mail className="absolute top-20 left-10 w-16 h-16 text-white opacity-20 animate-pulse" style={{ animationDuration: '3s' }} />
//           <Phone className="absolute top-40 right-20 w-12 h-12 text-white opacity-15 animate-pulse" style={{ animationDuration: '4s' }} />
//           <MessageSquare className="absolute bottom-20 left-1/4 w-20 h-20 text-white opacity-10 animate-pulse" style={{ animationDuration: '5s' }} />
//           <Send className="absolute top-1/3 right-1/4 w-14 h-14 text-white opacity-15 animate-pulse" style={{ animationDuration: '3.5s' }} />
//         </div>

//         <svg
//           className="absolute bottom-0 left-0 w-full"
//           viewBox="0 0 1440 120"
//           preserveAspectRatio="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M0,64 C360,100 720,20 1440,64 L1440,120 L0,120 Z"
//             fill="#ffffff"
//           />
//         </svg>

//         <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
//           <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
//             {/* Left: Hero Text */}
//             <div>
//               <h1 className="text-5xl lg:text-7xl font-bold text-[#1C352D] mb-6 my-9 leading-tight">
//                 Let's Start a<br />
//                 <span className="text-[#06923E]">Conversation</span>
//               </h1>
//               <p className="text-lg text-[#342B38] mb-8 max-w-xl">
//                 We're here to help and answer any question you might have. We look forward to hearing from you!
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <div className="flex items-center gap-3 bg-white/30 backdrop-blur-lg px-5 py-3 rounded-full">
//                   <div className="w-10 h-10 bg-[#06923E] rounded-full flex items-center justify-center">
//                     <Mail className="w-5 h-5 text-white" />
//                   </div>
//                   <span className="text-[#1C352D] font-medium">info@datapanthersolutions.com</span>
//                 </div>
//                 <div className="flex items-center gap-3 bg-white/30 backdrop-blur-sm px-5 py-3 rounded-full">
//                   <div className="w-10 h-10 bg-[#06923E] rounded-full flex items-center justify-center">
//                     <Phone className="w-5 h-5 text-white" />
//                   </div>
//                   <span className="text-[#1C352D] font-medium">+91 9121582497</span>
//                 </div>
//               </div>
//             </div>


//           </div>
//         </div>
//       </section>


//       <section className="relative py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid lg:grid-cols-5 gap-12 items-start">
//             {/* Left Sidebar - Contact Info (No Boxes) */}
//             <div className="lg:col-span-2 space-y-10">
//               <div>
//                 <h2 className="text-3xl font-Mobile text-[#1C352D] mb-6">Contact Information</h2>
//                 <p className="text-gray-600 leading-relaxed">
//                   We're here to help and answer any question you might have. We look forward to hearing from you.
//                 </p>
//               </div>

//               {/* Email */}
//               <div className="flex items-start gap-4 group">
//                 <div className="flex-shrink-0">
//                   <div className="w-14 h-14 bg-gradient-to-br from-[#FF9595] to-[#ff7b7b] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
//                     <Mail className="w-7 h-7 text-white" />
//                   </div>
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-lg font-semibold text-[#1C352D] mb-1">Email Us</h3>
//                   <p className="text-gray-600 text-sm mb-2">Send us an email anytime</p>
//                   <a href="mailto:contact@company.com" className="text-[#06923E] font-semibold hover:text-[#1C352D] text-sm transition-colors inline-flex items-center gap-1">
//                     info@datapanthersolutions.com
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-start gap-4 group">
//                 <div className="flex-shrink-0">
//                   <div className="w-14 h-14 bg-[#1C7293] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
//                     <Phone className="w-7 h-7 text-[#F1F2EB]" />
//                   </div>
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-lg font-semibold text-[#1C352D] mb-1">Call Us</h3>
//                   <p className="text-gray-600 text-sm mb-2">Mon-Fri from 9am to 6pm</p>
//                   <a href="tel:+1234567890" className="text-[#06923E] font-semibold hover:text-[#1C352D] text-sm transition-colors inline-flex items-center gap-1">
//                     +91 9948531867
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>

//               {/* Location */}
//               <div className="flex items-start gap-4 group">
//                 <div className="flex-shrink-0">
//                   <div className="w-14 h-14 bg-gradient-to-br from-[#D3ECCD] to-[#BBF1C8] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
//                     <MapPin className="w-7 h-7 text-[#06923E]" />
//                   </div>
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-lg font-semibold text-[#1C352D] mb-1">Visit Us</h3>
//                   <p className="text-gray-600 text-sm mb-2">Come say hello at our office</p>
//                   <p className="text-[#06923E] font-semibold text-sm leading-relaxed">
//                     Hyderabad, Telangana
//                   </p>
//                 </div>
//               </div>

//               {/* Business Hours */}
//               <div className="flex items-start gap-4 group">
//                 <div className="flex-shrink-0">
//                   <div className="w-14 h-14 bg-[#40394A] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
//                     <Clock className="w-7 h-7 text-white" />
//                   </div>
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-lg font-semibold text-[#1C352D] mb-1">Business Hours</h3>
//                   <p className="text-gray-600 text-sm mb-2">Monday - Friday</p>
//                   <p className="text-[#06923E] font-semibold text-sm">9:00 AM - 6:00 PM IST</p>
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-3">
//               <div className="bg-white  overflow-hidden border border-gray-100">
//                 <div className="grid lg:grid-cols-2">

//                   <div className="hidden lg:block relative h-full min-h-[600px]">
//                     <img
//                       src="/C.png"
//                       alt="Customer Support"
//                       className="absolute inset-0 w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 flex flex-col justify-end p-10">
//                       <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
//                         <div className="flex items-center gap-3 mb-4">
//                           <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//                           <span className="text-white font-semibold">We're Online</span>
//                         </div>
//                         <p className="text-white/90 text-sm leading-relaxed">
//                           Our team is ready to assist you. Get in touch and we'll respond as soon as possible.
//                         </p>
//                       </div>
//                     </div>
//                   </div>


//                   {/* Contact Form */}
//                   <div className="p-10">
//                     <div className="mb-8">
//                       <h2 className="text-3xl font-semibold text-[#1C352D] mb-3">Send us a Message</h2>
//                       <p className="text-gray-600">Fill out the form and we'll be in touch soon!</p>
//                     </div>

//                     {success && (
//                       <div className="mb-6 px-4 py-4 rounded-xl bg-green-50 text-green-800 text-sm border border-green-200 flex items-start gap-3">
//                         <div className="w-5 h-5 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                           <svg className="w-3 h-3 text-green-700" fill="currentColor" viewBox="0 0 20 20">
//                             <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                           </svg>
//                         </div>
//                         <span>{success}</span>
//                       </div>
//                     )}

//                     {error && (
//                       <div className="mb-6 px-4 py-4 rounded-xl bg-red-50 text-red-800 text-sm border border-red-200 flex items-start gap-3">
//                         <div className="w-5 h-5 bg-red-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                           <svg className="w-3 h-3 text-red-700" fill="currentColor" viewBox="0 0 20 20">
//                             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                           </svg>
//                         </div>
//                         <span>{error}</span>
//                       </div>
//                     )}

//                     <div className="space-y-5">
//                       <div>
//                         <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
//                           Full Name *
//                         </label>
//                         <input
//                           id="fullName"
//                           name="fullName"
//                           type="text"
//                           value={formData.fullName}
//                           onChange={handleInputChange}
//                           required
//                           disabled={isLoading}
//                           placeholder="Your Name"
//                           className="w-full px-4 py-3 border-2 border-gray-200  focus:ring-2 focus:ring-[#06923E] focus:border-transparent transition-all duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
//                         />
//                       </div>

//                       <div>
//                         <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
//                           Email Address *
//                         </label>
//                         <input
//                           id="email"
//                           name="email"
//                           type="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           required
//                           disabled={isLoading}
//                           placeholder="Mail@example.com"
//                           className="w-full px-4 py-3 border-2 border-gray-200 focus:ring-2 focus:ring-[#06923E] focus:border-transparent transition-all duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
//                         />
//                       </div>

//                       <div>
//                         <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
//                           Your Message *
//                         </label>
//                         <textarea
//                           id="message"
//                           name="message"
//                           rows={5}
//                           value={formData.message}
//                           onChange={handleInputChange}
//                           required
//                           disabled={isLoading}
//                           placeholder="Tell us how we can help you..."
//                           className="w-full px-4 py-3 border-2 border-gray-200 focus:ring-2 focus:ring-[#06923E] focus:border-transparent transition-all duration-200 resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
//                         ></textarea>
//                       </div>

//                       <button
//                         type="button"
//                         onClick={handleSubmit}
//                         disabled={isLoading}
//                         className="w-full bg-[#06923E] hover:from-[#1C352D] hover:to-[#06923E] text-white font-semibold py-4 px-6  transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
//                       >
//                         {isLoading ? (
//                           <>
//                             <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                             </svg>
//                             Sending...
//                           </>
//                         ) : (
//                           <>
//                             Send Message
//                             <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
//                           </>
//                         )}
//                       </button>

//                       <p className="text-xs text-gray-500 text-center pt-2">
//                         Protected by reCAPTCHA and subject to Google's{" "}
//                         <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#06923E] hover:text-[#1C352D] underline">
//                           Privacy Policy
//                         </a>{" "}
//                         and{" "}
//                         <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#06923E] hover:text-[#1C352D] underline">
//                           Terms of Service
//                         </a>.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Globe } from "lucide-react";

declare global {
  interface Window {
    grecaptcha: any;
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
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  useEffect(() => {
    const loadRecaptcha = () => {
      if (
        typeof window !== "undefined" &&
        !window.grecaptcha &&
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
      ) {
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js";
        script.async = true;
        script.defer = true;
        script.onload = () => setRecaptchaLoaded(true);
        script.onerror = () => console.warn("Failed to load reCAPTCHA");
        document.head.appendChild(script);
      } else if (window.grecaptcha) {
        setRecaptchaLoaded(true);
      }
    };
    loadRecaptcha();
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

      let recaptchaToken = null;

      if (window.grecaptcha) {
        recaptchaToken = window.grecaptcha.getResponse();
      }

      if (!recaptchaToken) {
        setError("Please complete the reCAPTCHA.");
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
          recaptchaToken
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
    <div className="relative min-h-screen overflow-hidden bg-white">
      <section className="relative h-[50vh] min-h-[400px] bg-gradient-to-br from-[#D3ECCD] via-[#BBF1C8] to-[#41B06E] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Mail className="absolute top-20 left-10 w-16 h-16 text-white opacity-20 animate-pulse" style={{ animationDuration: '3s' }} />
          <Phone className="absolute top-40 right-20 w-12 h-12 text-white opacity-15 animate-pulse" style={{ animationDuration: '4s' }} />
          <MessageSquare className="absolute bottom-20 left-1/4 w-20 h-20 text-white opacity-10 animate-pulse" style={{ animationDuration: '5s' }} />
          <Send className="absolute top-1/3 right-1/4 w-14 h-14 text-white opacity-15 animate-pulse" style={{ animationDuration: '3.5s' }} />
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64 C360,100 720,20 1440,64 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left: Hero Text */}
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold text-[#1C352D] mb-6 my-9 leading-tight">
                Let's Start a<br />
                <span className="text-[#06923E]">Conversation</span>
              </h1>
              <p className="text-lg text-[#342B38] mb-8 max-w-xl">
                We're here to help and answer any question you might have. We look forward to hearing from you!
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-white/30 backdrop-blur-lg px-5 py-3 rounded-full">
                  <div className="w-10 h-10 bg-[#06923E] rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[#1C352D] font-medium">info@datapanthersolutions.com</span>
                </div>
                <div className="flex items-center gap-3 bg-white/30 backdrop-blur-sm px-5 py-3 rounded-full">
                  <div className="w-10 h-10 bg-[#06923E] rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[#1C352D] font-medium">+91 9121582497</span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>


      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Sidebar - Contact Info (No Boxes) */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-3xl font-Mobile text-[#1C352D] mb-6">Contact Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  We're here to help and answer any question you might have. We look forward to hearing from you.
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FF9595] to-[#ff7b7b] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#1C352D] mb-1">Email Us</h3>
                  <p className="text-gray-600 text-sm mb-2">Send us an email anytime</p>
                  <a href="mailto:contact@company.com" className="text-[#06923E] font-semibold hover:text-[#1C352D] text-sm transition-colors inline-flex items-center gap-1">
                    info@datapanthersolutions.com
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#1C7293] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Phone className="w-7 h-7 text-[#F1F2EB]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#1C352D] mb-1">Call Us</h3>
                  <p className="text-gray-600 text-sm mb-2">Mon-Fri from 9am to 6pm</p>
                  <a href="tel:+1234567890" className="text-[#06923E] font-semibold hover:text-[#1C352D] text-sm transition-colors inline-flex items-center gap-1">
                    +91 9948531867
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#D3ECCD] to-[#BBF1C8] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <MapPin className="w-7 h-7 text-[#06923E]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#1C352D] mb-1">Visit Us</h3>
                  <p className="text-gray-600 text-sm mb-2">Come say hello at our office</p>
                  <p className="text-[#06923E] font-semibold text-sm leading-relaxed">
                    Hyderabad, Telangana
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#40394A] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#1C352D] mb-1">Business Hours</h3>
                  <p className="text-gray-600 text-sm mb-2">Monday - Friday</p>
                  <p className="text-[#06923E] font-semibold text-sm">9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white  overflow-hidden border border-gray-100">
                <div className="grid lg:grid-cols-2">

                  <div className="hidden lg:block relative h-full min-h-[600px]">
                    <img
                      src="/C.png"
                      alt="Customer Support"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-10">
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-white font-semibold">We're Online</span>
                        </div>
                        <p className="text-white/90 text-sm leading-relaxed">
                          Our team is ready to assist you. Get in touch and we'll respond as soon as possible.
                        </p>
                      </div>
                    </div>
                  </div>


                  {/* Contact Form */}
                  <div className="p-10">
                    <div className="mb-8">
                      <h2 className="text-3xl font-semibold text-[#1C352D] mb-3">Send us a Message</h2>
                      <p className="text-gray-600">Fill out the form and we'll be in touch soon!</p>
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
                        <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
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
                          className="w-full px-4 py-3 border-2 border-gray-200  focus:ring-2 focus:ring-[#06923E] focus:border-transparent transition-all duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
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
                          className="w-full px-4 py-3 border-2 border-gray-200 focus:ring-2 focus:ring-[#06923E] focus:border-transparent transition-all duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
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
                          className="w-full px-4 py-3 border-2 border-gray-200 focus:ring-2 focus:ring-[#06923E] focus:border-transparent transition-all duration-200 resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                        ></textarea>
                      </div>
                      <div
                        className="g-recaptcha my-4"
                        data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                      ></div>

                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="w-full bg-[#06923E] hover:from-[#1C352D] hover:to-[#06923E] text-white font-semibold py-4 px-6  transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                      >
                        {isLoading ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                          </>
                        )}
                      </button>

                      <p className="text-xs text-gray-500 text-center pt-2">
                        Protected by reCAPTCHA and subject to Google's{" "}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#06923E] hover:text-[#1C352D] underline">
                          Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#06923E] hover:text-[#1C352D] underline">
                          Terms of Service
                        </a>.
                      </p>
                    </div>
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


"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

 const faqs = [
  {
    question: "What services does DataPantherSolutions offer?",
    answer:
      "We provide end-to-end data solutions including data analytics, AI integration, cloud infrastructure, and business intelligence consulting tailored to your industry needs.",
  },
  {
    question: "How do I get started with your services?",
    answer:
      "You can reach out through our contact form, email, or schedule a free consultation to discuss your goals and how we can support your business.",
  },
  {
    question: "Do you offer customized solutions for businesses?",
    answer:
      "Yes, all our solutions are fully customized based on your business requirements, industry challenges, and data maturity level.",
  },
  {
    question: "Is my data secure with DataPantherSolutions?",
    answer:
      "Absolutely. We follow strict data privacy protocols and comply with GDPR and other international standards to ensure your data is protected.",
  },
  {
    question: "What are your working hours and support availability?",
    answer:
      "Our team is available Monday to Friday, 9:00 AM to 7:00 PM IST. For critical issues, we provide 24/7 support for enterprise clients.",
  },
];


  return (
    <>
      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover mt-12 bg-[url('/ContactPage.png')] bg-cover"
      
      >
        <div className="flex flex-col min-h-screen bg-black/60">
          <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
            <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
              {/* Left Text Section */}
              <div className="text-white lg:w-1/2 lg:mx-6">
                <h1 className="text-2xl font-semiserif capitalize lg:text-3xl">
                  Empowering IT with AI-Driven Innovation
                </h1>
                <p className="max-w-xl mt-6">
                  At{" "}
                  <span className="font-semiserif text-green-400">
                    Data Panther
                  </span>
                  , we help IT companies unlock business potential with advanced
                  analytics, AI solutions, and intelligent automation.
                </p>
                <button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none">
                  Get in Touch
                </button>

               
                <div className="mt-8">
  <h3 className="text-gray-300 text-sm uppercase tracking-wide">Follow us</h3>
  <div className="flex mt-4 gap-6">
    {/* LinkedIn */}
    <a
      href="https://linkedin.com/company/data-panther"
      className="text-white hover:text-green-400 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 8.98h4v12H3zM9.5 8.98h3.8v1.64h.05c.53-.99 1.84-2.04 3.78-2.04 4.05 0 4.8 2.67 4.8 6.13V21h-4v-5.2c0-1.24-.03-2.84-1.73-2.84-1.74 0-2 1.36-2 2.75V21h-4z" />
      </svg>
    </a>

    {/* Email */}
    <a
      href="mailto:info@datapanther.com"
      className="text-white hover:text-green-400 transition-colors"
      aria-label="Email"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M20 4H4a2 2 0 0 0-2 2v12c0 1.103.897 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.511l-8 5.333-8-5.333V6h16ZM4 18V8.489l8 5.333 8-5.333V18H4Z" />
      </svg>
    </a>
  </div>
</div>


              </div>

              {/* Right Form Section */}
              <div className="mt-10 lg:w-1/2 lg:mx-6">
                <div className="w-full px-8 py-10 bg-white rounded-xl shadow-2xl dark:bg-gray-900 lg:max-w-xl">
                  <h1 className="text-xl font-medium text-gray-700 dark:text-white">
                    Contact Form
                  </h1>
                  <p className="mt-2 text-gray-500 dark:text-gray-300">
                    Ask us anything. We’d love to hear from you.
                  </p>

                  <form className="mt-6 space-y-6">
                    <div>
                      <label className="block text-sm text-gray-600 dark:text-white">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 dark:text-white">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 dark:text-white">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Write your message..."
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-900 dark:text-white"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semiserif text-gray-800 dark:text-white lg:text-3xl">
            FAQs
          </h1>
          <hr className="my-6 border-gray-300 dark:border-gray-700" />

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() =>
                    setActiveIndex(index === activeIndex ? null : index)
                  }
                  className="flex items-center w-full text-left focus:outline-none"
                >
                  <svg
                    className={`w-6 h-6 text-blue-500 transform transition-transform ${
                      activeIndex === index ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <h2 className="ml-4 text-lg font-medium text-gray-800 dark:text-white">
                    {faq.question}
                  </h2>
                </button>
                {activeIndex === index && (
                  <p className="mt-3 ml-10 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                )}
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
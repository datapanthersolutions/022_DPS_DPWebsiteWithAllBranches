
"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How can I pay for my appointment?",
      answer:
        "You can pay using credit/debit cards, UPI, net banking, or cash upon visit. We also support certain insurance reimbursements.",
    },
    {
      question: "What can I expect at my first consultation?",
      answer:
        "Your first consultation will include a comprehensive discussion of your goals, medical history, and tailored solutions.",
    },
    {
      question: "What are your opening hours?",
      answer:
        "We are open Monday to Saturday, 9:00 AM to 6:00 PM IST. Sunday closed.",
    },
    {
      question: "Do I need a referral?",
      answer:
        "No referral is required. You can book directly through our website or contact form.",
    },
    {
      question:
        "Is the cost of the appointment covered by private health insurance?",
      answer:
        "Coverage depends on your provider and plan. We can provide documentation for claims.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover mt-12"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80')",
        }}
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

                {/* Social Links */}
                <div className="mt-8">
                  <h3 className="text-gray-300">Follow us</h3>
                  <div className="flex mt-4 gap-4">
                    <a
                      href="#"
                      className="text-white hover:text-green-400 transition-colors"
                    >
                      <i className="fab fa-twitter text-2xl">X</i>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-green-400 transition-colors"
                    >
                      <i className="fab fa-linkedin text-2xl">in</i>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-green-400 transition-colors"
                    >
                      <i className="fab fa-facebook text-2xl">f</i>
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
      <section className="bg-white dark:bg-gray-900">
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
      </section>
    </>
  );
}
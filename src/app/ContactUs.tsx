
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { view } from "framer-motion/client";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 mt-50 py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-4"
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12"
        >
          We'd love to hear from you. Whether you have a question or just want to say hi, our team is ready to help.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-600 w-6 h-6" />
              <span className="text-gray-700">data.sage.ltd@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-blue-600 w-6 h-6" />
              <span className="text-gray-700">+91 9618040654</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-600 w-6 h-6" />
              <span className="text-gray-700">Hyderabad, India</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-gray-50px rounded-xl shadow-xl p-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700">Name</label>
              <input
                type="text"
                required
                placeholder="Your Name"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                required
                placeholder="Your Email"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">Message</label>
              <textarea
                rows={4}
                required
                placeholder="How can we help you?"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all font-semibold"
            >
              Send Message
            </button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                className="text-green-600 text-center"
              >
                ✅ Your message has been submitted!
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
}

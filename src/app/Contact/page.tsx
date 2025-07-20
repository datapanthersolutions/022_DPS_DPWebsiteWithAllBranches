// "use client";
// import React from "react";

// export default function ContactPage() {
//   return (
//     <>
//     <section
//       className="min-h-screen bg-cover mt-12"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80')",
//       }}
//     >
//       <div className="flex flex-col min-h-screen bg-black/60">
//         <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
//           <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
//             {/* Left Text Section */}
//             <div className="text-white lg:w-1/2 lg:mx-6">
//             <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
//   Empowering IT with AI-Driven Innovation
// </h1>
// <p className="max-w-xl mt-6">
//   At <span className="font-semibold text-green-400">Data Panther</span>, we help IT companies unlock business potential with advanced analytics, AI solutions, and intelligent automation. From data strategy to deployment, we turn complexity into clarity and innovation into impact.
// </p>


//               <button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
//                 Get in Touch
//               </button>

//                <div className="mt-6 md:mt-8">
//                         <h3 className="text-gray-300 ">Follow us</h3>

//                         <div className="flex mt-4 -mx-1.5 ">
//                             <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-green-500" href="#">
//                                 <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
//                                 </svg>
//                             </a>

//                             <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-green-500" href="#">
//                                 <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
//                                     <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
//                                     <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
//                                 </svg>
//                             </a>

//                             <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-green-500" href="#">
//                                 <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z" fill="currentColor" />
//                                 </svg>
//                             </a>

//                             <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-green-500" href="#">
//                                 <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z" fill="currentColor" />
//                                 </svg>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
             
             

//             {/* Right Form Section */}
//             <div className="mt-8 lg:w-1/2 lg:mx-6">
//               <div className="w-full px-8 py-10 mx-auto bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
//                 <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">
//                   Contact Form
//                 </h1>
//                 <p className="mt-2 text-gray-500 dark:text-gray-400">
//                   Ask us anything. We’d love to hear from you.
//                 </p>

//                 <form className="mt-6 space-y-6">
//                   <div>
//                     <label className="block mb-1 text-sm text-gray-600 dark:text-gray-200">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="John Doe"
//                       className="w-full px-5 py-3 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
//                     />
//                   </div>

//                   <div>
//                     <label className="block mb-1 text-sm text-gray-600 dark:text-gray-200">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       placeholder="john@example.com"
//                       className="w-full px-5 py-3 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
//                     />
//                   </div>

//                   <div>
//                     <label className="block mb-1 text-sm text-gray-600 dark:text-gray-200">
//                       Message
//                     </label>
//                     <textarea
//                       rows={5}
//                       placeholder="Write your message..."
//                       className="w-full px-5 py-3 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
//                     ></textarea>
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-500 transition duration-300 focus:outline-none focus:ring focus:ring-blue-300"
//                   >
//                     Send Message
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
   
//     </section>
//     <section className ="bg-white dark:bg-gray-900">
//     <div class="container px-6 py-10 mx-auto">
//         <h1 class="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">FAQ's</h1>

//         <hr class="my-6 border-gray-200 dark:border-gray-700">

//         <div>
//             <div>
//                 <button class="flex items-center focus:outline-none">
//                     <svg class="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>

//                     <h1 class="mx-4 text-xl text-gray-700 dark:text-white">How can I pay for my appointment ?</h1>
//                 </button>

//                 <div class="flex mt-8 md:mx-10">
//                     <span class="border border-blue-500"></span>

//                     <p class="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
//                     </p>
//                 </div>
//             </div>

//             <hr class="my-8 border-gray-200 dark:border-gray-700">

//             <div>
//                 <button class="flex items-center focus:outline-none">
//                     <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
//                     </svg>

//                     <h1 class="mx-4 text-xl text-gray-700 dark:text-white">What can I expect at my first consultation ?</h1>
//                 </button>
//             </div>

//             <hr class="my-8 border-gray-200 dark:border-gray-700">

//             <div>
//                 <button class="flex items-center focus:outline-none">
//                     <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
//                     </svg>

//                     <h1 class="mx-4 text-xl text-gray-700 dark:text-white">What are your opening hours ?</h1>
//                 </button>
//             </div>

//             <hr class="my-8 border-gray-200 dark:border-gray-700">

//             <div>
//                 <button class="flex items-center focus:outline-none">
//                     <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
//                     </svg>

//                     <h1 class="mx-4 text-xl text-gray-700 dark:text-white">Do I need a referral ?</h1>
//                 </button>
//             </div>

//             <hr class="my-8 border-gray-200 dark:border-gray-700">

//             <div>
//                 <button class="flex items-center focus:outline-none">
//                     <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
//                     </svg>

//                     <h1 class="mx-4 text-xl text-gray-700 dark:text-white">Is the cost of the appointment covered by private health insurance ?</h1>
//                 </button>
//             </div>
//         </div>
//     </div>
// </section>
//     </>
//   );
// }

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
                <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                  Empowering IT with AI-Driven Innovation
                </h1>
                <p className="max-w-xl mt-6">
                  At{" "}
                  <span className="font-semibold text-green-400">
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
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
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

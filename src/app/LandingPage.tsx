

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { AuroraBackground } from "@/components/ui/aurora-background";

// // Constants
// const darkGreen = "#22c55e"; // Tailwind green-500
// const dataText = "DATA";
// const pantherText = "PANTHER";

// export default function LandingPage() {
//   return (
//     <AuroraBackground>
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//         className="relative flex flex-col gap-4 items-center justify-center px-4 min-h-screen text-center"
//       >
        
//         {/* Animated DATA (green) + PANTHER (black) */}
//         <div className="text-4xl md:text-7xl font-montserrat font-bold flex flex-wrap justify-center gap-x-2">
//           {/* DATA in green */}
//           <div className="text-green-500 flex">
//             {dataText.split("").map((char, index) => (
//               <motion.span
//                 key={`data-${char}-${index}`}
//                 initial={{ y: 0 }}
//                 animate={{
//                   y: [0, -3, 0],
//                   scale: [1, 1.02, 1],
//                   filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
//                   opacity: [1, 0.9, 1],
//                 }}
//                 transition={{
//                   duration: 0.4,
//                   delay: index * 0.05,
//                 }}
//                 className="inline-block"
//               >
//                 {char}
//               </motion.span>
//             ))}
//           </div>

//           {/* PANTHER in black (or white in dark mode) */}
//           <div className="text-black dark:text-white flex">
//             {pantherText.split("").map((char, index) => (
//               <motion.span
//                 key={`panther-${char}-${index}`}
//                 initial={{ y: 0 }}
//                 animate={{
//                   y: [0, -3, 0],
//                   scale: [1, 1.02, 1],
//                   filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
//                   opacity: [1, 0.9, 1],
//                 }}
//                 transition={{
//                   duration: 0.4,
//                   delay: (dataText.length + index) * 0.05, // starts after DATA
//                 }}
//                 className="inline-block"
//               >
//                 {char}
//               </motion.span>
//             ))}
//           </div>
//         </div>

//         {/* Tagline: Empower Data Solutions */}
//         <p className="text-base md:text-xl mt-2 text-gray-600 dark:text-gray-300 font-medium tracking-wide">
//           Empower Data Solutions
//         </p>

//         {/* Description below */}
//         <div className="text-lg md:text-2xl dark:text-white  mt-4 max-w-3xl">
//           Unlocking the full potential of your data through innovative, scalable, and secure solutions.
//         </div>

//         {/* CTA Button */}
//         <button
//           className="mt-6 bg-transparent border-2 border-green-500 rounded-full px-8 py-3 text-lg text-green-500 shadow-lg hover:bg-green-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 cursor-pointer font-mono"
//           style={{ letterSpacing: "0.08em" }}
//           onClick={() => alert("Get Started clicked!")}
//         >
//           GET STARTED
//         </button>
//       </motion.div>
//     </AuroraBackground>
//   );
// }


// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { AuroraBackground } from "@/components/ui/aurora-background";

// // Constants
// const darkGreen = "#22c55e"; // Tailwind green-500
// const dataText = "DATA";
// const pantherText = "PANTHER";

// export default function LandingPage() {
//   return (
//     <AuroraBackground>
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//         className="relative flex flex-col items-center justify-center px-4 min-h-screen text-center"
//       >
//         {/* Content Wrapper */}
//         <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 px-4 md:px-8">
//           {/* Left: Text Content */}
//           <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
//             {/* Animated DATA (green) + PANTHER (black) */}
//             <div className="text-4xl md:text-7xl font-poppins font-bold flex flex-wrap justify-center md:justify-start gap-x-2">
//               <div className="text-green-500 flex">
//                 {dataText.split("").map((char, index) => (
//                   <motion.span
//                     key={`data-${char}-${index}`}
//                     initial={{ y: 0 }}
//                     animate={{
//                       y: [0, -3, 0],
//                       scale: [1, 1.02, 1],
//                       filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
//                       opacity: [1, 0.9, 1],
//                     }}
//                     transition={{
//                       duration: 0.4,
//                       delay: index * 0.05,
//                     }}
//                     className="inline-block"
//                   >
//                     {char}
//                   </motion.span>
//                 ))}
//               </div>

//               <div className="text-black dark:text-white flex">
//                 {pantherText.split("").map((char, index) => (
//                   <motion.span
//                     key={`panther-${char}-${index}`}
//                     initial={{ y: 0 }}
//                     animate={{
//                       y: [0, -3, 0],
//                       scale: [1, 1.02, 1],
//                       filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
//                       opacity: [1, 0.9, 1],
//                     }}
//                     transition={{
//                       duration: 0.4,
//                       delay: (dataText.length + index) * 0.05,
//                     }}
//                     className="inline-block"
//                   >
//                     {char}
//                   </motion.span>
//                 ))}
//               </div>
//             </div>

//             {/* Tagline */}
//             <p className="text-base md:text-xl mt-3 text-gray-600 dark:text-gray-300 font-medium tracking-wide">
//               Empower Data Solutions
//             </p>

//             {/* Description */}
//             <p className="text-lg md:text-2xl dark:text-white mt-4 max-w-xl">
//               Unlocking the full potential of your data through innovative, scalable, and secure solutions.
//             </p>

//             {/* CTA Button */}
//             <button
//               className="mt-6 bg-transparent border-2 border-green-500 rounded-full px-8 py-3 text-lg text-green-500 shadow-lg hover:bg-green-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 cursor-pointer font-mono"
//               style={{ letterSpacing: "0.08em" }}
//               onClick={() => alert("Get Started clicked!")}
//             >
//               GET STARTED
//             </button>
//           </div>

//           {/* Right: Image */}
//           <div className="flex-1 flex justify-center md:justify-end">
//             <img
//               src="/LandingImage.png"
//               alt="Panther Illustration"
//               className="w-full max-w-[320px] md:max-w-[400px] h-auto object-contain rounded-xl shadow-xl"
//               style={{ background: "rgba(255,255,255,0.05)" }}
//             />
//           </div>
//         </div>
//       </motion.div>
//     </AuroraBackground>
//   );
// }


// import React from "react";

// export default function LandingPage() {
//   const dataText = "DATA";
//   const pantherText = "PANTHER";

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
//       {/* Aurora Background Effect */}
//       <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-blue-500/20 to-purple-600/20 animate-pulse"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400/10 via-transparent to-transparent"></div>
      
//       {/* Main Content */}
//       <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
//           {/* Left Content */}
//           <div className="text-center lg:text-left space-y-6">
//             {/* Animated Title */}
//             <div className="text-5xl lg:text-7xl font-bold flex flex-wrap justify-center lg:justify-start gap-x-3">
//               <div className="text-green-400 flex">
//                 {dataText.split("").map((char, index) => (
//                   <span
//                     key={index}
//                     className="inline-block animate-bounce"
//                     style={{ 
//                       animationDelay: `${index * 0.1}s`,
//                       animationDuration: '2s'
//                     }}
//                   >
//                     {char}
//                   </span>
//                 ))}
//               </div>
//               <div className="text-white flex">
//                 {pantherText.split("").map((char, index) => (
//                   <span
//                     key={index}
//                     className="inline-block animate-bounce"
//                     style={{ 
//                       animationDelay: `${(dataText.length + index) * 0.1}s`,
//                       animationDuration: '2s'
//                     }}
//                   >
//                     {char}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Tagline */}
//             <p className="text-xl text-green-300 font-semibold tracking-wider">
//               EMPOWER DATA SOLUTIONS
//             </p>

//             {/* Description */}
//             <p className="text-xl text-gray-300 max-w-2xl">
//               Unlocking the full potential of your data through innovative, scalable, and secure solutions.
//             </p>

//             {/* CTA Button */}
//             <button
//               className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:from-green-400 hover:to-green-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
//               onClick={() => alert("Get Started clicked!")}
//             >
//               <span className="relative z-10 tracking-wider">GET STARTED</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </button>
//           </div>

//           {/* Right Image */}
//           <div className="flex justify-center lg:justify-end">
//             <div className="relative group">
             
//                    <img src="/LandingImage.png"></img>
                  
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute top-20 left-10 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
//       <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
//       <div className="absolute bottom-20 left-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
//     </div>
//   );
// }

// import React from "react";

// export default function LandingPage() {
//   const dataText = "DATA";
//   const pantherText = "PANTHER";

//   return (
//     <div className="min-h-screen bg-white relative overflow-hidden">
//       {/* Main Content */}
//       <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-10 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
//           {/* Left Content */}
//           <div className="text-center lg:text-left space-y-1">
//             {/* Animated Title */}
//             <div className="text-4xl sm:text-5xl lg:text-7xl font-bold flex flex-wrap justify-center lg:justify-start gap-x-3">
//               <div className="text-green-500 flex">
//                 {dataText.split("").map((char, index) => (
//                   <span
//                     key={index}
//                     className="inline-block animate-bounce"
//                     style={{ 
//                       animationDelay: `${index * 0.1}s`,
//                       animationDuration: '2s'
//                     }}
//                   >
//                     {char}
//                   </span>
//                 ))}
//               </div>
//               <div className="text-black flex">
//                 {pantherText.split("").map((char, index) => (
//                   <span
//                     key={index}
//                     className="inline-block animate-bounce"
//                     style={{ 
//                       animationDelay: `${(dataText.length + index) * 0.1}s`,
//                       animationDuration: '2s'
//                     }}
//                   >
//                     {char}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Tagline */}
//             <p className="text-lg sm:text-xl text-green-600 font-semibold tracking-wide">
//               EMPOWER DATA SOLUTIONS
//             </p>

//             {/* Description */}
//             <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
//               Unlocking the full potential of your data through innovative, scalable, and secure solutions.
//             </p>

//             {/* CTA Button */}
//             <button
//               className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-base sm:text-lg rounded-full overflow-hidden transition-all duration-300 hover:from-green-400 hover:to-green-500 hover:scale-105 hover:shadow-xl"
//               onClick={() => alert("Get Started clicked!")}
//             >
//               <span className="relative z-10 tracking-wider">GET STARTED</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </button>
//           </div>

//           {/* Right Image */}
//           <div className="flex justify-center lg:justify-end">
//             <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
//               <img
//                 src="/LandingImage.png"
//                 alt="Landing"
//                 className="w-full h-auto object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function LandingPage() {
  const dataText = "DATA";
  const pantherText = "PANTHER";

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Content - Centered Vertically and Horizontally */}
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-4">
              {/* Animated Title */}
              <div className="text-4xl sm:text-5xl lg:text-7xl font-bold flex flex-wrap justify-center gap-x-3">
                <div className="text-green-500 flex">
                  {dataText.split("").map((char, index) => (
                    <span
                      key={index}
                      className="inline-block animate-bounce"
                      style={{ 
                        animationDelay: `${index * 0.1}s`,
                        animationDuration: '2s'
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </div>
                <div className="text-black flex">
                  {pantherText.split("").map((char, index) => (
                    <span
                      key={index}
                      className="inline-block animate-bounce"
                      style={{ 
                        animationDelay: `${(dataText.length + index) * 0.1}s`,
                        animationDuration: '2s'
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tagline */}
              <p className="text-lg sm:text-xl text-green-600 font-semibold tracking-wide">
                EMPOWER DATA SOLUTIONS
              </p>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Unlocking the full potential of your data through innovative, scalable, and secure solutions.
              </p>

              {/* CTA Button */}
              <button
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-base sm:text-lg rounded-full overflow-hidden transition-all duration-300 hover:from-green-400 hover:to-green-500 hover:scale-105 hover:shadow-xl"
                onClick={() => alert("Get Started clicked!")}
              >
                <span className="relative z-10 tracking-wider">GET STARTED</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
              <img
                src="/handshake.png"
                alt="Landing"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

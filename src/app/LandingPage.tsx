
import React from "react";

export default function LandingPage() {
  const dataText = "DATA";
  const pantherText = "PANTHER";

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-10 sm:px-6 lg:px-8 mt-10">
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
                Unlocking the Full Potential of your Data through Innovative, Scalable, and Secure Solutions.
              </p>

              {/* CTA Button */}
              {/* <button
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-base sm:text-lg rounded-full overflow-hidden transition-all duration-300 hover:from-green-400 hover:to-green-500 hover:scale-105 hover:shadow-xl"
                onClick={() => alert("Get Started clicked!")}
              >
                <span className="relative z-10 tracking-wider">GET STARTED</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button> */}
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

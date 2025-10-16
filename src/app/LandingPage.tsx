import React from "react";

export default function LandingPage() {
  const dataText = "DATA";
  const pantherText = "PANTHER";

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-10 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-4">
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

              <p className="text-lg sm:text-xl text-green-600 font-semibold tracking-wide">
                EMPOWER DATA SOLUTIONS
              </p>

              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Unlocking the Full Potential of your Data through Innovative, Scalable, and Secure Solutions.
              </p>

            
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
              <img
                src="/handshake.png"
                alt="Landing"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
    <path fill="#D3ECCD" fillOpacity="1"
      d="M0,192L48,202.7C96,213,192,235,288,218.7C384,203,480,149,576,144C672,139,768,181,864,208C960,235,1056,245,1152,218.7C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
    </path>
  </svg>
        </div>
      </div>
    </div>
  );
}

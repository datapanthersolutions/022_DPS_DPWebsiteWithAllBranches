

// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";

// const ModernNavbar = () => {
//   const pathname = usePathname();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/AboutUs" },
//     { name: "Our Services", href: "/Services" },
//     { name: "Solutions", href: "/Solutions" },
//     { name: "Contact Us", href: "/ContactUs" },
//   ];

//   return (
//     <nav
//       className={`fixed w-full z-50 backdrop-blur-lg shadow-lg transition-all duration-300 ${
//         scrolled
//           ? "bg-white/85 border-b-0"
//           : "bg-white/80 border-b-0"
//       }`}
//     >
//       {/* Gradient green-black edge */}
//       <div className="absolute bottom-0 left-0 w-full h-[1px] bg-green-500"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20"> {/* Increased height */}
//           <Link href="/" className="flex items-center space-x-3">
//             <img
//               src="/dplatest.png"
//               alt="Data Panther Logo"
//               className="h-14 w-auto object-contain" // Slightly larger logo
//             />
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center space-x-1">
//             {navItems.map((item, index) => (
//               <Link
//                 key={index}
//                 href={item.href}
//                 className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium ${
//                   pathname === item.href
//                     ? "text-green-600 font-semibold"
//                     : scrolled
//                     ? "text-[#212121] hover:text-green-600 hover:bg-green-50"
//                     : "text-[#212121] hover:text-green-300 hover:bg-white/10"
//                 }`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
//               scrolled
//                 ? "text-gray-600 hover:text-green-600 hover:bg-green-50"
//                 : "text-black hover:text-slate-600 hover:bg-white/10"
//             }`}
//           >
//             {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>

//         {/* Mobile Dropdown */}
//         {isMenuOpen && (
//           <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg animate-fade-in">
//             <div className="px-4 py-6 space-y-4">
//               {navItems.map((item, index) => (
//                 <Link
//                   key={index}
//                   href={item.href}
//                   className="block w-full px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-300 font-medium"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Fade-in animation */}
//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.3s ease-out forwards;
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default ModernNavbar;


"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const ModernNavbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/AboutUs" },
    { name: "Our Services", href: "/Services" },
    { name: "Solutions", href: "/Solutions" },
    { name: "Contact Us", href: "/ContactUs" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 shadow-md transition-all duration-300 bg-white`}
    >
      {/* Optional thin green line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/dplatest.png"
              alt="Data Panther Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium ${
                  pathname === item.href
                    ? "text-green-600 font-semibold"
                    : "text-[#212121] hover:text-green-600 hover:bg-green-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-300"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block w-full px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fade-in animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default ModernNavbar;

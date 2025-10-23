
// "use client";
// import React from "react";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function GenerativeAIImpact() {
//   const articleSlug = "generative-ai";

//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-6xl mx-auto px-6 sm:px-12">
//         <div className="flex flex-col md:flex-row items-center gap-12">
//           {/* Image Section - Take Less Space */}
//           <div className="md:w-1/3 w-full p-4">
//             <img
//               src="https://cbx-prod.b-cdn.net/COLOURBOX26284188.jpg?width=800&height=800&quality=70"
//               alt="GenAi"
//               className="h-100 w-full object-contain"
//             />
//           </div>

//           {/* Content Section - Take More Space */}
//           <div className="md:w-2/3 w-full">
//             <h2 className="text-4xl font-serif text-gray-900 mb-4">
//               Generative AI Can Transform Business
//             </h2>
//             <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-2xl">
//               Generative AI is more than just a technological shift—it's a new paradigm 
//               for innovation. From automating workflows and content creation to enhancing 
//               decision-making and personalization, businesses across industries are rapidly 
//               adopting AI to stay competitive.
//             </p>

//             <Link href={`/article/${articleSlug}`}>
//               <button className="inline-flex items-center text-green-600 font-semiserif hover:underline group">
//                 Learn More
//                 <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function GenerativeAIImpact() {
  const articleSlug = "generative-ai";

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section - Larger proportion */}
          <div className="md:w-1/2 w-full p-4">
            <img
              src="https://cbx-prod.b-cdn.net/COLOURBOX26284188.jpg?width=800&height=800&quality=70"
              alt="Generative AI"
              className="w-full h-auto object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* Content Section - Adjusted width */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-4xl font-serif text-gray-900 mb-4 leading-snug">
              Generative AI Can Transform Business
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Generative AI is more than just a technological shift — it's a new paradigm 
              for innovation. From automating workflows and content creation to enhancing 
              decision-making and personalization, businesses across industries are rapidly 
              adopting AI to stay competitive.
            </p>

            <Link href={`/article/${articleSlug}`}>
              <button className="inline-flex items-center text-green-600 font-semibold hover:underline group">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

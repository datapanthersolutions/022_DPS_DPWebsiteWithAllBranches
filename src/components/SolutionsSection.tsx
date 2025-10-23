

// import { FC, JSX } from "react";
// import {
//   LightBulbIcon,
//   CogIcon,
//   ChartBarIcon,
// } from "@heroicons/react/24/outline";

// type Solution = {
//   title: string;
//   description: string;
//   icon: JSX.Element;
// };

// const solutions: Solution[] = [
//   {
//     title: "Automate Workflows",
//     description:
//       "Streamline your processes with intelligent automation and reduce manual tasks.",
//     icon: <CogIcon className="h-24 w-24 text-green-400" />,
//   },
//   {
//     title: "Improve Decision Making",
//     description:
//       "Gain real-time insights with advanced analytics and reporting tools.",
//     icon: <ChartBarIcon className="h-24 w-24 text-green-400" />,
//   },
//   {
//     title: "Boost Innovation",
//     description:
//       "Accelerate product development with powerful integrations and tools.",
//     icon: <LightBulbIcon className="h-24 w-24 text-green-400" />,
//   },
// ];

// const SolutionsSection: FC = () => {
//   return (
//     <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" id="solutions">
//       {/* Header */}
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="inline-block bg-red-100 rounded-full px-3 py-1 text-base text-red-500 font-semibold tracking-wide uppercase">
//           Our Solutions
//         </h2>
//         <p className="mt-4 text-3xl leading-8 font-montserrat tracking-tight text-gray-900 sm:text-4xl">
//           Tailored to solve your biggest challenges
//         </p>
//         <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
//           Explore how our solutions can help you optimize operations and grow
//           your business.
//         </p>
//       </div>

//       {/* Solutions with vertical dividers */}
//       <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3">
//         {solutions.map((solution, index) => (
//           <div
//             key={index}
//             className={`flex flex-col items-center text-center px-8 ${
//               index !== solutions.length - 1 ? "md:border-r md:border-red-400" : ""
//             }`}
//           >
//             <div className="flex items-center justify-center mb-6">{solution.icon}</div>
//             <h3 className="text-2xl font-montserrat  text-gray-900 mb-3">
//               {solution.title}
//             </h3>
//             <p className="text-gray-600">{solution.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SolutionsSection;


import { FC, JSX } from "react";
import {
  LightBulbIcon,
  CogIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

type Solution = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const solutions: Solution[] = [
  {
    title: "Automate Workflows",
    description:
      "Streamline your processes with intelligent automation and reduce manual tasks.",
    icon: <CogIcon className="h-24 w-24 text-gray-800" />,
  },
  {
    title: "Improve Decision Making",
    description:
      "Gain real-time insights with advanced analytics and reporting tools.",
    icon: <ChartBarIcon className="h-24 w-24 text-gray-800" />,
  },
  {
    title: "Boost Innovation",
    description:
      "Accelerate product development with powerful integrations and tools.",
    icon: <LightBulbIcon className="h-24 w-24 text-gray-800" />,
  },
];

const SolutionsSection: FC = () => {
  return (
   <section
  className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
  style={{ backgroundImage: "url('/oursol.png')" }} // Replace with your image
  id="solutions"
>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-center text-white">
        
        <p className="mt-4 text-3xl leading-8 font-montserrat tracking-tight sm:text-4xl">
          Tailored to solve your biggest challenges
        </p>
        <p className="mt-4 max-w-2xl text-xl mx-auto">
          Explore how our solutions can help you optimize operations and grow
          your business.
        </p>

        {/* Solutions Grid */}
        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center px-6 py-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg ${
                index !== solutions.length - 1 ? "md:border-r md:border-white/20" : ""
              }`}
            >
              <div className="flex items-center justify-center mb-6">{solution.icon}</div>
              <h3 className="text-2xl font-montserrat text-white mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-200">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

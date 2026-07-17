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
      <div className="absolute inset-0 bg-[#29235B]/60"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-center text-white">

        <h2 className="mt-4 text-3xl leading-8 font-light sm:text-4xl heading-font">
          Tailored to solve your biggest challenges
        </h2>
        <p className="mt-4 max-w-2xl text-xl font-light mx-auto heading-font">
          Explore how our solutions can help you optimize operations and grow
          your business.
        </p>

        {/* Solutions Grid */}
        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center px-6 py-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg ${index !== solutions.length - 1 ? "md:border-r md:border-white/20" : ""
                }`}
            >
              <div className="flex items-center justify-center mb-6">{solution.icon}</div>
              <h3 className="text-2xl font-light text-white mb-3 heading-font">
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
import React from "react";
import { FaEye, FaLightbulb, FaGlasses } from "react-icons/fa";

interface StrongPointProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const StrongPoint: React.FC<StrongPointProps> = ({
  icon: IconComponent,
  title,
  description,
}) => {
  return (
    <div className="bg-gradient-to-b from-[#D2E5E7] dark:from-[#2f2f2f] to-transparent shadow-md py-8 px-4 flex flex-col items-center text-center mx-auto max-w-xs rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
      <IconComponent size={48} className="text-[#69B2B7] dark:text-[#1F7A7E]" />
      <h2 className="text-lg font-semibold mb-2 text-[#69B2B7] dark:text-white p-2">
        {title}
      </h2>
      <p className="font-normal text-sm md:text-md">{description}</p>
    </div>
  );
};

export default function StrongPoints() {
  const strongPointsData = [
    {
      icon: FaEye,
      title: "Eye for Design",
      description:
        "I enjoy building beautiful applications that prioritize creative and user-friendly design.",
    },
    {
      icon: FaLightbulb,
      title: "Problem Solver",
      description:
        "I am a dedicated problem solver who thrives on challenges and swiftly finds solutions to varying problems.",
    },
    {
      icon: FaGlasses,
      title: "Keen to Learn",
      description:
        "I find joy in learning and firmly believe that continuous improvement is a vital aspect of web development.",
    },
  ];

  return (
    <div className="w-full flex my-4 flex-col justify-top items-center gap-4">
      <h1 className="text-[#69B2B7] dark:text-white font-medium md:font-bold text-2xl md:text-3xl leading-normal md:leading-relaxed drop-shadow p-4">
        At My Core
      </h1>
      <div className="flex flex-col md:flex-row items-stretch gap-6">
        {strongPointsData.map((point, index) => (
          <StrongPoint key={index} {...point} />
        ))}
      </div>
    </div>
  );
}

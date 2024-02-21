import React from "react";

export default function Skills() {
  const skillList: Array<String> = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Next JS",
    "Tailwind CSS",
    "SASS / SCSS",
    "Mongo DB",
    "Git",
    "Express",
    "Node JS",
    "REST API",
    "SQL",
    "C#",
    "GitHub",
  ];

  return (
    <div className="bg-[#D2E5E7] dark:bg-[#2f2f2f] w-full my-4 py-8 px-4 md:px-10 flex flex-row flex-wrap justify-center items-stretch gap-3 md:gap-4">
      {skillList.map((skill, index) => (
        <div
          key={index}
          className="bg-[#69B2B7] dark:bg-[#1F7A7E] text-white text-xs md:text-sm font-medium px-6 py-3 rounded-full shadow-md  duration-500 hover:scale-105 hover:shadow-xl"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}

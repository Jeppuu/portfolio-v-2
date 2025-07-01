import React from "react";
import { FaEye, FaLightbulb, FaGlasses } from "react-icons/fa";

interface StrongPointProps {
  icon: React.ElementType;
  title: string;
  description: string;
  accent: string;
}

const accentClassMap: Record<string, string> = {
  lavender: "lavender",
  blue: "blue",
  pink: "pink",
};

const StrongPoint = React.memo(
  ({ icon: IconComponent, title, description, accent }: StrongPointProps) => {
    const accentColor = accentClassMap[accent] || "mauve";
    return (
      <div
        className={`bg-gradient-to-b from-base/60 to-base/10 border border-${accentColor} border-opacity-40 shadow-lg shadow-mauve/20 rounded-xl p-8 flex flex-col items-center text-center mx-auto max-w-xs transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-mauve/20 hover:ring-1 hover:ring-${accentColor} group`}
      >
        <span className="relative flex items-center justify-center mb-2">
          <IconComponent
            size={48}
            className={`text-${accentColor} drop-shadow-lg group-hover:scale-110 transition duration-500`}
            aria-hidden="true"
          />
          <span className="absolute -top-3 -right-3 text-yellow text-xl opacity-80 motion-safe:animate-twinkle">
            ✨
          </span>
        </span>
        <h2
          className={`text-${accentColor} text-lg font-semibold mb-2 drop-shadow-lg`}
        >
          {title}
        </h2>
        <p className="font-normal text-text text-sm md:text-md">
          {description}
        </p>
      </div>
    );
  }
);

const strongPointsData = [
  {
    icon: FaEye,
    title: "Eye for Design",
    description:
      "I love creating beautiful, accessible applications that feel out of this world!",
    accent: "lavender",
  },
  {
    icon: FaLightbulb,
    title: "Problem Solver",
    description:
      "I thrive on cosmic challenges and swiftly navigate my way through them with creativity!",
    accent: "blue",
  },
  {
    icon: FaGlasses,
    title: "Curious Explorer",
    description:
      "I’m always learning, growing, and reaching for the stars. It's what sparks my joy!",
    accent: "pink",
  },
];

const StrongPoints = React.memo(() => {
  return (
    <section className="relative w-full max-w-3xl mx-auto flex flex-col items-start gap-8 p-6">
      <h2 className="text-text font-bold text-2xl md:text-3xl mb-6 drop-shadow-lg text-left">
        What's in my core?
      </h2>
      <div className="flex flex-col md:flex-row items-stretch gap-6">
        {strongPointsData.map((point) => (
          <StrongPoint key={point.title} {...point} />
        ))}
      </div>
    </section>
  );
});

export default StrongPoints;

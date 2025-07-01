import React from "react";

const skillList = [
  "HTML5",
  "CSS3",
  "SASS / SCSS",
  "TypeScript",
  "React",
  "Redux",
  "Next JS",
  "Tailwind CSS",
  "Material UI",
  "C#",
  "Express",
  "Node JS",
  "REST API",
  "SQL",
  "Mongo DB",
  "Git",
  "GitHub",
  "Azure DevOps",
];

const accentColors = [
  "bg-mauve/80",
  "bg-blue/80",
  "bg-pink/80",
  "bg-lavender/80",
  "bg-sky/80",
  "bg-sapphire/80",
];

const SkillMarquee = React.memo(
  ({
    skills,
    animationClass,
    accentColors,
    rowKey,
  }: {
    skills: string[];
    animationClass: string;
    accentColors: string[];
    rowKey: string;
  }) => {
    // Duplicate for seamless looping
    const marqueeSkills = [...skills, ...skills];
    return (
      <div
        className={`flex gap-4 justify-center w-full whitespace-nowrap ${animationClass}`}
      >
        {marqueeSkills.map((skill, index) => (
          <div
            key={`${skill}-${rowKey}-${index}`}
            className={`
              ${accentColors[index % accentColors.length]}
              text-crust text-xs md:text-sm font-semibold px-6 py-3 rounded-full shadow-lg shadow-mauve/20
              transition duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-mauve/40
              select-none
            `}
            style={{
              letterSpacing: "0.04em",
              textShadow: "0 1px 8px rgba(198,160,246,0.18)",
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    );
  }
);

const Skills = React.memo(() => {
  const half = Math.ceil(skillList.length / 2);
  const firstRow = skillList.slice(0, half);
  const secondRow = skillList.slice(half);

  return (
    <section className="relative overflow-x-hidden w-full max-w-3xl mx-auto flex flex-col items-start gap-8 p-6">
      <h2 className="text-text font-bold text-2xl md:text-3xl mb-6 drop-shadow-lg text-left">
        What can I do?
      </h2>
      {/* First marquee: left to right */}
      <SkillMarquee
        skills={firstRow}
        animationClass="motion-safe:animate-marquee"
        accentColors={accentColors}
        rowKey="row1"
      />
      {/* Second marquee: right to left */}
      <SkillMarquee
        skills={secondRow}
        animationClass="motion-safe:animate-marqueeReverse"
        accentColors={accentColors}
        rowKey="row2"
      />
    </section>
  );
});

export default Skills;

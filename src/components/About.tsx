import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = React.memo(() => {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-start gap-8 bg-base/70 border border-mauve border-opacity-40 shadow-lg shadow-mauve/20 rounded-xl backdrop-blur-md p-6">
      <div className="flex-1 flex flex-col items-start gap-4">
        <h2 className="text-lavender font-bold text-2xl md:text-3xl mb-2 drop-shadow">
          Who am I?
        </h2>
        <p className="flex flex-col space-y-3 text-text leading-7 text-md md:text-lg font-medium  mb-4">
          <span>
            I’m a full-stack developer with a love for beautiful design, robust
            technologies and all things cosmic!
          </span>
          <span>
            I build beautiful, accessible web apps that put users first.
          </span>
          <span>
            My mindset consists of curiosity, a happy attitude, and the will to
            shoot for the stars! 🌠 <br /> Puzzles and challenges are my cup of
            tea, and I thrive on looking for solutions to complex problems.
          </span>
          <span>
            When I’m not coding, you’ll find me exploring new tech, doodling, or
            daydreaming... Sometimes all at once!
          </span>
          <span className="pt-4">
            We could create something stellar together! 🚀🌌
          </span>
        </p>
        <div className="flex flex-row gap-4 items-end">
          <a
            href="https://www.linkedin.com/in/blomqvistj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={38}
              className="text-mauve shadow-md duration-500 hover:scale-110 hover:shadow-xl"
            />
          </a>
          <a
            href="https://github.com/Jeppuu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={38}
              className="text-mauve shadow-md duration-500 hover:scale-110 hover:shadow-xl"
            />
          </a>
        </div>
      </div>
    </div>
  );
});

export default About;

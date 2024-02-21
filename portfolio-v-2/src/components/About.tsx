import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <div className="w-full my-8 px-4 flex flex-col md:flex-row justify-top md:justify-start items-stretch relative gap-2">
      <div className="flex justify-center items-center h-80 md:h-auto w-full md:w-1/2 p-4 relative">
        <Image
          src="/avatar-img.png"
          fill
          style={{ objectFit: "contain" }}
          alt="Picture of the developer"
          className="max-w-full max-h-full relative z-10"
        />
        {/* shadow for the image */}
        <div className="absolute h-14 bottom-4 left-1/2 -translate-x-1/2 w-3/4 z-0 bg-[#C3DFE1] dark:bg-[#1F7A7E] shadow-md rounded-xl transform rotate-1"></div>
      </div>
      <div className="flex flex-col justify-start md:justify-center items-center md:items-start  md:h-auto w-full md:w-1/2 p-4 md:pl-0 gap-2">
        <h1 className="capitalize drop-shadow text-[#69B2B7] dark:text-white font-medium md:font-bold text-2xl md:text-3xl leading-normal md:leading-relaxed text-center md:text-left">
          <span className="wave p-2 ">👋🏻 </span>
          Hello, I am Jenna
        </h1>
        <p className="font-normal md:font-medium text-sm md:text-md leading-relaxed md:leading-loose text-left">
          A passionate Finnish Full Stack Developer specializing in React and
          Next.JS. My goal is to create seamless user experiences with appealing
          code. <br /> ✨ My positive attitude and love for learning lead me to
          believe in tech&apos;s power to make the world a better place for all
          of us. My journey revolves around building dynamic web applications
          that exceed user expectations.
          <br /> ✨ Go on and explore my portfolio to see my code in action. I
          hope you&apos;ll see the joy I find in turning ideas into functional
          solutions.
          <br /> ✨ Let&apos;s connect and explore the exciting possibilities
          web development has to offer, together. Thank you for stopping by!
          🚀✨
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/blomqvistj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={38}
              className="text-[#69B2B7] shadow-md duration-500 hover:scale-110 hover:shadow-xl"
            />
          </a>
          <a
            href="https://github.com/Jeppuu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={38}
              className="text-[#69B2B7] shadow-md duration-500 hover:scale-110 hover:shadow-xl"
            />
          </a>
          <a
            href="https://www.glitch.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="shadow-md duration-500 hover:scale-110 hover:shadow-xl"
              src="./glitch-icon.svg"
              alt="glitch"
              width={38}
              height={38}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

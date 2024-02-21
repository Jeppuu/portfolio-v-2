import React from "react";
import Image from "next/image";

interface ProjectProps {
  link: string;
  imgSrc: string;
  title: string;
  desc: string;
}

const Project: React.FC<ProjectProps> = ({ link, imgSrc, title, desc }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="w-64 bg-white dark:bg-[#2f2f2f] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <Image
          src={imgSrc}
          width={84}
          height={84}
          alt={title}
          className="h-64 w-64 object-cover object-center rounded-t-xl"
        />
        <div className="w-64 bg-[#69B2B7] dark:bg-[#1F7A7E] rounded-b-xl px-4 py-3">
          <p className="text-lg font-bold text-white truncate block capitalize">
            {title}
          </p>
          <p className="my-3 font-normal text-slate-100 leading-tight text-sm md:text-md">
            {desc}
          </p>
        </div>
      </div>
    </a>
  );
};

export default function Projects() {
  const projectsData = [
    {
      link: "https://digipedia.glitch.me/",
      imgSrc: "/digipedia.png",
      title: "Digipedia",
      desc: "A page for looking up information about Digimon.",
    },
    {
      link: "https://pomodoroo.glitch.me/",
      imgSrc: "/pomodoro.png",
      title: "Pomodoro Timer",
      desc: "A Pomodoro Timer with adjustable session and break lengths.",
    },
    {
      link: "https://rapid-square-yak.glitch.me/",
      imgSrc: "/drums.png",
      title: "Drum Machine",
      desc: "A Drum Machine built with React. Practice those drumming skills!",
    },
    {
      link: "https://hot-tranquil-spatula.glitch.me/",
      imgSrc: "/markdown.png",
      title: "Markdown previewer",
      desc: "A simple but powerful React app.",
    },
    {
      link: "https://nature-forum.vercel.app/feed",
      imgSrc: "/natureForum.png",
      title: "Nature Forum",
      desc: "A discussing forum for anything nature related.",
    },
    {
      link: "https://unbeatable-tic-tac-toe.glitch.me/",
      imgSrc: "/tictactoe.png",
      title: "Unbeatable Tic-Tac-Toe",
      desc: "A Tic Tac Toe with minimax algorithm. You cannot win!",
    },
    {
      link: "https://codepen.io/Jeppuu/full/yLxmWPJ",
      imgSrc: "/calculator.png",
      title: "React Calculator",
      desc: "A basic calculator built with React.",
    },
    {
      link: "https://boundless-arrow-mandolin.glitch.me/",
      imgSrc: "/todo.png",
      title: "To Do List",
      desc: "A to do list app built with vanilla javascript.",
    },
    {
      link: "https://replit.com/@Jeppuu/jepun-snake?v=1#code/main.js",
      imgSrc: "/snakegame.png",
      title: "Snake Game",
      desc: "An old school snake game. What's your highscore?",
    },
    {
      link: "https://replit.com/@Jeppuu/Super-Mario?v=1#code/main.js",
      imgSrc: "/supermario.png",
      title: "Super Mario",
      desc: "A Super Mario game with two levels.",
    },
    {
      link: "https://replit.com/@Jeppuu/Space-invaders",
      imgSrc: "/invaders.png",
      title: "Space Invaders",
      desc: "A retro space invaders game, with selfmade sprites.",
    },
    {
      link: "https://codepen.io/Jeppuu/full/WNgWXmB",
      imgSrc: "/colorgame.png",
      title: "RGB Color Game",
      desc: "Pick the correct color based on the RGB code.",
    },
  ];
  return (
    <div className="w-full flex my-4 flex-col justify-top items-center gap-4">
      <h1 className="text-[#69B2B7] dark:text-white font-medium md:font-bold text-2xl md:text-3xl leading-normal md:leading-relaxed drop-shadow p-4">
        Collection of my projects
      </h1>
      <p className="pb-4 font-normal md:font-medium text-sm md:text-md leading-relaxed md:leading-loose text-center">
        Visit my
        <a
          href="https://github.com/Jeppuu?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#69B2B7] font-semibold px-1"
        >
          GitHub profile
        </a>
        and
        <a
          href="https://glitch.com/@Jeppuu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#69B2B7] font-semibold px-1"
        >
          Glitch profile
        </a>
        to view my code.
      </p>
      <div className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center gap-y-10 gap-x-7 mt-10 mb-5">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

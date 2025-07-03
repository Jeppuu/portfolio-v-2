import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Link from "next/link";
import TextGradient from "./TextGradient";

interface ProjectCardProps {
  title: string;
  description: string;
  imgSrc: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = React.memo(
  ({ title, description, imgSrc, liveUrl, githubUrl }) => (
    <div className="w-full flex flex-col md:flex-row items-center md:items-stretch rounded-xl bg-base/70 border border-mauve/40 shadow-lg shadow-mauve/20 transition hover:shadow-2xl hover:ring-1 hover:ring-lavender/60 hover:scale-105 duration-300 backdrop-blur-md group overflow-hidden">
      {/* Image section */}
      <div className="w-full md:w-64 flex-shrink-0 h-48 md:h-auto relative overflow-hidden">
        <Image
          src={imgSrc}
          fill
          alt={title}
          className="object-cover object-center transition group-hover:brightness-110"
          style={{
            borderTopRightRadius: "0",
            borderBottomRightRadius: "0",
            borderTopLeftRadius: "0.75rem",
            borderBottomLeftRadius: "0.75rem",
          }}
          sizes="(max-width: 768px) 100vw, 256px"
        />
        {/* Catppuccin overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-mauve/60 via-blue/40 to-crust/60 mix-blend-multiply pointer-events-none" />
      </div>
      {/* Text section */}
      <div className="flex-2 flex flex-col justify-between p-6 gap-3">
        <h3 className="text-2xl font-bold text-lavender mb-1 drop-shadow">
          {title}
        </h3>
        <p className="text-md text-text mb-4">{description}</p>
        <div className="flex gap-4 mt-auto">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-pink font-semibold hover:text-pink/80 transition"
            >
              <FaExternalLinkAlt className="inline-block mb-[2px]" /> Live demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-blue font-semibold hover:text-blue/80 transition"
            >
              <FaGithub className="inline-block mb-[2px]" /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
);

const projectsData = [
  {
    title: "USA Educational Attainment",
    description: "An interactive choropleth map in D3.js",
    imgSrc: "/choropleth.png",
    liveUrl: "https://young-nervous-move.glitch.me/",
    githubUrl: "https://github.com/Jeppuu/USA-educational-attainment",
  },
  {
    title: "Global temperature heat map",
    description: "A heat map build with D3.js",
    imgSrc: "/heatmap.png",
    liveUrl: "https://ossified-zany-glockenspiel.glitch.me/",
    githubUrl: "https://github.com/Jeppuu/Heat-map",
  },
  {
    title: "Doping chart",
    description: "A scatterplot chart build with D3.js",
    imgSrc: "/scatterplot.png",
    liveUrl: "https://lowly-laced-volleyball.glitch.me/",
    githubUrl: "https://github.com/Jeppuu/bicyclist-doping-chart",
  },
  {
    title: "USA GDP Chart",
    description: "A bar chart build with D3.js",
    imgSrc: "/barchart.png",
    liveUrl: "https://wise-extreme-skateboard.glitch.me/",
    githubUrl: "https://github.com/Jeppuu/USA-gdp-chart",
  },
  {
    title: "Digipedia",
    description: "A page for looking up information about Digimon.",
    imgSrc: "/digipedia.png",
    liveUrl: "https://digipedia.glitch.me/",
    githubUrl: "https://github.com/Jeppuu/digipedia",
  },
  {
    title: "Pomodoro Timer",
    description: "A Pomodoro Timer with adjustable session and break lengths.",
    imgSrc: "/pomodoro.png",
    liveUrl: "https://pomodoroo.glitch.me/",
    githubUrl: "https://github.com/Jeppuu/pomodoro-timer",
  },
  {
    title: "Drum Machine",
    description:
      "A Drum Machine built with React. Practice those drumming skills!",
    imgSrc: "/drums.png",
    liveUrl: "https://rapid-square-yak.glitch.me/",
    githubUrl: "https://github.com/Jeppuu/drum-machine",
  },
  {
    title: "Markdown previewer",
    description: "A simple but powerful React app.",
    imgSrc: "/markdown.png",
    liveUrl: "https://hot-tranquil-spatula.glitch.me/",
    githubUrl: "https://github.com/Jeppuu/markdown-previewer",
  },
  {
    title: "Nature Forum",
    description: "A discussing forum for anything nature related.",
    imgSrc: "/natureForum.png",
    liveUrl: "https://nature-forum.vercel.app/feed",
    githubUrl: "https://github.com/Jeppuu/nature-forum",
  },
  {
    title: "Unbeatable Tic-Tac-Toe",
    description: "A Tic Tac Toe with minimax algorithm. You cannot win!",
    imgSrc: "/tictactoe.png",
    liveUrl: "https://unbeatable-tic-tac-toe.glitch.me/",
    githubUrl: "https://github.com/Jeppuu/unbeatable-tic-tac-toe",
  },
  {
    title: "Random Quote Machine",
    description: "A random quote machine built with React.",
    imgSrc: "/quote.png",
    liveUrl: "https://codepen.io/Jeppuu/full/vYVLMow",
    githubUrl: "https://github.com/Jeppuu/random-quote-machine",
  },
  {
    title: "React Calculator",
    description: "A basic calculator built with React.",
    imgSrc: "/calculator.png",
    liveUrl: "https://codepen.io/Jeppuu/full/yLxmWPJ",
    githubUrl: "https://github.com/Jeppuu/React-calculator",
  },
  {
    title: "To Do List",
    description: "A to do list app built with vanilla javascript.",
    imgSrc: "/todo.png",
    liveUrl: "https://boundless-arrow-mandolin.glitch.me/",
    githubUrl: "https://github.com/Jeppuu/to-do-list",
  },
  {
    title: "Snake Game",
    description: "An old school snake game. What's your highscore?",
    imgSrc: "/snakegame.png",
    liveUrl: "https://replit.com/@Jeppuu/jepun-snake?v=1#code/main.js",
    githubUrl: "https://github.com/Jeppuu/snake-game",
  },
  {
    title: "Super Mario",
    description: "A Super Mario game with two levels.",
    imgSrc: "/supermario.png",
    liveUrl: "https://replit.com/@Jeppuu/Super-Mario?v=1#code/main.js",
    githubUrl: "https://github.com/Jeppuu/Super-mario",
  },
  {
    title: "RGB Color Game",
    description: "Pick the correct color based on the RGB code.",
    imgSrc: "/colorgame.png",
    liveUrl: "https://codepen.io/Jeppuu/full/WNgWXmB",
    githubUrl: "https://github.com/Jeppuu/RGB-game",
  },
];

const Projects = () => {
  return (
    <section className="w-full min-h-screen px-4 py-16 md:px-8 flex flex-col items-center bg-transparent">
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-4 items-center mb-8">
        <TextGradient className="font-extrabold text-3xl md:text-6xl drop-shadow-xl drop-shadow-mauve/80 p-4 ">
          Collection of my projects
        </TextGradient>
        <p className="font-semibold text-md md:text-lg leading-relaxed text-text drop-shadow-md">
          Visit my
          <Link
            href="https://github.com/Jeppuu?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue font-semibold px-1 hover:text-blue/80 transition"
          >
            GitHub profile
          </Link>
          and
          <Link
            href="https://glitch.com/@Jeppuu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink font-semibold px-1 hover:text-pink/80 transition"
          >
            Glitch profile
          </Link>
          to view my code.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

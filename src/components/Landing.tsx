import React from "react";
import TextGradient from "./TextGradient";
import About from "./About";
import Link from "next/link";
import Skills from "./Skills";
import StrongPoints from "./StrongPoints";
import CurrentlyExploring from "./CurrentlyExploring";

const Landing = React.memo(() => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="w-full flex flex-col items-center justify-center min-h-[100vh] py-hero px-4">
        <div className="w-full max-w-3xl mx-auto flex flex-col items-start text-left">
          <h1
            className="font-space font-semibold text-3xl md:text-5xl lg:text-6xl text-text drop-shadow-lg leading-tight mb-6"
            aria-label="Hi! I'm Jenna, Full-stack space cadet"
          >
            Hi! I'm
            <br />
            <TextGradient className="block font-extrabold text-6xl md:text-8xl lg:text-9xl">
              Jenna
            </TextGradient>
            <span className="block text-2xl md:text-4xl font-semibold mb-2 text-pink uppercase tracking-wider">
              Full-stack space cadet
            </span>
            <p className="block mt-2 text-lg md:text-xl text-text max-w-2xl ">
              Welcome to my home planet! ✨
            </p>
          </h1>
          <div className="flex flex-row gap-4 mt-4">
            <Link href="#about" scroll={false}>
              <button
                onClick={scrollToAbout}
                className="px-6 py-2 rounded-full border-2 border-lavender/90 text-lavender hover:text-lavender/80 font-bold shadow hover:border-lavender/40 transition"
              >
                Jenna who? ↓
              </button>
            </Link>
            <Link href="/projects" passHref>
              <button
                className="px-6 py-2 rounded-full bg-pink text-crust font-bold shadow hover:bg-pink/80 transition"
                type="button"
              >
                My projects →
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="w-full flex flex-col gap-8 items-center justify-center py-4 "
      >
        {/* About section below */}
        <About />
        <Skills />
        <StrongPoints />
        <CurrentlyExploring />
      </section>
    </>
  );
});

export default Landing;

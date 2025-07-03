import React from "react";
import Link from "next/link";

const Footer = React.memo(() => {
  return (
    <footer className="w-full py-6 border-t border-lavender/70 backdrop-blur-md shadow-inner shadow-mauve/20 mt-8">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-2 px-4">
        <p className="text-center text-text md:text-lg flex items-center gap-2">
          &copy; {new Date().getFullYear()} Jenna Blomqvist. Thanks for stopping
          by my galaxy!
          <span className="motion-safe:animate-bounceSlow text-xl">🪐</span>
        </p>
        <p className="text-center text-text text-sm">
          Check out the{" "}
          <Link
            href="https://github.com/Jeppuu/portfolio-v-2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue font-semibold hover:text-lavender transition"
          >
            GitHub repository
          </Link>{" "}
          to see how it's built with Next.js, React & Tailwind CSS... and a
          pinch of stardust!
        </p>
      </div>
    </footer>
  );
});

export default Footer;

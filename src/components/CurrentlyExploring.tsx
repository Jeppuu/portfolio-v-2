import Link from "next/dist/client/link";
import React from "react";

const CurrentlyExploring = React.memo(() => {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-start gap-8 bg-base/70 border border-mauve border-opacity-40 shadow-lg shadow-mauve/20 rounded-xl backdrop-blur-md p-6 mt-2">
      <div className="flex-1 flex flex-col items-start gap-4">
        <h2 className="flex items-center gap-2 text-lavender font-bold text-2xl md:text-3xl mb-2 drop-shadow">
          What am I currently exploring?
        </h2>
        <p className="flex flex-col space-y-3 text-text leading-7 text-md md:text-lg mb-4">
          <span>
            Currently I'm chasing stars as a{" "}
            <Link
              href="https://evitec.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-pink font-semibold transition duration-500 hover:text-lavender/80"
            >
              Junior Full-stack Engineer at Evitec Solutions.
            </Link>
          </span>
          <span>
            My mission is building powerful, user-friendly fintech solutions!
          </span>
          <span>
            <Link
              href="https://evitec.com/solutions/evitec-solutions-power-lending/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue font-semibold transition duration-500 hover:text-lavender/80"
            >
              My current mothership
            </Link>{" "}
            is a modern corporate lending system, based on standard .NET Core,
            React and SQL technologies. We're gonna make it fly with the
            strength of our team!
          </span>
          <span>
            My favourite part of the job is collaborating with our stellar team,
            learning new tech, and pushing the boundaries of what’s possible in
            the digital universe!
          </span>
        </p>
      </div>
    </div>
  );
});

export default CurrentlyExploring;

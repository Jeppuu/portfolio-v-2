import React from "react";
import Link from "next/link";
import ThemesBtn from "./ThemeBtn";

export default function Nav() {
  return (
    <nav className="justify-center w-auto bg-white dark:bg-[#2f2f2f] rounded-xl py-4 px-4 md:px-8 m-4 shadow-md dark:shadow-[#1F7A7E]">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <Link href="/">
          <button className="font-bold py-4 px-8 hover:bg-[#D2E5E7] hover:shadow rounded-full dark:hover:bg-[#1F7A7E] dark:hover:text-white transition ease-in-out duration-300 mx-2 my-2 md:my-0">
            Home
          </button>
        </Link>
        <Link href="/about">
          <button className="font-bold py-4 px-8 hover:bg-[#D2E5E7] hover:shadow rounded-full dark:hover:bg-[#1F7A7E] dark:hover:text-white transition ease-in-out duration-300 mx-2 my-2 md:my-0">
            About
          </button>
        </Link>
        <Link href="/projects">
          <button className="font-bold py-4 px-8 hover:bg-[#D2E5E7] hover:shadow rounded-full dark:hover:bg-[#1F7A7E] dark:hover:text-white transition ease-in-out duration-300 mx-2 my-2 md:my-0">
            Projects
          </button>
        </Link>
        <ThemesBtn />
      </div>
    </nav>
  );
}

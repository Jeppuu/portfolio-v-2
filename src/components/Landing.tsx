import React from "react";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="w-full my-8 px-4 flex flex-col md:flex-row justify-top md:justify-start items-stretch relative gap-2">
      <div className="flex justify-center items-center h-80 md:h-96 w-full md:w-1/2 p-4 relative">
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
      <div className="flex flex-col justify-center items-center md:h-auto w-full md:w-1/2 p-4 md:pl-0 gap-2">
        <h1 className="dark:text-[#f2f2f2] uppercase drop-shadow font-bold text-2xl md:text-4xl leading-normal md:leading-relaxed text-center md:text-left">
          Hello, meet <span className="text-[#69B2B7]">Jenna</span> <br /> a
          modern
          <span className="text-[#69B2B7]"> full stack developer </span>
          building the web
        </h1>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Skills from "@/components/Skills";
import StrongPoints from "@/components/StrongPoints";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-top py-6 px-4 mb-10">
      <Nav />
      <About />
      <Skills />
      <StrongPoints />
    </main>
  );
}

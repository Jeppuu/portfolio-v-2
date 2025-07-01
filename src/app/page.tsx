"use client";
import React from "react";
import Nav from "@/components/Nav";
import Landing from "@/components/Landing";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-6 px-4 mb-10">
      <Nav />
      <Landing />
    </main>
  );
};

export default Home;

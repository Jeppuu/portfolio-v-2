"use client";

import Nav from "@/components/Nav";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-top py-6 px-4 mb-10">
      <Nav />
      <Projects />
    </main>
  );
}

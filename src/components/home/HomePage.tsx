import React from "react";
import Hero from "./Hero";
import Projects from "./projects/Projects";
import { Stats } from "./Stats";

export default function HomePage() {
  return (
    <div className="">
      <Hero />
      <Stats />
      <Projects />
    </div>
  );
}

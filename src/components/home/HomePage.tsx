import React from "react";
import Hero from "./Hero";
import Projects from "./projects/Projects";
import { Stats } from "./Stats";
import { InfoSection } from "./InfoSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <InfoSection />
      <Projects />
    </>
  );
}

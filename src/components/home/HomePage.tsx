import React from "react";
import Hero from "./Hero";
import Projects from "./projects/Projects";
import { LogoQuilt } from "./Stats";
import { InfoSection } from "./InfoSection";
import { AboutMe } from "./AboutMe";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoQuilt />
      <InfoSection />
      <Projects />
      <AboutMe />
    </>
  );
}

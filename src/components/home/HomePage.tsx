import React from "react";
import Hero from "./Hero";
import Projects from "./projects/Projects";
import { Stats } from "./Stats";
import { InfoSection } from "./InfoSection";
import { AboutMe } from "./AboutMe";
import { Banner } from "../Banner/Banner";
import { AnalyticLink } from "../Analytics/AnalyticLink";

export default function HomePage() {
  return (
    <>
      <Banner title="Introducing Our New Service Bundles - Tailored for Your Business Growth!">
        <AnalyticLink
          href="/service-bundles"
          label="Check Out Our Bundles"
          className="text-lg lg:text-base text-blue-700 bg-transparent py-2 px-8 inline-block rounded-full font-semibold hover:text-blue-800 hover:underline transition-colors duration-300 text-center"
          eventValue="service-bundles-cta"
          eventCategory="service-bundles"
        />
      </Banner>
      <Hero />
      <Stats />
      <InfoSection />
      <Projects />
      <AboutMe />
    </>
  );
}

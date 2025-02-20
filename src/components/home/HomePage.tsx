import React from "react";
import Hero from "./Hero";
import Projects from "./projects/Projects";
import { LogoQuilt } from "./Stats";
import { InfoSection } from "./InfoSection";
import { WhyCustomMatters } from "./WhyCustomMatters";
import { NoCookieCutters } from "./NoCookieCutters";
import { OurApproach } from "./OurApproach";
import { Testimonial } from "./Testimonial";
import { CTA } from "./CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoSection />
      <LogoQuilt />
      <WhyCustomMatters />
      <NoCookieCutters />
      <OurApproach />
      <Testimonial />
      <CTA />
    </>
  );
}

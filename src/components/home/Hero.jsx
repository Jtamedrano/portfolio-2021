import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import useMedia from "../hooks/useMedia";

const Hero = () => {
  const isTablet = useMedia("max:width: 800px");

  return (
    <section className="hero max_content">
      <div className="hero__left">
        <p>Hello,</p>
        <h1>Jesse Medrano</h1>
        <h2>I am a builder of software and things</h2>
        <p>
          Based out of the Greater Los Angeles Area with a for front and backend
          solutions.
        </p>
      </div>
      <div className="hero__right">
        <div className="hero__right__img_wrapper">
          <StaticImage
            src="../../images/Web Design.png"
            alt="engineer drawing robot head"
            placeholder="tracedSVG"
            loading="eager"
            imgStyle={{ objectFit: "contain", width: "100%" }}
            className="hero__right__img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

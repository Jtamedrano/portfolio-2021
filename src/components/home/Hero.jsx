import React from "react";
import portfolio from "../../images/Web Design.png";

const Hero = () => {
  return (
    <section className="hero max_content">
      <div className="hero__left">
        <p>Hello,</p>
        <h1>Jesse Medrano</h1>
        <h2>I am a developer of software and things</h2>
        <p>
          Based out of the Greater Los Angeles Area with a for front and backend
          solutions.
        </p>
      </div>
      <div className="hero__right">
        <img src={portfolio} alt="" width="100%" height="100%" />
      </div>
    </section>
  );
};

export default Hero;

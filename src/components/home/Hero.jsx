import React from "react";
import portfolio from "../../images/Web Design.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__left">
        <p>Hello,</p>
        <h1>Jesse Medrano</h1>
        <h2>I am a developer of software and things</h2>
        <p>
          Based out of the Greater Los Angeles Area with a good eye for front
          and backend development.
        </p>
        <div className="hero__buttons">
          <button className="projects">Projects</button>
          <button className="hire">Hire Me</button>
        </div>
      </div>
      <div className="hero__right">
        <img src={portfolio} alt="" width="100%" height="100%" />
      </div>
    </section>
  );
};

export default Hero;

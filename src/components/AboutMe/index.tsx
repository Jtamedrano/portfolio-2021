import React from 'react';

interface Props {}

const AboutMeContainer = (props: Props) => {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <div className="subtitle">
        <p>2 Years of Active Software Development</p>
        <p>Full Stack Web Developer from Lambda School</p>
      </div>
      <div>
        <div className="languages">
          <p className="lang-item">HTML</p>
          <p className="lang-item">CSS</p>
          <p className="lang-item">SCSS</p>
          <p className="lang-item">JS</p>
          <p className="lang-item">TS</p>
        </div>
        <div className="technologies">
          <p className="tech-item">BootStrap</p>
          <p className="tech-item">TailwindCSS</p>
          <p className="tech-item">React</p>
          <p className="tech-item">ContextAPI</p>
          <p className="tech-item">Redux</p>
          <p className="tech-item">NodeJs</p>
          <p className="tech-item">Express</p>
          <p className="tech-item">Cors</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeContainer;

import React from 'react';
import './style.scss';

interface Props {}

const HeroView = (props: Props) => {
  return (
    <section className="hero">
      <div className="hero__content-container">
        <div className="hero-text-container">
          <h1>Jesse Medrano</h1>
          <p>
            I'm a<wbr></wbr> Full Stack Web Developer<wbr></wbr> from the{' '}
            <wbr></wbr>
            Greater Los Angeles Area
          </p>
        </div>
        <div className="hero-cta-btn">
          <button>View My Work</button>
        </div>
      </div>
      <div className="hero__art-container flex-center-center">
        <div>JS Art Here</div>
      </div>
    </section>
  );
};

export default HeroView;

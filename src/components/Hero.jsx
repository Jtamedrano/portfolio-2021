import React from 'react';
import Menu from './Menu';
import '../styles/view.scss';

const Hero = () => {
  return (
    <>
      <Menu />
      <section>
        <div>
          <h1 className="master-heading">
            <span>The Magic Of</span>
            <span>Full Stack Web Dev</span>
            <span className="master-heading-author">- with Jesse Medrano</span>
          </h1>
        </div>
      </section>
    </>
  );
};

export default Hero;

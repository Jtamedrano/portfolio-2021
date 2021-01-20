import React from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-particles-js';
import js from '../img/javascript.svg';

import Menu from './Menu';
import '../styles/view.scss';

const Hero = () => {
  return (
    <div className="page-container">
      <Menu />
      <div className="container">
        <div id="welcome">
          <motion.div
            className="heading-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="master-heading">
              <span className="master-heading-one">The Magic Of</span>
              <span className="master-heading-two">Full Stack Web Dev</span>
              <span className="master-heading-author">
                - with Jesse Medrano
              </span>
            </h1>
          </motion.div>
        </div>
        <Particles
          id="particles-js"
          className="particles-js"
          params={{
            fps_limit: 30,
            particles: {
              number: {
                value: 100,
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: true,
                  size_min: 0.5,
                  speed: 0.01,
                },
              },
              color: {
                value: '#000',
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Hero;

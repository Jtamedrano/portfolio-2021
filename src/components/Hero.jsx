import { motion } from 'framer-motion';
import Particles from 'react-particles-js';

import Menu from './Menu';
import jsImg from '../img/nodejs-seeklogo.com.svg';
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
            transition={{ duration: 0.5 }}
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
        <motion.div
          className="particles-js-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <Particles
            id="particles-js"
            className="particles-js"
            params={{
              fps_limit: 25,
              particles: {
                collisions: {
                  enable: false,
                },
                number: {
                  value: 400,
                  density: {
                    enable: false,
                  },
                },
                line_linked: {
                  color: '#222222',
                  opacity: 0.5,
                  enable: true,
                  distance: 200,
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: true,
                    size_min: 0.1,
                    speed: 10,
                    sync: false,
                  },
                },
                color: {
                  value: '#000',
                },
                move: {
                  speed: 1,
                },
                opacity: {
                  value: 0.8,
                  random: true,
                  anim: {
                    enable: true,
                    opacity_min: 0.1,
                    sync: false,
                    speed: 1,
                  },
                },
                shape: {
                  type: 'circle',
                },
              },
              retina_detect: false,
              polygon: {
                enable: true,
                type: 'inline',
                scale: 4,
                inline: {
                  arrangement: 'equidistant',
                },
                move: {
                  radius: 5,
                },
                draw: {
                  enable: true,
                  stroke: {
                    color: 'rgba(255,0,0,.1)',
                  },
                },
                url: jsImg,
              },
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

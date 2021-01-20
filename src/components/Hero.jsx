import { motion } from 'framer-motion';

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
      </div>
    </div>
  );
};

export default Hero;

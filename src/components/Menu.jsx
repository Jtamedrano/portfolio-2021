import { motion } from 'framer-motion';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/nav.scss';

const navItemHover = { scale: 1.3, x: 10 };

const Menu = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.nav
        className="circle-nav"
        initial={{ opacity: 0.0 }}
        animate={{ opacity: 0.5 }}
        whileHover={{
          opacity: 1,
          backgroundColor: 'rgba(10,10,10,0.9)',
          scale: 1.5,
          x: 20,
        }}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <>
            <motion.span whileHover={navItemHover}>
              <NavLink exact={true} to="/">
                Home
              </NavLink>
            </motion.span>
            <motion.span whileHover={navItemHover}>
              <NavLink to="/projects">Projects</NavLink>
            </motion.span>
          </>
        ) : (
          <>
            <motion.p initial={{ rotate: 270, x: '-2vw' }}>Menu</motion.p>
          </>
        )}
      </motion.nav>
    </>
  );
};

export default Menu;

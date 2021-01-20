import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import '../styles/nav.scss';

const Menu = () => {
  return (
    <>
      <motion.nav
        className="circle-nav"
        initial={{ opacity: 0.5 }}
        whileHover={{ opacity: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <motion.span whileHover={{ scale: 1.1, x: 30 }}>
          <NavLink exact={true} to="/">
            Home
          </NavLink>
        </motion.span>
        <motion.span whileHover={{ scale: 1.1, x: 30 }}>
          <NavLink to="/projects">Projects</NavLink>
        </motion.span>
      </motion.nav>
    </>
  );
};

export default Menu;

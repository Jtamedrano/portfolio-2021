import { motion } from 'framer-motion';
import React from 'react';
import logo from '../img/logo.png';

import '../styles/header.scss';

const TopNav = () => {
  return (
    <header>
      <motion.div
        className="header-logo-container"
        initial={{ x: '-100vw', opactity: 0 }}
        animate={{ x: 0, opactity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <img src={logo} alt="jm initials" />
      </motion.div>
    </header>
  );
};

export default TopNav;

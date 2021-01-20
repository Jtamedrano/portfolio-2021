import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import '../styles/nav.scss';

const Menu = () => {
  return (
    <>
      <nav className="circle-nav">
        <NavLink exact={true} to="/">
          Home
        </NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>
    </>
  );
};

export default Menu;

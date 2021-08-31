import { Link } from "gatsby";
import React from "react";

const NavItem = ({ label, to, className = "navItem" }) => (
  <li className={className}>
    <Link to={to}>{label}</Link>
  </li>
);

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <NavItem label="Projects" to="#projects" />
        <NavItem label="Contact" to="#contact" />
      </ul>
    </nav>
  );
};

export default NavMenu;

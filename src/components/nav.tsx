import Link from "next/link";
import React from "react";

interface NavItemProps {
  label: string;
  to: string;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  to,
  className = "navItem",
}) => (
  <li className={className}>
    <Link href={to}>{label}</Link>
  </li>
);

const NavMenu = () => {
  return (
    <nav className="flex justify-end items-center gap-4 px-4">
      <ul className="flex gap-4">
        <NavItem label="Home" to="/" />
        <NavItem label="Projects" to="#projects" />
        <NavItem label="Contact" to="#contact" />
      </ul>
    </nav>
  );
};

export default NavMenu;

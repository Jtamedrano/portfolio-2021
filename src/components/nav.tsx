import Image from "next/image";
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
    <Link href={to} className="text-lg">
      {label}
    </Link>
  </li>
);

const NavMenu = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center gap-4 px-4">
      <Link className="text-2xl font-bold text-primary" href="/">
        <Image src="/Logo.svg" alt="Logo" width={100} height={43} />
      </Link>
      <ul className="flex gap-4 capitalize text-slate-800">
        <NavItem label="Home" to="/" />
        <NavItem label="Services" to="/services" />
        <NavItem label="Contact" to="/contact" />
      </ul>
    </nav>
  );
};

export default NavMenu;

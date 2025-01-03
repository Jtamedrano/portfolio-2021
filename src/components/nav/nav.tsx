import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AnalyticLink } from "../Analytics/AnalyticLink";

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
    <Link
      href={to}
      className="text-lg hover:text-secondary transition-colors duration-300"
    >
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
      <ul className="flex gap-4 capitalize text-slate-800 items-center">
        <NavItem label="Home" to="/" />
        <NavItem label="Services" to="/services" />
        <NavItem label="Contact" to="/contact" />
        <li>
          <AnalyticLink
            href="tel:+19096361186"
            label="Call Now"
            className="px-4 py-2 bg-secondary-700 text-slate-100 rounded-full font-semibold hover:bg-secondary-800 transition-colors duration-300"
            eventValue="nav"
            eventCategory="call_now"
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;

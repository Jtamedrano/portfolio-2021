import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AnalyticLink } from "../Analytics/AnalyticLink";
import { NavItem } from "./NavItem";
import { MobileNav } from "./MobileNav";
import { NAVIGATION } from "../../constants/nav";

const NavMenu = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center gap-4 px-4">
      <Link className="text-2xl font-bold text-primary" href="/">
        <span className="sr-only">J Medrano Design</span>
        <Image src="/Logo.svg" alt="Logo" width={100} height={43} />
      </Link>
      <ul className="hidden lg:flex gap-4 capitalize text-slate-800 items-center">
        {/* <NavItem label="Home" to="/" />
        <NavItem label="Services" to="/services" />
        <NavItem label="Contact" to="/contact" /> */}
        {NAVIGATION.map((navItem) => (
          <NavItem key={navItem.label} label={navItem.label} to={navItem.to} />
        ))}
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
      <MobileNav />
    </nav>
  );
};

export default NavMenu;

"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { NAVIGATION } from "../../constants/nav";
import { AnalyticLink } from "../Analytics/AnalyticLink";

export const MobileNav = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <>
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setShowMenu(!showMenu)}
          className="-m-2.5 items-center justify-center rounded-md p-2.5 text-slate-500"
        >
          <span className="sr-only">Open main menu</span>
          <HiBars3 className="size-10" />
        </button>
      </div>
      <Dialog
        as="div"
        open={showMenu}
        onClose={setShowMenu}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 overflow-y-auto bg-secondary-200/95 px-6 py-6 w-full sm:max-w-sm sm:ring-1 sm:ring-secondary-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">J Medrano Design</span>
              <Image src="/Logo.svg" alt="Logo" width={100} height={43} />
            </Link>
            <button
              type="button"
              onClick={() => setShowMenu(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close main menu</span>
              <HiXMark aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {NAVIGATION.map((navItem) => (
                  <Link
                    key={navItem.label}
                    href={navItem.to}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-secondary-300/95 transition-colors duration-300"
                    onClick={() => setShowMenu(false)}
                  >
                    {navItem.label}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <AnalyticLink
                  href="tel:+19096361186"
                  label="Call Now"
                  className="block px-4 py-2 bg-secondary-700 text-slate-100 rounded-full font-semibold hover:bg-secondary-800 transition-colors duration-300 text-center"
                  eventValue="nav"
                  eventCategory="call_now"
                />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

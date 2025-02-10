import React from "react";
import { AnalyticLink } from "../Analytics/AnalyticLink";
import { Anton } from "next/font/google";

import cx from "classnames";
import Image from "next/image";

const anton = Anton({
  weight: ["400"],
  preload: true,
  fallback: ["sans-serif"],
  subsets: ["latin", "latin-ext"],
});
const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-secondary-800 to-slate-900 text-slate-100 dark:text-slate-100">
      <div className="container flex flex-col lg:flex-row justify-center lg:justify-start items-center self-stretch mx-auto px-4 py-20 xl:px-0 gap-24 overflow-hidden">
        <div className="text-center lg:pl-4 lg:text-left leading-none flex flex-col gap-8 flex-1 max-w-4xl">
          <div className="flex flex-col gap-4">
            <div className="">
              <h1
                className={cx(
                  "text-3xl lg:text-7xl uppercase text-slate-50",
                  anton.className
                )}
              >
                Auto Capture Quality Leads with our Custom Website Forms
              </h1>
            </div>
            <p className="text-pretty text-text-xl leading-7 font-semibold max-w-3xl">
              Don&apos;t worry about the tech stuff—we&apos;ll build you an
              easy-to-use site that automatically captures leads, helping your
              business grow within the first three months.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:items-start">
            <p className="font-semibold">
              Ready to take your business to the next level?
            </p>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 justify-center lg:justify-start items-center w-full">
              <AnalyticLink
                href="/contact"
                label="Get Your Free Consultation"
                className="bg-yellow-500 text-slate-900 text-lg lg:text-base py-2 px-8 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300 text-center border-2 border-yellow-500 flex-1 inline-flex justify-center w-full"
                eventValue="hero-cta"
                eventCategory="contact"
              />
              <AnalyticLink
                href="tel:+19096361186"
                label="Call Now"
                className="text-lg lg:text-base text-yellow-500 bg-transparent py-2 px-8 rounded-full font-semibold transition-colors duration-300 text-center border-2 border-yellow-500 hover:bg-yellow-500 hover:text-slate-900 flex-1 inline-flex justify-center w-full"
                eventValue="hero-cta"
                eventCategory="call"
              />
            </div>
          </div>
        </div>
        <div className="relative w-full flex-1 h-[400px] lg:h-[750px] overflow-hidden m-4 rounded-3xl shadow-md shadow-black/75">
          <Image src="/owner-on-call.jpg" alt="Owner on Call" fill />
        </div>
      </div>
    </section>
  );
};

export default Hero;

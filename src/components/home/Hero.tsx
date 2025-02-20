import React from "react";
import { AnalyticLink } from "../Analytics/AnalyticLink";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-secondary-800 to-slate-900 text-slate-100 dark:text-slate-100">
      <div className="container self-stretch mx-auto px-4 pt-20 pb-12 xl:px-0 flex flex-col justify-center items-center gap-24 overflow-hidden">
        <div className="text-center lg:pl-4 leading-none flex flex-col gap-8 flex-1 max-w-4xl">
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <h1 className="text-4xl md:text-5xl lg:text-5xl text-slate-50 font-display">
              YOUR WEBSITE HAS ONE JOB: GET YOU MORE CUSTOMERS. WE BUILD IT THAT
              WAY
            </h1>
            <p className="text-pretty leading-7 font-semibold max-w-3xl">
              We custom-code every site based on market research, delivering
              faster load times and higher conversions than do-it-yourself
              website builders.
            </p>
          </div>

          <div className="flex flex-col gap-4">
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
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { AnalyticLink } from "../Analytics/AnalyticLink";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b dark:from-secondary-800 dark:to-slate-900 dark:text-slate-100">
      <div className="container self-stretch mx-auto px-4 pt-20 pb-12 xl:px-0 flex flex-col-reverse lg:flex-row justify-center lg:justify-start items-center gap-24 h-[90vh] lg:h-[78vh]">
        <div className="text-center lg:text-left lg:pl-8 leading-none flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display">
              YOUR WEBSITE HAS ONE JOB
              <br />
              GET YOU MORE CUSTOMERS
              <br />
              WE BUILD IT THAT WAY
            </h1>
            <p className="text-pretty leading-8 font-semibold text-lg lg:text-xl">
              We custom-code every site based on market research and analytics,
              delivering faster load times and higher conversions than
              do-it-yourself website builders.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-semibold text-lg lg:text-xl">
              Ready to take your business to the next level?
            </p>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 justify-center lg:justify-start items-center w-full">
              <AnalyticLink
                href="/contact"
                label="Get A Free Website Consultation"
                className="bg-yellow-500 text-slate-900 text-lg lg:text-base py-2 px-8 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300 text-center border-2 border-yellow-500 flex-1 inline-flex justify-center w-full"
                eventValue="hero-cta"
                eventCategory="contact"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 h-full w-full">
          <div className="relative w-[90%] h-full max-h-[70%]  md:max-h-[55%] rounded-lg overflow-hidden shadow-2xl z-10">
            <Image
              src="/images/contractor-website.png"
              alt="Small business website on a browser"
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover lg:object-top"
            />
          </div>
          <div className="relative w-[90%] h-full max-h-[70%] md:max-h-[55%] rounded-lg overflow-hidden shadow-2xl ml-[5%] -mt-6">
            <Image
              src="/images/real-estate-website.png"
              alt="Real estate website on a browser"
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover lg:object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

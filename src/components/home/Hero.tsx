import Image from "next/image";
import React from "react";
import { AnalyticLink } from "../Analytics/AnalyticLink";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-secondary-300 to-secondary-500">
      <div className="container flex flex-col lg:flex-row justify-center items-center self-stretch mx-auto lg:pt-16 py-4 px-4 xl:px-0 gap-12 overflow-hidden">
        <div className="lg:hidden flex justify-center items-center">
          <Image
            src="/dev_hero_image_transparent_phone.png"
            alt="software developer with laptop"
            width={300}
            height={300}
            loading="eager"
            className="object-contain"
          />
        </div>
        <div className="text-center lg:pl-4 lg:text-left leading-none text-gray-700 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight uppercase text-secondary-700 text-pretty">
              Supercharge Your Business&apos;s Growth
              <br />
              <span className="text-pretty text-2xl lg:text-3xl font-semibold">
                Custom Web Innovations that Drive Profits
              </span>
            </h1>
            <p className="text-pretty text-lg lg:text-base max-w-xl">
              We specialize in creating custom websites and applications for
              service-based businesses that are designed to attract, engage, and
              convert your ideal clients.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:items-start">
            <p className="font-semibold">
              Ready to take your business to the next level?
            </p>
            <AnalyticLink
              href="/contact"
              label="Get Your Free Consultation"
              className="bg-secondary-700 text-slate-100 text-lg lg:text-base py-2 px-8 inline-block rounded-full font-semibold hover:bg-secondary-800 transition-colors duration-300 text-center"
              eventValue="hero-cta"
              eventCategory="contact"
            />
          </div>
        </div>
        <div className="relative hidden lg:flex flex-col justify-end items-center md:min-w-[250px] md:min-h-[250px] lg:min-w-[400px] lg:min-h-[400px] z-0">
          <div className="absolute w-full h-full md:top-[50px] md:left-[0px] lg:top-[30px] lg:left-[-30px] z-10">
            <Image
              src="/dev_hero_image_transparent.png"
              alt="software developer with laptop"
              width={400}
              height={400}
              className="w-full h-full"
              loading="eager"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

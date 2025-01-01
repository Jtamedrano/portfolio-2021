import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="container flex justify-between items-center self-stretch mx-auto py-4 px-4 xl:px-0 gap-8 overflow-hidden">
      <div className="leading-none text-gray-700 flex flex-col gap-4 flex-1">
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-semibold tracking-tight ">
            Hello, I&apos;m Jesse Medrano
          </p>
          <h1 className=" text-3xl lg:text-5xl font-bold tracking-tight uppercase text-secondary-700">
            I turn visitors into clients,
            <br /> one website at a time
          </h1>
        </div>
        <p className="leading-relaxed flex flex-col">
          An LA-based web developer dedicated to helping small and mid-sized
          service-based businesses stand out online. From polished front-end
          designs to reliable back-end solutions. I build websites that elevate
          brands and turn visitors into customers.
        </p>
        <div className="flex flex-col gap-2 items-start">
          <p className="">Ready to take your business to the next level?</p>
          <Link
            href="/contact"
            className="bg-secondary-700 text-slate-100 text-lg lg:text-base py-2 px-4 inline-block rounded-full font-semibold hover:bg-secondary-800 transition-colors duration-300"
          >
            Let's Chat
          </Link>
        </div>
      </div>
      <div className="relative hidden md:flex flex-col justify-end items-center bg-slate-200 rounded-full shadow-lg shadow-black/25 md:min-w-[250px] md:min-h-[250px] lg:min-w-[600px] lg:min-h-[600px] z-0">
        <Image
          src="/dev_hero_image_transparent.png"
          alt="software developer with laptop"
          width={600}
          height={600}
          className="md:top-[50px] md:left-[0px] lg:top-[30px] lg:left-[-30px] z-10 absolute"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;

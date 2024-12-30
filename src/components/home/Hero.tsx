import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="flex justify-between items-center max-w-7xl mx-auto py-16 px-4">
      <div className="basis-1/2">
        <p className="text-2xl font-bold text-secondary">Hello,</p>
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-primary uppercase">
          Jesse Medrano
        </h1>
        <p className="text-lg font-light">
          An LA-based web developer dedicated to helping small and mid-sized
          service-based businesses stand out online. From polished front-end
          designs to reliable back-end solutions. I build websites that elevate
          brands and turn visitors into customers.
        </p>
        <p className="text-lg font-light mt-4">
          Ready to take your business to the next level?
        </p>
        <Link
          href="/contact"
          className="bg-accent text-white py-2 px-4 rounded-full inline-block mt-4"
        >
          Let's Chat
        </Link>
      </div>
      <div
        className="hidden md:block"
        style={{ width: "500px", height: "500px" }}
      >
        <div className="relative w-full h-full bg-slate-300 dark:bg-slate-700 rounded-full shadow-lg ring-2 ring-slate-400 dark:ring-slate-600 transition-all duration-500">
          <Image
            src="/WebDesign.png"
            alt="engineer drawing robot head"
            width={500}
            height={500}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="container flex justify-between items-center mx-auto pt-16 px-4 overflow-hidden">
      <div className="basis-1/2">
        <p className="text-2xl font-bold text-secondary">Hello, I&apos;m</p>
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
          className="bg-accent text-white py-2 px-4 rounded-full inline-block mt-4 font-semibold"
        >
          Let's Chat
        </Link>
      </div>
      <div
        className="hidden md:block"
        style={{ width: "600px", height: "600px" }}
      >
        <div className="relative w-full h-full bg-slate-200/30 dark:bg-slate-700 rounded-full shadow-lg transition-all duration-500">
          <Image
            src="/developer_hero_image.svg"
            alt="software developer with laptop"
            width={800}
            height={800}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

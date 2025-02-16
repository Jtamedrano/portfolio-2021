import Image from "next/image";
import React from "react";

const logos = [
  {
    src: "/poloMassageLogo.png",
    alt: "Polo Massage Logo",
  },
  {
    src: "/radicalPressureWashingLogo.png",
    alt: "Radical Pressure Washing Logo",
  },
  {
    src: "/radicalPropertyManagementLogo.png",
    alt: "Radical Property Management Logo",
  },
  {
    src: "/familyRealEstateLogo.png",
    alt: "Family Real Estate Network Logo",
  },
];

export const LogoQuilt = () => {
  return (
    <section className="">
      <div className="container mx-auto py-12 px-3 flex flex-col gap-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center relative w-full h-12"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <h2 className="text-xl font-bold text-slate-500 text-center">
          Trusted by These Local Businesses
        </h2>
      </div>
    </section>
  );
};

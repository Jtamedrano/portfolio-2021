import Image from "next/image";
import Link from "next/link";
import { LOCATIONS, NAVIGATION } from "../../constants/nav";

const PageFooter = () => {
  return (
    <footer className="py-8 bg-slate-100">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:items-start justify-between px-3 gap-8">
        <div className="flex flex-col items-center md:items-start gap-4 text-slate-700">
          <div>
            <Image src="/Logo.svg" alt="Logo" width={100} height={100} />
          </div>
          <p className="text-sm text-slate-700">
            &copy; 2025 J Medrano Design, All Rights Reserved
          </p>
        </div>
        <div className="flex gap-8 flex-col-reverse md:flex-row">
          <div className="flex flex-col gap-2 text-slate-700 text-center md:text-left">
            <h3 className="font-bold text-slate-700">Service Areas</h3>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-2 underline">
              {LOCATIONS.map((location) => (
                <Link key={location.city} href={`/locations/${location.slug}`}>
                  {location.city}, {location.state}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-2 text-slate-700 text-center md:text-left">
            <h3 className="font-bold text-slate-700">Site Map</h3>
            <nav className="flex flex-col gap-2 underline">
              {NAVIGATION.map((nav) => (
                <Link
                  key={nav.label}
                  href={nav.to}
                  className="hover:text-slate-300"
                >
                  {nav.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;

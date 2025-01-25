import Image from "next/image";
import Link from "next/link";
import { NAVIGATION } from "../../constants/nav";

const PageFooter = () => {
  return (
    <footer className="py-8 bg-slate-100">
      <div className="container mx-auto flex justify-between px-3">
        <div className="flex flex-col gap-4 text-slate-700">
          <div>
            <Image src="/Logo.svg" alt="Logo" width={100} height={100} />
          </div>
          <p className="text-sm text-slate-700">&copy; 2025 Jesse Medrano</p>
        </div>
        <div className="flex flex-col gap-2 text-slate-700 text-center">
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
    </footer>
  );
};

export default PageFooter;

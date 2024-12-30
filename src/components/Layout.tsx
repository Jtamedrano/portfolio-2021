import Head from "next/head";
import NavMenu from "./nav";

interface LayoutProps {
  title?: string;
}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  title,
  children,
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="py-4 sticky top-0 bg-slate-300 dark:bg-slate-700 shadow-md z-50">
      <NavMenu />
    </header>
    <div className=" transition-colors duration-500 overflow-y-hidden flex flex-col">
      <main className="overflow-y-auto flex flex-col flex-1">{children}</main>
    </div>
    <footer className="py-4 text-center text-sm text-slate-500 dark:text-slate-400 flex flex-col items-center gap-2">
      <button
        className="p-2 bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-slate-50 transition-colors duration-500 rounded-md"
        onClick={() => {
          document.body.classList.toggle("dark");
        }}
      >
        Toggle Theme
      </button>
      &copy; {new Date().getFullYear()} Jesse Medrano
    </footer>
  </>
);

export default Layout;

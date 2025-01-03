import { Aladin } from "next/font/google";
import cx from "classnames";
import NavMenu from "../components/nav";
import PageFooter from "../components/PageFooter/PageFooter";
import "../styles/globals.css";
import Head from "next/head";

const aladin = Aladin({
  weight: "400",
  variable: "--font-aladin",
  preload: true,
  subsets: ["latin"],
});

export const metadata = {
  favicon: "/favicon.ico",
};

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={cx(
          "antialiased min-h-screen relative transition-colors duration-500 flex flex-col",
          aladin.variable
        )}
        style={{
          maxWidth: "100vw",
        }}
      >
        <header className="py-4 sticky top-0 z-10 bg-slate-300 shadow-md shadow-black/25">
          <NavMenu />
        </header>
        <main className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 flex-1 flex flex-col">
          {children}
        </main>
        <PageFooter />
      </body>
    </html>
  );
};

export default Layout;

import { Aladin } from "next/font/google";
import cx from "classnames";
import NavMenu from "../components/nav";
import PageFooter from "../components/PageFooter/PageFooter";
import "../styles/globals.css";

const aladin = Aladin({
  weight: "400",
  variable: "--font-aladin",
  preload: true,
  subsets: ["latin"],
});

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={cx(
          "antialiased min-h-screen relative transition-colors duration-500",
          aladin.variable
        )}
        style={{
          maxWidth: "100vw",
        }}
      >
        <header className="py-4 sticky top-0 bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-100 shadow-md z-50 transition-all duration-500">
          <NavMenu />
        </header>
        <main className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-500">
          {children}
        </main>
        <PageFooter />
      </body>
    </html>
  );
};

export default Layout;

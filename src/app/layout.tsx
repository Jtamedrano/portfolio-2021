import cx from "classnames";
import NavMenu from "../components/nav/nav";
import PageFooter from "../components/PageFooter/PageFooter";
import "../styles/globals.css";
import { GoogleAnalytics } from "../components/Analytics/GoogleAnalytics";
import { SanityLive } from "../lib/sanity/live";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  adjustFontFallback: true,
  preload: true,
  fallback: ["sans-serif"],
  subsets: ["latin", "latin-ext"],
  variable: "--sans",
});

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body
        className={cx(
          firaSans.className,
          "antialiased min-h-screen relative transition-colors duration-500 flex flex-col --font-sans"
        )}
        style={{
          maxWidth: "100vw",
        }}
      >
        <header className="py-4 sticky top-0 z-50 bg-slate-900 shadow-md shadow-black/25">
          <NavMenu />
        </header>
        <main className="bg-slate-900 text-slate-100 flex-1 flex flex-col">
          {children}
        </main>
        <PageFooter />
        <SanityLive />
      </body>
    </html>
  );
};

export default Layout;

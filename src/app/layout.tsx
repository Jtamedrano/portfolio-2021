import cx from "classnames";
import NavMenu from "../components/nav/nav";
import PageFooter from "../components/PageFooter/PageFooter";
import "../styles/globals.css";
import { GoogleAnalytics } from "../components/Analytics/GoogleAnalytics";
import { SanityLive } from "../lib/sanity/live";
import { Anton, Fira_Sans } from "next/font/google";
import { ThemeProvider } from "../components/Providers/ThemeProvider";

const firaSans = Fira_Sans({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  adjustFontFallback: true,
  preload: true,
  fallback: ["sans-serif"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const anton = Anton({
  weight: ["400"],
  preload: true,
  fallback: ["sans-serif"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body
        className={cx(
          firaSans.variable,
          anton.variable,
          "antialiased min-h-screen relative transition-colors duration-500 flex flex-col font-sans scroll-smooth"
        )}
        style={{
          maxWidth: "100vw",
        }}
      >
        <ThemeProvider>
          <header className="py-4 sticky top-0 z-50 dark:bg-slate-900 bg-gray-50">
            <NavMenu />
          </header>
          <main className="flex-1 flex flex-col dark:bg-slate-900 dark:text-slate-100 bg-gray-50 text-slate-900">
            {children}
          </main>
          <PageFooter />
          <SanityLive />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;

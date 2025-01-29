import cx from "classnames";
import NavMenu from "../components/nav/nav";
import PageFooter from "../components/PageFooter/PageFooter";
import "../styles/globals.css";
import { GoogleAnalytics } from "../components/Analytics/GoogleAnalytics";
import { SanityLive } from "../lib/sanity/live";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body
        className={cx(
          "antialiased min-h-screen relative transition-colors duration-500 flex flex-col"
        )}
        style={{
          maxWidth: "100vw",
        }}
      >
        <header className="py-4 sticky top-0 z-50 bg-slate-300 shadow-md shadow-black/25">
          <NavMenu />
        </header>
        <main className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 flex-1 flex flex-col">
          {children}
        </main>
        <PageFooter />
        <SanityLive />
      </body>
    </html>
  );
};

export default Layout;

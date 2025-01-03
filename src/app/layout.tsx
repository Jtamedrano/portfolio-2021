"use client";

import cx from "classnames";
import NavMenu from "../components/nav";
import PageFooter from "../components/PageFooter/PageFooter";
import "../styles/globals.css";
import Script from "next/script";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const gamid = process.env.NEXT_PUBLIC_GA_MID;
  const isDev = process.env.NODE_ENV === "development";

  useEffect(() => {
    if (window?.gtag) {
      window.gtag("config", gamid, {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname, searchParams]);

  return (
    <html lang="en">
      <head>
        {gamid && !isDev && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gamid}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gamid}');
                `}
            </Script>
          </>
        )}
      </head>
      <body
        className={cx(
          "antialiased min-h-screen relative transition-colors duration-500 flex flex-col"
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

"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";
import { localBusinessSchema } from "../../constants/localBusiness";

const initGoogleAnalytics = async (gamid: string, pathname: string) => {
  return setTimeout(() => {
    if (window?.gtag && gamid) {
      window.gtag("config", gamid, {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, 5000);
};
export const GoogleAnalytics = () => {
  const pathname = usePathname();
  const gamid = process.env.NEXT_PUBLIC_GA_MID;
  const isDev = process.env.NODE_ENV === "development";

  useEffect(() => {
    if (!window) return;
    if (window?.gtag && gamid && !isDev) {
      initGoogleAnalytics(gamid, pathname);
    }
  }, [pathname]);

  return (
    <head>
      {gamid && !isDev && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gamid}`}
            strategy="afterInteractive"
            defer
          />
          <Script id="google-analytics" strategy="afterInteractive" defer>
            {`
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', '${gamid}');
		  `}
          </Script>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(localBusinessSchema),
            }}
          />
        </>
      )}
    </head>
  );
};

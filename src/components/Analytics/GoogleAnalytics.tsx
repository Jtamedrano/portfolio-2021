"use client";

import Clarity from "@microsoft/clarity";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

export const GoogleAnalytics = () => {
  const pathname = usePathname();
  const gamid = process.env.NEXT_PUBLIC_GA_MID;
  const isDev = process.env.NODE_ENV === "development";
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  useEffect(() => {
    if (!window) return;
    if (window?.gtag && gamid && !isDev) {
      window.gtag("config", gamid, {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
    if (clarityId && !isDev) {
      Clarity.init(clarityId);
    }
  }, [pathname, gamid, isDev, clarityId]);

  return (
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
  );
};

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-ZL0PMRW091";

// Leadfeeder / Dealfront — company-level visitor identification
const LEADFEEDER_ID =
  process.env.NEXT_PUBLIC_LEADFEEDER_ID || "lYNOR8x5nLq7WQJZ";

export function Analytics() {
  return (
    <>
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
          </Script>
        </>
      )}

      {LEADFEEDER_ID && (
        <>
          <Script id="leadfeeder-init" strategy="afterInteractive">
            {`
          window.ldfdr = window.ldfdr || function(){(ldfdr._q = ldfdr._q || []).push([].slice.call(arguments));};
        `}
          </Script>
          <Script
            src={`https://sc.lfeeder.com/lftracker_v1_${LEADFEEDER_ID}.js`}
            strategy="afterInteractive"
          />
        </>
      )}
    </>
  );
}

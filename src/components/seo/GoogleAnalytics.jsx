"use client";

import Script from "next/script";
import { useCookieConsent } from "@/components/cookie/CookieConsentContext";

/**
 * Loads Google Analytics 4 only when the visitor has granted analytics consent.
 *
 * - The Measurement ID is read from NEXT_PUBLIC_GA_ID, with a sensible default
 *   so it works on production without extra env config.
 * - The gtag scripts are NOT loaded before consent — strict UK GDPR / PECR
 *   posture rather than relying on Consent Mode v2 alone.
 * - On consent revocation, this component unmounts and stops issuing events;
 *   any in-flight gtag instance is cleared on the next navigation.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XBZFK78JCX";

export default function GoogleAnalytics() {
  const { consent } = useCookieConsent();

  if (!GA_ID) return null;
  if (!consent?.analytics) return null;

  return (
    <>
      <Script
        id="ga4-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}

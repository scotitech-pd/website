"use client";

import Script from "next/script";
import { useCookieConsent } from "@/components/cookie/CookieConsentContext";

const APOLLO_APP_ID = "6a70cab89014cc0010772afd";

/**
 * Loads Apollo's website tracker only after marketing consent.
 * Apollo is used for company-level visitor identification and sales intelligence,
 * so it must stay behind the optional marketing category.
 */
export default function ApolloTracker() {
  const { consent } = useCookieConsent();

  if (!consent?.marketing) return null;

  return (
    <Script id="apollo-website-tracker" strategy="afterInteractive">
      {`
        (function initApollo(){
          if (window.__scotitechApolloTrackerLoaded) return;
          window.__scotitechApolloTrackerLoaded = true;
          var nonce = Math.random().toString(36).substring(7);
          var script = document.createElement("script");
          script.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + nonce;
          script.async = true;
          script.defer = true;
          script.onload = function(){
            if (window.trackingFunctions && window.trackingFunctions.onLoad) {
              window.trackingFunctions.onLoad({ appId: "${APOLLO_APP_ID}" });
            }
          };
          document.head.appendChild(script);
        })();
      `}
    </Script>
  );
}

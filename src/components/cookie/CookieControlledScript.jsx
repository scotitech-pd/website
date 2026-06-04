"use client";

import Script from "next/script";
import { useCookieConsent } from "./CookieConsentContext";

/**
 * Renders a Next.js <Script> only when the given consent category is allowed.
 *
 * Usage:
 *   <CookieControlledScript
 *     category="analytics"
 *     src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
 *     strategy="afterInteractive"
 *   />
 *
 * - category="necessary"  → always renders
 * - category="analytics"  → renders only when analytics consent is given
 * - category="marketing"  → renders only when marketing consent is given
 */
export default function CookieControlledScript({ category = "necessary", ...scriptProps }) {
  const { consent } = useCookieConsent();

  if (category === "necessary") return <Script {...scriptProps} />;
  if (!consent) return null;
  if (!consent[category]) return null;

  return <Script {...scriptProps} />;
}

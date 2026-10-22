"use client";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { useCookieConsent } from "./CookieConsentContext";

/**
 * Vercel Speed Insights, loaded only with analytics consent, as the Cookie
 * Policy states. It sets no cookies, but it is optional measurement, so it
 * waits for the same choice as Google Analytics.
 */
export default function ConsentedSpeedInsights() {
  const { consent } = useCookieConsent();
  if (!consent?.analytics) return null;
  return <SpeedInsights />;
}

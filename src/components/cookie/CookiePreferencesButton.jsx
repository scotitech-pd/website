"use client";

import { useCookieConsent } from "./CookieConsentContext";

/**
 * A button that opens the cookie preferences modal.
 * Drop this anywhere inside <CookieConsentProvider> — typically the footer.
 */
export default function CookiePreferencesButton({ className }) {
  const { openPreferences } = useCookieConsent();

  return (
    <button onClick={openPreferences} className={className}>
      Cookie Settings
    </button>
  );
}

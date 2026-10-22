"use client";

import Link from "next/link";
import { useCookieConsent } from "./CookieConsentContext";

/* "Accept all" and "Reject non-essential" share one style, so rejecting is
   as easy and as visible as accepting (ICO guidance on cookie banners). */
const choiceClass =
  "inline-flex h-10 items-center justify-center rounded-lg bg-ink px-4 text-[14px] font-semibold text-white transition-colors hover:bg-ink-soft";

export default function CookieBanner() {
  const { bannerVisible, acceptAll, rejectNonEssential, openPreferences } =
    useCookieConsent();

  if (!bannerVisible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-[998] mx-auto max-w-2xl"
      role="region"
      aria-label="Cookie consent"
    >
      <div className="rounded-xl border border-hairline bg-surface p-5 shadow-lift">
        <p className="text-[14px] leading-6 text-body">
          We use cookies that the site needs to work. With your consent, we also use analytics and
          marketing cookies to understand how the site is used. See our{" "}
          <Link href="/cookie-policy" className="font-medium text-brand-strong underline underline-offset-2">
            Cookie Policy
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" className="font-medium text-brand-strong underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" onClick={acceptAll} className={choiceClass}>
            Accept all
          </button>
          <button type="button" onClick={rejectNonEssential} className={choiceClass}>
            Reject non-essential
          </button>
          <button
            type="button"
            onClick={openPreferences}
            className="inline-flex h-10 items-center justify-center rounded-lg border border-hairline-strong bg-surface px-4 text-[14px] font-semibold text-strong transition-colors hover:bg-white"
          >
            Manage preferences
          </button>
        </div>
      </div>
    </div>
  );
}

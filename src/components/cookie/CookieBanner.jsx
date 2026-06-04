"use client";

import Link from "next/link";
import { useCookieConsent } from "./CookieConsentContext";

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
      <div className="rounded-[1.15rem] border border-white/10 bg-[#100E0C] p-5 shadow-[0_24px_60px_rgba(16,14,12,0.5)]">
        <p className="mb-4 font-lora text-sm leading-6 text-slate-300">
          We use cookies to keep the site working and, with your consent, to
          understand how it&apos;s used. See our{" "}
          <Link
            href="/privacy-policy"
            className="underline underline-offset-2 transition hover:text-white"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/cookie-policy"
            className="underline underline-offset-2 transition hover:text-white"
          >
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={acceptAll}
            className="rounded-full bg-white px-4 py-2 font-karla text-xs font-semibold text-[#100E0C] transition hover:bg-slate-100"
          >
            Accept all
          </button>
          <button
            onClick={rejectNonEssential}
            className="rounded-full border border-white/15 px-4 py-2 font-karla text-xs font-semibold text-slate-400 transition hover:border-white/30 hover:text-white"
          >
            Reject non-essential
          </button>
          <button
            onClick={openPreferences}
            className="rounded-full border border-white/15 px-4 py-2 font-karla text-xs font-semibold text-slate-400 transition hover:border-white/30 hover:text-white"
          >
            Manage preferences
          </button>
        </div>
      </div>
    </div>
  );
}

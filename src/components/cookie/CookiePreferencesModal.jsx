"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { CATEGORIES } from "@/lib/cookieConsent";
import { useCookieConsent } from "./CookieConsentContext";

export default function CookiePreferencesModal() {
  const {
    consent,
    modalOpen,
    draftPrefs,
    setDraftPrefs,
    closePreferences,
    savePreferences,
    acceptAll,
    rejectNonEssential,
  } = useCookieConsent();

  const dialogRef = useRef(null);
  const hasConsented = consent !== null;

  // Escape key: only close if user has already consented (so modal can't be
  // dismissed before a choice is made on first visit)
  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape" && hasConsented) closePreferences();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen, hasConsented, closePreferences]);

  // Lock scroll and move focus into dialog
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      dialogRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  if (!modalOpen) return null;

  const toggle = (id) =>
    setDraftPrefs((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <>
      {/* Backdrop — clicking closes only after first consent */}
      <div
        className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm"
        onClick={hasConsented ? closePreferences : undefined}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-prefs-title"
        tabIndex={-1}
        className="fixed inset-x-4 bottom-4 z-[1000] mx-auto max-w-lg rounded-xl border border-hairline bg-surface p-6 shadow-lift outline-none sm:inset-x-auto sm:left-1/2 sm:bottom-6 sm:-translate-x-1/2"
      >
        {/* Header */}
        <div className="mb-5 flex items-start justify-between gap-4">
          <h2
            id="cookie-prefs-title"
            className="text-[17px] font-semibold text-strong"
          >
            Cookie preferences
          </h2>
          {hasConsented && (
            <button
              onClick={closePreferences}
              aria-label="Close cookie preferences"
              className="rounded-md border border-hairline p-1.5 text-muted transition hover:text-strong"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        {/* Description */}
        <p className="mb-5 text-[14px] leading-6 text-body">
          Choose which cookies you allow us to use. See our{" "}
          <Link
            href="/privacy-policy"
            className="font-medium text-brand-strong underline underline-offset-2"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/cookie-policy"
            className="font-medium text-brand-strong underline underline-offset-2"
          >
            Cookie Policy
          </Link>
          .
        </p>

        {/* Category toggles */}
        <div className="mb-6 space-y-3">
          {CATEGORIES.map((cat) => {
            const checked = cat.required ? true : (draftPrefs[cat.id] ?? false);
            return (
              <div
                key={cat.id}
                className="flex items-start justify-between gap-4 rounded-lg border border-hairline bg-surface-muted p-4"
              >
                <div className="flex-1">
                  <p className="text-[14px] font-semibold text-strong">
                    {cat.label}
                    {cat.required && (
                      <span className="ml-2 text-[11px] font-normal uppercase tracking-wider text-muted">
                        Always on
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-[13px] leading-5 text-body">
                    {cat.description}
                  </p>
                </div>

                {/* Toggle switch */}
                <button
                  role="switch"
                  aria-checked={checked}
                  aria-label={`${cat.label} cookies`}
                  disabled={cat.required}
                  onClick={() => !cat.required && toggle(cat.id)}
                  className={`mt-0.5 h-6 w-10 shrink-0 rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 ${
                    checked
                      ? "border-brand bg-brand"
                      : "border-hairline-strong bg-surface-sunken"
                  } ${cat.required ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
                >
                  <span
                    className={`block h-4 w-4 rounded-full bg-white shadow transition-transform ${
                      checked ? "translate-x-5" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => savePreferences(draftPrefs)}
            className="inline-flex h-10 items-center rounded-lg bg-ink px-4 text-[14px] font-semibold text-white transition hover:bg-ink-soft"
          >
            Save preferences
          </button>
          <button
            onClick={acceptAll}
            className="inline-flex h-10 items-center rounded-lg border border-hairline-strong bg-surface px-4 text-[14px] font-semibold text-strong transition hover:bg-white"
          >
            Accept all
          </button>
          <button
            onClick={rejectNonEssential}
            className="inline-flex h-10 items-center rounded-lg border border-hairline-strong bg-surface px-4 text-[14px] font-semibold text-strong transition hover:bg-white"
          >
            Reject non-essential
          </button>
        </div>
      </div>
    </>
  );
}

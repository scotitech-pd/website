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
        className="fixed inset-x-4 bottom-4 z-[1000] mx-auto max-w-lg rounded-[1.15rem] border border-white/10 bg-[#100E0C] p-6 shadow-[0_32px_80px_rgba(16,14,12,0.55)] outline-none sm:inset-x-auto sm:left-1/2 sm:bottom-6 sm:-translate-x-1/2"
      >
        {/* Header */}
        <div className="mb-5 flex items-start justify-between gap-4">
          <h2
            id="cookie-prefs-title"
            className="font-karla text-base font-semibold text-white"
          >
            Cookie Preferences
          </h2>
          {hasConsented && (
            <button
              onClick={closePreferences}
              aria-label="Close cookie preferences"
              className="rounded-full border border-white/10 p-1.5 text-slate-400 transition hover:border-white/25 hover:text-white"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        {/* Description */}
        <p className="mb-5 font-lora text-sm leading-6 text-slate-400">
          Choose which cookies you allow us to use. See our{" "}
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

        {/* Category toggles */}
        <div className="mb-6 space-y-3">
          {CATEGORIES.map((cat) => {
            const checked = cat.required ? true : (draftPrefs[cat.id] ?? false);
            return (
              <div
                key={cat.id}
                className="flex items-start justify-between gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4"
              >
                <div className="flex-1">
                  <p className="font-karla text-sm font-semibold text-white">
                    {cat.label}
                    {cat.required && (
                      <span className="ml-2 font-karla text-[10px] font-normal uppercase tracking-wider text-slate-500">
                        Always on
                      </span>
                    )}
                  </p>
                  <p className="mt-1 font-lora text-xs leading-5 text-slate-400">
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
                  className={`mt-0.5 h-6 w-10 shrink-0 rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                    checked
                      ? "border-[#8C7A5E] bg-[#8C7A5E]"
                      : "border-white/15 bg-white/10"
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
            className="rounded-full bg-white px-4 py-2 font-karla text-xs font-semibold text-[#100E0C] transition hover:bg-slate-100"
          >
            Save preferences
          </button>
          <button
            onClick={acceptAll}
            className="rounded-full border border-white/15 px-4 py-2 font-karla text-xs font-semibold text-slate-400 transition hover:border-white/30 hover:text-white"
          >
            Accept all
          </button>
          <button
            onClick={rejectNonEssential}
            className="rounded-full border border-white/15 px-4 py-2 font-karla text-xs font-semibold text-slate-400 transition hover:border-white/30 hover:text-white"
          >
            Reject non-essential
          </button>
        </div>
      </div>
    </>
  );
}

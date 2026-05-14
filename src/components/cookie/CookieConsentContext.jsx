"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { readConsent, writeConsent } from "@/lib/cookieConsent";

const CookieConsentContext = createContext(null);

export function CookieConsentProvider({ children }) {
  const [consent, setConsent] = useState(null);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [draftPrefs, setDraftPrefs] = useState({ analytics: false, marketing: false });

  useEffect(() => {
    const stored = readConsent();
    if (stored) {
      setConsent(stored);
    } else {
      setBannerVisible(true);
    }
  }, []);

  const acceptAll = useCallback(() => {
    const c = writeConsent({ analytics: true, marketing: true });
    setConsent(c);
    setBannerVisible(false);
    setModalOpen(false);
  }, []);

  const rejectNonEssential = useCallback(() => {
    const c = writeConsent({ analytics: false, marketing: false });
    setConsent(c);
    setBannerVisible(false);
    setModalOpen(false);
  }, []);

  const openPreferences = useCallback(() => {
    const stored = readConsent();
    setDraftPrefs({
      analytics: stored?.analytics ?? false,
      marketing: stored?.marketing ?? false,
    });
    setModalOpen(true);
  }, []);

  const closePreferences = useCallback(() => {
    setModalOpen(false);
  }, []);

  const savePreferences = useCallback((prefs) => {
    const c = writeConsent(prefs);
    setConsent(c);
    setBannerVisible(false);
    setModalOpen(false);
  }, []);

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        bannerVisible,
        modalOpen,
        draftPrefs,
        setDraftPrefs,
        acceptAll,
        rejectNonEssential,
        openPreferences,
        closePreferences,
        savePreferences,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error("useCookieConsent must be used inside <CookieConsentProvider>");
  return ctx;
}

"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { clearTrackingStorage, readConsent, writeConsent } from "@/lib/cookieConsent";

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
      // Analytics can re-write its cookies while a page unloads, so clear
      // them again on every load while consent is off.
      clearTrackingStorage(stored);
    } else {
      setBannerVisible(true);
    }
  }, []);

  // Withdrawing analytics or marketing consent clears what those tools left
  // behind and reloads the page, so scripts already running stop at once.
  const store = useCallback((prefs) => {
    const previous = readConsent();
    const c = writeConsent(prefs);
    const withdrawn =
      (previous?.analytics && !c.analytics) || (previous?.marketing && !c.marketing);
    if (withdrawn) {
      clearTrackingStorage(c);
      window.location.reload();
    }
    return c;
  }, []);

  const acceptAll = useCallback(() => {
    const c = store({ analytics: true, marketing: true });
    setConsent(c);
    setBannerVisible(false);
    setModalOpen(false);
  }, [store]);

  const rejectNonEssential = useCallback(() => {
    const c = store({ analytics: false, marketing: false });
    setConsent(c);
    setBannerVisible(false);
    setModalOpen(false);
  }, [store]);

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
    const c = store(prefs);
    setConsent(c);
    setBannerVisible(false);
    setModalOpen(false);
  }, [store]);

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

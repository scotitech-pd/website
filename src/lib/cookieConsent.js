/**
 * Cookie consent shared config and utilities.
 * UK GDPR / PECR compliant — v1.
 */

export const CONSENT_KEY = "scotitech-cookie-consent-v1";
export const CONSENT_VERSION = 1;

/** Canonical category definitions used by banner, modal, and script wrapper. */
export const CATEGORIES = [
  {
    id: "necessary",
    label: "Necessary",
    description:
      "Essential for the site to function correctly. These cannot be disabled.",
    required: true,
  },
  {
    id: "analytics",
    label: "Analytics",
    description:
      "Help us understand how visitors interact with our site using anonymised, aggregated data.",
    required: false,
  },
  {
    id: "marketing",
    label: "Marketing",
    description:
      "Used to deliver relevant content and measure the effectiveness of our campaigns.",
    required: false,
  },
];

/**
 * Read stored consent from localStorage.
 * Returns null if no consent has been recorded or the version is outdated.
 */
export function readConsent() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed?.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

/**
 * Write consent to localStorage.
 * @param {{ analytics: boolean, marketing: boolean }} prefs
 * @returns {object} The stored consent object.
 */
export function writeConsent(prefs) {
  const payload = {
    version: CONSENT_VERSION,
    timestamp: Date.now(),
    necessary: true,
    analytics: prefs.analytics ?? false,
    marketing: prefs.marketing ?? false,
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(payload));
  return payload;
}

/**
 * Returns true if the given category is currently allowed.
 * "necessary" is always allowed.
 */
export function isAllowed(category) {
  if (category === "necessary") return true;
  const consent = readConsent();
  if (!consent) return false;
  return consent[category] === true;
}

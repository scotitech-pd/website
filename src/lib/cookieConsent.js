/**
 * Cookie consent shared config and utilities.
 * UK GDPR / PECR compliant — v1.
 *
 * Consent is stored in a first-party cookie (SameSite=Strict, 365 days)
 * rather than localStorage, so it persists across private browsing sessions
 * and survives "clear site data" actions that wipe localStorage only.
 */

export const CONSENT_KEY = "scotitech-cookie-consent-v1";
export const CONSENT_VERSION = 1;
const CONSENT_MAX_AGE = 365 * 24 * 60 * 60; // 1 year in seconds

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
      "Used to understand business visitors, support relevant outreach, and measure campaign effectiveness.",
    required: false,
  },
];

/**
 * Read stored consent from a first-party cookie.
 * Returns null if no consent has been recorded or the version is outdated.
 */
export function readConsent() {
  if (typeof document === "undefined") return null;
  try {
    const match = document.cookie
      .split("; ")
      .find((row) => row.startsWith(CONSENT_KEY + "="));
    if (!match) return null;
    const raw = decodeURIComponent(match.split("=").slice(1).join("="));
    const parsed = JSON.parse(raw);
    if (parsed?.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

/**
 * Write consent to a first-party cookie (SameSite=Strict, 1 year).
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
  const encoded = encodeURIComponent(JSON.stringify(payload));
  document.cookie = `${CONSENT_KEY}=${encoded}; max-age=${CONSENT_MAX_AGE}; path=/; SameSite=Strict`;
  return payload;
}

/**
 * Remove what optional tools leave on this site once their category is off:
 * analytics → the Google Analytics _ga, _gid and _gat cookies (set on the bare
 * domain and on the dotted parent domain); marketing → Apollo keys in local
 * storage. Cookies set on apollo.io itself belong to that site and expire on
 * their own.
 * @param {{ analytics: boolean, marketing: boolean }} consent What is allowed now.
 */
export function clearTrackingStorage({ analytics = false, marketing = false } = {}) {
  if (typeof document === "undefined") return;
  const host = window.location.hostname;
  const domains = ["", host, "." + host.replace(/^www\./, "")];
  document.cookie.split("; ").forEach((row) => {
    const name = row.split("=")[0];
    if (analytics || !/^(_ga|_gid|_gat)/.test(name)) return;
    domains.forEach((d) => {
      document.cookie = `${name}=; max-age=0; path=/${d ? "; domain=" + d : ""}`;
    });
  });
  if (marketing) return;
  try {
    Object.keys(window.localStorage)
      .filter((k) => /apollo|aplo/i.test(k))
      .forEach((k) => window.localStorage.removeItem(k));
  } catch {
    // Storage can be unavailable (private mode, blocked site data).
  }
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

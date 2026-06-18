"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Mail, Phone, MapPin, Award, Apple, ShieldCheck } from "lucide-react";
import CookiePreferencesButton from "@/components/cookie/CookiePreferencesButton";

const quickLinks = [
  { title: "Products", link: "/products" },
  { title: "Insights", link: "/insights" },
  { title: "About", link: "/aboutus" },
  { title: "Media", link: "/media" },
  { title: "Contact", link: "/contact" },
];

const productLinks = [
  { title: "AppDeploy", link: "/products/appdeploy" },
  { title: "AXOS", link: "/products/axos" },
  { title: "ClarityPath", link: "/products/claritypath" },
];

const badges = [
  { icon: Award, label: "UK StartUp Awards 2026 — Shortlisted" },
  { icon: Apple, label: "Apple Custom Apps" },
  { icon: ShieldCheck, label: "GDPR Aligned" },
];

const WhatsApp = ({ className }) => (
  <svg viewBox="0 0 509 511.514" className={className} fill="currentColor" aria-hidden="true">
    <path d="M434.762 74.334C387.553 26.81 323.245 0 256.236 0h-.768C115.795.001 2.121 113.696 2.121 253.456l.001.015a253.516 253.516 0 0033.942 126.671L0 511.514l134.373-35.269a253.416 253.416 0 00121.052 30.9h.053C395.472 507.145 509 393.616 509 253.626c0-67.225-26.742-131.727-74.252-179.237l.014-.055zM255.555 464.453c-37.753 0-74.861-10.22-107.293-29.479l-7.72-4.602-79.741 20.889 21.207-77.726-4.984-7.975c-21.147-33.606-32.415-72.584-32.415-112.308 0-116.371 94.372-210.743 210.741-210.743 56.011 0 109.758 22.307 149.277 61.98a210.93 210.93 0 0161.744 149.095c0 116.44-94.403 210.869-210.844 210.869h.028zm115.583-157.914c-6.363-3.202-37.474-18.472-43.243-20.593-5.769-2.121-10.01-3.202-14.315 3.203-4.305 6.404-16.373 20.593-20.063 24.855-3.69 4.263-7.401 4.815-13.679 1.612-6.278-3.202-26.786-9.883-50.899-31.472a192.748 192.748 0 01-35.411-43.867c-3.712-6.363-.404-9.777 2.82-12.873 3.224-3.096 6.363-7.381 9.48-11.092a41.58 41.58 0 006.357-10.597 11.678 11.678 0 00-.508-11.09c-1.718-3.18-14.444-34.357-19.534-47.06-5.09-12.703-10.37-10.603-14.272-10.901-3.902-.297-7.911-.19-12.089-.19a23.322 23.322 0 00-16.964 7.911c-5.707 6.298-22.1 21.673-22.1 52.849s22.671 61.249 25.852 65.532c3.182 4.284 44.663 68.227 108.288 95.649 15.099 6.489 26.891 10.392 36.053 13.403a87.504 87.504 0 0025.216 3.718c4.905 0 9.82-.416 14.65-1.237 12.174-1.782 37.453-15.291 42.776-30.073s5.303-27.57 3.711-30.093c-1.591-2.524-5.704-4.369-12.088-7.615l-.038.021z" />
  </svg>
);

const socials = [
  { Icon: WhatsApp, href: "https://wa.me/447424331001", label: "WhatsApp" },
  { Icon: Instagram, href: "https://www.instagram.com/scotitechsolutions/", label: "Instagram" },
  { Icon: Linkedin, href: "https://www.linkedin.com/company/scotitech-ltd/", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-on-ink">
      <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
        {/* Top */}
        <div className="grid gap-10 py-14 md:py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image src="/logo/logo.png" alt="ScotiTech" width={170} height={42} className="h-auto w-[170px]" />
            </Link>
            <p className="mt-5 max-w-xs font-lora text-sm leading-relaxed text-on-ink-muted">
              Focused software products for private app rollout, team operations,
              and policy-aligned, AI-assisted work.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-on-ink transition-colors hover:border-brand hover:bg-brand hover:text-brand-contrast"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-on-ink-muted">
              Quick links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.title}>
                  <Link href={l.link} className="font-karla text-sm text-on-ink/90 transition-colors hover:text-brand">
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-on-ink-muted">
              Products
            </h4>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.title}>
                  <Link href={l.link} className="font-karla text-sm text-on-ink/90 transition-colors hover:text-brand">
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-on-ink-muted">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 font-lora text-sm text-on-ink-muted">
              <li>
                <a href="mailto:info@scotitech.com" className="flex items-center gap-2.5 hover:text-brand">
                  <Mail className="h-4 w-4 shrink-0" /> info@scotitech.com
                </a>
              </li>
              <li>
                <a href="tel:+441698708203" className="flex items-center gap-2.5 hover:text-brand">
                  <Phone className="h-4 w-4 shrink-0" /> +44 (0) 1698 708203
                </a>
              </li>
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Operations: Regus - Lanarkshire Eurocentral, Maxim 1,
                  2 Parklands Way, Eurocentral, Motherwell ML1 4WR, UK
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 py-6">
          {badges.map(({ icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-2 font-karla text-xs font-semibold uppercase tracking-[0.12em] text-on-ink-muted">
              <Icon className="h-4 w-4 text-brand" />
              {label}
            </span>
          ))}
          <a
            href="https://sellwithboost.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listed on Sell With Boost"
            className="inline-flex h-10 items-center rounded-full bg-white px-3 transition-transform hover:-translate-y-0.5"
          >
            {/* Third-party badge asset supplied by Sell With Boost. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://sellwithboost.com/badge/listing.svg"
              alt="Listed on Sell With Boost"
              className="h-10 w-auto"
              loading="lazy"
            />
          </a>
        </div>

        {/* Legal / registered office */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 md:flex-row md:items-center md:justify-between">
          <p className="font-lora text-xs leading-relaxed text-on-ink-muted">
            © {new Date().getFullYear()} ScotiTech Solutions Limited. All rights reserved.
            <br className="hidden sm:block" />
            Registered in Scotland · Registered office: 11 Caldervale Drive, Motherwell ML1 2GB, UK.
          </p>
          <div className="flex gap-6 font-karla text-xs text-on-ink-muted">
            <Link href="/privacy-policy" className="hover:text-brand">Privacy</Link>
            <Link href="/cookie-policy" className="hover:text-brand">Cookies</Link>
            <Link href="/terms-and-conditions" className="hover:text-brand">Terms</Link>
            <CookiePreferencesButton className="cursor-pointer hover:text-brand" />
          </div>
        </div>
      </div>
    </footer>
  );
}

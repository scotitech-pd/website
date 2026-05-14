"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";

const quickLinks = [
  { id: 1, title: "Products", link: "/products" },
  { id: 2, title: "Pricing", link: "/products/appdeploy#pricing" },
  { id: 3, title: "Insights", link: "/insights" },
  { id: 4, title: "About", link: "/aboutus" },
  { id: 5, title: "Contact", link: "/contact" },
  { id: 6, title: "Media", link: "/media" },
];

const products = [
  { id: 1, title: "AppDeploy", link: "/products/appdeploy" },
  { id: 2, title: "AXOS", link: "/products/axos" },
  { id: 3, title: "ClarityPath", link: "/products/claritypath" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0E1116] text-white">
      <div className="mx-auto max-w-8xl px-5 py-12 min-[500px]:px-10 md:px-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr]">
          <div>
            <Image
              src="/logo/logo.png"
              alt="ScotiTech logo"
              width={170}
              height={63}
              className="mb-5 h-auto w-[160px]"
            />
            <p className="max-w-sm font-lora leading-7 text-slate-300">
              Focused software products for private app rollout, team operations, and policy-aligned AI-assisted work.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/scotitech-ltd/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/5 p-2 text-slate-300 transition hover:border-white/35 hover:bg-white/10 hover:text-white"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="https://www.instagram.com/scotitechsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/5 p-2 text-slate-300 transition hover:border-white/35 hover:bg-white/10 hover:text-white"
              >
                <Instagram className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-karla text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <Link href={item.link} className="font-lora text-slate-300 transition hover:text-white">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-karla text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
              Products
            </h3>
            <ul className="space-y-2">
              {products.map((item) => (
                <li key={item.id}>
                  <Link href={item.link} className="font-lora text-slate-300 transition hover:text-white">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-karla text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
              Contact
            </h3>
            <div className="space-y-2 font-lora text-slate-300">
              <a href="mailto:info@scotitech.com" className="block transition hover:text-white">
                info@scotitech.com
              </a>
              <a href="tel:+441698708203" className="block transition hover:text-white">
                +44 (0) 1698 708203
              </a>
              <p>Eurocentral, 2 Parklands Way Maxim 1, Maxim Business Park, 1st, Motherwell ML1 4WR, UK</p>
            </div>
            <div className="mt-6 flex gap-5 font-karla text-sm">
              <Link href="/privacy-policy" className="text-slate-400 transition hover:text-white">
                Privacy
              </Link>
              <Link href="/terms-and-conditions" className="text-slate-400 transition hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 font-karla text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              UK StartUp Awards 2026 — Shortlisted
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 font-karla text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Apple Custom Apps
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 font-karla text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              GDPR Aligned
            </span>
          </div>
          <p className="font-lora text-sm text-slate-400">Copyright {new Date().getFullYear()} ScotiTech Solutions Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

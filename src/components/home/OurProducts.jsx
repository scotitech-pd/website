"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Store,
  Smartphone,
  ShieldCheck,
  FileCheck2,
  ScanSearch,
  Gauge,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Badge from "@/components/ui/Badge";
import ProductShowcase from "@/components/products/ProductShowcase";

const vamiqParts = [
  {
    Icon: Store,
    title: "Private app distribution",
    body: "Your own branded app store for your company’s private and internal apps.",
  },
  {
    Icon: Smartphone,
    title: "Device management",
    body: "Set up company iPhones, iPads and Macs, install apps on them and keep updates in view.",
  },
  {
    Icon: ShieldCheck,
    title: "Release controls",
    body: "Check each new build before it reaches a device, and keep a record of what was released.",
  },
];

const vamiqDifferentiators = [
  {
    Icon: ScanSearch,
    title: "Release Guard",
    body: "Every build is preflighted before it can reach a device. A check that can’t run says “unknown”, never “passed”.",
  },
  {
    Icon: Gauge,
    title: "Deployment answers",
    body: "A deterministic cause and next action for every device that didn’t converge. No AI in deployment decisions.",
  },
  {
    Icon: FileCheck2,
    title: "Evidence Packs",
    body: "A checksummed record of what was released, to whom and with what outcome, verifiable by an auditor.",
  },
];

const axos = {
  name: "AXOS",
  href: "/products/axos",
  externalUrl: "https://axos.scotitech.com",
  logo: "/images/brand/axos-icon.png",
  status: { variant: "early", label: "Enterprise only" },
  category: "Private AI workspace",
  tagline: "Your enterprise AI platform, self-hosted.",
  description:
    "Mail, drive, chat, video and tasks with governance-first AI built in, running entirely inside your own environment. A completed core platform, available for private enterprise evaluation.",
  media: {
    src: "/images/products/axos/command-center-dashboard.webp",
    alt: "AXOS Command Center dashboard showing governed AI and connected workspace modules",
  },
};

export default function OurProducts() {
  return (
    <Section id="products" surface="muted" spacing="lg">
      <Reveal>
        <div className="max-w-3xl">
          <Eyebrow>Our flagship</Eyebrow>
          <h2 className="t-h1 mt-3">Meet Vamiq.</h2>
          <p className="t-lead mt-5">
            Your private apps, on your team’s iPhones, iPads and Macs. Vamiq
            is a branded app store, Apple device management and release
            controls in one workspace, built on Apple Business rather than
            around it.
          </p>
        </div>
      </Reveal>

      {/* Vamiq flagship panel */}
      <Reveal delay={0.06}>
        <article className="relative mt-10 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#032B2A_0%,#053B39_55%,#0B4F4B_100%)] text-white shadow-lift">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_90%_0%,rgba(94,234,212,0.18),transparent_60%)]" />
          <div className="relative grid gap-10 p-6 md:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:p-12">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Image
                  src="/images/brand/vamiq/vamiq-logo-on-dark.svg"
                  alt="Vamiq"
                  width={150}
                  height={51}
                  className="h-10 w-auto"
                />
                <Badge variant="onInk" dot>
                  Live
                </Badge>
              </div>
              <p className="mt-6 font-karla text-[1.15rem] font-semibold leading-8 text-white">
                Apple Business stays underneath. Vamiq is the operational
                layer teams were building themselves, or buying a large
                device-management suite to get.
              </p>

              <ul className="mt-7 space-y-4">
                {vamiqParts.map(({ Icon, title, body }) => (
                  <li key={title} className="flex gap-3.5">
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#5EEAD4] ring-1 ring-white/10">
                      <Icon size={17} />
                    </span>
                    <div>
                      <p className="font-karla text-[15px] font-semibold text-white">{title}</p>
                      <p className="mt-0.5 font-lora text-sm leading-6 text-white/65">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://vamiq.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-karla text-[15px] font-semibold text-[#0B1F1E] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F0FDFA]"
                >
                  Start free on vamiq.app
                  <ArrowUpRight size={16} />
                </a>
                <Link
                  href="/products/vamiq"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-karla text-[15px] font-semibold text-white/85 transition-colors hover:border-white/40 hover:text-white"
                >
                  Explore Vamiq
                  <ArrowRight size={16} />
                </Link>
              </div>
              <p className="mt-4 font-karla text-xs tracking-wide text-white/45">
                Free for up to 5 devices · £1 per device after that · formerly AppDeploy
              </p>
            </div>

            <div className="relative">
              <ProductShowcase
                variant="vamiq"
                src="/images/products/appdeploy/claritypath-portal.webp"
                alt="Vamiq branded app store for an organisation, listing its approved private apps"
              />
            </div>
          </div>

          <div className="relative grid border-t border-white/10 md:grid-cols-3">
            {vamiqDifferentiators.map(({ Icon, title, body }, i) => (
              <div
                key={title}
                className={
                  "p-6 md:p-8 " + (i > 0 ? "border-t border-white/10 md:border-l md:border-t-0" : "")
                }
              >
                <Icon size={18} className="text-[#5EEAD4]" />
                <p className="mt-3 font-karla text-[15px] font-semibold text-white">{title}</p>
                <p className="mt-1.5 font-lora text-sm leading-6 text-white/60">{body}</p>
              </div>
            ))}
          </div>
        </article>
      </Reveal>

      {/* Secondary product */}
      <Reveal delay={0.1}>
        <p className="mt-16 font-karla text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
          Also from ScotiTech
        </p>
        <article className="group mt-4 grid overflow-hidden rounded-xl border border-hairline bg-surface shadow-soft transition-shadow duration-300 hover:shadow-card md:grid-cols-[minmax(0,1fr)_280px] lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="flex flex-col p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-3.5">
              <Image
                src={axos.logo}
                alt={`${axos.name} logo`}
                width={36}
                height={36}
                className="h-9 w-9 rounded-lg object-contain"
              />
              <div>
                <p className="font-karla text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                  {axos.category}
                </p>
                <h3 className="font-karla text-xl font-bold leading-tight text-strong">{axos.name}</h3>
              </div>
              <Badge variant={axos.status.variant} className="ml-auto">
                {axos.status.label}
              </Badge>
            </div>
            <p className="mt-5 font-karla text-base font-semibold text-strong">{axos.tagline}</p>
            <p className="mt-2 max-w-2xl font-lora text-[15px] leading-7 text-body">{axos.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href={axos.href}
                className="inline-flex items-center gap-1.5 font-karla text-xs font-semibold uppercase tracking-[0.16em] text-brand-strong transition-colors hover:text-brand"
              >
                Explore AXOS
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={axos.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-karla text-xs font-semibold uppercase tracking-[0.16em] text-muted transition-colors hover:text-strong"
              >
                Request access
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
          <div className="relative hidden min-h-[220px] border-l border-hairline md:block">
            <ProductShowcase
              variant="axos"
              src={axos.media.src}
              alt={axos.media.alt}
              compact
              className="absolute inset-0"
            />
          </div>
        </article>
      </Reveal>
    </Section>
  );
}

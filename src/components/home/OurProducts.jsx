"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const flagships = [
  {
    name: "AppDeploy",
    href: "/products/appdeploy",
    externalUrl: "https://appdeploy.scotitech.com",
    logo: "/images/brand/appdeploy-logo-black.png",
    accent: "bg-appdeploy",
    status: { variant: "live", dot: true, label: "Live" },
    tagline: "Your apps. Your brand. Enterprise-ready in 14 days.",
    description:
      "A branded workspace for private iOS and Android app delivery, with Apple Business-aligned workflows and clearer install guidance — without forcing full MDM adoption.",
    capabilities: ["Branded portal", "Apple Business", "iOS & Android"],
    media: {
      type: "image",
      src: "/images/products/appdeploy/phonepic.png",
      alt: "AppDeploy workspace dashboard",
    },
  },
  {
    name: "AXOS",
    href: "/products/axos",
    externalUrl: "https://axos.scotitech.com",
    logo: "/images/brand/axos-icon.png",
    accent: "bg-axos",
    status: { variant: "early", label: "Enterprise only" },
    tagline: "Your entire workspace — self-hosted.",
    description:
      "A completed enterprise workspace for employees — mail, drive, chat, video, tasks — with governance-first AI built in and a limited testing platform for qualified organisations.",
    capabilities: ["Enterprise evaluation", "Governance-first AI", "100% on-premise"],
    media: {
      type: "image",
      src: "/images/products/axos/workspace.png",
      alt: "AXOS self-hosted workspace",
    },
  },
];

export default function OurProducts() {
  return (
    <Section id="products" surface="muted" spacing="lg">
      <Reveal className="max-w-3xl">
        <Eyebrow>Products</Eyebrow>
        <h2 className="t-h1 mt-3">
          Two flagship products, one operating principle: real control.
        </h2>
        <p className="t-lead mt-5">
          AppDeploy handles private app distribution. AXOS is an
          enterprise-only, self-hosted workspace suite with AI built in. Both
          keep control — and your data — where they belong.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {flagships.map((product, i) => (
          <Reveal key={product.name} delay={i * 0.08}>
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-surface shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
              <span className={cn("block h-1 w-full", product.accent)} />

              {/* Media */}
              <div className="relative aspect-[16/9] overflow-hidden border-b border-hairline bg-surface-sunken">
                {product.media.type === "image" ? (
                  <Image
                    src={product.media.src}
                    alt={product.media.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_50%_30%,rgba(251,146,60,0.12),transparent_60%)]">
                    <Image
                      src="/images/brand/axos-icon.png"
                      alt="AXOS"
                      width={64}
                      height={64}
                      className="h-14 w-14 object-contain opacity-90"
                    />
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface px-3 py-1 font-karla text-xs font-medium text-muted">
                      <Sparkles size={13} className="text-axos" />
                      Private AI workspace
                    </span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {product.logo && (
                      <Image
                        src={product.logo}
                        alt={`${product.name} logo`}
                        width={44}
                        height={44}
                        className="h-10 w-10 rounded-xl object-contain"
                      />
                    )}
                    <h3 className="font-karla text-2xl font-semibold text-strong">
                      {product.name}
                    </h3>
                  </div>
                  <Badge variant={product.status.variant} dot={product.status.dot}>
                    {product.status.label}
                  </Badge>
                </div>

                <p className="font-karla text-lg font-semibold text-strong">
                  {product.tagline}
                </p>
                <p className="t-body mt-3">{product.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {product.capabilities.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-surface-sunken px-3 py-1 font-karla text-xs font-medium text-body"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-1.5 font-karla text-sm font-semibold text-brand-strong transition-colors hover:text-brand"
                  >
                    Explore {product.name}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                  {product.externalUrl && (
                    <a
                      href={product.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-karla text-sm font-semibold text-muted transition-colors hover:text-strong"
                    >
                      Visit {product.name}
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Supporting product */}
      <Reveal delay={0.1}>
        <Link
          href="/products/claritypath"
          className="group mt-6 flex flex-col items-start gap-5 rounded-3xl border border-hairline bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card sm:flex-row sm:items-center sm:justify-between md:p-8"
        >
          <div className="flex items-center gap-5">
            <Image
              src="/images/brand/claritypath-logo.png"
              alt="ClarityPath logo"
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 rounded-2xl object-contain"
            />
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-karla text-xl font-semibold text-strong">
                  ClarityPath
                </h3>
                <Badge variant="supporting">Accessed via AppDeploy</Badge>
              </div>
              <p className="t-body mt-1 max-w-2xl">
                Daily strategic focus and tailored insight for relocation, career,
                property, and financial decisions — accessed through the AppDeploy
                portal.
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 font-karla text-sm font-semibold text-brand-strong">
            Learn more
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </span>
        </Link>
      </Reveal>
    </Section>
  );
}

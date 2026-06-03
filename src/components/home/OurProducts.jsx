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
    accent: "bg-axos",
    status: { variant: "early", label: "Early access" },
    tagline: "A private workspace with AI built into daily work.",
    description:
      "Mail, drive, chat, tasks and notes in one self-hostable environment — less SaaS sprawl, more data control, AI where teams actually work.",
    capabilities: ["Self-hosted option", "Unified workspace", "Private AI"],
    media: { type: "placeholder" },
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
          AppDeploy handles internal app distribution. AXOS brings everyday team
          tools into one private environment. Each is built for clarity, not
          sprawl.
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
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_50%_30%,rgba(52,211,255,0.12),transparent_60%)]">
                    <Image
                      src="/images/brand/axos-icon.png"
                      alt="AXOS"
                      width={64}
                      height={64}
                      className="h-14 w-14 object-contain opacity-90"
                    />
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface px-3 py-1 font-karla text-xs font-medium text-muted">
                      <Sparkles size={13} className="text-axos" />
                      Preview coming soon
                    </span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="font-karla text-2xl font-semibold text-strong">
                    {product.name}
                  </h3>
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
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-claritypath/10">
              <span className="h-3 w-3 rounded-full bg-claritypath" />
            </span>
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-karla text-xl font-semibold text-strong">
                  ClarityPath
                </h3>
                <Badge variant="supporting">Supporting</Badge>
              </div>
              <p className="t-body mt-1 max-w-2xl">
                Private decision-support tools for structured, sensitive user
                journeys.
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

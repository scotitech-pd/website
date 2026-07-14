"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
    category: "Private app distribution",
    tagline: "Your apps. Your brand. Enterprise-ready in 14 days.",
    description:
      "A branded workspace for private iOS and Android app delivery, with Apple Business-aligned workflows and clearer install guidance — without forcing full MDM adoption.",
    bestFor:
      "Teams shipping private mobile apps to employees, client teams, or external partners.",
    rollout:
      "Branded portal, guided installs, release notes, access control, and clearer app rollout visibility.",
    capabilities: ["Branded portal", "Apple Business", "iOS & Android"],
    media: {
      type: "image",
      src: "/images/products/appdeploy/dashboard.png",
      alt: "AppDeploy workspace dashboard screen",
    },
  },
  {
    name: "AXOS",
    href: "/products/axos",
    externalUrl: "https://axos.scotitech.com",
    logo: "/images/brand/axos-icon.png",
    accent: "bg-axos",
    status: { variant: "early", label: "Enterprise only" },
    category: "Self-hosted employee workspace",
    tagline: "Your entire workspace — self-hosted.",
    description:
      "A completed enterprise workspace for employees — mail, drive, chat, video, tasks — with governance-first AI built in and a limited testing platform for qualified organisations.",
    bestFor:
      "Organisations evaluating a private workspace for employee operations and controlled AI use.",
    rollout:
      "Business-profile review, limited testing platform, governance planning, and deployment fit assessment.",
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
      <Reveal>
        <div className="grid gap-8 border-b border-hairline pb-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)] lg:items-end">
          <div className="max-w-3xl">
            <Eyebrow>Products</Eyebrow>
            <h2 className="t-h1 mt-3">
              Product infrastructure for private rollout and controlled work.
            </h2>
            <p className="t-lead mt-5">
              AppDeploy is live for private mobile app distribution. AXOS is a
              completed enterprise workspace evaluated through a qualified
              testing process. Both are built for organisations that care about
              adoption, governance, and where operational data lives.
            </p>
          </div>

          <div className="grid gap-4 border-l border-hairline pl-5 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <p className="font-karla text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Portfolio focus
              </p>
              <p className="mt-2 font-lora text-sm leading-6 text-body">
                Software products for distribution, internal operations,
                privacy-conscious AI, and practical deployment control.
              </p>
            </div>
            <div>
              <p className="font-karla text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Buyer path
              </p>
              <p className="mt-2 font-lora text-sm leading-6 text-body">
                Ready-to-use where the product is live, structured evaluation
                where business data, hosting, and employee rollout are involved.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5">
        {flagships.map((product, i) => (
          <Reveal key={product.name} delay={i * 0.08}>
            <article className="group overflow-hidden rounded-xl border border-hairline bg-surface shadow-soft transition-shadow duration-300 hover:shadow-card">
              <div className="grid lg:grid-cols-[42%_58%]">
                <div className="relative min-h-[240px] overflow-hidden border-b border-hairline bg-surface-sunken lg:border-b-0 lg:border-r">
                  <Image
                    src={product.media.src}
                    alt={product.media.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className={cn(
                      "object-top transition-transform duration-500 group-hover:scale-[1.02]",
                      product.media.fit === "contain"
                        ? "p-5 object-contain"
                        : "object-cover"
                    )}
                  />
                  <div className="absolute inset-x-0 top-0 h-1 bg-hairline">
                    <span className={cn("block h-full w-1/3", product.accent)} />
                  </div>
                </div>

                <div className="flex min-h-full flex-col p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3.5">
                      {product.logo && (
                        <Image
                          src={product.logo}
                          alt={`${product.name} logo`}
                          width={42}
                          height={42}
                          className="h-10 w-10 rounded-lg object-contain"
                        />
                      )}
                      <div>
                        <p className="font-karla text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                          {product.category}
                        </p>
                        <h3 className="mt-1 font-karla text-2xl font-bold leading-tight text-strong">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <Badge variant={product.status.variant} dot={product.status.dot}>
                      {product.status.label}
                    </Badge>
                  </div>

                  <p className="mt-6 max-w-2xl font-karla text-[1.05rem] font-semibold leading-7 text-strong">
                    {product.tagline}
                  </p>
                  <p className="mt-3 max-w-2xl font-lora text-[15.5px] leading-7 text-body">
                    {product.description}
                  </p>

                  <div className="mt-6 grid gap-4 border-y border-hairline py-5 md:grid-cols-2">
                    <div>
                      <p className="font-karla text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                        Best for
                      </p>
                      <p className="mt-2 font-lora text-sm leading-6 text-body">
                        {product.bestFor}
                      </p>
                    </div>
                    <div>
                      <p className="font-karla text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                        Deployment path
                      </p>
                      <p className="mt-2 font-lora text-sm leading-6 text-body">
                        {product.rollout}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.capabilities.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-hairline bg-surface-sunken px-3 py-1 font-karla text-[11px] font-semibold uppercase tracking-[0.08em] text-body"
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-1.5 font-karla text-xs font-semibold uppercase tracking-[0.16em] text-brand-strong transition-colors hover:text-brand"
                    >
                      Explore {product.name}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>
                    {product.externalUrl && (
                      <a
                        href={product.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-karla text-xs font-semibold uppercase tracking-[0.16em] text-muted transition-colors hover:text-strong"
                      >
                        Visit live site
                        <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

    </Section>
  );
}

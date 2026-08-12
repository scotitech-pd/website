"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  FileCheck2,
  Headphones,
  Mail,
  MapPin,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/button";

const reviewAreas = [
  {
    icon: FileCheck2,
    title: "Clear commercial scope",
    body: "A defined product fit, buyer path, deployment boundary, and decision process before work begins.",
  },
  {
    icon: ShieldCheck,
    title: "Security and data review",
    body: "Product-specific conversations about hosting, access, data handling, governance, and customer responsibilities.",
  },
  {
    icon: Rocket,
    title: "Structured rollout",
    body: "Named ownership, agreed milestones, onboarding guidance, and a route from evaluation to production use.",
  },
  {
    icon: Headphones,
    title: "Ongoing accountability",
    body: "Direct access to the team responsible for the product, with support expectations agreed for the engagement.",
  },
];

const companyFacts = [
  {
    icon: Building2,
    label: "Legal entity",
    value: "ScotiTech Solutions Limited · registered in Scotland",
  },
  {
    icon: MapPin,
    label: "Operational base",
    value: "Eurocentral, Motherwell, Scotland · working worldwide",
  },
  {
    icon: Mail,
    label: "Business enquiries",
    value: "info@scotitech.com · 01698 609091",
  },
];

export default function BusinessAssurance() {
  return (
    <Section id="assurance" surface="sunken" spacing="lg">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-14">
        <div>
          <Reveal className="max-w-3xl">
            <Eyebrow>Business assurance</Eyebrow>
            <h2 className="t-h1 mt-3">Built for a real business review.</h2>
            <p className="t-lead mt-5">
              Serious technology decisions need more than a product demo. We
              make the commercial, technical, data, rollout, and ownership
              conversations visible from the start.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {reviewAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Reveal key={area.title} delay={index * 0.06}>
                  <article className="h-full rounded-xl border border-hairline bg-surface p-6 shadow-soft">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-brand-strong">
                      <Icon size={18} />
                    </span>
                    <h3 className="mt-5 font-karla text-lg font-bold text-strong">
                      {area.title}
                    </h3>
                    <p className="mt-2 font-lora text-[14.5px] leading-7 text-body">
                      {area.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.1}>
          <aside className="relative overflow-hidden rounded-2xl bg-ink p-7 text-on-ink shadow-lift md:p-9">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand/20 blur-3xl" />
            <div className="relative">
              <p className="font-karla text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Company profile
              </p>
              <h3 className="mt-3 font-geist-sans text-2xl font-semibold tracking-tight text-on-ink">
                A visible, accountable business relationship.
              </h3>
              <p className="mt-4 font-lora text-sm leading-7 text-on-ink-muted">
                Company details, decision-makers, product boundaries, and
                contact routes are public. Additional technical and commercial
                material is shared when it is relevant to a qualified review.
              </p>

              <div className="mt-7 divide-y divide-white/10 border-y border-white/10">
                {companyFacts.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <div key={fact.label} className="flex gap-3 py-4">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <div>
                        <p className="font-karla text-[11px] font-semibold uppercase tracking-[0.13em] text-on-ink-muted">
                          {fact.label}
                        </p>
                        <p className="mt-1 font-karla text-sm leading-6 text-on-ink">
                          {fact.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild variant="onInkSolid">
                  <Link href="/trust">
                    Review trust &amp; delivery
                    <ArrowRight size={15} />
                  </Link>
                </Button>
                <Button asChild variant="onInk">
                  <Link href="/contact">Contact the team</Link>
                </Button>
              </div>
            </div>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}

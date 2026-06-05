"use client";

import { Crosshair, KeyRound, ShieldCheck, Wrench } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

const principles = [
  {
    no: "01",
    icon: Crosshair,
    title: "Focused scope",
    body: "We ship narrow products that do one job well — not bloated platforms with claims we can't stand behind. Easier to evaluate, faster to adopt.",
  },
  {
    no: "02",
    icon: KeyRound,
    title: "Control & ownership",
    body: "You decide how software is deployed and where data lives. Self-hosting, branded access, and clear release control are first-class, not add-ons.",
  },
  {
    no: "03",
    icon: ShieldCheck,
    title: "Privacy by design",
    body: "Clear data boundaries are the default. We build so teams can reason about — and defend — exactly what is stored and who can reach it.",
  },
  {
    no: "04",
    icon: Wrench,
    title: "Practical over flashy",
    body: "We optimise for real operational outcomes: fewer manual handoffs, cleaner rollout, less day-to-day friction for the people using the tools.",
  },
];

export default function HowWeWork() {
  return (
    <Section id="approach" surface="muted" spacing="lg">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[40%_60%] lg:gap-16">
        {/* Sticky left panel — the signature pinned moment */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="t-h1 mt-3">
              Principles that make our products credible.
            </h2>
            <p className="t-lead mt-5">
              We're a product company, not a service shop. These four principles
              shape every release across the portfolio — and they're how buyers
              and partners can judge us.
            </p>
          </Reveal>
        </div>

        {/* Principles */}
        <div className="flex flex-col gap-4">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.no} delay={i * 0.06}>
                <div className="flex gap-5 rounded-2xl border border-hairline bg-surface p-6 shadow-soft transition-all duration-300 hover:shadow-card md:p-8">
                  <div className="flex flex-col items-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                      <Icon size={20} />
                    </span>
                    <span className="mt-3 font-mono text-xs text-muted">{p.no}</span>
                  </div>
                  <div>
                    <h3 className="font-karla text-xl font-semibold text-strong">
                      {p.title}
                    </h3>
                    <p className="t-body mt-2">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

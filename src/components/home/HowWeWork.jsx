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
    body: "We define the operational problem, product boundary, and intended outcome clearly. That makes each product easier to evaluate, procure, deploy, and support.",
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
    body: "We optimise for measurable operational outcomes: fewer manual handoffs, cleaner rollout, and less day-to-day friction for administrators and users.",
  },
];

export default function HowWeWork() {
  return (
    <Section id="approach" surface="base" spacing="lg">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[40%_60%] lg:gap-16">
        {/* Sticky left panel */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="t-h1 mt-3">
              Product discipline backed by delivery accountability.
            </h2>
            <p className="t-lead mt-5">
              We are a product-led technology company. These standards guide
              how we scope, build, deploy, and support every solution across the
              portfolio.
            </p>
          </Reveal>
        </div>

        {/* Principles */}
        <div className="flex flex-col gap-4">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.no} delay={i * 0.06}>
                <div className="flex gap-5 rounded-xl border border-hairline bg-surface p-6 transition-shadow duration-300 hover:shadow-md md:p-7">
                  <div className="flex flex-col items-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-brand-strong">
                      <Icon size={18} />
                    </span>
                    <span className="mt-3 font-mono text-[11px] tracking-wider text-muted">{p.no}</span>
                  </div>
                  <div>
                    <h3 className="font-karla text-lg font-bold text-strong">
                      {p.title}
                    </h3>
                    <p className="mt-2 font-lora text-[15px] leading-7 text-body">{p.body}</p>
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

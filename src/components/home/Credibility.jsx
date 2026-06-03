"use client";

import Image from "next/image";
import { Quote, Trophy } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Counter from "@/components/ui/Counter";

/*
 * NOTE: metrics below are defensible facts only. Replace with real traction
 * numbers (installs, active teams, uptime, time saved) once supplied.
 */
const metrics = [
  { value: 2, suffix: "", label: "Flagship products in market" },
  { value: 2026, label: "Scotland StartUp Awards shortlist", raw: true },
  { value: 3, suffix: "+", label: "Client & partner relationships" },
  { value: 2, label: "Delivery regions — UK & India", raw: true, display: "UK·IN" },
];

const clients = [
  { name: "Aviskaar Enterprises", image: "/images/home/aviskaar-logo.jpg", href: "https://aviskaar.co.uk" },
  { name: "Growthcart", image: "/images/aboutus/growthcart-logo.png", href: null },
  { name: "No94oo", image: "/images/aboutus/no94oo-logo.png", href: null },
];

const testimonials = [
  {
    img: "/images/solution/rohit.jpeg",
    text: "We replaced three different manual processes with a single AppDeploy workspace. Our IT team now ships updates to 40+ employees faster, and install-related support is much easier to manage.",
    name: "Rohit Ahlawat",
    role: "Director, Aviskaar Enterprises",
  },
  {
    img: "/images/solution/vijay.jpeg",
    text: "AXOS gives teams one secure place for mail, storage, coordination, and AI-assisted work — with much less dependence on disconnected tools.",
    name: "Vijay Rathee",
    role: "Founder, Bizztor",
  },
];

export default function Credibility() {
  return (
    <Section id="proof" surface="base" spacing="lg">
      <Reveal className="max-w-3xl">
        <Eyebrow>Credibility</Eyebrow>
        <h2 className="t-h1 mt-3">Real recognition. Real users. Real products.</h2>
        <p className="t-lead mt-5">
          We'd rather show evidence than make claims — award recognition,
          named clients, and a working product in production today.
        </p>
      </Reveal>

      {/* Metrics band — the single dark moment */}
      <Reveal delay={0.05}>
        <div className="mt-10 overflow-hidden rounded-3xl bg-ink shadow-lift">
          <div className="grid grid-cols-2 divide-y divide-white/10 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {metrics.map((m) => (
              <div key={m.label} className="px-6 py-8 text-center sm:py-10">
                <p className="font-karla text-4xl font-semibold tracking-tight text-on-ink md:text-5xl">
                  {m.raw ? (
                    m.display || m.value
                  ) : (
                    <Counter value={m.value} suffix={m.suffix || ""} />
                  )}
                </p>
                <p className="mt-2 font-karla text-sm text-on-ink-muted">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-6 lg:grid-cols-[40%_60%]">
        {/* Award */}
        <Reveal>
          <div className="flex h-full flex-col rounded-3xl border border-hairline bg-surface-muted p-6 shadow-soft md:p-8">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-surface px-3 py-1.5 font-karla text-xs font-semibold text-brand-strong shadow-soft">
              <Trophy size={14} />
              Award recognition
            </div>
            <div className="overflow-hidden rounded-2xl border border-hairline">
              <Image
                src="/images/home/startup-awards-2026-shortlist.jpg"
                alt="Scotland StartUp Awards 2026 Shortlist — ScotiTech Solutions, Digital StartUp of the Year"
                width={800}
                height={800}
                className="h-auto w-full"
              />
            </div>
            <p className="t-small mt-4">
              Shortlisted for <span className="font-semibold text-strong">Digital StartUp of the Year</span>,
              Scotland StartUp Awards 2026.
            </p>
          </div>
        </Reveal>

        {/* Testimonials + logos */}
        <div className="flex flex-col gap-6">
          <div className="grid gap-5 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="flex h-full flex-col rounded-3xl border border-hairline bg-surface p-6 shadow-soft md:p-7">
                  <Quote size={26} className="text-brand/30" />
                  <blockquote className="t-body mt-3 flex-1 text-strong">
                    {t.text}
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-hairline pt-4">
                    <Image
                      src={t.img}
                      alt={t.name}
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-karla text-sm font-semibold text-strong">
                        {t.name}
                      </p>
                      <p className="t-small">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          {/* Client logos */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-hairline bg-surface p-6 shadow-soft">
              <p className="t-small mb-4 font-karla font-semibold uppercase tracking-[0.14em] text-muted">
                Trusted by early clients & partners
              </p>
              <div className="flex flex-wrap items-center gap-8">
                {clients.map((c) => {
                  const logo = (
                    <Image
                      src={c.image}
                      alt={c.name}
                      width={140}
                      height={48}
                      className="h-9 w-auto object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                    />
                  );
                  return c.href ? (
                    <a key={c.name} href={c.href} target="_blank" rel="noreferrer" aria-label={c.name}>
                      {logo}
                    </a>
                  ) : (
                    <span key={c.name}>{logo}</span>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

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
  { value: 2, label: "Worldwide delivery and customers", raw: true, display: "Global" },
];

const clients = [
  { name: "Aviskaar Enterprises", image: "/images/home/aviskaar-logo.jpg", href: "https://aviskaar.co.uk" },
  { name: "Growthcart", image: "/images/aboutus/growthcart-logo.png", href: null },
  { name: "No94oo", image: "/images/aboutus/no94oo-logo.png", href: null },
];

const logoMarquee = [...clients, ...clients, ...clients, ...clients];

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

function LogoMark({ client }) {
  const logo = (
    <span className="flex h-16 w-[190px] shrink-0 items-center justify-center rounded-2xl border border-hairline bg-surface-muted px-6 shadow-soft">
      <Image
        src={client.image}
        alt={client.name}
        width={150}
        height={52}
        className="h-9 w-auto max-w-[145px] object-contain opacity-70 grayscale transition duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0"
      />
    </span>
  );

  if (client.href) {
    return (
      <a
        href={client.href}
        target="_blank"
        rel="noreferrer"
        aria-label={client.name}
        className="group/logo block"
      >
        {logo}
      </a>
    );
  }

  return (
    <span className="group/logo block" aria-label={client.name}>
      {logo}
    </span>
  );
}

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
          {/* gap-px + outer bg creates clean hairline dividers at every breakpoint */}
          <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="bg-ink px-5 py-7 text-center sm:px-6 sm:py-10"
              >
                <p className="font-karla text-3xl font-semibold tracking-tight text-on-ink sm:text-4xl md:text-5xl">
                  {m.raw ? (
                    m.display || m.value
                  ) : (
                    <Counter value={m.value} suffix={m.suffix || ""} />
                  )}
                </p>
                <p className="mt-2 font-karla text-[13px] leading-snug text-on-ink-muted sm:text-sm">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[40%_60%]">
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
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
            <div className="rounded-3xl border border-hairline bg-surface py-6 shadow-soft">
              <p className="t-small mb-4 px-6 font-karla font-semibold uppercase tracking-[0.14em] text-muted">
                Trusted by early clients & partners
              </p>
              <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
                <div className="animate-logo-marquee flex w-max gap-4 pl-6 group-hover:[animation-play-state:paused]">
                  {logoMarquee.map((client, index) => (
                    <LogoMark
                      key={`${client.name}-${index}`}
                      client={client}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

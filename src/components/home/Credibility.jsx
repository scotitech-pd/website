"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote, Trophy } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Counter from "@/components/ui/Counter";

/*
 * NOTE: metrics below are defensible facts only. Replace with real traction
 * numbers (installs, active teams, uptime, time saved) once supplied.
 */
const metrics = [
  { value: 2, label: "AppDeploy workspaces in production" },
  { value: 450, suffix: "+", label: "Apps installed via AppDeploy" },
  { value: 300, suffix: "+", label: "Devices reached" },
  { value: 2026, label: "Scotland StartUp Awards finalist", raw: true },
];

const clients = [
  {
    name: "Aviskaar Enterprises",
    image: "/images/home/aviskaar-logo.jpg",
    href: "https://aviskaar.co.uk",
    note: "AppDeploy customer",
  },
  {
    name: "Growthcart",
    image: "/images/aboutus/growthcart-logo.png",
    href: null,
    note: "Portfolio partner",
  },
  {
    name: "No94oo",
    image: "/images/aboutus/no94oo-logo.png",
    href: null,
    note: "Portfolio partner",
  },
];

const testimonials = [
  {
    img: "/images/solution/rohit.jpeg",
    text: "We replaced three different manual processes with a single AppDeploy workspace. Our IT team now ships updates to 40+ employees faster, and install-related support is much easier to manage.",
    name: "Rohit Ahlawat",
    role: "Director, Aviskaar Enterprises",
  },
  {
    text: "In a recent founder conversation, we discussed the AppDeploy problem space: helping teams ship private iOS apps with clearer release control, access management, and fewer manual handoffs.",
    name: "AppDeploy",
    role: "Featured in a founder conversation",
    podcastUrl: "https://www.youtube.com/watch?v=0IMLuoXFYK8&t=2036s",
  },
];

function ClientCard({ client }) {
  const inner = (
    <div className="group/logo flex h-full flex-col items-center gap-3 rounded-2xl border border-hairline bg-surface-muted p-5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft">
      <span className="flex h-12 w-full items-center justify-center">
        <Image
          src={client.image}
          alt={client.name}
          width={140}
          height={48}
          className="h-9 w-auto max-w-[140px] object-contain opacity-80 grayscale transition duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0"
        />
      </span>
      <div>
        <p className="font-karla text-sm font-semibold text-strong">{client.name}</p>
        {client.note && (
          <p className="mt-0.5 font-karla text-xs text-muted">{client.note}</p>
        )}
      </div>
    </div>
  );

  if (client.href) {
    return (
      <a
        href={client.href}
        target="_blank"
        rel="noreferrer"
        aria-label={client.name}
        className="block h-full"
      >
        {inner}
      </a>
    );
  }

  return <div className="block h-full">{inner}</div>;
}

export default function Credibility({ chapterNo }) {
  return (
    <Section id="proof" surface="muted" spacing="lg">
      <Reveal className="max-w-3xl">
        <Eyebrow>{chapterNo ? `${chapterNo} // ` : ""}Credibility</Eyebrow>
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

      <div className="mt-6 grid grid-cols-1 items-start gap-6 lg:grid-cols-[34%_66%]">
        {/* Award */}
        <Reveal>
          <div className="flex flex-col rounded-3xl border border-hairline bg-surface-muted p-5 shadow-soft md:p-6">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-surface px-3 py-1.5 font-karla text-xs font-semibold text-brand-strong shadow-soft">
              <Trophy size={14} />
              Award recognition
            </div>
            <div className="overflow-hidden rounded-2xl border border-hairline bg-surface p-3">
              <Image
                src="/images/home/scotland-startup-awards-2026-finalist.jpg"
                alt="Scotland StartUp Awards 2026 finalist certificate for ScotiTech Solutions, Digital StartUp of the Year"
                width={800}
                height={1000}
                className="mx-auto block w-full max-w-[280px] rounded-lg object-contain md:max-w-[320px]"
              />
            </div>
            <p className="t-small mt-4">
              Named a 2026 finalist for <span className="font-semibold text-strong">Digital StartUp of the Year</span>,
              Scotland StartUp Awards 2026.
            </p>
            <Link
              href="/media"
              className="mt-4 inline-flex items-center gap-1.5 font-karla text-sm font-semibold text-brand-strong transition-colors hover:text-brand"
            >
              See all recognition
              <ArrowRight size={14} />
            </Link>
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
                    {t.img ? (
                      <Image
                        src={t.img}
                        alt={t.name}
                        width={44}
                        height={44}
                        className="h-11 w-11 rounded-full object-cover"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft font-karla text-sm font-semibold text-brand-strong"
                      >
                        {t.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                      </span>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="font-karla text-sm font-semibold text-strong">
                        {t.name}
                      </p>
                      {t.podcastUrl ? (
                        <a
                          href={t.podcastUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 font-karla text-xs text-brand-strong hover:text-brand"
                        >
                          {t.role}
                          <ArrowRight size={12} />
                        </a>
                      ) : (
                        <p className="t-small">{t.role}</p>
                      )}
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          {/* Client logos — static grid, no marquee */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-hairline bg-surface p-6 shadow-soft md:p-7">
              <p className="t-small mb-5 font-karla font-semibold uppercase tracking-[0.14em] text-muted">
                Trusted by early clients & partners
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {clients.map((client) => (
                  <ClientCard key={client.name} client={client} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

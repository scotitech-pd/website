import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Cpu,
  Handshake,
  Rocket,
  Send,
  Server,
  ShieldCheck,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/company";

const icons = { Building2, Cpu, Handshake, Rocket, Send, Server, ShieldCheck };

function ServiceLink({ service }) {
  const Arrow = service.external ? ArrowUpRight : ArrowRight;
  const cls =
    "mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-semibold text-brand-strong hover:text-brand";
  const inner = (
    <>
      {service.linkLabel}
      <Arrow size={15} aria-hidden="true" />
    </>
  );
  return service.external ? (
    <a href={service.href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={service.href} className={cls}>
      {inner}
    </Link>
  );
}

/**
 * Services: the founder-approved list in lib/company.js. The first one, the
 * free setup offer, leads as a wide card; the rest sit in a calm grid.
 */
export default function ServicesSection() {
  if (!services.length) return null;
  const [lead, ...rest] = services;
  const LeadIcon = icons[lead.icon];

  return (
    <Section id="services" surface="base" spacing="lg" className="border-y border-hairline">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="t-eyebrow">Services</p>
          <h2 className="t-h1 mt-3">We help you get set up, and stay set up.</h2>
          <p className="t-lead mt-5">
            Around our products, our team helps with the parts that need a person: Apple Business,
            app publishing, private deployments and partnerships.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-brand px-5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-strong"
          >
            Talk to us about a service
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>

        <div>
          <Reveal>
            <article className="relative flex flex-col overflow-hidden rounded-xl bg-ink p-6 text-white sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_100%_0%,rgba(94,234,212,0.18),transparent_60%)]"
              />
              <div className="relative flex flex-wrap items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-white/10 text-[#9fe0d4] ring-1 ring-white/15">
                  {LeadIcon && <LeadIcon size={19} aria-hidden="true" />}
                </span>
                {lead.tag && (
                  <span className="rounded-full bg-[#9fe0d4] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink">
                    {lead.tag}
                  </span>
                )}
              </div>
              <h3 className="relative mt-5 text-[1.4rem] font-semibold leading-snug">{lead.title}</h3>
              <p className="relative mt-3 max-w-2xl text-[16px] leading-7 text-white/75">{lead.body}</p>
              <Link
                href={lead.href}
                className="relative mt-6 inline-flex w-fit items-center gap-1.5 text-[15px] font-semibold text-white hover:text-[#9fe0d4]"
              >
                {lead.linkLabel}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          </Reveal>

          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {rest.map((s, i) => {
              const Icon = icons[s.icon];
              return (
                <Reveal as="li" key={s.id} delay={i * 0.04} className="flex">
                  <article className="flex w-full flex-col rounded-xl border border-hairline bg-surface-muted/60 p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex size-10 items-center justify-center rounded-lg bg-brand-soft text-brand-strong">
                        {Icon && <Icon size={18} aria-hidden="true" />}
                      </span>
                      {s.tag && (
                        <span className="rounded-full bg-surface-sunken px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-body">
                          {s.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-5 text-[17px] font-semibold leading-snug text-strong">{s.title}</h3>
                    <p className="mt-2 text-[15px] leading-6 text-body">{s.body}</p>
                    <ServiceLink service={s} />
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}

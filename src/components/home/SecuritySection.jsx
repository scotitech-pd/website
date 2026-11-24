import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileCheck2, KeyRound, ListChecks, LockKeyhole, MapPin, ShieldCheck } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import CertificationsSection from "@/components/trust/CertificationsSection";
import { vamiqLinks } from "@/lib/company";

/*
 * Security facts as vamiq.app states them (home page, Trust Centre and
 * security overview, checked 24 Nov 2026). Add a control here only after
 * vamiq.app publishes it.
 */
const controls = [
  {
    icon: MapPin,
    title: "Hosted in the UK",
    body: "Customer data is hosted in the UK and backed up daily.",
  },
  {
    icon: LockKeyhole,
    title: "Encrypted",
    body: "All traffic uses TLS with HSTS. Apple Business tokens and keys, push certificates and integration secrets are encrypted at rest with AES-256-GCM.",
  },
  {
    icon: KeyRound,
    title: "Your own push certificate",
    body: "Each workspace that manages devices gets its own Apple push certificate, never a shared one.",
  },
  {
    icon: ListChecks,
    title: "Audit log on every plan",
    body: "Every plan, Free included, records app changes, roles, Apple Business sync and admin actions.",
  },
  {
    icon: ShieldCheck,
    title: "Safeguards on device actions",
    body: "Erasing a device needs a stated reason, typed confirmation and step-up re-authentication, with optional two-person approval.",
  },
  {
    icon: FileCheck2,
    title: "DPA and sub-processors",
    body: "A Data Processing Agreement applies to every customer automatically, and every sub-processor is published with 30 days' notice of changes.",
  },
];

const links = [
  { label: "Vamiq Trust Centre", href: vamiqLinks.trust, external: true },
  { label: "Security overview", href: vamiqLinks.security, external: true },
  { label: "Company trust and security", href: "/trust" },
];

export default function SecuritySection({ showTrustLink = true }) {
  const shown = showTrustLink ? links : links.filter((l) => l.href !== "/trust");
  return (
    <Section id="security" surface="base" spacing="lg" className="border-y border-hairline">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="t-eyebrow">Security</p>
          <h2 className="t-h1 mt-3">Security on every plan, Free included.</h2>
          <p className="t-lead mt-5">
            Built into every Vamiq workspace, with the documents a security review asks for published
            in one place.
          </p>
          <ul className="mt-8 space-y-3">
            {shown.map((l) => (
              <li key={l.label}>
                {l.external ? (
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-strong hover:text-brand"
                  >
                    {l.label}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                ) : (
                  <Link
                    href={l.href}
                    className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-strong hover:text-brand"
                  >
                    {l.label}
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {controls.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal as="li" key={c.title} delay={i * 0.04} className="flex">
                  <article className="flex w-full flex-col rounded-xl border border-hairline bg-surface-muted/60 p-6">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-brand-soft text-brand-strong">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-[17px] font-semibold leading-snug text-strong">{c.title}</h3>
                    <p className="mt-2 text-[15px] leading-6 text-body">{c.body}</p>
                  </article>
                </Reveal>
              );
            })}
          </ul>
          <CertificationsSection className="mt-12" />
        </div>
      </div>
    </Section>
  );
}

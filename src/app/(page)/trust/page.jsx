import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FileText,
  Scale,
  ServerCog,
  ShieldCheck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Trust & Security",
  description:
    "ScotiTech Solutions Limited company identity, certification status, responsible disclosure policy, and privacy law coverage across UK GDPR, India's DPDP Act and US state privacy laws.",
  alternates: { canonical: "/trust" },
  openGraph: {
    title: "Trust & Security | ScotiTech Solutions",
    description:
      "Company identity, certification status, responsible disclosure, and privacy law coverage. Product-level controls live in each product's Trust Centre.",
    url: "/trust",
    type: "website",
  },
};


const companyFacts = [
  { label: "Legal entity", value: "ScotiTech Solutions Limited" },
  { label: "Registered in", value: "Scotland, United Kingdom" },
  { label: "Company number", value: "SC829021" },
  { label: "Registered office", value: "11 Caldervale Drive, Motherwell ML1 2GB, UK" },
  { label: "ICO registration", value: "ZB925464" },
  { label: "Data Protection Officer", value: "Pardeep Kumar" },
];

const certifications = [
  {
    icon: AlertTriangle,
    tone: "progress",
    name: "Cyber Essentials",
    status: "In progress",
    body: "Application in progress as of August 2026. When granted, the certificate number and badge will be published here — not before.",
  },
  {
    icon: Scale,
    tone: "none",
    name: "SOC 2 / ISO 27001",
    status: "Not held",
    body: "Neither certification is held today. Both are a 2027 roadmap item, once Enterprise volume justifies the cost of a formal audit.",
  },
  {
    icon: ShieldCheck,
    tone: "product",
    name: "Product controls",
    status: "Operated",
    body: "Each product operates the technical controls a SOC 2 or ISO 27001 auditor would inspect. The detail is product-specific and published in each product's Trust Centre below.",
  },
];

const disclosureCommitments = [
  "We acknowledge security reports within two business days.",
  "We provide a first triage update within five business days.",
  "We treat reports as confidential until a coordinated disclosure is agreed.",
  "We offer credit, with the reporter's consent, once a fix is deployed.",
];

const safeHarbour = [
  "Avoid privacy violations, data destruction, and service disruption.",
  "Use only test accounts or your own data — never another organisation's.",
  "Do not access, modify, or retain data belonging to others.",
  "Give us a reasonable opportunity to remediate before public disclosure.",
];

const outOfScope = [
  "Social engineering of ScotiTech staff or customers.",
  "Denial-of-service or volumetric testing.",
  "Findings on third-party services this site depends on — please report upstream.",
  "Missing security headers, SPF/DMARC, or version disclosure without demonstrated impact.",
];

const privacyCoverage = [
  {
    title: "UK & EU GDPR",
    body: "ScotiTech Solutions Limited (SC829021) is the data controller for personal data collected through this website, registered with the Information Commissioner's Office under reference ZB925464. Our Data Protection Officer is Pardeep Kumar. You can exercise your rights, or complain to the ICO, at any time.",
    links: [
      { label: "Your rights", href: "/privacy-policy#your-rights" },
      { label: "Contact the DPO", href: "mailto:privacy@scotitech.com?subject=Data%20protection%20enquiry", external: true },
      { label: "ico.org.uk", href: "https://ico.org.uk", external: true },
    ],
  },
  {
    title: "India — DPDP Act 2023",
    body: "Our Grievance Officer is Pardeep Kumar, Data Protection Officer. Grievances are acknowledged within 72 hours and we aim to resolve them within 30 days. Withdrawing consent is as simple as giving it.",
    links: [
      { label: "DPDP section", href: "/privacy-policy#india-dpdp" },
      { label: "Raise a grievance", href: "mailto:privacy@scotitech.com?subject=DPDP%20grievance", external: true },
    ],
  },
  {
    title: "United States — state privacy laws",
    body: "We do not sell or share personal information as defined by the CCPA/CPRA, and have not done so in the preceding 12 months. We use no third-party advertising cookies; optional analytics runs only after opt-in.",
    links: [{ label: "Your rights", href: "/privacy-policy#us-state-privacy" }],
  },
];

const trustCentres = [
  {
    name: "AppDeploy",
    label: "Private app distribution",
    body: "Control detail, service status, data processing terms, and the sub-processor list are published in full.",
    links: [
      { label: "Trust Centre", href: "https://appdeploy.scotitech.com/trust" },
      { label: "Service status", href: "https://appdeploy.scotitech.com/status" },
      { label: "DPA", href: "https://appdeploy.scotitech.com/dpa" },
      { label: "Sub-processors", href: "https://appdeploy.scotitech.com/sub-processors" },
      { label: "Privacy", href: "https://appdeploy.scotitech.com/privacy" },
    ],
  },
  {
    name: "AXOS",
    label: "Private enterprise workspace",
    body: "Trust, privacy, and data processing terms are published. Operational evidence and control review are provided during enterprise evaluation.",
    links: [
      { label: "Trust Centre", href: "https://axos.scotitech.com/trust" },
      { label: "DPA", href: "https://axos.scotitech.com/dpa" },
      { label: "Privacy", href: "https://axos.scotitech.com/privacy" },
    ],
  },
];

const reviewMaterials = [
  "Company, privacy, cookie, and legal information",
  "Product architecture and deployment options",
  "Data handling, identity, access, and administration",
  "Implementation and onboarding approach",
  "Customer control and supplier responsibilities",
  "Support contacts and escalation routes",
];

export default function TrustPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-16 pt-28 text-on-ink md:pb-24 md:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_85%_0%,rgba(226,88,14,0.22),transparent_65%)]" />
        <Container className="relative z-10">
          <Reveal immediate className="max-w-4xl">
            <Eyebrow onInk>Trust, privacy &amp; delivery</Eyebrow>
            <h1 className="mt-4 max-w-3xl font-geist-sans text-[clamp(2.6rem,1.7rem+3.8vw,4.8rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-on-ink">
              Confidence built into every product relationship.
            </h1>
            <p className="mt-6 max-w-2xl font-karla text-lg leading-8 text-on-ink-muted">
              See how we approach company accountability, privacy, product
              security, deployment, and support from first evaluation through
              ongoing use.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="onInkSolid">
                <Link href="/contact">
                  Discuss your requirements
                  <ArrowRight size={17} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="onInk">
                <Link href="/products">Explore our products</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* COMPANY */}
      <Section surface="muted" spacing="lg">
        <div className="grid gap-12 lg:grid-cols-[34%_66%] lg:gap-16">
          <Reveal>
            <Eyebrow>Company</Eyebrow>
            <h2 className="t-h1 mt-3">Who you are contracting with.</h2>
            <p className="t-lead mt-5">
              One registered UK entity stands behind every ScotiTech product.
              The details below are public and independently verifiable at
              Companies House.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <a
                  href="https://find-and-update.company-information.service.gov.uk/company/SC829021"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on Companies House
                  <ExternalLink size={15} />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://ico.org.uk/ESDWebPages/Entry/ZB925464"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on the ICO register
                  <ExternalLink size={15} />
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <dl className="grid gap-4 sm:grid-cols-2">
              {companyFacts.map((fact) => (
                <div key={fact.label} className="rounded-xl border border-hairline bg-surface p-5 shadow-soft">
                  <dt className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 font-karla text-base font-bold text-strong">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section surface="base" spacing="lg">
        <Reveal className="max-w-3xl">
          <Eyebrow>Certifications &amp; assurance</Eyebrow>
          <h2 className="t-h1 mt-3">Stated honestly, including what we do not hold.</h2>
          <p className="t-lead mt-5">
            We publish certification status rather than badges. Nothing below is
            claimed before it is granted.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Reveal key={cert.name} delay={index * 0.06}>
                <article className="h-full rounded-xl border border-hairline bg-surface p-6 shadow-soft">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-brand-strong">
                      <Icon size={18} />
                    </span>
                    <span className="rounded-full border border-hairline bg-surface-muted px-3 py-1 font-karla text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                      {cert.status}
                    </span>
                  </div>
                  <h3 className="mt-5 font-karla text-lg font-bold text-strong">{cert.name}</h3>
                  <p className="mt-2 font-lora text-sm leading-7 text-body">{cert.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* RESPONSIBLE DISCLOSURE */}
      <Section id="disclosure" surface="muted" spacing="lg">
        <div className="grid gap-12 lg:grid-cols-[38%_62%] lg:gap-16">
          <Reveal>
            <Eyebrow>Responsible disclosure</Eyebrow>
            <h2 className="t-h1 mt-3">Report a vulnerability.</h2>
            <p className="t-lead mt-5">
              Send security reports to security@scotitech.com. Include a clear
              description, steps to reproduce, the affected URL, and your
              assessment of impact. Mark the subject URGENT if the issue is being
              actively exploited. A PGP key is available on request.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href="mailto:security@scotitech.com?subject=Security%20report">
                  Email security@scotitech.com
                  <ArrowRight size={15} />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="/.well-known/security.txt">security.txt</a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="grid gap-5">
            <div className="rounded-xl border border-hairline bg-surface p-6 shadow-soft">
              <p className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-brand-strong">
                Our commitments
              </p>
              <ul className="mt-4 space-y-3">
                {disclosureCommitments.map((item) => (
                  <li key={item} className="flex gap-3 font-lora text-sm leading-6 text-body">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-hairline bg-surface p-6">
                <p className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Safe harbour
                </p>
                <p className="mt-3 font-lora text-sm leading-6 text-body">
                  Research in line with these rules is treated as authorised and
                  we will not pursue legal action.
                </p>
                <ul className="mt-4 space-y-2.5">
                  {safeHarbour.map((item) => (
                    <li key={item} className="font-lora text-sm leading-6 text-body">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-hairline bg-surface p-6">
                <p className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Out of scope
                </p>
                <p className="mt-3 font-lora text-sm leading-6 text-body">
                  For product endpoints and tenants, see the relevant product
                  Trust Centre.
                </p>
                <ul className="mt-4 space-y-2.5">
                  {outOfScope.map((item) => (
                    <li key={item} className="font-lora text-sm leading-6 text-body">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* PRIVACY LAW COVERAGE */}
      <Section surface="base" spacing="lg">
        <Reveal className="max-w-3xl">
          <Eyebrow>Privacy law coverage</Eyebrow>
          <h2 className="t-h1 mt-3">Which laws we operate under.</h2>
          <p className="t-lead mt-5">
            Summarised here, set out in full in the privacy policy.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {privacyCoverage.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="flex h-full flex-col rounded-xl border border-hairline bg-surface p-6 shadow-soft">
                <h3 className="font-karla text-lg font-bold text-strong">{item.title}</h3>
                <p className="mt-3 flex-1 font-lora text-sm leading-7 text-body">{item.body}</p>
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-hairline pt-4">
                  {item.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="inline-flex items-center gap-1.5 font-karla text-sm font-semibold text-brand-strong hover:text-brand"
                    >
                      {link.label}
                      <ArrowRight size={13} />
                    </Link>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PRODUCT TRUST CENTRES */}
      <Section surface="muted" spacing="lg">
        <Reveal className="max-w-3xl">
          <Eyebrow>Product trust centres</Eyebrow>
          <h2 className="t-h1 mt-3">Control detail lives with each product.</h2>
          <p className="t-lead mt-5">
            This page covers the company. Technical controls, service status, and
            contractual terms are specific to each product and published there.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {trustCentres.map((product, index) => (
            <Reveal key={product.name} delay={index * 0.07}>
              <article className="h-full rounded-xl border border-hairline bg-surface p-6 shadow-soft md:p-8">
                <p className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-brand-strong">
                  {product.label}
                </p>
                <h3 className="mt-2 font-karla text-2xl font-bold text-strong">{product.name}</h3>
                <p className="mt-3 font-lora text-[15px] leading-7 text-body">{product.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {product.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface-muted px-3.5 py-1.5 font-karla text-xs font-semibold text-strong transition-colors hover:border-brand hover:text-brand-strong"
                    >
                      {link.label}
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>


      <Section surface="sunken" spacing="lg">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <Eyebrow>What you can review</Eyebrow>
            <h2 className="t-h1 mt-3">Information for confident decisions.</h2>
            <p className="t-lead mt-5">
              During product evaluation, we can walk your commercial, technical,
              security, and operations teams through the areas that matter to
              your organisation.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-hairline bg-surface p-6 shadow-card md:p-8">
              <div className="flex items-center gap-3 border-b border-hairline pb-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-brand-strong">
                  <FileText size={18} />
                </span>
                <div>
                  <p className="font-karla font-bold text-strong">Assurance topics</p>
                  <p className="font-karla text-sm text-muted">Available during product evaluation</p>
                </div>
              </div>
              <ul className="mt-5 space-y-3">
                {reviewMaterials.map((item) => (
                  <li key={item} className="flex gap-3 font-karla text-sm leading-6 text-body">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3 border-t border-hairline pt-6">
                <Button asChild>
                  <Link href="/contact">
                    Talk to us about assurance
                    <ArrowRight size={15} />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href="mailto:info@scotitech.com?subject=Security, privacy and delivery enquiry">
                    Email the team
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="bg-surface py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-ink px-7 py-12 text-on-ink md:px-12 md:py-14">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_70%_at_90%_0%,rgba(226,88,14,0.24),transparent_65%)]" />
              <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 text-brand">
                    <ServerCog size={18} />
                    <span className="font-karla text-xs font-semibold uppercase tracking-[0.16em]">
                      Talk to the team
                    </span>
                  </div>
                  <h2 className="t-h1 mt-4 text-on-ink">
                    Have security, privacy, or deployment questions?
                  </h2>
                  <p className="mt-4 font-karla text-lg leading-8 text-on-ink-muted">
                    Share your product interest and key requirements. We will
                    connect you with the right commercial or technical contact.
                  </p>
                </div>
                <Button asChild size="lg" variant="onInkSolid">
                  <Link href="/contact">
                    Discuss your requirements
                    <ArrowRight size={17} />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

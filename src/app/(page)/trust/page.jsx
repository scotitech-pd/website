import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileText,
  KeyRound,
  LifeBuoy,
  ServerCog,
  ShieldCheck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Trust, Privacy & Delivery",
  description:
    "Learn how ScotiTech approaches company accountability, privacy, product security, deployment, customer control, and ongoing support.",
  alternates: { canonical: "/trust" },
  openGraph: {
    title: "Trust, Privacy & Delivery | ScotiTech Solutions",
    description:
      "Clear information about ScotiTech's privacy approach, product boundaries, deployment options, and customer support.",
    url: "/trust",
    type: "website",
  },
};

const principles = [
  {
    icon: Building2,
    title: "Accountable company",
    body: "ScotiTech Solutions Limited is registered in Scotland, with published leadership, office details, and direct contact routes for customers and partners.",
  },
  {
    icon: ShieldCheck,
    title: "Honest assurance",
    body: "We communicate security controls, privacy practices, and certification status accurately so buyers can evaluate current capabilities with confidence.",
  },
  {
    icon: KeyRound,
    title: "Clear deployment choices",
    body: "Each product has its own approach to hosting, access, administration, and data control. We explain those boundaries before adoption.",
  },
  {
    icon: LifeBuoy,
    title: "Support with ownership",
    body: "Customers have clear commercial and technical contacts, an agreed onboarding path, and support expectations suited to the engagement.",
  },
];

const products = [
  {
    name: "AppDeploy",
    label: "Private app distribution",
    body: "AppDeploy helps approved organisations distribute private mobile apps with clearer access, release communication, and rollout guidance.",
    responsibilities: [
      "Clear separation between product configuration, access administration, app ownership, and distribution accounts.",
      "Guided onboarding and rollout support aligned to your chosen Apple Business or Android distribution route.",
    ],
  },
  {
    name: "AXOS",
    label: "Private enterprise workspace",
    body: "AXOS gives organisations a controlled way to evaluate a private workspace before considering wider employee adoption.",
    responsibilities: [
      "Deployment, identity, access, and data-location requirements are agreed before the testing environment is prepared.",
      "Your organisation retains control of infrastructure choices, users, permissions, business data, and internal governance.",
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

      <Section surface="muted" spacing="lg">
        <Reveal className="max-w-3xl">
          <Eyebrow>How we build trust</Eyebrow>
          <h2 className="t-h1 mt-3">Clear information. Responsible delivery.</h2>
          <p className="t-lead mt-5">
            We explain what each product does, how it can be deployed, where
            customer control begins, and what support looks like before you make
            a decision.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Reveal key={principle.title} delay={index * 0.06}>
                <article className="h-full rounded-xl border border-hairline bg-surface p-6 shadow-soft">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-brand-strong">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-5 font-karla text-lg font-bold text-strong">
                    {principle.title}
                  </h3>
                  <p className="mt-2 font-lora text-sm leading-7 text-body">
                    {principle.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section surface="base" spacing="lg">
        <div className="grid gap-12 lg:grid-cols-[34%_66%] lg:gap-16">
          <Reveal>
            <Eyebrow>Trust by product</Eyebrow>
            <h2 className="t-h1 mt-3">The right controls for each product.</h2>
            <p className="t-lead mt-5">
              Private app distribution and a private enterprise workspace have
              different requirements. Our guidance reflects the technology,
              deployment model, and level of control your organisation needs.
            </p>
          </Reveal>
          <div className="space-y-5">
            {products.map((product, index) => (
              <Reveal key={product.name} delay={index * 0.07}>
                <article className="rounded-xl border border-hairline bg-surface p-6 shadow-soft md:p-8">
                  <p className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-brand-strong">
                    {product.label}
                  </p>
                  <h3 className="mt-2 font-karla text-2xl font-bold text-strong">
                    {product.name}
                  </h3>
                  <p className="mt-3 font-lora text-[15px] leading-7 text-body">
                    {product.body}
                  </p>
                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {product.responsibilities.map((responsibility) => (
                      <div key={responsibility} className="flex gap-3 rounded-lg bg-surface-muted p-4">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" />
                        <p className="font-karla text-sm leading-6 text-body">
                          {responsibility}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
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

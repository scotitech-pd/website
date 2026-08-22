import Link from "next/link";
import {
  ArrowRight,
  BadgePoundSterling,
  Building2,
  MailCheck,
  Rocket,
  Send,
  ShieldCheck,
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import GrowthRoles from "@/components/careers/GrowthRoles";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Growth roles",
  description:
    "Commission-based growth, referral, partnership, and ambassador roles for people who can open relevant product and enterprise conversations for ScotiTech.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Growth roles at ScotiTech",
    description:
      "Commission-based roles for people who can open relevant product, partnership, and enterprise conversations.",
    url: "/careers",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const principles = [
  {
    icon: BadgePoundSterling,
    title: "We grow by fit, not noise",
    body: "ScotiTech is not trying to build a pressure-sales machine. We want the right opportunities, introduced well, with the right context.",
  },
  {
    icon: ShieldCheck,
    title: "Relationships are protected",
    body: "If you bring someone to us, we treat that relationship with care. That is a core rule, not a line in the copy.",
  },
  {
    icon: Building2,
    title: "Commercial honesty matters",
    body: "We would rather decline a weak-fit opportunity than inflate expectations and waste everyone's time.",
  },
];

const fitSignals = [
  "People with relevant business networks or outreach craft.",
  "People who can represent a serious software company with restraint and clarity.",
  "People who prefer long-term reputation over short-term noise.",
];

const whatToSend = [
  "Your role interest and territory.",
  "The kind of network or buyer access you already have.",
  "Why you can represent ScotiTech credibly.",
  "An optional hosted intro video URL if it helps you communicate better.",
];

const productsToKnow = [
  {
    name: "AppDeploy",
    status: "Live",
    tagline: "Private app distribution with optional remote deployment, built around Apple Business.",
    audience:
      "IT leaders and operations teams distributing internal iOS apps to employees, testers, or partner organisations.",
  },
  {
    name: "AXOS",
    status: "Enterprise only",
    tagline: "A self-hosted enterprise AI workspace — mail, drive, calendar, chat, video, tasks, knowledge, and private AI in one place.",
    audience:
      "Enterprises that need a Google Workspace or Microsoft 365 alternative they fully control, with AI that keeps data in-house.",
  },
];

const processSteps = [
  {
    icon: Send,
    title: "Initial application",
    body: "Send your details, role interest, network context, and optional video URL through the form below, or email join@scotitech.com.",
  },
  {
    icon: MailCheck,
    title: "Fit review",
    body: "We review for network relevance, communication quality, commercial judgment, and alignment with how we want ScotiTech represented.",
  },
  {
    icon: Rocket,
    title: "Conversation",
    body: "Strong applicants move to a practical conversation focused on territory, role shape, compensation fit, and how you would create momentum.",
  },
];

const faqs = [
  {
    q: "Can I do this alongside a full-time job or studies?",
    a: "Yes. These are outcome-based roles, so there are no fixed hours. Many people run them alongside consulting, agency work, a full-time role, or coursework — provided there is no conflict with your primary employer.",
  },
  {
    q: "Do I need to be based in the UK?",
    a: "No. Roles are open worldwide. What matters is the market you can credibly open — some regions and sectors will be a stronger fit for AppDeploy or AXOS than others, and we will be honest with you about that early.",
  },
  {
    q: "Do I need existing customers, or is a strong network enough?",
    a: "A strong, relevant network is enough. You do not need to bring a pre-qualified pipeline. You do need the judgement to spot a genuine fit rather than passing on generic contacts.",
  },
  {
    q: "How is lead attribution handled?",
    a: "First-touch, within a defined attribution window that is written into your agreement. Duplicate leads or opportunities already known to ScotiTech do not qualify, and the rules are shared with you before you start.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-28 pb-16 text-on-ink md:pt-32 md:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_80%_0%,rgba(226,88,14,0.30),transparent_62%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />
        <Container className="relative z-10">
          <Reveal immediate className="max-w-4xl">
            <Badge variant="onInk">Now hiring</Badge>
            <h1 className="t-display mt-5 text-on-ink">
              Join ScotiTech and help grow serious products the right way.
            </h1>
            <p className="mt-6 max-w-2xl font-karla text-xl leading-8 text-on-ink-muted">
              We are opening relationship-led growth roles for people who can
              create real commercial momentum without gimmicks, spam, or
              borrowed credibility. We are looking for people who understand
              relationships, business context, and the discipline needed to put
              the right product in front of the right organisation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="onInkSolid">
                <Link href="mailto:join@scotitech.com?subject=Business%20growth%20opportunity%20application">
                  Apply by email
                  <ArrowRight size={17} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="onInk">
                <Link href="#open-roles">View roles</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <Section surface="muted" spacing="md">
        <div className="grid gap-5 md:grid-cols-3">
          {principles.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="h-full rounded-xl border border-hairline bg-surface p-6 shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                    <Icon size={19} />
                  </span>
                  <h2 className="mt-5 font-karla text-xl font-bold text-strong">
                    {item.title}
                  </h2>
                  <p className="mt-3 font-lora text-sm leading-7 text-body">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section surface="base" spacing="md">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal>
            <Eyebrow>What you&apos;ll introduce</Eyebrow>
            <h2 className="t-h1 mt-3">Two products worth having a serious conversation about.</h2>
            <p className="t-body mt-5">
              You do not need to be a technical expert. You do need enough
              understanding of each product to spot when it actually fits a
              buyer&apos;s situation.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-5">
              {productsToKnow.map((product) => (
                <div key={product.name} className="rounded-2xl border border-hairline bg-surface p-6 shadow-soft">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-karla text-2xl font-bold text-strong">{product.name}</h3>
                    <Badge variant={product.status === "Live" ? "live" : "early"}>{product.status}</Badge>
                  </div>
                  <p className="mt-3 font-lora text-base leading-7 text-body">{product.tagline}</p>
                  <p className="mt-3 font-karla text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    Who buys it
                  </p>
                  <p className="mt-2 font-lora text-sm leading-7 text-body">{product.audience}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="open-roles" surface="muted" spacing="lg">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <Eyebrow>Open opportunities</Eyebrow>
            <h2 className="t-h1 mt-3">
              Roles for people who can create qualified growth.
            </h2>
            <p className="t-body mt-5">
              This is best suited to people who already understand how to build
              trust in a market. We care less about polished CVs and more about
              relevance, integrity, and whether you can help us reach serious
              product-fit conversations.
            </p>
          </Reveal>

          <GrowthRoles />
        </div>
      </Section>

      <Section surface="base" spacing="lg">
        <div className="grid gap-10 rounded-3xl border border-hairline bg-surface-muted p-7 shadow-soft md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <Eyebrow>Who this is for</Eyebrow>
            <h2 className="t-h1 mt-3">Good fit looks like trust, focus, and follow-through.</h2>
            <p className="t-body mt-5">
              We are not looking for polished buzzwords or mass outbound
              theatre. The right people will protect relationships and bring
              relevant opportunities to the table.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="grid gap-6">
            <ul className="grid gap-3">
              {fitSignals.map((signal) => (
                <li key={signal} className="rounded-xl border border-hairline bg-surface p-4 font-lora text-sm leading-7 text-body">
                  {signal}
                </li>
              ))}
            </ul>
            <div className="rounded-xl border border-hairline bg-surface p-5">
              <p className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-brand-strong">
                What to send
              </p>
              <ul className="mt-4 grid gap-2.5">
                {whatToSend.map((item) => (
                  <li key={item} className="flex gap-2 font-lora text-sm leading-6 text-body">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section surface="muted" spacing="lg">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Application process</Eyebrow>
            <h2 className="t-h1 mt-3">Straightforward, thoughtful, and human.</h2>
            <p className="t-body mt-5">
              A short, honest process. We reply either way so you can plan.
            </p>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-hairline bg-surface p-6 shadow-soft">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                      <Icon size={18} />
                    </span>
                    <span className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      Step {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-karla text-lg font-bold text-strong">{step.title}</h3>
                  <p className="mt-3 font-lora text-sm leading-7 text-body">{step.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section surface="base" spacing="lg">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="t-h1 mt-3">Common questions before you apply.</h2>
            <p className="t-body mt-5">
              If your question is not covered here, mention it in the application
              or email <Link href="mailto:join@scotitech.com" className="text-brand-strong underline underline-offset-4 hover:text-brand">join@scotitech.com</Link>.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-4">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-hairline bg-surface p-5 shadow-soft transition-colors open:bg-surface-muted"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-karla text-base font-bold text-strong">
                    {item.q}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hairline text-muted transition-transform group-open:rotate-45">
                      <span className="text-lg leading-none">+</span>
                    </span>
                  </summary>
                  <p className="mt-4 font-lora text-sm leading-7 text-body">{item.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="bg-surface-muted py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-xl bg-ink px-7 py-12 text-center md:px-12 md:py-14">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(226,88,14,0.25),transparent_60%)]" />
              <div className="relative z-10 mx-auto max-w-2xl">
                <h2 className="t-h1 text-on-ink">
                  Want to grow with ScotiTech?
                </h2>
                <p className="mt-4 font-karla text-lg text-on-ink-muted">
                  Email us with your location, network, preferred role, and the
                  type of businesses you can reach. We will reply if there is a
                  clear fit.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Button asChild size="lg" variant="onInkSolid">
                    <Link href="mailto:join@scotitech.com?subject=Business%20growth%20opportunity%20application">
                      Apply by email
                      <ArrowRight size={17} />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="onInk">
                    <Link href="/contact">Talk to us first</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

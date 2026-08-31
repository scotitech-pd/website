import Link from "next/link";
import { ArrowRight, Building2, Globe2, Layers, Trophy } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/button";
import LeadershipTeam from "@/components/aboutus/Leadershipteam";
import ClientLogoStrip from "@/components/aboutus/ClientLogoStrip";
import OfficeCollage from "@/components/aboutus/OfficeCollage";

export const metadata = {
  title: "About ScotiTech",
  description:
    "ScotiTech Solutions is a UK-registered product company building privacy-conscious software, infrastructure, and AI for teams worldwide.",
  alternates: { canonical: "/aboutus" },
  openGraph: {
    title: "About ScotiTech Solutions",
    description:
      "A UK-registered product company building privacy-conscious software for teams worldwide.",
    url: "/aboutus",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const facts = [
  { icon: Building2, value: "UK-registered", label: "Operated from Scotland" },
  { icon: Layers, value: "Broad technology focus", label: "Products, platforms, AI, and delivery" },
  { icon: Globe2, value: "Worldwide", label: "Global reach, clients, and partnerships" },
  { icon: Trophy, value: "2026 Regional Finalist", label: "UK StartUp Awards, Scotland" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_85%_-5%,rgba(226,88,14,0.10),transparent_60%)]" />
        <Container className="relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(500px,1.12fr)] lg:gap-8 xl:gap-14">
            <Reveal immediate className="max-w-3xl">
              <Eyebrow>About ScotiTech</Eyebrow>
              <h1 className="t-display mt-3">
                A UK-registered technology company building for teams worldwide.
              </h1>
              <p className="t-lead mt-5 max-w-2xl">
                ScotiTech Solutions Limited is a product-led company founded in
                Scotland. We build privacy-conscious products, platforms, AI
                capabilities, and delivery solutions with clearer deployment,
                rollout, and operational control at the centre.
              </p>
            </Reveal>

            <Reveal immediate delay={0.12}>
              <OfficeCollage />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Facts */}
      <Section surface="muted" spacing="md">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.value} delay={i * 0.06}>
                <div className="h-full rounded-xl border border-hairline bg-surface p-6 transition-shadow duration-300 hover:shadow-md">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-brand-strong">
                    <Icon size={18} />
                  </span>
                  <p className="mt-5 font-karla text-lg font-bold text-strong">{f.value}</p>
                  <p className="mt-1 font-karla text-xs uppercase tracking-[0.12em] text-muted">{f.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Mission / story */}
      <Section surface="base" spacing="lg">
        <div className="grid gap-12 lg:grid-cols-[40%_60%] lg:gap-16">
          <Reveal>
            <Eyebrow>Why we exist</Eyebrow>
            <h2 className="t-h1 mt-3">Practical control, not platform sprawl.</h2>
          </Reveal>
          <Reveal delay={0.08} className="space-y-5">
            <p className="t-lead">
              Most teams don't need another sprawling platform. They need a few
              focused tools that do one job well — and give them real control over
              how software is deployed and where their data lives.
            </p>
            <p className="t-body">
              That's the principle behind our portfolio. AppDeploy makes internal
              app distribution controlled and clear. AXOS brings everyday team
              operations into one private, self-hostable environment with AI built
              in. ClarityPath supports structured, sensitive decision journeys.
            </p>
            <p className="t-body">
              We're UK-registered and led from Scotland, with a distributed team
              and customers worldwide — combining product direction, engineering,
              infrastructure, AI, and digital delivery around the real operational
              problems our clients face.
            </p>
            <p className="t-body">
              ScotiTech is bootstrapped, founder-led, and shipping. AppDeploy is
              live in production, with two active customer workspaces, 450+ apps
              installed and 300+ devices reached. AXOS is in private evaluation
              with enterprise teams. We are actively engaging with UK innovation
              grants and seed funding routes as we scale the platform from
              founder-led delivery toward a wider commercial footprint.
            </p>
            <div className="pt-2">
              <Button asChild variant="outline">
                <Link href="/products">
                  Explore our products
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Leadership + clients (system-aligned existing components) */}
      <LeadershipTeam />
      <ClientLogoStrip />

      {/* CTA */}
      <section className="bg-surface py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-xl bg-ink px-7 py-12 text-center md:px-12 md:py-14">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(226,88,14,0.25),transparent_60%)]" />
              <div className="relative z-10 mx-auto max-w-2xl">
                <h2 className="t-h1 text-on-ink">Let's build something credible together.</h2>
                <p className="mt-4 font-karla text-lg text-on-ink-muted">
                  Whether you're evaluating our products or exploring a
                  partnership, we'd be glad to talk.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Button asChild size="lg" variant="onInkSolid">
                    <Link href="/contact">
                      Get in touch
                      <ArrowRight size={17} />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="onInk">
                    <Link href="/products">View products</Link>
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

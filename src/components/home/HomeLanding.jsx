"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Boxes,
  Building2,
  CheckCircle2,
  ExternalLink,
  Globe2,
  Layers3,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { useModal } from "@/components/ModalContext";
import { featuredInsight } from "@/lib/insights";

const products = [
  {
    name: "AppDeploy",
    label: "Business app rollout",
    description:
      "A branded delivery path for private business apps, approvals, access, and release visibility.",
    href: "/products/appdeploy",
    logo: "/images/brand/appdeploy-logo-black.png",
    accent: "#00C9A7",
    badge: "Live product",
  },
  {
    name: "AXOS",
    label: "Private operations workspace",
    description:
      "A controlled workspace for teams that want communication, files, tasks, and AI in one governed place.",
    href: "/products/axos",
    logo: "/images/brand/axos-icon.png",
    accent: "#34D3FF",
    badge: "Platform",
  },
  {
    name: "ClarityPath",
    label: "Guided decision journeys",
    description:
      "Structured digital pathways for sensitive, high-trust user journeys that need clarity and care.",
    href: "/products/claritypath",
    logo: "/images/brand/claritypath-logo.png",
    accent: "#BCB96A",
    badge: "Specialist product",
  },
];

const problemAreas = [
  {
    icon: Boxes,
    title: "Business app rollout feels fragmented",
    body: "Teams need a clearer route from approved access to a polished install experience.",
  },
  {
    icon: LockKeyhole,
    title: "Private work needs stronger boundaries",
    body: "Growing organisations need better control over data, access, collaboration, and AI use.",
  },
  {
    icon: Users,
    title: "Customer journeys need more confidence",
    body: "Sensitive digital services work best when the next step is clear, measured, and easy to trust.",
  },
  {
    icon: ShieldCheck,
    title: "Buyers need proof before commitment",
    body: "The strongest products make security, rollout, ownership, and value easy to understand.",
  },
];

const approach = [
  {
    step: "01",
    title: "Understand the operating problem",
    body: "We start with the pressure point: rollout, access, privacy, adoption, or workflow clarity.",
  },
  {
    step: "02",
    title: "Shape the product path",
    body: "We define the product fit, the buyer journey, and the controls needed for confident use.",
  },
  {
    step: "03",
    title: "Launch with clarity",
    body: "The experience is presented with clear onboarding, useful guidance, and visible value from day one.",
  },
  {
    step: "04",
    title: "Keep improving the outcome",
    body: "Feedback, product signals, and customer needs guide what gets strengthened next.",
  },
];

const proofCards = [
  {
    icon: Award,
    title: "Recognised product momentum",
    body: "ScotiTech has been shortlisted for Scotland StartUp Awards 2026 in the Digital StartUp of the Year category.",
  },
  {
    icon: Globe2,
    title: "UK company with global outlook",
    body: "Based in Scotland, ScotiTech builds products for teams and partners that need practical digital control.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-aware by design",
    body: "Our products are shaped around controlled access, clearer data boundaries, and transparent product claims.",
  },
];

const faqs = [
  {
    question: "What does ScotiTech focus on?",
    answer:
      "ScotiTech creates focused digital products for app rollout, private operations, guided user journeys, and privacy-conscious business workflows.",
  },
  {
    question: "Which product should I explore first?",
    answer:
      "Start with AppDeploy if private app delivery is the priority. Explore AXOS if your team needs a controlled workspace. Use ClarityPath for structured high-trust journeys.",
  },
  {
    question: "Can we speak before choosing a product?",
    answer:
      "Yes. A short conversation is often the best way to match your challenge with the right product path.",
  },
];

function SectionHeader({ eyebrow, title, body, light = false }) {
  return (
    <div className="max-w-3xl">
      <p
        className={`text-sm font-karla font-semibold uppercase tracking-[0.18em] ${
          light ? "text-white/58" : "text-[var(--st-muted)]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-karla font-semibold leading-tight ${
          light ? "text-white" : "text-[var(--st-ink)]"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`mt-4 text-base sm:text-lg font-lora leading-8 ${
            light ? "text-white/72" : "text-[var(--st-text)]"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

export default function HomeLanding() {
  const { setShowModal } = useModal();

  return (
    <main className="bg-[var(--st-bg)] text-[var(--st-ink)]">
      <section className="relative overflow-hidden bg-[var(--st-ink)] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#002D35_0%,#003B46_44%,#0F172A_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(0,201,167,0.26),transparent_28%),radial-gradient(circle_at_86%_20%,rgba(188,185,106,0.16),transparent_26%),radial-gradient(circle_at_54%_78%,rgba(52,211,255,0.13),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:44px_44px]" />

        <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 xl:grid-cols-[54%_46%] xl:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-4 py-2 text-sm font-karla font-semibold text-white/90 backdrop-blur">
                <Sparkles className="size-4 text-[var(--st-teal)]" />
                ScotiTech Solutions
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-karla font-semibold leading-[1.04]">
                Problem-solving digital products for modern business operations.
              </h1>

              <p className="mt-6 max-w-2xl text-lg sm:text-xl font-lora leading-8 text-white/76">
                ScotiTech creates focused software products for teams that need
                clearer rollout, stronger control, and more confident digital
                experiences.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--st-teal)] px-6 py-3.5 text-sm font-karla font-bold text-white shadow-[0_18px_38px_rgba(0,201,167,0.22)] transition hover:bg-[var(--st-teal-dark)]"
                >
                  Talk to Our Team
                  <ArrowRight className="size-4" />
                </button>
                <a
                  href="#products"
                  className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-karla font-semibold text-white backdrop-blur transition hover:bg-white/16"
                >
                  View Products
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  "Product-led",
                  "Privacy-aware",
                  "Built for adoption",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3 text-sm font-karla font-semibold text-white/86 backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-[var(--st-teal)]/12 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/16 bg-white/10 p-3 shadow-[0_40px_100px_rgba(0,0,0,0.38)] backdrop-blur-xl">
                <div className="mb-2 flex items-center gap-2 px-3 py-2">
                  <span className="size-2.5 rounded-full bg-red-400/70" />
                  <span className="size-2.5 rounded-full bg-yellow-300/70" />
                  <span className="size-2.5 rounded-full bg-[var(--st-teal)]/80" />
                  <div className="ml-3 flex-1 rounded-md bg-white/10 px-3 py-1 text-[10px] text-white/54">
                    scotitech.com/products
                  </div>
                </div>

                <div className="rounded-[1.6rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.94))] p-5 text-[var(--st-ink)]">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-karla font-bold uppercase tracking-[0.18em] text-[var(--st-muted)]">
                        Product portfolio
                      </p>
                      <h2 className="mt-1 text-2xl font-karla font-semibold">
                        ScotiTech workspace
                      </h2>
                    </div>
                    <div className="rounded-2xl bg-[var(--st-accent-soft)] px-3 py-2 text-xs font-karla font-bold text-[var(--st-brand-800)]">
                      Active
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {products.map((product) => (
                      <div
                        key={product.name}
                        className="rounded-2xl border border-[var(--st-border)] bg-white px-4 py-4 shadow-[0_12px_28px_rgba(15,23,42,0.06)]"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className="flex size-12 shrink-0 items-center justify-center rounded-2xl"
                            style={{ backgroundColor: `${product.accent}18` }}
                          >
                            <Image
                              src={product.logo}
                              alt={`${product.name} logo`}
                              width={34}
                              height={34}
                              className="max-h-8 w-auto object-contain"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-karla font-semibold text-[var(--st-ink)]">
                              {product.name}
                            </p>
                            <p className="mt-1 text-xs font-lora leading-5 text-[var(--st-muted)]">
                              {product.label}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="scroll-mt-28 py-16 sm:py-20">
        <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Products"
              title="Focused products for clear business outcomes."
              body="Each ScotiTech product has a defined role, so buyers can quickly understand the problem it solves and the value it brings."
            />
            <Link
              href="/products"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-[var(--st-border-strong)] bg-white px-5 py-3 text-sm font-karla font-semibold text-[var(--st-ink)] transition hover:border-[var(--st-brand-700)]"
            >
              Product overview
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="group overflow-hidden rounded-[2rem] border border-[var(--st-border)] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.12)]"
              >
                <div
                  className="h-1.5"
                  style={{ backgroundColor: product.accent }}
                />
                <div className="p-6 sm:p-7">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div
                      className="flex size-16 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: `${product.accent}18` }}
                    >
                      <Image
                        src={product.logo}
                        alt={`${product.name} logo`}
                        width={48}
                        height={48}
                        className="max-h-11 w-auto object-contain"
                      />
                    </div>
                    <span className="rounded-full bg-[var(--st-surface-muted)] px-3 py-1.5 text-[11px] font-karla font-bold uppercase tracking-[0.14em] text-[var(--st-muted)]">
                      {product.badge}
                    </span>
                  </div>
                  <p className="text-sm font-karla font-bold uppercase tracking-[0.16em] text-[var(--st-brand-700)]">
                    {product.label}
                  </p>
                  <h3 className="mt-3 text-3xl font-karla font-semibold text-[var(--st-ink)]">
                    {product.name}
                  </h3>
                  <p className="mt-4 min-h-[96px] text-base font-lora leading-8 text-[var(--st-text)]">
                    {product.description}
                  </p>
                  <Link
                    href={product.href}
                    className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[var(--st-ink)] px-5 py-3 text-sm font-karla font-semibold text-white transition hover:bg-[var(--st-brand-800)]"
                  >
                    Explore product
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
          <div className="grid gap-10 lg:grid-cols-[38%_62%] lg:items-start">
            <SectionHeader
              eyebrow="Problems We Solve"
              title="The work is practical because the problems are practical."
              body="ScotiTech is strongest where business teams need a product that reduces friction, explains the next step, and gives stakeholders confidence."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {problemAreas.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-[1.75rem] border border-[var(--st-border)] bg-[var(--st-surface-muted)] p-6"
                  >
                    <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-[var(--st-accent-soft)] text-[var(--st-brand-800)]">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-xl font-karla font-semibold text-[var(--st-ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm font-lora leading-7 text-[var(--st-text)]">
                      {item.body}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="scroll-mt-28 py-16 sm:py-20">
        <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
          <SectionHeader
            eyebrow="How We Work"
            title="A clear path from problem to product value."
            body="The process stays focused on the business outcome, the user experience, and the trust needed for adoption."
          />

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-[var(--st-border)] bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)]">
            <div className="grid lg:grid-cols-4">
              {approach.map((item, index) => (
                <article
                  key={item.step}
                  className={`p-6 sm:p-7 ${
                    index < approach.length - 1
                      ? "border-b border-[var(--st-border)] lg:border-b-0 lg:border-r"
                      : ""
                  }`}
                >
                  <span className="inline-flex rounded-2xl bg-[var(--st-brand-900)] px-3 py-1.5 text-xs font-karla font-bold tracking-[0.16em] text-white">
                    {item.step}
                  </span>
                  <h3 className="mt-5 text-xl font-karla font-semibold text-[var(--st-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-lora leading-7 text-[var(--st-text)]">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="proof"
        className="scroll-mt-28 bg-[var(--st-ink)] py-16 sm:py-20 text-white"
      >
        <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Proof"
              title="Credibility built through products, recognition, and clear claims."
              body="Visitors should quickly see what ScotiTech stands for: focused products, responsible positioning, and visible progress."
              light
            />
            <Link
              href="/media"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/18 bg-white/10 px-5 py-3 text-sm font-karla font-semibold text-white transition hover:bg-white/16"
            >
              View media
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
            <div className="overflow-hidden rounded-[2rem] border border-white/14 bg-white/10 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <div className="rounded-[1.5rem] bg-white p-3">
                <Image
                  src="/images/home/startup-awards-2026-shortlist.jpg"
                  alt="ScotiTech shortlisted for the Scotland StartUp Awards 2026"
                  width={900}
                  height={650}
                  className="h-auto w-full rounded-[1.2rem] object-contain"
                />
              </div>
            </div>

            <div className="grid gap-5">
              {proofCards.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-[1.75rem] border border-white/12 bg-white/10 p-6 backdrop-blur"
                  >
                    <div className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-[var(--st-teal)]/18 text-[var(--st-teal)]">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-xl font-karla font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm font-lora leading-7 text-white/72">
                      {item.body}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="insights" className="scroll-mt-28 py-16 sm:py-20">
        <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
          <div className="grid gap-8 lg:grid-cols-[38%_62%] lg:items-stretch">
            <SectionHeader
              eyebrow="Insights"
              title="Relevant technology updates, interpreted for business action."
              body="ScotiTech Insights turns selected platform changes into useful decisions for SMEs and product-led teams."
            />

            <Link
              href={`/insights/${featuredInsight.slug}`}
              className="group overflow-hidden rounded-[2rem] border border-[var(--st-border)] bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.13)]"
            >
              <article className="grid gap-0 md:grid-cols-[42%_58%]">
                <div className="relative min-h-[260px] bg-[var(--st-brand-900)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,201,167,0.26),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(188,185,106,0.2),transparent_38%)]" />
                  <Image
                    src={featuredInsight.image}
                    alt="AppDeploy product context for Apple Business"
                    fill
                    sizes="(min-width: 1024px) 28vw, 100vw"
                    className="object-contain p-8"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <span className="inline-flex rounded-full bg-[var(--st-gold)] px-3 py-1.5 text-[11px] font-karla font-bold uppercase tracking-[0.14em] text-white">
                    {featuredInsight.category}
                  </span>
                  <h3 className="mt-5 text-2xl sm:text-3xl font-karla font-semibold leading-tight text-[var(--st-ink)]">
                    {featuredInsight.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-lora leading-8 text-[var(--st-text)]">
                    A practical briefing on what Apple Business means for SMEs,
                    device workflows, and controlled app delivery.
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-karla font-semibold text-[var(--st-brand-800)]">
                    Read briefing
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
          <div className="grid gap-10 lg:grid-cols-[38%_62%] lg:items-start">
            <SectionHeader
              eyebrow="FAQ"
              title="Straight answers for first conversations."
              body="The site should help a buyer understand the company quickly, then choose the next product conversation."
            />
            <div className="grid gap-4">
              {faqs.map((item) => (
                <article
                  key={item.question}
                  className="rounded-[1.5rem] border border-[var(--st-border)] bg-[var(--st-surface-muted)] p-6"
                >
                  <h3 className="text-lg font-karla font-semibold text-[var(--st-ink)]">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm font-lora leading-7 text-[var(--st-text)]">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 py-16 sm:py-20">
        <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--st-brand-900)] p-6 sm:p-10 lg:p-12 text-white shadow-[0_30px_90px_rgba(0,45,53,0.22)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(0,201,167,0.28),transparent_26%),radial-gradient(circle_at_86%_74%,rgba(188,185,106,0.2),transparent_32%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
              <div>
                <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-white/58">
                  Next Step
                </p>
                <h2 className="mt-3 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-karla font-semibold leading-tight">
                  Bring us the business problem. We will help shape the product path.
                </h2>
                <p className="mt-4 max-w-2xl text-base sm:text-lg font-lora leading-8 text-white/74">
                  Tell us what you are trying to improve, launch, simplify, or
                  control. We will point you toward the right ScotiTech product
                  or conversation.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/12 bg-white/10 p-5 backdrop-blur">
                <div className="space-y-3">
                  {[
                    "Product fit conversation",
                    "AppDeploy and AXOS guidance",
                    "Partnership and rollout enquiries",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="size-5 text-[var(--st-teal)]" />
                      <p className="text-sm font-lora text-white/82">{item}</p>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--st-teal)] px-6 py-3.5 text-sm font-karla font-bold text-white transition hover:bg-[var(--st-teal-dark)]"
                >
                  Talk to Our Team
                  <ExternalLink className="size-4" />
                </button>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-white/18 bg-white/10 px-6 py-3 text-sm font-karla font-semibold text-white transition hover:bg-white/16"
                >
                  Contact details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

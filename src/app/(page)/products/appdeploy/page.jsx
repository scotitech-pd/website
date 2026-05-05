import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  CheckCircle2,
  Globe2,
  LayoutDashboard,
  LockKeyhole,
  Route,
  ServerCog,
  ShieldCheck,
  Smartphone,
  UploadCloud,
  UsersRound,
} from "lucide-react";
import { flagshipProducts } from "@/lib/products";

const product = flagshipProducts.find((item) => item.slug === "appdeploy");

export const metadata = {
  title: "AppDeploy | Branded Internal App Distribution",
  description:
    "AppDeploy is ScotiTech's branded workspace for entitlement-led private iOS app distribution, Apple Business aligned rollout, install visibility, organisation branding, and admin operations.",
};

const productSignals = [
  {
    label: "Public portal",
    value: "/w/{organisation}",
    detail: "A branded destination where approved users can find internal apps and install guidance.",
  },
  {
    label: "Admin console",
    value: "Releases + roles",
    detail: "Workspace tabs for publishing, inventory, reports, users, settings, billing, and audit activity.",
  },
  {
    label: "Cloud pricing",
    value: "GBP 79/month",
    detail: "Hosted iOS-first rollout, with GBP 600/year available for annual billing.",
  },
  {
    label: "Enterprise path",
    value: "Custom",
    detail: "Tailored rollout for infrastructure needs, optional Android, and deeper Apple Business alignment.",
  },
];

const painPoints = [
  "Internal-use apps need a distribution path outside public App Store listings.",
  "Apple Business gives approved distribution rails, but day-to-day rollout still needs clear ownership.",
  "Redemption codes, install links, version notes, and user instructions are hard to manage from spreadsheets.",
  "Full device-management workflows can be heavier than agencies, schools, SMEs, and project teams need for app access alone.",
];

const architecturePoints = [
  {
    title: "Entitlement-led access",
    description:
      "App availability is managed around organisation roles, release status, and approved access rather than broad device ownership assumptions.",
    icon: LockKeyhole,
  },
  {
    title: "Apple Business alignment",
    description:
      "The product works around approved Apple distribution routes while adding branded context, install guidance, and admin visibility.",
    icon: BadgeCheck,
  },
  {
    title: "Rollout audit trail",
    description:
      "Admins can review app inventory, install activity, code availability, user access, and sensitive release actions from one workspace.",
    icon: ShieldCheck,
  },
  {
    title: "Hosted or tailored",
    description:
      "Cloud gives a focused hosted entry point, while Enterprise supports deeper review, integration planning, and infrastructure alignment.",
    icon: ServerCog,
  },
];

const capabilities = [
  {
    title: "Branded organisation pages",
    description:
      "Each workspace can expose a clean public portal with organisation logo, primary colour, app cards, search, and guided install steps.",
    icon: Globe2,
  },
  {
    title: "iOS release publishing",
    description:
      "Admins publish private iOS releases with app icons and redemption-code sheets, then keep versions and availability visible.",
    icon: UploadCloud,
  },
  {
    title: "Install link reservation",
    description:
      "The portal reserves the next available iOS link or code and records install activity instead of leaving teams to pass codes manually.",
    icon: Smartphone,
  },
  {
    title: "Admin workspace",
    description:
      "Release owners work from one console for overview, applications, publish actions, users, reports, audit, and settings.",
    icon: LayoutDashboard,
  },
  {
    title: "Role-based team access",
    description:
      "Entitlements, invites, members, permissions, and password flows support separate administrator, app manager, auditor, and member responsibilities.",
    icon: UsersRound,
  },
  {
    title: "Reports and audit trail",
    description:
      "Workspace reporting covers apps, installs, code availability, active users, and admin activity for better rollout reviews.",
    icon: BarChart3,
  },
];

const workflow = [
  {
    title: "Request a workspace",
    description:
      "Cloud requests move through email verification, billing, and activation. Enterprise requests move into review-led onboarding.",
    icon: Building2,
  },
  {
    title: "Configure the brand",
    description:
      "Set the organisation slug, display name, logo, accent colour, public-page status, and enabled platforms.",
    icon: BadgeCheck,
  },
  {
    title: "Publish releases",
    description:
      "Upload iOS release assets and redemption data, with Android APK distribution reserved for Enterprise deployments.",
    icon: UploadCloud,
  },
  {
    title: "Share one portal",
    description:
      "Employees, testers, or client teams use a branded app page rather than scattered install messages.",
    icon: Route,
  },
  {
    title: "Track usage",
    description:
      "Admins monitor install counts, remaining iOS codes, active users, app inventory, and distribution activity.",
    icon: BarChart3,
  },
  {
    title: "Review operations",
    description:
      "Audit logs and member permissions give larger teams a cleaner way to review sensitive release actions.",
    icon: ShieldCheck,
  },
];

const plans = [
  {
    name: "AppDeploy Cloud",
    price: "GBP 79 / month",
    note: "or GBP 600 / year, billed annually",
    description:
      "A hosted workspace for teams that need private iOS app delivery with focused release, access, and reporting workflows.",
    items: [
      "Private organisation workspace",
      "Branded app distribution page",
      "Multiple iOS releases",
      "Version and code availability visibility",
      "Role-based admin dashboard",
      "Registration, billing, and email support",
    ],
    cta: "Request Cloud access",
    href: "https://appdeploy.scotitech.com/request-access",
    featured: true,
  },
  {
    name: "AppDeploy Enterprise",
    price: "Custom",
    note: "review-led rollout",
    description:
      "A tailored path for organisations that need infrastructure alignment, stricter onboarding, broader admin workflows, or contracted Android support.",
    items: [
      "Guided technical and security review",
      "Custom domain or internal deployment options",
      "Optional Android APK hosting and distribution",
      "Advanced role and audit requirements",
      "Apple Business integration planning",
      "Priority onboarding and rollout support",
    ],
    cta: "Discuss Enterprise",
    href: "/contact",
    featured: false,
  },
];

const boundaries = [
  {
    title: "Complements Apple Business",
    description:
      "Use Apple Business for approved distribution foundations while AppDeploy handles branded access, release context, and rollout visibility.",
  },
  {
    title: "Focused app delivery scope",
    description:
      "Built for release publishing, access, install visibility, roles, and audit trails around app delivery.",
  },
  {
    title: "Two rollout paths",
    description:
      "Choose hosted Cloud for iOS-first rollout, or Enterprise for tailored implementation, integration planning, and optional Android support.",
  },
];

export default function AppDeployPage() {
  return (
    <main className="bg-[#F7F7F5] text-[#111827]">
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.16),transparent_30%),radial-gradient(circle_at_86%_10%,rgba(15,118,110,0.10),transparent_28%),linear-gradient(180deg,#F7F7F5_0%,#FBFAF6_100%)]" />
        <div className="relative z-10 mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="grid items-center gap-12 xl:grid-cols-[54%_46%]">
            <div className="max-w-4xl">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#EFF6FF] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#2563EB]">
                  {product.status}
                </span>
                <span className="rounded-full border border-[#d9ded7] bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                  Cloud + Enterprise
                </span>
                <span className="rounded-full border border-[#d9ded7] bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                  App delivery focused
                </span>
              </div>

              <div className="mb-8 inline-flex items-center gap-4 rounded-[1.2rem] border border-[#d9ded7] bg-white/85 p-3 pr-5 shadow-[0_16px_36px_rgba(15,23,42,0.06)] backdrop-blur">
                <Image
                  src={product.logo}
                  alt="AppDeploy logo"
                  width={84}
                  height={84}
                  className="size-16 rounded-2xl object-contain"
                  priority
                />
                <div>
                  <p className="text-xl font-semibold text-slate-950">
                    AppDeploy
                  </p>
                  <p className="text-sm font-medium text-slate-600">
                    Private app distribution workspace
                  </p>
                </div>
              </div>

              <h1 className="mb-6 text-4xl font-semibold leading-tight text-[#111827] sm:text-5xl lg:text-6xl">
                {product.headline}
              </h1>
              <p className="max-w-3xl font-lora text-lg leading-8 text-slate-700 md:text-xl">
                AppDeploy turns private iOS rollout into a branded workspace:
                admins publish releases, manage entitlement-led organisation
                access, track install activity, and give employees or client
                teams one clear place to get approved apps.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="https://appdeploy.scotitech.com/w/scotitech"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0E1116] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(14,17,22,0.18)] transition hover:bg-[#1C2530]"
                >
                  View workspace preview
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="https://appdeploy.scotitech.com/request-access"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-full border border-[#cfd7cf] bg-white/85 px-7 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
                >
                  Request access
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(0,201,167,0.18),rgba(37,99,235,0.10))] blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.25rem] border border-[#d9ded7] bg-white shadow-[0_28px_80px_rgba(15,23,42,0.14)]">
                <div className="flex items-center justify-between border-b border-[#d9ded7] bg-white px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-[#FF6467]" />
                    <span className="size-2.5 rounded-full bg-[#F7C948]" />
                    <span className="size-2.5 rounded-full bg-[#00C9A7]" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    AppDeploy dashboard
                  </p>
                </div>
                <div className="relative aspect-[1.2/1] overflow-hidden bg-[#F8FAFC] sm:aspect-[1.28/1]">
                  <Image
                    src="/images/products/appdeploy/dashboard.png"
                    alt="AppDeploy dashboard showing branded page controls, reports, quick actions, and platform status"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 44vw"
                    priority
                  />
                </div>
                <div className="grid grid-cols-3 border-t border-[#d9ded7] bg-white">
                  {[
                    ["Apps", "Published"],
                    ["Reports", "Visible"],
                    ["iOS", "Active"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="border-r border-[#d9ded7] px-4 py-3 last:border-r-0"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                        {label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-950">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {productSignals.map((signal) => (
              <article
                key={signal.label}
                className="rounded-[1.1rem] border border-[#d9ded7] bg-white/85 p-5 shadow-[0_16px_36px_rgba(15,23,42,0.05)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2563EB]">
                  {signal.label}
                </p>
                <p className="mt-3 text-xl font-semibold text-slate-950">
                  {signal.value}
                </p>
                <p className="mt-3 font-lora text-sm leading-6 text-slate-600">
                  {signal.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="grid gap-8 xl:grid-cols-[42%_58%] xl:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
                The rollout gap
              </p>
              <h2 className="mb-5 text-3xl font-semibold text-[#111827] md:text-5xl">
                App access without unnecessary device-management weight.
              </h2>
              <p className="font-lora text-lg leading-8 text-slate-700">
                Apple Business provides the approved distribution foundation.
                AppDeploy adds the branded portal, release context, install
                guidance, entitlement-led team access, and rollout visibility
                that teams need around that foundation.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {painPoints.map((item) => (
                <article
                  key={item}
                  className="rounded-[1.1rem] border border-[#d9ded7] bg-white p-5 shadow-[0_16px_36px_rgba(15,23,42,0.04)]"
                >
                  <LockKeyhole className="mb-4 size-5 text-[#2563EB]" />
                  <p className="font-lora leading-7 text-slate-700">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="rounded-[1.25rem] border border-[#111827]/10 bg-[#0E1116] p-7 text-white shadow-[0_28px_80px_rgba(14,17,22,0.20)] sm:p-10">
            <div className="mb-8 grid gap-6 lg:grid-cols-[42%_58%] lg:items-end">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#93C5FD]">
                  Distribution architecture
                </p>
                <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                  Built for controlled rollout, not broad device control.
                </h2>
              </div>
              <p className="font-lora text-lg leading-8 text-slate-300">
                AppDeploy keeps the product angle focused: a branded,
                entitlement-led workspace for distributing approved internal
                apps, with the operational controls teams need around access,
                releases, and review.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {architecturePoints.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.1rem] border border-white/10 bg-white/[0.06] p-5"
                >
                  <item.icon className="mb-5 size-6 text-[#93C5FD]" />
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="font-lora leading-7 text-slate-300">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ECE8DA] py-16">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
              Product capabilities
            </p>
            <h2 className="text-3xl font-semibold text-[#111827] md:text-5xl">
              Publish, guide, and review app access from one place.
            </h2>
            <p className="mt-5 font-lora text-lg leading-8 text-slate-700">
              AppDeploy brings private app rollout into one branded
              environment, from release publishing and guided installs to team
              access, billing, reporting, and audit visibility.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.15rem] border border-[#d9ded7] bg-white p-6 shadow-[0_18px_42px_rgba(15,23,42,0.05)]"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#2563EB]">
                  <item.icon className="size-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="font-lora leading-7 text-slate-700">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              Workflow
            </p>
            <h2 className="text-3xl font-semibold text-[#111827] md:text-5xl">
              One path from request to release review.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {workflow.map((item, index) => (
              <article
                key={item.title}
                className="relative rounded-[1.15rem] border border-[#d9ded7] bg-white p-6 shadow-[0_18px_42px_rgba(15,23,42,0.05)]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[#0F766E]">
                    <item.icon className="size-6" />
                  </div>
                  <span className="text-sm font-bold text-slate-400">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="font-lora leading-7 text-slate-700">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF9F4] py-16">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="mb-10 grid gap-6 xl:grid-cols-[42%_58%] xl:items-end">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Plans
              </p>
              <h2 className="text-3xl font-semibold text-[#111827] md:text-5xl">
                Clear Cloud entry, tailored Enterprise expansion.
              </h2>
            </div>
            <p className="font-lora text-lg leading-8 text-slate-700">
              Start with hosted Cloud for iOS-first distribution, then move to
              Enterprise when infrastructure, security, or broader deployment
              requirements need a tailored implementation.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-[1.25rem] border p-7 shadow-[0_20px_50px_rgba(15,23,42,0.06)] ${
                  plan.featured
                    ? "border-[#BFDBFE] bg-white"
                    : "border-[#d9ded7] bg-[#F7F7F5]"
                }`}
              >
                <div className="mb-7 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-950">
                      {plan.name}
                    </h3>
                    <p className="mt-3 font-lora leading-7 text-slate-700">
                      {plan.description}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#EFF6FF] px-4 py-3 text-right">
                    <p className="text-sm font-bold text-[#2563EB]">
                      {plan.price}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {plan.note}
                    </p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {plan.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#0F766E]" />
                      <span className="font-lora text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={plan.href}
                  target={plan.href.startsWith("http") ? "_blank" : undefined}
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                    plan.featured
                      ? "bg-[#0E1116] text-white hover:bg-[#1C2530]"
                      : "border border-[#cfd7cf] bg-white text-slate-950 hover:border-slate-400"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="grid gap-8 xl:grid-cols-[42%_58%]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                Apple Business fit
              </p>
              <h2 className="mb-5 text-3xl font-semibold text-[#111827] md:text-5xl">
                A focused layer for private app delivery.
              </h2>
              <p className="font-lora text-lg leading-8 text-slate-700">
                AppDeploy improves the experience around Apple Business app
                distribution with branded access, release visibility, and
                admin review tools for teams that need a clearer rollout path.
              </p>
            </div>

            <div className="grid gap-4">
              {boundaries.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.1rem] border border-[#d9ded7] bg-white p-5 shadow-[0_16px_36px_rgba(15,23,42,0.04)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#2563EB]">
                      <ServerCog className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 font-lora leading-7 text-slate-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="rounded-[1.25rem] border border-[#d9ded7] bg-[#0E1116] p-7 text-white shadow-[0_28px_80px_rgba(14,17,22,0.22)] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[62%_38%] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#93C5FD]">
                  AppDeploy
                </p>
                <h2 className="text-3xl font-semibold md:text-5xl">
                  Give private app delivery a product-grade front door.
                </h2>
                <p className="mt-5 max-w-3xl font-lora text-lg leading-8 text-slate-300">
                  Use AppDeploy when the app is ready, but the rollout journey
                  still needs a branded portal, admin workflow, install
                  visibility, and clear ownership.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  href="https://appdeploy.scotitech.com/request-access"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0E1116] transition hover:bg-slate-100"
                >
                  Request access
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Compare products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

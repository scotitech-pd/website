import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  CloudCog,
  Database,
  Factory,
  FileLock2,
  HeartPulse,
  Landmark,
  LockKeyhole,
  MessageSquareText,
  Network,
  ServerCog,
  ShieldCheck,
  SquareKanban,
  Store,
  Truck,
} from "lucide-react";
import { flagshipProducts } from "@/lib/products";
import { meetingLinks } from "@/lib/scheduling";

const product = flagshipProducts.find((item) => item.slug === "axos");

export const metadata = {
  title: "AXOS | Private Workspace for Communication, Files, Tasks & AI",
  description:
    "AXOS brings Mail, Calendar, Tasks, Files, and policy-aligned AI into one private workspace. Hosted, private-cloud, self-hosted, and on-premises deployment paths for teams that need stronger control.",
};

const workspaceModules = [
  {
    title: "Mail",
    description: "Team communication inside the workspace — no external mail service required.",
    icon: MessageSquareText,
  },
  {
    title: "Calendar",
    description: "Scheduling and planning built into the same environment where your team operates.",
    icon: CalendarCheck2,
  },
  {
    title: "Tasks & Boards",
    description: "Ownership views, boards, and day-to-day execution without a separate project tool.",
    icon: SquareKanban,
  },
  {
    title: "Files & Storage",
    description: "Documents, shared assets, and working files stored inside the controlled workspace.",
    icon: FileLock2,
  },
  {
    title: "Governance-first AI",
    description: "Policy-aligned AI assistance built into the workspace — shaped by access rules, team policy, and data posture. Not bolted on.",
    icon: Bot,
  },
];

const deploymentOptions = [
  "Hosted access for faster evaluation",
  "Private-cloud configuration for sensitive teams",
  "Self-hosted deployment for organisations with internal infrastructure",
  "On-premises deployment path for teams with stronger control requirements",
];

const enterpriseControls = [
  {
    title: "Data control",
    description:
      "Workspace information, files, and operating context can be planned around the deployment model your organisation requires.",
    icon: FileLock2,
  },
  {
    title: "Policy-aligned AI",
    description:
      "AI assistance works as part of the workspace experience, with adoption shaped by access rules, team policy, and data posture.",
    icon: Bot,
  },
  {
    title: "Infrastructure choice",
    description:
      "Hosted, private-cloud, self-hosted, and on-premises paths give teams room to mature from evaluation to stronger ownership.",
    icon: ServerCog,
  },
  {
    title: "Access governance",
    description:
      "Role expectations, protected sign-in, and workspace boundaries are treated as part of the product rollout, not an afterthought.",
    icon: ShieldCheck,
  },
];

const operatingPrinciples = [
  "Mail, Calendar, Tasks, Files, and AI in one controlled workspace",
  "Reduce the number of places where sensitive operating context can leak",
  "Staged deployment — start on hosted evaluation, mature toward more ownership",
  "SSO-ready access with workspace-level governance built in from day one",
];

const onPremAiBenefits = [
  {
    title: "Consolidate scattered tools",
    description:
      "Bringing communication, files, tasks, and AI into one workspace reduces the number of places where sensitive operating context is scattered across disconnected SaaS tools.",
    icon: LockKeyhole,
  },
  {
    title: "Keep operating context inside",
    description:
      "Internal files, communications, task history, and AI interactions stay inside the workspace — not spread across public cloud services your team does not fully control.",
    icon: Database,
  },
  {
    title: "Access rules that match real roles",
    description:
      "Workspace access, AI assistance scope, and file permissions are shaped by the roles your team already operates under — not a generic permission model.",
    icon: ShieldCheck,
  },
  {
    title: "Deployment path that fits your posture",
    description:
      "Start on hosted evaluation, move to private-cloud or self-hosted when ready. Align infrastructure ownership with your actual IT and data residency requirements.",
    icon: Network,
  },
];

const industryExamples = [
  {
    title: "Healthcare and care providers",
    description:
      "Help staff find approved policies, care procedures, shift notes, and internal guidance faster while keeping sensitive records inside the organisation’s controlled environment.",
    example: "Example: summarise internal care procedures for a manager preparing staff handover notes.",
    icon: HeartPulse,
  },
  {
    title: "Financial services and accounting",
    description:
      "Support secure knowledge retrieval across client files, compliance notes, onboarding documents, and internal operating procedures.",
    example: "Example: prepare a draft client onboarding checklist from approved internal templates.",
    icon: Landmark,
  },
  {
    title: "Manufacturing and logistics",
    description:
      "Give operations teams one workspace for SOPs, maintenance communications, task tracking, and internal documents — reducing the number of places where operating context can go missing.",
    example: "Example: a site manager tracks open tasks, shares maintenance updates, and retrieves relevant procedures from a single workspace.",
    icon: Factory,
  },
  {
    title: "Legal and professional services",
    description:
      "Keep matter communications, engagement files, task assignments, and knowledge retrieval inside one workspace with access controls that reflect how your team operates.",
    example: "Example: a partner manages matter notes, team tasks, and document drafts in AXOS without relying on a shared Google Drive and Slack combination.",
    icon: Building2,
  },
  {
    title: "Retail and multi-site operations",
    description:
      "Centralise branch procedures, training material, inventory guidance, escalation paths, and service standards for distributed teams.",
    example: "Example: answer store-policy questions from internal guidance without searching multiple tools.",
    icon: Store,
  },
  {
    title: "Transport and field services",
    description:
      "Support mobile teams with controlled access to job instructions, safety documents, service history, and operational updates.",
    example: "Example: generate a field-service summary from job notes and approved safety requirements.",
    icon: Truck,
  },
];

export default function AxosPage() {
  return (
    <main className="bg-[#F7F7F5] text-[#111827]">
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(15,118,110,0.16),transparent_30%),radial-gradient(circle_at_86%_12%,rgba(37,99,235,0.08),transparent_26%)]" />
        <div className="relative z-10 mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="grid items-center gap-12 xl:grid-cols-[54%_46%]">
            <div className="max-w-4xl">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#ECFDF5] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0F766E]">
                  {product.status}
                </span>
                <span className="rounded-full border border-[#d9ded7] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                  Private workspace
                </span>
              </div>

              <Image
                src={product.logo}
                alt="AXOS logo"
                width={120}
                height={120}
                className="mb-8 h-[5.5rem] w-[5.5rem] rounded-3xl object-contain"
                priority
              />

              <h1 className="mb-6 text-4xl font-semibold leading-tight text-[#111827] sm:text-5xl lg:text-6xl">
                {product.headline}
              </h1>
              <p className="max-w-3xl font-lora text-lg leading-8 text-slate-700 md:text-xl">
                {product.summary} Built for teams that want daily work,
                sensitive information, and AI support in one controlled and
                auditable environment.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={meetingLinks.axos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#100E0C] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(16,14,12,0.18)] transition hover:bg-[#1C1714]"
                >
                  Book AXOS strategy session
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="https://axos.scotitech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cfd7cf] bg-white/80 px-7 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
                >
                  Open AXOS workspace
                  <ArrowRight className="size-4" />
                </a>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full border border-[#cfd7cf] bg-white/80 px-7 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
                >
                  Compare products
                </Link>
              </div>
            </div>

            <div className="rounded-[1.25rem] border border-[#111827]/15 bg-[#100E0C] p-3 shadow-[0_28px_80px_rgba(16,14,12,0.24)]">
              <div className="overflow-hidden rounded-[1rem] border border-white/10 bg-slate-950">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="size-2.5 rounded-full bg-[#FF6467]" />
                  <span className="size-2.5 rounded-full bg-[#F7C948]" />
                  <span className="size-2.5 rounded-full bg-[#00C9A7]" />
                  <span className="ml-auto text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                    AXOS dashboard
                  </span>
                </div>
                <div className="relative aspect-[1.85/1] bg-slate-950">
                  <Image
                    src="/images/products/axos/dashboard.jpg"
                    alt="AXOS private workspace dashboard with mail, calendar, tasks, activity, and schedule modules"
                    fill
                    sizes="(min-width: 1280px) 46vw, 100vw"
                    className="object-cover object-[center_42%]"
                    priority
                  />
                </div>
                <div className="grid gap-px bg-white/10 text-white sm:grid-cols-5">
                  {["Mail", "Calendar", "Tasks", "Files", "AI"].map((item) => (
                    <div key={item} className="bg-[#100E0C] px-3 py-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
                        Module
                      </p>
                      <p className="mt-1 text-sm font-semibold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="grid gap-8 rounded-[1.25rem] border border-[#d9ded7] bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.07)] lg:grid-cols-[48%_52%] lg:p-8">
            <div className="overflow-hidden rounded-[1rem] border border-[#111827]/10 bg-[#100E0C]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="size-2.5 rounded-full bg-[#FF6467]" />
                <span className="size-2.5 rounded-full bg-[#F7C948]" />
                <span className="size-2.5 rounded-full bg-[#00C9A7]" />
                <span className="ml-auto text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                  Secure entry
                </span>
              </div>
              <div className="relative aspect-[1.85/1]">
                <Image
                  src="/images/products/axos/login.jpg"
                  alt="AXOS self-hosted workspace login with SSO, email sign-in, and deployment trust markers"
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover object-[center_44%]"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
                Secure workspace access
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-[#111827] md:text-5xl">
                One workspace for secure daily operations.
              </h2>
              <p className="mt-5 font-lora text-lg leading-8 text-slate-700">
                AXOS brings daily modules, protected sign-in, and deployment
                options into one workspace. Teams can manage communication,
                scheduling, task visibility, and policy-aligned AI assistance
                while keeping operating context out of disconnected tools.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "SSO-ready workspace access",
                  "Private-cloud, self-hosted, and on-premises paths",
                  "Unified module navigation",
                  "Policy-aligned AI for daily work",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#d9ded7] bg-[#f8fafc] p-4"
                  >
                    <CheckCircle2 className="mb-3 size-5 text-[#0F766E]" />
                    <p className="font-semibold leading-6 text-slate-950">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 pt-2">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="mb-8 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              Core modules
            </p>
            <h2 className="text-3xl font-semibold text-[#111827] md:text-5xl">
              Every module. One operating context. One deployment.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {workspaceModules.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.15rem] border border-[#d9ded7] bg-white p-6 shadow-[0_18px_42px_rgba(15,23,42,0.05)]"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[#0F766E]">
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

      <section className="pb-16">
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-[#111827] md:text-5xl">
                One environment instead of multiple disconnected tools.
              </h2>
            </div>
            <p className="font-lora text-lg leading-8 text-slate-700">
              Most teams run communication, files, tasks, and knowledge across
              Slack, Notion, Google Drive, and Outlook. Sensitive context leaks
              across all of them. AXOS brings these into one controlled workspace
              with deployment options that match how seriously your team treats its data.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {onPremAiBenefits.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.15rem] border border-[#d9ded7] bg-white p-6 shadow-[0_18px_42px_rgba(15,23,42,0.05)]"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[#0F766E]">
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

      <section className="pb-16">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="rounded-[1.25rem] border border-[#d9ded7] bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.07)] sm:p-8">
            <div className="mb-8 max-w-4xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                Who uses AXOS
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-[#111827] md:text-5xl">
                Regulated teams that want one workspace, not multiple tools.
              </h2>
              <p className="mt-5 font-lora text-lg leading-8 text-slate-700">
                AXOS is built for organisations that handle sensitive work and
                want communication, files, tasks, and AI in one place they
                control. The strongest fit is usually a team that already knows
                their current tool spread is a liability.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
              {industryExamples.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.1rem] border border-[#d9ded7] bg-[#f8fafc] p-5"
                >
                  <div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-white text-[#0F766E] shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
                    <item.icon className="size-5" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="font-lora leading-7 text-slate-700">
                    {item.description}
                  </p>
                  <p className="mt-4 rounded-2xl border border-[#d9ded7] bg-white p-4 text-sm font-semibold leading-6 text-slate-800">
                    {item.example}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Private Evaluation Explainer */}
      <section className="pb-0 pt-2">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="rounded-[1.25rem] border border-[#0F766E]/20 bg-[#ECFDF5] p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[56%_44%] lg:items-center">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0F766E]">
                  What &ldquo;Private evaluation&rdquo; means
                </p>
                <h2 className="text-2xl font-semibold text-[#111827]">
                  AXOS is in active deployment. Evaluation is scoped per team and moves fast.
                </h2>
                <p className="mt-4 font-lora leading-7 text-slate-700">
                  Private evaluation means access is scoped per team, not open-sign-up. You book a
                  session, we review your operating context (team size, data posture, deployment
                  preference), and map the right path. Most evaluations reach a clear recommendation
                  within the first session.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: "How to qualify", value: "Book a 45-min strategy session" },
                  { label: "What happens next", value: "We map deployment fit and next steps" },
                  { label: "Pricing", value: "Discussed in session based on deployment model" },
                  { label: "Timeline", value: "Evaluation to access in days, not months" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-[#0F766E]/15 bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0F766E]">
                      {item.label}
                    </p>
                    <p className="mt-1.5 font-semibold leading-6 text-slate-900">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ECE8DA] py-16">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="grid gap-8 xl:grid-cols-[42%_58%]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                Deployment model
              </p>
              <h2 className="mb-5 text-3xl font-semibold text-[#111827] md:text-5xl">
                Start lean, mature toward more ownership.
              </h2>
              <p className="font-lora text-lg leading-8 text-slate-700">
                AXOS supports staged adoption: start with hosted evaluation,
                then move into private-cloud, self-hosted, or on-premises
                deployment when data posture, team scale, or infrastructure
                requirements call for it.
              </p>
            </div>

            <div className="grid gap-4">
              {deploymentOptions.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-[1.1rem] border border-[#d9ded7] bg-white/90 p-5"
                >
                  <CloudCog className="mt-1 size-5 shrink-0 text-[#0F766E]" />
                  <p className="font-lora leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="overflow-hidden rounded-[1.5rem] border border-[#111827]/10 bg-[#100E0C] p-7 text-white shadow-[0_28px_80px_rgba(16,14,12,0.20)] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[58%_42%] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#5EEAD4]">
                  AXOS rollout review
                </p>
                <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                  Move from product interest to a real deployment conversation.
                </h2>
                <p className="mt-5 max-w-3xl font-lora text-lg leading-8 text-slate-300">
                  Complete a focused rollout brief for your business workflow,
                  deployment model, identity setup, data sources, and first AI
                  use case. The result is a sharper AXOS session and a clearer
                  path to evaluation.
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-[1.15rem] border border-white/10 bg-white/[0.06] p-5 sm:flex-row lg:flex-col">
                <a
                  href="https://axos.scotitech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F766E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0d6b63]"
                >
                  Go to AXOS
                  <ArrowRight className="size-4" />
                </a>
                <Link
                  href="/products/axos/deployment-discovery"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#ECFDF5]"
                >
                  Complete rollout brief
                  <ArrowRight className="size-4" />
                </Link>
                <a
                  href={meetingLinks.axos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Book AXOS session
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CalendarCheck2,
  CheckCircle2,
  CloudCog,
  FileLock2,
  MessageSquareText,
  ServerCog,
  ShieldCheck,
  SquareKanban,
} from "lucide-react";
import { flagshipProducts } from "@/lib/products";
import { meetingLinks } from "@/lib/scheduling";

const product = flagshipProducts.find((item) => item.slug === "axos");

export const metadata = {
  title: "AXOS | ScotiTech Solutions",
  description:
    "AXOS is a private workspace product for communication, files, tasks, planning, and policy-aligned AI-assisted work with hosted, private-cloud, self-hosted, and on-premises deployment paths.",
};

const workspaceModules = [
  {
    title: "Communication",
    description: "Chat, updates, and context for teams that need fewer scattered tools.",
    icon: MessageSquareText,
  },
  {
    title: "Files and storage",
    description: "A clearer workspace for documents, shared assets, and working files.",
    icon: FileLock2,
  },
  {
    title: "Tasks and planning",
    description: "Boards, notes, and ownership views for day-to-day execution.",
    icon: SquareKanban,
  },
  {
    title: "Governance-first AI",
    description: "Policy-aligned assistance inside the workspace where operating context already lives.",
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
  "Keep communication, files, and work status closer together",
  "Reduce the number of places where operating context disappears",
  "Give teams a private workspace model that can mature with privacy needs",
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
                {product.summary} It is built for teams that want daily work,
                sensitive information, and AI support to operate inside a
                clearer, more controlled environment.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={meetingLinks.axos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0E1116] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(14,17,22,0.18)] transition hover:bg-[#1C2530]"
                >
                  Book AXOS strategy session
                  <ArrowRight className="size-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cfd7cf] bg-white/80 px-7 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
                >
                  Request AXOS access
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full border border-[#cfd7cf] bg-white/80 px-7 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
                >
                  Compare products
                </Link>
              </div>
            </div>

            <div className="rounded-[1.25rem] border border-[#111827]/15 bg-[#0E1116] p-3 shadow-[0_28px_80px_rgba(14,17,22,0.24)]">
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
                <div className="grid gap-px bg-white/10 text-white sm:grid-cols-3">
                  {["Mail", "Calendar", "Tasks"].map((item) => (
                    <div key={item} className="bg-[#0E1116] px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                        Module
                      </p>
                      <p className="mt-1 font-semibold">{item}</p>
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
            <div className="overflow-hidden rounded-[1rem] border border-[#111827]/10 bg-[#0E1116]">
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

      <section className="pb-16">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="rounded-[1.25rem] border border-[#111827]/10 bg-[#0E1116] p-7 text-white shadow-[0_28px_80px_rgba(14,17,22,0.20)] sm:p-10">
            <div className="mb-8 grid gap-6 lg:grid-cols-[44%_56%] lg:items-end">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#5EEAD4]">
                  Governance-first AI posture
                </p>
                <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                  Private workspace AI with clearer deployment control.
                </h2>
              </div>
              <p className="font-lora text-lg leading-8 text-slate-300">
                AXOS supports teams that want AI assistance inside a controlled
                workspace, with deployment choices that can reflect
                infrastructure, data posture, and internal policy requirements.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {enterpriseControls.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.1rem] border border-white/10 bg-white/[0.06] p-5"
                >
                  <item.icon className="mb-5 size-6 text-[#5EEAD4]" />
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

      <section className="pb-16">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="mb-8 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              Core modules
            </p>
            <h2 className="text-3xl font-semibold text-[#111827] md:text-5xl">
              Daily work modules with one operating context.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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

      <section className="py-16">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="grid gap-8 lg:grid-cols-[45%_55%]">
            <div className="rounded-[1.25rem] border border-[#d9ded7] bg-[#0E1116] p-7 text-white shadow-[0_28px_80px_rgba(14,17,22,0.20)] sm:p-9">
              <CalendarCheck2 className="mb-8 size-9 text-[#5EEAD4]" />
              <h2 className="text-3xl font-semibold md:text-4xl">
                Evaluate AXOS against your operating model.
              </h2>
              <p className="mt-5 font-lora leading-8 text-slate-300">
                A workspace review covers team workflow, deployment
                expectations, data sensitivity, and the systems AXOS needs to
                sit beside.
              </p>
            </div>

            <div className="grid gap-4">
              {operatingPrinciples.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.1rem] border border-[#d9ded7] bg-white p-5"
                >
                  <CheckCircle2 className="mb-4 size-5 text-[#0F766E]" />
                  <p className="font-semibold leading-7 text-slate-950">
                    {item}
                  </p>
                </div>
              ))}
              <div className="rounded-[1.1rem] border border-[#d9ded7] bg-[#f8fafc] p-5">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Buyer
                </p>
                <p className="font-lora leading-7 text-slate-700">
                  {product.buyer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="rounded-[1.25rem] border border-[#d9ded7] bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[62%_38%] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
                  Private evaluation
                </p>
                <h2 className="text-3xl font-semibold text-[#111827] md:text-5xl">
                  See whether AXOS fits your operating model.
                </h2>
                <p className="mt-5 max-w-3xl font-lora text-lg leading-8 text-slate-700">
                  Share your current tools, team workflow, data expectations,
                  and deployment preference. ScotiTech will map the right
                  evaluation path.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#0E1116] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1C2530]"
                >
                  Request access
                </Link>
                <Link
                  href="/products/appdeploy"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
                >
                  View AppDeploy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  ServerCog,
  ShieldCheck,
} from "lucide-react";
import AxosDeploymentDiscovery from "@/components/products/axos/AxosDeploymentDiscovery";
import { meetingLinks } from "@/lib/scheduling";

export const metadata = {
  title: "AXOS Rollout Review | ScotiTech Solutions",
  description:
    "Request an AXOS rollout review for secure workspace deployment, controlled AI use cases, identity planning, data sources, and on-premises readiness.",
};

const outcomeCards = [
  {
    title: "Deployment recommendation",
    description:
      "A practical view of whether hosted, private-cloud, self-hosted, or on-premises deployment fits first.",
    icon: ServerCog,
  },
  {
    title: "Security starting point",
    description:
      "A clearer picture of identity, access, data sensitivity, and compliance considerations.",
    icon: ShieldCheck,
  },
  {
    title: "First AI workflow",
    description:
      "A focused business use case that can show value without over-expanding the rollout.",
    icon: ClipboardList,
  },
];

export default function AxosDeploymentDiscoveryPage() {
  return (
    <main className="bg-[#F7F7F5] text-[#111827]">
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(15,118,110,0.18),transparent_30%),radial-gradient(circle_at_85%_12%,rgba(37,99,235,0.10),transparent_28%)]" />
        <div className="relative z-10 mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <Link
            href="/products/axos"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-950"
          >
            <ArrowLeft className="size-4" />
            Back to AXOS
          </Link>

          <div className="grid gap-10 xl:grid-cols-[56%_44%] xl:items-end">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-[#0F766E]/20 bg-[#ECFDF5] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0F766E]">
                AXOS rollout review
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#111827] sm:text-5xl lg:text-6xl">
                Design a secure AI workspace rollout with the right controls from day one.
              </h1>
              <p className="mt-6 max-w-3xl font-lora text-lg leading-8 text-slate-700 md:text-xl">
                This page helps your team request a focused AXOS review. Share
                the business workflow, deployment preference, identity setup,
                and AI use case so the first conversation is specific and useful.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={meetingLinks.axos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#100E0C] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(16,14,12,0.18)] transition hover:bg-[#1C1714]"
                >
                  Book AXOS session
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="#axos-deployment-discovery"
                  className="inline-flex items-center justify-center rounded-full border border-[#cfd7cf] bg-white/80 px-7 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
                >
                  Complete rollout brief
                </a>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-[#111827]/10 bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-6">
              <div className="mb-5 rounded-[1.15rem] bg-[#100E0C] p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5EEAD4]">
                  After you submit
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  You get a sharper AXOS conversation.
                </h2>
                <p className="mt-3 font-lora leading-7 text-slate-300">
                  The brief gives enough context to discuss feasibility,
                  deployment path, and the strongest first workflow.
                </p>
              </div>

              <div className="grid gap-3">
                {outcomeCards.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-[#f8fafc] p-4"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[#0F766E]">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-950">{item.title}</p>
                      <p className="mt-1 font-lora text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#0F766E]/15 bg-[#ECFDF5] p-4">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#0F766E]" />
                <p className="font-lora text-sm leading-6 text-slate-700">
                  Best results come from one real workflow: for example policy
                  search, case-note summaries, operational reporting, or secure
                  internal knowledge retrieval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AxosDeploymentDiscovery />
    </main>
  );
}

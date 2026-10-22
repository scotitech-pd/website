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
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Plan an AXOS rollout",
  description:
    "Request an AXOS rollout review: secure workspace deployment, controlled AI use cases, identity planning, data sources and on-premises readiness.",
  path: "/products/axos/deployment-discovery",
});

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
    <div className="bg-surface-muted text-strong">
      <section className="relative overflow-hidden py-14 sm:py-20">
                <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <Link
            href="/products/axos"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-950"
          >
            <ArrowLeft className="size-4" />
            Back to AXOS
          </Link>

          <div className="grid gap-10 xl:grid-cols-[minmax(0,56fr)_minmax(0,44fr)] xl:items-end">
            <div>
              <p className="t-eyebrow mb-4">
                AXOS rollout review
              </p>
              <h1 className="t-display max-w-4xl">
                Design a secure AI workspace rollout with the right controls from day one.
              </h1>
              <p className="t-lead mt-6 max-w-3xl">
                This page helps your team request a focused AXOS review. Share
                the business workflow, deployment preference, identity setup,
                and AI use case so the first conversation is specific and useful.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={meetingLinks.axos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand px-6 text-[15px] font-semibold text-white transition hover:bg-brand-strong"
                >
                  Book AXOS session
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="#axos-deployment-discovery"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-hairline-strong bg-surface px-6 text-[15px] font-semibold text-strong transition hover:bg-white"
                >
                  Complete rollout brief
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-hairline bg-surface p-5 shadow-card sm:p-6">
              <div className="mb-5 rounded-lg bg-ink p-5 text-white">
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
                    className="flex gap-4 rounded-lg border border-hairline bg-surface-muted p-4"
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
    </div>
  );
}

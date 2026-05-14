import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { flagshipProducts, supportingProducts } from "@/lib/products";

const caseStudySteps = [
  "ClarityPath exposed the need for a deliberate private distribution route.",
  "AppDeploy turns that route into a branded app delivery workspace with clearer access and install guidance.",
  "AXOS expands the portfolio into private workspaces for daily operations, communication, and policy-aligned AI support.",
];

export default function ProductPlatformStory() {
  return (
    <section className="relative overflow-hidden bg-[#F7F7F5] py-14 md:py-20">
      <div className="relative z-10 mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
            Product Company
          </p>
          <h2 className="mb-4 text-3xl font-semibold text-[#111827] md:text-5xl">
            A portfolio shaped by real rollout and workspace problems.
          </h2>
          <p className="font-lora text-lg leading-8 text-slate-700">
            AppDeploy, AXOS, and ClarityPath each serve a defined product job:
            controlled app delivery, private team workspaces, and guided
            decision support.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {flagshipProducts.map((platform) => (
            <div
              key={platform.name}
              className="rounded-[1.15rem] border border-[#d9ded7] bg-white p-7 shadow-[0_22px_60px_rgba(15,23,42,0.06)]"
            >
              <p
                className="mb-3 text-sm font-semibold uppercase tracking-[0.18em]"
                style={{ color: platform.theme.color }}
              >
                {platform.eyebrow}
              </p>
              <h3 className="mb-4 text-3xl font-semibold text-[#111827]">
                {platform.name}
              </h3>
              <p className="font-lora text-base leading-8 text-slate-700">
                {platform.summary}
              </p>

              <div className="mt-6 grid gap-3">
                {platform.outcomes.slice(0, 3).map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-center gap-3 rounded-2xl border border-[#d9ded7] bg-[#f8fafc] px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    <CheckCircle2
                      className="size-4 shrink-0"
                      style={{ color: platform.theme.color }}
                    />
                    {bullet}
                  </div>
                ))}
              </div>

              <Link
                href={platform.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950"
              >
                View {platform.name}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[1.15rem] border border-[#d9ded7] bg-[#100E0C] p-7 text-white shadow-[0_30px_80px_rgba(16,14,12,0.22)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#FDE68A]">
                Private Product
              </p>
              <h3 className="mb-4 text-2xl font-semibold md:text-4xl">
                {supportingProducts[0].name} shows how focused products reach the right users.
              </h3>
              <p className="font-lora text-base leading-8 text-slate-300">
                {supportingProducts[0].summary} Its review and distribution
                journey helped shape a more deliberate product approach around
                access, context, and user expectations.
              </p>
            </div>

            <div className="grid gap-4">
              {caseStudySteps.map((step) => (
                <div
                  key={step}
                  className="rounded-[1rem] border border-white/10 bg-white/5 px-5 py-5 font-lora text-base leading-7 text-slate-200"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

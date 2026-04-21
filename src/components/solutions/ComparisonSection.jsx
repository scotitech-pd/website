"use client";

import Link from "next/link";

const rows = [
  {
    label: "Primary job",
    appdeploy:
      "Internal app distribution built around Apple Business workflows.",
    opsly:
      "Private operational workspace for teams that want more control over day-to-day systems and internal tooling.",
  },
  {
    label: "Core value",
    appdeploy:
      "Simplify private iOS delivery, release operations, access control, and install visibility.",
    opsly:
      "Reduce SaaS sprawl, keep operational workflows closer to the organisation, and support self-hosted control.",
  },
  {
    label: "Environment model",
    appdeploy:
      "Cloud and Enterprise paths, with Apple Business aligned onboarding and rollout structure.",
    opsly:
      "Self-hosted and private-workspace direction for organisations that want greater infrastructure and workflow ownership.",
  },
  {
    label: "Who it serves best",
    appdeploy:
      "Teams managing internal apps for employees, testers, partners, or controlled private rollout groups.",
    opsly:
      "Teams that need an internal workspace for operations, coordination, visibility, and admin-led control.",
  },
  {
    label: "Buyer priority",
    appdeploy:
      "Teams looking to improve private iOS rollout, access, and release workflows.",
    opsly:
      "Teams looking to bring internal tooling, coordination, and operational control into a more private environment.",
  },
];

export default function AppDeployComparison() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 text-[#0F172A]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#F8FAFC_0%,#EEF2FF_48%,#E0F2FE_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.06),transparent_24%)]" />

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="max-w-4xl mb-12">
          <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-[#4F46E5]/80 mb-3">
            Platform Comparison
          </p>
          <h2 className="text-3xl md:text-5xl font-karla font-semibold mb-5">
            How AppDeploy and Opsly differ
          </h2>
          <p className="text-base md:text-xl text-slate-700 font-lora leading-8">
            Both platforms are product-led, but they serve different operating
            needs. This view helps buyers understand which path fits their
            organisation more closely.
          </p>
        </div>

        <div className="hidden lg:block rounded-[2rem] border border-white/80 bg-white/85 backdrop-blur-sm overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
          <table className="min-w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#0F172A] text-white">
                <th className="w-[20%] px-6 py-5 font-semibold font-karla border-r border-white/10">
                  Product Lens
                </th>
                <th className="w-[40%] px-6 py-5 font-semibold font-karla border-r border-white/10">
                  AppDeploy
                </th>
                <th className="w-[40%] px-6 py-5 font-semibold font-karla">
                  Opsly
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.label}
                  className={`border-t border-slate-200 ${
                    index % 2 === 0 ? "bg-white" : "bg-slate-50/70"
                  }`}
                >
                  <td className="px-6 py-5 font-semibold font-karla text-slate-900 border-r border-slate-200">
                    {row.label}
                  </td>
                  <td className="px-6 py-5 text-slate-700 font-lora leading-7 border-r border-slate-200 bg-indigo-50/40">
                    {row.appdeploy}
                  </td>
                  <td className="px-6 py-5 bg-cyan-50/60 text-slate-800 font-lora leading-7 border-l-4 border-cyan-500">
                    {row.opsly}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:hidden">
          {rows.map((row) => (
            <div
              key={row.label}
              className="rounded-[1.5rem] border border-slate-200 bg-white/90 backdrop-blur-sm p-6 shadow-[0_18px_40px_rgba(15,23,42,0.07)]"
            >
              <h3 className="text-xl font-semibold font-karla text-slate-900 mb-4">
                {row.label}
              </h3>

              <div className="space-y-4">
                <div className="rounded-2xl border border-indigo-200 bg-indigo-50/70 px-4 py-4">
                  <p className="text-xs font-karla font-semibold uppercase tracking-[0.14em] text-[#4F46E5] mb-2">
                    AppDeploy
                  </p>
                  <p className="text-slate-700 font-lora leading-7">
                    {row.appdeploy}
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-200 bg-cyan-50/70 px-4 py-4">
                  <p className="text-xs font-karla font-semibold uppercase tracking-[0.14em] text-cyan-700 mb-2">
                    Opsly
                  </p>
                  <p className="text-slate-700 font-lora leading-7">
                    {row.opsly}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-5xl rounded-[1.75rem] border border-white/80 bg-white/85 backdrop-blur-sm px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.07)]">
          <p className="text-slate-700 font-lora leading-8">
            AppDeploy fits best when internal distribution is the immediate
            problem. Opsly fits best when the organisation needs a more private
            operational environment.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/products/appdeploy"
              className="inline-flex items-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold font-karla text-white hover:bg-slate-900 transition-colors"
            >
              View AppDeploy
            </Link>
            <Link
              href="/products/opsly"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold font-karla text-slate-900 hover:border-slate-400 transition-colors"
            >
              View Opsly
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

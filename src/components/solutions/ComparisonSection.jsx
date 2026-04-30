"use client";

import Link from "next/link";

const rows = [
  {
    label: "Primary goal",
    appdeploy:
      "Internal app distribution built around Apple Business workflows.",
    axos:
      "Private operational workspace for teams that want more control over day-to-day systems and internal tooling.",
  },
  {
    label: "Best for",
    appdeploy:
      "IT and admin teams managing internal app rollout, release cadence, and controlled access.",
    axos:
      "Cross-functional teams running internal operations, coordination, and execution inside a private workspace.",
  },
  {
    label: "Core outcome",
    appdeploy:
      "Faster, clearer internal app delivery with better release and install visibility.",
    axos:
      "Stronger collaboration, accountability, and operational clarity across internal teams.",
  },
  {
    label: "Governance and control",
    appdeploy:
      "Emphasises release/version governance, distribution control, and access management for internal apps.",
    axos:
      "Emphasises workspace-level governance, role-based structure, and operational transparency.",
  },
  {
    label: "Time-to-value",
    appdeploy:
      "Quick impact when internal app distribution is the immediate priority.",
    axos:
      "Compounding value as teams standardise daily coordination and internal workflows.",
  },
];

export default function AppDeployComparison() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] py-14 sm:py-20 text-[#0F172A]">

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="max-w-4xl mb-12">
          <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-[#4F46E5]/80 mb-3">
            Platform Comparison
          </p>
          <h2 className="text-3xl md:text-5xl font-karla font-semibold mb-5">
            Which product fits your workflow: AppDeploy or AXOS?
          </h2>
          <p className="text-base md:text-xl text-slate-700 font-lora leading-8">
            Both platforms improve internal operations. AppDeploy focuses on
            secure internal app distribution, while AXOS focuses on private
            operational workspace workflows.
          </p>
        </div>

        <div className="hidden lg:block rounded-[2rem] border border-slate-200 bg-white overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
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
                  AXOS
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
                    {row.axos}
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
              className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.07)]"
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
                    AXOS
                  </p>
                  <p className="text-slate-700 font-lora leading-7">
                    {row.axos}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-5xl rounded-[1.75rem] border border-slate-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.07)]">
          <p className="text-slate-700 font-lora leading-8">
            Many organisations use AppDeploy and AXOS together: AppDeploy
            handles secure app delivery, while AXOS manages the operational
            workflows around rollout, adoption, and internal execution.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/products/appdeploy"
              className="inline-flex items-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold font-karla text-white hover:bg-slate-900 transition-colors"
            >
              Need internal app distribution? → Explore AppDeploy
            </Link>
            <Link
              href="/products/axos"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold font-karla text-slate-900 hover:border-slate-400 transition-colors"
            >
              Need a secure operational workspace? → Explore AXOS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

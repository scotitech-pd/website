"use client";

import { AlertCircle, ShieldCheck, Zap } from "lucide-react";

const flow = [
  {
    icon: AlertCircle,
    title: "The distribution path exists, but the experience is still fragmented",
    body: "Private iOS distribution often creates operational overhead: app delivery instructions, redemption handling, rollout coordination, and install visibility all become separate tasks.",
  },
  {
    icon: ShieldCheck,
    title: "Apple Business Manager covers the approved distribution model",
    body: "The compliance path is already there. What is usually missing is a clearer operational surface for teams that need a more manageable internal rollout experience.",
  },
  {
    icon: Zap,
    title: "AppDeploy adds the layer enterprise teams actually need",
    body: "It wraps the underlying workflow in a branded, trackable environment so releases, groups, installs, and communication can be handled with much less friction.",
  },
];

export default function FlowSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 text-[#0F172A]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#F8FAFC_0%,#EEF2FF_48%,#E0F2FE_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.06),transparent_24%)]" />

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="max-w-4xl mb-12">
          <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-[#4F46E5]/80 mb-3">
            Workflow Fit
          </p>
          <h2 className="text-3xl md:text-5xl font-karla font-semibold mb-5">
            Why AppDeploy exists in the enterprise distribution workflow
          </h2>
          <p className="text-base md:text-xl text-slate-700 font-lora leading-8">
            AppDeploy is not a replacement for Apple’s approved route. It is
            the operational layer that makes the route more usable for teams
            that need control, clarity, and smoother rollout execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {flow.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-[1.75rem] border border-slate-200 bg-white/90 backdrop-blur-sm px-6 py-7 shadow-[0_18px_40px_rgba(15,23,42,0.07)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 font-karla leading-7">
                  {item.title}
                </h3>
                <p className="text-slate-600 font-lora leading-7">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

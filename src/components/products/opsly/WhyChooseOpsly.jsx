"use client";

const reasons = [
  {
    title: "One environment instead of tool sprawl",
    desc: "AXOS reduces the operational friction that comes from forcing teams to move between disconnected mail, storage, chat, planning, and note-taking systems.",
  },
  {
    title: "A stronger privacy posture",
    desc: "The platform is positioned for teams that want better control over where work happens, how access is structured, and how internal data and AI context are handled.",
  },
  {
    title: "Flexible enough for startups and enterprise teams",
    desc: "Hosted, private cloud, and self-hosted models give organisations room to align AXOS with budget, technical maturity, policy, and rollout ownership.",
  },
  {
    title: "AI that lives inside the operating layer",
    desc: "AXOS is designed as an operating layer for real teams, with practical workflows, clearer coordination, and AI that supports execution inside the environment rather than outside it.",
  },
];

export default function WhyChooseOpsly() {
  return (
    <section className="relative py-16 sm:py-20 bg-[#070B14] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(52,211,255,0.12),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(91,79,207,0.16),transparent_28%)]" />

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="max-w-4xl mb-12">
          <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-slate-400 mb-3">
            Why AXOS
          </p>
          <h2 className="text-3xl md:text-5xl font-karla font-semibold mb-5">
            The value is in how the workspace behaves, not just what it contains
          </h2>
          <p className="text-base md:text-xl font-lora leading-8 text-slate-300">
            The case for AXOS is straightforward: a more coherent digital
            environment for teams that want AI built directly into the tools
            they use every day, stronger data control, and less dependence on
            fragmented third-party tooling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] px-6 py-7 shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/10 text-white font-karla font-bold">
                  0{index + 1}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
              </div>
              <h3 className="text-2xl font-karla font-semibold text-white mb-3 leading-8">
                {reason.title}
              </h3>
              <p className="text-slate-300 font-lora leading-8">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

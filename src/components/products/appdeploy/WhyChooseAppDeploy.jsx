export default function WhyChooseAppDeploy() {
  const reasons = [
    {
      title: "Built around a real enterprise distribution path",
      desc: "AppDeploy is positioned around private iOS distribution workflows organisations already need to manage, rather than around a generic app-hosting story.",
    },
    {
      title: "Less friction for internal users",
      desc: "The product improves the install and access experience for employees, partners, and testers who should not have to navigate a confusing rollout process.",
    },
    {
      title: "Operational clarity for release teams",
      desc: "Distribution becomes easier to coordinate when builds, groups, rollout activity, and install visibility sit inside one controlled workspace.",
    },
    {
      title: "A lighter alternative to heavier internal tooling",
      desc: "For organisations that do not want to default every use case to a full MDM programme, AppDeploy provides a more focused operational model.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 text-[#0F172A]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#F8FAFC_0%,#EEF2FF_48%,#E0F2FE_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.06),transparent_24%)]" />

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="max-w-4xl mb-12">
          <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-[#4F46E5]/80 mb-3">
            Why AppDeploy
          </p>
          <h2 className="text-3xl md:text-5xl font-karla font-semibold mb-5">
            A more usable model for private iOS rollout
          </h2>
          <p className="text-base md:text-xl text-slate-700 font-lora leading-8">
            The value of AppDeploy is not just technical distribution. It is
            the operational structure it gives to enterprise teams that need a
            better way to manage internal releases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white/90 backdrop-blur-sm px-6 py-7 shadow-[0_18px_40px_rgba(15,23,42,0.07)]"
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F172A] text-white font-karla font-bold">
                  0{index + 1}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3 font-karla leading-8">
                {reason.title}
              </h3>
              <p className="text-slate-600 font-lora leading-8">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

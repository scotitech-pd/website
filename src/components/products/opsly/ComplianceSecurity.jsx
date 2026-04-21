const controls = [
  {
    title: "Encryption in transit and at rest",
    description:
      "Protect operational data, cloud storage, and internal AI context with strong baseline controls across storage and transfer layers.",
  },
  {
    title: "Access and permission design",
    description:
      "Apply environment-level control over who can access what, how administrative rights are assigned, and how workspace roles are managed.",
  },
  {
    title: "Hosting model alignment",
    description:
      "Choose a deployment path that supports startup agility or enterprise policy, infrastructure expectations, and operational ownership.",
  },
  {
    title: "Rollout-ready governance",
    description:
      "Bring security review, workspace setup, and go-live planning into one implementation process instead of treating them as separate concerns.",
  },
];

export default function ComplianceSecurity() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] text-white py-16 sm:py-20">
      <div className="absolute inset-0 bg-[url('/images/products/opsly/bgcompliance.png')] bg-cover bg-center opacity-22" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/92 via-[#0F172A]/86 to-[#0B1220]/95" />

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="grid grid-cols-1 xl:grid-cols-[38%_62%] gap-8 items-start">
          <div className="max-w-2xl">
            <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-slate-400 mb-3">
              Security and Compliance
            </p>
          <h2 className="text-3xl md:text-5xl font-karla font-semibold mb-5">
            Built to support enterprise review, not bypass it
          </h2>
          <p className="text-base md:text-xl font-lora leading-8 text-slate-300">
            AXOS is designed for organisations that care about how the
            environment is deployed, governed, and controlled. That matters to
            enterprise teams, but it also matters to startups that want AI and
            operational tooling without giving away control of sensitive
            internal data.
          </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {controls.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] px-6 py-7 shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
              >
                <h3 className="text-2xl font-karla font-semibold text-white mb-3 leading-8">
                  {item.title}
                </h3>
                <p className="text-slate-300 font-lora leading-8">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

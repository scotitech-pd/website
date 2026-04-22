"use client";

const features = [
  {
    title: "One environment for core daily work",
    description:
      "AXOS is designed to bring mail, calendar, chat, tasks, notes, drive, and cloud storage into one controlled operating surface.",
    icon: "/images/products/opsly/platform.png",
  },
  {
    title: "AI built into the work layer",
    description:
      "Use AI for summaries, answers, document context, and routine support inside the environment teams already use every day.",
    icon: "/images/products/opsly/dashboard.png",
  },
  {
    title: "Private deployment options",
    description:
      "Run AXOS in hosted, private cloud, or self-hosted models depending on team maturity, budget, and data-control requirements.",
    icon: "/images/products/opsly/security.png",
  },
];

const capabilityGroups = [
  {
    title: "Operational core",
    items: ["Mail", "Calendar", "Tasks", "Notes"],
  },
  {
    title: "Team coordination",
    items: ["Chat", "Video", "Contacts", "Boards"],
  },
  {
    title: "Storage and intelligence",
    items: ["Drive", "Cloud storage", "AI assistant", "Document chat"],
  },
];

export default function OpslyFeaturesSection() {
  return (
    <section className="relative bg-[#f7f7f5] text-[#0F172A] py-16 sm:py-20">

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="max-w-4xl mb-12">
          <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-[#4F46E5]/80 mb-3">
            Core Environment
          </p>
          <h2 className="text-3xl md:text-5xl font-karla font-semibold mb-5 text-[#0F172A]">
            The strongest AXOS proof is the operating environment it brings together
          </h2>
          <p className="text-base md:text-xl font-lora leading-8 text-slate-700">
            AXOS makes the most sense when it is understood as one private
            environment for the core tools teams use every day, with AI built
            into that same work layer instead of bolted on elsewhere.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[48%_52%] gap-8 items-start">
          <div className="space-y-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900/5 border border-slate-200">
                  <img src={feature.icon} alt="" className="size-8 object-contain" />
                </div>
                <h3 className="text-2xl font-karla font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 font-lora leading-8">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-slate-900/80 bg-[#0F172A] p-6 sm:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.18)]">
            <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-slate-400 mb-5">
              What it brings together
            </p>

            <div className="space-y-5">
              {capabilityGroups.map((group, index) => (
                <div
                  key={group.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5B4FCF] via-[#4F74F3] to-[#34D3FF] text-sm font-karla font-bold text-white">
                      0{index + 1}
                    </span>
                    <h3 className="text-xl font-karla font-semibold text-white">
                      {group.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-karla text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

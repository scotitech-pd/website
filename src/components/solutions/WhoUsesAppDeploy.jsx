export default function WhoUsesAppDeploy() {
  const businessSolutions = [
    {
      title: "AppDeploy",
      desc: "For internal app distribution teams that need clearer release, access, and rollout workflows.",
    },
    {
      title: "AXOS",
      desc: "For organisations that want a more private operational workspace and stronger control over internal tooling.",
    },
    {
      title: "ClarityPath",
      desc: "For users who want a more reflective and structured digital planning experience.",
    },
  ];

  return (
    <section className="bg-[#0F172A] py-16 md:py-20 overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="relative max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full z-10">
        <div className="flex flex-col gap-6 mb-12">
          <div className="max-w-4xl">
            <p className="text-sm font-karla font-semibold uppercase tracking-[0.2em] text-cyan-300/85 mb-3">
              Portfolio Structure
            </p>
            <h2 className="text-3xl md:text-5xl font-karla font-semibold text-white mb-5">
              The portfolio should read in a clear order
            </h2>
            <p className="text-white/72 font-lora text-lg leading-8">
              The right hierarchy is simple: AppDeploy and AXOS first, then
              ClarityPath as a supporting product.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {businessSolutions.map((item, index) => (
            <div
              key={item.title}
              className="rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_18px_40px_rgba(2,6,23,0.22)]"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white text-sm font-semibold font-karla">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold text-white font-karla mb-3">
                {item.title}
              </h3>
              <p className="text-white/72 font-lora leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

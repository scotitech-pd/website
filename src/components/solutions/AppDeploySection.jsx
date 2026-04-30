import Link from "next/link";

const coreSolutions = [
  {
    name: "AppDeploy",
    eyebrow: "Core Platform",
    description:
      "A branded internal distribution platform built around Apple Business workflows, with clearer release visibility, employee access, and rollout control.",
    points: [
      "Internal iOS distribution with a clearer operational model",
      "Branded access paths for employees, partners, and rollout groups",
      "Cloud and Enterprise paths with defined onboarding direction",
    ],
    href: "/products/appdeploy",
    cta: "Explore AppDeploy",
  },
  {
    name: "AXOS",
    eyebrow: "Core Platform",
    description:
      "A private operational workspace for organisations that want more control over day-to-day systems, collaboration, and self-hosted workflow tooling.",
    points: [
      "Self-hosted workspace direction for teams that need more control",
      "Private operational tooling designed to reduce SaaS sprawl",
      "A clearer environment for internal coordination and admin workflows",
    ],
    href: "/products/axos",
    cta: "Explore AXOS",
  },
];

export default function AppDeploySection() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-16 md:py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_22%)]" />

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="max-w-4xl mb-10">
          <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-cyan-300/90 mb-4">
            Featured Platforms
          </p>
          <h2 className="text-3xl md:text-5xl font-karla font-semibold leading-tight">
            Two platforms, two different operational priorities
          </h2>
          <p className="mt-5 text-white/74 font-lora text-lg leading-8">
            AppDeploy and AXOS solve different problems, but both are designed
            for teams that want more control, clarity, and a better operating
            experience.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2 items-stretch">
          {coreSolutions.map((solution) => (
            <div
              key={solution.name}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 md:p-10 shadow-[0_24px_60px_rgba(2,6,23,0.22)]"
            >
              <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-cyan-300/90 mb-4">
                {solution.eyebrow}
              </p>
              <h3 className="text-3xl font-karla font-semibold leading-tight">
                {solution.name}
              </h3>
              <p className="mt-5 text-white/74 font-lora text-lg leading-8">
                {solution.description}
              </p>

              <div className="mt-8 grid gap-4">
                {solution.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.4rem] border border-white/10 bg-black/15 px-5 py-5"
                  >
                    <p className="text-white/80 font-lora leading-7">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href={solution.href}
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold font-karla text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  {solution.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

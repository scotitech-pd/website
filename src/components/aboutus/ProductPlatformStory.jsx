"use client";

const platforms = [
  {
    name: "AppDeploy",
    eyebrow: "Operational distribution layer",
    description:
      "AppDeploy grew out of a real internal distribution problem. It is now positioned as the branded operational layer around Apple Business based internal app delivery, giving teams clearer release control, access paths, and visibility.",
    bullets: [
      "Built around Apple Business workflows",
      "Branded internal distribution experience",
      "Designed for controlled private rollout",
    ],
  },
  {
    name: "Opsly",
    eyebrow: "Private operational workspace",
    description:
      "Opsly reflects the company’s second major direction: helping teams reduce tool sprawl through a more controlled, self-hosted workspace for daily operations, collaboration, and internal coordination.",
    bullets: [
      "Self-hosted workspace direction",
      "Focused on operational clarity and control",
      "Designed for organisations that need more ownership of their stack",
    ],
  },
];

const caseStudySteps = [
  "ClarityPath was originally intended as a public app, but that route proved to be the wrong fit for the product.",
  "After rejection from the public App Store, the team intentionally reframed distribution around Apple Business workflows instead of forcing a public-store outcome.",
  "That experience became practical evidence for why some apps are better suited to controlled internal or approved private distribution than a broad public listing.",
];

export default function ProductPlatformStory() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#F8FAFC_0%,#EEF2FF_46%,#E0F2FE_100%)] py-14 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_24%)]" />

      <div className="relative z-10 mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 font-karla text-sm font-semibold uppercase tracking-[0.2em] text-[#4F46E5]/80">
            Product Story
          </p>
          <h2 className="mb-4 font-karla text-3xl font-semibold text-[#0F172A] md:text-5xl">
            ScotiTech is being shaped by two main platform directions
          </h2>
          <p className="font-lora text-lg leading-8 text-slate-700">
            AppDeploy and Opsly represent the clearest commercial paths in the
            portfolio. Around them, products like ClarityPath help explain why
            the company is taking a more practical, controlled approach to
            product design and distribution.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-8 shadow-[0_22px_60px_rgba(15,23,42,0.08)] backdrop-blur"
            >
              <p className="mb-3 font-karla text-sm font-semibold uppercase tracking-[0.18em] text-[#4F46E5]/80">
                {platform.eyebrow}
              </p>
              <h3 className="mb-4 font-karla text-3xl font-semibold text-[#0F172A]">
                {platform.name}
              </h3>
              <p className="font-lora text-base leading-8 text-slate-700">
                {platform.description}
              </p>

              <div className="mt-6 grid gap-3">
                {platform.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-karla text-sm font-medium text-slate-700"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] border border-slate-800 bg-[#0F172A] p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.22)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 font-karla text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
                Case Study Angle
              </p>
              <h3 className="mb-4 font-karla text-2xl font-semibold md:text-4xl">
                ClarityPath helped prove that some apps are not meant for the public App Store
              </h3>
              <p className="font-lora text-base leading-8 text-slate-300">
                That outcome became part of the company’s product reasoning.
                Instead of treating rejection as failure, ScotiTech used it to
                validate a more appropriate distribution path through Apple
                Business and to sharpen the reason AppDeploy exists.
              </p>
            </div>

            <div className="grid gap-4">
              {caseStudySteps.map((step) => (
                <div
                  key={step}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-5 font-lora text-base leading-7 text-slate-200"
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

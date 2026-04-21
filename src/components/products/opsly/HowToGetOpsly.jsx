"use client";

const steps = [
  {
    number: "01",
    title: "Request Access",
    description:
      "Submit your organisation details and select the Enterprise path.",
  },
  {
    number: "02",
    title: "Discovery Call",
    description:
      "Confirm the use case, team structure, and deployment expectations.",
  },
  {
    number: "03",
    title: "Demo and Workflow Review",
    description:
      "Walk through the product and the internal workspace model your team needs.",
  },
  {
    number: "04",
    title: "Technical and Security Review",
    description:
      "Validate hosting preference, access controls, branding, and operational requirements.",
  },
  {
    number: "05",
    title: "Commercial Proposal",
    description:
      "Align on scope, onboarding model, and commercial terms.",
  },
  {
    number: "06",
    title: "Agreement and Payment",
    description:
      "Complete the required paperwork and payment arrangement for activation.",
  },
  {
    number: "07",
    title: "Deployment Planning",
    description:
      "Confirm rollout ownership, dependencies, and environment setup.",
  },
  {
    number: "08",
    title: "Workspace and Environment Setup",
    description:
      "Provision the hosted or self-hosted environment and configure the workspace.",
  },
  {
    number: "09",
    title: "Admin Onboarding",
    description:
      "Train the first admins on branding, releases, permissions, and user management.",
  },
  {
    number: "10",
    title: "Go-Live Support",
    description:
      "Support the initial rollout and stabilise the production handoff.",
  },
];

export default function HowToGetOpsly() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden text-[#0F172A]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#F8FAFC_0%,#EEF2FF_48%,#E0F2FE_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,79,207,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.10),transparent_22%)]" />

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="max-w-4xl mb-12">
          <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-[#4F46E5]/80 mb-3">
            Enterprise Onboarding
          </p>
          <h2 className="text-3xl md:text-5xl font-karla font-semibold mb-5 text-[#0F172A]">
            AXOS rollout is review-led, structured, and production-ready
          </h2>
          <p className="text-base md:text-xl font-lora leading-8 text-slate-700">
            Enterprise onboarding is handled as a guided rollout. We work
            through fit, technical requirements, commercial alignment, and
            deployment planning before the environment goes live.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[34%_66%] gap-8 items-start">
          <div className="rounded-[2rem] border border-white/80 bg-white/85 backdrop-blur-md p-6 sm:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-slate-500 mb-4">
              What We Review
            </p>
            <div className="space-y-4">
              {[
                "Use case and workspace fit",
                "Hosting and deployment model",
                "Access control and security expectations",
                "Commercial scope and rollout ownership",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-4"
                >
                  <p className="font-karla text-base text-slate-900">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group rounded-[1.75rem] border border-white/80 bg-white/85 backdrop-blur-md px-5 py-6 sm:px-6 sm:py-7 shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between gap-4 mb-5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5B4FCF] via-[#4F74F3] to-[#34D3FF] text-white font-karla font-bold">
                    {step.number}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                </div>

                <h3 className="text-xl font-semibold font-karla text-slate-900 mb-3 leading-7">
                  {step.title}
                </h3>
                <p className="text-slate-600 font-lora leading-7 text-[15px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

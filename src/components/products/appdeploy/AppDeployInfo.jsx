const highlights = [
  {
    title: "Branded organisation pages",
    description:
      "Present internal apps through organisation-specific branded access pages instead of relying on fragmented install instructions.",
  },
  {
    title: "Request access and approval flow",
    description:
      "Support controlled onboarding with request-access flow, verification, legal acceptance, and approval steps.",
  },
  {
    title: "Role-aware admin workspace",
    description:
      "Separate admin and superadmin responsibilities while keeping release, access, and branding workflows visible in one place.",
  },
  {
    title: "Billing and rollout visibility",
    description:
      "Track rollout status, subscription state, and operational actions through one internal distribution workspace.",
  },
];

export default function AppDeployInfo() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] py-16 sm:py-20 text-[#0F172A]">

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="max-w-4xl mb-12">
          <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-[#4F46E5]/80 mb-3">
            Current Live Scope
          </p>
          <h2 className="text-3xl md:text-5xl font-karla font-semibold mb-5">
            What AppDeploy already brings into one internal distribution flow
          </h2>
          <p className="text-base md:text-xl text-slate-700 font-lora leading-8">
            AppDeploy is strongest when presented as the branded operational
            layer around Apple Business based internal distribution. These are
            the parts of that workflow the product already helps organise more
            clearly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-8 items-start">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_18px_40px_rgba(15,23,42,0.07)]">
            <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-slate-500 mb-5">
              Why this matters
            </p>
            <div className="space-y-5 text-slate-700 font-lora leading-8">
              <p>
                Many internal app workflows are technically valid but
                operationally awkward. Teams end up managing access, branding,
                approvals, release updates, and install communication in
                separate places.
              </p>
              <p>
                AppDeploy proves its value when those steps are brought into a
                more coherent product surface without pretending to replace the
                underlying Apple route.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white px-6 py-7 shadow-[0_18px_40px_rgba(15,23,42,0.07)]"
              >
                <h3 className="text-xl font-semibold font-karla text-slate-900 mb-3 leading-7">
                  {item.title}
                </h3>
                <p className="text-slate-600 font-lora leading-7 text-[15px]">
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

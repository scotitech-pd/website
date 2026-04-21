const trustSignals = [
  "Privacy-conscious product design",
  "Review-led onboarding for commercial rollout",
  "Focused products with clearer operational scope",
];

const TrustAndCompliance = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#F8FAFC_0%,#EEF2FF_48%,#E0F2FE_100%)] py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_24%)]" />

      <div className="relative z-10 mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <p className="mb-3 font-karla text-sm font-semibold uppercase tracking-[0.2em] text-[#4F46E5]/80">
              Trust and Delivery
            </p>
            <h2 className="mb-5 font-karla text-3xl font-semibold leading-tight text-[#0F172A] md:text-5xl">
              Practical products need a practical trust model.
            </h2>
            <p className="max-w-2xl font-lora text-lg leading-8 text-slate-700">
              ScotiTech is building focused products for internal distribution,
              private operational tooling, accessibility workflows, and
              structured decision support. The trust layer should feel equally
              focused: clear scope, measured claims, and product choices shaped
              by real operational needs.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {trustSignals.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 font-karla text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800 bg-[#0F172A] p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.22)]">
            <p className="mb-3 font-karla text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
              Operating Principles
            </p>
            <h3 className="mb-5 font-karla text-2xl font-semibold md:text-3xl">
              Built to stay clear, controlled, and commercially usable.
            </h3>
            <div className="space-y-4 font-lora text-base leading-7 text-slate-300">
              <p>
                We do not position every product as a universal platform. Each
                one is framed around the operational problem it is actually
                designed to solve.
              </p>
              <p>
                That discipline matters commercially. It creates clearer buyer
                expectations, better onboarding conversations, and a product
                story that holds up under real scrutiny.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAndCompliance;

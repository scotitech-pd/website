const features = [
  {
    img: "/images/products/appdeploy/oneclick.png",
    title: "Guided install flow",
    description:
      "Give employees and internal users a clearer path to install the right build without technical confusion.",
  },
  {
    img: "/images/products/appdeploy/uploads.png",
    title: "Release management workspace",
    description:
      "Upload builds, manage visibility, and control internal rollout actions from one operational surface.",
  },
  {
    img: "/images/products/appdeploy/analytics.png",
    title: "Install and rollout visibility",
    description:
      "Track release activity and monitor how distribution is progressing across teams and rollout groups.",
  },
  {
    img: "/images/products/appdeploy/redemption.png",
    title: "Private access control",
    description:
      "Support controlled distribution with a structure that fits internal access and enterprise governance expectations.",
  },
  {
    img: "/images/products/appdeploy/required.png",
    title: "No unnecessary MDM barrier",
    description:
      "Avoid forcing every internal distribution scenario into a heavier device management route when it is not required.",
  },
  {
    img: "/images/products/appdeploy/scalable.png",
    title: "Built to scale with rollout needs",
    description:
      "Support small pilots, internal departments, and larger enterprise distribution programmes through the same model.",
  },
];

export default function KeyFeatures() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 text-[#0F172A]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#F8FAFC_0%,#EEF2FF_48%,#E0F2FE_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.06),transparent_24%)]" />

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="max-w-4xl mb-12">
          <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-[#4F46E5]/80 mb-3">
            Key Features
          </p>
          <h2 className="text-3xl md:text-5xl font-karla font-semibold mb-5">
            Product capabilities built for enterprise distribution teams
          </h2>
          <p className="text-base md:text-xl text-slate-700 font-lora leading-8">
            AppDeploy focuses on the parts of internal distribution that become
            painful in practice: release control, install experience,
            visibility, and operational simplicity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-[1.75rem] border border-white/80 bg-white/85 backdrop-blur-sm px-6 py-7 shadow-[0_18px_40px_rgba(15,23,42,0.07)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 border border-slate-200">
                <img src={feature.img} alt="" className="size-8" />
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-3 font-karla leading-7">
                {feature.title}
              </h3>
              <p className="text-slate-600 font-lora leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

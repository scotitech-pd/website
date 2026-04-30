const features = [
  {
    title: "Clearer Product Fit",
    description:
      "Each solution is framed around a specific operating problem so buyers can understand fit more quickly.",
  },
  {
    title: "Structured Onboarding",
    description:
      "Cloud, Enterprise, and self-hosted paths are presented more clearly to support better rollout decisions.",
  },
  {
    title: "Professional Product Surfaces",
    description:
      "Interfaces are being shaped to feel calmer, more credible, and more aligned with serious software buyers.",
  },
  {
    title: "Practical Messaging",
    description:
      "The product story is built around operational value rather than oversized platform claims.",
  },
];

const WhyScotitech = () => {
  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 text-[#0F172A]">
        <div className="max-w-4xl mb-12">
          <p className="text-sm font-karla font-semibold uppercase tracking-[0.2em] text-[#4F46E5]/80 mb-3">
            What To Expect
          </p>
          <h2 className="text-3xl md:text-5xl font-karla font-semibold mb-5">
            What buyers should expect from the ScotiTech portfolio
          </h2>
          <p className="text-slate-700 font-lora text-lg leading-8">
            Clear product roles, structured delivery paths, and a more
            credible buying experience.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="rounded-[1.6rem] border border-slate-200 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white text-sm font-semibold font-karla">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold font-karla text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 font-lora leading-7 text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyScotitech;

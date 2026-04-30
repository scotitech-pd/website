import Link from "next/link";

export default function SecurityCompliance() {
  const supportingProducts = [
    {
      name: "ClarityPath",
      logo: "/images/brand/claritypath-logo.png",
      description:
        "A guided digital product for planning, reflection, and structured personal decision support.",
      href: "/products/claritypath",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-20 text-[#0F172A]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#F8FAFC_0%,#EEF2FF_48%,#E0F2FE_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.06),transparent_22%)]" />

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr] items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-karla font-semibold uppercase tracking-[0.2em] text-[#4F46E5]/80 mb-3">
              Supporting Products
            </p>
            <h2 className="text-3xl md:text-5xl font-karla font-semibold mb-5">
              Additional products for guided planning workflows
            </h2>
            <p className="text-slate-700 font-lora text-lg leading-8">
              Alongside our core platforms, ScotiTech also offers a focused
              product for structured planning, reflection, and guided decision
              support.
            </p>

            <div className="mt-8 rounded-[1.6rem] border border-white/80 bg-white/80 px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm">
              <p className="text-slate-600 font-lora leading-8">
                ClarityPath extends the portfolio into a more reflective use
                case without trying to solve the same problems as the two main
                platforms.
              </p>
            </div>
          </div>

          <div className="grid gap-4 max-w-xl">
            {supportingProducts.map((item, index) => (
              <div
                key={item.name}
                className="rounded-[1.5rem] border border-white/80 bg-white/85 px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm"
              >
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className="mb-5 h-16 w-auto rounded-[1.2rem] object-contain"
                />
                <h3 className="text-xl font-semibold font-karla text-slate-900 mb-3">
                  {item.name}
                </h3>
                <p className="text-slate-700 font-lora leading-7 mb-5">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold font-karla text-slate-900 hover:border-slate-400 transition-colors"
                >
                  Read Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

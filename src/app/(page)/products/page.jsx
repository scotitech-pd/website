import Link from "next/link";

const featuredProducts = [
  {
    name: "AppDeploy",
    category: "Featured Product",
    tagline: "Controlled internal iOS app distribution for teams that need speed without losing oversight.",
    description:
      "AppDeploy gives organisations a cleaner path to internal distribution, tester access, release control, and enterprise rollout management.",
    href: "/products/appdeploy",
    accent: "from-[#4F74F3] via-[#5B4FCF] to-[#7C3AED]",
    capabilities: ["Internal distribution", "Release control", "Enterprise rollout"],
  },
  {
    name: "AXOS",
    category: "Featured Product",
    tagline: "A private, self-hosted workspace that brings communication, files, tasks, and AI into one controlled environment.",
    description:
      "AXOS is designed for organisations that want modern digital operations without giving up sovereignty, deployment control, or workflow clarity.",
    href: "/products/axos",
    accent: "from-[#34D3FF] via-[#4F74F3] to-[#5B4FCF]",
    capabilities: ["Self-hosted workspace", "Operational visibility", "Private AI workflows"],
  },
];

const additionalProducts = [
  {
    name: "ClarityPath",
    description:
      "Private decision-support tools designed for structured, sensitive user journeys.",
    href: "/products/claritypath",
  },
  {
    name: "AI Caption Studio",
    description:
      "AI-assisted captioning and content support for faster publishing workflows.",
    href: "/products/aicaptionstudio",
  },
];

export const metadata = {
  title: "Products | ScotiTech Solutions",
  description:
    "Explore ScotiTech products including AppDeploy, AXOS, ClarityPath, and AI Caption Studio.",
};

export default function ProductsPage() {
  return (
    <section className="relative overflow-hidden bg-white text-[#0F172A] py-14 sm:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#F8FAFC_0%,#EEF2FF_52%,#E0F2FE_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,79,207,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(52,211,255,0.08),transparent_22%)]" />

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="grid grid-cols-1 xl:grid-cols-[58%_42%] gap-10 items-end mb-14">
          <div className="max-w-4xl">
            <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-[#4F46E5]/80 mb-3">
              Products
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-karla font-semibold leading-tight mb-5 text-[#0F172A]">
              ScotiTech products built for control, rollout, and operational clarity
            </h1>
            <p className="text-lg text-slate-700 font-lora leading-8 max-w-3xl">
              Our portfolio is organised around practical software with a clear
              operating model: modern product experiences, stronger privacy, and
              deployment approaches that fit real organisations.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-white/80 backdrop-blur-md px-6 py-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-slate-500 mb-5">
              Portfolio Focus
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                <p className="text-2xl font-karla font-semibold text-slate-900">2</p>
                <p className="text-sm text-slate-600 font-lora mt-1">
                  core products featured across the site
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                <p className="text-2xl font-karla font-semibold text-slate-900">Private</p>
                <p className="text-sm text-slate-600 font-lora mt-1">
                  deployment and operational control as a recurring theme
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                <p className="text-2xl font-karla font-semibold text-slate-900">Enterprise-ready</p>
                <p className="text-sm text-slate-600 font-lora mt-1">
                  onboarding, governance, and rollout structure
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-end justify-between gap-4 mb-8 flex-wrap">
            <div>
              <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
                Featured
              </p>
              <h2 className="text-3xl font-karla font-semibold text-[#0F172A]">
                Core products
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.name}
                className="rounded-[2rem] border border-slate-900/80 bg-[#0F172A] overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.18)]"
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${product.accent}`} />

                <div className="p-7 sm:p-9">
                  <p className="inline-flex rounded-full border border-white/10 bg-white/8 text-slate-200 px-3 py-1 text-xs font-karla font-semibold uppercase tracking-[0.14em] mb-5">
                    {product.category}
                  </p>

                  <h3 className="text-3xl sm:text-4xl font-karla font-semibold text-white mb-4">
                    {product.name}
                  </h3>

                  <p className="text-lg font-karla text-slate-100 mb-4 leading-8">
                    {product.tagline}
                  </p>

                  <p className="text-slate-300 font-lora leading-8 mb-7">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {product.capabilities.map((capability) => (
                      <span
                        key={capability}
                        className="rounded-full border border-white/10 bg-[#0f172a]/90 px-4 py-2 text-sm font-karla text-slate-200"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={product.href}
                    className="inline-flex items-center rounded-full bg-white text-main-dark px-6 py-3 text-sm font-semibold font-karla tracking-[0.04em] hover:bg-slate-100 transition-colors"
                  >
                    View product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/80 bg-white/85 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
            Additional Products
          </p>
          <h2 className="text-3xl font-karla font-semibold text-[#0F172A] mb-8">
            Supporting solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl">
            {additionalProducts.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] px-6 py-6 hover:border-slate-300 transition min-h-[190px] shadow-[0_18px_40px_rgba(15,23,42,0.05)]"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <h3 className="text-xl font-karla font-semibold text-slate-900">
                    {product.name}
                  </h3>
                  <span className="h-3 w-3 rounded-full bg-gradient-to-br from-[#34D3FF] to-[#5B4FCF] mt-2 shrink-0" />
                </div>
                <p className="text-slate-600 font-lora leading-8">
                  {product.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

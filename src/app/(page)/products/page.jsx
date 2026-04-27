import Link from "next/link";

const featuredProducts = [
  {
    name: "AppDeploy",
    tagline: "Controlled internal iOS app distribution for teams that need speed without losing oversight.",
    description:
      "AppDeploy gives organisations a cleaner path to internal distribution, tester access, release control, and enterprise rollout management.",
    href: "/products/appdeploy",
    accent: "from-[#4F74F3] via-[#5B4FCF] to-[#7C3AED]",
    capabilities: ["Internal distribution", "Release control", "Enterprise rollout"],
  },
  {
    name: "AXOS",
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
];

export const metadata = {
  title: "Products | ScotiTech Solutions",
  description:
    "Explore ScotiTech products including AppDeploy, AXOS, and ClarityPath.",
};

export default function ProductsPage() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] text-[#0F172A] py-14 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,79,207,0.06),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(52,211,255,0.05),transparent_24%)]" />

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
              The portfolio is centred on two flagship products with distinct
              operating roles: AppDeploy for controlled internal distribution,
              and AXOS for private day-to-day work across communication, files,
              planning, and AI-assisted execution.
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
                  flagship products lead the portfolio
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                <p className="text-2xl font-karla font-semibold text-slate-900">Private</p>
                <p className="text-sm text-slate-600 font-lora mt-1">
                  controlled deployment and data ownership remain a recurring theme
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

        <div className="mb-16 rounded-[2rem] border border-slate-200 bg-white/90 p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="max-w-4xl mb-8">
            <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
              Product Fit
            </p>
            <h2 className="text-3xl font-karla font-semibold text-[#0F172A] mb-4">
              Choose the product that matches the operating problem
            </h2>
            <p className="text-slate-700 font-lora leading-8">
              AppDeploy and AXOS solve different jobs. AppDeploy is for
              controlled internal app delivery. AXOS is for teams that want one
              private environment for mail, files, cloud storage, calendar,
              chat, tasks, notes, and AI built directly into daily work.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="rounded-[1.6rem] border border-indigo-200 bg-indigo-50/60 p-6">
              <p className="text-xs font-karla font-semibold uppercase tracking-[0.16em] text-[#4F46E5] mb-3">
                AppDeploy
              </p>
              <h3 className="text-2xl font-karla font-semibold text-slate-900 mb-4">
                Best when internal app distribution is the priority
              </h3>
              <div className="space-y-3 text-slate-700 font-lora leading-7">
                <p>Built around Apple Business based internal distribution workflows.</p>
                <p>Helps teams control releases, access, branded distribution pages, and rollout visibility.</p>
                <p>Best fit for IT and admin teams managing private iOS app delivery.</p>
              </div>
              <Link
                href="/products/appdeploy"
                className="mt-6 inline-flex items-center rounded-full bg-[#0F172A] px-5 py-3 text-sm font-semibold font-karla text-white hover:bg-slate-900 transition-colors"
              >
                Explore AppDeploy
              </Link>
            </div>

            <div className="rounded-[1.6rem] border border-cyan-200 bg-cyan-50/60 p-6">
              <p className="text-xs font-karla font-semibold uppercase tracking-[0.16em] text-cyan-800 mb-3">
                AXOS
              </p>
              <h3 className="text-2xl font-karla font-semibold text-slate-900 mb-4">
                Best when the goal is a private AI-assisted workspace
              </h3>
              <div className="space-y-3 text-slate-700 font-lora leading-7">
                <p>Brings core daily tools into one controlled environment for startups and enterprise teams.</p>
                <p>Supports private deployment, stronger data control, and AI built directly into everyday workflows.</p>
                <p>Best fit for organisations that want secure operations without relying on disconnected tools.</p>
              </div>
              <Link
                href="/products/axos"
                className="mt-6 inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold font-karla text-slate-900 hover:border-slate-400 transition-colors"
              >
                Explore AXOS
              </Link>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/80 bg-white/85 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
            Supporting Product
          </p>
          <h2 className="text-3xl font-karla font-semibold text-[#0F172A] mb-8">
            ClarityPath
          </h2>

          <div className="grid grid-cols-1 gap-5 max-w-3xl">
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

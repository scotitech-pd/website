"use client";

import Link from "next/link";

const proofItems = [
  "Internal app distribution built for controlled rollout",
  "Private workspaces with AI inside everyday team tools",
  "Deployment options that fit real operational environments",
];

const surfaceCards = [
  {
    title: "AppDeploy",
    subtitle: "Internal distribution built around Apple Business workflows",
    meta: "Branded access, release visibility, controlled rollout",
    accent: "from-[#4F74F3] via-[#5B4FCF] to-[#0EA5E9]",
    logo: "/images/brand/appdeploy-logo-black.png",
    theme: "light",
  },
  {
    title: "AXOS",
    subtitle: "Private workspace with AI built into the tools teams use every day",
    meta: "Mail, drive, cloud storage, chat, tasks, notes, AI",
    accent: "from-[#34D3FF] via-[#4F74F3] to-[#5B4FCF]",
    logo: "/images/brand/axos-icon.png",
    theme: "dark",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] pt-24 pb-16 md:pt-28 md:pb-20">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0F172A_0%,#111827_52%,#0B1220_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.22),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_22%)]" />
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="grid gap-10 xl:grid-cols-[54%_46%] items-center">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold font-karla text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
              ScotiTech Solutions
            </p>

            <h1 className="mt-6 text-white text-4xl min-[1150px]:text-6xl font-karla font-semibold leading-[1.05]">
              Building practical, privacy-focused technology for real-world use
            </h1>

            <p className="mt-6 text-slate-300 font-lora text-lg md:text-xl leading-8 max-w-2xl">
              We build software for internal app distribution and private daily
              operations, with stronger control over rollout, deployment, and
              data boundaries.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-7 py-3 text-sm font-semibold font-karla text-white hover:bg-slate-900 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-7 py-3 text-sm font-semibold font-karla text-white hover:bg-white/12 transition-colors"
              >
                Explore Products
              </Link>
            </div>

            <div className="mt-10 grid gap-4">
              {proofItems.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.3rem] border border-white/10 bg-white/[0.05] px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm"
                >
                  <p className="text-slate-200 font-lora leading-7 text-[15px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(91,79,207,0.12),transparent_58%)] blur-2xl" />
            <div className="relative rounded-[2rem] border border-slate-900/10 bg-white/65 p-5 sm:p-6 shadow-[0_28px_70px_rgba(15,23,42,0.12)] backdrop-blur-md">
              <div className="grid gap-5">
                {surfaceCards.map((card, index) => (
                  <div
                    key={card.title}
                    className={`rounded-[1.8rem] overflow-hidden border ${
                      card.theme === "dark"
                        ? "border-slate-900/80 bg-[#0F172A]"
                        : "border-slate-200 bg-white"
                    } shadow-[0_18px_40px_rgba(15,23,42,0.08)]`}
                  >
                    <div className={`h-1.5 w-full bg-gradient-to-r ${card.accent}`} />
                    <div className="p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="max-w-[70%]">
                          <p
                            className={`text-xs font-karla uppercase tracking-[0.16em] ${
                              card.theme === "dark"
                                ? "text-slate-400"
                                : "text-slate-500"
                            } mb-3`}
                          >
                            {index === 0 ? "Core Product" : "Core Platform"}
                          </p>
                          <h2
                            className={`text-2xl font-karla font-semibold ${
                              card.theme === "dark"
                                ? "text-white"
                                : "text-slate-900"
                            }`}
                          >
                            {card.title}
                          </h2>
                        </div>
                        <img
                          src={card.logo}
                          alt={`${card.title} logo`}
                          className={`h-14 w-auto rounded-[1.3rem] object-contain ${
                            card.theme === "dark"
                              ? "drop-shadow-[0_18px_28px_rgba(0,0,0,0.35)]"
                              : "drop-shadow-[0_18px_28px_rgba(15,23,42,0.18)]"
                          }`}
                        />
                      </div>

                      <p
                        className={`mt-4 text-base font-karla leading-7 ${
                          card.theme === "dark"
                            ? "text-slate-100"
                            : "text-slate-800"
                        }`}
                      >
                        {card.subtitle}
                      </p>
                      <p
                        className={`mt-3 text-sm font-lora leading-7 ${
                          card.theme === "dark"
                            ? "text-slate-300"
                            : "text-slate-600"
                        }`}
                      >
                        {card.meta}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

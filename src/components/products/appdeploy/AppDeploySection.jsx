import { ExternalLink, ShieldCheck, Layers3, Building2 } from "lucide-react";

const points = [
  {
    icon: ShieldCheck,
    label: "Built around Apple Business Manager workflows",
  },
  {
    icon: Layers3,
    label: "Branded private distribution without MDM complexity",
  },
  {
    icon: Building2,
    label: "Designed for internal apps, partners, and enterprise rollout",
  },
];

export default function AppDeploySection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] text-[#0F172A] py-16 sm:py-20 lg:py-24">

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 grid grid-cols-1 xl:grid-cols-[54%_46%] gap-10 items-center">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex px-1 py-1">
            <img
              src="/images/brand/appdeploy-logo-black.png"
              alt="AppDeploy logo"
              className="h-16 w-auto object-contain"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-karla font-semibold leading-[1.06] mb-6">
            Internal app distribution
            <span className="block bg-gradient-to-r from-[#1E3A8A] via-[#4F46E5] to-[#0EA5E9] bg-clip-text text-transparent">
              built around Apple Business workflows
            </span>
          </h1>

          <p className="text-lg sm:text-xl font-lora text-slate-700 leading-8 max-w-2xl mb-8">
            AppDeploy gives organisations a more usable operational layer
            around Apple Business based distribution, so internal apps can be
            delivered with clearer branding, better visibility, and a simpler
            experience for employees, partners, and client teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="https://appdeploy.scotitech.com/request-access"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-7 py-3 text-sm font-semibold font-karla text-white hover:bg-slate-900 transition-colors"
            >
              Request Access
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>

            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold font-karla text-slate-900 hover:bg-slate-50 transition-colors"
            >
              View Pricing
            </a>
          </div>

          <div className="space-y-3">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.label}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-karla text-slate-800">{point.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white overflow-hidden shadow-[0_28px_70px_rgba(15,23,42,0.12)]">
          <div className="grid grid-cols-[32%_68%] min-h-[520px]">
            <div className="hidden md:block border-r border-slate-200 bg-slate-50 px-5 py-6">
              <div className="mb-8">
                <p className="font-karla text-lg font-semibold text-slate-900">
                  Distribution Console
                </p>
                <p className="text-sm font-lora text-slate-500">
                  Internal distribution workspace
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "Overview",
                  "Builds",
                  "Access Codes",
                  "Teams",
                  "Install Tracking",
                  "Branding",
                  "Security",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-2xl px-4 py-3 font-karla text-sm ${
                      index === 0
                        ? "bg-[#0F172A] text-white"
                        : "text-slate-500"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 sm:p-7">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-2xl font-karla font-semibold text-slate-900">
                    Internal app distribution
                  </p>
                  <p className="text-sm font-lora text-slate-500">
                    Manage releases, access, and install visibility
                  </p>
                </div>
                <div className="hidden sm:flex gap-3">
                  <div className="h-11 w-11 rounded-2xl border border-slate-200 bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/brand/appdeploy-logo-black.png"
                      alt="AppDeploy mark"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="h-11 w-11 rounded-2xl border border-slate-200 bg-white" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-5">
                {[
                  ["Active releases", "6"],
                  ["Pending installs", "128"],
                  ["Team groups", "14"],
                  ["Install success", "97%"],
                ].map(([label, value], index) => (
                  <div
                    key={label}
                    className="rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-[0_16px_30px_rgba(15,23,42,0.06)]"
                  >
                    <p className="text-sm font-lora text-slate-500 mb-3">
                      {label}
                    </p>
                    <p
                      className={`text-4xl font-karla font-semibold ${
                        index === 3 ? "text-[#2563EB]" : "text-slate-900"
                      }`}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-[0_16px_30px_rgba(15,23,42,0.06)]">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <p className="text-lg font-karla font-semibold text-slate-900">
                    Latest rollout
                  </p>
                  <p className="text-sm font-karla text-[#4F46E5]">View release</p>
                </div>
                <div className="space-y-4">
                  {[
                    "Build v3.4.1 published to enterprise users",
                    "Access codes generated for partner cohort",
                    "Install confirmation received from leadership pilot",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 border-b border-slate-100 pb-4 last:border-b-0 last:pb-0"
                    >
                      <span
                        className={`mt-2 h-2.5 w-2.5 rounded-full ${
                          index === 0
                            ? "bg-[#4F46E5]"
                            : index === 1
                              ? "bg-[#0EA5E9]"
                              : "bg-[#22C55E]"
                        }`}
                      />
                      <div>
                        <p className="font-lora text-slate-700">{item}</p>
                        <p className="text-xs font-karla text-slate-400 mt-1">
                          updated recently
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

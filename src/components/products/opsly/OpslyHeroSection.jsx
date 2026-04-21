import Link from "next/link";
import { ArrowRight, ShieldCheck, ServerCog, Sparkles } from "lucide-react";

const modules = [
  "Mail",
  "Drive",
  "Calendar",
  "Chat",
  "Tasks",
  "Notes",
  "Cloud Storage",
  "Contacts",
  "AI Workspace",
];

const proofPoints = [
  {
    icon: ShieldCheck,
    label: "Sensitive workflows in a controlled environment",
  },
  {
    icon: ServerCog,
    label: "Private cloud, hosted, or self-hosted deployment",
  },
  {
    icon: Sparkles,
    label: "AI execution close to your own data boundary",
  },
];

export default function OpslyHeroSection() {
  return (
    <section className="relative overflow-hidden text-white py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#F8FAFC_0%,#EEF2FF_52%,#E0F2FE_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,79,207,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(52,211,255,0.10),transparent_22%)]" />

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 grid grid-cols-1 xl:grid-cols-[54%_46%] gap-10 items-center">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex px-1 py-1">
            <img
              src="/images/brand/axos-icon.png"
              alt="AXOS icon"
              className="h-16 w-auto rounded-[1.4rem] object-contain"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-karla font-semibold leading-[1.05] mb-6 text-[#0F172A]">
            Your operational workspace.
            <span className="block bg-gradient-to-r from-[#5B4FCF] via-[#4F74F3] to-[#34D3FF] bg-clip-text text-transparent">
              Private. Intelligent. Built for control.
            </span>
          </h1>

          <p className="text-lg sm:text-xl font-lora text-slate-700 leading-8 max-w-2xl mb-8">
            AXOS brings mail, drive, cloud storage, calendar, chat, tasks,
            notes, and AI into one controlled environment so startups and
            enterprises can run daily operations with less fragmentation and
            more control over where data lives and how AI is used.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {modules.map((module) => (
              <span
                key={module}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-karla text-slate-700 backdrop-blur-sm"
              >
                {module}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-7 py-3 text-sm font-semibold font-karla text-white hover:bg-slate-900 transition-colors"
            >
              Request enterprise review
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/85 px-7 py-3 text-sm font-semibold font-karla text-slate-900 hover:border-slate-400 transition-colors backdrop-blur-sm"
            >
              Book a walkthrough
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-900/80 bg-[#0F172A] backdrop-blur-md overflow-hidden shadow-[0_24px_70px_rgba(15,23,42,0.22)]">
          <div className="grid grid-cols-[32%_68%] min-h-[520px]">
            <div className="border-r border-white/8 bg-black/25 px-5 py-6 hidden md:block">
              <div className="mb-8">
                <p className="font-karla text-lg font-semibold text-white">
                  AXOS
                </p>
                <p className="text-sm font-lora text-slate-400">
                  Private workspace layer
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "Dashboard",
                  "Mail",
                  "Drive",
                  "Calendar",
                  "Chat",
                  "Tasks",
                  "Contacts",
                  "Notes",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-2xl px-4 py-3 font-karla text-sm ${
                      index === 0
                        ? "bg-white/10 text-white border border-white/10"
                        : "text-slate-400"
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
                  <p className="text-2xl font-karla font-semibold text-white">
                    Good evening, team
                  </p>
                  <p className="text-sm font-lora text-slate-400">
                    Your workspace is running in a controlled environment
                  </p>
                </div>
                <div className="hidden sm:flex gap-3">
                  <div className="h-11 w-11 rounded-2xl border border-white/10 bg-white/6 flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/brand/axos-icon.png"
                      alt="AXOS mark"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="h-11 w-11 rounded-2xl border border-white/10 bg-white/6" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-5">
                {[
                  ["Unread emails", "12"],
                  ["Today's events", "5"],
                  ["Open tasks", "23"],
                  ["Active chats", "8"],
                ].map(([label, value], index) => (
                  <div
                    key={label}
                    className="rounded-[1.4rem] border border-white/8 bg-gradient-to-br from-white/8 to-white/[0.03] p-4 shadow-[0_16px_30px_rgba(0,0,0,0.2)]"
                  >
                    <p className="text-sm font-lora text-slate-400 mb-3">
                      {label}
                    </p>
                    <p
                      className={`text-4xl font-karla font-semibold ${
                        index === 1 ? "text-[#34D3FF]" : "text-white"
                      }`}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[56%_44%] gap-4">
                <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-5">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <p className="text-lg font-karla font-semibold text-white">
                      Recent activity
                    </p>
                    <p className="text-sm font-karla text-slate-400">View all</p>
                  </div>
                  <div className="space-y-4">
                    {[
                      "New message in #operations",
                      "Sprint review deck updated",
                      "Policy document shared with leadership",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 border-b border-white/6 pb-4 last:border-b-0 last:pb-0"
                      >
                        <span
                          className={`mt-2 h-2.5 w-2.5 rounded-full ${
                            index === 0
                              ? "bg-[#5B4FCF]"
                              : index === 1
                                ? "bg-[#34D3FF]"
                                : "bg-[#22C55E]"
                          }`}
                        />
                        <div>
                          <p className="font-lora text-slate-200">{item}</p>
                          <p className="text-xs font-karla text-slate-500 mt-1">
                            just now
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-5">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <p className="text-lg font-karla font-semibold text-white">
                      Workspace model
                    </p>
                  </div>
                  <div className="space-y-4">
                    {proofPoints.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-white/8 bg-black/20 px-4 py-4"
                        >
                          <Icon className="h-5 w-5 text-[#34D3FF] mb-3" />
                          <p className="font-karla text-white">{item.label}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

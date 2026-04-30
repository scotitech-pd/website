"use client";

const highlights = [
  {
    icon: "/images/products/opsly/clear.png",
    title: "One secure workspace identity",
    desc: "Replace fragmented logins and disconnected tools with one operating environment for everyday work.",
  },
  {
    icon: "/images/products/opsly/optimize.png",
    title: "Operational visibility by default",
    desc: "See communication, files, cloud storage, schedules, tasks, and internal coordination in one place.",
  },
  {
    icon: "/images/products/opsly/control.png",
    title: "AI built into the workspace",
    desc: "Use AI inside the environment itself to summarise, answer, organise, and reduce routine effort without pushing sensitive context elsewhere.",
  },
  {
    icon: "/images/products/opsly/ssecurity.png",
    title: "Data sovereignty that is actually practical",
    desc: "Deploy in hosted, private cloud, or self-hosted models that give startups and enterprises more control over access, policy, and operations.",
  },
];

export default function OpslyInfoSection() {
  return (
    <section className="relative bg-[#f7f7f5] text-[#0F172A] py-16 sm:py-20">

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="max-w-4xl mb-12">
          <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-[#4F46E5]/80 mb-3">
            Product Positioning
          </p>
          <h2 className="text-3xl md:text-5xl font-karla font-semibold mb-5 text-[#0F172A]">
            AXOS replaces core work tools with one private workspace that has
            AI built directly into the tools teams use every day.
          </h2>
          <p className="text-base md:text-xl font-lora leading-8 text-slate-700">
            Built for teams that want a modern operating environment without
            handing away control, AXOS combines mail, drive, cloud storage,
            calendar, chat, tasks, notes, and AI into one deployment-ready
            workspace architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-8 items-start">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-slate-500 mb-5">
              Why it matters
            </p>
            <div className="space-y-5 text-slate-600 font-lora leading-8">
              <p>
                Most organisations are still operating through a patchwork of
                email, file sharing, cloud storage, chat, task management,
                notes, and AI tools that do not really belong to one system.
              </p>
              <p>
                AXOS closes that gap with a private workspace model designed to
                bring the core operating surface into one place while still
                supporting governance, deployment flexibility, local AI
                execution, and rollout discipline for startups as well as
                enterprise teams.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white px-6 py-7 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900/5 border border-slate-200">
                  <img src={item.icon} alt="" className="size-8 object-contain" />
                </div>
                <h3 className="text-xl font-semibold font-karla text-slate-900 mb-3 leading-7">
                  {item.title}
                </h3>
                <p className="text-slate-600 font-lora leading-7 text-[15px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useModal } from "@/components/ModalContext";

const problems = [
  "Internal iOS distribution often fragments across approvals, access, and rollout.",
  "Teams adopt broader tooling when they actually need a focused delivery layer.",
  "Operational work gets buried under disconnected systems and unclear ownership.",
  "Products become harder to adopt when day-to-day workflows feel noisy.",
];

export default function TechnologySection() {
  const { setShowModal } = useModal();

  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] py-16 md:py-20 text-[#0F172A]">

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr] items-start">
          <div className="max-w-3xl">
            <p className="text-sm font-karla font-semibold uppercase tracking-[0.2em] text-[#4F46E5]/80 mb-4">
              The Operational Gap
            </p>
            <h2 className="text-3xl md:text-5xl font-karla font-semibold leading-tight">
              Most software problems come from workflow fragmentation
            </h2>
            <p className="mt-5 text-slate-700 font-lora text-lg leading-8">
              The issue is usually not tool availability. It is unclear process
              ownership, heavier systems than needed, and rollout friction.
            </p>

            <div className="mt-8 rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.06)]">
              <p className="text-sm font-karla uppercase tracking-[0.16em] text-slate-500 mb-3">
                Our Approach
              </p>
              <p className="text-slate-700 font-lora leading-8">
                Our approach is to narrow scope around high-value workflows:
                cleaner internal distribution and more controlled operations.
              </p>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="mt-8 inline-flex items-center rounded-full border border-slate-300 bg-[#0F172A] px-6 py-3 text-sm font-semibold font-karla text-white hover:bg-slate-900 transition-colors cursor-pointer"
            >
              Speak with Our Team
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {problems.map((text, index) => (
              <div
                key={text}
                className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold font-karla text-white">
                  0{index + 1}
                </div>
                <p className="text-slate-700 font-lora leading-7">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

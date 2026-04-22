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
    <section className="relative overflow-hidden bg-[#0F172A] py-16 md:py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_24%)]" />
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr] items-start">
          <div className="max-w-3xl">
            <p className="text-sm font-karla font-semibold uppercase tracking-[0.2em] text-cyan-300/90 mb-4">
              The Operational Gap
            </p>
            <h2 className="text-3xl md:text-5xl font-karla font-semibold leading-tight">
              Most software problems come from workflow fragmentation
            </h2>
            <p className="mt-5 text-white/72 font-lora text-lg leading-8">
              The issue is usually not tool availability. It is unclear process
              ownership, heavier systems than needed, and rollout friction.
            </p>

            <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-karla uppercase tracking-[0.16em] text-white/50 mb-3">
                Our Approach
              </p>
              <p className="text-white/78 font-lora leading-8">
                Our approach is to narrow scope around high-value workflows:
                cleaner internal distribution and more controlled operations.
              </p>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="mt-8 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold font-karla text-white hover:bg-white/14 transition-colors cursor-pointer"
            >
              Talk Through Your Use Case
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {problems.map((text, index) => (
              <div
                key={text}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_18px_40px_rgba(2,6,23,0.22)]"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(79,70,229,0.35),rgba(14,165,233,0.22))] text-sm font-semibold font-karla text-white">
                  0{index + 1}
                </div>
                <p className="text-white/78 font-lora leading-7">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Reveal from "@/components/Reveal";
import { useModal } from "@/components/ModalContext";

const points = [
  {
    title: "Clear product jobs",
    desc: "Each product is positioned around a specific business problem, so buyers can evaluate fit in plain business terms.",
  },
  {
    title: "Built from rollout experience",
    desc: "The portfolio comes from practical distribution, workspace, and product-fit challenges rather than abstract feature lists.",
  },
  {
    title: "Professional by default",
    desc: "Privacy expectations, onboarding paths, and decision ownership are treated as part of the product experience.",
  },
  {
    title: "Secure AI deployment paths",
    desc: "AXOS supports hosted, private-cloud, self-hosted, and on-premises approaches for teams that need stronger control over workspace data and AI assistance.",
  },
];

export default function WhyChooseScotiTech() {
  const { setShowModal } = useModal();

  return (
    <section className="bg-[#ECE8DA] py-14 md:py-20">
      <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
        <Reveal className="mb-8 flex flex-wrap items-center justify-between gap-4" variant="soft">
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
              Why ScotiTech
            </p>
            <h2 className="text-3xl font-semibold text-[#111827] md:text-5xl">
              Built for clear product fit and practical delivery.
            </h2>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="rounded-full bg-[#0E1116] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(14,17,22,0.16)] transition hover:bg-[#1C2530]"
          >
            Talk to sales
          </button>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {points.map((point, index) => (
            <Reveal
              as="article"
              key={point.title}
              delay={index * 80}
              className="rounded-[1.1rem] border border-[#d9ded7] bg-white/90 p-6 shadow-[0_16px_35px_rgba(15,23,42,0.05)]"
            >
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                {point.title}
              </h3>
              <p className="font-lora leading-7 text-slate-700">
                {point.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

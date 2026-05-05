"use client";

import React from "react";
import { useModal } from "@/components/ModalContext";

const GlobalD = () => {
  const { setShowModal } = useModal();

  return (
    <section className="relative overflow-hidden py-14 md:py-[4.5rem]">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#0F172A_0%,#111827_52%,#0B1220_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,118,110,0.24),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.16),transparent_24%)]" />

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.05] px-6 py-10 sm:px-10 text-center backdrop-blur-md shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
          <p className="mb-3 font-karla text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300/90">
            Delivery Model
          </p>
          <h3 className="text-3xl md:text-5xl font-karla font-semibold text-white mb-5">
            UK-led strategy with cross-region execution
          </h3>

          <p className="text-slate-300 font-lora text-base md:text-lg leading-8 max-w-3xl mx-auto">
            Strategic leadership is based in Glasgow, with a distributed
            engineering and product team spanning key regions. The model keeps
            product direction close to company leadership while giving delivery
            work the engineering depth needed for reliable execution.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white px-7 py-3 font-karla font-semibold text-[#0F172A] hover:bg-slate-100 transition-colors"
          >
            Talk to Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default GlobalD;

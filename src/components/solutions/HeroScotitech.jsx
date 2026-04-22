"use client";

import Link from "next/link";
import { ShieldCheck, Boxes, Sparkles } from "lucide-react";
import { useModal } from "@/components/ModalContext";

const highlights = [
  "AppDeploy for controlled internal app distribution.",
  "AXOS for private daily operations in one workspace.",
  "A clearer path from evaluation to rollout.",
];

const HeroScotitech = () => {
  const { setShowModal } = useModal();

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#F8FAFC_0%,#EEF2FF_55%,#E0F2FE_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.10),transparent_20%)]" />

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1.1fr)_minmax(420px,0.9fr)] items-center">
          <div className="max-w-4xl">
            <p className="text-sm font-karla font-semibold uppercase tracking-[0.2em] text-[#4F46E5]/80 mb-4">
              Solutions
            </p>
            <h1 className="text-[#0F172A] text-4xl min-[1150px]:text-6xl font-karla font-semibold leading-[1.05]">
              Software solutions built for operational clarity
            </h1>

            <p className="mt-6 text-slate-700 font-lora text-lg md:text-xl leading-8 max-w-3xl">
              ScotiTech focuses on two core directions: internal app
              distribution and private operational tooling. The goal is simple:
              practical products, clearer buyer fit, and smoother rollout.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold font-karla text-white hover:bg-slate-900 transition-colors"
              >
                Explore Products
              </Link>
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center rounded-full border border-slate-300 bg-white/85 px-6 py-3 text-sm font-semibold font-karla text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:border-slate-400 transition-colors cursor-pointer"
              >
                Request a Call
              </button>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-white/80 bg-white/75 px-5 py-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm"
                >
                  <p className="text-slate-700 font-lora leading-7 text-[15px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800/80 bg-[#0F172A] text-white shadow-[0_30px_80px_rgba(15,23,42,0.22)] overflow-hidden">
            <div className="border-b border-white/10 px-6 py-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-karla uppercase tracking-[0.18em] text-white/60">
                  ScotiTech Platform View
                </p>
                <h2 className="text-2xl font-semibold font-karla mt-2">
                  Product-focused by design
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="h-3 w-3 rounded-full bg-cyan-400" />
                <span className="h-3 w-3 rounded-full bg-indigo-400" />
              </div>
            </div>

            <div className="grid gap-4 p-6 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-2xl bg-indigo-500/15 p-3 text-indigo-300">
                    <Boxes size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-karla uppercase tracking-[0.16em] text-white/55">
                      Platform Focus
                    </p>
                    <p className="text-xl font-semibold font-karla">
                      AppDeploy + AXOS
                    </p>
                  </div>
                </div>
                <p className="text-white/72 font-lora leading-7 text-[15px]">
                  AppDeploy handles internal distribution while AXOS supports
                  private day-to-day operations.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-2xl bg-cyan-500/15 p-3 text-cyan-300">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-karla uppercase tracking-[0.16em] text-white/55">
                      Delivery Style
                    </p>
                    <p className="text-xl font-semibold font-karla">
                      Practical and structured
                    </p>
                  </div>
                </div>
                <p className="text-white/72 font-lora leading-7 text-[15px]">
                  Designed for real buyer conversations, onboarding checks, and
                  production rollout planning.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(79,70,229,0.16),rgba(14,165,233,0.10))] p-5 md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-2xl bg-white/10 p-3 text-white">
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-karla uppercase tracking-[0.16em] text-white/55">
                      Wider Portfolio
                    </p>
                    <p className="text-xl font-semibold font-karla">
                      Additional focused products
                    </p>
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-black/15 px-4 py-4">
                    <p className="text-sm font-karla text-white/55 uppercase tracking-[0.14em] mb-2">
                      ClarityPath
                    </p>
                    <p className="text-white/80 font-lora leading-6 text-sm">
                      Structured planning and guided reflection.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/15 px-4 py-4">
                    <p className="text-sm font-karla text-white/55 uppercase tracking-[0.14em] mb-2">
                      Portfolio Role
                    </p>
                    <p className="text-white/80 font-lora leading-6 text-sm">
                      Supporting products are positioned around specific
                      secondary use cases.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/15 px-4 py-4">
                    <p className="text-sm font-karla text-white/55 uppercase tracking-[0.14em] mb-2">
                      Outcome
                    </p>
                    <p className="text-white/80 font-lora leading-6 text-sm">
                      A tighter portfolio with clearer product boundaries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroScotitech;

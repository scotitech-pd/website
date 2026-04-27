"use client";

import { ArrowUpRight } from "lucide-react";

export default function CtaSection() {
  const buttons = [
    {
      title: "Request AppDeploy Access",
      link: "https://appdeploy.scotitech.com/request-access",
      note: "Cloud and Enterprise onboarding",
    },
    {
      title: "View AXOS",
      link: "/products/axos",
      note: "Private operational workspace overview",
    },
    {
      title: "Open ClarityPath",
      link: "http://appdeploy.scotitech.com/w/scotitech",
      note: "Direct access through AppDeploy",
    },
  ];

  return (
    <section className="relative bg-[#0F172A] text-white py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.16),transparent_22%)]" />

      <div className="relative max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full z-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] py-8 px-6 md:px-10 md:py-10 shadow-[0_24px_60px_rgba(2,6,23,0.22)]">
          <div className="max-w-4xl mb-10">
            <p className="text-sm font-karla font-semibold uppercase tracking-[0.2em] text-cyan-300/85 mb-3">
              Next Step
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold font-karla mb-5">
              Choose the product path that fits your use case
            </h2>
            <p className="text-white/75 text-lg font-lora leading-8">
              Pick the next step directly: AppDeploy access, an AXOS review,
              or ClarityPath entry.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {buttons.map((btn, i) => (
              <a
                key={i}
                href={btn.link}
                target={btn.link.startsWith("http") ? "_blank" : undefined}
                rel={btn.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-[1.4rem] border border-white/10 bg-white/8 px-5 py-5 text-left transition-colors hover:bg-white/12 cursor-pointer"
              >
                <p className="text-sm font-karla uppercase tracking-[0.14em] text-white/45 mb-3">
                  Action 0{i + 1}
                </p>
                <p className="text-white font-semibold font-karla text-lg leading-7 mb-2">
                  {btn.title}
                </p>
                <p className="text-white/60 font-lora text-sm leading-6">
                  {btn.note}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-cyan-300 font-karla text-sm font-semibold">
                  Open
                  <ArrowUpRight className="size-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

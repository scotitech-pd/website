"use client";

const closingPoints = [
  "A calmer digital environment for structured reflection and planning.",
  "A more private distribution route through AppDeploy instead of a public-store-first model.",
  "A product direction shaped by real friction, not abstract feature thinking.",
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 text-[#0F172A]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#F8FAFC_0%,#EEF2FF_48%,#E0F2FE_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.06),transparent_24%)]" />

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-[#4F46E5]/80 mb-3">
              Why ClarityPath Matters
            </p>
            <h2 className="text-3xl md:text-5xl font-karla font-semibold mb-5">
              A product built for decisions that need more thought, not more noise
            </h2>
            <p className="text-slate-700 font-lora text-lg leading-8">
              ClarityPath is part of the wider ScotiTech portfolio because it
              reflects the same principle behind the company’s other products:
              use software to reduce friction, improve clarity, and support a
              more controlled digital experience around a real user need.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white/85 backdrop-blur-md p-6 sm:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-slate-500 mb-5">
              What it shows
            </p>
            <div className="space-y-4">
              {closingPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 font-lora text-slate-700 leading-7"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

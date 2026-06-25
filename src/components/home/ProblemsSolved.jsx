"use client";

import { Smartphone, ServerCog, Route, Lock } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";

const problems = [
  {
    no: "01",
    icon: Smartphone,
    title: "Internal app rollout is messy",
    body: "Distributing iOS apps to staff and partners relies on manual steps, unclear access, and no view of who has which release.",
    solved: "AppDeploy",
    accent: "text-orange-400",
    glowColor: "rgba(226,88,14,0.15)",
  },
  {
    no: "02",
    icon: ServerCog,
    title: "Operations are scattered across tools",
    body: "Mail, files, chat, and tasks live in disconnected SaaS, raising cost and weakening control over company data.",
    solved: "AXOS",
    accent: "text-sky-400",
    glowColor: "rgba(56,189,248,0.12)",
  },
  {
    no: "03",
    icon: Route,
    title: "Sensitive journeys need structure",
    body: "Guided, high-stakes user decisions demand a private, considered flow — not a generic form or chatbot.",
    solved: "ClarityPath",
    accent: "text-amber-400",
    glowColor: "rgba(251,191,36,0.12)",
  },
  {
    no: "04",
    icon: Lock,
    title: "Privacy can't be an afterthought",
    body: "Teams need clear data boundaries and deployment options they can actually reason about and defend.",
    solved: "Every product",
    accent: "text-emerald-400",
    glowColor: "rgba(52,211,153,0.12)",
  },
];

export default function ProblemsSolved({ chapterNo }) {
  return (
    /*
     * Negative margins pull this dark section behind the adjacent light sections
     * so colours genuinely overlap — no hard edge. Extra top/bottom padding
     * compensates so content isn't clipped. z-10 keeps it above siblings.
     */
    <section
      className="relative z-10 bg-[#080d18]"
      style={{ margin: "-80px 0", padding: "120px 0" }}
    >
      {/* Subtle centre glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(226,88,14,0.07),transparent_70%)]" />

      <Container className="relative z-10">
        {/* Chapter header */}
        <Reveal>
          <div className="mb-14 flex items-end justify-between gap-6 border-b border-white/8 pb-8">
            <div>
              {chapterNo && (
                <p className="mb-3 font-karla text-xs font-semibold uppercase tracking-[0.22em] text-brand/70">
                  {chapterNo} // Problems we solve
                </p>
              )}
              <h2 className="max-w-2xl font-geist-sans text-[clamp(1.8rem,1.2rem+2.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-white">
                We build for the operational problems teams actually hit.
              </h2>
            </div>
            <p className="hidden max-w-xs font-karla text-sm leading-relaxed text-white/40 lg:block">
              Each product starts from a real, recurring friction point — and stays focused on solving it well.
            </p>
          </div>
        </Reveal>

        {/* Problem grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.07}>
                <div
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.055]"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
                >
                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at 30% 20%, ${p.glowColor}, transparent 65%)`,
                    }}
                  />
                  <span className="select-none font-mono text-3xl font-bold text-white/8">
                    {p.no}
                  </span>
                  <span className="mt-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/8">
                    <Icon size={19} className={p.accent} />
                  </span>
                  <h3 className="mt-5 font-karla text-[15px] font-semibold leading-snug text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 font-karla text-sm leading-relaxed text-white/45">
                    {p.body}
                  </p>
                  <p className="mt-5 border-t border-white/8 pt-4 font-karla text-[11px] font-semibold uppercase tracking-[0.12em] text-white/30">
                    Solved by <span className={p.accent}>{p.solved}</span>
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

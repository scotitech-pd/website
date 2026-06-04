"use client";

import { Smartphone, ServerCog, Route, Lock } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

const problems = [
  {
    icon: Smartphone,
    title: "Internal app rollout is messy",
    body: "Distributing iOS apps to staff and partners relies on manual steps, unclear access, and no view of who has which release.",
    solved: "AppDeploy",
    accent: "text-appdeploy",
  },
  {
    icon: ServerCog,
    title: "Operations are scattered across tools",
    body: "Mail, files, chat, and tasks live in disconnected SaaS, raising cost and weakening control over company data.",
    solved: "AXOS",
    accent: "text-axos",
  },
  {
    icon: Route,
    title: "Sensitive journeys need structure",
    body: "Guided, high-stakes user decisions demand a private, considered flow — not a generic form or chatbot.",
    solved: "ClarityPath",
    accent: "text-claritypath",
  },
  {
    icon: Lock,
    title: "Privacy can't be an afterthought",
    body: "Teams need clear data boundaries and deployment options they can actually reason about and defend.",
    solved: "Every product",
    accent: "text-brand-strong",
  },
];

export default function ProblemsSolved() {
  return (
    <Section surface="base" spacing="lg">
      <Reveal className="max-w-3xl">
        <Eyebrow>Problems we solve</Eyebrow>
        <h2 className="t-h1 mt-3">
          We build for the operational problems teams actually hit.
        </h2>
        <p className="t-lead mt-5">
          Each product starts from a real, recurring friction point — and stays
          focused on solving it well.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((p, i) => {
          const Icon = p.icon;
          return (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className="flex h-full flex-col rounded-2xl border border-hairline bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-sunken">
                  <Icon size={20} className={p.accent} />
                </span>
                <h3 className="mt-5 font-karla text-lg font-semibold text-strong">
                  {p.title}
                </h3>
                <p className="t-small mt-2 flex-1 leading-6">{p.body}</p>
                <p className="mt-4 border-t border-hairline pt-4 font-karla text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                  Solved by{" "}
                  <span className={p.accent}>{p.solved}</span>
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

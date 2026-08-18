"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, ArrowRight, Trophy, Globe } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

const team = [
  {
    name: "Pradeep Dahiya",
    title: "Founder & CEO, Lead Developer",
    img: "/images/home/pradeep.jpg",
    linkedin: "https://www.linkedin.com/in/pradeepkumar2411/",
    description:
      "Architects and builds AppDeploy and AXOS, and sets ScotiTech's product vision, commercial strategy, and global direction.",
    credentials: [
      { icon: Trophy, text: "NextGen Innovator of the Year 2025" },
      { icon: Globe, text: "Scotland StartUp Awards 2026 Finalist" },
    ],
  },
  {
    name: "Daniel Chapman",
    title: "Co-Founder & Director",
    img: "/images/aboutus/daniel.jpeg",
    linkedin: "https://www.linkedin.com/in/daniel-chapman-755098327/",
    description:
      "Supports long-term strategy, commercial direction, and partner positioning across ScotiTech's core product portfolio.",
    credentials: [],
  },
];

export default function LeadershipStrip({ chapterNo }) {
  return (
    <Section surface="base" spacing="lg">
      {/* Section header */}
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <Reveal className="max-w-2xl">
          <Eyebrow>{chapterNo ? `${chapterNo} // ` : ""}Leadership</Eyebrow>
          <h2 className="t-h1 mt-3">Leadership with direct accountability.</h2>
          <p className="t-lead mt-5">
            Clients and partners work directly with the people responsible for
            product direction, commercial decisions, engineering, and delivery.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href="/aboutus"
            className="inline-flex items-center gap-1.5 font-karla text-sm font-semibold text-brand-strong hover:text-brand"
          >
            Meet the full team
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>

      {/* Team cards — horizontal layout, portrait small and contained */}
      <div className="mt-12 flex flex-col gap-5">
        {team.map((m, i) => {
          const Icon0 = m.credentials[0]?.icon;
          return (
            <Reveal key={m.name} delay={i * 0.08}>
              <div className="group flex flex-col gap-5 rounded-2xl border border-hairline bg-surface p-5 shadow-soft transition-all duration-300 hover:shadow-card sm:flex-row sm:items-start sm:gap-7 md:p-7">

                {/* Portrait — small, square, contained */}
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-surface-sunken sm:h-24 sm:w-24">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    sizes="96px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-3 min-w-0">

                  {/* Name + title row */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-karla text-lg font-semibold text-strong leading-tight">
                        {m.name}
                      </p>
                      <p className="mt-0.5 font-karla text-sm font-semibold text-brand-strong">
                        {m.title}
                      </p>
                    </div>
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name} on LinkedIn`}
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hairline bg-surface-muted text-muted transition-all hover:border-[#0077b5]/30 hover:bg-[#0077b5]/10 hover:text-[#0077b5]"
                    >
                      <Linkedin size={14} />
                    </a>
                  </div>

                  {/* Bio */}
                  <p className="font-karla text-sm leading-relaxed text-body">
                    {m.description}
                  </p>

                  {/* Bottom row — credentials + link */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <div className="flex flex-wrap gap-2">
                      {m.credentials.map((c) => {
                        const Icon = c.icon;
                        return (
                          <span
                            key={c.text}
                            className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface-muted px-3 py-1 font-karla text-[11px] font-medium text-muted"
                          >
                            <Icon size={11} className="text-brand-strong" />
                            {c.text}
                          </span>
                        );
                      })}
                    </div>
                    <Link
                      href="/aboutus"
                      className="inline-flex items-center gap-1 font-karla text-xs font-semibold text-brand-strong hover:text-brand"
                    >
                      Full profile
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

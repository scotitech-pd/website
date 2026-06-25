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
    title: "Founder & CEO",
    img: "/images/home/pradeep.jpg",
    linkedin: "https://www.linkedin.com/in/pradeepkumar2411/",
    description:
      "Leads ScotiTech's product vision, commercial strategy, and global direction across AppDeploy, AXOS, ClarityPath, and wider technology delivery.",
    credentials: [
      { icon: Trophy, text: "NextGen Innovator of the Year 2025" },
      { icon: Globe, text: "Scotland StartUp Awards 2026 Finalist" },
    ],
  },
  {
    name: "Daniel Chapman",
    title: "Director & Co-founder",
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
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <Reveal className="max-w-2xl">
          <Eyebrow>{chapterNo ? `${chapterNo} // ` : ""}Leadership</Eyebrow>
          <h2 className="t-h1 mt-3">The team that built this.</h2>
          <p className="t-lead mt-5">
            ScotiTech is founder-led from Scotland with a wider team across
            product, engineering, infrastructure, AI, content, and global delivery.
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

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.08}>
            <div className="group relative overflow-hidden rounded-3xl border border-hairline bg-surface shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
              {/* Large photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-sunken sm:aspect-[3/2]">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {/* Dark gradient over bottom of photo for text legibility */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Name overlay on photo */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-geist-sans text-2xl font-semibold text-white drop-shadow">
                    {m.name}
                  </p>
                  <p className="mt-0.5 font-karla text-sm font-semibold text-brand">
                    {m.title}
                  </p>
                </div>
                {/* LinkedIn badge */}
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} on LinkedIn`}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#0077b5] shadow-soft backdrop-blur transition-all hover:scale-105 hover:bg-white"
                >
                  <Linkedin size={16} />
                </a>
              </div>

              {/* Body */}
              <div className="flex flex-col p-6 md:p-7">
                <p className="font-karla text-[15px] leading-relaxed text-body">
                  {m.description}
                </p>

                {/* Credential pills */}
                {m.credentials.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {m.credentials.map((c) => {
                      const Icon = c.icon;
                      return (
                        <span
                          key={c.text}
                          className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface-muted px-3 py-1.5 font-karla text-xs font-medium text-body"
                        >
                          <Icon size={12} className="text-brand-strong" />
                          {c.text}
                        </span>
                      );
                    })}
                  </div>
                )}

                <Link
                  href="/aboutus"
                  className="mt-6 inline-flex items-center gap-1.5 font-karla text-sm font-semibold text-brand-strong hover:text-brand"
                >
                  View full profile
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

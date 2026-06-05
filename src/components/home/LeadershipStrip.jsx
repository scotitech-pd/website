"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

const team = [
  {
    name: "Pradeep Dahiya",
    title: "Co-Founder & CEO",
    img: "/images/home/pradeep.jpg",
    linkedin: "https://www.linkedin.com/in/pradeepkumar2411/",
    description:
      "Leads ScotiTech's product vision, commercial strategy, and global direction across AppDeploy, AXOS, ClarityPath, and wider technology delivery.",
  },
  {
    name: "Daniel Chapman",
    title: "Director & Co-founder",
    img: "/images/aboutus/daniel.jpeg",
    linkedin: "https://www.linkedin.com/in/daniel-chapman-755098327/",
    description:
      "Supports long-term strategy, commercial direction, and partner positioning across ScotiTech's core product portfolio.",
  },
];

export default function LeadershipStrip() {
  return (
    <Section surface="muted" spacing="lg">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <Reveal className="max-w-2xl">
          <Eyebrow>Leadership</Eyebrow>
          <h2 className="t-h1 mt-3">Founder-led product direction.</h2>
          <p className="t-lead mt-5">
            ScotiTech is led by Pradeep Dahiya and Daniel Chapman, with a wider
            team supporting product, engineering, infrastructure, AI, content,
            and delivery worldwide.
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

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.06}>
            <div className="group grid grid-cols-1 h-full overflow-hidden rounded-2xl border border-hairline bg-surface shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:grid-cols-[42%_58%]">
              <div className="relative min-h-[300px] overflow-hidden bg-surface-sunken sm:min-h-[360px]">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} on LinkedIn`}
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-surface/90 text-brand-strong shadow-soft backdrop-blur transition-colors hover:bg-brand hover:text-brand-contrast"
                >
                  <Linkedin size={16} />
                </a>
              </div>
              <div className="flex flex-col p-6 md:p-7">
                <p className="font-karla text-2xl font-semibold text-strong">
                  {m.name}
                </p>
                <p className="mt-1 font-karla text-sm font-semibold text-brand-strong">
                  {m.title}
                </p>
                <p className="t-body mt-5 flex-1">{m.description}</p>
                <Link
                  href="/aboutus"
                  className="mt-6 inline-flex items-center gap-1.5 font-karla text-sm font-semibold text-brand-strong hover:text-brand"
                >
                  View full team
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

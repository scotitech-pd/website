"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

const team = [
  {
    name: "Daniel Chapman",
    title: "Director & Co-founder",
    img: "/images/aboutus/daniel.jpeg",
    linkedin: "https://www.linkedin.com/in/daniel-chapman-755098327/",
  },
  {
    name: "Hitesh Dubey",
    title: "Head of DevOps & Infrastructure",
    img: "/images/aboutus/hitesh.png",
    linkedin: "https://www.linkedin.com/in/hitesh-dubey-4349731b/",
  },
  {
    name: "Anurag Parmar",
    title: "Client Engagement & Product Strategy",
    img: "/images/aboutus/anurag.jfif",
    linkedin: "https://www.linkedin.com/in/anuragparmar/",
  },
  {
    name: "Prachi Dwivedi",
    title: "Marketing & Content",
    img: "/images/aboutus/prachi.jpeg",
    linkedin: "https://www.linkedin.com/in/prachi-dwivedi-5724a51b6/",
  },
];

export default function LeadershipStrip() {
  return (
    <Section surface="muted" spacing="lg">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <Reveal className="max-w-2xl">
          <Eyebrow>Leadership</Eyebrow>
          <h2 className="t-h1 mt-3">The team behind the products.</h2>
          <p className="t-lead mt-5">
            Product strategy, engineering, and infrastructure across the UK and
            India — building with focus and accountability.
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

      <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.06}>
            <div className="group overflow-hidden rounded-2xl border border-hairline bg-surface shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-sunken">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
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
              <div className="p-4">
                <p className="font-karla font-semibold text-strong">{m.name}</p>
                <p className="t-small mt-0.5">{m.title}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { founder, recognition } from "@/lib/company";

/** The founder, in a real portrait, with the recognition he has received. */
export default function FounderSection() {
  const award = recognition[1];

  return (
    <Section id="founder" surface="base" spacing="lg" className="border-y border-hairline">
      <div className="grid gap-10 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:items-center lg:gap-16">
        <Reveal>
          <div className="relative mx-auto max-w-[420px] overflow-hidden rounded-2xl bg-surface-sunken shadow-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={founder.portrait.src}
              srcSet={`/images/company/pradeep-dahiya-400.webp 400w, ${founder.portrait.src} 800w`}
              sizes="(min-width: 768px) 420px, 90vw"
              alt={founder.portrait.alt}
              width={founder.portrait.width}
              height={founder.portrait.height}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
        </Reveal>

        <Reveal>
          <p className="t-eyebrow">Founder</p>
          <h2 className="t-h1 mt-3">{founder.name}</h2>
          <p className="mt-2 text-[17px] font-medium text-body">{founder.title}, ScotiTech Solutions</p>
          <p className="t-lead mt-6 max-w-2xl">{founder.bio}</p>
          <p className="mt-6 max-w-2xl border-l-2 border-brand pl-4 text-[15px] leading-6 text-body">
            Named NextGen Innovator of the Year at the {award.title}.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-brand px-5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-strong"
            >
              Talk to Pradeep
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-strong hover:text-brand"
            >
              LinkedIn
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <Link href="/aboutus#team" className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-strong hover:text-brand">
              Meet the team
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

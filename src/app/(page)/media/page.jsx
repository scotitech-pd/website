import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { contact } from "@/lib/company";

const stories = [
  {
    label: "Finalist",
    title: "UK StartUp Awards 2026: Scotland Regional Finalist",
    summary:
      "ScotiTech was named a Scotland Regional Finalist for Digital StartUp of the Year at the UK StartUp Awards 2026.",
    meta: "June 2026 · Scotland",
    image: { src: "/images/company/startup-awards-2026-finalist-600.webp", alt: "UK StartUp Awards 2026 Scotland Regional Finalist certificate for ScotiTech Solutions" },
  },
  {
    label: "Award",
    title: "NextGen Innovator of the Year",
    summary: "Pradeep Dahiya was named NextGen Innovator of the Year at the Forttuna Global Excellence Awards 2025.",
    meta: "December 2025 · Dubai, UAE",
    image: { src: "/images/company/forttuna-2025-award-800.webp", alt: "Pradeep Dahiya with the NextGen Innovator of the Year award" },
  },
  {
    label: "Recognition",
    title: "Indian Tech Society 2024",
    summary:
      "Recognised in London by the Indian Tech Society as a leading Indian talent in the UK digital technology sector.",
    meta: "July 2024 · London",
  },
  {
    label: "Podcast",
    title: "Vamiq (then AppDeploy) in a founder conversation",
    summary: "A founder conversation on private iOS app distribution and controlled rollouts.",
    meta: "2026 · Online",
    href: "https://www.youtube.com/watch?v=0IMLuoXFYK8&t=2036s",
    cta: "Watch the conversation",
  },
];

const gallery = [
  { src: "/images/company/startup-awards-2026-event-1-800.webp", full: "/images/company/startup-awards-2026-event-1-1600.webp", alt: "The UK StartUp Awards 2026 Scotland regional final", w: 800, h: 600 },
  { src: "/images/company/startup-awards-2026-event-2-800.webp", full: "/images/company/startup-awards-2026-event-2-1600.webp", alt: "Finalists on screen at the UK StartUp Awards 2026 Scotland regional final", w: 800, h: 600 },
  { src: "/images/company/forttuna-2025-stage-800.webp", full: "/images/company/forttuna-2025-stage-1200.webp", alt: "Pradeep Dahiya receiving the NextGen Innovator of the Year award on stage", w: 800, h: 1066 },
  { src: "/images/company/forttuna-2025-trophy-800.webp", full: "/images/company/forttuna-2025-trophy-800.webp", alt: "The Forttuna Global Excellence Awards 2025 trophy", w: 800, h: 1066 },
  { src: "/images/company/nextgen-certificate-1200.webp", full: "/images/company/nextgen-certificate-1200.webp", alt: "Pradeep Dahiya with the NextGen Innovator award certificate", w: 1200, h: 799 },
  { src: "/images/company/forttuna-2025-plaque-1200.webp", full: "/images/company/forttuna-2025-plaque-1200.webp", alt: "The NextGen Innovator of the Year plaque", w: 1200, h: 1600 },
];

export default function MediaPage() {
  return (
    <>
      <section className="bg-surface-muted pb-14 pt-12 md:pb-20 md:pt-20">
        <Container>
          <div className="max-w-3xl">
            <p className="t-eyebrow reveal-now">Media and awards</p>
            <h1 className="t-display reveal-now mt-4">Milestones and recognition.</h1>
            <p className="t-lead reveal-now mt-6 max-w-2xl">
              The awards, finalist places and conversations that mark ScotiTech&apos;s journey so far.
            </p>
          </div>
        </Container>
      </section>

      <Section surface="muted" spacing="none" className="pb-20 md:pb-28">
        <ul className="grid gap-6 md:grid-cols-2">
          {stories.map((s) => (
            <Reveal as="li" key={s.title} className="flex">
              <article className="flex w-full gap-6 rounded-xl border border-hairline bg-surface p-6 sm:p-7">
                <div className="flex flex-1 flex-col">
                  <p className="t-eyebrow">{s.label}</p>
                  <h2 className="mt-3 text-[1.25rem] font-semibold leading-snug text-strong">{s.title}</h2>
                  <p className="mt-3 text-[15px] leading-6 text-body">{s.summary}</p>
                  <p className="mt-auto pt-5 text-[13px] text-muted">{s.meta}</p>
                  {s.href && (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex w-fit items-center gap-1.5 text-[14px] font-semibold text-brand-strong hover:text-brand"
                    >
                      {s.cta}
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  )}
                </div>
                {s.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={s.image.src}
                    alt={s.image.alt}
                    loading="lazy"
                    decoding="async"
                    className="hidden w-32 shrink-0 self-start rounded-lg object-cover shadow-soft sm:block"
                  />
                )}
              </article>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section surface="base" spacing="lg" className="border-y border-hairline">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
          <Reveal as="article">
            <p className="t-eyebrow">Press release</p>
            <h2 className="t-h1 mt-3">ScotiTech founder named NextGen Innovator of the Year.</h2>
            <div className="mt-6 space-y-5 text-[17px] leading-8 text-body">
              <p>
                ScotiTech Solutions Limited announces that its founder, Pradeep Dahiya, has been
                named NextGen Innovator of the Year at the Forttuna Global Excellence Awards 2025, held in
                Dubai, UAE.
              </p>
              <figure className="overflow-hidden rounded-xl bg-ink">
                <video
                  src="/images/home/pv1.mp4"
                  poster="/images/company/forttuna-2025-stage-1200.webp"
                  controls
                  playsInline
                  preload="none"
                  className="aspect-video w-full object-contain"
                >
                  Your browser cannot play this video.
                </video>
                <figcaption className="bg-surface px-1 pt-3 text-[13px] text-muted">
                  Ceremony highlight, Forttuna Global Excellence Awards 2025, Dubai
                </figcaption>
              </figure>
              <p>
                The award recognised practical product-building, disciplined execution and founder-led
                progress from a UK software company. The NextGen Innovator category recognises
                product builders who show practical execution, leadership and consistent delivery.
              </p>
              <blockquote className="border-l-2 border-brand pl-5 font-serif text-[1.3rem] leading-8 text-strong">
                &ldquo;This recognition reflects not just my journey, but the collective effort, belief and
                support behind ScotiTech. We build technology with the intention of making life simpler,
                safer and more accessible.&rdquo;
                <footer className="mt-3 font-sans text-[14px] font-semibold text-body">
                  Pradeep Dahiya, Founder &amp; Software Architect
                </footer>
              </blockquote>
              <p>
                For ScotiTech, the award is an early milestone. The company stays focused on steady product
                execution for customers worldwide.
              </p>
            </div>
          </Reveal>

          <Reveal as="aside" className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-hairline bg-surface-muted p-6">
              <h2 className="text-[17px] font-semibold text-strong">Media enquiries</h2>
              <p className="mt-2 text-[15px] leading-6 text-body">
                For interviews, images or company information, email us.
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-brand-strong hover:text-brand"
              >
                <Mail size={16} aria-hidden="true" />
                {contact.email}
              </a>
              <Link href="/aboutus" className="mt-3 block text-[15px] font-semibold text-brand-strong hover:text-brand">
                About ScotiTech
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section surface="muted" spacing="lg">
        <Reveal className="max-w-2xl">
          <p className="t-eyebrow">Gallery</p>
          <h2 className="t-h1 mt-3">From the events.</h2>
        </Reveal>
        <ul className="mt-10 columns-2 gap-4 md:columns-3">
          {gallery.map((g) => (
            <li key={g.src} className="mb-4 break-inside-avoid">
              <a href={g.full} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-xl bg-grade shadow-soft">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.src}
                  alt={g.alt}
                  width={g.w}
                  height={g.h}
                  loading="lazy"
                  decoding="async"
                  className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import LeadershipTeam from "@/components/aboutus/Leadershipteam";
import FounderSection from "@/components/home/FounderSection";
import ContactSection from "@/components/home/ContactSection";
import { ogImage, pageMetadata } from "@/lib/seo";
import { companyFacts, recognition } from "@/lib/company";

export const metadata = pageMetadata({
  title: "About ScotiTech",
  description:
    "ScotiTech Solutions Limited is a UK software company in Scotland, the company behind Vamiq. Meet the founder, Pradeep Dahiya, and the team.",
  path: "/aboutus",
  image: ogImage("company.jpg", "ScotiTech Solutions, a software company built in Scotland"),
});

function Tile({ src, srcSet, sizes, alt, width, height, className, label }) {
  return (
    <figure className={`relative overflow-hidden rounded-xl bg-grade shadow-card ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="photo-tint absolute inset-0" aria-hidden="true" />
      {label && (
        <>
          <span className="photo-grade absolute inset-0" aria-hidden="true" />
          <figcaption className="absolute inset-x-0 bottom-0 p-4 text-[13px] font-semibold leading-snug text-white">
            {label}
          </figcaption>
        </>
      )}
    </figure>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-muted pb-16 pt-12 md:pb-24 md:pt-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <p className="t-eyebrow reveal-now">About ScotiTech</p>
              <h1 className="t-display reveal-now mt-4">Software built in Scotland, for teams that need control.</h1>
              <p className="t-lead reveal-now mt-6 max-w-xl">
                ScotiTech Solutions Limited is a UK software company, registered in Scotland and run
                from Eurocentral, Motherwell. We make Vamiq (formerly AppDeploy), our flagship, along
                with AXOS and ClarityPath, and we work with teams worldwide.
              </p>
            </div>
            <div className="reveal-now grid h-[420px] grid-cols-[1.35fr_1fr] grid-rows-2 gap-3 sm:h-[480px]">
              <Tile
                className="row-span-2"
                src={recognition[0].image.src}
                srcSet={`${recognition[0].image.srcSmall} 800w, ${recognition[0].image.src} 1600w`}
                sizes="(min-width: 1024px) 30vw, 60vw"
                alt={recognition[0].image.alt}
                width={1600}
                height={1200}
                label="UK StartUp Awards 2026, Scotland regional final"
              />
              <Tile
                src="/images/company/office-maxim-1-exterior.webp"
                alt="Maxim 1 at Eurocentral, Motherwell, where ScotiTech works"
                width={480}
                height={270}
                label="Maxim 1, Eurocentral"
              />
              <Tile
                src="/images/company/office-meeting-room.webp"
                alt="A meeting room at ScotiTech's Eurocentral office"
                width={702}
                height={468}
              />
            </div>
          </div>

          <dl className="reveal-now mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-hairline pt-10 md:grid-cols-4">
            {companyFacts.map((f) => (
              <div key={f.label}>
                <dt className="text-[13px] text-muted">{f.label}</dt>
                <dd className="mt-1 text-[18px] font-semibold text-strong">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Story */}
      <Section surface="base" spacing="lg" className="border-y border-hairline">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <Reveal>
            <p className="t-eyebrow">Why we exist</p>
            <h2 className="t-h1 mt-3">Practical control, not platform sprawl.</h2>
          </Reveal>
          <Reveal className="space-y-5">
            <p className="t-lead">
              Most teams do not need another sprawling platform. They need a few focused tools that do
              one job well, and that leave them in charge of how software is rolled out and where their
              data lives.
            </p>
            <p className="t-body">
              That is the idea behind everything we make. Vamiq manages a company&apos;s iPhones, iPads
              and Macs and gives its people their own branded app store, with each release checked
              before it reaches a device. AXOS brings mail, files, chat, video and tasks into one private
              workspace, with governed AI built in, on the organisation&apos;s own servers. ClarityPath
              brings structure to life&apos;s biggest decisions.
            </p>
            <p className="t-body">
              We are founder-led and close to our customers. The people who build the products are the
              people you talk to, from the first call to the day you go live.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
              <Link href="/products" className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-strong hover:text-brand">
                Explore our products
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/#services" className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-strong hover:text-brand">
                See our services
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <FounderSection />
      <LeadershipTeam />

      {/* Recognition */}
      <Section surface="muted" spacing="lg">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal className="max-w-2xl">
            <p className="t-eyebrow">Recognition</p>
            <h2 className="t-h1 mt-3">Recognised for what we build.</h2>
          </Reveal>
          <Link href="/media" className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-strong hover:text-brand">
            Media and awards
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {recognition.map((r) => (
            <Reveal key={r.title}>
              <figure className="relative overflow-hidden rounded-xl bg-grade shadow-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={r.image.src}
                  srcSet={r.image.srcSmall !== r.image.src ? `${r.image.srcSmall} 800w, ${r.image.src} 1600w` : undefined}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  alt={r.image.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover object-top"
                />
                <span className="photo-tint absolute inset-0" aria-hidden="true" />
                <span className="photo-grade absolute inset-0" aria-hidden="true" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <span className="block text-[1.2rem] font-semibold text-white">{r.title}</span>
                  <span className="mt-1 block text-[15px] text-white/80">{r.detail}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactSection />
    </>
  );
}

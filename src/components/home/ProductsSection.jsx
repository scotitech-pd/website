import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import PhotoCard from "@/components/media/PhotoCard";
import FilmDialog from "@/components/media/FilmDialog";
import { VAMIQ_URL, vamiqLinks } from "@/lib/company";

const vamiqParts = [
  {
    photo: "iphone-at-work",
    eyebrow: "For your people",
    title: "Private app distribution",
    body: "Your own branded app store for your company's private and internal apps.",
    href: vamiqLinks.privateApps,
  },
  {
    photo: "device-macbook",
    eyebrow: "For your devices",
    title: "Device management",
    body: "Enrol company iPhones, iPads and Macs, install their apps, and manage their settings and security.",
    href: vamiqLinks.devices,
    position: "55% 50%",
  },
  {
    photo: "code-on-mac",
    eyebrow: "For your releases",
    title: "Release controls",
    body: "Check each new build before it reaches a device, and keep a record of what was released.",
    href: vamiqLinks.releases,
  },
];

const otherProducts = [
  {
    name: "AXOS",
    status: { variant: "early", label: "Enterprise" },
    eyebrow: "Private AI workspace",
    title: "Your enterprise AI workspace, on your own servers.",
    body: "Mail, files, chat, video and tasks with governed AI built in, running entirely inside your own environment.",
    href: "/products/axos",
    linkLabel: "Explore AXOS",
    image: {
      src: "/images/products/axos/command-center-dashboard-1200.webp",
      width: 1200,
      height: 637,
      alt: "AXOS Command Center: governed AI and the connected workspace modules",
    },
    frame: "wide",
  },
  {
    name: "ClarityPath",
    status: { variant: "supporting", label: "In the Vamiq portal" },
    eyebrow: "Guided decision support",
    title: "A clear daily focus for life's biggest decisions.",
    body: "Turns considered choices such as relocation, career, property and finances into a daily focus and a structured plan.",
    href: "/products/claritypath",
    linkLabel: "Explore ClarityPath",
    image: {
      src: "/images/products/claritypath/app-focus-600.webp",
      width: 600,
      height: 1298,
      alt: "ClarityPath on iPhone, showing today's focus",
    },
    frame: "phone",
  },
];

export default function ProductsSection({ showIntro = true }) {
  return (
    <Section id="products" surface="muted" spacing="lg">
      {showIntro && (
      <Reveal className="max-w-3xl">
        <p className="t-eyebrow">What we make</p>
        <h2 className="t-h1 mt-3">Focused products that do one job well.</h2>
        <p className="t-lead mt-5">
          Vamiq is our flagship. Use it to run your company&apos;s Apple devices and your own apps from
          one workspace.
        </p>
      </Reveal>
      )}

      {/* Vamiq, the flagship */}
      <Reveal className={showIntro ? "mt-12" : ""}>
        <article className="relative overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#032b2a_0%,#05403c_55%,#0b5550_100%)] text-white shadow-lift">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_95%_0%,rgba(94,234,212,0.16),transparent_60%)]"
          />
          <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14 lg:p-14">
            <div>
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/brand/vamiq/vamiq-logo-on-dark.svg" alt="Vamiq" width={150} height={51} className="h-9 w-auto" />
                <Badge variant="onInk">Live</Badge>
              </div>
              <h3 className="mt-7 font-serif text-[clamp(1.75rem,1.3rem+1.6vw,2.5rem)] font-normal leading-[1.12] tracking-[-0.01em] text-white">
                Your Apple devices and your own apps, managed in one place.
              </h3>
              <p className="mt-5 max-w-xl text-[16px] leading-7 text-white/75">
                Set up and secure your team&apos;s iPhones, iPads and Macs, and put your private apps on
                them through your own branded app store. Each release is checked before it ships.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={VAMIQ_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-lg bg-white px-5 text-[15px] font-semibold text-ink transition-colors hover:bg-[#eef4f2]"
                >
                  Start free on vamiq.app
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <Link
                  href="/products/vamiq"
                  className="inline-flex h-11 items-center gap-2 rounded-lg px-4 text-[15px] font-semibold text-white ring-1 ring-white/25 transition-colors hover:bg-white/10"
                >
                  Explore Vamiq
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
              <p className="mt-5 text-[13px] text-white/60">
                Free for up to 5 devices, with no card. £1 per device a month after that.
              </p>
            </div>
            <FilmDialog variant="poster" />
          </div>
        </article>
      </Reveal>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {vamiqParts.map((part, i) => (
          <Reveal key={part.title} delay={i * 0.05}>
            <PhotoCard {...part} external linkLabel="On vamiq.app" />
          </Reveal>
        ))}
      </div>

      {/* Also from ScotiTech */}
      <Reveal className="mt-20">
        <h3 className="t-h2">Also from ScotiTech</h3>
      </Reveal>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {otherProducts.map((p) => (
          <Reveal key={p.name}>
            <Link
              href={p.href}
              className="group grid h-full overflow-hidden rounded-xl border border-hairline bg-surface shadow-soft transition-shadow hover:shadow-card sm:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]"
            >
              <div className="flex flex-col p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-[17px] font-semibold text-strong">{p.name}</span>
                  <Badge variant={p.status.variant}>{p.status.label}</Badge>
                </div>
                <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">{p.eyebrow}</p>
                <p className="mt-2 text-[1.2rem] font-semibold leading-snug text-strong">{p.title}</p>
                <p className="mt-3 text-[15px] leading-6 text-body">{p.body}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[14px] font-semibold text-brand-strong">
                  {p.linkLabel}
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
              <div
                className={
                  p.frame === "phone"
                    ? "relative flex items-end justify-center overflow-hidden bg-[linear-gradient(160deg,#efe9dc,#e2d6bd)] px-8 pt-8"
                    : "relative flex items-center overflow-hidden bg-[linear-gradient(160deg,#0d1b2a,#1d3550)] py-8 pl-6"
                }
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image.src}
                  alt={p.image.alt}
                  width={p.image.width}
                  height={p.image.height}
                  loading="lazy"
                  decoding="async"
                  className={
                    p.frame === "phone"
                      ? "w-[58%] max-w-[210px] translate-y-6 rounded-t-[1.6rem] border-[5px] border-b-0 border-ink shadow-lift transition-transform duration-500 group-hover:translate-y-4"
                      : "w-[150%] max-w-none rounded-l-lg shadow-lift ring-1 ring-white/10 transition-transform duration-500 group-hover:-translate-x-1"
                  }
                />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

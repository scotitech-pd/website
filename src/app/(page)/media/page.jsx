import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Globe, Mail, MapPin, PlayCircle } from "lucide-react";

export const metadata = {
  title: "Media & Recognition | ScotiTech Solutions",
  description:
    "Company milestones, awards, recognition, and media contact information for ScotiTech Solutions.",
};

const recognitionStories = [
  {
    label: "Recognition",
    title: "Indian Tech Society 2024",
    summary:
      "Recognised in London by the Indian Tech Society as a leading Indian talent in the UK digital technology sector.",
    date: "July 2024",
    location: "London, UK",
  },
  {
    label: "Award",
    title: "NextGen Innovator of the Year",
    summary:
      "Pradeep Dahiya was recognised at the Forttuna Global Excellence Awards 2025 in Dubai.",
    date: "December 2025",
    location: "Dubai, UAE",
  },
  {
    label: "Shortlist",
    title: "UK StartUp Awards 2026",
    summary:
      "ScotiTech was shortlisted in the Digital StartUp of the Year category at the Scotland regional final.",
    date: "June 2026",
    location: "Scotland, UK",
  },
];

const gallery = [
  { src: "/images/home/p1.png", alt: "Pradeep Dahiya holding the award" },
  { src: "/images/home/p2.jpg", alt: "Forttuna Global Excellence Awards 2025" },
  { src: "/images/home/p3.jpg", alt: "NextGen Innovator trophy" },
  { src: "/images/home/p4.jpeg", alt: "Awards event celebration" },
  { src: "/images/home/award.jpg", alt: "NextGen Innovator Award certificate" },
  { src: "/images/home/forttuna.jpg", alt: "Forttuna Global Excellence Awards branding" },
];

export default function MediaPage() {
  return (
    <main className="bg-[#F7F7F5] text-[#111827]">
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(183,168,77,0.18),transparent_30%),radial-gradient(circle_at_86%_10%,rgba(15,118,110,0.10),transparent_26%)]" />
        <div className="relative z-10 mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              Media and Recognition
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Recognition that strengthens ScotiTech’s product credibility.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl font-lora text-lg leading-8 text-slate-700 md:text-xl">
              A concise view of recognitions and public milestones behind
              ScotiTech’s product journey from Scotland.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="grid gap-5 lg:grid-cols-3">
            {recognitionStories.map((story) => (
              <article
                key={story.title}
                className="rounded-[1.15rem] border border-[#d9ded7] bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.05)]"
              >
                <span className="inline-flex rounded-full bg-[#F9F6E7] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#8A7A21]">
                  {story.label}
                </span>
                <h2 className="mt-4 text-2xl font-semibold text-slate-950">
                  {story.title}
                </h2>
                <p className="mt-3 font-lora leading-8 text-slate-600">
                  {story.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-5 font-lora text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4 text-[#0F766E]" />
                    <span>{story.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-[#0F766E]" />
                    <span>{story.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="grid gap-8 lg:grid-cols-[62%_38%]">
            <article className="overflow-hidden rounded-[1.15rem] border border-[#d9ded7] bg-white shadow-[0_22px_60px_rgba(15,23,42,0.07)]">
              <div className="relative aspect-video bg-[#100E0C]">
                <video
                  src="/images/home/pv1.mp4"
                  controls
                  playsInline
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/60 px-4 py-1.5 text-xs text-white backdrop-blur">
                  <PlayCircle className="size-4 text-[#FDE68A]" />
                  Ceremony highlight
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#B7A84D]">
                  Featured milestone
                </p>
                <h2 className="text-3xl font-semibold text-slate-950">
                  Forttuna Global Excellence Awards 2025
                </h2>
                <p className="mt-4 font-lora text-lg leading-8 text-slate-700">
                  The recognition marks a milestone for ScotiTech’s founder-led
                  product execution. The company remains focused on disciplined
                  delivery, product clarity, and building from Scotland with an
                  international outlook.
                </p>
              </div>
            </article>

            <aside className="rounded-[1.15rem] border border-[#d9ded7] bg-[#100E0C] p-6 text-white shadow-[0_22px_60px_rgba(16,14,12,0.18)]">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#FDE68A]">
                Media Contact
              </p>
              <h2 className="text-3xl font-semibold">ScotiTech Solutions</h2>
              <div className="mt-6 space-y-4 font-lora text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 size-4 shrink-0 text-[#5EEAD4]" />
                  <span>Eurocentral, 2 Parklands Way Maxim 1, Maxim Business Park, 1st, Motherwell ML1 4WR, UK</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="size-4 shrink-0 text-[#5EEAD4]" />
                  <a href="https://www.scotitech.com" className="hover:text-white">
                    www.scotitech.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="size-4 shrink-0 text-[#5EEAD4]" />
                  <a href="mailto:info@scotitech.com" className="hover:text-white">
                    info@scotitech.com
                  </a>
                </div>
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#100E0C] transition hover:bg-slate-100"
              >
                Contact our team
                <ArrowRight className="size-4" />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Gallery
              </p>
              <h2 className="text-3xl font-semibold text-slate-950">
                Recognition archive
              </h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/3] overflow-hidden rounded-[1rem] border border-[#d9ded7] bg-white"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

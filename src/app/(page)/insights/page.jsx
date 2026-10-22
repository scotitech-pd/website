import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { featuredInsight, formatInsightDate, insightImage, insights } from "@/lib/insights";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Insights and briefings",
  description:
    "ScotiTech briefings on Apple Business, private app distribution, Apple device management and governed AI.",
  path: "/insights",
});

function Cover({ insight, sizes, eager = false, className = "" }) {
  const img = insightImage(insight.image);
  const contain = insight.imageFit === "contain";
  return (
    <div className={`relative overflow-hidden ${contain ? "bg-ink" : "bg-surface-sunken"} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img.src}
        srcSet={img.srcSet}
        sizes={sizes}
        alt=""
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={`absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.03] ${contain ? "object-contain" : "object-cover"}`}
      />
      {!contain && <span className="photo-tint absolute inset-0" aria-hidden="true" />}
    </div>
  );
}

function Meta({ insight }) {
  return (
    <p className="text-[13px] text-muted">
      {formatInsightDate(insight.date)} · {insight.readTime}
    </p>
  );
}

export default function InsightsPage() {
  const rest = insights.filter((i) => i.slug !== featuredInsight.slug);

  return (
    <>
      <section className="bg-surface-muted pb-12 pt-12 md:pb-16 md:pt-20">
        <Container>
          <div className="max-w-3xl">
            <p className="t-eyebrow reveal-now">Insights</p>
            <h1 className="t-display reveal-now mt-4">Briefings on Apple devices, private apps and AI.</h1>
            <p className="t-lead reveal-now mt-6 max-w-2xl">
              Short, sourced analysis of the platform and policy changes that affect how organisations
              roll out apps, manage devices and adopt AI. Each one ends with what to review next.
            </p>
          </div>

          <Link
            href={`/insights/${featuredInsight.slug}`}
            className="reveal-now group mt-12 grid overflow-hidden rounded-2xl border border-hairline bg-surface shadow-soft transition-shadow hover:shadow-card lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
          >
            <Cover insight={featuredInsight} eager sizes="(min-width: 1024px) 640px, 100vw" className="aspect-[16/10] lg:aspect-auto lg:min-h-[380px]" />
            <article className="flex flex-col p-6 sm:p-8 lg:p-10">
              <p className="t-eyebrow">{featuredInsight.category}</p>
              <h2 className="mt-4 font-serif text-[clamp(1.6rem,1.3rem+1.1vw,2.2rem)] leading-[1.15] text-strong">
                {featuredInsight.title}
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-body">{featuredInsight.summary}</p>
              <div className="mt-auto flex items-center justify-between gap-4 pt-8">
                <Meta insight={featuredInsight} />
                <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-strong">
                  Read the briefing
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </article>
          </Link>
        </Container>
      </section>

      <section className="border-t border-hairline bg-surface py-16 md:py-24">
        <Container>
          <h2 className="t-h2">All briefings</h2>
          <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((insight, i) => (
              <Reveal as="li" key={insight.slug} delay={(i % 3) * 0.04}>
                <Link href={`/insights/${insight.slug}`} className="group flex h-full flex-col">
                  <Cover
                    insight={insight}
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[16/10] rounded-xl"
                  />
                  <p className="t-eyebrow mt-5">{insight.category}</p>
                  <h3 className="mt-2 text-[1.15rem] font-semibold leading-snug text-strong group-hover:text-brand-strong">
                    {insight.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-[15px] leading-6 text-body">{insight.summary}</p>
                  <div className="mt-auto pt-4">
                    <Meta insight={insight} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}

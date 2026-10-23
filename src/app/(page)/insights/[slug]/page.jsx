import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ContactSection from "@/components/home/ContactSection";
import { formatInsightDate, getInsightBySlug, insightImage, insights } from "@/lib/insights";
import JsonLd from "@/components/seo/JsonLd";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://scotitech.com";

export function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    return {
      title: "Insight not found | ScotiTech Solutions",
    };
  }

  const url = `${SITE_URL}/insights/${insight.slug}`;

  // Long headlines drop the " | ScotiTech" suffix so search results show the
  // whole headline rather than a truncated one.
  const seoTitle = insight.seoTitle || insight.title;
  const withSuffix = `${seoTitle} | ScotiTech`;
  return {
    title: withSuffix.length > 60 ? { absolute: seoTitle } : seoTitle,
    description: insight.seoDescription,
    alternates: {
      canonical: url,
    },
    keywords: insight.tags,
    openGraph: {
      title: insight.title,
      description: insight.seoDescription,
      url,
      type: "article",
      publishedTime: insight.date,
      modifiedTime: insight.updated,
      authors: ["ScotiTech Solutions"],
      tags: insight.tags,
      images: [
        {
          url: `${SITE_URL}${insight.image}`,
          width: 1200,
          height: 630,
          alt: insight.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: insight.title,
      description: insight.seoDescription,
      images: [`${SITE_URL}${insight.image}`],
    },
  };
}

export default async function InsightArticlePage({ params }) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  const relatedProduct = insight.relatedProduct || {
    name: "Vamiq",
    href: "/products/vamiq",
    description:
      "Apple device management and a branded app store for your private apps, with build checks before each release.",
    cta: "Explore Vamiq",
  };
  const structuredData = [
    articleJsonLd(
      { ...insight, seoDescription: insight.seoDescription },
      `/insights/${insight.slug}`
    ),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Insights", path: "/insights" },
      { name: insight.title, path: `/insights/${insight.slug}` },
    ]),
  ];
  const cover = insightImage(insight.image);
  const contain = insight.imageFit === "contain";
  const related = [
    ...insights.filter((i) => i.slug !== insight.slug && i.category === insight.category),
    ...insights.filter((i) => i.slug !== insight.slug && i.category !== insight.category),
  ].slice(0, 3);
  const checklist = insight.workedExample ? null : insight.actionItems;

  return (
    <>
      <JsonLd data={structuredData} />

      <article>
        <header className="bg-surface-muted pb-10 pt-10 md:pb-14 md:pt-16">
          <Container>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-body hover:text-strong"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              All insights
            </Link>
            <div className="mt-8 max-w-[820px]">
              <p className="t-eyebrow">
                {insight.category}
                <span className="text-muted"> · {insight.topic}</span>
              </p>
              <h1 className="mt-4 font-sans text-[clamp(2.1rem,1.4rem+2.6vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-strong [text-wrap:balance]">
                {insight.title}
              </h1>
              <p className="t-lead mt-6">{insight.summary}</p>
              <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-muted">
                <span>{formatInsightDate(insight.date)}</span>
                <span>{insight.readTime}</span>
                {insight.sourceUrl && (
                  <a
                    href={insight.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-brand-strong hover:text-brand"
                  >
                    Source: {insight.sourceName}
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                )}
              </p>
            </div>
          </Container>
        </header>

        <div className="bg-surface-muted pb-12">
          <Container>
            <figure className={`relative overflow-hidden rounded-2xl ${contain ? "bg-ink" : "bg-surface-sunken"} shadow-card`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cover.src}
                srcSet={cover.srcSet}
                sizes="(min-width: 1200px) 1136px, 100vw"
                alt={`${insight.title}: cover image`}
                fetchPriority="high"
                decoding="async"
                className={`aspect-[21/9] w-full ${contain ? "object-contain" : "object-cover"}`}
              />
              {!contain && <span className="photo-tint absolute inset-0" aria-hidden="true" />}
            </figure>

            {insight.highlights?.length > 0 && (
              <dl className="mt-10 grid gap-6 sm:grid-cols-3">
                {insight.highlights.map((item) => (
                  <div key={item.label} className="border-t border-hairline-strong pt-4">
                    <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">{item.label}</dt>
                    <dd className="mt-2 font-serif text-[1.6rem] leading-tight text-strong">{item.value}</dd>
                    <dd className="mt-2 text-[14px] leading-6 text-body">{item.description}</dd>
                  </div>
                ))}
              </dl>
            )}
          </Container>
        </div>

        <div className="border-t border-hairline bg-surface py-14 md:py-20">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
              <div className="max-w-[68ch]">
                <div className="space-y-12">
                  {insight.sections.map((section) => (
                    <section key={section.heading}>
                      <h2 className="font-serif text-[clamp(1.5rem,1.25rem+0.9vw,1.95rem)] leading-[1.2] text-strong">
                        {section.heading}
                      </h2>
                      <div className="mt-4 space-y-5">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph} className="text-[17px] leading-[1.75] text-body">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>

                {insight.readNext?.length > 0 && (
                  <nav aria-label="Read next" className="mt-12 border-t border-hairline pt-8">
                    <p className="t-eyebrow">Read next</p>
                    <ul className="mt-4 grid gap-3">
                      {insight.readNext.map((item) => (
                        <li key={item.href} className="text-[16px] leading-7 text-body">
                          <Link href={item.href} className="font-semibold text-brand-strong underline underline-offset-4 hover:text-brand">{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}

                {insight.workedExample && (
                  <section className="mt-14 rounded-xl border border-hairline bg-surface-muted p-6 sm:p-8">
                    <p className="t-eyebrow">{insight.workedExample.eyebrow}</p>
                    <h2 className="mt-3 font-serif text-[1.7rem] leading-tight text-strong">{insight.workedExample.title}</h2>
                    <p className="mt-4 text-[16px] leading-7 text-body">{insight.workedExample.intro}</p>
                    <ol className="mt-6 grid gap-4">
                      {insight.workedExample.steps.map((step, index) => (
                        <li key={step.label} className="flex items-start gap-4 rounded-lg border border-hairline bg-surface p-4">
                          <span
                            aria-hidden="true"
                            className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand text-[13px] font-semibold text-white"
                          >
                            {index + 1}
                          </span>
                          <div>
                            <h3 className="text-[16px] font-semibold text-strong">{step.label}</h3>
                            <p className="mt-1 text-[15px] leading-7 text-body">{step.body}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                    {insight.workedExample.link && (
                      <p className="mt-6 text-[16px] leading-7 text-body">
                        {insight.workedExample.link.prefix}{" "}
                        <a
                          href={insight.workedExample.link.href}
                          className="font-semibold text-brand-strong underline underline-offset-4 hover:text-brand"
                        >
                          {insight.workedExample.link.label}
                        </a>
                        .
                      </p>
                    )}
                  </section>
                )}

                {checklist?.length > 0 && (
                  <section className="mt-14 rounded-xl border border-hairline bg-surface-muted p-6 sm:p-8">
                    <p className="t-eyebrow">Checklist</p>
                    <h2 className="mt-3 font-serif text-[1.7rem] leading-tight text-strong">What to review next</h2>
                    <ul className="mt-6 grid gap-3">
                      {checklist.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[16px] leading-7 text-body">
                          <CheckCircle2 size={20} className="mt-1 shrink-0 text-brand" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>

              <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-xl border border-hairline bg-surface-muted p-6">
                  <p className="t-eyebrow">Related product</p>
                  <p className="mt-3 text-[18px] font-semibold text-strong">{relatedProduct.name}</p>
                  <p className="mt-2 text-[15px] leading-6 text-body">{relatedProduct.description}</p>
                  <Link
                    href={relatedProduct.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-strong hover:text-brand"
                  >
                    {relatedProduct.cta}
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
                {insight.sourceUrl && (
                  <div className="rounded-xl border border-hairline p-6">
                    <p className="t-eyebrow">Primary source</p>
                    <p className="mt-3 text-[16px] font-semibold text-strong">{insight.sourceName}</p>
                    <a
                      href={insight.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-strong hover:text-brand"
                    >
                      Read the source
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </div>
                )}
              </aside>
            </div>
          </Container>
        </div>
      </article>

      <section className="border-t border-hairline bg-surface-muted py-16 md:py-20">
        <Container>
          <h2 className="t-h2">More briefings</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item) => {
              const img = insightImage(item.image);
              return (
                <Reveal as="li" key={item.slug}>
                  <Link href={`/insights/${item.slug}`} className="group flex h-full flex-col">
                    <div className={`relative aspect-[16/10] overflow-hidden rounded-xl ${item.imageFit === "contain" ? "bg-ink" : "bg-surface-sunken"}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img.small}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className={`absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.03] ${item.imageFit === "contain" ? "object-contain" : "object-cover"}`}
                      />
                    </div>
                    <p className="t-eyebrow mt-4">{item.category}</p>
                    <h3 className="mt-2 text-[1.05rem] font-semibold leading-snug text-strong group-hover:text-brand-strong">{item.title}</h3>
                    <p className="mt-auto pt-3 text-[13px] text-muted">{formatInsightDate(item.date)} · {item.readTime}</p>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}

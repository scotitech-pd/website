import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  ExternalLink,
} from "lucide-react";
import { getInsightBySlug, insights } from "@/lib/insights";

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

  return {
    title: `${insight.title} | ScotiTech Insights`,
    description: insight.seoDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: insight.title,
      description: insight.seoDescription,
      url,
      type: "article",
      publishedTime: insight.date,
      modifiedTime: insight.updated,
      images: [
        {
          url: `${SITE_URL}${insight.image}`,
          alt: insight.title,
        },
      ],
    },
  };
}

export default async function InsightArticlePage({ params }) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  const articleUrl = `${SITE_URL}/insights/${insight.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.seoDescription,
    datePublished: insight.date,
    dateModified: insight.updated,
    mainEntityOfPage: articleUrl,
    author: {
      "@type": "Organization",
      name: "ScotiTech Solutions",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "ScotiTech Solutions",
      url: SITE_URL,
    },
  };

  return (
    <main className="bg-[#f7f7f5] text-[#0F172A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(79,70,229,0.08),transparent_34%),linear-gradient(315deg,rgba(15,118,110,0.07),transparent_30%)]" />

        <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
          <Link
            href="/insights"
            className="mb-8 inline-flex items-center gap-2 text-sm font-karla font-semibold text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="size-4" />
            Back to insights
          </Link>

          <div className="grid grid-cols-1 xl:grid-cols-[58%_42%] gap-10 items-start">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#BCB96A] px-4 py-1.5 text-xs font-karla font-bold uppercase tracking-[0.14em] text-white">
                  {insight.category}
                </span>
                <span className="rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-xs font-karla font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {insight.topic}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-karla font-semibold leading-tight mb-6">
                {insight.title}
              </h1>
              <p className="text-lg sm:text-xl text-slate-700 font-lora leading-8 max-w-4xl mb-7">
                {insight.summary}
              </p>

              <div className="flex flex-wrap gap-5 text-sm text-slate-500 font-lora">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="size-4" />
                  {insight.displayDate}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="size-4" />
                  {insight.readTime}
                </span>
                <a
                  href={insight.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-950"
                >
                  Source: {insight.sourceName}
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
              <div className="relative min-h-[260px] bg-[#0F172A]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(79,116,243,0.34),transparent_52%),linear-gradient(315deg,rgba(188,185,106,0.22),transparent_46%)]" />
                <Image
                  src={insight.image}
                  alt="AppDeploy product context for Apple Business based distribution"
                  fill
                  sizes="(min-width: 1280px) 42vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-4 p-5 sm:p-6">
                {insight.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4"
                  >
                    <p className="text-xs font-karla font-semibold uppercase tracking-[0.16em] text-slate-500 mb-2">
                      {item.label}
                    </p>
                    <p className="text-xl font-karla font-semibold text-slate-900 mb-2">
                      {item.value}
                    </p>
                    <p className="text-sm font-lora leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-10 items-start">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="space-y-10">
                {insight.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-2xl sm:text-3xl font-karla font-semibold text-slate-900 mb-4">
                      {section.heading}
                    </h2>
                    <div className="space-y-5">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-slate-700 font-lora leading-8 text-base sm:text-lg"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-12 rounded-[1.75rem] border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8">
                <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-[#4F46E5] mb-3">
                  SME checklist
                </p>
                <h2 className="text-2xl sm:text-3xl font-karla font-semibold text-slate-900 mb-6">
                  What to review next
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {insight.actionItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                    >
                      <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#0F766E]" />
                      <p className="font-lora leading-7 text-slate-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <aside className="lg:sticky lg:top-28 space-y-5">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-slate-500 mb-3">
                  Original source
                </p>
                <h2 className="text-xl font-karla font-semibold text-slate-900 mb-4">
                  Apple announcement
                </h2>
                <a
                  href={insight.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-5 py-3 text-sm font-karla font-semibold text-white hover:bg-slate-900"
                >
                  View source
                  <ExternalLink className="size-4" />
                </a>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-slate-500 mb-3">
                  Related product
                </p>
                <h2 className="text-xl font-karla font-semibold text-slate-900 mb-3">
                  AppDeploy
                </h2>
                <p className="text-slate-600 font-lora leading-7 mb-5">
                  A branded operational layer for controlled internal iOS app
                  distribution and rollout workflows.
                </p>
                <Link
                  href="/products/appdeploy"
                  className="inline-flex items-center gap-2 text-sm font-karla font-semibold text-slate-900"
                >
                  Explore AppDeploy
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

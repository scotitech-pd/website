"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CircleCheckBig,
  Clock3,
  ExternalLink,
  Eye,
  FileClock,
  FilePenLine,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  allInsights,
  draftInsights,
  getAnyInsightBySlug,
  scheduledInsights,
} from "@/lib/insights.review.generated";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://scotitech.com";

function statusTone(status) {
  if (status === "published") {
    return "bg-[#e9f8f3] text-[#0f766e] ring-[#b9e7db]";
  }
  if (status === "scheduled") {
    return "bg-[#fff4e8] text-[#b45309] ring-[#f5d5a5]";
  }
  return "bg-[#eef2ff] text-[#3730a3] ring-[#c7d2fe]";
}

function statusLabel(status) {
  if (status === "published") return "Published";
  if (status === "scheduled") return "Scheduled";
  return "Draft";
}

function summaryStat(label, value, icon) {
  return { label, value, icon };
}

function EmptyState({ title, body }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white/70 p-8 text-center">
      <p className="text-lg font-karla font-bold text-slate-900">{title}</p>
      <p className="mx-auto mt-3 max-w-2xl font-lora text-[15px] leading-7 text-slate-600">
        {body}
      </p>
    </div>
  );
}

function DashboardRow({ insight }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_18px_60px_-45px_rgba(15,23,42,0.45)]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-3 py-1 text-[10.5px] font-karla font-semibold uppercase tracking-[0.16em] ring-1 ring-inset ${statusTone(
                insight.status
              )}`}
            >
              {statusLabel(insight.status)}
            </span>
            {insight.featured && (
              <span className="rounded-full bg-[#0F172A] px-3 py-1 text-[10.5px] font-karla font-semibold uppercase tracking-[0.16em] text-white">
                Featured
              </span>
            )}
            <span className="rounded-full border border-slate-200 px-3 py-1 text-[10.5px] font-karla font-semibold uppercase tracking-[0.16em] text-slate-500">
              {insight.topic}
            </span>
          </div>
          <h2 className="mt-4 text-2xl font-karla font-bold leading-snug text-slate-900">
            {insight.title}
          </h2>
          <p className="mt-3 max-w-2xl font-lora text-[15px] leading-7 text-slate-600">
            {insight.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-[11px] font-karla uppercase tracking-[0.14em] text-slate-400">
            <span>{insight.displayDate}</span>
            <span>{insight.readTime}</span>
            <span>{insight.slug}</span>
          </div>
        </div>

        <div className="min-w-[280px] rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-[10.5px] font-karla font-semibold uppercase tracking-[0.18em] text-slate-400">
            Approval journey
          </p>
          <div className="mt-4 space-y-3">
            <Link
              href={`/editorial?slug=${insight.slug}`}
              className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-karla font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:shadow-sm"
            >
              Open draft preview
              <ArrowRight className="size-4" />
            </Link>
            <div className="rounded-xl bg-white px-4 py-3 ring-1 ring-slate-200">
              <p className="text-[10.5px] font-karla font-semibold uppercase tracking-[0.16em] text-slate-400">
                Approve in terminal
              </p>
              <code className="mt-2 block overflow-x-auto font-mono text-[12px] text-slate-700">
                npm run insights:publish -- {insight.slug}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EditorialDashboard() {
  const stats = [
    summaryStat("Drafts", draftInsights.length, FilePenLine),
    summaryStat("Scheduled", scheduledInsights.length, FileClock),
    summaryStat(
      "Published",
      allInsights.filter((insight) => insight.status === "published").length,
      CircleCheckBig
    ),
  ];

  return (
    <main className="bg-[#f5f3ee] text-[#0F172A]">
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(44%_36%_at_92%_0%,rgba(15,118,110,0.12),transparent_60%),radial-gradient(34%_28%_at_10%_10%,rgba(226,88,14,0.10),transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="max-w-4xl">
            <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-[#b8430b]">
              Editorial review
            </p>
            <h1 className="mt-4 text-4xl font-karla font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Review drafts in website design before they go live
            </h1>
            <p className="mt-5 max-w-3xl font-lora text-lg leading-8 text-slate-700">
              This is the local approval area for ScotiTech insights. Open each
              draft in full article design, make any content edits, and use the
              publish command only when the piece is ready for the public site.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_70px_-50px_rgba(15,23,42,0.45)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-[10.5px] font-karla font-semibold uppercase tracking-[0.18em] text-slate-400">
                        {stat.label}
                      </p>
                      <p className="text-3xl font-karla font-bold text-slate-900">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_28px_90px_-60px_rgba(15,23,42,0.45)] sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-[10.5px] font-karla font-semibold uppercase tracking-[0.18em] text-slate-400">
                  User journey
                </p>
                <h2 className="mt-3 text-3xl font-karla font-bold text-slate-900">
                  How draft approval works
                </h2>
                <p className="mt-4 font-lora text-[15px] leading-7 text-slate-600">
                  Open the draft preview, review the article in real website
                  layout, edit the JSON if needed, then publish the approved slug
                  to move it onto the public insights page and sitemap.
                </p>
              </div>
              <div className="rounded-2xl bg-[#0F172A] p-5 text-white lg:max-w-md">
                <div className="flex items-center gap-3">
                  <Sparkles className="size-5 text-[#BCB96A]" />
                  <p className="font-karla text-sm font-semibold uppercase tracking-[0.16em]">
                    Production safety
                  </p>
                </div>
                <p className="mt-3 font-lora text-sm leading-7 text-slate-200">
                  Drafts are visible here on localhost, but they are not included
                  in the production export until you publish them.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {[
                "1. Draft created by queue or terminal command",
                "2. Review draft in full article preview",
                "3. Edit content until the tone and facts are ready",
                "4. Publish the slug to move it onto the live site",
              ].map((step) => (
                <div
                  key={step}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 font-lora text-[15px] leading-7 text-slate-700"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 space-y-5">
            <div>
              <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-slate-500">
                Drafts and scheduled items
              </p>
            </div>

            {[...draftInsights, ...scheduledInsights].length > 0 ? (
              [...draftInsights, ...scheduledInsights].map((insight) => (
                <DashboardRow key={insight.slug} insight={insight} />
              ))
            ) : (
              <EmptyState
                title="No unpublished insights right now"
                body="When the editorial pipeline creates a draft, it will appear here with a full preview link and a publish command. You can also generate one manually with npm run insights:draft."
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function InsightPreview({ insight }) {
  return (
    <main className="bg-[#f5f3ee] text-[#0F172A]">
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(79,70,229,0.09),transparent_34%),linear-gradient(315deg,rgba(15,118,110,0.07),transparent_32%)]" />

        <div className="relative z-10 mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/editorial"
              className="inline-flex items-center gap-2 text-sm font-karla font-semibold text-slate-600 hover:text-slate-900"
            >
              <ArrowLeft className="size-4" />
              Back to editorial review
            </Link>

            {insight.status === "published" ? (
              <a
                href={`${SITE_URL}/insights/${insight.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-karla font-semibold text-slate-900"
              >
                Compare live article
                <ExternalLink className="size-4" />
              </a>
            ) : null}
          </div>

          <div className="grid grid-cols-1 gap-10 xl:grid-cols-[58%_42%] xl:items-start">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full px-4 py-1.5 text-xs font-karla font-bold uppercase tracking-[0.14em] ring-1 ring-inset ${statusTone(
                    insight.status
                  )}`}
                >
                  {statusLabel(insight.status)}
                </span>
                <span className="rounded-full border border-slate-200 bg-white/90 px-4 py-1.5 text-xs font-karla font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {insight.topic}
                </span>
              </div>

              <h1 className="text-4xl font-karla font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                {insight.title}
              </h1>
              <p className="mt-6 max-w-4xl font-lora text-lg leading-8 text-slate-700 sm:text-xl">
                {insight.summary}
              </p>

              <div className="mt-7 flex flex-wrap gap-5 text-sm font-lora text-slate-500">
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
                  Reference: {insight.sourceName}
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="relative min-h-[280px] bg-[#0F172A]">
                <Image
                  src={insight.image}
                  alt={`${insight.title} cover image`}
                  fill
                  sizes="(min-width: 1280px) 42vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="grid gap-4 p-5 sm:grid-cols-3 sm:p-6 xl:grid-cols-1">
                {insight.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <p className="text-xs font-karla font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-xl font-karla font-semibold text-slate-900">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm font-lora leading-6 text-slate-600">
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
        <div className="mx-auto grid max-w-8xl gap-10 px-5 min-[500px]:px-10 md:px-20 lg:grid-cols-[minmax(0,1fr)_360px]">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-9">
            <div className="space-y-10">
              {insight.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="mb-4 text-2xl font-karla font-semibold text-slate-900 sm:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="space-y-5">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="font-lora text-base leading-8 text-slate-700 sm:text-lg"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-7">
              <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-[#4f46e5]">
                Approval checklist
              </p>
              <h2 className="mt-3 text-2xl font-karla font-semibold text-slate-900 sm:text-3xl">
                Check before publish
              </h2>
              <div className="mt-6 grid gap-4">
                {[
                  "Is the tone engaging without sounding inflated or generic?",
                  "Are the claims supported by the source and consistent with product reality?",
                  "Is the primary reference independent, authoritative, and external to ScotiTech?",
                  "Does the title feel commercially sharp enough to earn a click?",
                  "Is the product angle useful and believable rather than forced?",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#0F766E]" />
                    <p className="font-lora leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-28">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <Eye className="size-5 text-[#4f46e5]" />
                <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Preview status
                </p>
              </div>
              <p className="mt-4 font-lora leading-7 text-slate-700">
                This page shows the article in website layout before it becomes
                public. It is intended for local review and approval.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <FilePenLine className="size-5 text-[#b8430b]" />
                <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Edit source
                </p>
              </div>
              <p className="mt-4 font-lora leading-7 text-slate-700">
                Draft content is stored in:
              </p>
              <code className="mt-3 block overflow-x-auto rounded-xl bg-slate-50 px-4 py-3 font-mono text-[12px] text-slate-700">
                content/insights/{insight.slug}.json
              </code>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#0F172A] p-6 text-white">
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-5 text-[#BCB96A]" />
                <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em]">
                  Publish
                </p>
              </div>
              <p className="mt-4 font-lora leading-7 text-slate-200">
                When you are happy with the article, publish this slug to move it
                onto the public insights page and sitemap.
              </p>
              <code className="mt-4 block overflow-x-auto rounded-xl bg-white/10 px-4 py-3 font-mono text-[12px] text-white">
                npm run insights:publish -- {insight.slug}
              </code>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default function EditorialReviewClient() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const insight = slug ? getAnyInsightBySlug(slug) : null;

  if (slug && insight) {
    return <InsightPreview insight={insight} />;
  }

  return <EditorialDashboard />;
}

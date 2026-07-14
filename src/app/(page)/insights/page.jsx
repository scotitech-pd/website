import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  FileText,
  SearchCheck,
} from "lucide-react";
import { featuredInsight, insights } from "@/lib/insights";

export const metadata = {
  title: "Insights",
  description:
    "Practical ScotiTech briefings on Apple Business, internal app deployment, governance-first AI, and privacy-conscious software.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "ScotiTech Insights",
    description:
      "Practical briefings on Apple Business, internal app rollout, and governance-first AI.",
    url: "/insights",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const principles = [
  {
    title: "Relevant to operators",
    description:
      "Updates are selected for teams managing devices, products, workflows, data, or customer-facing digital services.",
  },
  {
    title: "Practical interpretation",
    description:
      "Each briefing explains what changed, why it matters, and what a business should review next.",
  },
  {
    title: "Sourced and focused",
    description:
      "The goal is clear analysis with named sources, not a high-volume news feed.",
  },
];

export default function InsightsPage() {
  const moreInsights = insights.filter(
    (insight) => insight.slug !== featuredInsight.slug
  );

  return (
    <main className="bg-[#f5f3ee] text-[#0F172A]">
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(50%_45%_at_85%_-5%,rgba(226,88,14,0.10),transparent_60%)]" />

        <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
          <div className="grid grid-cols-1 xl:grid-cols-[56%_44%] gap-10 items-end mb-14">
            <div className="max-w-4xl">
              <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-[#b8430b]/80 mb-3">
                Insights
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-karla font-semibold leading-tight mb-5">
                Relevant technology briefings for practical business decisions
              </h1>
              <p className="text-lg text-slate-700 font-lora leading-8 max-w-3xl">
                Short, sourced updates on the platform changes and operational
                shifts that matter to SMEs, product teams, and organisations
                managing modern digital workflows.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-9 rounded-lg bg-[#0F172A] text-white flex items-center justify-center">
                  <SearchCheck className="size-4" />
                </div>
                <div>
                  <p className="text-[10.5px] font-karla font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Editorial focus
                  </p>
                  <p className="text-base font-karla font-bold text-slate-900">
                    Signal over volume
                  </p>
                </div>
              </div>
              <p className="text-[15px] text-slate-600 font-lora leading-7">
                ScotiTech Insights is for updates with a direct connection to
                app deployment, private operations, accessibility, AI workflows,
                privacy, or SME technology adoption.
              </p>
            </div>
          </div>

          <Link
            href={`/insights/${featuredInsight.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-[40%_60%] overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-md"
          >
            <div className="relative min-h-[260px] bg-[#0F172A]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(226,88,14,0.32),transparent_52%),linear-gradient(315deg,rgba(194,65,12,0.22),transparent_46%)]" />
              <Image
                src={featuredInsight.image}
                alt={`${featuredInsight.title} cover image`}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <article className="p-6 sm:p-7 lg:p-8 flex flex-col">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full px-2.5 py-0.5 text-[10.5px] font-karla font-semibold uppercase tracking-[0.18em] text-[#b8430b] ring-1 ring-inset ring-[#fde2cd] bg-[#fff4ec]">
                  {featuredInsight.category}
                </span>
                <span className="rounded-full px-2.5 py-0.5 text-[10.5px] font-karla font-semibold uppercase tracking-[0.18em] text-slate-500 ring-1 ring-inset ring-slate-200">
                  {featuredInsight.topic}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-karla font-bold leading-snug text-slate-900 mb-3">
                {featuredInsight.title}
              </h2>
              <p className="text-[15px] text-slate-600 font-lora leading-7 mb-5 flex-1">
                {featuredInsight.summary}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-4">
                <div className="flex flex-wrap gap-4 text-[11.5px] font-karla uppercase tracking-[0.12em] text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="size-3.5" />
                    {featuredInsight.displayDate}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="size-3.5" />
                    {featuredInsight.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-karla font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Read briefing
                  <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" />
                </span>
              </div>
            </article>
          </Link>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {principles.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <div className="size-9 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center mb-4">
                  <FileText className="size-4" />
                </div>
                <h3 className="text-lg font-karla font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-[15px] text-slate-600 font-lora leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-slate-500 mb-5">
              More briefings
            </p>
            <div className="grid grid-cols-1 gap-4">
              {moreInsights.map((insight) => (
                <Link
                  key={insight.slug}
                  href={`/insights/${insight.slug}`}
                  className="group rounded-xl border border-slate-200 bg-white p-6 transition-shadow duration-300 hover:shadow-md"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full px-2.5 py-0.5 text-[10.5px] font-karla font-semibold uppercase tracking-[0.18em] text-[#b8430b] ring-1 ring-inset ring-[#fde2cd] bg-[#fff4ec]">
                        {insight.category}
                      </span>
                      <span className="rounded-full px-2.5 py-0.5 text-[10.5px] font-karla font-semibold uppercase tracking-[0.18em] text-slate-500 ring-1 ring-inset ring-slate-200">
                        {insight.topic}
                      </span>
                    </div>
                    <h2 className="text-xl font-karla font-bold leading-snug text-slate-900">
                      {insight.title}
                    </h2>
                    <p className="text-[15px] font-lora leading-7 text-slate-600">
                      {insight.summary}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                      <div className="flex flex-wrap gap-4 text-[11.5px] font-karla uppercase tracking-[0.12em] text-slate-400">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="size-3.5" />
                          {insight.displayDate}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock3 className="size-3.5" />
                          {insight.readTime}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-karla font-semibold uppercase tracking-[0.14em] text-slate-900">
                        Read article
                        <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

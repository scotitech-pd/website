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
  title: "Insights | ScotiTech Solutions",
  description:
    "Evidence-led ScotiTech briefings on platform changes, rollout decisions, and technology shifts that matter to growing businesses.",
};

const principles = [
  {
    title: "Business relevance",
    description:
      "Briefings focus on platform, security, AI, and operational changes that affect product rollout, device strategy, and digital workflows.",
  },
  {
    title: "Decision-ready context",
    description:
      "Each article explains what changed, why it matters, and how teams can turn the update into practical next steps.",
  },
  {
    title: "Named-source analysis",
    description:
      "Every briefing is grounded in credible sources and written to support clear, informed business decisions.",
  },
];

export default function InsightsPage() {
  return (
    <main className="bg-[#F7F7F5] text-[#0F172A]">
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.08),transparent_34%),linear-gradient(315deg,rgba(15,118,110,0.07),transparent_30%)]" />

        <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
          <div className="grid grid-cols-1 xl:grid-cols-[56%_44%] gap-10 items-end mb-14">
            <div className="max-w-4xl">
              <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-[#0F766E] mb-3">
                Insights
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-karla font-semibold leading-tight mb-5">
                Technology briefings for confident business decisions
              </h1>
              <p className="text-lg text-slate-700 font-lora leading-8 max-w-3xl">
                Concise, sourced analysis on platform changes and operating
                shifts that affect how businesses deploy, manage, and scale
                digital products.
              </p>
            </div>

            <div className="rounded-[1.15rem] border border-[#d9ded7] bg-white/85 backdrop-blur-md p-6 sm:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="size-11 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center">
                  <SearchCheck className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-karla font-semibold uppercase tracking-[0.16em] text-slate-500">
                    What we cover
                  </p>
                  <p className="text-lg font-karla font-semibold text-slate-900">
                    Practical signals for product, operations, and AI adoption
                  </p>
                </div>
              </div>
              <p className="text-slate-700 font-lora leading-8">
                ScotiTech Insights explains platform changes, rollout
                decisions, infrastructure shifts, and AI governance questions
                that affect how teams deploy apps, manage access, protect data,
                and plan technology adoption.
              </p>
            </div>
          </div>

          <Link
            href={`/insights/${featuredInsight.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-[40%_60%] overflow-hidden rounded-[1.15rem] border border-[#d9ded7] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.12)]"
          >
            <div className="relative min-h-[280px] bg-[#0F172A]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(79,116,243,0.32),transparent_52%),linear-gradient(315deg,rgba(188,185,106,0.22),transparent_46%)]" />
              <Image
                src={featuredInsight.image}
                alt={`${featuredInsight.title} cover image`}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <article className="p-6 sm:p-8 lg:p-10">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#B7A84D] px-4 py-1.5 text-xs font-karla font-bold uppercase tracking-[0.14em] text-white">
                  {featuredInsight.category}
                </span>
                <span className="rounded-full border border-slate-200 px-4 py-1.5 text-xs font-karla font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {featuredInsight.topic}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-karla font-semibold leading-tight text-slate-900 mb-4">
                {featuredInsight.title}
              </h2>
              <p className="text-slate-700 font-lora leading-8 text-base sm:text-lg mb-6">
                {featuredInsight.summary}
              </p>

              <div className="flex flex-wrap gap-5 text-sm text-slate-500 font-lora mb-7">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="size-4" />
                  {featuredInsight.displayDate}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="size-4" />
                  {featuredInsight.readTime}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {featuredInsight.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-karla font-semibold text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-5 py-3 text-sm font-karla font-semibold text-white">
                Read briefing
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
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
                className="rounded-[1.15rem] border border-[#d9ded7] bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]"
              >
                <div className="size-10 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center mb-5">
                  <FileText className="size-5" />
                </div>
                <h3 className="text-xl font-karla font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 font-lora leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-slate-500 mb-5">
              Latest briefings
            </p>
            <div className="grid grid-cols-1 gap-4">
              {insights.map((insight) => (
                <Link
                  key={insight.slug}
                  href={`/insights/${insight.slug}`}
                  className="group rounded-[1.1rem] border border-[#d9ded7] bg-white px-5 py-5 shadow-[0_14px_35px_rgba(15,23,42,0.04)] transition hover:border-slate-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <p className="text-xs font-karla font-semibold uppercase tracking-[0.16em] text-[#0F766E] mb-2">
                        {insight.category}
                      </p>
                      <h2 className="text-xl font-karla font-semibold text-slate-900">
                        {insight.title}
                      </h2>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-karla font-semibold text-slate-700">
                      Read briefing
                      <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                    </span>
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

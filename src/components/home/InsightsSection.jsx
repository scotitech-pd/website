import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import Reveal from "@/components/Reveal";
import { featuredInsight, insights } from "@/lib/insights";

export default function InsightsSection() {
  const relevantInsights = insights.slice(1, 4);

  return (
    <section className="relative overflow-hidden bg-[#F7F7F5] py-12 md:py-16">
      <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
        <Reveal className="grid grid-cols-1 items-stretch gap-8 overflow-hidden rounded-[1.15rem] border border-[#d9ded7] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:grid-cols-[38%_62%]" variant="soft">
          <div className="relative min-h-[260px] bg-[#0F172A]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.30),transparent_52%),linear-gradient(315deg,rgba(183,168,77,0.22),transparent_46%)]" />
            <Image
              src={featuredInsight.image}
              alt={`${featuredInsight.title} cover image`}
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              Latest briefing
            </p>
            <h2 className="mb-4 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
              {featuredInsight.title}
            </h2>
            <p className="mb-6 font-lora text-base leading-8 text-slate-700 md:text-lg">
              {featuredInsight.summary}
            </p>

            <div className="mb-7 flex flex-wrap items-center gap-4 font-lora text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="size-4" />
                {featuredInsight.displayDate}
              </span>
              <span>{featuredInsight.readTime}</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={`/insights/${featuredInsight.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#0E1116] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1C2530]"
              >
                Read briefing
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/insights"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400"
              >
                View insights
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {relevantInsights.map((insight, index) => (
            <Reveal
              key={insight.slug}
              delay={index * 90}
              className="h-full"
              variant="soft"
            >
              <Link
                href={`/insights/${insight.slug}`}
                className="group flex h-full flex-col justify-between rounded-[1.1rem] border border-[#d9ded7] bg-white p-5 shadow-[0_14px_35px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
              >
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#0F766E]">
                      {insight.category}
                    </span>
                    <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500">
                      {insight.readTime}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold leading-snug text-slate-900">
                    {insight.title}
                  </h3>
                  <p className="font-lora text-sm leading-7 text-slate-600">
                    {insight.summary}
                  </p>
                </div>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                  Read briefing
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

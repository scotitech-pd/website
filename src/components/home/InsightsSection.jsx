import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { featuredInsight } from "@/lib/insights";

export default function InsightsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] py-12 md:py-16">
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-8 items-stretch rounded-[2rem] border border-slate-200 bg-white overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="relative min-h-[260px] bg-[#0F172A]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(79,116,243,0.34),transparent_52%),linear-gradient(315deg,rgba(188,185,106,0.22),transparent_46%)]" />
            <Image
              src={featuredInsight.image}
              alt={`${featuredInsight.title} cover image`}
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-[#4F46E5]/80 mb-3">
              Latest Insight
            </p>
            <h2 className="text-3xl md:text-4xl font-karla font-semibold text-slate-900 leading-tight mb-4">
              {featuredInsight.title}
            </h2>
            <p className="text-slate-700 font-lora leading-8 text-base md:text-lg mb-6">
              {featuredInsight.summary}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 font-lora mb-7">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="size-4" />
                {featuredInsight.displayDate}
              </span>
              <span>{featuredInsight.readTime}</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={`/insights/${featuredInsight.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-6 py-3 text-sm font-karla font-semibold text-white hover:bg-slate-900 transition-colors"
              >
                Read briefing
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/insights"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-karla font-semibold text-slate-900 hover:border-slate-400 transition-colors"
              >
                View insights
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

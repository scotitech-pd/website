import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import Reveal from "@/components/Reveal";
import { featuredInsight } from "@/lib/insights";

export default function InsightsSection() {
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
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400"
              >
                Read all insights
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

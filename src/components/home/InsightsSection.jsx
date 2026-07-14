"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { insights, featuredInsight } from "@/lib/insights";

export default function InsightsSection() {
  const others = insights.filter((i) => i.slug !== featuredInsight.slug).slice(0, 3);

  return (
    <Section id="insights" surface="base" spacing="lg">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <Reveal className="max-w-2xl">
          <Eyebrow>Insights</Eyebrow>
          <h2 className="t-h1 mt-3">Briefings on the shifts that affect rollout.</h2>
          <p className="t-lead mt-5">
            Practical, source-backed analysis on the platform and policy changes
            shaping how teams deploy and operate.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 font-karla text-sm font-semibold text-brand-strong hover:text-brand"
          >
            Read all insights
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>

      <Reveal delay={0.05}>
        <Link
          href={`/insights/${featuredInsight.slug}`}
          className="group mt-10 grid overflow-hidden rounded-xl border border-hairline bg-surface transition-shadow duration-300 hover:shadow-md lg:grid-cols-2"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-surface-sunken lg:aspect-auto">
            <Image
              src={featuredInsight.image}
              alt={featuredInsight.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
          <div className="flex flex-col p-6 md:p-8">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex rounded-full px-2.5 py-0.5 font-karla text-[10.5px] font-semibold uppercase tracking-[0.18em] text-brand-strong ring-1 ring-inset ring-brand-soft bg-brand-soft/40">
                {featuredInsight.category}
              </span>
              <span className="inline-flex items-center gap-1.5 font-karla text-[11.5px] uppercase tracking-[0.12em] text-muted">
                <Clock size={12} />
                {featuredInsight.readTime}
              </span>
            </div>
            <h3 className="mt-5 font-karla text-2xl font-bold leading-snug text-strong">
              {featuredInsight.title}
            </h3>
            <p className="mt-3 font-lora text-[15px] leading-7 text-body flex-1">
              {featuredInsight.summary}
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4">
              <span className="font-karla text-xs uppercase tracking-[0.12em] text-muted">
                {featuredInsight.displayDate}
              </span>
              <span className="inline-flex items-center gap-1.5 font-karla text-xs font-semibold uppercase tracking-[0.14em] text-brand-strong">
                Read briefing
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </div>
          </div>
        </Link>
      </Reveal>

      {others.length > 0 && (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.07}>
              <Link
                href={`/insights/${post.slug}`}
                className="group flex h-full flex-col rounded-xl border border-hairline bg-surface p-6 transition-shadow duration-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex rounded-full px-2.5 py-0.5 font-karla text-[10.5px] font-semibold uppercase tracking-[0.18em] text-brand-strong ring-1 ring-inset ring-brand-soft bg-brand-soft/40">
                    {post.category}
                  </span>
                </div>
                <h4 className="mt-4 font-karla text-lg font-bold leading-snug text-strong">
                  {post.title}
                </h4>
                <p className="mt-2 font-lora text-[14px] leading-6 text-body flex-1">
                  {post.summary}
                </p>
                <div className="mt-5 border-t border-hairline pt-3">
                  <span className="font-karla text-[11.5px] uppercase tracking-[0.12em] text-muted">
                    {post.displayDate}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}

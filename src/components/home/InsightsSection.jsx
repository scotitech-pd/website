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
    <Section surface="base" spacing="lg">
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
          className="group mt-10 grid overflow-hidden rounded-3xl border border-hairline bg-surface shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card lg:grid-cols-2"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-surface-sunken lg:aspect-auto">
            <Image
              src={featuredInsight.image}
              alt={featuredInsight.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-col p-7 md:p-10">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-brand-soft px-3 py-1 font-karla text-xs font-semibold text-brand-strong">
                {featuredInsight.category}
              </span>
              <span className="inline-flex items-center gap-1.5 t-small">
                <Clock size={13} />
                {featuredInsight.readTime}
              </span>
            </div>
            <h3 className="t-h3 mt-5">{featuredInsight.title}</h3>
            <p className="t-body mt-4 flex-1">{featuredInsight.summary}</p>
            <div className="mt-6 flex items-center justify-between">
              <span className="t-small">{featuredInsight.displayDate}</span>
              <span className="inline-flex items-center gap-1.5 font-karla text-sm font-semibold text-brand-strong">
                Read briefing
                <ArrowRight
                  size={16}
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
                className="group flex h-full flex-col rounded-2xl border border-hairline bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="font-karla text-xs font-semibold uppercase tracking-[0.12em] text-brand-strong">
                  {post.category}
                </span>
                <h4 className="mt-3 font-karla text-lg font-semibold text-strong">
                  {post.title}
                </h4>
                <p className="t-small mt-2 flex-1">{post.summary}</p>
                <span className="mt-4 t-small">{post.displayDate}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}

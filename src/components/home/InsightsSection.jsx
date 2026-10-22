import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { formatInsightDate, insightImage, insights } from "@/lib/insights";

/* Briefings shown on the home page, picked for a general business reader. */
const HOME_PICKS = [
  "private-apple-app-rollout-needs-more-than-approval",
  "wwdc26-app-store-updates-mean-for-appdeploy-rollout",
  "uk-ai-governance-gap-business-policy",
];

export default function InsightsSection() {
  const picks = HOME_PICKS.map((slug) => insights.find((i) => i.slug === slug)).filter(Boolean);
  const list = picks.length === 3 ? picks : insights.slice(0, 3);

  return (
    <Section id="insights" surface="base" spacing="lg" className="border-y border-hairline">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <Reveal className="max-w-2xl">
          <p className="t-eyebrow">Insights</p>
          <h2 className="t-h1 mt-3">Latest insights.</h2>
        </Reveal>
        <Link
          href="/insights"
          className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-strong hover:text-brand"
        >
          All insights
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {list.map((item, i) => (
          <Reveal key={item.slug} delay={i * 0.05}>
            <Link
              href={`/insights/${item.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-hairline bg-surface transition-shadow hover:shadow-card"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-sunken">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={insightImage(item.image).small}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="photo-tint absolute inset-0" aria-hidden="true" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-strong">
                  {item.category}
                </p>
                <h3 className="mt-3 text-[1.1rem] font-semibold leading-snug text-strong">{item.title}</h3>
                <p className="mt-auto pt-5 text-[13px] text-muted">
                  {formatInsightDate(item.date)}
                  {item.readTime ? ` · ${item.readTime}` : ""}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

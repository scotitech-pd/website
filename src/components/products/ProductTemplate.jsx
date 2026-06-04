"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Quote,
  ShieldCheck,
  Sparkles,
  // feature icons (referenced by name in product config)
  Palette,
  MousePointerClick,
  GitBranch,
  Users,
  BarChart3,
  Building2,
  Mail,
  HardDrive,
  MessageSquare,
  CheckSquare,
  ServerCog,
  Route,
  Lock,
  Compass,
  Bot,
  FileSearch,
  FileText,
  Layers3,
  Cloud,
  Server,
  Video,
  Calendar,
  Plane,
  Briefcase,
  Home,
  Coins,
  CalendarRange,
  TrendingUp,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Badge from "@/components/ui/Badge";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/ModalContext";
import { cn } from "@/lib/utils";

const icons = {
  Palette, MousePointerClick, GitBranch, Users, BarChart3, Building2,
  Mail, HardDrive, MessageSquare, CheckSquare, ServerCog, Route, Lock, Compass,
  Sparkles, Bot, FileSearch, FileText, Layers3, Video, Calendar,
  Plane, Briefcase, Home, Coins, CalendarRange, TrendingUp,
};

const deployIcons = [Cloud, Server, ServerCog];

function ProductMedia({ media, accentBg }) {
  if (media?.type === "image") {
    return (
      <div className="relative rounded-[1.5rem] border border-hairline bg-surface p-3 shadow-lift">
        <div className="flex items-center gap-1.5 px-2 py-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          {media.chrome && (
            <span className="ml-3 rounded-md bg-surface-sunken px-3 py-1 font-mono text-[11px] text-muted">
              {media.chrome}
            </span>
          )}
        </div>
        <div className="overflow-hidden rounded-[1rem] border border-hairline bg-surface-muted">
          <Image src={media.src} alt={media.alt} width={1200} height={760} priority className="h-auto w-full" />
        </div>
      </div>
    );
  }
  if (media?.type === "phone") {
    const screens = media.screens || (media.src ? [media.src] : []);
    return (
      <div className="relative flex items-end justify-center gap-0 py-4">
        <span className={cn("pointer-events-none absolute inset-x-8 bottom-6 top-10 -z-0 rounded-[3rem] opacity-10 blur-2xl", accentBg)} />
        {screens.slice(0, 2).map((src, i) => (
          <div
            key={src}
            className={cn(
              "relative z-10 w-[200px] shrink-0 rounded-[2.2rem] border-[7px] border-ink bg-ink shadow-lift sm:w-[225px]",
              screens.length > 1 && i === 0 && "rotate-[-4deg]",
              screens.length > 1 && i === 1 && "-ml-12 mb-8 hidden rotate-[4deg] sm:block"
            )}
          >
            <span className="absolute left-1/2 top-2 z-20 h-1.5 w-14 -translate-x-1/2 rounded-full bg-white/25" />
            <div className="overflow-hidden rounded-[1.6rem]">
              <Image
                src={src}
                alt={media.alt || ""}
                width={1242}
                height={2688}
                className="h-auto w-full"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="relative flex aspect-[16/11] flex-col items-center justify-center gap-3 overflow-hidden rounded-[1.5rem] border border-hairline bg-surface shadow-lift">
      <span className={cn("absolute inset-0 -z-0 opacity-10", accentBg)} />
      {media?.icon && (
        <Image src={media.icon} alt="" width={72} height={72} className="relative z-10 h-16 w-16 object-contain opacity-90" />
      )}
      <span className="relative z-10 inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface px-3 py-1 font-karla text-xs font-medium text-muted">
        <Sparkles size={13} className="text-brand-strong" />
        {media?.label || "Preview coming soon"}
      </span>
    </div>
  );
}

export default function ProductTemplate({ product }) {
  const { setShowModal } = useModal();
  const accentBg = `bg-${product.accent}`;
  const accentText = `text-${product.accent}`;
  const extHost = product.externalUrl ? new URL(product.externalUrl).hostname : null;
  const extLabel = product.externalLabel || `Visit ${product.name}`;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-surface pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_50%_at_85%_-5%,rgba(226,88,14,0.10),transparent_60%)]" />
        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal immediate>
              {product.logo && (
                <Image
                  src={product.logo}
                  alt={`${product.name} logo`}
                  width={64}
                  height={64}
                  className="mb-6 h-14 w-14 rounded-2xl object-contain"
                />
              )}
              <div className="flex items-center gap-3">
                <Eyebrow className={accentText}>{product.eyebrow}</Eyebrow>
                <Badge variant={product.status.variant} dot={product.status.dot}>
                  {product.status.label}
                </Badge>
              </div>
              <h1 className="t-display mt-5">{product.name}</h1>
              <p className="t-h3 mt-4 font-karla !font-semibold text-strong">{product.tagline}</p>
              <p className="t-lead mt-5 max-w-xl">{product.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {product.externalUrl ? (
                  <>
                    <Button asChild size="lg">
                      <a href={product.externalUrl} target="_blank" rel="noopener noreferrer">
                        {extLabel}
                        <ArrowUpRight size={17} />
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => setShowModal(true)}>
                      {product.cta.primary}
                    </Button>
                  </>
                ) : (
                  <>
                    <Button size="lg" onClick={() => setShowModal(true)}>
                      {product.cta.primary}
                      <ArrowRight size={17} />
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link href={product.cta.secondary.href}>{product.cta.secondary.label}</Link>
                    </Button>
                  </>
                )}
              </div>
              {product.externalUrl && (
                <p className="mt-3 font-karla text-sm text-muted">
                  {product.externalNote || "Live at"}{" "}
                  <a
                    href={product.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-strong hover:text-brand"
                  >
                    {extHost}
                  </a>
                </p>
              )}
            </Reveal>
            <Reveal immediate delay={0.1} className="relative">
              <ProductMedia media={product.hero.media} accentBg={accentBg} />
            </Reveal>
          </div>

          {product.heroSpecs && (
            <Reveal className="mt-12 grid grid-cols-2 gap-3 border-t border-hairline pt-8 sm:gap-4 md:grid-cols-4">
              {product.heroSpecs.map((s) => (
                <div key={s.label} className="rounded-2xl border border-hairline bg-surface-muted px-4 py-4">
                  <p className={cn("font-karla text-[11px] font-semibold uppercase tracking-[0.14em]", accentText)}>
                    {s.label}
                  </p>
                  <p className="mt-1 font-karla text-base font-semibold text-strong">{s.value}</p>
                </div>
              ))}
            </Reveal>
          )}
        </Container>
      </section>

      {/* METRICS */}
      {product.metrics && (
        <section className="border-y border-hairline bg-surface-muted py-10">
          <Container>
            <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {product.metrics.map((m, i) => (
                <Reveal as="div" key={m.label} delay={i * 0.05} className="text-center md:text-left">
                  <dt className="t-h2 !text-strong">{m.value}</dt>
                  <dd className="t-small mt-1">{m.label}</dd>
                </Reveal>
              ))}
            </dl>
          </Container>
        </section>
      )}

      {/* PROBLEM / SOLUTION */}
      {product.problem && product.solution && (
        <Section surface="muted" spacing="lg">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-hairline bg-surface p-7 shadow-soft md:p-9">
                <p className="font-karla text-xs font-semibold uppercase tracking-[0.14em] text-muted">The problem</p>
                <h2 className="t-h3 mt-3">{product.problem.title}</h2>
                <ul className="mt-6 space-y-3">
                  {product.problem.points.map((p) => (
                    <li key={p} className="flex gap-3 t-body">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-3xl border border-hairline bg-surface p-7 shadow-soft md:p-9">
                <p className={cn("font-karla text-xs font-semibold uppercase tracking-[0.14em]", accentText)}>
                  With {product.name}
                </p>
                <h2 className="t-h3 mt-3">{product.solution.title}</h2>
                <ul className="mt-6 space-y-3">
                  {product.solution.points.map((p) => (
                    <li key={p} className="flex gap-3 t-body text-strong">
                      <Check size={18} className={cn("mt-0.5 shrink-0", accentText)} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>
      )}

      {/* STATEMENT BAND (the single dark moment) */}
      {product.statement && (
        <section className="bg-ink py-16 md:py-24">
          <Container>
            <Reveal className="max-w-3xl">
              {product.statement.eyebrow && (
                <p className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-brand-soft">
                  {product.statement.eyebrow}
                </p>
              )}
              <h2 className="t-h1 mt-4 text-on-ink">{product.statement.title}</h2>
              <p className="mt-5 font-karla text-lg leading-relaxed text-on-ink-muted">
                {product.statement.body}
              </p>
            </Reveal>
            {product.statement.points && (
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {product.statement.points.map((p, i) => (
                  <Reveal as="div" key={p.title} delay={i * 0.06} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <h3 className="font-karla text-base font-semibold text-on-ink">{p.title}</h3>
                    <p className="mt-2 font-karla text-sm leading-6 text-on-ink-muted">{p.body}</p>
                  </Reveal>
                ))}
              </div>
            )}
          </Container>
        </section>
      )}

      {/* FEATURES */}
      {product.features && (
        <Section surface="base" spacing="lg">
          <Reveal className="max-w-3xl">
            <Eyebrow className={accentText}>Capabilities</Eyebrow>
            <h2 className="t-h1 mt-3">{product.featuresTitle || `What ${product.name} gives your team.`}</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((f, i) => {
              const Icon = icons[f.icon] || Sparkles;
              return (
                <Reveal key={f.title} delay={(i % 3) * 0.06}>
                  <div className="flex h-full flex-col rounded-2xl border border-hairline bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-sunken">
                      <Icon size={20} className={accentText} />
                    </span>
                    <h3 className="mt-5 font-karla text-lg font-semibold text-strong">{f.title}</h3>
                    <p className="t-small mt-2 leading-6">{f.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Section>
      )}

      {/* DEPLOYMENT OPTIONS */}
      {product.deployment && (
        <Section surface="base" spacing="lg">
          <Reveal className="max-w-3xl">
            <Eyebrow className={accentText}>Deployment</Eyebrow>
            <h2 className="t-h1 mt-3">{product.deployment.title}</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {product.deployment.options.map((opt, i) => {
              const Icon = deployIcons[i] || ServerCog;
              return (
                <Reveal key={opt.name} delay={i * 0.06}>
                  <div className="flex h-full flex-col rounded-2xl border border-hairline bg-surface-muted p-6 shadow-soft">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface">
                      <Icon size={20} className={accentText} />
                    </span>
                    <h3 className="mt-5 font-karla text-lg font-semibold text-strong">{opt.name}</h3>
                    <p className="t-small mt-2 leading-6">{opt.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Section>
      )}

      {/* HOW IT WORKS */}
      {product.howItWorks && (
        <Section surface="muted" spacing="lg">
          <Reveal className="max-w-3xl">
            <Eyebrow className={accentText}>How it works</Eyebrow>
            <h2 className="t-h1 mt-3">{product.howItWorksTitle || "From setup to rollout in a few clear steps."}</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {product.howItWorks.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="relative h-full rounded-2xl border border-hairline bg-surface p-6 shadow-soft">
                  <span className={cn("font-mono text-sm font-semibold", accentText)}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-karla text-lg font-semibold text-strong">{s.title}</h3>
                  <p className="t-small mt-2 leading-6">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* PROOF + SECURITY */}
      {(product.proof || product.security) && (
        <Section surface="base" spacing="lg">
          <div className="grid gap-6 lg:grid-cols-2">
            {product.proof && (
              <Reveal>
                <figure className="flex h-full flex-col rounded-3xl bg-ink p-8 shadow-lift md:p-10">
                  <Quote size={30} className="text-white/30" />
                  <blockquote className="mt-4 flex-1 font-karla text-xl leading-relaxed text-on-ink">
                    {product.proof.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <Image src={product.proof.img} alt={product.proof.name} width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
                    <div>
                      <p className="font-karla font-semibold text-on-ink">{product.proof.name}</p>
                      <p className="text-sm text-on-ink-muted">{product.proof.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            )}
            {product.security && (
              <Reveal delay={0.08}>
                <div className="flex h-full flex-col rounded-3xl border border-hairline bg-surface-muted p-8 shadow-soft md:p-10">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                    <ShieldCheck size={20} />
                  </span>
                  <h2 className="t-h3 mt-5">{product.security.title}</h2>
                  <ul className="mt-6 space-y-3">
                    {product.security.points.map((p) => (
                      <li key={p} className="flex gap-3 t-body">
                        <Check size={18} className="mt-0.5 shrink-0 text-brand-strong" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </div>
        </Section>
      )}

      {/* CASE STUDY */}
      {product.caseStudy && (
        <Section surface="muted" spacing="lg">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-hairline bg-brand-soft/50 shadow-soft">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 md:p-12">
                  <Eyebrow className={accentText}>{product.caseStudy.eyebrow}</Eyebrow>
                  <h2 className="t-h2 mt-3">{product.caseStudy.title}</h2>
                  <p className="t-body mt-4">{product.caseStudy.body}</p>
                  <ul className="mt-6 space-y-3">
                    {product.caseStudy.points.map((p) => (
                      <li key={p} className="flex gap-3 t-body">
                        <Check size={18} className={cn("mt-0.5 shrink-0", accentText)} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  {product.caseStudy.link && (
                    <Link
                      href={product.caseStudy.link.href}
                      className="mt-7 inline-flex items-center gap-1.5 font-karla text-sm font-semibold text-brand-strong transition-colors hover:text-brand"
                    >
                      {product.caseStudy.link.label}
                      <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
                {product.caseStudy.image && (
                  <div className="relative min-h-[280px] border-t border-hairline bg-surface lg:border-l lg:border-t-0">
                    <Image
                      src={product.caseStudy.image}
                      alt={product.caseStudy.imageAlt || product.caseStudy.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </Section>
      )}

      {/* PRICING */}
      {product.pricing?.plans && (
        <Section surface="muted" spacing="lg">
          <Reveal className="max-w-3xl">
            <Eyebrow className={accentText}>Pricing</Eyebrow>
            <h2 className="t-h1 mt-3">Simple, transparent pricing.</h2>
            {product.pricing.trial && (
              <p className="t-lead mt-4">{product.pricing.trial}</p>
            )}
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {product.pricing.plans.map((plan, i) => {
              const featured = i === 0;
              return (
                <Reveal key={plan.name} delay={i * 0.08}>
                  <div
                    className={cn(
                      "flex h-full flex-col rounded-3xl border p-8 shadow-soft md:p-10",
                      featured ? "border-brand bg-surface ring-1 ring-brand/20" : "border-hairline bg-surface"
                    )}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-karla text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                        {plan.name}
                      </p>
                      {plan.tag && <Badge variant="brand">{plan.tag}</Badge>}
                    </div>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="t-h1 !text-strong">{plan.price}</span>
                      {plan.period && <span className="t-body">{plan.period}</span>}
                    </div>
                    {plan.note && <p className="t-small mt-1">{plan.note}</p>}
                    <p className="t-body mt-4">{plan.desc}</p>
                    <ul className="mt-6 space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex gap-3 t-body">
                          <Check size={18} className={cn("mt-0.5 shrink-0", accentText)} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-2">
                      {plan.cta.external ? (
                        <Button asChild size="lg" variant={featured ? "default" : "outline"} className="w-full">
                          <a href={plan.cta.href} target="_blank" rel="noopener noreferrer">
                            {plan.cta.label}
                            <ArrowUpRight size={17} />
                          </a>
                        </Button>
                      ) : (
                        <Button asChild size="lg" variant={featured ? "default" : "outline"} className="w-full">
                          <Link href={plan.cta.href}>{plan.cta.label}</Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Section>
      )}

      {/* FAQ */}
      {product.faqs && (
        <Section surface="base" spacing="lg">
          <div className="grid gap-10 lg:grid-cols-[36%_64%] lg:gap-16">
            <Reveal>
              <Eyebrow className={accentText}>FAQ</Eyebrow>
              <h2 className="t-h1 mt-3">Good to know.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-hairline bg-surface px-6 shadow-soft md:px-8">
                {product.faqs.map((f) => (
                  <div key={f.q} className="border-b border-hairline py-5 last:border-b-0">
                    <p className="font-karla text-lg font-semibold text-strong">{f.q}</p>
                    <p className="t-body mt-2">{f.a}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Section>
      )}

      {/* CTA */}
      <section className="bg-surface py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-ink px-7 py-12 text-center shadow-lift md:px-14 md:py-16">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(226,88,14,0.25),transparent_60%)]" />
              <div className="relative z-10 mx-auto max-w-2xl">
                <h2 className="t-h1 text-on-ink">{product.cta.title}</h2>
                <p className="mt-4 font-karla text-lg text-on-ink-muted">{product.cta.body}</p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  {product.externalUrl ? (
                    <>
                      <Button asChild size="lg" variant="onInkSolid">
                        <a href={product.externalUrl} target="_blank" rel="noopener noreferrer">
                          {extLabel}
                          <ArrowUpRight size={17} />
                        </a>
                      </Button>
                      <Button size="lg" variant="onInk" onClick={() => setShowModal(true)}>
                        {product.cta.primary}
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button size="lg" variant="onInkSolid" onClick={() => setShowModal(true)}>
                        {product.cta.primary}
                        <ArrowRight size={17} />
                      </Button>
                      <Button asChild size="lg" variant="onInk">
                        <Link href={product.cta.secondary.href}>{product.cta.secondary.label}</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

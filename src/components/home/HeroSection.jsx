import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers3, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { portfolioHighlights } from "@/lib/products";

const heroSignals = [
  "Controlled internal app rollout",
  "Private workspace tools",
  "Policy-aligned deployment",
];

const heroProofPoints = [
  {
    icon: Layers3,
    label: "Product suite",
    detail: "Three focused products",
  },
  {
    icon: ShieldCheck,
    label: "Private routes",
    detail: "Controlled access paths",
  },
  {
    icon: CheckCircle2,
    label: "Product clarity",
    detail: "Real product screens",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F7F5] pt-24 pb-16 md:pt-[7.5rem] md:pb-[5.5rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(15,118,110,0.14),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(37,99,235,0.12),transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.85),rgba(246,245,240,0.4))]" />
      <div className="absolute left-1/2 top-12 h-[520px] w-[920px] -translate-x-1/2 rounded-full border border-white/70 bg-white/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
        <div className="grid items-center gap-12 xl:grid-cols-[52%_48%]">
          <Reveal className="max-w-3xl" variant="soft">
            <div className="flex flex-wrap gap-2">
              {heroSignals.map((signal) => (
                <span
                  key={signal}
                  className="inline-flex rounded-full border border-[#d9ded7] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700"
                >
                  {signal}
                </span>
              ))}
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-[#111827] min-[700px]:text-5xl min-[1150px]:text-6xl">
              Your team's apps, files, and AI — inside infrastructure you control.
            </h1>

            <p className="mt-6 max-w-2xl font-lora text-lg leading-8 text-slate-700 md:text-xl">
              ScotiTech builds focused products for teams that take data
              ownership seriously — private app rollout with AppDeploy, and a
              full private workspace for daily work with AXOS.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0E1116] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(14,17,22,0.18)] transition-colors hover:bg-[#1C2530]"
              >
                Explore Products
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#cfd7cf] bg-white/80 px-7 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-white"
              >
                Speak with our team
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {portfolioHighlights.map((item, index) => (
                <Reveal key={item.label} delay={120 + index * 70} variant="soft">
                  <div className="h-full rounded-2xl border border-[#d9ded7] bg-white/70 px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-950">
                      {item.value}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal
            className="relative mx-auto w-full max-w-[680px] motion-safe:animate-[hero-float_9s_ease-in-out_infinite]"
            delay={160}
            variant="soft"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-[radial-gradient(circle_at_28%_18%,rgba(15,118,110,0.22),transparent_34%),radial-gradient(circle_at_78%_76%,rgba(37,99,235,0.18),transparent_30%)] blur-2xl" />
            <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-1 rounded-[2rem] bg-[#d9ded7]/70" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-[#0E1116] p-3 shadow-[0_32px_90px_rgba(15,23,42,0.2)] sm:p-4">
              <div className="flex items-center justify-between gap-4 px-2 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Product portfolio
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    One product portfolio, three focused use cases
                  </p>
                </div>
                <span className="hidden rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-200 sm:inline-flex">
                  Private by design
                </span>
              </div>

              <div className="relative min-h-[510px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(145deg,#111827,#071014)] p-3 sm:min-h-[560px]">
                <div className="absolute left-4 right-4 top-4 h-[225px] overflow-hidden rounded-[1.1rem] border border-white/15 bg-white shadow-[0_22px_50px_rgba(0,0,0,0.28)] sm:h-[285px]">
                  <Image
                    src="/images/products/appdeploy/dashboard.png"
                    alt="AppDeploy workspace dashboard"
                    fill
                    priority
                    sizes="(min-width: 1280px) 560px, 88vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#061014]/90 to-transparent p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-100">
                      AppDeploy
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Internal app rollout dashboard
                    </p>
                  </div>
                </div>

                <div className="absolute left-4 top-[250px] z-10 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur sm:top-[318px]">
                  Policy-aligned rollout
                </div>

                <div className="absolute bottom-24 left-4 z-10 w-[66%] max-w-[390px] overflow-hidden rounded-[1rem] border border-white/15 bg-black shadow-[0_24px_60px_rgba(0,0,0,0.34)] sm:bottom-20">
                  <div className="relative aspect-[1.58]">
                    <Image
                      src="/images/products/axos/dashboard.jpg"
                      alt="AXOS private workspace dashboard"
                      fill
                      sizes="(min-width: 1280px) 390px, 58vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
                      AXOS
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Private AI workspace
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-5 right-4 z-20 w-[34%] max-w-[180px] overflow-hidden rounded-[1.65rem] border-[6px] border-[#111827] bg-[#080B18] shadow-[0_28px_70px_rgba(0,0,0,0.42)]">
                  <div className="relative aspect-[9/18.8]">
                    <Image
                      src="/images/products/claritypath/focus.png"
                      alt="ClarityPath mobile decision support screen"
                      fill
                      sizes="(min-width: 1280px) 180px, 32vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                <div className="absolute bottom-5 left-4 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300">
                    ClarityPath
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Private decision support
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {heroProofPoints.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3"
                  >
                    <item.icon className="mb-2 size-4 text-[#5EEAD4]" />
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

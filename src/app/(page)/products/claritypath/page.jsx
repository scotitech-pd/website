import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  FileCheck2,
  LockKeyhole,
  Route,
} from "lucide-react";
import { supportingProducts } from "@/lib/products";

const product = supportingProducts[0];

export const metadata = {
  title: "ClarityPath | ScotiTech Solutions",
  description:
    "ClarityPath is a private ScotiTech product for guided decision support, distributed through AppDeploy.",
};

const useCases = [
  "Structured planning reviews for founders and leadership teams",
  "Guided sessions for career, growth, relocation, or major life choices",
  "Private guided reviews for teams that need an approved access route",
];

const fitPoints = [
  "Designed for guided thinking sessions where structure matters",
  "Delivered through a private AppDeploy access route",
  "Useful for teams that want focused decision support and a lightweight rollout footprint",
];

const planningModules = [
  "Daily planning insights",
  "Migration and relocation timing",
  "Career breakthrough reviews",
  "Property and home-purchase planning",
  "Financial growth reflection",
  "Yearly roadmap planning",
];

const releaseLessons = [
  "Multiple public App Store submissions were rejected because life-planning and guidance apps sit in a crowded category.",
  "ClarityPath needed a launch path that could explain its purpose, boundaries, disclaimers, and access experience before installation.",
  "That makes it a strong AppDeploy case study: a focused app gets a branded product page, managed access, install guidance, and clearer user expectations.",
];

export default function ClarityPathPage() {
  return (
    <main className="bg-[#F7F7F5] text-[#111827]">
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(183,168,77,0.18),transparent_30%),radial-gradient(circle_at_86%_14%,rgba(15,118,110,0.10),transparent_26%)]" />
        <div className="relative z-10 mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="grid items-center gap-10 xl:grid-cols-[58%_42%]">
            <div className="max-w-4xl">
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-[#F9F6E7] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8A7A21]">
                  {product.eyebrow}
                </span>
                <span className="rounded-full border border-[#d9ded7] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                  {product.status}
                </span>
              </div>

              <div className="mb-8 inline-flex items-center gap-4 rounded-[1.15rem] border border-[#d9ded7] bg-white/80 p-3 shadow-[0_16px_35px_rgba(15,23,42,0.08)]">
                <Image
                  src={product.logo}
                  alt="ClarityPath logo"
                  width={74}
                  height={74}
                  className="size-[4.25rem] rounded-2xl object-cover"
                  priority
                />
                <div>
                  <p className="text-2xl font-semibold leading-none text-slate-950">
                    ClarityPath
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[#0F766E]">
                    Plan with structure
                  </p>
                </div>
              </div>

              <h1 className="mb-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                {product.headline}
              </h1>
              <p className="max-w-3xl font-lora text-lg leading-8 text-slate-700 md:text-xl">
                {product.summary} It gives teams a focused way to run private
                review sessions while keeping decision workflows clear,
                structured, and easy to manage.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="https://appdeploy.scotitech.com/w/scotitech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#100E0C] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(16,14,12,0.16)] transition hover:bg-[#1C1714]"
                >
                  Access from AppDeploy
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/products/appdeploy"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
                >
                  View AppDeploy
                </Link>
              </div>
            </div>

            <div className="relative mx-auto min-h-[560px] w-full max-w-[560px]">
              <div className="absolute right-0 top-8 w-[48%] rotate-3 rounded-[2rem] border border-white/20 bg-[#100E0C] p-2 shadow-[0_28px_70px_rgba(16,14,12,0.24)]">
                <div className="relative aspect-[9/19] overflow-hidden rounded-[1.5rem] bg-slate-950">
                  <Image
                    src="/images/products/claritypath/focus.png"
                    alt="ClarityPath mobile screen showing strategic focus and planning insight"
                    fill
                    sizes="(min-width: 1280px) 22vw, 48vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <div className="absolute left-0 top-0 w-[54%] -rotate-3 rounded-[2rem] border border-white/20 bg-[#100E0C] p-2 shadow-[0_32px_80px_rgba(16,14,12,0.30)]">
                <div className="relative aspect-[9/19] overflow-hidden rounded-[1.5rem] bg-slate-950">
                  <Image
                    src="/images/products/claritypath/explore.png"
                    alt="ClarityPath mobile screen showing structured planning categories"
                    fill
                    sizes="(min-width: 1280px) 24vw, 54vw"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 w-[88%] -translate-x-1/2 rounded-[1rem] border border-[#d9ded7] bg-white/90 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.10)] backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#F9F6E7] text-[#8A7A21]">
                    <Compass className="size-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Guided planning preview
                    </p>
                    <p className="mt-1 font-lora leading-7 text-slate-700">
                      Structured planning categories and focus summaries inside
                      one private guided review experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14 sm:pb-20">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="rounded-[1.2rem] border border-[#d9ded7] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] sm:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Where it helps
            </p>
            <h2 className="mb-5 text-3xl font-semibold">
              Focused guidance for private decision sessions
            </h2>
            <div className="mb-5 grid gap-4 md:grid-cols-3">
              {useCases.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#d9ded7] bg-white px-4 py-4 font-lora text-sm leading-7 text-slate-700"
                >
                  <Compass className="mb-4 size-5 text-[#8A7A21]" />
                  {item}
                </div>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {fitPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-xl border border-[#d9ded7] bg-[#f8fafc] px-4 py-4 font-lora text-sm leading-7 text-slate-700"
                >
                  <CheckCircle2 className="mb-4 size-5 text-[#0F766E]" />
                  {point}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1rem] border border-[#d9ded7] bg-[#100E0C] p-6 text-white">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <LockKeyhole className="size-7 shrink-0 text-[#FDE68A]" />
                <div>
                  <h3 className="text-2xl font-semibold">
                    A focused route for guided decision support.
                  </h3>
                  <p className="mt-3 max-w-4xl font-lora leading-8 text-slate-300">
                    ClarityPath uses private distribution to keep access
                    intentional while AppDeploy handles the branded delivery
                    route.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ECE8DA] py-14 sm:py-20">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="grid gap-8 lg:grid-cols-[44%_56%]">
            <div className="rounded-[1.25rem] border border-[#d9ded7] bg-white p-6 shadow-[0_22px_60px_rgba(15,23,42,0.07)] sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#F9F6E7] text-[#8A7A21]">
                  <FileCheck2 className="size-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                    AppDeploy release story
                  </p>
                  <h2 className="text-2xl font-semibold text-slate-950">
                    A focused planning app needed a focused launch path.
                  </h2>
                </div>
              </div>
              <p className="font-lora text-lg leading-8 text-slate-700">
                ClarityPath was built around the promise: "Plan your life.
                Align with time." Multiple public App Store submissions showed
                how hard it is for a specialised planning product to stand out
                inside a saturated category. AppDeploy gives the product a
                branded route where the purpose, access model, disclaimers, and
                install journey can be presented with clarity.
              </p>
              <div className="mt-6 grid gap-3">
                {releaseLessons.map((lesson) => (
                  <div
                    key={lesson}
                    className="flex gap-3 rounded-2xl border border-[#d9ded7] bg-[#f8fafc] p-4"
                  >
                    <Route className="mt-1 size-5 shrink-0 text-[#0F766E]" />
                    <p className="font-lora leading-7 text-slate-700">
                      {lesson}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-[#d9ded7] pt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Release milestone
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-950">
                  App Store approval in 2025
                </h3>
                <p className="mt-2 font-lora text-sm leading-7 text-slate-700">
                  After iteration and review, ClarityPath became eligible for
                  public distribution. The image is cropped to keep review and
                  submission details private.
                </p>
                <figure className="mt-4 overflow-hidden rounded-2xl border border-[#d9ded7] bg-[#100E0C]">
                  <Image
                    src="/images/products/claritypath/milestones/app-store-approved.jpg"
                    alt="Cropped App Store review approval notice confirming distribution eligibility"
                    width={1024}
                    height={200}
                    loading="eager"
                    className="h-auto w-full object-cover"
                  />
                </figure>
              </div>
              <Link
                href="https://appdeploy.scotitech.com/w/scotitech"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#100E0C] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1C1714]"
              >
                Access from AppDeploy
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="rounded-[1.25rem] border border-[#d9ded7] bg-[#100E0C] p-6 text-white shadow-[0_26px_70px_rgba(16,14,12,0.20)] sm:p-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#5EEAD4]">
                Planning modules
              </p>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
                Structured timing insights for personal and professional planning.
              </h2>
              <p className="mt-5 max-w-3xl font-lora text-lg leading-8 text-slate-300">
                The product combines personal profile inputs, planning prompts,
                daily insight summaries, and AI-assisted guidance for people
                reviewing career, finance, relocation, property, and yearly
                planning decisions.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {planningModules.map((module) => (
                  <div
                    key={module}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                  >
                    <CheckCircle2 className="mb-3 size-5 text-[#5EEAD4]" />
                    <p className="font-semibold leading-6">{module}</p>
                  </div>
                ))}
              </div>
              <p className="mt-7 rounded-2xl border border-white/10 bg-white/[0.05] p-4 font-lora text-sm leading-7 text-slate-300">
                ClarityPath is designed for self-reflection and personal
                growth. It is not a substitute for professional financial,
                career, medical, or legal advice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

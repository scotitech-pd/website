import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  allProducts,
  flagshipProducts,
  portfolioHighlights,
  productComparison,
  supportingProducts,
} from "@/lib/products";

export const metadata = {
  title: "Products | ScotiTech Solutions",
  description:
    "Explore ScotiTech products including AppDeploy, AXOS, and ClarityPath.",
};

export default function ProductsPage() {
  return (
    <main className="relative overflow-hidden bg-[#F7F7F5] text-[#111827]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(15,118,110,0.12),transparent_28%),radial-gradient(circle_at_88%_14%,rgba(37,99,235,0.10),transparent_25%)]" />

      <section className="relative z-10 py-14 sm:py-20">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="grid items-end gap-10 xl:grid-cols-[58%_42%]">
            <div className="max-w-4xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
                Products
              </p>
              <h1 className="mb-5 text-4xl font-semibold leading-tight text-[#111827] sm:text-5xl lg:text-6xl">
                A product portfolio built around clear operating problems.
              </h1>
              <p className="max-w-3xl font-lora text-lg leading-8 text-slate-700">
                AppDeploy focuses on entitlement-led internal app access, AXOS
                focuses on private workspace operations with governance-first
                AI, and ClarityPath supports guided decision review.
              </p>
            </div>

            <div className="rounded-[1.15rem] border border-[#d9ded7] bg-white/85 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Portfolio Snapshot
              </p>
              <div className="grid gap-3">
                {portfolioHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[#d9ded7] bg-[#f8fafc] px-4 py-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xl font-semibold text-slate-950">
                      {item.value}
                    </p>
                    <p className="mt-1 font-lora text-sm leading-6 text-slate-600">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-16">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Flagship Products
              </p>
              <h2 className="text-3xl font-semibold text-[#111827]">
                Built for different jobs
              </h2>
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-[#0E1116] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1C2530]"
            >
              Book a session
            </Link>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {flagshipProducts.map((product) => (
              <article
                key={product.slug}
                className="group overflow-hidden rounded-[1.25rem] border border-[#d9ded7] bg-white shadow-[0_22px_60px_rgba(15,23,42,0.07)] transition hover:-translate-y-1"
              >
                <div
                  className="h-1.5"
                  style={{ backgroundColor: product.theme.color }}
                />
                <div className="p-7 sm:p-9">
                  <div className="mb-7 flex items-start justify-between gap-5">
                    <div>
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {product.eyebrow}
                      </p>
                      <h3 className="text-3xl font-semibold text-[#111827]">
                        {product.name}
                      </h3>
                    </div>
                    <div className="flex size-[4.5rem] items-center justify-center rounded-2xl border border-[#d9ded7] bg-[#f8fafc] p-2">
                      <Image
                        src={product.logo}
                        alt={`${product.name} logo`}
                        width={90}
                        height={90}
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  </div>

                  <p className="mb-4 text-xl font-semibold leading-8 text-slate-900">
                    {product.headline}
                  </p>
                  <p className="mb-6 font-lora leading-8 text-slate-700">
                    {product.summary}
                  </p>

                  <div className="mb-7 grid gap-3">
                    {[
                      ["Buyer", product.buyer],
                      ["Best for", product.bestFor],
                      ["Status", product.status],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-[#d9ded7] bg-[#f8fafc] px-4 py-3"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                          {label}
                        </p>
                        <p className="mt-1 font-lora text-sm leading-6 text-slate-700">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mb-8 flex flex-wrap gap-2">
                    {product.outcomes.map((outcome) => (
                      <span
                        key={outcome}
                        className="inline-flex items-center gap-2 rounded-full border border-[#d9ded7] bg-white px-3 py-2 text-sm font-semibold text-slate-700"
                      >
                        <CheckCircle2
                          className="size-4"
                          style={{ color: product.theme.color }}
                        />
                        {outcome}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-2 rounded-full bg-[#0E1116] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1C2530]"
                  >
                    View {product.name}
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-16">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="overflow-hidden rounded-[1.25rem] border border-[#d9ded7] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <div className="border-b border-[#d9ded7] p-6 sm:p-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Portfolio Selector
              </p>
              <h2 className="text-3xl font-semibold text-[#111827]">
                Compare product fit quickly
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] text-left">
                <thead>
                  <tr className="border-b border-[#d9ded7] bg-[#f8fafc] text-sm uppercase tracking-[0.14em] text-slate-500">
                    <th className="px-6 py-4 font-semibold">Decision point</th>
                    {allProducts.map((product) => (
                      <th key={product.slug} className="px-6 py-4 font-semibold">
                        {product.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {productComparison.map((row) => (
                    <tr key={row.label} className="border-b border-[#d9ded7] last:border-b-0">
                      <td className="px-6 py-5 font-semibold text-slate-900">
                        {row.label}
                      </td>
                      <td className="px-6 py-5 font-lora leading-7 text-slate-700">
                        {row.appdeploy}
                      </td>
                      <td className="px-6 py-5 font-lora leading-7 text-slate-700">
                        {row.axos}
                      </td>
                      <td className="px-6 py-5 font-lora leading-7 text-slate-700">
                        {row.claritypath}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Link
            href={supportingProducts[0].href}
            className="mt-6 flex flex-col gap-4 rounded-[1.25rem] border border-[#d9ded7] bg-[#fbfaf6] p-6 transition hover:border-slate-300 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#B7A84D]">
                Supporting Product — included with AppDeploy
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                {supportingProducts[0].name}
              </h3>
              <p className="mt-2 max-w-3xl font-lora leading-7 text-slate-700">
                {supportingProducts[0].summary}
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-slate-900">
              Access via AppDeploy
              <ArrowRight className="size-4" />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

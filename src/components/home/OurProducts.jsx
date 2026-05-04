import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { flagshipProducts, supportingProducts } from "@/lib/products";

export default function OurProducts() {
  return (
    <section
      id="products"
      className="relative w-full overflow-hidden bg-[#F7F7F5] py-16 md:py-[5.5rem]"
    >
      <div className="relative z-10 mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
        <Reveal className="mb-10 max-w-4xl" variant="soft">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Product Portfolio
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#111827] sm:text-5xl">
            Focused products for app access, private workspaces, and decision support.
          </h2>
          <p className="mt-5 max-w-3xl font-lora text-lg leading-8 text-slate-700">
            Each product is built around a distinct user, use case, and
            rollout path, making it easier for teams to compare fit quickly.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {flagshipProducts.map((product, index) => (
            <Reveal
              as="article"
              key={product.name}
              delay={index * 100}
              className="group overflow-hidden rounded-[1.25rem] border border-[#d9ded7] bg-white text-left shadow-[0_18px_48px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]"
            >
              <div className="grid h-full grid-cols-1 md:grid-cols-[38%_62%]">
                <div className="flex items-center justify-center border-b border-[#d9ded7] bg-[#f8fafc] p-7 md:border-b-0 md:border-r">
                  <Image
                    src={product.logo}
                    alt={product.name}
                    width={280}
                    height={180}
                    className="h-auto max-h-[150px] w-full max-w-[280px] object-contain"
                  />
                </div>

                <div className="flex flex-col p-7 md:p-9">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span
                      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]"
                      style={{
                        backgroundColor: product.theme.soft,
                        color: product.theme.color,
                      }}
                    >
                      {product.status}
                    </span>
                  </div>

                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {product.eyebrow}
                  </p>
                  <h3 className="mb-4 text-3xl font-semibold text-[#111827]">
                    {product.name}
                  </h3>

                  <p className="mb-5 text-xl font-semibold leading-8 text-slate-900">
                    {product.headline}
                  </p>

                  <p className="mb-8 max-w-xl font-lora leading-8 text-slate-700">
                    {product.summary}
                  </p>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-slate-500">
                      For {product.buyer}
                    </p>
                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-2 rounded-full bg-[#0E1116] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1C2530]"
                    >
                      View product
                      <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <Link
            href={supportingProducts[0].href}
            className="mt-6 flex flex-col gap-4 rounded-[1.25rem] border border-[#d9ded7] bg-[#fbfaf6] p-6 transition hover:border-slate-300 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#B7A84D]">
                Private product
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                {supportingProducts[0].name}
              </h3>
              <p className="mt-2 max-w-2xl font-lora leading-7 text-slate-700">
                {supportingProducts[0].summary}
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-slate-900">
              Learn where it fits
              <ArrowRight className="size-4" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

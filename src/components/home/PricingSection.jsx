import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { vamiqLinks } from "@/lib/company";

/*
 * Vamiq's list prices, worded as vamiq.app words them (checked 24 Nov 2026).
 * If vamiq.app's pricing changes, change it here and on /products/vamiq.
 */
const tiers = [
  {
    name: "Free",
    price: "£0",
    detail: "Up to 5 devices. No time limit, no card.",
  },
  {
    name: "Vamiq",
    price: "£1 / $1 / €1 / ₹100",
    detail: "A device a month beyond the free 5, or £10 / $10 / €10 / ₹1,000 a year. No base fee and no minimum.",
  },
  {
    name: "Distribution",
    price: "£29 / $29 / €29 / ₹2,900",
    detail: "A month, or £219 / $219 / €219 / ₹21,900 a year: your own branded app store and release controls, the same with or without devices.",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-surface-muted pb-20 md:pb-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#032b2a_0%,#05403c_55%,#0b5550_100%)] p-6 text-white shadow-lift sm:p-10 lg:p-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_95%_0%,rgba(94,234,212,0.16),transparent_60%)]"
            />
            <div className="relative">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#9fe0d4]">Pricing</p>
              <h2 className="mt-3 font-serif text-[clamp(1.9rem,1.4rem+1.8vw,2.75rem)] font-normal leading-[1.1] tracking-[-0.01em]">
                Free for five devices. Simple prices after that.
              </h2>
              <dl className="mt-10 grid gap-6 md:grid-cols-3">
                {tiers.map((t) => (
                  <div key={t.name} className="border-t border-white/20 pt-5">
                    <dt className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/60">{t.name}</dt>
                    <dd className="mt-2 text-[1.35rem] font-semibold leading-snug">{t.price}</dd>
                    <dd className="mt-2 text-[15px] leading-6 text-white/75">{t.detail}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 text-[14px] leading-6 text-white/65">
                14 days of everything, no card. Afterwards the workspace stays on Free. Prices exclude
                VAT, GST and other sales taxes, which are added at checkout where they apply.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={vamiqLinks.signup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-lg bg-white px-5 text-[15px] font-semibold text-ink transition-colors hover:bg-[#eef4f2]"
                >
                  Start free on vamiq.app
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <Link
                  href="/products/vamiq#pricing"
                  className="inline-flex h-11 items-center gap-2 rounded-lg px-4 text-[15px] font-semibold text-white ring-1 ring-white/25 transition-colors hover:bg-white/10"
                >
                  Plans and what each includes
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

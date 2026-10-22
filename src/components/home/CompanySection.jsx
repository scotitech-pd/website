import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { companyFacts, founder } from "@/lib/company";

/**
 * About ScotiTech, briefly: what kind of company it is, four checkable facts
 * and the founder. The full story, team and recognition live on /aboutus.
 */
export default function CompanySection() {
  return (
    <Section id="company" surface="muted" spacing="lg">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal>
          <p className="t-eyebrow">About ScotiTech</p>
          <h2 className="t-h1 mt-3">A focused software company, led by its founder.</h2>
          <p className="t-lead mt-5">
            We build a small number of products and look after them closely. Customers work directly
            with the people who build them, from the first call to the day they go live.
          </p>
          <Link
            href="/aboutus"
            className="mt-8 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-strong hover:text-brand"
          >
            More about ScotiTech
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal className="grid content-start gap-8">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-7">
            {companyFacts.map((f) => (
              <div key={f.label} className="border-t border-hairline pt-4">
                <dt className="text-[13px] text-muted">{f.label}</dt>
                <dd className="mt-1 text-[17px] font-semibold text-strong">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex items-center gap-5 rounded-xl border border-hairline bg-surface p-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/company/pradeep-dahiya-400.webp"
              alt={founder.portrait.alt}
              width={400}
              height={548}
              loading="lazy"
              decoding="async"
              className="size-20 shrink-0 rounded-full object-cover object-top ring-1 ring-hairline"
            />
            <div className="min-w-0">
              <p className="text-[17px] font-semibold text-strong">{founder.name}</p>
              <p className="text-[14px] text-body">{founder.title}</p>
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-strong hover:text-brand"
              >
                Talk to Pradeep
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

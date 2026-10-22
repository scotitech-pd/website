import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { companyFacts, recognition } from "@/lib/company";

/**
 * What ScotiTech is: one paragraph, four checkable facts and a real photo
 * from the UK StartUp Awards 2026 regional final, under the teal grade.
 */
export default function CompanySection() {
  const awards = recognition[0];

  return (
    <Section id="company" surface="muted" spacing="lg">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <p className="t-eyebrow">Who we are</p>
          <h2 className="t-h1 mt-3">A software company built in Scotland, working with teams worldwide.</h2>
          <p className="t-lead mt-5">
            ScotiTech Solutions Limited is registered in Scotland and run from Eurocentral,
            Motherwell. We build a few focused products and look after them closely, so organisations
            stay in control of how their apps ship, how their devices are run and where their data
            lives.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-hairline pt-8">
            {companyFacts.map((f) => (
              <div key={f.label}>
                <dt className="text-[13px] text-muted">{f.label}</dt>
                <dd className="mt-1 text-[17px] font-semibold text-strong">{f.value}</dd>
              </div>
            ))}
          </dl>
          <Link
            href="/aboutus"
            className="mt-10 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-strong hover:text-brand"
          >
            More about ScotiTech
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal>
          <figure className="relative overflow-hidden rounded-2xl bg-grade shadow-lift">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={awards.image.src}
              srcSet={`${awards.image.srcSmall} 800w, ${awards.image.src} 1600w`}
              sizes="(min-width: 1024px) 50vw, 100vw"
              alt={awards.image.alt}
              width={1600}
              height={1200}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
            <span className="photo-tint absolute inset-0" aria-hidden="true" />
            <span className="photo-grade absolute inset-0" aria-hidden="true" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9fe0d4]">
                Recognition
              </span>
              <span className="mt-2 block text-[1.3rem] font-semibold leading-snug text-white">
                {awards.title}: {awards.detail}
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}

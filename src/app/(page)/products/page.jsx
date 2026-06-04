import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Badge from "@/components/ui/Badge";
import { products } from "@/lib/products";

export const metadata = {
  title: "Products | ScotiTech Solutions",
  description:
    "Explore ScotiTech products: AppDeploy for internal app distribution, AXOS for a private team workspace, and ClarityPath for decision-support.",
};

const order = ["appdeploy", "axos", "claritypath"];

export default function ProductsPage() {
  const list = order.map((slug) => products[slug]);

  return (
    <>
      <section className="relative overflow-hidden bg-surface pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_85%_-5%,rgba(226,88,14,0.10),transparent_60%)]" />
        <Container className="relative z-10">
          <Reveal immediate className="max-w-3xl">
            <Eyebrow>Products</Eyebrow>
            <h1 className="t-display mt-3">
              Focused products, built for control.
            </h1>
            <p className="t-lead mt-5 max-w-2xl">
              Two flagship products lead the portfolio — AppDeploy for internal
              app distribution and AXOS for private team operations — supported
              by ClarityPath for sensitive decision journeys.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section surface="muted" spacing="lg">
        <div className="grid gap-6">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                href={`/products/${p.slug}`}
                className="group grid gap-6 overflow-hidden rounded-3xl border border-hairline bg-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card md:grid-cols-[1fr_auto] md:items-center md:p-9"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="font-karla text-2xl font-semibold text-strong">
                      {p.name}
                    </h2>
                    <Badge variant={p.status.variant} dot={p.status.dot}>
                      {p.status.label}
                    </Badge>
                  </div>
                  <p className="t-h3 mt-3 font-karla !font-semibold">{p.tagline}</p>
                  <p className="t-body mt-3 max-w-2xl">{p.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-karla text-sm font-semibold text-brand-strong">
                    Explore {p.name}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
                <span className={`hidden h-full w-1.5 rounded-full bg-${p.accent} md:block`} />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

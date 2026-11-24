import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import LoopVideo from "@/components/media/LoopVideo";
import FilmDialog from "@/components/media/FilmDialog";
import { vamiqLinks, vamiqMedia } from "@/lib/company";

/**
 * Home hero: Vamiq leads (founder, 24 Nov 2026). The headline is Vamiq's own
 * D4 line from vamiq.app; the paragraph says who makes it. Two actions, then
 * the real product in a framed window (Vamiq's 14-second loop, a sample
 * workspace) with the branded app store on an iPhone beside it.
 */
export default function HeroSection() {
  const { loop, poster, phone } = vamiqMedia;

  return (
    <section className="relative overflow-hidden bg-surface-muted pb-20 pt-12 md:pb-28 md:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[38%] h-[60%] bg-[radial-gradient(60%_55%_at_50%_45%,rgba(15,118,110,0.10),transparent_70%)]"
      />
      <Container className="relative">
        <div className="mx-auto max-w-[920px] text-center">
          <p className="t-eyebrow reveal-now">Device management for small businesses</p>
          <h1 className="t-display reveal-now mt-4">
            We build Vamiq: one workspace for your iPhones, iPads, Macs and Windows PCs.
          </h1>
          <p
            className="reveal-now mx-auto mt-6 max-w-[700px] text-[clamp(1.0625rem,1rem+0.35vw,1.25rem)] leading-[1.6] text-body"
            style={{ animationDelay: "0.08s" }}
          >
            Vamiq (formerly AppDeploy) is device management for small and growing
            businesses. Set up and secure your team&apos;s devices, install apps, and put your private
            apps on your Apple devices through your own branded app store.
          </p>
          <div
            className="reveal-now mt-9 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "0.15s" }}
          >
            <a
              href={vamiqLinks.signup}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-brand px-6 text-base font-semibold text-white shadow-soft transition-colors hover:bg-brand-strong"
            >
              Start free on vamiq.app
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <Link
              href="/products/vamiq"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-hairline-strong bg-surface px-6 text-base font-semibold text-strong transition-colors hover:bg-white"
            >
              Explore Vamiq
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <p className="reveal-now mt-5 text-[14px] text-muted" style={{ animationDelay: "0.18s" }}>
            Free for up to 5 devices. No time limit, no card.
          </p>
          <div className="reveal-now mt-5" style={{ animationDelay: "0.2s" }}>
            <FilmDialog />
          </div>
        </div>

        {/* The product, framed */}
        <figure className="reveal-now relative mx-auto mt-14 max-w-[1040px] md:mt-16" style={{ animationDelay: "0.25s" }}>
          <div className="relative mr-[12%] overflow-hidden rounded-xl border border-hairline-strong/70 bg-white shadow-lift sm:mr-[16%]">
            <div className="flex h-8 items-center gap-1.5 border-b border-hairline bg-[#f7f6f2] px-3" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-[#d9d5cc]" />
              <span className="size-2.5 rounded-full bg-[#d9d5cc]" />
              <span className="size-2.5 rounded-full bg-[#d9d5cc]" />
              <span className="mx-auto hidden rounded-md bg-white px-10 py-0.5 text-[11px] text-muted ring-1 ring-hairline sm:block">
                vamiq.app/dashboard
              </span>
            </div>
            <LoopVideo
              src={loop.src}
              poster={poster.src}
              width={loop.width}
              height={loop.height}
              label={poster.alt}
              className="block aspect-[16/10] w-full bg-white object-cover"
            />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={phone.src}
            alt={phone.alt}
            width={phone.width}
            height={phone.height}
            fetchPriority="high"
            className="absolute -bottom-4 right-0 w-[27%] max-w-[250px] sm:-bottom-6 rounded-[1.6rem] border-[5px] border-ink bg-ink shadow-lift sm:rounded-[2rem] sm:border-[7px]"
          />
          <figcaption className="mt-8 pr-[30%] text-left text-[13px] text-muted sm:mt-10 sm:pr-0 sm:text-center">
            Vamiq · sample workspace
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}

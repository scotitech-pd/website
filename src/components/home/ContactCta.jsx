"use client";

import Link from "next/link";
import { ArrowRight, CalendarClock, Mail, MessageSquare } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/ModalContext";

const calendlyUrl =
  "https://calendly.com/pradeepdahiya2411/axos-private-workspace-strategy-session";

export default function ContactCta() {
  const { setShowModal } = useModal();

  return (
    <section id="contact" className="bg-surface py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-xl bg-ink px-7 py-12 md:px-14 md:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_85%_0%,rgba(226,88,14,0.25),transparent_60%),radial-gradient(40%_50%_at_-5%_100%,rgba(251,146,60,0.12),transparent_60%)]" />

            <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[55%_45%] lg:items-center">
              <div>
                <Eyebrow onInk>Contact</Eyebrow>
                <h2 className="t-h1 mt-3 text-on-ink">
                  Bring us the requirement. We will bring a practical next step.
                </h2>
                <p className="mt-5 max-w-xl font-karla text-lg leading-relaxed text-on-ink-muted">
                  Discuss AppDeploy, an AXOS enterprise evaluation, a deployment
                  requirement, or a commercial partnership with the people who
                  own the product and delivery decisions.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    size="lg"
                    variant="onInkSolid"
                    onClick={() => setShowModal(true)}
                  >
                    Start a business enquiry
                    <ArrowRight size={17} />
                  </Button>
                  <Button asChild size="lg" variant="onInk">
                    <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                      <CalendarClock size={17} />
                      Book a call
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm md:p-7">
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-brand/20 blur-2xl" />
                <div className="relative">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-on-ink">
                    <MessageSquare size={18} />
                  </span>
                  <h3 className="mt-5 font-karla text-xl font-bold text-on-ink">
                    Need the right next step?
                  </h3>
                  <p className="mt-3 font-lora text-[14.5px] leading-7 text-on-ink-muted">
                    Share your organisation, use case, operating constraints,
                    and desired outcome. We will route it to the right commercial
                    or technical owner.
                  </p>

                  <div className="mt-6 rounded-lg border border-white/10 bg-black/15 p-4">
                    <p className="font-karla text-xs font-semibold uppercase tracking-[0.14em] text-on-ink-muted">
                      Direct email
                    </p>
                    <a
                      href="mailto:info@scotitech.com"
                      className="mt-2 inline-flex items-center gap-2 font-karla text-sm font-semibold text-on-ink hover:text-brand"
                    >
                      <Mail size={16} />
                      info@scotitech.com
                    </a>
                  </div>

                  <Button asChild size="lg" variant="onInkSolid" className="mt-6">
                    <Link href="/contact">
                      Contact us
                      <ArrowRight size={17} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

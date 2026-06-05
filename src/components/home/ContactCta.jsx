"use client";

import { ArrowRight, CalendarClock, Mail, MapPin } from "lucide-react";
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
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-7 py-12 shadow-lift md:px-14 md:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_85%_0%,rgba(226,88,14,0.25),transparent_60%),radial-gradient(40%_50%_at_-5%_100%,rgba(251,146,60,0.12),transparent_60%)]" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[55%_45%] lg:items-center">
              <div>
                <Eyebrow onInk>Contact</Eyebrow>
                <h2 className="t-h1 mt-3 text-on-ink">
                  Let's talk about how your team ships and operates.
                </h2>
                <p className="mt-5 max-w-xl font-karla text-lg leading-relaxed text-on-ink-muted">
                  Whether you're evaluating AppDeploy, requesting an AXOS
                  enterprise testing platform, or partnering with us — start a
                  conversation.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    size="lg"
                    variant="onInkSolid"
                    onClick={() => setShowModal(true)}
                  >
                    Talk to our team
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

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:p-8">
                <ul className="space-y-5">
                  <li className="flex gap-3">
                    <Mail size={18} className="mt-0.5 shrink-0 text-on-ink-muted" />
                    <div>
                      <p className="font-karla text-sm font-semibold text-on-ink">Email</p>
                      <a
                        href="mailto:info@scotitech.com"
                        className="text-sm text-on-ink-muted hover:text-on-ink"
                      >
                        info@scotitech.com
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-on-ink-muted" />
                    <div>
                      <p className="font-karla text-sm font-semibold text-on-ink">
                        Registered office
                      </p>
                      <p className="text-sm leading-6 text-on-ink-muted">
                        ScotiTech Solutions Limited, Maxim Business Park,
                        Motherwell ML1 4WR, United Kingdom
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

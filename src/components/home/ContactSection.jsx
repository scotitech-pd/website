"use client";

import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { useModal } from "@/components/ModalContext";
import { contact } from "@/lib/company";

/** Closing call to talk: real people, a real office, and how to reach them. */
export default function ContactSection() {
  const { setShowModal } = useModal();

  return (
    <section id="contact" className="bg-surface-muted py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-ink text-white shadow-lift">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/company/office-meeting-room.webp"
              alt=""
              width={702}
              height={468}
              loading="lazy"
              decoding="async"
              className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-50 lg:block"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 hidden bg-[linear-gradient(90deg,#0b1f1e_45%,rgba(11,31,30,0.55)_75%,rgba(0,45,53,0.35)_100%)] lg:block"
            />
            <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:p-14">
              <div>
                <h2 className="font-serif text-[clamp(2rem,1.4rem+2.2vw,3rem)] font-normal leading-[1.08] tracking-[-0.01em]">
                  Talk to the people who build it.
                </h2>
                <p className="mt-5 max-w-xl text-[17px] leading-7 text-white/75">
                  Tell us what you need: a Vamiq rollout, a private AXOS deployment, or help with Apple
                  Business. You will hear back from the team that builds the product.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex h-11 items-center gap-2 rounded-lg bg-white px-5 text-[15px] font-semibold text-ink transition-colors hover:bg-[#eef4f2]"
                  >
                    Send us a message
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className="inline-flex h-11 items-center rounded-lg px-5 text-[15px] font-semibold text-white ring-1 ring-white/25 transition-colors hover:bg-white/10"
                  >
                    Book a call
                  </button>
                </div>
              </div>
              <ul className="space-y-5 self-end text-[15px] text-white/85">
                <li>
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-white">
                    <Mail size={18} className="shrink-0 text-[#9fe0d4]" aria-hidden="true" />
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a href={contact.phoneHref} className="flex items-center gap-3 hover:text-white">
                    <Phone size={18} className="shrink-0 text-[#9fe0d4]" aria-hidden="true" />
                    {contact.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

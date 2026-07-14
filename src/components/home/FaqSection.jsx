"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

const faqs = [
  {
    q: "What does ScotiTech sell today?",
    a: "ScotiTech currently leads with focused software products rather than a broad service catalogue. AppDeploy is for private app distribution and rollout operations. AXOS is for organisations evaluating a controlled, enterprise AI workspace with stronger hosting, governance, and data-control requirements.",
  },
  {
    q: "Who is AppDeploy a serious fit for?",
    a: "AppDeploy is a strong fit for organisations that already have a private or internal app and need a cleaner way to control access, explain installs, manage branded rollout, and reduce confusion around who gets what version and when.",
  },
  {
    q: "When should we talk about AXOS instead of a normal SaaS workspace?",
    a: "Talk to us about AXOS when the standard public-cloud productivity stack is the problem, not the answer. The stronger AXOS fit is a team that cares about private deployment, tighter governance, AI control, data location, and a more serious evaluation before employee rollout.",
  },
  {
    q: "Is AXOS publicly available for instant signup?",
    a: "No. AXOS is enterprise-only. Organisations first share their business information, intended use case, and deployment expectations. If the fit is real, we provide a limited testing platform so decision-makers can evaluate the product before any wider adoption discussion.",
  },
  {
    q: "Can ScotiTech support private deployment, self-hosting, or tighter control requirements?",
    a: "Yes, where the product fit supports it. That conversation is especially relevant for AXOS, and for AppDeploy enterprise cases that need stronger control, reporting, or environment-specific rollout requirements. We prefer to scope those needs directly rather than hide them behind vague marketing language.",
  },
  {
    q: "What should we send before the first conversation?",
    a: "The most useful brief includes your organisation type, country, team size, the product you are interested in, the current operational problem, and any constraints around hosting, compliance, Apple Business, MDM, AI governance, or rollout ownership. That lets us respond with a sharper next step instead of a generic intro call.",
  },
  {
    q: "What happens after we get in touch?",
    a: "We qualify the product fit first. If the use case aligns, we move into a practical conversation around rollout, evaluation, deployment, or access. If it is not a real fit, we would rather say that early than stretch the wrong product into the wrong situation.",
  },
];

function FaqItem({ faq, isOpen, onToggle }) {
  const reduce = useReducedMotion();
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-karla text-lg font-semibold text-strong">{faq.q}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-muted transition-transform duration-300 ${
            isOpen ? "rotate-180 text-brand-strong" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="t-body pb-5 pr-8">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <Section surface="muted" spacing="lg">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[36%_64%] lg:gap-16">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="t-h1 mt-3">Questions serious buyers ask early.</h2>
          <p className="t-lead mt-5">
            Straight answers on fit, control, evaluation, and what happens next.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-xl border border-hairline bg-surface px-6 md:px-8">
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

const faqs = [
  {
    q: "Which product should we talk to ScotiTech about first?",
    a: "If your immediate problem is private mobile app rollout, start with AppDeploy. If you are evaluating a controlled employee workspace with private AI and self-hosting requirements, start with AXOS. If the need is broader, we can route the conversation to the right product or delivery path.",
  },
  {
    q: "Is AppDeploy ready for production use?",
    a: "Yes. AppDeploy is live and built for branded private app distribution, release communication, access control, and clearer install journeys for employees, partners, or client teams.",
  },
  {
    q: "Can we test AXOS before adopting it?",
    a: "Yes, for qualified organisations. AXOS is an enterprise product, so we first review your business profile, team size, workflows, hosting expectations, and control requirements. After that, we can provide a limited testing platform so decision-makers can evaluate fit before employee rollout.",
  },
  {
    q: "Do you work only in the UK and India?",
    a: "No. ScotiTech is UK-registered and operates from Scotland, but the product and delivery focus is worldwide. We work with organisations based on the problem, governance needs, and rollout fit rather than geography alone.",
  },
  {
    q: "How do you handle privacy, hosting, and control?",
    a: "We design around clear data boundaries, practical deployment control, and buyer visibility. AppDeploy keeps private app rollout more structured. AXOS is built for organisations that need stronger control over workspace data, AI use, and hosting decisions.",
  },
  {
    q: "What information should we share before a call?",
    a: "A useful first message includes your organisation type, country, team size, the product you are interested in, the current problem, and any hosting, compliance, Apple Business, MDM, or rollout constraints. That helps us avoid a generic discovery call.",
  },
  {
    q: "Do you build custom software as well as products?",
    a: "ScotiTech is product-led, but our wider work can include practical software, AI, infrastructure, and digital delivery where there is a clear business case. The best starting point is still the problem you need solved, not a fixed service menu.",
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
          <h2 className="t-h1 mt-3">Questions buyers usually ask first.</h2>
          <p className="t-lead mt-5">
            Clear answers before a call, so the next conversation can stay
            practical.
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

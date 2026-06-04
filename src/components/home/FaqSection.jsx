"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

const faqs = [
  {
    q: "What does ScotiTech actually build?",
    a: "Practical technology products and delivery solutions. AppDeploy handles internal iOS app distribution; AXOS is an enterprise-only, self-hostable employee workspace with AI; ClarityPath supports structured, sensitive user journeys; and our broader work spans privacy-conscious software, AI, infrastructure, and digital operations.",
  },
  {
    q: "Is AppDeploy ready to use today?",
    a: "Yes. AppDeploy is live and running in production, with branded internal distribution pages, release control, and access management for teams and partners.",
  },
  {
    q: "When can we use AXOS?",
    a: "AXOS is a completed enterprise product. Because it is built for employee workspaces and business data, organisations share their business profile, team size, workflows, and infrastructure needs first; then we provide a limited testing platform so decision-makers can evaluate AXOS before adopting it for their employees.",
  },
  {
    q: "How do you handle data and privacy?",
    a: "Privacy is a default, not an upgrade. We build for clear data boundaries and deployment control — including self-hosting options for AXOS — so you can reason about where data lives and who can reach it.",
  },
  {
    q: "Who is ScotiTech?",
    a: "A UK-registered technology and product company operating from Scotland, with worldwide product strategy, engineering, infrastructure, AI, and digital delivery. Shortlisted for the Scotland StartUp Awards 2026.",
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
      <div className="grid gap-10 lg:grid-cols-[36%_64%] lg:gap-16">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="t-h1 mt-3">Questions, answered plainly.</h2>
          <p className="t-lead mt-5">
            The essentials buyers and partners ask before a conversation.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-3xl border border-hairline bg-surface px-6 shadow-soft md:px-8">
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

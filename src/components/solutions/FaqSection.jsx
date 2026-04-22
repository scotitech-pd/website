"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I know whether AppDeploy or AXOS is the better fit?",
      answer:
        "Use AppDeploy when internal app distribution and release control are the immediate priority. Use AXOS when your priority is private daily operations across mail, storage, coordination, and AI.",
    },
    {
      question: "Is AppDeploy intended to replace a full mobility platform?",
      answer:
        "No. AppDeploy is positioned as a focused operational layer for internal app distribution rather than as a broad device-management platform.",
    },
    {
      question: "Can AXOS support organisations that want more control over hosting?",
      answer:
        "Yes. AXOS supports hosted, private cloud, and self-hosted models so organisations can choose the right level of infrastructure and data control.",
    },
    {
      question: "Where does ClarityPath fit in the portfolio?",
      answer:
        "ClarityPath remains part of the wider portfolio as a focused product for structured planning, reflection, and guided decision support.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] py-16 md:py-20">
      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 grid gap-10 xl:grid-cols-[0.8fr_1.2fr] items-start text-black">
        <div className="max-w-3xl">
          <p className="text-sm font-karla font-semibold uppercase tracking-[0.2em] text-[#4F46E5]/80 mb-3">
            Frequently Asked Questions
          </p>
          <h3 className="text-3xl md:text-5xl font-semibold text-[#0F172A] relative z-10 font-karla">
            Questions about our solutions
          </h3>
          <p className="mt-5 text-lg leading-8 text-slate-700 font-lora">
            Short answers to the most common product-fit and rollout questions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-[1.4rem] border border-slate-200 shadow-sm bg-white relative overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                tabIndex="-1"
                className="w-full flex justify-between items-center text-left px-5 py-4 font-medium text-black font-lora z-10 select-none"
              >
                <div className="flex items-center gap-3.5 text-[15px] z-0 cursor-pointer">
                  <div className="bg-[#0F172A] rounded-full size-[30px] flex items-center justify-center text-white text-xs font-karla">
                    0{i + 1}
                  </div>
                  <span className="font-karla">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`transition-transform duration-300 size-5 ${
                    openIndex === i ? "rotate-180 text-slate-900" : "text-slate-500"
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-500 ${
                  openIndex === i ? "max-h-44 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-slate-600 text-sm leading-7 font-medium font-lora px-5 pl-[4.7rem] pr-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

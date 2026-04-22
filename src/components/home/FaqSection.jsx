"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What makes ScotiTech different?",
      answer:
        "We design products that solve real problems using trusted methods—no hype, just practical innovation.",
    },
    {
      question: "How does AppDeploy simplify app distribution?",
      answer:
        "It gives organisations a clearer operational layer around Apple Business based internal distribution, with simpler access, release visibility, and branded delivery workflows.",
    },
    {
      question: "Can AXOS replace SaaS tools?",
      answer:
        "Yes. AXOS is designed to reduce tool sprawl by bringing mail, drive, cloud storage, calendar, chat, tasks, notes, and AI into one more controlled environment.",

    },
    {
      question: "How do I get started with ScotiTech?",
      answer:
"Contact us, and we’ll guide you through the best product for your needs.",    },
    {
      question: "How do you approach privacy and governance?",
      answer:
        "We design products with practical privacy, governance, and deployment considerations in mind, while keeping the messaging grounded in what each product genuinely supports.",
    },
   
  ];

  return (
    <section
      className="relative bg-[#f7f7f5] py-12 sm:py-20 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(52,211,255,0.08),transparent_26%),radial-gradient(circle_at_right,rgba(79,70,229,0.05),transparent_24%)]" />


      <div className="relative z-10 grid min-[900px]:grid-cols-2 gap-7 sm:gap-10 items-center text-black max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full">
        {/* Left Side */}
        <div>
          <h3 className="text-[24px] min-[450px]:text-3xl min-[1050px]:text-4xl font-bold text-black relative z-10 font-karla mb-6 flex items-center">
            <p className="hidden min-[460px]:felx text-[5rem] min-[450px]:text-[6rem] min-[650px]:text-[7rem] font-bold text-black opacity-[0.04] absolute select-none -z-10 top-1/2 transform -translate-y-1/2 font-karla">
              FAQ
            </p>
            <p className="font-karla text-[32px] min-[610px]:text-[40px] leading-[33px]">
              Frequently Asked Questions
            </p>
          </h3>
          <p className=" sm:mt-8 text-lg leading-7  z-10 font-lora text-black/75">
            Short answers to the questions visitors most often ask about our
            products, approach, and operating model.
          </p>
        </div>

        {/* Right Side - Accordion */}
        <div className="space-y-4 min-[1340px]:h-[485px] pl-4 flex flex-col justify-center">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-xl shadow-[0_10px_25px_rgba(15,23,42,0.06)] bg-white relative"
            >
              <div className="absolute  bg-main-dark rounded-full size-[26px] flex items-center justify-center -left-[13px] top-[12px] min-[500px]:top-[8px]">
                <img
                  src="/images/home/faqicon.png"
                  className="size-[21px]"
                  alt="faqicon"
                />
              </div>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-left px-5 py-3 font-medium text-main-dark"
              >
                <div className="flex items-center gap-3 text-[17px] sm:text-[18px] font-karla">
                  <span>{faq.question}</span>
                </div>
                <ChevronDown
                  className={`transition-transform duration-300 size-5 ${
                    openIndex === i ? "rotate-180 text-main-dark" : "text-[#15676E]"
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  openIndex === i ? "max-h-40 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-black/80 text-[16px] sm:text-[18px] leading-7 font-lora px-5">
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

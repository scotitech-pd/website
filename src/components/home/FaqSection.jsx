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
        "It removes App Store barriers by enabling secure private distribution through Apple Business Manager.",
    },
    {
      question: "Can Opsly replace SaaS tools?",
      answer: "Yes—Opsly reduces subscription costs by offering private hosting for calendars, notes, files, and more.",

    },
    {
      question: "How do I get started with ScotiTech?",
      answer:
"Contact us, and we’ll guide you through the best product for your needs.",    },
    {
      question: "Are your tools compliance-ready??",
      answer:
        "Absolutely. Every product is built with privacy and policy guidelines at the foundation.",
    },
   
  ];

  return (
    <section
      className="relative bg-[#F5F5F5] py-10 sm:py-20 overflow-hidden" >
      <img
        src="/images/home/tpurple.png"
        alt="bg"
        className="left-0 absolute w-auto h-[95%] bottom-0"
      />


      <div className="relative z-10 grid min-[900px]:grid-cols-2 gap-7 sm:gap-10 items-center text-black max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full">
        {/* Left Side */}
        <div>
          <h3 className="text-[24px] min-[450px]:text-3xl min-[1050px]:text-4xl font-bold text-black relative z-10 font-karla mb-6 flex items-center">
            <p className="hidden min-[460px]:felx text-[5rem] min-[450px]:text-[6rem] min-[650px]:text-[7rem] font-bold text-black opacity-5 absolute select-none -z-10 top-1/2 transform -translate-y-1/2 font-karla">
              FAQ
            </p>
            <p className="font-karla text-[32px] min-[610px]:text-[40px] leading-[33px]">
              Frequently Asked Questions
            </p>
          </h3>
          <p className=" sm:mt-8 text-lg leading-5  z-10 font-lora">
            To provide complete clarity, we've compiled detailed answers to the
            most common inquiries about,
          </p>
          <p className="text-main-dark font-semibold font-lora text-lg mt-0.5">
            ScotiTech's solutions, technology, and operational processes
          </p>
        </div>

        {/* Right Side - Accordion */}
        <div className="space-y-4 min-[1340px]:h-[485px] pl-4 flex flex-col justify-center">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className=" border border-main rounded-xl shadow-sm bg-gradient-to-r from-white to-purple-50 relative"
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
                className="w-full flex justify-between items-center text-left px-5 py-2.5 font-medium text-main-dark"
              >
                <div className="flex items-center gap-3 text-[17px] sm:text-[18px] font-karla">
                  <span>{faq.question}</span>
                </div>
                <ChevronDown
                  className={`transition-transform duration-300 size-5 ${
                    openIndex === i ? "rotate-180 text-main-dark" : "text-main"
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  openIndex === i ? "max-h-40 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-black/90 text-[16px] sm:text-[18px] leading-5.5 font-lora px-5">
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

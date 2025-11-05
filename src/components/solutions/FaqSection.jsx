"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

 
  const faqs = [
    {
      question: "How fast can I set up AppDeploy?",
      answer:
        "In under 30 minute - no coding, no MDM enrollment required.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! You can try AppDeploy for free with limited installs.",
    },
    {
      question: "What if my company grows?",
      answer:
        "Scotitech products scale with you - from 20 users to 5000+.",
    },
    {
      question: "Do I need a developer account?",
      answer:
        "AppDeploy works with Apple Business Manager, removing the need for enterprise-level accounts.",
    },

  ];

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/images/solution/faqbg.png')", // replace with your image
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-10 grid md:grid-cols-[60%_40%] gap-10 items-center text-black">
        {/* Left Side */}
        <div className="w-fit mx-auto">
          <h3 className="text-3xl md:text-4xl font-semibold text-black relative z-10 font-karla">
            <p className="text-[7.5rem] font-karla font-medium text-black/10 absolute select-none -z-10 top-1/2 transform -translate-y-1/2 -left-3">
              FAQ
            </p>
            Frequently Asked Questions
          </h3>
          <p className="mt-16 text-2xl leading-5 z-10 font-medium font-lora">
            FAQ (Engagement + SEO)
          </p>
        </div>

        {/* Right Side - Accordion */}
        <div className="space-y-4 py-20 h-[400px]">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className=" rounded-xl shadow-sm bg-gradient-to-r from-white to-purple-50 relative overflow-hidden"
            >
              <div className=" absolute bg-[#7E1A8E]/70 w-4 h-full -z-0"></div>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-left pr-5 py-2.5 font-medium text-black font-lora z-10"
              >
                <div className="flex items-center gap-3.5 text-[15px] pl-1.5 z-0 py-2 cursor-pointer">
                  <div className=" bg-main-dark rounded-full size-[26px] flex items-center justify-center ">
                    <img
                      src="/images/home/faqicon.png"
                      className="size-[21px]"
                      alt="faqicon"
                    />
                  </div>
                  <span className="font-karla ">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`transition-transform duration-300 size-5 ${
                    openIndex === i ? "rotate-180 text-main-dark" : "text-main"
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-500 ${
                  openIndex === i ? "max-h-40 px-5 pb-4 -mt-3" : "max-h-0"
                }`}
              >
                <p className="text-[#585858] text-sm leading-3.5 font-medium pl-6 ml-0.5 font-lora ">
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

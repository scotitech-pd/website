"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

 
  const faqs = [
    {
      question: "How fast can I set up AppDeploy?",
      answer:
        "In under 30 minutes - no coding, no MDM enrollment required.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! You can try AppDeploy for free with limited installs.",
    },
    {
      question: "What if my company grows?",
      answer:
        "ScotiTech products scale with you - from 20 users to 5000+.",
    },
    {
      question: "Do I need a developer account?",
      answer:
        "AppDeploy works with Apple Business Manager, removing the need for enterprise-level accounts.",
    },

  ];

  return (
    <section
      className="relative overflow-hidden "
      style={{
        backgroundImage: "url('/images/solution/faqbg.png')", // replace with your image
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
    >
      <div className="bg-white/90 min-[880px]:hidden absolute h-full w-full "></div>
      <div className="max-[880px]:ml-0 max-[1250px]:ml-52 relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full grid min-[1250px]:grid-cols-[60%_40%] min-[1650px]:grid-cols-2 gap-4 min-[1650px]:gap-10 items-center text-black  py-10 min-[500px]:py-15 sm:py-20 ">
        {/* Left Side */}
        <div className=" w-fit min-[1370px]:mx-auto max-[1250px]:ml-0 max-[1370px]:ml-auto max-[1370px]:pr-4">
          <h3 className="text-3xl md:text-4xl font-semibold text-black relative z-10 font-karla">
            <p className="max-[475px]:hidden text-[5rem] font-karla font-medium text-black opacity-5 absolute select-none -z-10 top-1/2 transform -translate-y-1/2 -left-3">
              FAQ
            </p>
            Frequently Asked Questions
          </h3>
          <p className="mt-2 min-[475px]:mt-10 text-xl min-[390px]:text-2xl leading-7 z-10 font-medium font-lora">
            FAQs about Our Products
          </p>
        </div>

        {/* Right Side - Accordion */}
        <div className="space-y-4 h-[440px] min-[320px]:h-[350px] min-[500px]:h-[310px] min-[1259px]:h-[340px] max-[645px]:w-auto max-[1020px]:w-[570px] max-[1250px]:w-[700px]">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className=" rounded-xl shadow-sm bg-gradient-to-r from-white to-purple-50 relative overflow-hidden"
            >
              <div className=" absolute bg-[#7E1A8E]/70 w-4 h-full -z-0"></div>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                tabIndex="-1"
                className="w-full flex justify-between items-center text-left pr-5 py-2.5 font-medium text-black font-lora z-10 select-none"
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
                  openIndex === i ? "max-h-40 pb-4 -mt-3" : "max-h-0"
                }`}
              >
                <p className="text-[#585858] text-sm leading-3.6 font-medium font-lora pl-11 pr-2  ml-0.5">
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

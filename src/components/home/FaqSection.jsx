"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I install AppDeploy on my Mac?",
      answer:
        "Installation is straightforward. First, download the AppDeploy installer package (a .pkg file) from your ScotiTech account portal. Then, double-click the file and follow the on-screen prompts to complete the installation process",
    },
    {
      question: "Is there a free trial available for Opsly?",
      answer:
        "Yes, we offer a 7-day free trial for Opsly. 1 This allows you to explore all core features before committing. You can easily register for your trial on the Opsly product page or by contacting our sales team",
    },
    {
      question: "Can I use AI Caption Studio offline?",
      answer:
        "While Al Caption Studio requires an initial internet connection for features like Al processing and content sync, some basic editing functions may be available offline. For the best experience and full AI capability, a stable internet connection is recommended",
    },
    {
      question: "What devices are compatible with ClarityPath?",
      answer:
        "ClarityPath is a private decision-support app from ScotiTech that helps individuals and teams align their focus, energy, and goals. Securely distributed through Apple Business Manager (ABM), it offers a unique tool for both personal planning and professional development.",
    },
    {
      question: "How often are updates released?",
      answer:
        "We generally release minor updates, which include bug fixes and small improvements, monthly. Major feature updates and new version releases are typically scheduled quarterly. You will receive notifications about updates within the application.",
    },
    {
      question: "Do I need separate licenses for different platforms?",
      answer:
        "No, your subscription includes access to all platforms. Simply log in with your account credentials on any supported device.",
    },
  ];

  return (
    <section
      className="relative bg-gray-500 py-10 sm:py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/images/home/Timg.png')", // replace with your image
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
    >
      <img src="/images/home/Tpurple.png" alt="bg" className="left-0 absolute w-auto h-[95%] bottom-0"/>
      
      {/* Background shape (optional subtle polygon)
    //   <div className="absolute top-0 left-0 w-full h-full bg-purple-100 opacity-20"></div> */}
      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="relative z-10 grid min-[900px]:grid-cols-2 gap-7 sm:gap-10 items-center text-black max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full">
        {/* Left Side */}
        <div>
          <h3 className="text-[24px] min-[450px]:text-3xl min-[1050px]:text-4xl font-bold text-black relative z-10 font-karla mb-6 flex items-center">
            <p className="hidden min-[460px]:felx text-[5rem] min-[450px]:text-[6rem] min-[650px]:text-[7rem] font-bold text-black opacity-5 absolute select-none -z-10 top-1/2 transform -translate-y-1/2 font-karla">
              FAQ
            </p>
            <p className="font-karla text-[32px] min-[610px]:text-[40px] leading-[33px]">Frequently Asked Questions</p>
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
                <div className="flex items-center gap-3 text-[17px] sm:text-[18px]">
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
                  openIndex === i ? "max-h-40 px-5 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-black/90 text-[16px] sm:text-[18px] leading-5.5 font-lora">
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

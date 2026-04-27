"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ClarityPathSteps() {
  const steps = [
    {
      id: 1,
      text: "Organizations/Individuals can find ClarityPath under AppDeploy Dashboard.",
    },
    // {
    //   id: 2,
    //   text: "Assign it to employees via MDM (Jamf, Intune, etc.) or directly by Apple ID.",
    // },
    {
      id: 2,
      text: "Users can then download ClarityPath, with in-app premium features.",
    },
  ];

  return (
    <section
      className="relative py-20 px-6 flex justify-center items-center  bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('/images/products/claritypath/howclaritypath.png')", // replace with your image
      }}
    >
      {/* <div className="relative rounded-3xl p-[2px] bg-gradient-to-bl from-[#98F9FF]/10 to-[#EABFFF]/20"> */}

      <div
        className=" text-white rounded-3xl shadow-2xl max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20
 w-full p-10 backdrop-blur-xl border border-white/10"
      >
        {/* Title */}

        <div className="relative w-fit py-4 mt-2 mx-auto">
          <p className="absolute text-[4.5rem] hidden lg:block  font-semibold font-karla opacity-5 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-nowrap select-none">
            How to Get ClarityPath
          </p>
          <h2 className="lg:text-[38px] text-3xl text-center font-bold font-karla">
            How to Get Clarity<span className="text-[#69DCEE]">Path</span>
          </h2>
        </div>

        <p className="text-center lg:text-xl lg:mb-15 mb-8 text-md font-lora">
          ClarityPath is distributed exclusively as a Custom App via Apple
          Business Manager.
        </p>

        {/* Steps */}
        <div className="flex flex-col    min-[1050px]:flex-row justify-between gap-6 md:gap-8 mb-14">
          {steps.map((step) => (
            // <div
            //   key={step.id}
            //   className="relative bg-transparent  border-[1px] border-white/80 rounded-xl p-6 flex-1 flex items-start gap-4 text-white"
            // >
            //   <div className="absolute  left-0 -translate-x-1/2 z-0  rounded-full -translate-y-1/2 top-1/3 w-10 h-10 text-white font-bold text-lg">

            //   </div>
            //   <p className="leading-relaxed">{step.text}</p>
            // </div>
            <div
              key={step.id}
              className="relative mx-auto bg-transparent   pt-5 pb-2 border-[1px] border-[#D9D9D9] rounded-xl flex-1 flex items-start justify-start  text-white px-3 lg:max-w-md max-[1070px]:w-full shadow-lg"
            >
              {/* Half-border number circle */}
              <div className="absolute left-0 top-6 -translate-x-1/2 size-12">
                <div
                  className="relative w-full h-full rounded-full flex items-center justify-center opacity-95"
                  style={{
                    background:
                      "conic-gradient(#D9D9D9 0deg 180deg, transparent 180deg 360deg)",
                  }}
                >
                  {/* Inner circle to mask bottom half and create depth */}
                  <div className="absolute inset-[1px] bg-[#6b1d7c] rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    <div className="text-lg font-karla">{step.id}</div>
                  </div>
                </div>
              </div>

              {/* Text content */}
              <p className="ml-8 lg:text-[20px] text-[15px] lg:pb-0 pb-4 font-lora text-white/90 lg:leading-[30px]">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="absolute bottom-0  rounded-xl  translate-y-1/2 -translate-x-1/2 left-1/2 flex justify-center hover:scale-101 duration- group hover:shadow-[0_0_15px_rgba(255,255,255,0.9)] transition-all">
          <div className=" absolute  bg-main-dark rounded-full -top-1 -translate-y-1/2 group-hover:scale-102 duration- group-hover:shadow-[0_0_15px_rgba(255,255,255,0.9)] transition-all">
            <img
              src="/images/brand/claritypath-logo.png"
              alt="logoscotitech"
              className="h-7 "
            />
          </div>

          <a href="http://appdeploy.scotitech.com/w/scotitech" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-black font-karla  rounded-xl  text-[15px] px-3 lg:px-6 pt-3 lg:pb-3 pb-3 transition cursor-pointer">
              Download now From
              <span className="text-main-dark font-bold"> AppDeploy</span>{" "}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

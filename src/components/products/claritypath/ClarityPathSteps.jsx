"use client";
import { motion } from "framer-motion";

export default function ClarityPathSteps() {
  const steps = [
    {
      id: 1,
      text: "Organizations can find ClarityPath in ABM under Custom Apps.",
    },
    {
      id: 2,
      text: "Assign it to employees via MDM (Jamf, Intune, etc.) or directly by Apple ID.",
    },
    {
      id: 3,
      text: "Users can then download ClarityPath securely, with in-app purchases available for premium features.",
    },
  ];

  return (
    <section
      className="relative py-20 px-6 flex justify-center items-center  bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/products/claritypath/howclaritypath.png')", // replace with your image
      }}
    >
      {/* <div className="relative rounded-3xl p-[2px] bg-gradient-to-bl from-[#98F9FF]/10 to-[#EABFFF]/20"> */}

      <div className=" text-white rounded-3xl shadow-2xl max-w-7xl w-full p-10 backdrop-blur-xl border border-white/10">
        {/* Title */}

        <div className="relative w-fit py-4 mt-2 mx-auto">
          <p className="absolute text-[4.5rem]  font-semibold font-karla opacity-5 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-nowrap select-none">
            How to Get ClarityPath
          </p>
          <h2 className="text-[38px] font-bold font-karla">
            How to Get Clarity<span className="text-[#69DCEE]">Path</span>
          </h2>
        </div>

        <p className="text-center text-xl mb-15 font-lora">
          ClarityPath is distributed exclusively as a Custom App via Apple
          Business Manager.
        </p>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 mb-14">
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
              className="relative bg-transparent pt-5 pb-2 border-[1px] border-[#D9D9D9] rounded-xl flex-1 flex items-start justify-start  text-white px-3 max-w-md shadow-lg"
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
                    <div className="text-lg">{step.id}</div>
                  </div>
                </div>
              </div>

              {/* Text content */}
              <p className="ml-8 text-[20px] font-lora text-white/90 leading-[25px]">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="absolute bottom-0  rounded-xl  translate-y-1/2 -translate-x-1/2 left-1/2 flex justify-center hover:scale-101 duration- group hover:shadow-[0_0_15px_rgba(255,255,255,0.9)] transition-all">
          <div className=" absolute  bg-main-dark rounded-full -top-1 -translate-y-1/2 group-hover:scale-102 duration- group-hover:shadow-[0_0_15px_rgba(255,255,255,0.9)] transition-all">
            <img
              src="/images/products/claritypath/logo.png"
              alt="logoscotytech"
              className="h-7 "
            />
          </div>
          <button className="bg-white text-black font-lora  rounded-xl  px-6 pt-3 pb-3 transition cursor-pointer">
            Contact <span className="text-main-dark font-bold">ScotiTech</span>{" "}
            for ABM Access
          </button>
        </div>
      </div>
    </section>
  );
}

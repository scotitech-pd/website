import { MessageSquareIcon, DownloadCloudIcon } from "lucide-react";

export default function ClarityPathSection() {
  return (
    <section
      className="relative overflow-hidden text-white min-[1380px]:py-25 py-18 bg-cover bg-center bg-no-repeat bg-black"
      style={{
        backgroundImage: "url('/images/products/claritypath/herobg.png')",
      }}
    >
      <div className="relative max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* === Left Column: Text Content === */}
        <div className="lg:w-2/3 space-y-6 z-20">
          <div className="inline-flex">
            <img
              src="/images/brand/claritypath-logo.png"
              alt="ClarityPath logo"
              className="h-18 w-auto rounded-[1.8rem] object-contain"
            />
          </div>

          <h2 className="lg:text-2xl font-xl font-medium font-karla mt-7 text-[#EABFFF]">
            Guided planning and clearer decision support
          </h2>

          {/* Full-length description for desktop */}
          <p className="hidden lg:block leading-6 font-lora text-white/80 max-w-[620px] ">
            ClarityPath is an{" "}
            <span className="text-[#EABFFF]">AI-supported decision-support product</span>{" "}
            by <span className="text-[#EABFFF]">ScotiTech</span>, designed to
            help individuals and teams think through priorities, goals, and
            next steps more clearly. Distributed via{" "}
            <span className="text-[#EABFFF] font-semibold">AppDeploy</span>,
            it offers a more private digital experience for structured planning
            and personal development.
          </p>

          {/* Shorter version for mobile */}
          <p className="lg:hidden block leading-6 font-lora text-white/80 max-w-[620px]">
            ClarityPath is an{" "}
            <span className="text-[#EABFFF]">AI-supported decision-support product</span>{" "}
            by <span className="text-[#EABFFF]">ScotiTech</span>, helping
            teams and individuals think through goals and decisions with more
            structure.
          </p>

          <div className="flex flex-wrap gap-6 pt-2">
            <a href="https://appdeploy.scotitech.com/w/appdeploy-platform" target="_blank" rel="noopener noreferrer">
              <button className="bg-white cursor-pointer text-gray-900 px-6 py-2.5 rounded-lg font-medium hover:bg-[#C140D5] hover:text-white hover:shadow-[0_0_10px_rgba(140,82,255,0.9)] duration-300 transition-all font-lora flex items-center gap-2">
                <DownloadCloudIcon className="h-5 w-5" />
                Access ClarityPath
              </button>
            </a>
          </div>
        </div>

     
         <div className="lg:w-1/4 flex justify-start items-center">


          {/* Desktop version of the image — smaller for balance */}
          <img
            src="/images/brand/claritypath-logo.png"
            alt="ClarityPath logo"
            className="hidden lg:block w-[94%] max-h-[500px] rounded-[2rem] object-contain"
          />

          {/* Mobile floating image (semi-transparent) */}
          <img
            src="/images/brand/claritypath-logo.png"
            alt="ClarityPath logo"
            className="lg:hidden block absolute max-[579px]:-bottom-20 max-[620px]:-bottom-[120px] opacity-60 z-2 left-1/2 w-[220px] rounded-[1.6rem]"
          />
        </div>
      </div>
    </section>
  );
}

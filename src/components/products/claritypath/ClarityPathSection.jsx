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
          <div className="lg:text-5xl text-3xl font-semibold relative w-fit font-karla">
            Clarity Path
            <p className="absolute text-[85px] opacity-10 top-1/2 -translate-y-1/2 -left-5 text-nowrap hidden md:block">
              Clarity Path
            </p>
          </div>

          <h2 className="lg:text-2xl font-xl font-medium font-karla mt-7 text-[#EABFFF]">
            Strategic Planning. Personal Growth. Smarter AI-Driven Decisions.
          </h2>

          {/* Full-length description for desktop */}
          <p className="hidden lg:block leading-6 font-lora text-white/80 max-w-[620px] ">
            ClarityPath is an{" "}
            <span className="text-[#EABFFF]">
              AI-powered decision-support app
            </span>{" "}
            by <span className="text-[#EABFFF]">ScotiTech</span>, designed to
            help individuals and teams make smarter, more focused choices. It
            uses intelligent insights to align goals, priorities, and actions
            with clarity. Distributed securely via{" "}
            <span className="text-[#EABFFF] font-semibold">Appdeploy</span>,
            ClarityPath empowers organizations{" "}
            <span className="text-[#EABFFF]">
              with a private, data-driven tool for planning and personal growth.
            </span>
          </p>

          {/* Shorter version for mobile */}
          <p className="lg:hidden block leading-6 font-lora text-white/80 max-w-[620px]">
            ClarityPath is an{" "}
            <span className="text-[#EABFFF]">
              AI-based decision-support app
            </span>{" "}
            by <span className="text-[#EABFFF]">ScotiTech</span>, helping teams
            and individuals make smarter, goal-focused decisions with clarity.
          </p>

          <div className="flex flex-wrap gap-6 pt-2">
            <a href="https://appdeploy.scotitech.com:5173/">
              <button className="bg-white cursor-pointer text-gray-900 px-6 py-2.5 rounded-lg font-medium hover:bg-[#C140D5] hover:text-white hover:shadow-[0_0_10px_rgba(140,82,255,0.9)] duration-300 transition-all font-lora flex items-center gap-2">
                <DownloadCloudIcon className="h-5 w-5" />
                Download Now
              </button>
            </a>
          </div>
        </div>

        {/* === Right Column: Product Image === */}
        <div className="lg:w-1/4 flex justify-start items-center">
          <img
            src="/images/products/claritypath/claritypath.png"
            alt="ClarityPath app preview"
            className="hidden lg:block w-[90%]"
          />
          <img
            src="/images/products/claritypath/claritypath.png"
            alt="ClarityPath mobile preview"
            className="lg:hidden block absolute max-[579px]:-bottom-20 max-[620px]:-bottom-[120px] opacity-50 z-2 right-0 w-[200px]"
          />
        </div>
      </div>
    </section>
  );
}

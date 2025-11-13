import { DownloadCloudIcon } from "lucide-react";

export default function ElderConnectHero() {
  return (
    // Hero section for Elder Connect+
    <section
      className="relative overflow-hidden text-white min-[1380px]:py-25 py-18 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/products/elder/bgimg.png')", // main hero background
      }}
    >
      <div className="relative max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* === Left Side (Text Section) === */}
        <div className="lg:w-2/3 space-y-6 z-20">
          {/* Main title with faint background text for depth */}
          <div className="lg:text-5xl text-3xl font-semibold relative font-karla w-fit">
            Elder Connect+
            <p className="absolute text-[85px] opacity-10 top-1/2 -translate-y-1/2 -left-5 text-nowrap hidden md:block">
              Elder Connect+
            </p>
          </div>

          {/* Subtitle */}
          <h2 className="lg:text-2xl font-xl font-medium font-karla mt-7">
            Connecting Generations. Supporting Independence.
            <span className="block">Providing Peace of Mind.</span>
          </h2>

          {/* Description: full text for desktop, short version for mobile */}
          <p className="hidden lg:block leading-6 font-lora text-white/80 max-w-[620px]">
            Elder Connect+ by <span className="text-[#EABFFF]">ScotiTech</span>{" "}
            is a trusted companion and assistance app designed to help seniors
            live active, independent, and safe lives — while keeping their
            families connected and informed every step of the way.
          </p>

          <p className="lg:hidden block leading-6 font-lora text-white/80 max-w-[620px]">
            Elder Connect+ by <span className="text-[#EABFFF]">ScotiTech</span>{" "}
            helps seniors live independently while keeping their families
            connected and informed.
          </p>

          {/* CTA Button */}
          <a href="https://apps.apple.com/gb/app/elderconnect/id6720757966">
            <button className="bg-white cursor-pointer text-gray-900 px-6 py-2.5 rounded-lg font-medium hover:bg-[#C140D5] hover:text-white hover:shadow-[0_0_10px_rgba(140,82,255,0.9)] duration-300 transition-all font-lora">
              Download Now
              <DownloadCloudIcon className="inline-block ml-2 h-5 w-5" />
            </button>
          </a>
        </div>

        {/* === Right Side (Phone Mockup) === */}
        <div className="lg:w-1/4 flex justify-start items-center">
          {/* Desktop version of the image (slightly smaller than AppDeploy) */}
          <img
            src="/images/products/elder/phoneimg.png"
            alt="Elder Connect+ preview"
            className="hidden lg:block w-[75%] max-h-[420px] object-contain"
          />

          {/* Mobile floating image (semi-transparent background mockup) */}
          <img
            src="/images/products/elder/phoneimg.png"
            alt="Elder Connect+ mobile preview"
            className="lg:hidden block absolute max-[579px]:-bottom-20 max-[620px]:-bottom-[120px] opacity-50 z-2 left-1/2 w-[180px]"
          />
        </div>
      </div>
    </section>
  );
}

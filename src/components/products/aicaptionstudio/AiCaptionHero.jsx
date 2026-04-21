import { DownloadCloudIcon } from "lucide-react";

export default function AiCaptionHero() {
  return (
    // Hero section for AI Caption Studio
    <section
      className="relative overflow-hidden text-white min-[1380px]:py-25 py-18 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/products/aicaptionstudio/frontbg.png')", // main hero background
      }}
    >
      <div className="relative max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* === Left Side (Text Section) === */}
        <div className="lg:w-2/3 space-y-6 z-20">
          {/* Title with faint background text */}
          <div className="lg:text-5xl text-3xl font-semibold relative w-fit">
            AI Caption Studio
            <p className="absolute text-[85px] opacity-10 top-1/2 -translate-y-1/2 -left-5 text-nowrap hidden md:block">
              AI Caption Studio
            </p>
          </div>

          {/* Subtitle */}
          <h2 className="lg:text-2xl font-xl font-medium font-karla mt-7">
            AI-powered captions and content support
            <span className="block">
              for faster publishing workflows.
            </span>
          </h2>

          {/* Full description for desktop */}
          <p className="hidden lg:block leading-6 font-lora text-white/80 max-w-[620px]">
            AI Caption Studio, by{" "}
            <span className="text-[#EABFFF]">ScotiTech</span>, is a powerful
            content-support tool designed for marketers, creators, and
            businesses that need faster captioning and more consistent content
            preparation.
          </p>

          {/* Short version for mobile */}
          <p className="lg:hidden block leading-6 font-lora text-white/80 max-w-[620px]">
            AI Caption Studio helps marketers, creators, and businesses prepare
            captions and social content more efficiently with AI support.
          </p>

          {/* CTA Button */}
          <a href="https://apps.apple.com/gb/app/ai-caption-studio/id6743449367">
          <button className="bg-white cursor-pointer text-gray-900 px-6 py-2.5 rounded-lg font-medium hover:bg-[#C140D5] hover:text-white hover:shadow-[0_0_10px_rgba(140,82,255,0.9)] duration-300 transition-all font-lora">
            Download the App
            <DownloadCloudIcon className="inline-block ml-2 h-5 w-5" />
          </button></a>
        </div>

        {/* === Right Side (Phone Mockup) === */}
        <div className="lg:w-1/4 flex justify-start items-center">
          {/* Desktop version of the image — smaller for balance */}
          <img
            src="/images/products/aicaptionstudio/frontmobile.png"
            alt="AI Caption Studio preview"
            className="hidden lg:block w-[75%] max-h-[420px] object-contain"
          />

          {/* Mobile floating image (semi-transparent) */}
          <img
            src="/images/products/aicaptionstudio/frontmobile.png"
            alt="AI Caption Studio mobile preview"
            className="lg:hidden block absolute max-[579px]:-bottom-20 max-[620px]:-bottom-[120px] opacity-50 z-2 left-1/2 w-[180px]"
          />
        </div>
      </div>
    </section>
  );
}

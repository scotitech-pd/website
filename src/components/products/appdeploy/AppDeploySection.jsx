import { DownloadCloudIcon, ExternalLink } from "lucide-react";

export default function AppDeploySection() {
  return (
    // Hero section for AppDeploy
    <section
      className="relative overflow-hidden text-white min-[1380px]:py-25 py-18 bg-cover bg-center bg-no-repeat -mt-[1px]"
      style={{
        backgroundImage: "url('/images/products/appdeploy/herobg.png')", // main hero background
      }}
    >
      <div className="relative max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* === Left Side (Text Section) === */}
        <div className="lg:w-2/3 space-y-6 z-20">
          {/* Main title with faint background text for depth */}
          <div className="lg:text-5xl text-3xl font-semibold relative w-fit">
            AppDeploy
            <p className="absolute text-[85px] opacity-10 top-1/2 -translate-y-1/2 -left-5 text-nowrap hidden md:block">
              AppDeploy
            </p>
          </div>

          {/* Subtitle */}
          <h2 className="lg:text-2xl text-xl font-medium font-karla mt-7">
            The Smarter Way to Distribute
            <span className="block"> iOS Apps</span>
          </h2>

          {/* Description: full text for desktop, short version for mobile */}
          <p className="hidden lg:block leading-6 font-lora text-white/80 max-w-[620px]">
            AppDeploy simplifies internal, beta, and enterprise app deployment
            when App Store submissions face rejection or undefined delays. It
            ensures guaranteed distribution by allowing you to deliver, manage,
            and update your apps securely for both internal teams and external
            users, keeping everyone on the latest version with ease.
          </p>

          <p className="lg:hidden block leading-6 font-lora text-white/80 max-w-[620px]">
            AppDeploy enables seamless internal and external app distribution
            when App Store rejects or delays approval, ensuring secure, fast,
            and reliable access to the latest builds.
          </p>

          {/* CTA Button */}
          <a href="https://appdeploy.scotitech.com:5173/">
            <button className="bg-white cursor-pointer text-gray-900 px-6 py-2.5 rounded-lg font-medium hover:bg-[#C140D5] hover:text-white hover:shadow-[0_0_10px_rgba(140,82,255,0.9)] duration-300 transition-all font-lora">
              Explore Now
              <ExternalLink className="inline-block ml-2 h-5 w-5" />
            </button>
          </a>
        </div>

        {/* === Right Side (Phone Mockup) === */}
        <div className="lg:w-1/4 flex justify-start items-center">
          {/* Desktop version of the image */}
          <img
            src="/images/products/appdeploy/phonepic.png"
            alt="AppDeploy preview"
            className="hidden lg:block w-[90%]"
          />

          {/* Mobile floating image (semi-transparent background mockup) */}
          <img
            src="/images/products/appdeploy/phonepic.png"
            alt="AppDeploy preview mobile"
            className="lg:hidden block absolute max-[579px]:-bottom-20 max-[620px]:-bottom-[120px] opacity-50 z-2 left-1/2 w-[200px]"
          />
        </div>
      </div>
    </section>
  );
}

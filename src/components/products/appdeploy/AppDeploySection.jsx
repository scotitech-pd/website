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
          <div className="lg:text-5xl text-3xl font-semibold relative w-fit font-karla">
            AppDeploy
            <p className="absolute text-[85px] opacity-10 top-1/2 -translate-y-1/2 font-karla -left-5 text-nowrap hidden md:block">
              AppDeploy
            </p>
          </div>

          {/* Subtitle */}
          <h2 className="lg:text-4xl text-2xl font-semibold font-karla mt-7 leading-tight">
            Internal iOS app distribution built around Apple Business Manager.
          </h2>

          {/* Description */}
          <p className="leading-relaxed font-lora text-white/80 max-w-[700px] text-lg">
            AppDeploy gives organisations a branded, trackable layer on top of Apple Business Manager workflows, making private app delivery easier to manage, easier to control, and easier for employees to use.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a href="https://appdeploy.scotitech.com/request-access" target="_blank" rel="noopener noreferrer">
              <button className="bg-white cursor-pointer text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-[#C140D5] hover:text-white hover:shadow-[0_0_15px_rgba(140,82,255,0.8)] duration-300 transition-all font-karla">
                Request Access
                <ExternalLink className="inline-block ml-2 h-5 w-5" />
              </button>
            </a>
            
            <a href="https://appdeploy.scotitech.com/pricing" target="_blank" rel="noopener noreferrer">
              <button className="border-2 border-white/40 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 duration-300 transition-all font-karla">
                View Pricing
              </button>
            </a>
          </div>
        </div>

        {/* === Right Side (Phone Mockup) === */}
       <div>
          {/* Desktop version of the image — smaller for balance */}
          <img
            src="/images/products/appdeploy/phonepic.png"
            alt="AI Caption Studio preview"
            className="hidden lg:block w-[85%] max-h-[420px] object-contain"
          />

          {/* Mobile floating image (semi-transparent) */}
          <img
            src="/images/products/appdeploy/phonepic.png"
            alt="AI Caption Studio mobile preview"
            className="lg:hidden block absolute max-[579px]:-bottom-20 max-[620px]:-bottom-[120px] opacity-50 z-2 left-1/2 w-[180px]"
          />
        </div>
      </div>
    </section>
  );
}

import { CalendarDaysIcon } from "lucide-react"; // using a fitting icon for "Schedule Demo"

export default function OpslyHeroSection() {
  return (
    // Hero section for Opsly product page
    // Full-width section with a background image and top/bottom padding
    <section
      className="relative overflow-hidden text-white min-[1380px]:py-25 py-18 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/products/opsly/frontbg.png')", // hero background image
      }}
    >
      {/* Layout wrapper - controls width, padding, and responsive structure */}
      <div className="relative max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-8">

        {/* === Left Column: Text and CTA === */}
        <div className="lg:w-2/3 space-y-6 z-20">
          {/* Product title with subtle ghost text layer */}
          <div className="lg:text-5xl text-3xl font-semibold relative w-fit font-karla">
            Opsly
            <p className="absolute text-[85px] opacity-10 top-1/2 -translate-y-1/2 -left-5 text-nowrap hidden md:block">
              Opsly
            </p>
          </div>

          {/* Subtitle / tagline */}
          <h2 className="lg:text-2xl font-xl font-medium font-karla mt-7">
            Integrating Every Tool Your
            <span className="block">Team Needs, Billed Simply.</span>
          </h2>

          {/* Full-length description for desktop */}
          <p className="hidden lg:block leading-6 font-lora text-white/80 max-w-[620px]">
            Opsly is the centralized command center for your company’s software
            stack. Gain complete visibility into your SaaS applications,
            eliminate redundant spending, and ensure compliance — all from a
            single, powerful platform developed by Scotitech.
          </p>

          {/* Shorter description for mobile */}
          <p className="lg:hidden block leading-6 font-lora text-white/80 max-w-[620px]">
            Opsly centralizes your company’s SaaS tools to save costs and ensure
            compliance — all from one powerful dashboard.
          </p>

          {/* CTA button with hover glow and icon */}
          <button className="bg-white text-gray-900 px-6 py-2.5 rounded-lg font-medium hover:bg-[#C140D5] hover:text-white hover:shadow-[0_0_10px_rgba(140,82,255,0.9)] duration-300 transition-all font-lora">
            Schedule a Free Demo
            <CalendarDaysIcon className="inline-block ml-2 h-5 w-5" />
          </button>
        </div>

        {/* === Right Column: Product Image === */}
        <div className="lg:w-1/4 flex justify-start items-center">
          {/* Desktop mockup image */}
          <img
            src="/images/products/opsly/frontmobile.png"
            alt="Opsly dashboard preview"
            className="hidden lg:block w-[90%]"
          />

          {/* Mobile mockup image - softly overlaid in background */}
          <img
            src="/images/products/opsly/frontmobile.png"
            alt="Opsly mobile preview"
            className="lg:hidden block absolute max-[579px]:-bottom-20 max-[620px]:-bottom-[90px] opacity-50 z-2 left-1/2 w-[200px]"
          />
        </div>
      </div>
    </section>
  );
}

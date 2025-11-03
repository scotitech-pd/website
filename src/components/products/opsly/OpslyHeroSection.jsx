
export default function OpslyHeroSection() {
  return (
    <section
      className="relative overflow-hidden text-white py-22 min-[1380px]:py-28 bg-cover bg-center "
      style={{
        backgroundImage: "url('/images/products/opsly/frontbg.png')", 
      }}
    >
      <div className="relative max-w-7xl mx-auto px-16 min-[1380px]:px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-2/3 space-y-6">
          <div className="text-5xl font-semibold relative w-fit font-karla">Opsly
            <p className="absolute text-[85px] opacity-5 top-1/2 -translate-y-1/2 -left-5 ">Opsly</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-medium font-karla mt-7">
            Integrating Every Tool Your 
            <span className="block">Team Needs, Billed Simply.</span>
          </h2>

          <p className="leading-[22px] font-lora text-white/80 max-w-[620px] text-justify">
            Opsly is the centralized command center for your company's software
            stack. Gain complete visibility into your SaaS applications,
            eliminate redundant spending, and ensure compliance — all from a
            single, powerful platform developed by Scotitech.
          </p>

          <button className="bg-white text-gray-900 px-6 py-2.5 rounded-lg font-medium hover:bg-[#C140D5] hover:text-white hover:shadow-[0_0_10px_rgba(140,82,255,0.9)] duration-300 transition-all font-lora">
            Schedule a Free Demo
          </button>
        </div>

        {/* Right image mockup */}
        <div className="lg:w-1/3 flex justify-center items-center relative">
          <img
            src="/images/products/opsly/frontmobile.png"
            alt=""
            className=""
          />
        </div>
      </div>
    </section>
  );
}

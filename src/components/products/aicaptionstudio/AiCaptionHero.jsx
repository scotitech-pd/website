export default function AiCaptionHero() {
  return (
    <section
      className="relative overflow-hidden text-white min-[1380px]:py-25 py-18 bg-cover bg-center "
      style={{
        backgroundImage: "url('/images/products/aicaptionstudio/frontbg.png')", // replace with your image
      }}
    >
      <div className="relative max-w-7xl mx-auto min-[1380px]:px-6 px-18 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="lg:w-2/3 space-y-6">
          <div className="text-5xl font-semibold relative w-fit">
            AI Caption Studio
            <p className="absolute text-[85px] opacity-10 top-1/2 -translate-y-1/2 -left-5 text-nowrap ">
              AI Caption Studio
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-medium font-karla mt-7">
            AI-Powered Captions & Content
            <span className="block">
              {" "}
              Tools to Boost Engagement in Seconds.
            </span>
          </h2>

          <p className="leading- font-lora text-white/80 max-w-[620px] text-justify">
            Stop staring at a blank screen. AI Caption Studio, by ScotiTech, is
            a powerful content creation tool designed for marketers, creators,
            and businesses to generate captivating social media content
            instantly. Move beyond generic text and create posts that resonate,
            connect, and convert.
          </p>

          <button className="bg-white text-gray-900 px-6 py-2.5 rounded-lg font-medium hover:bg-[#C140D5] hover:text-white hover:shadow-[0_0_10px_rgba(140,82,255,0.9)] duration-300 transition-all font-lora">
            Download Now
          </button>
        </div>

        {/* Right image mockup */}
        <div className="lg:w-1/3 flex justify-start items-center relative">
          <img
            src="/images/products/aicaptionstudio/frontmobile.png"
            alt=""
            className="w-[90%] "
          />
        </div>
      </div>
    </section>
  );
}

export default function AiCaptionHero() {
  return (
    <section
      className="relative overflow-hidden text-white min-[1380px]:py-25 py-18 bg-cover bg-center h-[700px] "
      style={{
        backgroundImage: "url('/images/products/aicaptionstudio/frontbg.png')", // replace with your image
      }}
    >
      <div className="relative max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20
 min-[1380px]:px-6  flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="lg:w-2/3 space-y-6 z-20">
          <div className="text-5xl font-semibold relative w-fit">
            AI Caption Studio
            <p className="absolute text-[85px] opacity-10 top-1/2 -translate-y-1/2 -left-5 text-nowrap hidden md:block ">
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
        <div className="lg:w-1/4 flex justify-start items-center ">
          <img
            src="/images/products/aicaptionstudio/frontmobile.png"
            alt=""
            className="hidden lg:block w-[90%] "
          />
               <img 
            src="/images/products/aicaptionstudio/frontmobile.png"
            alt=""
            className="lg:hidden block  absolute max-[579px]:-bottom-20 min-[580px]:-bottom-50 opacity-50 z-2 left-1/2 w-[200px] "
          />
        </div>
      </div>
    </section>
  );
}

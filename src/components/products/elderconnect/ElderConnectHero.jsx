

export default function ElderConnectHero() {
  return (
    <section
      className="relative overflow-hidden text-white py-18 bg-cover bg-center "
      style={{
        backgroundImage: "url('/images/products/elder/bgimg.png')", // replace with your image
      }}
    >
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-2/3 ">
          <div className="text-5xl font-semibold relative w-fit font-karla">Elder Connect+
            <p className="absolute text-[85px] opacity-5 top-1/2 -translate-y-1/2 -left-3 text-nowrap ">Elder Connect+</p>
          </div>

          <h2 className="text-2xl md:text-[28px] font-medium font-karla mt-7">
             Connecting Generations. Supporting Independence. Providing Peace of Mind.
          </h2>

          <p className="leading-[22px] font-lora text-lg text-white/90 max-w-[620px] text-justify mt-6">
            Elder Connect by ScotiTech is a trusted companion and assistance app
            designed to help seniors live active, independent, and safe lives,
            while keeping their families connected and informed every step of
            the way.
          </p>

          <button className="mt-5 bg-white text-gray-900 px-10 py-2.5 rounded-lg font-medium hover:bg-[#C140D5] hover:text-white hover:shadow-[0_0_10px_rgba(140,82,255,0.9)] duration-300 transition-all font-lora">
            Download Now
          </button>
        </div>

        {/* Right image mockup */}
        <div className="lg:w-1/3 flex justify-center items-center relative">
          <img
            src="/images/products/elder/phoneimg.png"
            alt=""
            className="max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}


function asds()  {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        backgroundImage: "url('/images/elderconnect-bg.png')", // replace with your actual background
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Elder Connect+
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-6">
           
          </h3>
          <p className="text-gray-200 leading-relaxed mb-8 max-w-lg">
            
          </p>
          <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition-all">
            
          </button>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-[260px] md:w-[320px] lg:w-[360px]">
            {/* Phone mockup */}
            <Image
              src="/images/elderconnect-phone.png" // replace with your phone image
              alt="ElderConnect App"
              width={360}
              height={600}
              className="relative z-10"
            />

            {/* Floating card under phone */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-teal-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg">
              ElderConnect+
            </div>
          </div>
        </div>
      </div>

      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3D0F5B]/80 via-[#1D2853]/60 to-[#0B4C42]/80 pointer-events-none"></div>
    </section>
  );
}

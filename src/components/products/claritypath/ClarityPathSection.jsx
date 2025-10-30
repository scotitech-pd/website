export default function ClarityPathSection() {
  return (
    <section
      className="relative overflow-hidden text-white py-24 bg-cover bg-center bg-black"
      style={{
        backgroundImage: "url('/images/products/appdeploy/herobg.png')", // replace with your image
      }}
    >
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-2/3 space-y-6">
          <div className="text-6xl font-semibold relative w-fit">
            Clarity Path
            <p className="absolute text-[85px] opacity-10 top-1/2 text-nowrap -translate-y-1/2 -left-5 ">
              Clarity Path
            </p>
          </div>

          <h2 className="text-2xl md:text-[28px] font-medium mt-7 text-[#EABFFF] font-lora">
            Strategic Planning. Personal Growth. Smarter Decisions
          </h2>

          <p className="leading-6 font-lora text-white/90 max-w-[700px] text-lg">
            ClarityPath is a{" "}
            <span className="text-[#EABFFF]">private decision-support app</span>{" "}
            by <span className="text-[#EABFFF]">ScotiTech</span>, designed to
            help individuals and teams align their focus, energy, and goals with
            clarity. Distributed securely via{" "}
            <span className="text-[#EABFFF]">Apple Business Manager (ABM)</span>
            , ClarityPath provides organizations with a unique tool for personal
            planning and professional growth.
          </p>

          <div className="flex gap-5">
            <button className="bg-white w-fit text-gray-900 px-8 py-2.5 rounded-lg font-medium hover:bg-blue-light hover:text-white hover:shadow-[0_0_25px_rgba(105,140,100,0.9)] duration-300 transition-all font-lora">
                Talk to Sales
            </button>
            <button className="bg-white w-fit text-gray-900 px-8 py-2.5 rounded-lg font-medium hover:bg-blue-light hover:text-white hover:shadow-[0_0_25px_rgba(105,140,100,0.9)] duration-300 transition-all font-lora">
              Download Now
            </button>
          </div>
        </div>

        {/* Right image mockup */}
        <div className="lg:w-1/3 flex justify-center items-center relative">
          <img
            src="/images/products/appdeploy/phonepic.png"
            alt=""
            className=""
          />
        </div>
      </div>
    </section>
  );
}

function CladrityPathSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#0b0015] via-[#100024] to-[#040008] text-white overflow-hidden py-20">
      {/* Subtle background pattern or network effect */}
      <div className="absolute inset-0 bg-[url('/images/claritypath-bg.png')] bg-cover bg-center opacity-40"></div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#130020]/80 via-[#1a0040]/70 to-[#040015]/90"></div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* LEFT: TEXT CONTENT */}
        <div className="max-w-xl text-left">
          <h1 className="text-5xl font-bold mb-6">Clarity Path</h1>
          <h2 className="text-2xl font-semibold text-purple-300 mb-6"></h2>
          <p className="text-gray-300 leading-relaxed mb-8"></p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-black font-medium px-6 py-2 rounded-md shadow-md hover:bg-gray-200 transition">
              Talk to Sales
            </button>
            <button className="bg-white text-black font-medium px-6 py-2 rounded-md shadow-md hover:bg-gray-200 transition">
              Download Now
            </button>
          </div>
        </div>

        {/* RIGHT: PHONE MOCKUP */}
        <div className="mt-12 md:mt-0 relative flex flex-col items-center">
          {/* Blurred glow circle behind phone */}
          <div className="absolute -bottom-16 w-72 h-72 bg-cyan-600/40 rounded-full blur-3xl"></div>

          <Image
            src="/images/claritypath-phone.png"
            alt="Clarity Path iPhone Mockup"
            width={350}
            height={600}
            className="relative z-10 rounded-3xl shadow-2xl"
          />

          {/* App Store buttons */}
          <div className="flex gap-4 mt-6 z-10">
            <Image
              src="/images/appstore-badge.png"
              alt="App Store"
              width={150}
              height={50}
              className="cursor-pointer hover:opacity-80 transition"
            />
            <Image
              src="/images/playstore-badge.png"
              alt="Google Play"
              width={150}
              height={50}
              className="cursor-pointer hover:opacity-80 transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

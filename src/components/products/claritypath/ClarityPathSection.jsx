export default function ClarityPathSection() {
  return (
    <section
      className="relative overflow-hidden text-white min-[1380px]:py-18 py-16 bg-cover bg-center bg-black"
      style={{
        backgroundImage: "url('/images/products/claritypath/heribg.png')", // replace with your image
      }}
    >
      <div className="relative max-w-7xl mx-auto px-6 min-[1500px]:px-0 flex flex-col lg:flex-row items-center justify-between gap-2">
        <div className="lg:w-[60%] space-y-6">
          
          <div className="text-5xl font-semibold relative w-fit font-karla">Clarity Path
            <p className="absolute text-[85px] opacity-5 top-1/2 -translate-y-1/2 -left-5 ">Clarity Path</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-medium mt-7 text-[#EABFFF] font-lora">
            Strategic Planning. Personal Growth. Smarter Decisions
          </h2>

          <p className="leading-[22px] font-lora text-white/80 max-w-[620px] text-justify">
            ClarityPath is a{" "}
            <span className="text-[#EABFFF]">private decision-support app</span>{" "}
            by <span className="text-[#EABFFF]">ScotiTech</span>, designed to
            help individuals and teams align their focus, energy, and goals with
            clarity. Distributed securely via{" "}
            <span className="text-[#EABFFF]">Apple Business Manager (ABM)</span>
            , ClarityPath provides organizations <span className="text-[#EABFFF]"> with a unique tool for personal
            planning and professional growth.</span>
          </p>

          <div className="flex gap-10">
            <button className="bg-white w-fit text-gray-900 px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-light hover:text-white hover:shadow-[0_0_25px_rgba(105,140,100,0.9)] duration-300 transition-all font-lora">
                Talk to Sales
            </button>
            <button className="bg-white w-fit text-gray-900 px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-light hover:text-white hover:shadow-[0_0_25px_rgba(105,140,100,0.9)] duration-300 transition-all font-lora">
              Download Now
            </button>
          </div>
        </div>

        {/* Right image mockup */}
        <div className="lg:w-[40%] flex justify-center items-center relative">
          <img
            src="/images/products/claritypath/claritypath.png"
            alt=""
            className="mt-4 -mb-6 w-[90%]"
          />
          <div className="absolute bottom-1/4 translate-y-1/2 left-1/2 -translate-x-1/2 w-[75%] flex justify-between">
                  <img
                    src="/images/products/opsly/button2.png"
                    alt=""
                    className="w-[45%] h-auto cursor-pointer"
                  />
                  <img
                    src="/images/products/opsly/button1.png"
                    alt=""
                    className="w-[45%] h-auto cursor-pointer"
                  />
                </div>
        </div>
      </div>
    </section>
  );
}
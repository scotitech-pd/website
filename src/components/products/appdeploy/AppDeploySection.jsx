export default function AppDeploySection() {
  return (
    <section
      className="relative overflow-hidden text-white py-24 bg-cover bg-center bg-black"
      style={{
        backgroundImage: "url('/images/products/appdeploy/herobg.png')", // replace with your image
      }}
    >
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-2/3 space-y-6">
          <div className="text-5xl font-semibold relative w-fit font-karla">AppDeploy
            <p className="absolute font-karla text-[85px] opacity-15 top-1/2 -translate-y-1/2 min-[1490px]:-translate-x-1/2 min-[1490px]:left-1/2 -left-6">AppDeploy</p>

          </div>

          <h2 className="text-2xl md:text-3xl font-medium font-karla mt-7">
            The Smarter Way to Distribute 
            <span className="block"> iOS Apps</span>
          </h2>

          <p className="leading- font-lora text-white/80 max-w-[620px] text-justify">
            AppDeploy makes internal, beta, and enterprise app distribution faster, easier,
            and more reliable than ever before. Get your latest builds into the hands of
            your testers and users in seconds, ensuring everyone is always on the most
            current version.
          </p>

          <button className="bg-white text-gray-900 px-6 py-2.5 rounded-lg font-medium hover:bg-[#C140D5] hover:text-white hover:shadow-[0_0_10px_rgba(140,82,255,0.9)] duration-300 transition-all font-lora">
            Download Now
          </button>
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

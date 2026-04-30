const HowToGetAISection = () => {
  return (
    <section
      className="relative bg-cover bg-no-repeat py-10 "
      style={{
        backgroundImage: "url('/images/products/aicaptionstudio/how-bg.png')",
      }}
    >
      <div className="relative z-10 text-center max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#641171] font-karla">
          How to Get AI Caption Studio?
        </h2>
        <p className="text-base sm:text-lg text-black mt-3 font-lora mb-12">
          Getting started is straightforward. AI Caption Studio is available directly for
          individuals and teams.
        </p>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 [@media(min-width:1100px)]:grid-cols-3 gap-6 justify-items-center">
          {/* Card 1 */}
          <div className="bg-[#B8E4FF] rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 w-[340px] py-8  text-center">
            <div className="flex justify-center mb-6">
              <img
                src="/images/products/aicaptionstudio/logo.png"
                alt="Download Icon"
                className="w-20 h-20 object-contain"
              />
            </div>
            <p className="lg:text-[20px] font-semibold leading-6 mb-0 text-[20px] text-black font-karla">
              <span className="font-semibold text-[#0034B1]">Download</span> the
              app
              <br /> AI Caption Studio.
            </p>
            <div className="flex justify-center items-center gap-4 mt-6 cursor-pointer hover:shadow-2xl">
              <a href="https://apps.apple.com/gb/app/ai-caption-studio/id6743449367">
                <img
                  src="/images/products/aicaptionstudio/appstore.png"
                  alt="App Store"
                  className="lg:w-24 w-30 h-auto shadow-md"
                />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#BDFFE6] rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 w-[340px] py-8 px-4 text-center">
            <div className="flex justify-center mb-6">
              <img
                src="/images/products/aicaptionstudio/signup.png"
                alt="Sign Up Icon"
                className="w-20 h-20 object-contain"
              />
            </div>
            <p className="lg:text-[20px] font-semibold leading-6 text-[20px] px-6 text-black font-karla">
              <span className="font-semibold text-[#005031]">Sign Up</span> for
              a free account
              <br /> to explore our core features.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#C7C5FF] rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 w-[340px] py-8 px-4 text-center">
            <div className="flex justify-center mb-6">
              <img
                src="/images/products/aicaptionstudio/upgrade-icon.png"
                alt="Upgrade Icon"
                className="w-20 h-20 object-contain"
              />
            </div>
            <p className="lg:text-[20px] font-semibold leading-6 mb-0 text-[20px] text-black font-karla">
              <span className="font-semibold text-[#641171]">Upgrade</span> to a
              premium plan
              <br /> to unlock unlimited captions, advanced tools, and priority
              support.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-14">
          <a href="https://apps.apple.com/gb/app/ai-caption-studio/id6743449367">
            <button className="bg-gradient-to-r font-lora from-[#2593F6] to-[#1ACCC8] cursor-pointer text-white font-medium px-10 py-3 rounded-full shadow-lg hover:opacity-90 transition">
              Download AI Caption Studio
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToGetAISection;

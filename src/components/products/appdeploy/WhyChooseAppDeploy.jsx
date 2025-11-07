export default function WhyChooseAppDeploy() {
  const features = [
    {
      title: "Slash Your Costs:",
      desc: "Drastically reduce your expenses. AppDeploy costs up to 80% less than leading MDM providers like Jamf or Intune, potentially saving your company over $60,000 annually.",
    },
    {
      title: "Bypass the App Store Entirely:",
      desc: "Say goodbye to long review queues and the risk of public rejection. Deploy updates and new apps on your own schedule, instantly.",
    },
    {
      title: "Eliminate Technical Hurdles:",
      desc: "Our platform is built for clarity. You don’t need a dedicated IT expert to manage deployments. If you can upload a file, you can use AppDeploy.",
    },
    {
      title: "Accelerate Your Workflow:",
      desc: "From startups needing to test a beta build to enterprises deploying a new internal tool, AppDeploy gets your application where it needs to be—now.",
    },
  ];

  return (
    <section className="bg-[#F5F6FB] overflow-hidden             ">
      <div className="px-6 md:px-16 2xl:px-0 grid grid-cols-1 md:grid-cols-[60%_40%] justify-between items-center max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="py-16 ">
          <h2 className="text-4xl font-bold text-black mb-3 font-karla">
            Why Choose <br /> AppDeploy app?
          </h2>
          <p className="text-[22px] mb-14 text-black font-karla">
            Discover the clear advantages of a smarter distribution model.
          </p>

          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-72 h-76 mb-6">
              <img
                src="/images/products/appdeploy/phoneimg.png"
                alt="AppDeploy"
                className="rounded-xl object-cover"
              />
              <div className=" hidden lg:block absolute -right-25 top-1/2 -translate-y-1/2 translate-x-1/2 w-[110%]">
                <img
                  src="/images/products/appdeploy/logo.png"
                  alt=""
                  className=""
                />
                <span className="absolute bg-white left-1/2 shadow-[0_0_10px_rgba(128,128,128,0.9)] -translate-1/2 py-3 px-5 text-[#696969] font-karla font-semibold rounded-xl text-shadow-2xs cursor-pointer hover:bg-main-dark hover:text-white hover:shadow-[0_0_10px_rgba(140,82,255,0.9)] duration-300">
                  Download Now
                </span>
              </div>
              <div className=" lg:hidden absolute -left-43 -bottom-5 translate-x-1/2 w-[110%]">
                <img
                  src="/images/products/appdeploy/logo.png"
                  alt=""
                  className=""
                />
                <span className="absolute bg-white left-1/2 shadow-[0_0_10px_rgba(128,128,128,0.9)] -translate-1/2 py-3 px-5 text-[#696969] font-karla font-semibold rounded-xl text-shadow-2xs cursor-pointer hover:bg-main-dark hover:text-white hover:shadow-[0_0_10px_rgba(140,82,255,0.9)] duration-300">
                  Download Now
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative h-full flex items-center">
          {/* Vertical line */}
          <div className="absolute left-10 top-0 bottom-8 w-[2px] bg-[#7E1A8E]/50 hidden md:block h-full"></div>

          <div className="flex flex-col gap-10">
            {features.map((f, i) => (
              <div key={i} className="flex gap-6 relative">
                <div className="flex-shrink-0">
                  <div className="bg-white border-8 border-main-dark rounded-full size-20 p-3 flex items-center justify-center relative z-10">
                    <img
                      src="/images/products/appdeploy/logoicon.png"
                      alt=""
                      className=""
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-main-dark font-karla">
                    {f.title}
                  </h4>
                  <p className="text-grey mt-1 text-sm font-lora leading-4">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

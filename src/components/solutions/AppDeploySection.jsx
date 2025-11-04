export default function AppDeploySection() {
  return (
    <section
      className="relative overflow-hidden text-white py-24 min-[1400px]:py-40 min-[1800px]:py-56  bg-cover bg-center min-[1150px]:bg-[url('/images/solution/bgimg.png')] bg-[url('/images/solution/bgimg1.png')] "
      // style={{
      //   backgroundImage: "url('/images/solution/bgimg.png')", // replace with your image
      //   // backgroundSize: "cover",
      //   // backgroundPosition: "center",
      // }}
    >
      <div className="absulte inset-0 h-full w-full bg-black z-10"></div>
      <div className=" max-w-8xl relative mx-auto px-5 min-[500px]:px-10 md:px-20 w-full grid min-[1280px]:grid-cols-[70%_30%] items-center justify-between gap-16">
        {/* LEFT CONTENT */}
        <div className="space-y-6 z-10">
          <h1 className="text-[33px] font-medium font-karla leading-tight text-white">
            AppDeploy: The Smarter Way to Distribute iOS Apps
          </h1>

          <p className="text-lg text-[#E38DF0] font-medium font-lora">
            Forget complex MDM setups and App Store rejections.
            <span className="  min-[890px]:font-semibold  min-[890px]:block"> With AppDeploy, you get</span>
          </p>

          {/* Feature List */}
          <div className="flex max-[890px]:flex-col max-[890px]:gap-7 min-[890px]:items-center max-[1150px]:justify-between">
            <ul className=" max-[890px]:space-y-1 space-y-4 text-white/90">
              <li className="flex items-start gap-3">
                <img
                  src="/images/solution/checkicon.png"
                  alt=""
                  className="size-6"
                />
                <span>80% lower costs than MDM providers.</span>
              </li>
              <li className="flex items-start gap-3">
                <img
                  src="/images/solution/checkicon.png"
                  alt=""
                  className="size-6"
                />
                <span>Simple, one-click installation for employees.</span>
              </li>
              <li className="flex items-start gap-3">
                <img
                  src="/images/solution/checkicon.png"
                  alt=""
                  className="size-6"
                />
                <span>Real-time install tracking and code management.</span>
              </li>
              <li className="flex items-start gap-3">
                <img
                  src="/images/solution/checkicon.png"
                  alt=""
                  className="size-6"
                />
                <span>Zero tech hurdles for non-technical users.</span>
              </li>
            </ul>

            {/* large screen image */}
            <div className="hidden min-[1150px]:flex  w-[260px] mx-auto h-fit items-center relative bg-white backdrop-blur-md rounded-xl pb-2.5 pt-3.5 px-6">
              <div className="absolute top-1 left-1 -translate-y-3/4">
                <img
                  src="/images/solution/graph.png"
                  alt=""
                  className="w-[80px]"
                  />
              </div>
              <p className="text-main-dark text-base font-medium">
                Save up to<span className="font-semibold px-1">$60,000</span>{" "}
                annually compared to Jamf/Intune.
              </p>
            </div>
            
            {/* mobile screen image */}
            <div className="min-[1150px]:hidden rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center max-[890px]:mx-auto w-fit z-0">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <img
                    src="/images/products/appdeploy/logo.png"
                    alt="AppDeploy Logo"
                    className="opacity-100 w-full h-full max-h-[150px]"
                  />

                  <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-[85%] flex justify-between">
                    <img
                      src="/images/products/opsly/button2.png"
                      alt=""
                      className="w-[40%] h-auto cursor-pointer"
                    />
                    <img
                      src="/images/products/opsly/button1.png"
                      alt=""
                      className="w-[40%] h-auto cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 relative min-[1280px]:flex justify-center h-full w-full hidden">
          {/* Floating Card */}
        </div>

        <div className="min-[1150px]:flex hidden absolute z-20 -bottom-10 min-[1400px]:-bottom-28 right-10 min-[1700px]:right-0 bg-gradient-to-r from-[#98F9FF]/20 to-[#EABFFF]/20 rounded-xl px-8 py-3 cursor-pointer shadow-lg text-center  backdrop-blur-md  hover:scale-105 duration-300 hover:backdrop-blur-sm">
          <p className="text-lg font-medium text-white">
            Download AppDeploy Now
          </p>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(100,0,200,0.25),transparent_60%)]" />
    </section>
  );
}

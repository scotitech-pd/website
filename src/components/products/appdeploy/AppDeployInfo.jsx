export default function AppDeployInfo() {
  return (
    <section
      className="relative bg-white py-14 sm:py-28 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/products/appdeploy/bgimg.png')", // replace with your image
      }}
    >
      {/* angled background */}

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 grid grid-cols-1 lg:grid-cols-[40%_52%] gap-12 min-[420px]:gap-8 lg:gap-14 min-[1200px]:gap-24 items-center text-black font-lora overflow-y-visible">
        {/* Left content */}
        <div className="">
          <h2 className="lg:text-5xl text-3xl font-semibold text-transparent bg-clip-text bg-main-dark drop-shadow-md font-karla mb-3.5">
            What is AppDeploy?
          </h2>

          <h3 className="text-xl lg:text-2xl font-medium text-main-dark font-karla mb-2.5">
            Effortless iOS App Distribution for Your Business
          </h3>

          <p className="max-[600px]:text-[15px] leading-[22px] font-grey max-[1150px]:hidden">
            AppDeploy is your ultimate solution when the App Store rejects or
            delays your iOS app. It removes uncertainty by giving you complete
            control over internal and external app distribution. Skip review
            tools. Upload your builds, create secure links, and deploy to teams,
            clients, or testers within minutes. Reliable,
            compliant, and built for guaranteed delivery every time.
          </p>

          <p className="leading-[22px] font-grey min-[1150px]:hidden">
            AppDeploy helps you distribute iOS apps even when App Store reviews
            or rejections slow you down. Avoid delays, skip costly MDM setups,
            and deliver apps directly to your users or team securely. With an
            intuitive dashboard, you can upload, generate secure links, and
            share your apps in minutes—ensuring guaranteed, fast, and private
            deployment every time.
          </p>
        </div>

        {/* Right card */}
        <div className="relative">
          {/* Dark app card */}
          <div className="rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center mt-10 w-fit z-0 mx-auto relative">
            <div
              className="max-[580px]:hidden  w-[95%] absolute z-10 -top-14 sm:-top-10 -left-[30px] text-white p-4 pl-10 !h-[130px] flex justify-center items-center  text-sm leading-relaxed shadow-lg bg-cover rounded-t-2xl"
              style={{
                backgroundImage:
                  "url('/images/products/appdeploy/boxdesign.png')",
                backgroundSize: "cover", // ensures full coverage
                backgroundRepeat: "no-repeat", // prevents tiling
                backgroundPosition: "left", // centers the image
                height: "114px",
              }}
            >
              <p className="-mt-5 text-[17px] leading-[21px]">
                Deploy internal apps directly to your team&apos;s devices using a
                private distribution workflow instead of public App Store
                release, avoiding complex MDM solutions.
              </p>
            </div>
            {/* Mobile View */}
            <div className="min-[580px]:hidden  w-[90%] absolute z-10 -top-18 min-[420px]:-top-14 left-1/2 -translate-x-1/2 text-white p-2 min-[376px]:pt-4 flex justify-center items-center  text-sm leading-relaxed shadow-lg rounded-2xl bg-[#641171]">
              <p className="text-[13px] min-[376px]:text-[15px] leading-[19px]">
                Deploy internal apps directly to your team&apos;s devices using a
                private distribution workflow instead of public App Store
                release.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-black w-full h-full"></div>
                <img
                  src="/images/products/appdeploy/logo.png"
                  alt="AppDeploy Logo"
                  className="opacity-40 w-full h-full"
                />

                {/* <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-[85%] flex justify-between">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

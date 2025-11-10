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

          <p className="max-[600px]:text-[15px] leading-[22px] font-grey max-[1150px]:hidden  ">
            AppDeploy is the definitive platform for distributing your private
            iOS applications securely and efficiently. Forget the long review
            times and rejection risks of the App Store, and eliminate the high
            costs and technical overhead of traditional MDM providers. With
            AppDeploy, you get a streamlined, powerful dashboard to upload your
            app, generate secure links, and get it into the hands of your
            employees or testers in minutes. It’s enterprise-grade distribution
            made simple for everyone.
          </p>
          <p className=" leading-[22px] font-grey min-[1150px]:hidden">
            AppDeploy is the all-in-one platform for secure, private iOS app distribution. Skip App Store reviews, rejection risks, and expensive MDM solutions. With AppDeploy, you can easily upload your app, generate secure install links, and share them with your team, employees, or testers in minutes. Enjoy a powerful, intuitive dashboard that makes enterprise-grade app deployment simple, fast, and hassle-free.
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
                Deploy internal apps directly to your team&apos;s devices,
                bypassing the public App Store and complex Mobile Device
                Management (MDM) solutions.
              </p>
            </div>
            {/* Mobile View */}
            <div
              className="min-[580px]:hidden  w-[90%] absolute z-10 -top-18 min-[420px]:-top-14 left-1/2 -translate-x-1/2 text-white p-2 min-[376px]:pt-4 flex justify-center items-center  text-sm leading-relaxed shadow-lg rounded-2xl bg-[#641171]">
              <p className="text-[13px] min-[376px]:text-[15px] leading-[19px]">
                Deploy internal apps directly to your team&apos;s devices,
                bypassing the public App Store and complex Mobile Device
                Management (MDM) solutions.
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

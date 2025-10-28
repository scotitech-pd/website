"use client";
import Image from "next/image";

export default function AppDeployInfo() {
  return (
    <section
      className="relative bg-white py-28 px-6 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/products/appdeploy/bgimg.png')", // replace with your image
      }}
    >
      {/* angled background */}

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[40%_52%] gap-24 items-center text-black font-lora">
        {/* Left content */}
        <div className="">
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-main-dark drop-shadow-md font-karla mb-3.5">
            What is AppDeploy app?
          </h2>

          <h3 className="text-2xl font-medium text-main-dark font-karla mb-2.5">
            Effortless iOS App Distribution for Your Business
          </h3>

          <p className=" leading-[22px] font-grey  ">
            AppDeploy is the definitive platform for distributing your private
            iOS applications securely and efficiently. Forget the long review
            times and rejection risks of the App Store, and eliminate the high
            costs and technical overhead of traditional MDM providers. With
            AppDeploy, you get a streamlined, powerful dashboard to upload your
            app, generate secure links, and get it into the hands of your
            employees or testers in minutes. It’s enterprise-grade distribution
            made simple for everyone.
          </p>
        </div>

        {/* Right card */}
        <div className="relative">
          <div
            className="absolute z-10 -top-2 -left-[26px] text-white p-4 pl-10 w-4/5 h-[114px] flex justify-center items-center  text-sm leading-relaxed shadow-lg overflow-visible bg-cover"
            style={{
              backgroundImage:
                "url('/images/products/appdeploy/boxdesign.png')",
              backgroundSize: "cover", // ensures full coverage
              backgroundRepeat: "no-repeat", // prevents tiling
              backgroundPosition: "center", // centers the image
              height: "114px",
            }}
          >
            <p className="-mt-5 text-[17px] leading-[21px]">
              Deploy internal apps directly to your team&apos;s devices,
              bypassing the public App Store and complex Mobile Device
              Management (MDM) solutions.
            </p>
          </div>

          {/* Dark app card */}
          <div className="rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center mt-10 w-fit z-0">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-black w-full h-full"></div>
                <img
                  src="/images/products/appdeploy/logo.png"
                  alt="AppDeploy Logo"
                  className="opacity-40 w-full h-full"
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
    </section>
  );
}

export default function HowAppDeployWorks() {
  const steps = [
    {
      img: "/images/products/appdeploy/upload.png",
      title: "Manage Your App",
      desc: "Log in to your AppDeploy dashboard and manage your application's .IPA/.APK file.",
    },
    {
      img: "/images/products/appdeploy/securelinks.png",
      title: "Generate Secure Links",
      desc: "Instantly create unique, private installation links for your employees or user groups using our secure Apple Business Manager integration.",
    },
    {
      img: "/images/products/appdeploy/oneclick.png",
      title: "One-Click Install",
      desc: "Share the links with your team. They just tap the link on their iOS device to download and install the app immediately.",
    },
  ];

  return (
    <section className="bg-white lg:my-20 py-10 text-center max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl md:text-[40px] font-semibold text-main-dark drop-shadow-sm mb-3 font-karla">
        How AppDeploy Works?
      </h2>
      <p className="text-[#4E4E4E] lg:text-xl text-lg font-lora mb-16">
        From upload to installation in minutes, not weeks
      </p>

      {/* Steps */}
      <div
        className="
          grid 
          grid-cols-1 
          min-[1051px]:grid-cols-2 
          min-[1051px]:gap-x-8 
          min-[1051px]:gap-y-10
          min-[1220px]:grid-cols-3
          justify-center 
          items-start 
          gap-5 
          lg:gap-10
        "
      >
        {steps.map((s, i) => (
          <div
            key={i}
            className={`
              relative py-8 px-4 shadow-none flex items-center justify-center group w-full 
              ${
                // 3rd card full width only for 1051–1219px
                i === 2
                  ? "min-[1051px]:col-span-2 min-[1051px]:w-full min-[1220px]:col-span-1"
                  : ""
              }
            `}
          >
            {/* === Desktop (≥1220px) === */}
            <div className="hidden min-[1220px]:flex items-center gap-4 text-left relative w-full">
              {/* Icon */}
              <div className="bg-[#F4F4F4] shadow-md rounded-full flex items-center absolute left-0 size-12 justify-center z-10">
                <img src={s.img} alt="" className="min-[1220px]:size-12 size-8" />
              </div>

              {/* Text Content */}
              <div className="relative font-lora ml-29 w-fit">
                <img
                  src="/images/products/appdeploy/circledesign.png"
                  alt=""
                  className="absolute left-1/2 top-1/2 -translate-1/2 scale-[1.3]"
                />
                <h3 className="font-semibold text-xl text-gray-900 mb-1 font-karla" >
                  {s.title}
                </h3>
                <p className="text-[#000] text-[15px] leading-5 font-lora">{s.desc}</p>
              </div>
            </div>

            {/* === Below 1220px (tablet/mobile) === */}
            <div className="relative flex flex-col min-[1220px]:hidden items-center text-center pt-12 pb-6 px-5 bg-[#F9F9F9] border border-[#E2E2E2] rounded-xl shadow-sm w-full">
              {/* Icon - Absolutely positioned on top */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="bg-white shadow-md rounded-full size-16 sm:size-18 flex justify-center items-center border border-[#E2E2E2]">
                  <img
                    src={s.img}
                    alt=""
                    className="size-8 sm:size-10 object-contain"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="relative mt-4">
                <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-2 font-karla">
                  {s.title}
                </h3>
                <p className="text-[#3B3B3B]  text-[14px] sm:text-[15px] leading-[20px] max-w-[90%] mx-auto font-lora">
                  {s.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

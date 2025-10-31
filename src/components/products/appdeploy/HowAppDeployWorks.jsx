export default function HowAppDeployWorks() {
  const steps = [
    {
      img: "/images/products/appdeploy/upload.png",
      title: "Upload Your App",
      desc: "Log in to your AppDeploy dashboard and upload your application's .IPA file.",
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
    <section className="bg-white py-20 px-6 text-center max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl md:text-[40px] font-semibold text-main-dark drop-shadow-sm mb-3 font-karla">
        How AppDeploy App Work?
      </h2>
      <p className="text-[#4E4E4E] text-2xl font-lora mb-16">
        From upload to installation in minutes, not weeks
      </p>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-10 md:gap-12">
        {steps.map((s, i) => (
          <div
            key={i}
            className="relative py-8 px-4 shadow-none  flex items-center justify-center group"
          >
            <div className="flex items-center gap-4 text-left relative">
              <div className="bg-[#F4F4F4] shadow-md rounded-full  flex items-center absolute left-0 size-24 justify-center z-10">
                <img src={s.img} alt="" className="size-12" />
              </div>
              <div className="relative font-lora ml-29 w-fit">
                <img
                  src="/images/products/appdeploy/circledesign.png"
                  alt=""
                  className="absolute left-1/2 top-1/2 -translate-1/2 scale-[1.3]"
                />
                <h3 className="font-semibold text-xl text-gray-900 mb-1">
                  {s.title}
                </h3>
                <p className="text-[#3B3B3B] leading-5">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

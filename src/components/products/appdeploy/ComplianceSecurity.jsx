
export default function ComplianceSecurity() {
  const items = [
    {
      icon: "/images/products/appdeploy/icon1.png",
      title: "Official ABM Integration:",
      desc: "Official ABM Integration: We use Apple's recommended protocols for private distribution, keeping your process legitimate and secure.",
    },
    {
      icon: "/images/products/appdeploy/icon2.png",
      title: "Private & Controlled Access:",
      desc: "Your apps are never publicly listed. You control exactly who can download and install them through unique, managed links.",
    },
    {
      icon: "/images/products/appdeploy/icon3.png",
      title: "Centralized Management:",
      desc: "Maintain full oversight from your admin dashboard, with the ability to manage versions and track access in one secure location.",
    },
  ];

  return (
    <section
      className="relative text-white py-20  overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/products/appdeploy/compliance.png')", // replace with your image
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div> */}

      <div className="relative max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 flex flex-col min-[1090px]:flex-row items-center gap-12 font-lora">
        {/* Left Section */}
        <div className="min-[1090px]:w-1/2 flex flex-col items-start gap-2 ">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#E38DF0] font-karla lg:mb-4">
            Compliance & Security
          </h2>
          <h3 className="text-2xl lg:mb-4 text-white/90 font-karla">
            Enterprise-Grade Security & Compliance
          </h3>
          <p className="text-[#E2E2E2]  lg:text-xl font-light font-lora">
            Security is at the core of AppDeploy. We utilize Apple's official
            Business Manager for app distribution, which is the
            industry standard for deploying internal apps securely. This ensures
            you are fully compliant with Apple's terms of service.
          </p>
        </div>

        {/* Right Section */}
        <div className="min-[1090px]:w-[45%]  flex flex-col gap-10 max-[600px]:pl-9 ">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative bg-white text-black rounded-2xl shadow-md py-4 pl-8 px-6 flex items-start gap-4 hover:shadow-lg transition-all"
            >
              <div className=" absolute top-0 left-0 -translate-1/2 bg-white rounded-full size-13 flex items-center justify-center shadow-[0_0_10px_rgba(140,82,255,0.9)]">
                <img src={item.icon} alt="" className="size-7"/>
              </div>
              <div>
                <h4 className="font-bold text-main-dark font-karla mb-1 text-[22px]">
                  {item.title}
                </h4>
                <p className="text-[#2B2B2B] text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

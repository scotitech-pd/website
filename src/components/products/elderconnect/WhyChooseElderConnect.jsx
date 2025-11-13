"use client";

export default function WhyChooseElderConnect() {
  const features = [
    {
      id: 1,
      icon: "/images/products/elder/heartfelt.png",
      title: "Heartfelt Companionship:",
      text: "Our trained team offers genuine connection, not just assistance, ensuring your loved one feels valued and never alone.",
    },
    {
      id: 2,
      icon: "/images/products/elder/care.png",
      title: "Care on Your Schedule:",
      text: "We offer fully flexible scheduling and customizable services designed to fit your unique needs and lifestyle.",
    },
    {
      id: 3,
      icon: "/images/products/elder/safety.png",
      title: "Safety You Can Trust:",
      text: "Every member of our team is thoroughly vetted, including comprehensive background checks, so you can have complete peace of mind.",
    },
    {
      id: 4,
      icon: "/images/products/elder/community1.png",
      title: "Dedicated to Our Community:",
      text: "We're passionate about strengthening local care and are deeply committed to improving the quality of life for seniors in your neighborhood.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 min-[1260px]:py-20">
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        {/* HEADER */}
        <div className="grid min-[1260px]:grid-cols-2 gap-4 min-[1260px]:gap-10 min-[1260px]:mb-12 items-center justify-center">
          <div className="min-[1260px]:h-fit w-full flex items-center">
            <h2 className="text-3xl text-nowrap text-white md:text-[38px] font-semibold drop-shadow-2xl font-karla min-[1260px]:pl-10">
              Why Choose <br />
              <span className="">Elder Connect app?</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6 min-[1260px]:gap-4">
            <p className="text-md min-[1260px]:text-xl text-white leading-[25px] font-lora">
              More than just an app, Elder Connect is your all-in-one companion,
              delivering safety, connection, and real-time support for your
              senior loved one, and complete peace of mind for you.
            </p>
            <a href="https://apps.apple.com/gb/app/elderconnect/id6720757966">
              <button className="cursor-pointer self-start mb-6 font-karla bg-white text-main-dark font-semibold px-6 py-2 rounded-md shadow-md hover:scale-101 hover:shadow-[0_0_5px_rgba(255,255,255,0.6)] duration-200 transition-all">
                Download Now
              </button>
            </a>
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 min-[1260px]:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative rounded-3xl p-[1.6px] bg-gradient-to-br from-[#98F9FF] via-main-light/40 to-[#EABFFF]"
            >
              <div className="bg-black font-lora border border-purple-400/40 rounded-3xl px-7 pt-8 pb-5 text-left backdrop-blur-xl h-full w-full">
                <div className="bg-white size-18 rounded-xl flex items-center justify-center mb-4">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="size-10"
                  />
                </div>
                <h4 className="text-lg font-semibold text-[#E38DF0] font-karla mb-2 min-[1260px]:max-w-[180px] leading-[22px]">
                  {feature.title}
                </h4>
                <p className="text-sm text-white/80 min-[1260px]:leading-[18px]">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

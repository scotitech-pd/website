"use client";

export default function ElderConnectSection() {
  const features = [
    {
      icon: "/images/products/elder/connected.png",
      title: "Stay safely connected",
      text: "With easy-to-use video calls, private messaging, and photo sharing.",
    },
    {
      icon: "/images/products/elder/manage.png",
      title: "Manage daily wellness",
      text: "With timely, gentle reminders for medications, appointments, and important tasks.",
    },
    {
      icon: "/images/products/elder/maintain.png",
      title: "Maintain independence",
      text: "With tools that offer assistance without being intrusive.",
    },
    {
      icon: "/images/products/elder/community.png",
      title: "Community Engagement",
      text: "Easily find local events and volunteering options to build community and reduce isolation.",
    },
  ];

  return (
    <>
      {/* -------------------- DESKTOP VERSION (UNCHANGED ABOVE 1200PX) -------------------- */}
      <section
        className="relative overflow-hidden text-white py-16 bg-cover bg-center min-[1260px]:block hidden"
        style={{
          backgroundImage: "url('/images/products/elder/bg2img.png')",
        }}
      >
        <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 grid md:grid-cols-[55%_40%] items-center">
          {/* LEFT SECTION */}
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-[38px] font-semibold mb-6 text-main-dark drop-shadow-2xl font-karla">
              What is ElderConnect+ app?
            </h2>
            <p className="text-gray-900 lg:text-lg text-md mb-8 lg:mb-0 font-lora leading-[22px] ">
              Discover the comprehensive support you deserve with{" "}
              <span className="font-semibold text-purple-700">ElderConnect+</span>.
              We offer a wide range of services tailored to your needs, including
              assistance with daily tasks, meaningful companionship, routine
              health check-ins, vital mental health support, and much more. With
              the ElderConnect+ app, it&apos;s easier than ever to stay connected
              to your community and stay fully supported.
            </p>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col gap-8 relative">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center pr-2 h-[90px] bg-white rounded-2xl shadow-[0_0_15px_rgba(251,226,255,0.9)] relative z-10"
              >
                {/* Icon bubble */}
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-lg bg-[#FBE2FF] flex items-start justify-center w-[172px] px-7 py-2 group transition-all hover:scale-103 duration-200">
                  <h3 className="text-black/90 font-semibold font-karla text-base md:text-lg w-fit leading-[21px] mt-2.5">
                    {feature.title}
                  </h3>
                  <div className="absolute -top-1.5 -translate-y-1/2 bg-white rounded-full size-10 flex items-center justify-center shadow-[0_0_10px_rgba(140,82,255,0.8)] group-hover:shadow-[0_0_12px_rgba(140,82,255,0.9)]">
                    <img src={feature.icon} alt={feature.title} className="size-6" />
                  </div>
                </div>

                {/* Text content */}
                <div className="ml-25">
                  <p className="text-gray-900 text-sm md:text-base leading-snug font-lora max-w-[400px]">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- MOBILE/TABLET VERSION (BELOW 1200PX) -------------------- */}
   {/* -------------------- MOBILE/TABLET VERSION (BELOW 1200PX) -------------------- */}
<section
  className="relative overflow-hidden text-white py-12 bg-cover bg-center block min-[1260px]:hidden"
  style={{
    backgroundImage: "url('/images/products/elder/bg2img.png')",
  }}
>
  <div className="relative z-10 w-full flex flex-col items-center justify-center text-center gap-10">
    {/* TOP CONTENT */}
    <div className="w-full px-4 sm:px-6 md:px-8 flex flex-col items-center">
      <h2 className="text-3xl md:text-[34px] font-semibold mb-6 text-main-dark drop-shadow-2xl font-karla max-w-[90%]">
        What is Elder Connect app?
      </h2>
      <p className="text-gray-900 text-base md:text-lg font-lora leading-[22px] max-w-[90%] md:max-w-[750px]">
        Discover the comprehensive support you deserve with{" "}
        <span className="font-semibold text-purple-700">ElderConnect</span>. We offer a
        wide range of services tailored to your needs, including assistance with daily
        tasks, meaningful companionship, routine health check-ins, vital mental health
        support, and much more. With the ElderConnect app, it&apos;s easier than ever to
        stay connected to your community and stay fully supported.
      </p>
    </div>

    {/* CARDS SECTION */}
    <div className="w-full flex flex-col items-center justify-center gap-10 mt-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-[#FBE2FF] relative rounded-2xl w-[95%] sm:w-[85%] md:w-[80%] py-6 px-6 shadow-[0_0_15px_rgba(251,226,255,0.8)] flex flex-col items-center gap-3 transition-all hover:scale-[1.02] duration-200"
        >
          {/* Icon */}
          <div className="bg-white absolute -top-5  rounded-full size-12 flex items-center justify-center shadow-[0_0_10px_rgba(140,82,255,0.8)] mb-2">
            <img src={feature.icon} alt={feature.title} className="size-6" />
          </div>

          {/* Title */}
          <h3 className="text-black/90 pt-5 font-semibold font-karla text-base md:text-lg leading-[21px]">
            {feature.title}
          </h3>

          {/* Text inside pink box */}
          <p className="text-gray-800 text-sm md:text-base font-lora leading-snug w-[90%] md:w-[80%]">
            {feature.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  );
}

"use client";

import Image from "next/image";

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
    <section
      className="relative overflow-hidden text-white py-22 bg-cover bg-center "
      style={{
        backgroundImage: "url('/images/products/elder/bg2img.png')", // replace with your image
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 min-[1300px]:!px-0 grid md:grid-cols-[55%_40%] items-center">
        {/* LEFT SECTION */}
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-[38px] font-semibold mb-6 text-main-dark drop-shadow-2xl font-karla">
            What is Elder Connect app?
          </h2>
          <p className="text-gray-900 text-xl leading-[26px] ">
            Discover the comprehensive support you deserve with{" "}
            <span className="font-semibold text-purple-700">ElderConnect</span>.
            We offer a wide range of services tailored to your needs, including
            assistance with daily tasks, meaningful companionship, routine
            health check-ins, vital mental health support, and much more. With
            the ElderConnect app, it&apos;s easier than ever to stay connected
            to your community and stay fully supported.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-8 relative">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-center pr-2  h-[90px] bg-white rounded-2xl shadow-[0_0_15px_rgba(251,226,255,0.9)] relative z-10"
            >
              {/* Icon bubble */}
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-lg bg-[#FBE2FF] flex items-start justify-center w-[172px] px-7 py-2 group transition-all hover:scale-103 duration-200">
                <h3 className="text-black/90 font-semibold font-karla text-base md:text-lg w-fit leading-[21px] mt-2.5">
                  {feature.title}
                </h3>

                <div className="absolute -top-1.5 -translate-y-1/2 bg-white rounded-full size-10 flex items-center justify-center shadow-[0_0_10px_rgba(140,82,255,0.8)] group-hover:shadow-[0_0_12px_rgba(140,82,255,0.9)]" >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="size-6"
                  />
                </div>
              </div>  

              {/* Text content */}
              <div className="ml-25 ">
                <p className="text-gray-900 text-sm md:text-base leading-snug font-lora max-w-[400px]">
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

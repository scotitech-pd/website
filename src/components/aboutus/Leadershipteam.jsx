"use client";
import { MapPin } from "lucide-react";

function LeadershipTeam1() {
  const team = [
    {
      name: "Prachi Dwivedi",
      title: "Marketing & Content Manager",
      location: "London, UK",
      description:
        "Prachi is a strategic Marketing & Content Manager with over nine years of experience. She excels at crafting compelling narratives and data-driven campaigns that build brand presence and engage audiences.",
      img: "/images/aboutus/prachi.jfif",
    },
    {
      name: "Hitesh Dubey",
      title: "Head of DevOps & Infrastructure",
      location: "London, UK",
      description:
        "Hitesh architects the scalable and secure systems that power our platform. With over nine years of leadership, he ensures our technology backbone is robust, automated, and ready for future growth.",
      img: "/images/aboutus/hitesh.jfif",
    },
    {
      name: "Anurag Parmar",
      title: "Client Engagement & Product Strategy Lead",
      location: "London, UK",
      description:
        "Anurag brings over eight years of experience translating client needs into innovative and effective product strategies. She excels at building lasting relationships and ensuring our solutions solve real-world challenges for our partners.",
      img: "/images/aboutus/anurag.jfif",
    },
    {
      name: "Daniel Chapman",
      title: "Director and Co-founder",
      location: "London, UK",
      description:
        "Anjil is the Co-founder and Director at ScotiTech, where he steers the company's strategic vision and innovation. His leadership is fundamental to our mission of delivering cutting-edge solutions and exceptional client value.",
      img: "/images/aboutus/daniel-avatar.png",
    },
  ];

  return (
    <div className="  px-4 lg:px-0  min-w-[100%]  ">
      <section
        className="relative lg:h-[75vh]  2xl:h-[60vh] bg-center bg-cover  bg-no-repeat"
        style={{
          backgroundImage: "url('/images/aboutus/lead-bg.png')",
        }}
      >
        {/* overlay for contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-8xl mx-auto z-10 text-center pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0">
            <div className="text-left font-karla px-4 lg:px-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[35px] xxl:text-[80px] mb-2 text-white lg:pl-20">
                Leadership Team
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl xl:text-[20px] xxl:text-[60px]  text-gray-200 font-lora lg:pl-20 mt-2">
                The Experience Behind Our{" "}
                <span className="text-yellow-400 font-semibold">Success</span>
              </p>
            </div>
            <div className="px-4 2xl:px-0 lg:px-0">
              <p className="text-gray-200  xxl-pr-0  lg:pr-20 mx-auto lg:text-[17px] xl:text-[18px] xxl:text-[40px] text-left font-lora">
                Meet the visionary leaders driving{" "}
                <span className="text-purple-300 font-semibold">ScotiTech</span>{" "}
                innovation and growth at the forefront of the industry.
              </p>
            </div>
          </div>
        </div>

        {/* Team Cards - Desktop */}
        <div className="hidden lg:grid absolute  max-w-8xl mx-auto -bottom-[200px] xl:-bottom-[200px] left-0 right-0 z-10 lg:grid-cols-4 gap-6 xl:gap-[50px] w-full px-4 lg:px-[50px]">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white/95 shadow-[0_0_15px_3px_rgba(94,11,123,0.8)] rounded-full overflow-hidden text-center px-6 py-8 flex flex-col items-center backdrop-blur-sm transition-transform duration-300 hover:scale-105 border border-[#e9d5ff]"
            >
              {/* Image */}
              <div className="w-32 h-32 xl:w-[140px] xl:h-[140px] rounded-full overflow-hidden border-2 border-purple-200 mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <h3 className="text-lg xl:text-[22px] font-karla font-bold text-black mb-1">
                {member.name}
              </h3>
              <p className="text-[#059388] font-medium font-karla text-sm xl:text-[15px] mb-2 leading-tight">
                {member.title}
              </p>

              <div className="flex items-center justify-center gap-2 text-gray-500 mb-3">
                <MapPin size={16} />
                <span className="text-sm font-lora">{member.location}</span>
              </div>

              <p className="text-black text-xs xl:text-[13px] font-lora leading-snug mb-4">
                {member.description}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center items-center space-x-4 mt-auto">
                {/* LinkedIn */}
                <a
                  href="#"
                  className="group relative text-black rounded-full bg-white hover:bg-[#5E0B7B] transition w-10 h-10 flex items-center justify-center shadow-sm"
                >
                  <img
                    src="/images/aboutus/linkedin.png"
                    alt="linkedin"
                    className="w-5 h-5 transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src="/images/aboutus/linkedin-w.png"
                    alt="linkedin-hover"
                    className="w-5 h-5 absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                </a>

                {/* X (Twitter) */}
                <a
                  href="#"
                  className="group relative text-black rounded-full bg-white hover:bg-[#5E0B7B] transition w-10 h-10 flex items-center justify-center shadow-sm"
                >
                  <img
                    src="/images/aboutus/x.png"
                    alt="x"
                    className="w-5 h-5 transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src="/images/aboutus/x-white.png"
                    alt="x-hover"
                    className="w-5 h-5 absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Team Cards - Mobile (Rectangular with square photo) */}
        <div className="grid grid-cols-1 gap-4 lg:hidden mt-8 px-4 pb-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden flex-col justify-center  flex items-center transition-all duration-300 hover:shadow-xl border border-[#e9d5ff] p-4"
            >
              {/* Square Image on left */}
              <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden mr-4 border-2 text-center border-purple-200">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content on right */}
              <div className="flex-1 text-left">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 font-karla text-center">
                  {member.name}
                </h3>
                <p className="text-[#059388]  text-center font-medium text-xs sm:text-sm mb-2 font-karla leading-tight">
                  {member.title}
                </p>

                <div className="flex text-center justify-center items-center gap-1.5 text-gray-500 mb-2">
                  <MapPin size={14} />
                  <span className="text-xs font-lora text-center">
                    {member.location}
                  </span>
                </div>

                <p className="text-black text-xs text-center leading-relaxed font-lora mb-3">
                  {member.description}
                </p>

                {/* Social Icons */}
                <div className="flex gap-3 justify-center">
                  <a
                    href="#"
                    className="group relative text-black rounded-full bg-white hover:bg-[#5E0B7B] transition w-8 h-8 flex items-center justify-center shadow-sm border border-gray-200"
                  >
                    <img
                      src="/images/aboutus/linkedin.png"
                      alt="linkedin"
                      className="w-4 h-4 transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <img
                      src="/images/aboutus/linkedin-w.png"
                      alt="linkedin-hover"
                      className="w-4 h-4 absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    />
                  </a>

                  <a
                    href="#"
                    className="group relative text-black rounded-full bg-white hover:bg-[#5E0B7B] transition w-8 h-8 flex items-center justify-center shadow-sm border border-gray-200"
                  >
                    <img
                      src="/images/aboutus/x.png"
                      alt="x"
                      className="w-4 h-4 transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <img
                      src="/images/aboutus/x-white.png"
                      alt="x-hover"
                      className="w-4 h-4 absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spacer for absolute positioned cards on desktop */}
      <div className="hidden lg:block h-[220px] xl:h-[200px]"></div>
    </div>
  );
}

export default function LeadershipTeam() {
  const team = [
    {
      name: "Prachi Dwivedi",
      title: "Marketing & Content Manager",
      location: "London, UK",
      description:
        "Prachi is a strategic Marketing & Content Manager with over nine years of experience. She excels at crafting compelling narratives and data-driven campaigns that build brand presence and engage audiences.",
      img: "/images/aboutus/prachi.jfif",
    },
    {
      name: "Hitesh Dubey",
      title: "Head of DevOps & Infrastructure",
      location: "London, UK",
      description:
        "Hitesh architects the scalable and secure systems that power our platform. With over nine years of leadership, he ensures our technology backbone is robust, automated, and ready for future growth.",
      img: "/images/aboutus/hitesh.jfif",
    },
    {
      name: "Anurag Parmar",
      title: "Client Engagement & Product Strategy Lead",
      location: "London, UK",
      description:
        "Anurag brings over eight years of experience translating client needs into innovative and effective product strategies. She excels at building lasting relationships and ensuring our solutions solve real-world challenges for our partners.",
      img: "/images/aboutus/anurag.jfif",
    },
    {
      name: "Daniel Chapman",
      title: "Director and Co-founder",
      location: "London, UK",
      description:
        "Anjil is the Co-founder and Director at ScotiTech, where he steers the company's strategic vision and innovation. His leadership is fundamental to our mission of delivering cutting-edge solutions and exceptional client value.",
      img: "/images/aboutus/daniel-avatar.png",
    },
  ];

  return (
    <section className="relative h-full py-8 px-8 min-[1360px]:px-0">
      <div className="absolute w-full bg-gradient-to-r to-[#39327C] inset-0 from-[#34919B]  h-[80%]">

      </div>
      <div className="relative max-w-7xl mx-auto z-10 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 my-12">
          <div className="text-left font-karla ">
            <h2 className="text-3xl md:text-4xl mb-2 text-white">
              Leadership Team
            </h2>
            <p className="text-2xl  text-gray-200 font-lora mt-5">
              The Experience Behind Our{" "}
              <span className="text-[#FFF600] ">Success</span>
            </p>
          </div>
          <div className="">
            <p className="text-white text-xl text-left font-lora">
              Meet the visionary leaders driving{" "}
              <span className="text-[#EABFFF] font-semibold">ScotiTech</span>{" "}
              innovation and growth at the forefront of the industry.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:grid grid-cols-4  gap-10 max-w-7xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white/95 shadow-[0_0_10px_3px_rgba(94,11,123,0.5)] rounded-full overflow-hidden text-center px-6 py-8 flex flex-col items-center backdrop-blur-sm transition-transform duration-300 border border-[#e9d5ff]"
          >
            {/* Image */}
            <div className="w-32 h-32 xl:w-[140px] xl:h-[140px] rounded-full overflow-hidden border-2 border-purple-200 mb-4">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <h3 className="text-lg xl:text-[22px] font-karla font-bold text-black mb-1">
              {member.name}
            </h3>
            <p className="text-[#059388] font-medium font-karla text-sm xl:text-[15px] mb-2 leading-tight">
              {member.title}
            </p>

            <div className="flex items-center justify-center gap-2 text-gray-500 mb-3">
              <MapPin size={16} />
              <span className="text-sm font-lora">{member.location}</span>
            </div>

            <p className="text-black text-xs xl:text-[13px] font-lora leading-snug mb-4">
              {member.description}
            </p>

            {/* Social Icons */}
            <div className="flex justify-center items-center space-x-4 mt-auto">
              {/* LinkedIn */}
              <a
                href="#"
                className="group relative text-black rounded-full bg-white hover:bg-[#5E0B7B] transition w-10 h-10 flex items-center justify-center shadow-sm"
              >
                <img
                  src="/images/aboutus/linkedin.png"
                  alt="linkedin"
                  className="w-5 h-5 transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                  src="/images/aboutus/linkedin-w.png"
                  alt="linkedin-hover"
                  className="w-5 h-5 absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </a>

              {/* X (Twitter) */}
              <a
                href="#"
                className="group relative text-black rounded-full bg-white hover:bg-[#5E0B7B] transition w-10 h-10 flex items-center justify-center shadow-sm"
              >
                <img
                  src="/images/aboutus/x.png"
                  alt="x"
                  className="w-5 h-5 transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                  src="/images/aboutus/x-white.png"
                  alt="x-hover"
                  className="w-5 h-5 absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}

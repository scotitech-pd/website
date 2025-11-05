"use client";
import { MapPin } from "lucide-react";

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
        "Daniel is the Co-founder and Director at ScotiTech, where he steers the company's strategic vision and innovation. His leadership is fundamental to our mission of delivering cutting-edge solutions and exceptional client value.",
      img: "/images/aboutus/daniel-avatar.png",
    },
  ];

  return (
    <section className="relative   py-8 px-8 min-[1360px]:px-0">
      <div className="absolute w-full  bg-gradient-to-r to-[#39327C] inset-0 from-[#34919B] h-full"></div>

      <div className="relative max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 z-10 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 lg:my-12">
          <div className="text-left font-karla">
            <h2 className="text-[30px] md:text-4xl font-bold mb-0 lg:mb-2 text-white">
              Leadership Team
            </h2>
            <p className="text-[15px] text-gray-200 font-lora lg:mt-5">
              The Experience Behind Our{" "}
              <span className="text-[#FFF600]">Success</span>
            </p>
          </div>
          <div>
            <p className="text-white text-[13px] lg:text-xl text-left font-lora">
              Meet the visionary leaders driving{" "}
              <span className="text-[#EABFFF] font-semibold">ScotiTech</span>{" "}
              innovation and growth at the forefront of the industry.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-4 gap-10 max-w-7xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white/95 shadow-[0_0_10px_3px_rgba(94,11,123,0.5)] rounded-full overflow-hidden text-center px-6 py-8 flex flex-col items-center backdrop-blur-sm transition-transform duration-300 border border-[#e9d5ff]"
          >
            <div className="w-32 h-32 xl:w-[140px] xl:h-[140px] rounded-full overflow-hidden border-2 border-purple-200 mb-4">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

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

            <div className="flex justify-center items-center space-x-4 mt-auto">
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

      {/* Mobile Layout */}
      <div className="grid grid-cols-1 gap-8 lg:hidden max-w-md mx-auto mt-12">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white/95 shadow-[0_0_8px_2px_rgba(94,11,123,0.3)] rounded-2xl overflow-hidden text-center px-6 py-8 flex flex-col items-center backdrop-blur-sm border border-[#e9d5ff]"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-purple-200 mb-4">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-lg font-karla font-bold text-black mb-1">
              {member.name}
            </h3>
            <p className="text-[#059388] font-medium font-karla text-sm mb-2">
              {member.title}
            </p>

            <div className="flex items-center justify-center gap-2 text-gray-500 mb-3">
              <MapPin size={14} />
              <span className="text-sm font-lora">{member.location}</span>
            </div>

            <p className="text-black text-xs font-lora leading-snug mb-4">
              {member.description}
            </p>

            <div className="flex justify-center items-center space-x-4 mt-auto">
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

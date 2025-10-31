"use client";
import { MapPin, Linkedin, X } from "lucide-react";

export default function LeadershipTeam() {
  const team = [
    {
      name: "Prachi Dwivedi",
      title: "Marketing & Manager of Content",
      location: "London, UK",
      description:
        "Prachi is a strategic Marketing & Content Manager with over nine years of experience. She excels at crafting compelling narratives  campaigns that build brand presence and engage audiences.",
      img: "/images/aboutus/prachi.jfif",
    },
    {
      name: "Hitesh Dubey",
      title: "Head of DevOps & Infrastructure",
      location: "London, UK",
      description:
        "Hitesh architects the scalable and secure systems that power our platform. With over nine years of leadership, he ensures our technology backbone is robust, automated, and future-ready.",
      img: "/images/aboutus/hitesh.jfif",
    },
    {
      name: "Anurag Parmar",
      title: "Client Engagement & Product Strategy Lead",
      location: "London, UK",
      description:
        "Anurag brings over eight years of experience translating client needs into innovative and effective product strategies. He excels at building lasting relationships and delivering real-world solutions.",
      img: "/images/aboutus/anurag.jfif",
    },
    {
      name: "Daniel Chapman",
      title: "Director and Co-founder at ScotiTech",
      location: "London, UK",
      description:
        "Daniel is the Co-founder and Director at ScotiTech, steering the company’s strategic vision and innovation. His leadership ensures cutting-edge solutions and exceptional client value.",
      img: "/images/aboutus/daniel-avatar.png",
    },
  ];

  return (
    <section
      className="relative lg:h-[75vh]  bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/images/aboutus/lead-bg.png')",
      }}
    >
      {/* overlay for contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-8xl mx-auto text-center pt-8 min-[1670px]:w-7xl min-[1670px]:mx-auto ">
        <div className="grid grid-cols-2">
          <div className="text-left font-karla  px-10  ">
            {" "}
            <h2 className="text-3xl lg:pl-20 md:text-4xl lg:text-4xl mb-2 text-white 2xl:text-[100px]">
              Leadership Team 
            </h2>
            <p className="text-lg md:text-xl lg:pl-20 text-gray-200 font-lora lg:text-xl mt-2">
              The Experience Behind Our{" "}
              <span className="text-yellow-400 font-semibold">Success</span>
            </p>
          </div>
          <div>
            <p className="text-gray-200 mt-4 max-w-2xl lg:pr-20 mx-auto lg:text-[20px] text-left font-lora">
              Meet the visionary leaders driving{" "}
              <span className="text-purple-300 font-semibold">ScotiTech</span>{" "}
              innovation and growth at the forefront of the industry.
            </p>
          </div>
        </div>
      </div>

      {/* Team Cards */}
      <div className="absolute   -bottom-[180px]  min-w-[100%] px-[50px] left-0 z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-[50px] w-full  ">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white/95 shadow-[0_0_15px_3px_rgba(94,11,123,0.8)] 
  rounded-full  overflow-hidden text-center p-9 h-[500px] 
  flex flex-col items-center backdrop-blur-sm transition-transform duration-300 hover:scale-105 border border-[#e9d5ff]"
          >
            {/* Image */}
            <div
              className="w-32 h-32 lg:w-[120px] lg:h-[120px]  
 rounded-full overflow-hidden border-1 border-e-[#9638E5]  mb-4"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <h3 className="text-lg lg:text-[25px] font-karla font-bold text-black">
              {member.name}
            </h3>
            <p className="text-[#059388] font-medium font-karla text-sm lg:text-[15px]">
              {member.title}
            </p>

            <div className="flex items-center justify-center gap-2 text-gray-500 mt-2 mb-3">
              <MapPin size={18} />
              <span className="text-sm font-lora lg:text-[18px]">
                {member.location}
              </span>
            </div>

            <p className="text-black text-sm font-lora lg:text-[12px] leading-snug">
              {member.description}
            </p>

            {/* Social Icons */}
            <div className="flex justify-center items-center mt-6 mb-0 space-x-4">
              {/* LinkedIn */}
              <a
                href="#"
                className="group text-black rounded-full bg-white hover:bg-[#5E0B7B] transition w-12 h-12 flex items-center justify-center"
              >
                <img
                  src="/images/aboutus/linkedin.png"
                  alt="linkedin"
                  className="w-6 h-6 transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                  src="/images/aboutus/linkedin-w.png"
                  alt="linkedin-hover"
                  className="w-6 h-6 absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </a>

              {/* X (Twitter) */}
              <a
                href="#"
                className="group text-black rounded-full bg-white hover:bg-[#5E0B7B] transition w-12 h-12 flex items-center justify-center"
              >
                <img
                  src="/images/aboutus/x.png"
                  alt="x"
                  className="w-6 h-6 transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                  src="/images/aboutus/x-white.png"
                  alt="x-hover"
                  className="w-6 h-6 absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";
import React from "react";
import { Linkedin } from "lucide-react";

const founders = [
  {
    name: "Pradeep Dahiya",
    title: "Co-Founder & CEO",
    image: "/images/home/pradeep.jpg",
    color: "from-[#6D28D9] to-[#14B8A6]",
    desc: [
      "A technology entrepreneur, software engineer, and strategic leader driving ScotiTech’s innovation roadmap.",
      "With 10+ years of experience in AI integration and app development, Pradeep focuses on human-centered, ethical technology.",
      "A graduate of the University of Strathclyde, he also serves as a Digital Trustee with Third Sector Lab (Scotland).",
    ],
  },
  {
    name: "Daniel Chapman",
    title: "Co-Founder & Chief Strategy Officer",
    image: "/images/aboutus/daniel-avatar.png",
    color: "from-[#0EA5E9] to-[#6366F1]",
    desc: [
      "Daniel leads ScotiTech’s global strategy and partnerships with a focus on innovation and growth.",
      "Having built ventures across Europe, he bridges creative thinking with scalable business execution.",
      "His leadership shapes ScotiTech’s global presence, driving purpose-led digital transformation.",
    ],
  },
];

const FoundersSpotlight = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#f8fafc] via-white to-[#f9fafc] overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/aboutus/pattern.svg')] opacity-5 pointer-events-none"></div>

      <div className="max-w-8xl mx-auto px-6 md:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-karla font-bold text-gray-900">
            Meet Our Founders
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-lora mt-3 max-w-2xl mx-auto">
            Leaders with vision, passion, and purpose — the force behind ScotiTech’s
            journey toward innovation and ethical growth.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {founders.map((f, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm hover:scale-[1.02] transition-all duration-700 border border-gray-200/30 group`}
            >
              {/* Gradient border layer */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${f.color} opacity-30 group-hover:opacity-50 blur-2xl transition-all`}
              ></div>

              {/* Image */}
              <div className="relative h-[350px] overflow-hidden">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-0 right-0 px-6 text-white">
                  <h3 className="text-2xl font-karla font-bold">{f.name}</h3>
                  <p className="text-gray-200 text-sm font-lora">{f.title}</p>
                </div>
              </div>

              {/* Text */}
              <div className="relative z-10 p-6 sm:p-8 bg-white">
                {f.desc.map((p, i) => (
                  <p
                    key={i}
                    className="text-gray-700 font-lora leading-relaxed text-[15px] mb-3"
                  >
                    {p}
                  </p>
                ))}

                <div className="pt-3 flex justify-start">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    className={`inline-flex items-center gap-2 text-sm font-karla font-semibold bg-gradient-to-r ${f.color} text-white px-4 py-2 rounded-full hover:scale-105 transition`}
                  >
                    <Linkedin className="w-4 h-4" /> Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSpotlight;

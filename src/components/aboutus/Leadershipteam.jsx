"use client";
import { Linkedin, MapPin } from "lucide-react";

export default function LeadershipTeam() {
  const team = [
    {
      name: "Prachi Dwivedi",
      title: "Marketing & Content Manager",
      location: "Glasgow, UK",
      description:
        "Leads content strategy and product communication, translating technical direction into clear buyer-facing narratives.",
      img: "/images/aboutus/prachi.jpeg",
      linkedin: "https://www.linkedin.com/in/prachi-dwivedi-5724a51b6/",
    },
    {
      name: "Hitesh Dubey",
      title: "Head of DevOps & Infrastructure",
      location: "Gurgaon, India",
      description:
        "Owns infrastructure reliability, security posture, and automation standards that support stable product delivery at scale.",
      img: "/images/aboutus/hitesh.png",
      linkedin: "https://www.linkedin.com/in/hitesh-dubey-4349731b/",
    },
    {
      name: "Anurag Parmar",
      title: "Client Engagement & Product Strategy Lead",
      location: "Gurgaon, India",
      description:
        "Connects client requirements to roadmap decisions, keeping product direction aligned with practical deployment realities.",
      img: "/images/aboutus/anurag.jfif",
      linkedin: "https://www.linkedin.com/in/anuragparmar/",
    },
    {
      name: "Daniel Chapman",
      title: "Director and Co-founder",
      location: "Leeds, UK",
      description:
        "Supports long-term strategy, commercial direction, and partner positioning across ScotiTech’s core product portfolio.",
      img: "/images/aboutus/daniel.jpeg",
      linkedin: "https://www.linkedin.com/in/daniel-chapman-755098327/",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] py-14 md:py-20">

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="max-w-4xl mb-10">
          <p className="mb-3 font-karla text-sm font-semibold uppercase tracking-[0.18em] text-[#4F46E5]/80">
            Leadership Team
          </p>
          <h2 className="text-3xl md:text-5xl font-karla font-semibold text-[#0F172A] mb-4">
            The team behind product direction and delivery
          </h2>
          <p className="font-lora text-lg leading-8 text-slate-700">
            ScotiTech combines product strategy, engineering, infrastructure,
            and client-focused execution across the UK and India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {team.map((member) => (
            <article
              key={member.name}
              className="rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="mb-4 overflow-hidden rounded-2xl border border-slate-200">
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-[220px] w-full object-cover"
                />
              </div>

              <h3 className="text-xl font-karla font-semibold text-slate-900 mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-karla font-semibold text-[#15676E] mb-2">
                {member.title}
              </p>

              <div className="flex items-center gap-2 text-slate-500 mb-3">
                <MapPin size={15} />
                <span className="text-sm font-lora">{member.location}</span>
              </div>

              <p className="text-[14px] font-lora leading-6 text-slate-700 mb-4">
                {member.description}
              </p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-karla font-semibold text-slate-800 hover:border-[#15676E] hover:text-[#15676E] transition-colors"
              >
                <Linkedin size={15} />
                View LinkedIn
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

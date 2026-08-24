"use client";
import Image from "next/image";
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
      name: "Pardeep Kumar",
      title: "Founder & CEO, Lead Developer",
      location: "Motherwell, Scotland",
      description:
        "Architects and builds AppDeploy and AXOS, and sets ScotiTech's product vision, commercial strategy, and global direction.",
      img: "/images/home/pradeep.jpg",
      linkedin: "https://www.linkedin.com/in/pradeepkumar2411/",
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
    <section className="relative overflow-hidden bg-[#f5f3ee] py-14 md:py-20">

      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="max-w-4xl mb-10">
          <p className="mb-3 font-karla text-sm font-semibold uppercase tracking-[0.18em] text-[#b8430b]/80">
            Leadership Team
          </p>
          <h2 className="text-3xl md:text-5xl font-karla font-semibold text-[#0F172A] mb-4">
            The team behind product direction and delivery
          </h2>
          <p className="font-lora text-lg leading-8 text-slate-700">
            ScotiTech combines worldwide product strategy, engineering,
            infrastructure, AI, and client-focused digital delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {team.map((member) => (
            <article
              key={member.name}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 transition-shadow duration-300 hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-slate-200">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="64px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-karla font-bold text-slate-900 leading-tight">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-karla font-semibold text-brand-strong">
                    {member.title}
                  </p>
                </div>
              </div>

              <div className="mb-3 flex items-center gap-1.5 text-[11.5px] font-karla uppercase tracking-[0.1em] text-slate-400">
                <MapPin size={11} />
                <span>{member.location}</span>
              </div>

              <p className="flex-1 text-[14px] font-lora leading-6 text-slate-600 mb-4">
                {member.description}
              </p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 text-xs font-karla font-semibold uppercase tracking-[0.14em] text-slate-700 hover:text-brand-strong transition-colors"
              >
                <Linkedin size={13} />
                LinkedIn
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/* The people working alongside the founder (who has his own section). */
const team = [
  {
    name: "Daniel Chapman",
    title: "Co-founder and Director",
    location: "Huddersfield, England",
    description:
      "Supports long-term strategy, commercial direction and partner positioning across ScotiTech's products.",
    img: "/images/company/team-daniel-chapman.webp",
    linkedin: "https://www.linkedin.com/in/daniel-chapman-755098327/",
  },
  {
    name: "Prachi Dwivedi",
    title: "Marketing and Content Manager",
    location: "Glasgow, UK",
    description:
      "Leads content and product communication, turning technical direction into clear writing for buyers.",
    img: "/images/company/team-prachi-dwivedi.webp",
    linkedin: "https://www.linkedin.com/in/prachi-dwivedi-5724a51b6/",
  },
  {
    name: "Anurag Parmar",
    title: "Client Engagement and Product Strategy Lead",
    location: "Gurgaon, India",
    description:
      "Connects client requirements to roadmap decisions, keeping product direction close to real deployments.",
    img: "/images/company/team-anurag-parmar.webp",
    linkedin: "https://www.linkedin.com/in/anuragparmar/",
  },
];

export default function LeadershipTeam() {
  return (
    <Section id="team" surface="muted" spacing="lg">
      <Reveal className="max-w-2xl">
        <p className="t-eyebrow">The team</p>
        <h2 className="t-h1 mt-3">Working alongside Pradeep.</h2>
      </Reveal>

      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {team.map((member) => (
          <Reveal as="li" key={member.name} className="flex">
            <article className="flex w-full flex-col rounded-xl border border-hairline bg-surface p-6">
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.img}
                  alt={member.name}
                  width={240}
                  height={240}
                  loading="lazy"
                  decoding="async"
                  className="size-16 shrink-0 rounded-full object-cover ring-1 ring-hairline"
                />
                <div className="min-w-0">
                  <h3 className="text-[17px] font-semibold leading-tight text-strong">{member.name}</h3>
                  <p className="mt-1 text-[13px] font-medium text-brand-strong">{member.title}</p>
                </div>
              </div>
              <p className="mt-5 flex-1 text-[15px] leading-6 text-body">{member.description}</p>
              <div className="mt-5 flex items-center justify-between text-[13px]">
                <span className="text-muted">{member.location}</span>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-brand-strong hover:text-brand"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  LinkedIn
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

import Link from "next/link";
import { ArrowRight, CalendarCheck2, Mail, MessageSquareText } from "lucide-react";
import { meetingLinks } from "@/lib/scheduling";

const contactRoutes = [
  {
    title: "Product access",
    description: "Discuss AppDeploy, AXOS, or private product evaluation.",
    icon: MessageSquareText,
  },
  {
    title: "Commercial fit",
    description: "Review buyer fit, rollout size, and next-step timing.",
    icon: CalendarCheck2,
  },
  {
    title: "General contact",
    description: "Reach the team for partnerships, media, or company queries.",
    icon: Mail,
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F7F5] py-14 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(15,118,110,0.13),transparent_30%),radial-gradient(circle_at_86%_12%,rgba(37,99,235,0.10),transparent_26%)]" />
      <div className="relative z-10 mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
        <div className="grid items-center gap-10 lg:grid-cols-[52%_48%]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              Contact ScotiTech
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-[#111827] sm:text-5xl lg:text-6xl">
              Talk to our product team.
            </h1>
            <p className="mt-6 max-w-3xl font-lora text-lg leading-8 text-slate-700">
              We can help with product access, rollout fit, commercial
              evaluation, partnerships, or company enquiries.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={meetingLinks.appdeploy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#100E0C] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(16,14,12,0.18)] transition hover:bg-[#1C1714]"
              >
                Book AppDeploy session
                <ArrowRight className="size-4" />
              </a>
              <a
                href={meetingLinks.axos}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cfd7cf] bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
              >
                Book AXOS session
                <ArrowRight className="size-4" />
              </a>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-[#cfd7cf] bg-white/80 px-7 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
              >
                Review products first
              </Link>
            </div>
          </div>

          <div className="rounded-[1.2rem] border border-[#d9ded7] bg-white p-4 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <div className="grid gap-3">
              {contactRoutes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1rem] border border-[#d9ded7] bg-[#f8fafc] p-5"
                >
                  <item.icon className="mb-4 size-5 text-[#0F766E]" />
                  <h2 className="text-xl font-semibold text-slate-950">
                    {item.title}
                  </h2>
                  <p className="mt-2 font-lora leading-7 text-slate-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

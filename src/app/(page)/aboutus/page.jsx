import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  Globe2,
  Linkedin,
  PackageCheck,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import ClientLogoStrip from "@/components/aboutus/ClientLogoStrip";
import GlobalD from "@/components/aboutus/GlobalD";
import LeadershipTeam from "@/components/aboutus/Leadershipteam";
import ProductPlatformStory from "@/components/aboutus/ProductPlatformStory";

export const metadata = {
  title: "About ScotiTech | Product Company from Scotland",
  description:
    "ScotiTech Solutions is a UK-based product company building AppDeploy, AXOS, and ClarityPath for controlled app rollout, private workspaces, and structured decision support.",
};

const companyFacts = [
  {
    title: "Product company, not an agency",
    description:
      "Roadmaps, release decisions, and delivery work are organised around owned products with clear roles in the portfolio.",
    icon: Building2,
  },
  {
    title: "Focused portfolio",
    description:
      "AppDeploy, AXOS, and ClarityPath each serve a distinct buyer, use case, and rollout path.",
    icon: PackageCheck,
  },
  {
    title: "UK-led delivery model",
    description:
      "Scotland-based leadership is supported by distributed engineering, infrastructure, and product communication capability.",
    icon: Globe2,
  },
];

const operatingModel = [
  {
    title: "Own the product problem",
    description:
      "Each product is shaped around a specific operating gap, not a broad list of generic services.",
    icon: Workflow,
  },
  {
    title: "Design for controlled access",
    description:
      "Private rollout, roles, onboarding, deployment choices, and policy-aligned AI are treated as product requirements from the start.",
    icon: ShieldCheck,
  },
  {
    title: "Build for adoption",
    description:
      "Product pages, guided access, support paths, and review loops are designed to help teams move from interest to use.",
    icon: CheckCircle2,
  },
];

const founders = [
  {
    name: "Pradeep Dahiya",
    title: "Co-Founder & CEO",
    image: "/images/home/pradeep.jpg",
    linkedin: "https://www.linkedin.com/in/pradeepkumar2411/",
    description:
      "Leads ScotiTech’s product strategy across AppDeploy and AXOS, with hands-on delivery experience across mobile systems, internal platforms, and AI-assisted software.",
  },
  {
    name: "Daniel Chapman",
    title: "Co-Founder & Chief Strategy Officer",
    image: "/images/aboutus/daniel-avatar.jpeg",
    linkedin: "https://www.linkedin.com/in/daniel-chapman-755098327/",
    description:
      "Shapes company positioning, long-term strategy, and product-market clarity with a practical background across Computing, IT, Linux, and digital systems.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#F7F7F5] text-[#111827]">
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(15,118,110,0.13),transparent_30%),radial-gradient(circle_at_86%_10%,rgba(37,99,235,0.10),transparent_26%)]" />
        <div className="relative z-10 mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="grid items-end gap-10 xl:grid-cols-[58%_42%]">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#8C7A5E]">
                About ScotiTech
              </p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                A UK-based product company building software for controlled digital work.
              </h1>
              <p className="mt-6 max-w-3xl font-lora text-lg leading-8 text-slate-700 md:text-xl">
                ScotiTech Solutions Limited builds and operates a focused
                product portfolio: AppDeploy for private app rollout, AXOS for
                workspace operations.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#100E0C] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(16,14,12,0.18)] transition hover:bg-[#1C1714]"
                >
                  View products
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cfd7cf] bg-white/80 px-7 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
                >
                  <CalendarCheck2 className="size-4" />
                  Book a session
                </Link>
                <Link
                  href="/media"
                  className="inline-flex items-center justify-center rounded-full border border-[#cfd7cf] bg-white/80 px-7 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
                >
                  See recognition
                </Link>
              </div>
            </div>

            <div className="rounded-[1.2rem] border border-[#d9ded7] bg-white p-4 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
              <div className="grid gap-3">
                {companyFacts.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1rem] border border-[#d9ded7] bg-[#f8fafc] p-5"
                  >
                    <item.icon className="mb-4 size-5 text-[#8C7A5E]" />
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

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="grid gap-10 lg:grid-cols-[40%_60%] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#8C7A5E]">
                Operating Model
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-[#111827] md:text-5xl">
                Built around products, not one-off project work.
              </h2>
              <p className="mt-5 font-lora text-lg leading-8 text-slate-700">
                The company is structured to turn practical operating problems
                into repeatable product experiences with clearer access,
                governance, and delivery paths, including private-cloud,
                self-hosted, and on-premises approaches where stronger control
                is required.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {operatingModel.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.15rem] border border-[#d9ded7] bg-[#f8fafc] p-6 shadow-[0_16px_36px_rgba(15,23,42,0.05)]"
                >
                  <div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-white text-[#8C7A5E]">
                    <item.icon className="size-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-lora leading-7 text-slate-700">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClientLogoStrip />

      <section className="bg-[#ECE8DA] py-14 md:py-20">
        <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#8C7A5E]">
              Founders
            </p>
            <h2 className="text-3xl font-semibold text-[#111827] md:text-5xl">
              Founder-led product strategy.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {founders.map((founder) => (
              <article
                key={founder.name}
                className="overflow-hidden rounded-[1.2rem] border border-[#d9ded7] bg-white shadow-[0_20px_55px_rgba(15,23,42,0.07)]"
              >
                <div className="grid md:grid-cols-[38%_62%]">
                  <div className="relative min-h-[280px] bg-slate-100">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      sizes="(min-width: 768px) 28vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-2xl font-semibold text-slate-950">
                      {founder.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-[#8C7A5E]">
                      {founder.title}
                    </p>
                    <p className="mt-5 font-lora leading-8 text-slate-700">
                      {founder.description}
                    </p>
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-[#8C7A5E] hover:text-[#8C7A5E]"
                    >
                      <Linkedin className="size-4" />
                      View LinkedIn
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProductPlatformStory />
      <LeadershipTeam />
      <GlobalD />
    </main>
  );
}

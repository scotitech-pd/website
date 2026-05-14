import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";

const productProof = [
  {
    name: "AppDeploy",
    label: "Private app rollout",
    href: "/products/appdeploy",
    image: "/images/products/appdeploy/dashboard.png",
    imageAlt: "AppDeploy admin dashboard showing branded workspace, reports, quick actions, and platform status",
    summary:
      "A branded admin workspace for entitlement-led private iOS releases, reviewing installs, managing access, and keeping rollout activity visible.",
    points: ["Branded portal", "Entitlement access", "Release workflow"],
    tone: "blue",
  },
  {
    name: "AXOS",
    label: "Private workspace",
    href: "/products/axos",
    image: "/images/products/axos/dashboard.jpg",
    imageAlt: "AXOS private workspace dashboard with mail, calendar, tasks, activity, and schedule modules",
    summary:
      "A private workspace for communication, files, calendar, tasks, and governance-first AI assistance with hosted, private-cloud, self-hosted, and on-premises paths.",
    points: ["Workspace modules", "Governance-first AI", "Deployment choice"],
    tone: "teal",
  },
  {
    name: "ClarityPath",
    label: "Guided decision support",
    href: "/products/claritypath",
    image: "/images/products/claritypath/explore.png",
    imageAlt: "ClarityPath mobile app showing structured planning categories",
    summary:
      "A focused mobile product for private review sessions, structured planning, and guided next-step recommendations.",
    points: ["Decision sessions", "Private access", "Roadmap guidance"],
    tone: "gold",
  },
];

const toneStyles = {
  blue: {
    badge: "bg-blue-50 text-blue-700",
    line: "bg-blue-600",
    icon: "text-blue-600",
  },
  teal: {
    badge: "bg-emerald-50 text-emerald-700",
    line: "bg-teal-600",
    icon: "text-teal-600",
  },
  gold: {
    badge: "bg-[#F9F6E7] text-[#8A7A21]",
    line: "bg-[#B7A84D]",
    icon: "text-[#8A7A21]",
  },
};

export default function InsideProducts() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(15,118,110,0.08),transparent_26%),radial-gradient(circle_at_82%_16%,rgba(37,99,235,0.08),transparent_24%)]" />

      <div className="relative z-10 mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
        <Reveal className="mb-10 grid gap-6 lg:grid-cols-[48%_52%] lg:items-end" variant="soft">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#8C7A5E]">
              Inside the Products
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-[#111827] sm:text-5xl">
              A closer look at the product portfolio.
            </h2>
          </div>
          <p className="max-w-2xl font-lora text-lg leading-8 text-slate-700 lg:ml-auto">
            AppDeploy, AXOS, and ClarityPath are shown through real product
            interfaces: branded app delivery, private workspace operations, and
            guided planning support.
          </p>
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-3">
          {productProof.map((product, index) => {
            const tone = toneStyles[product.tone];

            return (
              <Reveal
                as="article"
                key={product.name}
                delay={index * 90}
                className="group overflow-hidden rounded-[1.25rem] border border-[#d9ded7] bg-[#fbfaf6] shadow-[0_22px_60px_rgba(15,23,42,0.07)] transition hover:-translate-y-1"
              >
                <div className={`h-1.5 ${tone.line}`} />
                <div className="p-5">
                  <div className="overflow-hidden rounded-[1rem] border border-slate-200 bg-[#100E0C] shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                      <span className="size-2.5 rounded-full bg-[#FF6467]" />
                      <span className="size-2.5 rounded-full bg-[#F7C948]" />
                      <span className="size-2.5 rounded-full bg-[#00C9A7]" />
                      <span className="ml-auto text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                        {product.name}
                      </span>
                    </div>
                    <div
                      className={
                        product.name === "AXOS"
                          ? "relative aspect-[1.85/1] bg-slate-950"
                          : "relative aspect-[1.45/1] bg-slate-950"
                      }
                    >
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        sizes="(min-width: 1280px) 33vw, 100vw"
                        className={`${
                          product.name === "ClarityPath"
                            ? "object-contain p-4"
                            : product.name === "AXOS"
                            ? "object-cover object-[center_42%]"
                            : "object-cover"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-7">
                  <span
                    className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] ${tone.badge}`}
                  >
                    {product.label}
                  </span>
                  <h3 className="mb-3 text-2xl font-semibold text-slate-950">
                    {product.name}
                  </h3>
                  <p className="mb-5 font-lora leading-7 text-slate-700">
                    {product.summary}
                  </p>
                  <div className="mb-6 grid gap-2">
                    {product.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                      >
                        <CheckCircle2 className={`size-4 ${tone.icon}`} />
                        {point}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950"
                  >
                    View {product.name}
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

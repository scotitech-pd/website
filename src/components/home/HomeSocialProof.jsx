"use client";

import Link from "next/link";

const clients = [
  {
    name: "Aviskaar Enterprises Ltd",
    image: "/images/home/aviskaar-logo.jpg",
    href: "https://aviskaar.co.uk",
  },
  {
    name: "Growthcart",
    image: "/images/aboutus/growthcart-logo.png",
    href: null,
  },
  {
    name: "CRMNext",
    image: null,
    href: null,
  },
];

// Double for seamless marquee
const marqueeItems = [...clients, ...clients, ...clients];

const stats = [
  { value: "Apple Custom Apps", label: "distribution channel" },
  { value: "£79", label: "/ month from" },
  { value: "Scotland StartUp Awards 2026", label: "finalist" },
  { value: "GDPR-aligned", label: "data posture" },
];

function LogoItem({ client }) {
  const img = client.image ? (
    <img
      src={client.image}
      alt={client.name}
      className="h-10 w-auto max-w-[130px] object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
    />
  ) : (
    <span className="rounded-full border border-[#e4e8e3] bg-[#f5f3ee] px-4 py-2 font-karla text-sm font-semibold text-[#111827]">
      {client.name}
    </span>
  );

  if (client.href) {
    return (
      <a
        href={client.href}
        target="_blank"
        rel="noreferrer"
        aria-label={client.name}
        className="flex shrink-0 items-center"
      >
        {img}
      </a>
    );
  }
  return <span className="flex shrink-0 items-center">{img}</span>;
}

export default function HomeSocialProof() {
  return (
    <section className="relative z-0 overflow-hidden border-y border-[#e8e3d8] bg-[#faf9f6] py-12 md:py-14">
      {/* Soft top-edge gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8C7A5E]/20 to-transparent" />

      <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
        {/* Label */}
        <p className="mb-8 text-center font-karla text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          Early clients &amp; delivery partners
        </p>

        {/* Marquee */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="logo-marquee flex w-max items-center gap-14">
            {marqueeItems.map((client, i) => (
              <LogoItem key={`${client.name}-${i}`} client={client} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto my-10 h-px max-w-xs bg-gradient-to-r from-transparent via-[#d9ded7] to-transparent" />

        {/* Stats row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex items-baseline gap-2 rounded-full border border-[#e4e8e3] bg-[#f5f3ee] px-4 py-2"
            >
              <span className="font-karla text-sm font-bold text-[#111827]">
                {stat.value}
              </span>
              <span className="font-karla text-[11px] font-medium uppercase tracking-[0.1em] text-slate-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .logo-marquee {
          animation: home-logos 22s linear infinite;
        }
        @keyframes home-logos {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-33.333% - 1.167rem)); }
        }
      `}</style>
    </section>
  );
}

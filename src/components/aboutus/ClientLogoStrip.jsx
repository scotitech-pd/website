"use client";

import Image from "next/image";

const logos = [
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
    name: "No94oo",
    image: "/images/aboutus/no94oo-logo.png",
    href: null,
  },
];

const marqueeLogos = [...logos, ...logos];

const LogoTile = ({ logo }) => {
  const content = (
    <div className="flex min-w-[220px] items-center justify-center rounded-[1.5rem] border border-slate-200 bg-white px-8 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
      {logo.image ? (
        <Image
          src={logo.image}
          alt={logo.name}
          width={160}
          height={64}
          className="h-16 w-auto max-w-[160px] object-contain saturate-0 transition duration-300 hover:saturate-100"
        />
      ) : (
        <div className="flex h-16 w-[160px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 text-center font-karla text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
          {logo.name}
        </div>
      )}
    </div>
  );

  if (logo.href) {
    return (
      <a
        href={logo.href}
        target="_blank"
        rel="noreferrer"
        className="block"
        aria-label={logo.name}
      >
        {content}
      </a>
    );
  }

  return content;
};

export default function ClientLogoStrip() {
  return (
    <section className="relative overflow-hidden bg-[#f5f3ee] py-14 md:py-18">

      <div className="relative z-10 mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="mb-3 font-karla text-sm font-semibold uppercase tracking-[0.2em] text-[#b8430b]/80">
            Trusted by early clients and partners
          </p>
          <h2 className="mb-4 font-karla text-3xl font-semibold text-[#0F172A] md:text-5xl">
            Working relationships that put our products to real use
          </h2>
          <p className="font-lora text-lg leading-8 text-slate-700">
            We partner closely with the organisations adopting AppDeploy and
            AXOS — building, refining, and supporting products against real
            operational needs.
          </p>
        </div>

        <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track flex w-max gap-5 group-hover:[animation-play-state:paused]">
            {marqueeLogos.map((logo, index) => (
              <LogoTile key={`${logo.name}-${index}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .marquee-track {
          animation: client-logo-marquee 28s linear infinite;
        }

        @keyframes client-logo-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 0.625rem));
          }
        }
      `}</style>
    </section>
  );
}

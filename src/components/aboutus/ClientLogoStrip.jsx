"use client";

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

// Triple for seamless infinite loop
const marqueeLogos = [...logos, ...logos, ...logos];

const LogoTile = ({ logo }) => {
  const content = (
    <div className="group/tile flex min-w-[180px] items-center justify-center px-10 py-5">
      {logo.image ? (
        <img
          src={logo.image}
          alt={logo.name}
          className="h-14 w-auto max-w-[140px] object-contain opacity-50 grayscale transition-all duration-300 group-hover/tile:opacity-100 group-hover/tile:grayscale-0"
        />
      ) : (
        <span className="font-karla text-sm font-semibold uppercase tracking-[0.16em] text-slate-400 transition-colors duration-300 group-hover/tile:text-slate-700">
          {logo.name}
        </span>
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

  return <div>{content}</div>;
};

export default function ClientLogoStrip() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      {/* Subtle edge rules */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9ded7] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d9ded7] to-transparent" />

      <div className="relative z-10 mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-karla text-xs font-semibold uppercase tracking-[0.22em] text-[#0F766E]">
            Early Relationships
          </p>
          <h2 className="mb-4 font-karla text-3xl font-semibold text-[#0F172A] md:text-4xl">
            Client and partner signals from real delivery work
          </h2>
          <p className="font-lora text-base leading-7 text-slate-600">
            Early relationships connected to ScotiTech's product development,
            implementation, and delivery activity.
          </p>
        </div>

        <div className="mx-auto mb-10 h-px max-w-24 bg-[#0F766E]/30" />

        <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee-track flex w-max items-center group-hover:[animation-play-state:paused]">
            {marqueeLogos.map((logo, index) => (
              <LogoTile key={`${logo.name}-${index}`} logo={logo} />
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {logos.map((l) => (
            <span key={l.name} className="size-1.5 rounded-full bg-[#d9ded7]" />
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: client-logo-marquee 30s linear infinite;
        }
        @keyframes client-logo-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-33.333%)); }
        }
      `}</style>
    </section>
  );
}

const cards = [
  {
    img: "/images/solution/guide.png",
    title: "Guide",
    desc: "Secure iOS App Deployment in 2025",
  },
  {
    img: "/images/solution/whitepapper.png",
    title: "Whitepaper",
    desc: "The Hidden Cost of SaaS Sprawl",
  },
  {
    img: "/images/solution/appdeploy.png",
    title: "App Deploy",
    desc: "Instant Internal App Installs",
  },
];

export default function KnowledgeSection() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-24 px-6"
      style={{
        backgroundImage: "url('/images/solution/learnbg.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-left">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-medium leading-tight font-karla">
          Learn <span className="text-[#E38DF0]">More.</span> Grow{" "}
          <span className="text-[#E38DF0]">Smarter.</span>
        </h2>
        <p className="mt-5 text-xl text-white font-lora max-w-2xl">
          We don’t just build products — we share knowledge. Explore our guides,
          case studies, and research.
        </p>

        {/* Subscribe Button */}
        <div className="mt-6 flex ">
          <button className="relative bg-white text-black px-5 py-2 rounded-l-2xl  rounded-r-2xl group hover:bg-main-light duration-300 hover:text-white shadow-lg hover:shadow-xl transition pl-14 font-lora text-sm">
            <div className="absolute flex items-center justify-center bg-white size-12 rounded-full left-0 top-1/2 -translate-y-1/2 shadow-[0_0_7px_rgba(100,113,113,0.9)] group-hover:shadow-[0_0_15px_rgba(150,56,229,0.9)] duration-300">
              <img src="/images/solution/bell.png" alt="" className="size-8" />
            </div>
            Subscribe to Insights
          </button>
        </div>

        {/* Cards Grid */}
       <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-20 font-lora">
  {cards.map((card, index) => (
    <div
      key={index}
      /* outer wrapper: the visible gradient border */
      className="relative rounded-2xl p-[1.5px] bg-gradient-to-bl from-[#14FBFD]/70 via-white/70 to-main-light/70 hover:scale-[1.01]  transition-transform duration-300 shadow-lg"
    >
      {/* keep corners clipped so gradient follows rounded shape */}
      <div className="overflow-hidden rounded-2xl">
        {/* inner card: actual content with backdrop blur & semi transparent background */}
        <div className="group relative bg-[#36454F]/80 p-8 text-left ">
          <img src={card.img} alt="" className="w-16 h-16 object-contain" />

          <h3 className="text-2xl font-medium font-karla text-[#14FBFD] my-3">
            {card.title}
          </h3>

          <p className="text-white mb-8 leading-relaxed font-lora">{card.desc}</p>

          <a
            href={card.link ?? "#"}
            className="absolute font-karla bottom-6 right-6 bg-white text-gray-900 text-sm font-semibold px-4 py-1 rounded-full shadow-md hover:bg-main-light hover:shadow-[0_0_10px_rgba(150,56,229,1)] duration-300 hover:text-white transition"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}

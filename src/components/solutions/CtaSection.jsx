import { Download, Users, MessageSquare, Coffee } from "lucide-react";

export default function CtaSection() {
  const buttons = [
    {
      title: "Download AppDeploy",
      bg: "#1C8BEA",
      icon: "/images/solution/download.png",
      position: "absolute right-3 translate-x-1/2 top-1/2 -translate-y-1/2",
      className: "hover:shadow-[0_0_10px_rgba(28,139,234,0.9)]",
    },
    {
      title: "Join Opsly Waitlist",
      bg: "#2AC07B",
      icon: "/images/solution/joine.png",
      position: "absolute right-3 translate-x-1/2 top-1/2 -translate-y-1/2",
      className: "hover:shadow-[0_0_10px_rgba(42,192,123,0.9)]",
    },
    {
      title: "Try Caption Studio Free",
      bg: "#F48530",
      icon: "/images/solution/caption.png",
      position: "absolute right-3 translate-x-1/2 top-1/2 -translate-y-1/2",
      className: "hover:shadow-[0_0_10px_rgba(244,133,48,0.9)]",
    },
    {
      title: "Download ClarityPath App",
      bg: "#8C52FF", // fixed color hex (you had "#8C52" incomplete)
      icon: "/images/solution/check.png",
      position: "absolute right-3 translate-x-1/2 top-1/2 -translate-y-1/2",
      className: "hover:shadow-[0_0_10px_rgba(140,82,255,0.9)]",
    },
  ];
  return (
    <section
      className="relative bg-cover bg-center text-white py-10"
      style={{
        backgroundImage: "url('/images/solution/cta.png')",
      }}
    >
      {/* Animated gradient lines background */}

      {/* CTA Container */}
      <div className="relative z-10 max-w-7xl mx-auto text-left py-10">
        <div className="bg-gradient-to-r from-[#10385A] to-[#452463] rounded-[2rem] p-12 relative">
          <span
            className={`absolute inset-0 rounded-[inherit] bg-gradient-to-r from-[#10385A] to-[#452463] blur-xl opacity-60 -z-10`}
          ></span>
          <h2 className="text-4xl md:text-5xl font-semibold mb-3 font-karla tracking-wide">
            Let’s Simplify the Future, Together.
          </h2>
          <p className="text-xl text-white/90 mb-12 font-lora ">
            Choose the right Scottitech product for your needs and start today.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-wrap justify-around gap-8 font-lora ">
            {buttons.map((btn, i) => (
              <button
                key={i}
                style={{ backgroundColor: btn.bg }}
                className={`relative flex text-md items-center justify-between font-karla text-white font-medium px-11 py-5 rounded-4xl shadow-lg transition-transform duration-300 ${btn.className}`}
              >
                {btn.title}
                <div className="rounded-full absolute right-3 translate-x-1/2 top-1/2 -translate-y-1/2 bg-white flex justify-center items-center size-11">
                  <img src={btn.icon} alt="" className="size-6" />
                </div>
              </button>
            ))}
            {/* AppDeploy */}
          </div>
        </div>
      </div>
    </section>
  );
}

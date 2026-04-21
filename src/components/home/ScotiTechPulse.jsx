"use client";

export default function ScotiTechPulse() {
  return (
    <section
      className="relative bg-[#f8fafc] py-12 md:py-16 overflow-hidden"
      style={{
        backgroundImage: "url('/images/home/pulsebg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full">
        <div className="text-left mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-karla font-semibold text-gray-900">
            The ScotiTech Pulse
          </h2>
          <p className="mt-3 text-lg md:text-2xl text-black font-lora">
            A recent milestone from the ScotiTech journey.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-[1.8rem] overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.10)] border border-slate-200">
          <img
            src="/images/home/startup-awards-2026-shortlist.jpg"
            alt="ScotiTech shortlisted for the Scotland StartUp Awards 2026"
            className="w-full h-[320px] md:h-[420px] object-cover"
          />

          <div className="p-6 sm:p-8 md:p-10">
            <span className="bg-[#BCB96A] px-4 py-1 rounded-full text-[11px] sm:text-[13px] font-karla font-semibold text-white inline-block mb-4">
              SHORTLIST
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 font-karla text-slate-900">
              ScotiTech shortlisted for the Scotland StartUp Awards 2026
            </h3>

            <p className="text-slate-700 text-base md:text-lg font-lora leading-8 max-w-4xl">
              ScotiTech Solutions has been shortlisted in the Digital StartUp
              of the Year category. The recognition reflects the company’s
              product-led progress across AppDeploy, AXOS, and the wider
              portfolio as ScotiTech continues building practical software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

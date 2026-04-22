"use client";

export default function ScotiTechPulse() {
  return (
    <section
      className="relative bg-[#f7f7f5] py-12 md:py-16 overflow-hidden"
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

        <div className="max-w-6xl mx-auto bg-white rounded-[1.8rem] overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.10)] border border-slate-200 p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-[38%_62%] gap-6 md:gap-8 items-start">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
              <img
                src="/images/home/startup-awards-2026-shortlist.jpg"
                alt="ScotiTech shortlisted for the Scotland StartUp Awards 2026"
                className="w-full h-[220px] sm:h-[260px] md:h-[240px] object-contain p-2"
              />
            </div>

            <div>
              <span className="bg-[#BCB96A] px-4 py-1 rounded-full text-[11px] sm:text-[13px] font-karla font-semibold text-white inline-block mb-4 w-fit">
                SHORTLIST
              </span>

              <h3 className="text-2xl sm:text-3xl md:text-[34px] font-semibold font-karla text-slate-900 leading-tight">
                ScotiTech shortlisted for the Scotland StartUp Awards 2026
              </h3>

              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-[11px] sm:text-xs font-karla font-semibold tracking-[0.14em] uppercase text-slate-500 mb-1">
                  Event
                </p>
                <p className="text-sm sm:text-base font-karla font-semibold text-slate-900">
                  UK StartUp Awards Regional Final: Scotland
                </p>
                <p className="text-sm font-lora text-slate-600 mt-1">
                  Tue 23 Jun 2026 • 6:00 PM - 9:30 PM
                </p>
              </div>
            </div>
          </div>

          <p className="text-slate-700 text-base md:text-lg font-lora leading-8 mt-6 md:mt-7">
            ScotiTech Solutions has been shortlisted in the Digital StartUp of
            the Year category. The recognition reflects the company’s
            product-led progress across AppDeploy, AXOS, and the wider
            portfolio as ScotiTech continues building practical software.
          </p>
        </div>
      </div>
    </section>
  );
}

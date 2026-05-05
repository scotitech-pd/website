import Reveal from "@/components/Reveal";

export default function ScotiTechPulse() {
  return (
    <section className="bg-[#F7F7F5] py-14 md:py-[4.5rem]">
      <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
        <Reveal className="rounded-[1.15rem] border border-[#d9ded7] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] sm:p-8 md:p-10" variant="soft">
          <div className="grid items-start gap-7 md:grid-cols-[36%_64%]">
            <div className="rounded-2xl border border-[#d9ded7] bg-slate-50 p-2">
              <img
                src="/images/home/startup-awards-2026-shortlist.jpg"
                alt="ScotiTech shortlisted for UK StartUp Awards 2026"
                className="h-[220px] w-full object-contain"
              />
            </div>

            <div>
              <span className="mb-4 inline-flex rounded-full bg-[#B7A84D] px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                Recognition
              </span>
              <h2 className="text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl md:text-4xl">
                Shortlisted for UK StartUp Awards 2026
              </h2>
              <p className="mt-4 font-lora leading-8 text-slate-700">
                Recognition for ScotiTech’s product-led work from Scotland,
                with AppDeploy and AXOS central to the product portfolio.
              </p>
              <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-sm font-semibold text-slate-800">
                  UK StartUp Awards Regional Final (Scotland)
                </p>
                <p className="mt-1 font-lora text-sm text-slate-600">
                  Tue 23 Jun 2026 • 6:00 PM - 9:30 PM
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

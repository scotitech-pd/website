"use client";

export default function HowToGetElderConnect() {
  const steps = [
    {
      id: 1,
      image: "/images/products/elder/familygroup.png",
      title: "Create Your Secure Family Group:",
      text: "One family member acts as the administrator and sends secure invitations to the senior and other family members.",
    },
    {
      id: 2,
      image: "/images/products/elder/experience.png",
      title: "Customize Your Experience:",
      text: "Set up personalized reminders, add appointments to the calendar, and start connecting!",
    },
  ];

  return (
    <>
      {/* -------------------- ORIGINAL SECTION (1150PX AND ABOVE) -------------------- */}
      <section className="bg-white py-16 lg:py-20 hidden min-[1150px]:block">
        <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 grid md:grid-cols-2 gap-12 items-center font-lora">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl md:text-[38px] font-semibold mb-3 text-main-dark drop-shadow-2xl font-karla">
              How to Get <br /> Elder Connect App?
            </h2>
            <p className="text-[#4E4E4E] text-md lg:text-xl mb-2 lg:mb-5">
              Getting started with Elder Connect is simple and takes just a few
              minutes.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="bg-white rounded-2xl shadow-[0_0_10px_rgba(78,78,78,0.3)] hover:shadow-[0_0_10px_rgba(150,56,229,0.6)] p-7 transition hover:scale-103 duration-200"
                >
                  <div className="relative z-0">
                    <div className="absolute w-full h-full rounded-xl bg-[#BEBEBE] -z-10 inset-1.5"></div>
                    <img
                      src={step.image}
                      alt={step.title}
                      className="rounded-xl mb-4 w-full object-cover z-0"
                    />
                  </div>
                  <h4 className="font-semibold text-xl text-black mb-2 font-karla">
                    {step.title}
                  </h4>
                  <p className="text-[#3B3B3B] leading-[22px] font-lora">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-center relative">
            <img
              src="/images/products/elder/connectapp.png"
              alt="Elder Connect App Icon"
              className="mx-auto"
            />
            <div className="absolute bottom-5 translate-y-1/2 left-1/2 -translate-x-1/2 w-[70%] flex justify-between">
              <img
                src="/images/products/opsly/button2.png"
                alt=""
                className="w-[43%] h-auto cursor-pointer"
              />
              <img
                src="/images/products/opsly/button1.png"
                alt=""
                className="w-[43%] h-auto cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- MOBILE/TABLET SECTION (BELOW 1150PX) -------------------- */}
      <section className="bg-white py-14 block min-[1150px]:hidden">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-10 font-lora">
          {/* HEADER */}
          <div>
            <h2 className="text-3xl font-semibold text-main-dark font-karla mb-4">
              How to Get Elder Connect App?
            </h2>
            <p className="text-[#4E4E4E] text-base font-lora leading-[22px] max-w-2xl mx-auto mb-8">
              Getting started with Elder Connect is simple and takes just a few
              minutes.
            </p>
          </div>

          {/* STEPS */}
          <div className="flex flex-col gap-6 w-full max-w-[650px]">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-white rounded-2xl shadow-[0_0_10px_rgba(78,78,78,0.3)] hover:shadow-[0_0_10px_rgba(150,56,229,0.6)] p-5 transition hover:scale-[1.02] duration-200 text-left"
              >
                <div className="relative z-0 mb-4">
                  <div className="absolute w-full h-full rounded-xl bg-[#BEBEBE] -z-10 inset-1.5"></div>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-xl w-full object-cover z-0"
                  />
                </div>
                <h4 className="font-semibold text-lg text-black mb-1 font-karla">
                  {step.title}
                </h4>
                <p className="text-[#3B3B3B] text-sm leading-[22px] font-lora">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          {/* APP IMAGE + BUTTONS (moved below for mobile) */}
          <div className="flex flex-col items-center relative lg:mt-12 w-full">
            <img
              src="/images/products/elder/connectapp.png"
              alt="Elder Connect App"
              className="mx-auto w-[80%] sm:w-[65%] md:w-[55%]"
            />
            <div className="flex justify-center gap-5 mt-6 w-full sm:w-[60%]">
              <img
                src="/images/products/opsly/button2.png"
                alt=""
                className="w-[45%] h-auto cursor-pointer"
              />
              <img
                src="/images/products/opsly/button1.png"
                alt=""
                className="w-[45%] h-auto cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

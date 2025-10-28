export default function ComplianceSecurity() {
  const cards = [
    {
      title: "End-to-End Data Encryption:",
      description:
        "All data, both in transit and at rest, is secured with AES-256 encryption.",
    },
    {
      title: "SOC 2 Type II Certified:",
      description:
        "Opsly is built within a SOC 2 compliant infrastructure, meeting rigorous standards for security, availability, and confidentiality.",
    },
  ];

  const cards2 = [
    {
      title: "GDPR and CCPA Ready:",
      description:
        "Our platform is fully compliant with major international data privacy regulations.",
    },
    {
      title: "Scalable for Your Enterprise:",
      description:
        "Our platform is designed to grow with you, from startup to global enterprise.",
    },
  ];

  return (
    <section className="relative text-white py-24 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/images/products/opsly/bgcompliance.png')] bg-cover bg-center"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div>
          <div className="text-[42px] font-semibold relative w-fit  font-karla mb-5">
            Compliance & Security
            <p className="absolute text-[65px] font-medium text-nowrap opacity-10 top-1/2 -translate-1/2 left-1/2">
              Compliance & Security
            </p>
          </div>

          <h3 className="text-3xl mb-1.5 font-lora">
            Built on a Foundation of Trust
          </h3>
          <p className="text-lg max-w-lg font-lora leading-6">
            We are committed to the highest standards of data security and
            compliance to ensure your organization&apos;s information is always
            protected.
          </p>
        </div>

        {/* Right Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  md:h-[500px]">
          <div className="grid md:grid-rows-[40%_55%] gap-6">
            {cards.map((card, i) => (
              <div
                key={i}
                className={`rounded-3xl p-[1px] bg-gradient-to-r from-[#98F9FF]/70 via-white/70 to-main-light/70 text-white shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,255,255,0.25)]
                      transition-all duration-500 hover:scale-[1.02]`}
              >
                <div className="bg-gradient-to-br from-[#0B1220]/90 to-[#07101E]/90 p-6 h-full rounded-3xl">
                  <h4 className="text-[#98F9FF] font-medium text-[22px] mb-2">
                    {card.title}
                  </h4>
                  <p className="text-base leading-relaxed font-lora">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-rows-[55%_40%] gap-6">
            {cards2.map((card, i) => (
              <div
                key={i}
                className={`rounded-3xl p-[1px] bg-gradient-to-r from-[#98F9FF]/70 via-white/70 to-main-light/70 text-white shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,255,255,0.25)]
                      transition-all duration-500 hover:scale-[1.02]`}
              >
                <div className="bg-gradient-to-br from-[#0B1220]/90 to-[#07101E]/90 p-6 h-full rounded-3xl">
                  <h4 className="text-[#98F9FF] font-medium text-[22px] mb-2">
                    {card.title}
                  </h4>
                  <p className="text-base leading-relaxed font-lora">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

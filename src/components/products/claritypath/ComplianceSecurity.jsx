export default function ComplianceSecurity() {
  const cards = [
    {
      id: 1,
      img: "/images/products/claritypath/pic1.png",
      text: "Distributed securely through Apple’s ABM framework",
    },
    {
      id: 2,
      img: "/images/products/claritypath/pic2.png",
      text: "GDPR-compliant data handling.",
    },
    {
      id: 3,
      img: "/images/products/claritypath/pic3.png",
      text: "Available for volume licensing and enterprise use.",
    },
  ];

  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* Background Circle Accent */}
      <div className="absolute left-0 bottom-0 h-[90%] ">
        <img src="/images/products/claritypath/bgcom.png" alt="" />
      </div>

      {/* Title */}

      <div className="relative w-fit py-4 mb-12 mx-auto text-black">
        <p className="absolute text-[4.6rem]  font-semibold font-karla opacity-5 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-nowrap select-none">
          Compliance &amp; Security
        </p>
        <h2 className="text-[38px] font-bold font-karla">
          Compliance &amp; Security
        </h2>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 justify-center md:gap-10 px-6 max-w-6xl mx-auto">
        <div className="absolute h-[80%] bg-gradient-to-bl from-[#40708F] to-[#3C367D] w-[85vw] z-0 left-50 top-1/2 -translate-y-1/2"></div>
        {cards.map((card, index) => (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full md:w-80 transform z-10 hover:scale-[1.02] transition" key={index}>
            <div className="h-48 overflow-hidden">
              <img
                src={card.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-main-dark font-lora text-[17px] leading-[21px] font-medium">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

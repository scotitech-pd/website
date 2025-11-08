export default function ComplianceSecuritySection() {
  const items = [
    {
      text: "All data is fully encrypted and stored securely.",
    },
    {
      text: "We follow GDPR-compliant data handling principles.",
    },
    {
      text: "The platform is a private, invitation-only network to prevent unauthorized access.",
    },
  ];

  return (
    <section
      className="relative lg:py-20 py-16 text-white overflow-hidden bg-cover bg-center "
      style={{
        backgroundImage: "url('/images/products/elder/compliance.png')", // replace with your image
      }}
    >
      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        {/* Header */}
        <h2 className="text-3xl md:text-[40px] font-bold mb-4 font-karla">
          Compliance & Security
        </h2>
        <p className="lg:text-lg text-md md:text-2xl text-gray-200 mb-16 font-lora">
          Your family's privacy and security are our highest priority.
        </p>

        {/* Circle Cards */}
        <div className="grid lg:grid-cols-3 lg:gap-10 gap-6 justify-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative w-62 h-62 lg:w-72 lg:h-72 rounded-full flex items-center justify-center group"
            >
              {/* Border wrapper */}
              <div className="absolute inset-0 rounded-full p-[3px] transition-transform duration-900 ease-out group-hover:rotate-[360deg] bg-[conic-gradient(from_180deg,#641171_0deg,#E38DF0_360deg)]"></div>

              {/* Inner white circle */}
              <div className="absolute inset-[4px] rounded-full bg-white flex items-center justify-center text-center px-2 lg:px-6">
                <p className=" lg:text-[21px] leading-6 font-medium text-[#641171] font-karla">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
{
  /* <div className="grid md:grid-cols-3 gap-10 justify-center">
          {items.map((item, index) => (
            <div key={index} className="relative w-72 h-72 rounded-full flex items-center justify-center group">
              <div className="absolute inset-0 rounded-full p-[3px] bg-[conic-gradient(from_180deg,#641171_0deg,#E38DF0_360deg)] group-hover:animate-spin-slow"></div>

              <div className="absolute inset-[4px] rounded-full bg-white flex items-center justify-center text-center px-6">
                <p className="text-[21px] leading-6 font-medium text-[#641171] font-lora">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>> */
}

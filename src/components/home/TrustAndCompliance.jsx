
const TrustAndCompliance = () => {
  return (
    <section
      className="relative bg-white overflow-hidden text-black"
      style={{
        backgroundImage: "url('/images/home/trustbg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
        <img src="/images/home/tpurple.png" alt="bg" className="left-0 absolute w-auto h-[90%] bottom-0"/>
      
      {/* Main Content */}
      <div className="relative z-10 py-10 grid grid-cols-1 min-[1110px]:grid-cols-[58%_42%] gap-10 items-center max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full">
        {/* Text Content */}
        <div className="z-20 pt-10">
          <h2 className="text-[34px] min-[893px]:text-4xl md:text-5xl font-semibold font-karla text-main mb-2 sm:mb-4 leading-[34px] sm:leading-[42px]">
            Trust & Compliance <span className="text-black">- Expanded</span>
          </h2>
          <h3 className="text-xl md:text-2xl font-medium min-[1110px]:mb-4 font-lora">
            Our Commitment to Data Security
          </h3>
          <div className="max-w-xl aspect-[1.3] overflow-hidden w-fit mx-auto flex justify-center items-center h-fit">
            <img
              src="/images/home/trust.png" // Replace with your actual image path
              alt="Security and Trust"
              className="w-full h-full object-cover min-[1110px]:hidden flex ml-2"
            />
          </div>
          <p className="text-black leading-6 text-lg font-lora">
            At <span className="text-main-dark font-semibold">ScotiTech</span>,
            trust isn't a feature—it's the foundation of everything we build.
            From a startup in London to an enterprise in New York or a
            government agency in Asia, our solutions are engineered with
            privacy, security, and compliance hardwired at their core. By
            rigorously aligning with global regulations and industry standards,
            ScotiTech ensures businesses worldwide can adopt our technology with
            unshakeable confidence.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center relative z-20">
          <div className="max-w-xl aspect-[1.3] overflow-hidden">
            <img
              src="/images/home/trust.png" // Replace with your actual image path
              alt="Security and Trust"
              className="w-full h-full object-cover min-[1110px]:flex hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAndCompliance;


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
        <img src="/images/home/Tpurple.png" alt="bg" className="left-0 absolute w-auto h-[90%] bottom-0"/>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center max-w-7xl">
        {/* Text Content */}
        <div className="lg:w-3/4 z-20 my-20 lg:my-0">
          <h2 className="text-3xl md:text-5xl font-semibold   font-karla text-main mb-4">
            Trust & Compliance <span className="text-black">- Expanded</span>
          </h2>
          <h3 className="text-2xl font-medium mb-4 font-lora">
            Our Commitment to Data Security
          </h3>
          <p className="text-black/90 leading-6 text-lg font-lora">
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
        <div className="hidden lg:w-1/2 mt-10 lg:mt-0 lg:flex justify-center relative z-20">
          <div className="max-w-xl aspect-[1.3] overflow-hidden">
            <img
              src="/images/home/trust.png" // Replace with your actual image path
              alt="Security and Trust"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAndCompliance;

import React from "react";

const MissionVision = () => {
  return (
    <div>
      <section className="relative bg-white py-16 mt-[200px] px-6 lg:px-10 lg:w-[100%]">
        {/* Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 max-w-[85%] mx-auto">
          {/* Left Content */}
          <div className="space-y-5 text-center lg:text-left">
            <h2 className="text-3xl font-karla lg:text-[30px] font-semibold  text-black">
              Our Mission
            </h2>

            <h3 className="text-xl lg:text-[20px] font-lora  text-[#5E0B7B]">
              Empowering Your Business Through Technology.
            </h3>

            <p className="text-black text-[15px] leading-snug font-lora">
              Our mission is to empower businesses every day. We achieve this by
              designing and developing custom-built technology solutions that
              are inherently scalable and secure. Our focus is not just on
              delivering a product, but on creating a partnership that drives
              efficiency, fuels growth, and ensures a tangible return on your
              investment.
            </p>

            <p className="text-black text-[15px] leading-snug font-lora">
              To empower businesses with custom-built, scalable, and secure
              technology solutions that drive efficiency, growth, and a tangible
              return on investment.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Bubble Background */}

            {/* Main Image in Circle */}
            <div className="relative w-[280px] h-[280px] z-6 lg:w-[420px] lg:h-[420px] rounded-full  shadow-[0_0_25px_2px_rgba(94,11,123,0.3)]">
              <img
                src="/images/aboutus/teamphoto.png"
                alt="Team working"
                className="w-full h-full object-cover"
              />
              <img
                src="/images/aboutus/bubbles.png"
                alt="bubble shapes"
                className="absolute -top-[50px] -right-[100px] w-[280px] lg:w-[400px] -z-1 opacity-80 pointer-events-none"
              />
            </div>
          </div>
        </div>



        {/* vision */}




        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 max-w-[85%] mx-auto">
          {/* Left Content */}
             <div className="relative flex justify-center lg:justify-start">
            {/* Right Section */}

            {/* Main Image in Circle */}
            <div className="relative w-[280px] h-[280px] z-6 lg:w-[420px] lg:h-[420px] rounded-full  shadow-[0_0_25px_2px_rgba(94,11,123,0.3)]">
              <img
                src="/images/aboutus/teamphoto.png"
                alt="Team working"
                className="w-full h-full object-cover"
              />
              <img
                src="/images/aboutus/bubbles.png"
                alt="bubble shapes"
                className="absolute -top-10 -left-[150px] w-[280px] lg:w-[400px] -z-1 opacity-80 pointer-events-none"
              />
            </div>
          </div>
          <div className="space-y-5 text-center lg:text-left">
            <h2 className="text-3xl font-karla lg:text-[30px] font-semibold  text-black">
              Our Vision
            </h2>

            <h3 className="text-xl lg:text-[20px] font-lora  text-[#5E0B7B]">
              Beyond Innovation, We Build the Trust
            </h3>

            <p className="text-black text-[15px] leading-snug font-lora">
              Our vision is to create a future where our technology seamlessly enables the full potential of your people.
            </p>

            <p className="text-black text-[15px] leading-snug font-lora">
             To be the most trusted technology partner for forward-thinking companies, creating a future where technology seamlessly enables human potential.
            </p>
          </div>

       
        </div>
      </section>
    </div>
  );
};

export default MissionVision;

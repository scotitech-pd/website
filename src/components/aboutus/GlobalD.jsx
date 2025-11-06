import React from "react";

const GlobalD = () => {
  return (
    <section
      className="relative  bg-center bg-cover bg-no-repeat py-6 "
      style={{
        backgroundImage: "url('/images/aboutus/lead-bg.png')",
      }}
    >
      {" "}
      <div className="text-center px-4 sm:px-8 md:px-16 min-[1670px]:w-7xl min-[1670px]:mx-auto lg:px-[180px] flex justify-center items-center  mt-[4px] h-auto lg:h-[30vh] py-8 lg:py-0 overflow-hidden">
        <div className="relative">
          <h3 className="text-2xl relative  font-karla mb-5 lg:text-[35px] min-[1670px]:py-[20px] font-semibold text-white 2xl:text-[45px]">
            Global Delivery. Local Trust
            <div className="absolute hidden lg:block left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none z-0">
              <p className="text-5xl sm:text-6xl tracking-wider font-karla md:text-5xl lg:text-7xl font-bold text-gray-300/20 leading-none whitespace-nowrap">
                Global Delivery. Local Trust
              </p>
            </div>
          </h3>
          <p className="text-white font-lora lg:text-[15px] text-xs leading-5 min-[1670px]:py-[20px] min-[1670px]:text-[200px]">
            Scotitech operates with strategic leadership from London and a
            remote-first engineering network spanning multiple regions. This
            hybrid model allows us to blend British innovation, global
            collaboration, and technical agility — delivering exceptional
            products and enterprise solutions worldwide.
          </p>
          <div className="relative w-[250px] mx-auto mt-5 border-1 shadow-xl rounded-4xl min-[1670px]:mt-[20px]">
            <img src="/images/aboutus/globalbutton.png" alt="" />
            <p className="absolute top-2 left-1/2 -translate-x-1/2 font-semibold lg:text-[20px] text-black min-[1670px]:text-[25px]">
              Talk to Us
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalD;

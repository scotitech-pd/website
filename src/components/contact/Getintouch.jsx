import React from "react";
import Image from "next/image";

const GetInTouch = () => {
  const cardData = [
    {
      icon: "/images/contact/insights.png",
      text: "We turn insights into victories. Ready to achieve more.",
    },
    {
      icon: "/images/contact/data.png",
      text: "Data-driven. Success delivered. Build with us.",
    },
    {
      icon: "/images/contact/technology.png",
      text: "Expertise, Evolved. Technology simplified.",
    },
    {
      icon: "/images/contact/growth.png",
      text: "Contact us to see how our technology drives business growth.",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-[url('/images/contact/get_bg.png')] py-12 lg:py-20">
      <div>
        <img
          src="images/contact/get_b1.png"
          alt=""
          className="absolute left-0"
        />
        <img
          src="images/contact/get_b2.png"
          alt=""
          className="absolute right-0"
        />
      </div>

      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 xxl:grid-cols-[60%_40%] gap-8  lg:gap-14">
          {/* Left Side - Contact Info */}
          <div className="text-white  space-y-8">
            <div>
              <h1 className="text-4xl lg:text-4xl xxl:text-5xl font-karla font-bold mb-4 lg:mb-6">
                Get in Touch
              </h1>
              <p className="text-base lg:text-[16px] xxl:text-lg leading-relaxed max-w-2xl tracking-wider font-lora ">
                Ready to find reliable support and genuine companionship? We're
                here to answer your questions about the ElderConnect+ app and
                tailor services for you or your loved one. Let's start the
                conversation.
              </p>
            </div>

            {/* Contact Cards - Mobile Version (Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 lg:hidden">
              {/* Location */}
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                <div className="bg-indigo-800 p-3 rounded-full flex-shrink-0">
                  <img
                    src="/images/contact/location.png"
                    alt="Location"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <div className="text-sm">
                  <p className="font-semibold ">123 Canary Wharf,</p>
                  <p>London E14 5AB,</p>
                  <p>United Kingdom</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                <div className="bg-indigo-800 p-3 rounded-full flex-shrink-0">
                  <Image
                    src="/images/contact/phone.png"
                    alt="Phone"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <div className="text-sm">
                  <p className="font-semibold">+44 20 7946 0958</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                <div className="bg-indigo-800 p-3 rounded-full flex-shrink-0">
                  <Image
                    src="/images/contact/email.png"
                    alt="Email"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <div className="text-sm">
                  <p className="font-semibold">uk@scotitech.com</p>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                <div className="bg-indigo-800 p-3 rounded-full flex-shrink-0">
                  <Image
                    src="/images/contact/time.png"
                    alt="Time"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <div className="text-sm">
                  <p className="font-semibold">Mon-Fri</p>
                  <p>9:00 AM - 6:00 PM GMT</p>
                </div>
              </div>
            </div>

            {/* Contact Info - Desktop Version (Horizontal Layout) */}
            <div className="hidden lg:grid grid-cols-4 items-start lg:gap-8 lg:pt-8 max-w-2xl">
              {/* Location */}
              <div className="flex flex-col items-center text-center min-h-[120px] justify-start">
                <div className="bg-black p-4 rounded-full mb-3">
                  <img
                    src="/images/contact/location.png"
                    alt="Location"
                    className="w-4 h-4"
                  />
                </div>
                <div className="text-[12px] xxl:text-[16px] leading-tight font-lora ">
                  <p className="font-semibold">123 Canary Wharf,</p>
                  <p>London E14 5AB,</p>
                  <p>United Kingdom</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center text-center min-h-[120px] justify-start">
                <div className="bg-black p-4 rounded-full mb-3">
                  <img
                    src="/images/contact/phone.png"
                    alt="Phone"
                    className="w-4 h-4"
                  />
                </div>
                <div className="text-[12px] xxl:text-[16px] leading-tight">
                  <p className="font-semibold font-lora">+44 20 7946 0958</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center text-center min-h-[120px] justify-start">
                <div className="bg-black p-4 rounded-full mb-3">
                  <img
                    src="/images/contact/email.png"
                    alt="Email"
                    className="w-5 h-4"
                  />
                </div>
                <div className="text-[12px] xxl:text-[16px] leading-tight">
                  <p className="font-semibold font-lora">uk@scotitech.com</p>
                </div>
              </div>

              {/* Time */}
              <div className="flex flex-col items-center text-center min-h-[120px] justify-start">
                <div className="bg-black p-4 rounded-full mb-3">
                  <img
                    src="/images/contact/time.png"
                    alt="Time"
                    className="w-4 h-4"
                  />
                </div>
                <div className="text-[12px] xxl:text-[16px] leading-tight font-lora">
                  <p className="font-semibold">Mon-Fri</p>
                  <p>9:00 AM - 6:00 PM GMT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Value Props  desktop*/}
          <div className="hidden lg:flex flex-col px-10 space-y-6">
            {cardData.map((item, index) => (
              <ValueCard key={index} icon={item.icon} text={item.text} />
            ))}
          </div>

          {/* Right Side - Value Props */}
          <div className="space-y-4 lg:space-y-6 lg:hidden">
            {/* Card 1 */}

            <div className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                <Image
                  src="/images/contact/insights.png"
                  alt="Insights"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <div>
                <p className="text-gray-800 font-medium text-base lg:text-lg">
                  We turn insights into victories. Ready to achieve more.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                <Image
                  src="/images/contact/data.png"
                  alt="Data-driven"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <div>
                <p className="text-gray-800 font-medium text-base lg:text-lg">
                  Data-driven. Success delivered. Build with us.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="bg-teal-100 p-3 rounded-full flex-shrink-0">
                <Image
                  src="/images/contact/technology.png"
                  alt="Technology"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <div>
                <p className="text-gray-800 font-medium text-base lg:text-lg">
                  Expertise, Evolved. Technology simplified.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                <Image
                  src="/images/contact/growth.png"
                  alt="Growth"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <div>
                <p className="text-gray-800 font-medium text-base lg:text-lg">
                  Contact us to see how our technology drives business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

const ValueCard = ({ icon, text }) => {
  return (
    <div className="bg-white w-[450px] h-[60px] xxl:w-[500px] xxl:h-[70px] lg:shadow-xl lg:hover:shadow-2xl lg:transition-shadow relative rounded-lg flex items-center p-4 pl-16">
      {/* Icon */}
      <div className="absolute shadow-[0_0_15px_3px_rgba(180,100,255,1)] bg-purple-100 p-4 -left-4 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-900">
        <img src={icon} alt="icon" className="w-8 h-8" />
      </div>

      {/* Text */}
      <p className="text-gray-800 font-lora font-bold xxl:text-[19px] text-base lg:py-5 lg:text-[16px]">
        {text}
      </p>
    </div>
  );
};

import React from "react";
import Image from "next/image";

const GetInTouch = () => {
  return (
    <section className="relative overflow-hidden bg-[url('/images/contact/get_bg.png')] py-12 px-4 lg:py-20 lg:px-8">
      <div>
        <img src="images/contact/get_b1.png" alt=""  className="absolute left-0"/>
        <img src="images/contact/get_b2.png" alt=""  className="absolute right-0"/>

      </div>


      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:px-18 lg:gap-14">
          {/* Left Side - Contact Info */}
          <div className="text-white  space-y-8">
            <div>
              <h1 className="text-4xl lg:text-4xl font-karla font-bold mb-4 lg:mb-6">
                Get in Touch
              </h1>
              <p className="text-base lg:text-sm leading-relaxed max-w-xl">
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
         <div className="hidden lg:flex lg:items-start lg:gap-8 lg:pt-8">
  {/* Location */}
  <div className="flex flex-col items-center text-center min-h-[120px] justify-start">
    <div className="bg-black p-4 rounded-full mb-3">
      <img
        src="/images/contact/location.png"
        alt="Location"
        className="w-4 h-4"
      />
    </div>
    <div className="text-[12px] leading-tight">
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
    <div className="text-[12px] leading-tight">
      <p className="font-semibold">+44 20 7946 0958</p>
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
    <div className="text-[12px] leading-tight">
      <p className="font-semibold">uk@scotitech.com</p>
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
    <div className="text-[12px] leading-tight">
       <p className="font-semibold">Mon-Fri</p>
                  <p>9:00 AM - 6:00 PM GMT</p>
    </div>
  </div>
</div>

          </div>
          {/* Right Side - Value Props  desktop*/}
     <div className="hidden lg:flex flex-col px-10 space-y-6">
  {/* Card 1 */}
  <div className="bg-white w-[450px] h-[60px] lg:shadow- lg:hover:shadow-2xl lg:transition-shadow relative rounded-lg flex items-center p-4 pl-16">
    {/* Icon */}
    <div className="absolute lg:transition-shadow shadow-[0_0_15px_3px_rgba(180,100,255,1)]
transition-all duration-900 bg-purple-100 p-4 -left-4 rounded-full flex-shrink-0 flex items-center justify-center ">
      <img
        src="/images/contact/insights.png"
        alt="Insights"
        className="w-8 h-8"
      />
    </div>
    {/* Text */}
    <p className="text-gray-800  font-semibold text-base lg:py-5 lg:text-[16px] ">
      We turn insights into victories. Ready to achieve more.
    </p>
  </div>
  {/* card 2 */}
    <div className="bg-white w-[450px] h-[60px] lg:shadow-xl lg:hover:shadow-2xl lg:transition-shadow relative rounded-lg flex items-center p-4 pl-16">
    {/* Icon */}
    <div className="absolute shadow-[0_0_15px_3px_rgba(180,100,255,1)]
 bg-purple-100 p-4 -left-4 rounded-full flex-shrink-0 flex items-center justify-center">
      <img
        src="/images/contact/data.png"
        alt="Insights"
        className="w-8 h-8"
      />
    </div>

    {/* Text */}
    <p className="text-gray-800  font-semibold text-base lg:py-5 lg:text-[16px] ">
Data-driven. Success delivered. Build with us.    </p>
  </div>
  {/* card 3 */}
    <div className="bg-white w-[450px] h-[60px] lg:shadow-xl lg:hover:shadow-2xl lg:transition-shadow relative rounded-lg flex items-center p-4 pl-16">
    {/* Icon */}
    <div className="absolute shadow-[0_0_15px_3px_rgba(180,100,255,1)]
 bg-purple-100 p-4 -left-4 rounded-full flex-shrink-0 flex items-center justify-center">
      <img
        src="/images/contact/technology.png"
        alt="Insights"
        className="w-8 h-8"
      />
    </div>

    {/* Text */}
    <p className="text-gray-800  font-semibold text-base lg:py-5 lg:text-[16px] ">
Expertise, Evolved. Technology simplified.    </p>
  </div>
  {/* card 4 */}
    <div className="bg-white w-[450px] h-[60px] lg:shadow-xl lg:hover:shadow-2xl lg:transition-shadow relative rounded-lg flex items-center p-4 pl-16">
    {/* Icon */}
    <div className="absolute shadow-[0_0_15px_3px_rgba(180,100,255,1)]
 bg-purple-100 p-4 -left-4 rounded-full flex-shrink-0 flex items-center justify-center">
      <img
        src="/images/contact/growth.png"
        alt="Insights"
        className="w-8 h-8"
      />
    </div>

    {/* Text */}
    <p className="text-gray-800  font-semibold text-base lg:py-5 lg:text-[16px] ">
Contact us to see how our technology drives business growth.    </p>
  </div>
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

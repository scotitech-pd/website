"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MoveRightIcon, Send } from "lucide-react";
import Link from "next/link";

const SpecificSolution = () => {
  const productCards = [
    {
      id: 1,
      name: "AppDeploy",
      image: "/images/contact/appdeploy.png",
      description: "Effortless iOS App Distribution",
      link: "/appdeploy",
    },
    {
      id: 2,
      name: "Opsly",
      image: "/images/contact/opsly.png",
      description: "All-in-One Operations Platform",
      link: "/opsly",
    },
    {
      id: 3,
      name: "ClarityPath",
      image: "/images/contact/claritypath.png",
      description: "Private decision-support app",
      link: "/claritypath",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    companyName: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative  bg-[url('/images/contact/pattern-bg.png')] bg-no-repeat bg-center bg-cover  overflow-hidden py-12  lg:py-20 ">
      <div className="relative max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20  ">
        <h2 className="text-2xl lg:text-[48px] font-bold font-karla text-purple-900 text-center mb-8 lg:mb-16">
          Looking for Specific Solutions?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[45%_51%] gap-5 min-[1400px]:gap-12 ">
          <div className="bg-gradient-to-br from-[#000] to-[#3A3287] rounded-3xl p-6 lg:p-8 shadow-2xl  ">
            <div className="border-1 border-white p-6 border-opacity-20 rounded-md">
              <h3 className="text-2xl lg:text-3xl  font-karla text-white mb-6 lg:mb-8 ">
                Send us a Message
              </h3>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label className="block text-white font-lora text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full  font-lora bg-transparent border-b-2 border-white/50 focus:border-white text-white placeholder-white/60 py-2 px-1 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-lora font-medium mb-2">
                      Contact
                    </label>
                    <input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="Contact Number"
                      className="w-full font-lora bg-transparent border-b-2 border-white/50 focus:border-white text-white placeholder-white/60 py-2 px-1 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-lora text-white text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full font-lora bg-transparent border-b-2 border-white/50 focus:border-white text-white placeholder-white/60 py-2 px-1 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-lora text-white text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full font-lora bg-transparent border-b-2 border-white/50 focus:border-white text-white placeholder-white/60 py-2 px-1 outline-none transition-colors"
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={handleSubmit}
                    className="bg-white hover:shadow-[0_0_15px_3px_rgba(255,255,255,1)] cursor-pointer font-lora text-purple-900 px-5 py-2 lg:text-lg rounded-full font-semibold hover:bg-purple-50 transition-all duration-500 ease-in-out text-sm"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-16 mt-5 lg:mt-0 lg:space-y-8 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-6">
              {productCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white relative rounded-2xl shadow-xl hover:shadow-2xl transition h-full flex flex-col  mb-0"
                >
                  <div className="flex bg-black rounded-t-2xl overflow-hidden items-center justify-center h-20">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full object-center"
                    />
                  </div>
                  <div className="py-4  text-center ">
                    <h4 className="font-bold text-gray-800 mb-1 font-karla">
                      {card.name}
                    </h4>
                    <p className="text-sm lg:text-[14px] text-gray-600 mb-7 font-lora">
                      {card.description}
                    </p>
                    <Link href={`/products/${card.link}`}>
                      <button className="bg-purple-700 cursor-pointer font-karla shadow-[0_0_15px_3px_rgba(180,100,255,1)] text-nowrap absolute left-1/2 -translate-x-1/2 -bottom-3 text-white text-xs lg:px-4 px-6 py-2 rounded-full hover:bg-purple-800 transition-colors font-karlas">
                        Read more
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#641070] h-full  shadow-[0_0_5px_3px_rgba(180,100,255,0.6)] rounded-3xl relative overflow-hidden lg:h-[53%] mt-10">
              <div className="grid lg:grid-cols-[28%_72%] lg:h-full ">
                <div>
                  <h3 className="text-white text-xl font-bold p-4 px-7 font-lora">
                    Our Location
                  </h3>
                  <img
                    src="/images/contact/map.png"
                    alt=""
                    className="w-[300px] absolute left-4 z-20 hidden lg:block "
                  />
                </div>
                <div className="relative bg-yellow h-full w-full overflow-hidden lg:rounded-br-3xl lg:rounded-tr-3xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18288769.910807166!2d12.5088275!3d47.73855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x427253cbf716dbf5%3A0xc978dbe2283363f5!2sScotiTech%20Solutions%20Limited!5e1!3m2!1sen!2sin!4v1762855227518!5m2!1sen!2sin"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecificSolution;

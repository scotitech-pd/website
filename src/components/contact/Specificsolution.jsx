'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const SpecificSolution = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    companyName: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-white py-10 px-4 md:py-12 md:px-6 lg:py-20 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <Image 
          src="/images/contact/pattern-bg.png" 
          alt="" 
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-[48px] font-bold font-karla text-purple-900 text-center mb-6 sm:mb-8 lg:mb-16">
          Looking Our Specific Solutions?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mx-auto max-w-7xl">
          {/* Left Side - Form */}
          <div className="bg-gradient-to-br from-[#000] to-[#3A3287] rounded-3xl p-5 sm:p-6 lg:p-8 shadow-2xl w-full sm:w-[90%] md:w-[80%] lg:w-[500px] mx-auto lg:mx-0 lg:ml-16">
            <div className='border-1 border-white p-4 sm:p-6 border-opacity-20 rounded-md'>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-karla text-white mb-4 sm:mb-6 lg:mb-8">
                Send us a Message
              </h3>

              <div className="space-y-6">
                {/* Name and Contact Row */}
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
                      className="w-full font-lora bg-transparent border-b-2 border-white/50 focus:border-white text-white placeholder-white/60 py-2 px-1 outline-none transition-colors"
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

                {/* Email */}
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

                {/* Company Name */}
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

                {/* Submit Button */}
                <div className="flex justify-center sm:justify-end pt-4">
                  <button
                    onClick={handleSubmit}
                    className="bg-white hover:shadow-[0_0_15px_3px_rgba(255,255,255,1)] cursor-pointer font-lora text-purple-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-purple-50 transition-colors duration-500 ease-in-out"
                  >
                    Next
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Products and Location */}
          <div className="space-y-6 lg:space-y-8">
            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
              {/* AppDeploy */}
              <div className="bg-white relative rounded-2xl shadow-xl hover:shadow-2xl transition-shadow h-full flex flex-col">
                <div className="flex bg-black items-center justify-center h-20">
                  <img src="/images/contact/appdeploy.png" alt="AppDeploy" className="w-full object-center" />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-bold text-gray-800 mb-1">AppDeploy</h4>
                  <p className="text-xs text-gray-600 mb-3">Effortless iOS App Distribution</p>
                  <button className="bg-purple-700 shadow-[0_0_15px_3px_rgba(180,100,255,1)] absolute left-1/2 -translate-x-1/2 -bottom-3 text-white text-xs px-4 py-2 rounded-full hover:bg-purple-800 transition-colors">
                    Read more
                  </button>
                </div>
              </div>

              {/* Opsly */}
              <div className="bg-white relative rounded-2xl shadow-xl hover:shadow-2xl transition-shadow h-full flex flex-col">
                <div className="flex bg-black items-center justify-center h-20">
                  <img src="/images/contact/opsly.png" alt="Opsly" className="w-full object-center" />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-bold text-gray-800 mb-1">Opsly</h4>
                  <p className="text-xs text-gray-600 mb-3">All-in-One Operations Platform</p>
                  <button className="bg-purple-700 absolute shadow-[0_0_15px_3px_rgba(180,100,255,1)] left-1/2 -translate-x-1/2 -bottom-3 text-white text-xs px-4 py-2 rounded-full hover:bg-purple-800 transition-colors">
                    Read more
                  </button>
                </div>
              </div>

              {/* ClarityPath */}
              <div className="bg-white rounded-2xl shadow-xl relative hover:shadow-2xl transition-shadow h-full flex flex-col">
                <div className="flex bg-black items-center justify-center h-20">
                  <img src="/images/contact/claritypath.png" alt="ClarityPath" className="w-full object-center" />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-bold text-gray-800 mb-1">ClarityPath</h4>
                  <p className="text-xs text-gray-600 mb-3">Private decision-support app</p>
                  <button className="bg-purple-700 absolute shadow-[0_0_15px_3px_rgba(180,100,255,1)] left-1/2 -translate-x-1/2 -bottom-3 text-white text-xs px-4 py-2 rounded-full hover:bg-purple-800 transition-colors">
                    Read more
                  </button>
                </div>
              </div>
            </div>

            {/* Our Location */}
            <div className="bg-[#641070] h-[250px]  shadow-[0_0_15px_3px_rgba(180,100,255,1)] rounded-3xl relative overflow-hidden flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start">
              <div className="text-center sm:text-left sm:pl-6">
                <h3 className="text-white text-2xl font-bold p-4 sm:px-7 font-lora">
                  Our Location
                </h3>
                <img src="/images/contact/map.png" alt="" className="w-[220px] sm:w-[300px] mx-auto sm:mx-0 relative z-20" />
              </div>
              <div className=" ">
                <img src="/images/contact/map1.png" alt="" className="absolute left-[220px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecificSolution;

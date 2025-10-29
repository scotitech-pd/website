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
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white py-12 px-4 lg:py-20 lg:px-8">
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
        <h2 className="text-3xl lg:text-[48px] font-bold font-karla text-purple-900 text-center mb-8 lg:mb-16">
          Looking Our Specific Solutions?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mx-auto max-w-7xl">
          {/* Left Side - Form */}
          <div className="bg-gradient-to-br from-[#000] to-[#3A3287] rounded-3xl p-6 ml-16 lg:p-8 shadow-2xl  w-[500px] ">
            <div className='border-1 border-white p-6 border-opacity-20 rounded-md'>
            <h3 className="text-2xl lg:text-3xl  font-karla text-white mb-6 lg:mb-8 ">
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
                  valiadtion="email"
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
              <div className="flex justify-end pt-4">
                <button
                  onClick={handleSubmit}
                  className="bg-white hover:shadow-[0_0_15px_3px_rgba(255,255,255,1)] cursor-pointer font-lora text-purple-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-purple-50 transition-colors  transition-all duration-500 ease-in-out"
                >
                  Next
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </button>
             </div> </div>
            </div>
          </div>

          {/* Right Side - Products and Location */}
          <div className="space-y-6 lg:space-y-8">
            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
              {/* AppDeploy */}
              <div className="bg-white relative rounded-2xl shadow-xl  hover:shadow-2xl transition-shadow h-full flex flex-col">
                <div className="flex bg-black items-center justify-center h-20">
                  <img
                    src="/images/contact/appdeploy.png" 
                    alt="AppDeploy" 
                  
                    className="w-full   object-center "
                  />
                </div>
                <div className="p-4 text-center ">
                  <h4 className="font-bold text-gray-800 mb-1">AppDeploy</h4>
                  <p className="text-xs text-gray-600 mb-3">Effortless iOS App Distribution</p>
                    <button className="bg-purple-700 shadow-[0_0_15px_3px_rgba(180,100,255,1)]
 absolute left-1/2 -translate-x-1/2 -bottom-3   text-white text-xs px-4 py-2 rounded-full hover:bg-purple-800 transition-colors">
                    Read more
                  </button>
                </div>
              </div>

              {/* Opsly */}
               <div className="bg-white relative rounded-2xl shadow-xl  hover:shadow-2xl transition-shadow h-full flex flex-col">
                <div className="flex bg-black items-center justify-center h-20">
                  <img
                    src="/images/contact/opsly.png" 
                    alt="opsly" 
                  
                    className="w-full   object-center "
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-bold text-gray-800 mb-1">Opsly</h4>
                  <p className="text-xs text-gray-600 mb-3">All-in-One Operations Platform</p>
                  <button className="bg-purple-700 absolute shadow-[0_0_15px_3px_rgba(180,100,255,1)]
 left-1/2 -translate-x-1/2 -bottom-3  text-white text-xs px-4 py-2 rounded-full hover:bg-purple-800 transition-colors">
                    Read more
                  </button>
                </div>
              </div>

              {/* ClarityPath */}
        <div className="bg-white rounded-2xl shadow-xl relative hover:shadow-2xl transition-shadow h-full flex flex-col">
                <div className="flex bg-black items-center justify-center h-20">
                  <img
                    src="/images/contact/claritypath.png" 
                    alt="claritypath" 
                  
                    className="w-full   object-center "
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-bold text-gray-800 mb-1">ClarityPath</h4>
                  <p className="text-xs text-gray-600 mb-3">private decision-support app</p>
                  <button className="bg-purple-700 absolute shadow-[0_0_15px_3px_rgba(180,100,255,1)]
 left-1/2 -translate-x-1/2 -bottom-3  text-white text-xs px-4 py-2 rounded-full hover:bg-purple-800 transition-colors">
                    Read more
                  </button>
                </div>
              </div>
            </div>

            {/* Our Location */}
            {/* <div className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Our Location</h3>
                
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                  
                  <div className="p-4 lg:p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-1">
                          Regus - Lanarkshire Eurocentral
                        </h4>
                        <div className="flex items-center gap-1 mb-2">
                          <span className="text-yellow-500">4.1 ⭐⭐⭐⭐☆</span>
                          <span className="text-gray-500 text-sm">(25)</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">Office space rental agency</p>
                        <p className="text-sm text-gray-700">
                          Eurocentral Scotland, 2 Parklands Way Maxim 1, Maxim Business Park, 1st
                        </p>
                        <p className="text-green-600 text-sm font-semibold mt-2">Open 24 hours</p>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <button className="bg-teal-100 p-2 rounded-full hover:bg-teal-200 transition-colors">
                          <Image 
                            src="/images/contact/directions.png" 
                            alt="Directions" 
                            width={24} 
                            height={24}
                            className="w-6 h-6"
                          />
                        </button>
                        <button className="bg-purple-100 p-2 rounded-full hover:bg-purple-200 transition-colors">
                          <Image 
                            src="/images/contact/save.png" 
                            alt="Save" 
                            width={24} 
                            height={24}
                            className="w-6 h-6"
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div> */}
            <div className='bg-[#641070] h-[250px] shadow-[0_0_15px_3px_rgba(180,100,255,1)]
 rounded-3xl relative overflow-hidden'>
              <div className='grid grid-cols-2'> 
                <div>
              <h3 className='text-white text-2xl font-bold p-4 px-7 font-lora'>
                Our Location
              </h3>
              
              <img src="/images/contact/map.png" alt="" className='w-[300px] absolute left-4 z-20' />
             </div>
             <div>
              <img src="/images/contact/map1.png" alt="" className='absolute left-[200px] '  />
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
"use client";
import React, { useState } from "react";
import Link from "next/link";

const SpecificSolution = () => {
  const productCards = [
    {
      id: 1,
      name: "AppDeploy",
      image: "/images/brand/appdeploy-logo-black.png",
      description: "Private iOS release portals and install visibility",
      link: "/products/appdeploy",
    },
    {
      id: 2,
      name: "AXOS",
      image: "/images/brand/axos-icon.png",
      description: "Private workspace for daily team execution",
      link: "/products/axos",
    },
    {
      id: 3,
      name: "ClarityPath",
      image: "/images/brand/claritypath-logo.png",
      description: "Private decision-support app",
      link: "/products/claritypath",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    companyName: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [shake, setShake] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "email") {
      validateEmail(e.target.value);
    }
  };

  const validatePhone = (val) => {
    if (!val.trim()) {
      setPhoneError("Phone number is required");
      return false;
    }
    const clean = val.replace(/\s+/g, "");
    const ok = /^\+?[1-9]\d{7,14}$/.test(clean);

    if (!ok) {
      setPhoneError("Enter valid phone number with country code");
      return false;
    }

    setPhoneError("");
    return true;
  };

  const validateEmail = (val) => {
    if (!val.trim()) {
      setEmailError("Email is required");
      return false;
    }

    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;

    if (!re.test(val.toLowerCase())) {
      setEmailError("Enter a valid email address");
      return false;
    }

    setEmailError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneOk = validatePhone(formData.contact);
    const emailOk = validateEmail(formData.email);

    if (!phoneOk || !emailOk) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    const fd = new FormData();
    fd.append("access_key", "cc28a946-1d7c-46a4-aa9f-0bbaa38e5c77");
    fd.append("Name", formData.name);
    fd.append("Contact", formData.contact);
    fd.append("Email", formData.email);
    fd.append("Company", formData.companyName);
    fd.append("Message", formData.message || "No message provided");

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: fd,
    });

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setFormData({
        name: "",
        contact: "",
        email: "",
        companyName: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <section className="relative bg-[#f7f7f5] overflow-hidden py-12 lg:py-20">
      <div className="relative max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <h2 className="text-2xl lg:text-[48px] font-bold font-karla text-[#0F172A] text-center mb-8 lg:mb-16">
          Looking for a Specific Product?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[45%_51%] gap-5 min-[1400px]:gap-12">
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-[0_22px_55px_rgba(15,23,42,0.10)] border border-slate-200">
            <div className="border border-slate-200 p-6 rounded-2xl relative bg-slate-50/80">
              <h3 className="text-2xl lg:text-3xl font-karla text-[#0F172A] mb-6 lg:mb-8">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className={shake ? "animate-shake" : ""}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label className="block text-slate-700 font-lora text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full font-lora bg-transparent border-b-2 border-slate-300 focus:border-slate-500 text-slate-900 placeholder-slate-400 py-2 px-1 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 text-sm font-lora font-medium mb-2">
                        Contact
                      </label>
                      <input
                        type="tel"
                        name="contact"
                        value={formData.contact}
                        onBeforeInput={(e) => {
                          if (!/[0-9+]/.test(e.data)) {
                            e.preventDefault();
                          }
                        }}
                        onChange={handleChange}
                        placeholder="With Country Code"
                        className="w-full font-lora bg-transparent border-b-2 border-slate-300 focus:border-slate-500 text-slate-900 placeholder-slate-400 py-2 px-1 outline-none transition-colors"
                      />
                      {phoneError && (
                        <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block font-lora text-slate-700 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full font-lora bg-transparent border-b-2 border-slate-300 focus:border-slate-500 text-slate-900 placeholder-slate-400 py-2 px-1 outline-none transition-colors"
                    />
                    {emailError && (
                      <p className="text-red-500 text-sm mt-1">{emailError}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-lora text-slate-700 text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full font-lora bg-transparent border-b-2 border-slate-300 focus:border-slate-500 text-slate-900 placeholder-slate-400 py-2 px-1 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-lora text-slate-700 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us what you would like to discuss"
                      className="w-full resize-none font-lora bg-transparent border-b-2 border-slate-300 focus:border-slate-500 text-slate-900 placeholder-slate-400 py-2 px-1 outline-none transition-colors"
                    />
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      className="bg-[#0F172A] cursor-pointer font-lora text-white px-5 py-2 lg:text-lg rounded-full font-semibold hover:bg-slate-900 transition-all duration-300 ease-in-out text-sm"
                    >
                      {success ? "Sent" : "Send"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT SIDE CARDS + LOCATION */}
          <div className="space-y-16 mt-5 lg:mt-0 lg:space-y-8 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-6">
              {productCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white relative rounded-2xl shadow-xl hover:shadow-2xl transition h-full flex flex-col mb-0"
                >
                  <div className="flex bg-slate-100 rounded-t-2xl overflow-hidden items-center justify-center h-20 border-b border-slate-200">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="h-14 w-auto object-contain"
                    />
                  </div>
                  <div className="py-4 text-center">
                    <h4 className="font-bold text-gray-800 mb-1 font-karla">
                      {card.name}
                    </h4>
                    <p className="text-sm lg:text-[14px] text-gray-600 mb-7 font-lora">
                      {card.description}
                    </p>
                    <Link href={card.link}>
                      <button className="bg-[#0F172A] cursor-pointer font-karla text-nowrap absolute left-1/2 -translate-x-1/2 -bottom-3 text-white text-xs lg:px-4 px-6 py-2 rounded-full hover:bg-slate-900 transition-colors shadow-[0_8px_20px_rgba(15,23,42,0.22)]">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white h-full border border-slate-200 rounded-3xl relative overflow-hidden lg:h-[53%] mt-10 shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
              <div className="grid lg:grid-cols-[28%_72%] lg:h-full">
                <div>
                  <h3 className="text-[#0F172A] text-xl font-bold p-4 px-7 font-lora">
                    Our Location
                  </h3>
                  <img
                    src="/images/contact/map.png"
                    alt=""
                    className="w-[300px] absolute left-4 z-20 hidden lg:block"
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

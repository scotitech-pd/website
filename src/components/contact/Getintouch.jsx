"use client";

import React from "react";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

/* contact info */
const contactDetails = [
  {
    icon: "location",
    title:
      "Eurocentral, 2 Parklands Way Maxim 1, Maxim Business Park, 1st, Motherwell ML1 4WR, UK",
    type: "location",
    style: "text-left",
  },
  { icon: "phone", title: "+44 (0) 1698 708203", type: "phone" },
  { icon: "email", title: "info@scotitech.com", type: "email" },
  { icon: "time", title: "Mon-Fri", subtitle: "9:00 AM - 5:30 PM GMT", type: "time" },
];

/* values section */
const valueCards = [
  { icon: "/images/contact/insights.png", text: "Clear product conversations grounded in practical use cases.", bg: "bg-emerald-100" },
  { icon: "/images/contact/data.png", text: "Practical guidance on rollout, onboarding, and product fit.", bg: "bg-blue-100" },
  { icon: "/images/contact/technology.png", text: "A technical team focused on clarity, ownership, and usable software.", bg: "bg-teal-100" },
  { icon: "/images/contact/growth.png", text: "Direct contact for partnerships, commercial discussions, and product access.", bg: "bg-amber-100" },
];

/* lucide icon renderer */
const renderIcon = (type, size = 20) => {
  const iconProps = { size, strokeWidth: 1.7 };
  switch (type) {
    case "location":
      return <MapPin {...iconProps} />;
    case "phone":
      return <Phone {...iconProps} />;
    case "email":
      return <Mail {...iconProps} />;
    case "time":
      return <Clock {...iconProps} />;
    default:
      return null;
  }
};

/* helper to generate href for contact item */
const getContactHref = (item) => {
  switch (item.type) {
    case "location": {
      const query = encodeURIComponent(item.title);
      return `https://maps.app.goo.gl/9fkHLWDX2CqnugMaA`;
    }
    case "phone": {
      // normalize phone number for tel: (remove spaces)
      const tel = item.title.replace(/\s+/g, "");
      return `tel:${tel}`;
    }
    case "email":
      return `mailto:${item.title}`;
    default:
      return null;
  }
};

/* main section */
const GetInTouch = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F7F5] py-12 lg:py-20">
      {/* background decorative images */}
      <div>
        <img
          src="images/contact/get_b1.png"
          alt=""
          className="absolute left-0 lg:block hidden z-0 pointer-events-none"
        />
        <img
          src="images/contact/get_b2.png"
          alt=""
          className="absolute right-0 lg:block hidden z-0 pointer-events-none"
        />
      </div>

      {/* content */}
      <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 xxl:grid-cols-[60%_40%] gap-8 lg:gap-14">
          {/* left side */}
          <div className="text-[#0F172A] space-y-8">
            <div>
              <h1 className="text-3xl lg:text-4xl xxl:text-5xl font-karla font-bold mb-4 lg:mb-6">
                Speak with Our Team
              </h1>
              <p className="text-sm lg:text-[16px] xxl:text-lg leading-relaxed max-w-2xl font-lora text-slate-700">
                Speak with ScotiTech about product access, rollout questions,
                partnerships, or the solution that best fits your organisation.
              </p>
            </div>

            {/* contact cards mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 lg:hidden">
              {contactDetails.map((item, index) => (
                <ContactCard key={index} {...item} />
              ))}
            </div>

            {/* contact cards desktop */}
            <div className="hidden lg:grid grid-cols-4 items-start lg:gap-8 lg:pt-8 max-w-3xl">
              {contactDetails.map((item, index) => (
                <ContactCardDesktop key={index} {...item} />
              ))}
            </div>
          </div>

          {/* right side */}
          <div className="hidden lg:flex flex-col px-10 space-y-6">
            {valueCards.map((item, index) => (
              <ValueCard key={index} icon={item.icon} text={item.text} />
            ))}
          </div>

          {/* right side mobile/tablet */}
          <div className="space-y-4 lg:space-y-6 lg:hidden">
            <ValueSection valueCards={valueCards} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

/* mobile contact card */
const ContactCard = ({ type, title, subtitle }) => {
  const href = getContactHref({ type, title });
  // if href exists wrap in anchor, else render plain div
  const Content = (
    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-[0_10px_25px_rgba(15,23,42,0.06)] hover:bg-slate-50 transition-all duration-300">
      <div className="bg-[#0E1116] p-3 rounded-full flex-shrink-0 flex items-center justify-center shadow-[0_10px_20px_rgba(14,17,22,0.18)] transition-shadow duration-300">
        {renderIcon(type, 22)}
      </div>
      <div className="text-sm text-slate-800">
        <p className="font-semibold font-lora">{title}</p>
        {subtitle && <p className="font-lora">{subtitle}</p>}
      </div>
    </div>
  );

  if (href) {
    // open maps in new tab, tel/mailto use same tab
    const isExternalMap = type === "location";
    return (
      <a
        href={href}
        target={isExternalMap ? "_blank" : "_self"}
        rel={isExternalMap ? "noopener noreferrer" : undefined}
      >
        {Content}
      </a>
    );
  }

  return Content;
};

/* desktop contact card — hover only changes icon color */
const ContactCardDesktop = ({ type, title, subtitle }) => {
  const href = getContactHref({ type, title });
  const Inner = (
    <div className="group flex flex-col items-center text-center min-h-[120px] justify-start cursor-pointer transition-all duration-300">
      {/* background and icon hover behavior */}
      <div className="bg-[#0E1116] group-hover:bg-white p-4 rounded-full mb-3 flex items-center justify-center shadow-[0_10px_20px_rgba(14,17,22,0.16)] transition-all duration-300">
        <div className="text-white group-hover:text-black transition-colors duration-300">
          {renderIcon(type, 18)}
        </div>
      </div>

      {/* fixed white text under icon */}
      <div className="text-[12px] text-center xxl:text-[16px] leading-tight font-karla text-slate-700">
        <p className="">{title}</p>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );

  if (href) {
    const isExternalMap = type === "location";
    return (
      <a
        href={href}
        target={isExternalMap ? "_blank" : "_self"}
        rel={isExternalMap ? "noopener noreferrer" : undefined}
      >
        {Inner}
      </a>
    );
  }

  return Inner;
};

/* value cards desktop */
const ValueCard = ({ icon, text }) => (
  <div className="bg-white w-[450px] h-[60px] xxl:w-[500px] xxl:h-[70px] lg:shadow-[0_16px_36px_rgba(15,23,42,0.08)] lg:hover:shadow-[0_20px_46px_rgba(15,23,42,0.12)] transition-shadow relative rounded-2xl flex items-center p-4 pl-16 border border-[#d9ded7]">
    <div className="absolute shadow-[0_12px_24px_rgba(15,118,110,0.18)] bg-[#ECFDF5] p-5 -left-4 rounded-full flex-shrink-0 flex items-center justify-center">
      <img src={icon} alt="icon" className="w-8 h-8" />
    </div>
    <p className="text-gray-800 font-lora font-semibold xxl:text-[15px] lg:pl-2 text-base">{text}</p>
  </div>
);

/* values section mobile/tablet */
const ValueSection = ({ valueCards }) => (
  <div className="space-y-4 lg:space-y-6">
    <div className="block sm:hidden text-center p-6">
      <p className="text-3xl font-semibold font-karla">Our Values</p>
    </div>

    {valueCards.map((item, i) => (
      <div key={i} className="bg-white rounded-2xl mb-2 p-6 flex items-start gap-4 shadow-xl hover:shadow-2xl transition-shadow">
        <div className={`${item.bg} p-4 rounded-full flex-shrink-0 flex items-center justify-center`}>
          <img src={item.icon} alt={item.text} className="w-9 h-9" />
        </div>
        <p className="text-gray-800 font-medium text-base font-lora">{item.text}</p>
      </div>
    ))}

    <div className="hidden sm:grid sm:grid-cols-2 sm:gap-6 lg:hidden">
      {valueCards.map((item, i) => (
        <div key={i} className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-shadow">
          <div className={`${item.bg} p-4 rounded-full mb-4`}>
            <img src={item.icon} alt={item.text} className="w-9 h-9" />
          </div>
          <p className="text-gray-800 font-medium text-base font-lora">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
);

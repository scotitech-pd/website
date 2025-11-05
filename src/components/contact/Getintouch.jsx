import React from "react";
import { Mail, PhoneCallIcon, TimerIcon } from "lucide-react";

// ✅ Data configuration (easy to modify later)
const contactDetails = [
  {
    icon: "/images/contact/location.png",
    title: "Eurocentral Scotland, 2 Parklands Way Maxim 1, Maxim Business Park, 1st, Motherwell ML1 4WR, United Kingdom",
    type: "location",
  },
  {
    icon: "/images/contact/phone.png",
    title: "+44 20 7946 0958",
    type: "phone",
  },
  {
    icon: "/images/contact/email.png",
    title: "uk@scotitech.com",
    type: "email",
  },
  {
    icon: "/images/contact/time.png",
    title: "Mon-Fri",
    subtitle: "9:00 AM - 6:00 PM GMT",
    type: "time",
  },
];

const valueCards = [
  {
    icon: "/images/contact/insights.png",
    text: "We turn insights into victories. Ready to achieve more.",
    bg: "bg-purple-100",
  },
  {
    icon: "/images/contact/data.png",
    text: "Data-driven. Success delivered. Build with us today.",
    bg: "bg-blue-100",
  },
  {
    icon: "/images/contact/technology.png",
    text: "Expertise, Evolved. Technology simplified with us.",
    bg: "bg-teal-100",
  },
  {
    icon: "/images/contact/growth.png",
    text: "Contact us to see how our technology drives business growth.",
    bg: "bg-purple-100",
  },
];

// ✅ Main Component
const GetInTouch = () => {
  return (
    <section className="relative overflow-hidden bg-[url('/images/contact/get_bg.png')] py-12 lg:py-20">
      {/* Background Decorations */}
      <div>
        <img
          src="images/contact/get_b1.png"
          alt=""
          className="absolute left-0 lg:block hidden"
        />
        <img
          src="images/contact/get_b2.png"
          alt=""
          className="absolute right-0 lg:block hidden"
        />
      </div>

      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 xxl:grid-cols-[60%_40%] gap-8 lg:gap-14">
          {/* ================= LEFT SECTION ================= */}
          <div className="text-white space-y-8">
            <div>
              <h1 className="text-3xl lg:text-4xl xxl:text-5xl font-karla font-bold mb-4 lg:mb-6">
                Get in Touch
              </h1>
              <p className="text-sm lg:text-[16px] xxl:text-lg leading-relaxed max-w-2xl lg:tracking-wider font-lora">
                Ready to find reliable support and genuine companionship? We're
                here to answer your questions about the ElderConnect+ app and
                tailor services for you or your loved one. Let's start the
                conversation.
              </p>
            </div>

            {/* ====== Contact Info Mobile ====== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 lg:hidden">
              {contactDetails.map((item, index) => (
                <ContactCard key={index} {...item} />
              ))}
            </div>

            {/* ====== Contact Info Desktop ====== */}
            <div className="hidden lg:grid grid-cols-4 items-start lg:gap-8 lg:pt-8 max-w-3xl">
              {contactDetails.map((item, index) => (
                <ContactCardDesktop key={index} {...item} />
              ))}
            </div>
          </div>

          {/* ================= RIGHT SECTION ================= */}
          {/* Desktop version */}
          <div className="hidden lg:flex flex-col px-10 space-y-6">
            {valueCards.map((item, index) => (
              <ValueCard key={index} icon={item.icon} text={item.text}  />
            ))}
          </div>

          {/* Mobile + Tablet version */}
          <div className="space-y-4 lg:space-y-6 lg:hidden">
            <ValueSection valueCards={valueCards} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

// ✅ Contact Card for Mobile
const ContactCard = ({ icon, title, subtitle }) => (
  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
    <div className="bg-indigo-800 p-3 rounded-full flex-shrink-0">
      <img src={icon} alt={title} className="w-6 h-6" />
    </div>
    <div className="text-sm">
      <p className="font-semibold font-lora">{title}</p>
      {subtitle && <p className="font-lora">{subtitle}</p>}
    </div>
  </div>
);

// ✅ Contact Card for Desktop
const ContactCardDesktop = ({ icon, title, subtitle }) => (
  <div className="flex flex-col items-center text-center min-h-[120px] justify-start">
    <div className="bg-black p-4 rounded-full mb-3">
      <img src={icon} alt={title} className="w-4 h-4" />
    </div>
    <div className="text-[9px] text-justify xxl:text-[14px] leading-tight font-lora">
      <p className="font-semibold">{title}</p>
      {subtitle && <p>{subtitle}</p>}
    </div>
  </div>
);

// ✅ Desktop Value Card
const ValueCard = ({ icon, text }) => (
  <div className="bg-white z-5 w-[450px] h-[60px] xxl:w-[500px] xxl:h-[70px] lg:shadow-xl lg:hover:shadow-2xl lg:transition-shadow relative rounded-lg flex items-center p-4 pl-16">
    <div className="absolute shadow-[0_0_15px_3px_rgba(180,100,255,1)] bg-purple-100 p-5 -left-4 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-900">
      <img src={icon} alt="icon" className="w-8 h-8" />
    </div>
    <p className="text-gray-800 font-lora font-semibold xxl:text-[15px] lg:pl-2 text-base lg:py-5 lg:text-[16px]">
      {text}
    </p>
  </div>
);

// ✅ Mobile/Tablet Value Cards (500px - 1023px Responsive Layout)
const ValueSection = ({ valueCards }) => (
  <div className="space-y-4 lg:space-y-6">
    {/* For screens below 500px */}
    <div className="block sm:hidden">
      <div className="text-center p-6">
        <p className="text-3xl font-semibold font-karla">Our Values</p>
      </div>
      {valueCards.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl mb-2 p-6 flex items-start gap-4 shadow-xl hover:shadow-2xl transition-shadow"
        >
          <div
            className={`${item.bg} p-4 rounded-full flex-shrink-0 flex items-center justify-center`}
          >
            <img src={item.icon} alt={item.text} className="w-9 h-9" />
          </div>
          <p className="text-gray-800 font-medium text-base font-lora lg:text-lg">
            {item.text}
          </p>
        </div>
      ))}
    </div>

    {/* For 500px - 1023px */}
    <div className="text-center p-6">
      <p className="text-6xl font-semibold font-karla hidden min-[500px]:block">
        Our Values
      </p>
    </div>
    <div className="hidden sm:grid sm:grid-cols-2 sm:gap-6 lg:hidden">
      {valueCards.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-shadow"
        >
          <div className={`${item.bg} p-4 rounded-full mb-4`}>
            <img src={item.icon} alt={item.text} className="w-9 h-9" />
          </div>
          <p className="text-gray-800 font-medium text-base font-lora">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
);

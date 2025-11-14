"use client";
import { Copyright } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const current = new Date();

  const footer_links = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Solutions", link: "/solutions" },
    { id: 5, title: "About Us", link: "/aboutus" },
    { id: 4, title: "Our Products", link: "/products/appdeploy" },
  ];

  const Services = [
    { id: 2, title: "Opsly", link: "/products/opsly" },
    { id: 1, title: "AppDeploy", link: "/products/appdeploy" },
    { id: 4, title: "ClarityPath", link: "/products/claritypath" },
    { id: 3, title: "AI Caption Studio", link: "/products/aicaptionstudio" },
  ];

  return (
    <footer className="mx-auto bg-main-dark relative overflow-hidden">
      
      {/* FIXED BACKGROUND WRAPPER */}
      <div className="absolute h-full w-full flex justify-center items-center text-4xl -z-10 pointer-events-none">
        <img src="/images/home/footerbg.png" alt="" className="max-w-[80%]" />
      </div>

      <div className="xl:px-16 p-5 pt-5 pb-1 z-10 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 px-3 justify-center">
          <div className="py-2">
            <div className="w-[70%] lg:w-[40%] m-auto md:m-1 relative overflow-visible">
              <Link href="/">
                <img
                  src="/logo/logo.png"
                  alt="Logo - Scotitech"
                  loading="lazy"
                  className="cursor-pointer w-[100%] h-auto"
                />
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center md:justify-end text-[30px] my-auto pt-7 z-10">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/50 overflow-hidden"
            >
              <img
                src="/logo/social/whatsapp.png"
                alt="whatsapp"
                className="h-[40px] border-8 border-white/10 rounded-full"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/50 overflow-hidden"
            >
              <img
                src="/logo/social/instagram.png"
                alt="instagram"
                className="h-[40px] border-8 border-white/10 p-1"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/50 overflow-hidden"
            >
              <img
                src="/logo/social/linkedin.png"
                alt="linkedin"
                className="h-[40px] border-8 border-white/10 p-1"
              />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/50 overflow-hidden"
            >
              <img
                src="/logo/social/facebook.png"
                alt="facebook"
                className="h-[40px] border-8 border-white/10 p-1"
              />
            </a>
          </div>
        </div>

        {/* Line */}
        <div className="bg-white/80 relative h-0.5 my-7">
          <div className="absolute left-0 bg-gradient-to-r from-main to-transparent w-[40%] h-1"></div>
          <div className="absolute right-0 bg-gradient-to-l from-main to-transparent w-[40%] h-1"></div>
        </div>

        <div className="grid grid-cols-1 min-[1047px]:grid-cols-[30%_70%] text-sm text-white min-[570px]:text-white/80 my-10">
          
          {/* About + Links */}
          <div className="w-[80%] z-10 hidden min-[1047px]:block">
            <h5 className="font-bold pb-3 font-karla">Mentorship, and Social Impact</h5>
            <p className="font-lora">
              At ScotiTech, we believe innovation creates more value when shared.
              Our founder mentors early-stage entrepreneurs through NASSCOM,
              Startup India, and The Mentoring Club.
            </p>

            <div className="pt-6 font-karla gap-8 flex">
              <Link href="/privacy-policy">
                <p className="hover:text-white cursor-pointer">Privacy Policy</p>
              </Link>

              <Link href="/terms-and-conditions">
                <p className="hover:text-white cursor-pointer">Terms and Conditions</p>
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div className="mt-5 min-[1047px]:mt-0 grid grid-cols-2 min-[570px]:grid-cols-3 min-[700px]:grid-cols-[25%_25%_25%_25%] text-justify">
            
            {/* Quick Links */}
            <div className="z-10 max-[570px]:mx-auto">
              <h5 className="font-semibold pb-3 font-karla">Quick Links</h5>
              <ul>
                {footer_links.map((item) => (
                  <li key={item.id} className="my-1.5">
                    <Link
                      href={item.link}
                      className="duration-300 hover:text-white font-lora font-medium cursor-pointer"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="z-10 max-[570px]:mx-auto">
              <h5 className="font-semibold pb-3 font-karla">Our Products</h5>
              <ul>
                {Services.map((item) => (
                  <li key={item.id} className="my-1.5">
                    <Link
                      href={item.link}
                      className="duration-300 hover:text-white font-lora font-medium cursor-pointer"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="max-[700px]:hidden z-10">
              <h5 className="font-semibold font-karla pb-3">Contact Us</h5>
              <div className="w-[85%]">
                <a href="tel:+441698708203">
                  <p className="font-karla">Phone no:</p>
                  <p className="font-lora">+44 (0) 1698 708203</p>
                </a>
                <a href="mailto:info@scotitech.com">
                  <p className="font-karla mt-2">Email:</p>
                  <p className="font-lora">info@scotitech.com</p>
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="max-[570px]:hidden pb-3 z-10 max-w-[237px]">
              <h5 className="font-semibold pb-3 font-karla">Address</h5>
              <p className="font-lora">
                Eurocentral Scotland, 2 Parklands Way Maxim 1, Maxim Business
                Park, 1st, Motherwell ML1 4WR, United Kingdom
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Address */}
        <div className="w-full min-[570px]:hidden z-10">
          <div className="bg-white/80 relative h-0.5 my-7">
            <div className="absolute left-0 bg-gradient-to-r from-main to-transparent w-[40%] h-1"></div>
            <div className="absolute right-0 bg-gradient-to-l from-main to-transparent w-[40%] h-1"></div>
          </div>

          <div className="max-w-[280px] mx-auto text-white z-10">
            <h5 className="font-semibold pb-3 font-karla">Address</h5>
            <p className="font-lora">
              Eurocentral Scotland, 2 Parklands Way Maxim 1, Maxim Business Park
            </p>
            <p className="mt-1 font-lora">+44 (0) 1698 708203</p>
            <p className="font-lora">info@scotitech.com</p>
          </div>
        </div>

        {/* Mobile privacy links */}
        <div className="pt-6 lg:hidden font-karla gap-3 flex justify-center text-[14px] z-10">
          <Link href="/privacy-policy">
            <p className="cursor-pointer">Privacy Policy</p>
          </Link>

          <Link href="/terms-and-conditions">
            <p className="cursor-pointer">Terms and Conditions</p>
          </Link>
        </div>

        {/* Line */}
        <div className="bg-white/80 relative h-0.5 my-4">
          <div className="absolute left-0 bg-gradient-to-r from-main to-transparent w-[40%] h-1"></div>
          <div className="absolute right-0 bg-gradient-to-l from-main to-transparent w-[40%] h-1"></div>
        </div>

        {/* Copyright */}
     {/* Copyright */}
{/* Copyright + Powered By */}
<div className="text-white z-10 mb-6 hidden md:block">

  {/* DESKTOP VERSION: center + right */}
  <div className="hidden md:flex items-center w-full px-4 relative">

    {/* CENTER: Copyright */}
    <div className="absolute left-1/2 -translate-x-1/2 font-lora text-sm flex items-center gap-1">
      <span>Copyright</span>
      <Copyright className="size-3.5 inline" />
      <span>{new Date().getFullYear()} ScotiTech Solutions, All Rights Reserved.</span>
    </div>

    {/* RIGHT: Powered By */}
    <div className="ml-auto flex items-center font-karla text-sm breathe">
      <span>Powered by</span>
      <a
        href="https://www.spacelinkers.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="ml-1 text-[#F58634] font-bold cursor-pointer">
          Spacelinkers Infotech
        </span>
      </a>
    </div>
  </div>

  {/* MOBILE VERSION (same as before) */}
 



  </div>

</div>
{/* MOBILE VERSION */}
<div className="md:hidden text-center">
  
  {/* Full copyright in ONE LINE */}
  <div className="flex justify-center  items-center font-lora text-sm leading-relaxed flex-wrap gap-1 text-[12px]">
    <span className="  ">Copyright</span>
    <Copyright className="size-3 inline" />
    <span className="inline">
      {new Date().getFullYear()} ScotiTech Solutions, All Rights Reserved.
    </span>
  </div>

  {/* Powered by stays same */}
  <div className="flex justify-center items-center mt-2 font-karla text-sm breathe">
    <span>Powered by</span>
    <a
      href="https://www.spacelinkers.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="ml-1 text-[#F58634] font-bold cursor-pointer">
        Spacelinkers Infotech
      </span>
    </a>
  </div>

</div>
  <style>{`
        @keyframes breathe {
          0% { transform: scale(1); }
          50% { transform: scale(1.06); }
          100% { transform: scale(1); }
        }
        .breathe {
          animation: breathe 8s ease-in-out infinite;
        }
      `}</style>

    </footer>
  );
};

export default Footer;

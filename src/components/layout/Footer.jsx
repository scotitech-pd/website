"use client";
import { Copyright } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const current = new Date();

  const footer_links = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Solutions",
      link: "/solutions",
    },
    {
      id: 5,
      title: "About us",
      link: "/about",
    },
    {
      id: 4,
      title: "Our Products",
      link: "/ourproducts",
    },
  ];

  const Services = [
    {
      id: 2,
      title: "Opsly",
      link: "/opsly",
    },
    {
      id: 1,
      title: "AppDeploy",
      link: "/appdeploy",
    },
    {
      id: 4,
      title: "Clarity Path",
      link: "/claritypath",
    },
    {
      id: 3,
      title: "AI Caption Studio",
      link: "/aicaptionstudio",
    },
  ];

  return (
    <footer className="mx-auto bg-main-dark relative overflow-hidden">
      <div className="absolute h-full w-full flex justify-center items-center text-4xl -z-0">
        <img src="/images/home/footerbg.png" alt="" className="max-w-[80%]" />
      </div>

      <div className="xl:px-16 p-5 pt-5 pb-1 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 px-3  justify-center">
          <div className="py-2">
            <div className=" w-[70%] lg:w-[40%] m-auto md:m-1 relative overflow-visible">
              <Link href="/">
                <img
                  src="/logo/logo.png"
                  alt="Logo - Scotitech"
                  loading="lazy"
                  className="cursor-pointer w-[100%] h-auto "
                />
              </Link>
            </div>
          </div>
          <div className="flex gap-6 justify-center md:justify-end text-[30px] my-auto pt-7 z-0">
            <a
              href="https://wa.me/"
              target="_blank"
              className="rounded-full bg-white/50 overflow-hidden "
              rel="noopener noreferrer"
            >
              <img
                src="/logo/social/whatsapp.png"
                alt="whatsapp"
                className=" h-[40px] border-8 border-white/10  rounded-full"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/50 overflow-hidden "
            >
              <img
                src="/logo/social/instagram.png"
                alt="instagram"
                className=" h-[40px] border-8 border-white/10 p-1"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/"
              target="_blank"
              className="rounded-full bg-white/50 overflow-hidden "
              rel="noopener noreferrer"
            >
              <img
                src="/logo/social/linkedin.png"
                alt="linkedin"
                className=" h-[40px] border-8 border-white/10 p-1"
              />
            </a>
            <a
              href="https://www.facebook.com/"
              className="rounded-full bg-white/50 overflow-hidden "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/logo/social/facebook.png"
                alt="facebook"
                className=" h-[40px] border-8 border-white/10 p-1"
              />
            </a>
          </div>
        </div>

        {/* For Line */}
        <div className="bg-white/80 relative h-0.5 my-7">
          <div className="absolute left-0 bg-gradient-to-r from-main to-transparent w-[40%] h-1"></div>
          <div className="absolute right-0 bg-gradient-to-l  from-main to-transparent w-[40%] h-1"></div>
        </div>

        <div className="grid grid-cols-1 min-[1047px]:grid-cols-[30%_70%] text-sm text-white min-[570px]:text-white/80 my-10">
          <div className="w-[80%] z-0 hidden min-[1047px]:block">
            <h5 className=" text font-bold pb-3 font-Montserrat">About us</h5>
            <p className="text-[13px]">
              ScotiTech was founded on one simple belief: technology should
              empower, not overwhelm. We started with a self-sponsored idea and
              have grown into a company building lean, simple tools that help
              teams and creators worldwide focus on what matters.
            </p>
            <p className="mt-1 min-[1047px]:mt-3">
              Security & Compliance Statement
            </p>
          </div>

          {/* Services and Address Block */}
          <div className="m t-5 min-[1047px]:mt-0 grid grid-cols-2 min-[570px]:grid-cols-3 min-[700px]:grid-cols-[25%_25%_25%_25%] text-justify">
            {/* Navigation */}
            <div className="z-0 max-[570px]:mx-auto">
              <h5 className=" text font-semibold pb-3">Quick Links</h5>
              <ul className=" w-full ml-auto">
                {footer_links.map((item, id) => {
                  return (
                    <li key={id} className="my-1.5 ">
                      <Link
                        href={item.link}
                        className="duration-300 hover:text-white font-medium"
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Services */}
            <div className="z-0 max-[570px]:mx-auto">
              <h5 className=" text font-semibold pb-3">Our Products</h5>
              <ul className=" w-full ml-auto">
                {Services.map((item, id) => {
                  return (
                    <li key={id} className="m-1.5 ">
                      <Link
                        href={item.link}
                        className="duration-300 hover:text-white font-medium"
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact us */}
            <div className="max-[700px]:hidden z-0">
              <h5 className="text font-semibold pb-3">Contact us</h5>
              <div className="w-[85%] ml-[7%] md:ml-0">
                <a href="tel:+">
                  {" "}
                  <div className="md:flex flex-col">
                    <p className="-mb-0.5">Phone no: </p>
                    <p>+44 (0) 1698 708203</p>
                  </div>
                </a>
                <a href="tel:+">
                  {" "}
                  <div className="md:flex flex-col md:mt-1.5">
                    <p className="-mb-0.5">Mobile no: </p>
                    <p>+44 (0) 7459 444274</p>
                  </div>
                </a>
                <a href="mailto:info@spacelinkers.com">
                  {" "}
                  <div className="md:flex flex-col  md:mt-1.5">
                    <p className="-mb-0.5">Email:</p>
                    <p>info@scotitech.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="max-[570px]:hidden pb-3 z-0 max-w-[237px]">
              <h5 className="text font-semibold pb-3">Address</h5>
              <p className="w-[90%] text-left">
                Eurocentral Scotland, 2 Parklands Way Maxim 1, Maxim Business
                Park, 1st, Motherwell ML1 4WR, United Kingdom
              </p>
            </div>
          </div>
        </div>

        <div className="w-full min-[570px]:hidden">
          {/* For Line */}
          <div className="bg-white/80 relative h-0.5 my-7">
            <div className="absolute left-0 bg-gradient-to-r from-main to-transparent w-[40%] h-1"></div>
            <div className="absolute right-0 bg-gradient-to-l  from-main to-transparent w-[40%] h-1"></div>
          </div>
          <div className="max-w-[280px] mx-auto ">
            <div className="flex">
              <h5 className="text font-semibold pb-3">Address</h5>
              <div></div>
            </div>
            <p className="text-left">
              Eurocentral Scotland, 2 Parklands Way Maxim 1, Maxim Business
              Park, 1st, Motherwell ML1 4WR, United Kingdom
            </p>
            <p className="mt-1">+44 (0) 1698 708203</p>
            <p>info@scotitech.com</p>
          </div>
        </div>

        {/* For Line */}
        <div className="bg-white/80 relative h-0.5 my-7">
          <div className="absolute left-0 bg-gradient-to-r from-main to-transparent w-[40%] h-1"></div>
          <div className="absolute right-0 bg-gradient-to-l  from-main to-transparent w-[40%] h-1"></div>
        </div>

        {/* Right reserved */}
        <div className="relative text-sm h-fit mb-5">
          <div className="flex items-center justify-center relative h-fit">
            <div className="text-center">
              Copyright <Copyright className="mx-1 size-3.5 inline" /> 2025 ScotiTech
              Solutions.{" "}
              <span className="max-[415]:block"> All Rights Reserved.</span>
            </div>
          </div>

          <div className="min-[790px]:hidden flex justify-center items-center mt-1">
            Powered by
            <Link href="/">
              <p className="cursor-pointer text-[#F58634] ml-1">Spacelinkers</p>{" "}
            </Link>
          </div>

          <div className="hidden min-[790px]:flex absolute right-0 top-0">
            Powered by
            <Link href="/">
              <p className="cursor-pointer text-[#F58634] ml-1">Spacelinkers</p>{" "}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

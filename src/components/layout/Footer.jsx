"use client";
import { Copyright, Instagram, Facebook, Linkedin } from "lucide-react";
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

          {/* UPDATED SOCIAL ICONS */}
          <div className="flex gap-6 justify-center md:justify-end text-[30px] my-auto pt-7 z-10">
            {/* WHATSAPP (IMAGE KEPT) */}
            <a
              href="https://wa.me/447424331001"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/50 overflow-hidden hover:scale-110 transition-all ease-in-out duration-300"
            >
              <div className="h-[40px] w-[40px] flex items-center justify-center border-8 border-white/10 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 509 511.514"
                  className="w-[100%] h-[100%]"
                  fill="#fff"
                >
                  <path d="M434.762 74.334C387.553 26.81 323.245 0 256.236 0h-.768C115.795.001 2.121 113.696 2.121 253.456l.001.015a253.516 253.516 0 0033.942 126.671L0 511.514l134.373-35.269a253.416 253.416 0 00121.052 30.9h.003.053C395.472 507.145 509 393.616 509 253.626c0-67.225-26.742-131.727-74.252-179.237l.014-.055zM255.555 464.453c-37.753 0-74.861-10.22-107.293-29.479l-7.72-4.602-79.741 20.889 21.207-77.726-4.984-7.975c-21.147-33.606-32.415-72.584-32.415-112.308 0-116.371 94.372-210.743 210.741-210.743 56.011 0 109.758 22.307 149.277 61.98a210.93 210.93 0 0161.744 149.095c0 116.44-94.403 210.869-210.844 210.869h.028zm115.583-157.914c-6.363-3.202-37.474-18.472-43.243-20.593-5.769-2.121-10.01-3.202-14.315 3.203-4.305 6.404-16.373 20.593-20.063 24.855-3.69 4.263-7.401 4.815-13.679 1.612-6.278-3.202-26.786-9.883-50.899-31.472a192.748 192.748 0 01-35.411-43.867c-3.712-6.363-.404-9.777 2.82-12.873 3.224-3.096 6.363-7.381 9.48-11.092a41.58 41.58 0 006.357-10.597 11.678 11.678 0 00-.508-11.09c-1.718-3.18-14.444-34.357-19.534-47.06-5.09-12.703-10.37-10.603-14.272-10.901-3.902-.297-7.911-.19-12.089-.19a23.322 23.322 0 00-16.964 7.911c-5.707 6.298-22.1 21.673-22.1 52.849s22.671 61.249 25.852 65.532c3.182 4.284 44.663 68.227 108.288 95.649 15.099 6.489 26.891 10.392 36.053 13.403a87.504 87.504 0 0025.216 3.718c4.905 0 9.82-.416 14.65-1.237 12.174-1.782 37.453-15.291 42.776-30.073s5.303-27.57 3.711-30.093c-1.591-2.524-5.704-4.369-12.088-7.615l-.038.021z" />
                </svg>
              </div>
            </a>

            {/* INSTAGRAM LUCIDE */}
            <a
              href="https://www.instagram.com/scotitechsolutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/50 p-2 hover:scale-110 transition-all ease-in-out duration-300"
            >
              <Instagram className="text-white" size={28} />
            </a>

            {/* LINKEDIN LUCIDE */}
            <a
              href="https://www.linkedin.com/company/scotitech-ltd/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/50 p-2 hover:scale-110 transition-all ease-in-out duration-300"
            >
              <Linkedin className="text-white" size={28} />
            </a>

          </div>
        </div>

        {/* Line */}
        <div className="bg-white/80 relative h-0.5 my-7">
          <div className="absolute left-0 bg-gradient-to-r from-main to-transparent w-[40%] h-1"></div>
          <div className="absolute right-0 bg-gradient-to-l from-main to-transparent w-[40%] h-1"></div>
        </div>

        {/* About + Links */}
        <div className="grid grid-cols-1 min-[1047px]:grid-cols-[30%_70%] text-sm text-white min-[570px]:text-white/80 my-10">
          <div className="w-[80%] z-10 hidden min-[1047px]:block">
            <h5 className="font-bold pb-3 font-karla">
              Mentorship, and Social Impact
            </h5>
            <p className="font-lora">
              At ScotiTech, we believe innovation creates more value when
              shared. Our founder mentors early-stage entrepreneurs through
              NASSCOM, Startup India, and The Mentoring Club.
            </p>

            <div className="pt-6 font-karla gap-8 flex">
              <Link href="/privacy-policy">
                <p className="hover:text-white cursor-pointer">
                  Privacy Policy
                </p>
              </Link>

              <Link href="/terms-and-conditions">
                <p className="hover:text-white cursor-pointer">
                  Terms and Conditions
                </p>
              </Link>
            </div>
          </div>

          {/* LINKS SECTION */}
          <div className="mt-5 min-[1047px]:mt-0 grid grid-cols-2 min-[570px]:grid-cols-3 min-[700px]:grid-cols-[25%_25%_25%_25%] text-justify">
            {/* QUICK LINKS */}
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

            {/* PRODUCTS */}
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

            {/* CONTACT */}
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

            {/* ADDRESS */}
            <div className="max-[570px]:hidden pb-3 z-10 max-w-[237px]">
              <h5 className="font-semibold pb-3 font-karla">Address</h5>
              <p className="font-lora">
                Eurocentral Scotland, 2 Parklands Way Maxim 1, Maxim Business
                Park, 1st, Motherwell ML1 4WR, United Kingdom
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE ADDRESS */}
        <div className="w-full min-[570px]:hidden z-10">
          <div className="bg-white/80 relative h-0.5 my-7">
            <div className="absolute left-0 bg-gradient-to-r from-main to-transparent w-[40%] h-1"></div>
            <div className="absolute right-0 bg-gradient-to-l from-main to-transparent w-[40%] h-1"></div>
          </div>

          <div className="max-w-[280px] mx-auto text-white z-10">
            <h5 className="font-semibold pb-3 font-karla">Address</h5>
            <p className="font-lora">
              Eurocentral Scotland, 2 Parklands Way Maxim 1, Maxim Business
              Park, 1st, Motherwell ML1 4WR, United Kingdom{" "}
            </p>
            <p className="mt-1 font-lora">+44 (0) 1698 708203</p>
            <p className="font-lora">info@scotitech.com</p>
          </div>
        </div>

        {/* MOBILE PRIVACY */}
        <div className="pt-6 lg:hidden font-karla gap-3 flex justify-center text-[14px] z-10">
          <Link href="/privacy-policy">
            <p className="cursor-pointer">Privacy Policy</p>
          </Link>

          <Link href="/terms-and-conditions">
            <p className="cursor-pointer">Terms and Conditions</p>
          </Link>
        </div>

        {/* LINE */}
        <div className="bg-white/80 relative h-0.5 my-4">
          <div className="absolute left-0 bg-gradient-to-r from-main to-transparent w-[40%] h-1"></div>
          <div className="absolute right-0 bg-gradient-to-l from-main to-transparent w-[40%] h-1"></div>
        </div>

        {/* COPYRIGHT DESKTOP */}
        <div className="text-white z-10 mb-6 hidden md:block">
          <div className="hidden md:flex items-center w-full px-4 relative">
            {/* CENTER */}
            <div className="absolute left-1/2 -translate-x-1/2 font-lora text-sm flex items-center gap-1">
              <span>Copyright</span>
              <Copyright className="size-3.5 inline" />
              <span>
                {new Date().getFullYear()} ScotiTech Solutions, All Rights
                Reserved.
              </span>
            </div>

            {/* RIGHT */}
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
        </div>

        {/* COPYRIGHT MOBILE */}
        <div className="md:hidden text-center">
          <div className="flex justify-center items-center font-lora text-sm leading-relaxed flex-wrap gap-1 text-[12px]">
            <span>Copyright</span>
            <Copyright className="size-3 inline" />
            <span>
              {new Date().getFullYear()} ScotiTech Solutions, All Rights
              Reserved.
            </span>
          </div>

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
      </div>
    </footer>
  );
};

export default Footer;

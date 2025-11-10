"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { useModal } from "@/components/ModalContext";   // ✅ ADDED

const Navbar = () => {
  const pathname = usePathname();
  const { setShowModal } = useModal();   // ✅ ADDED

  const [islength, setlength] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const listentotop = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    setlength(!(winScroll > 10 ? false : true));
  };

  useEffect(() => {
    window.addEventListener("scroll", listentotop);
  }, []);

  useEffect(() => {
    setToggle(false);
    setShowProductsDropdown(false);
    setMobileProductsOpen(false);
  }, [pathname]);

  const products = [
    { id: 1, title: "AppDeploy", link: "/products/appdeploy", desc: "Effortless iOS App Distribution", icon: "/images/home/appdeploy-logo.png" },
    { id: 2, title: "Opsly", link: "/products/opsly", desc: "All-in-One Operations Platform", icon: "/images/home/opsly-logo.png" },
    { id: 3, title: "ClarityPath", link: "/products/claritypath", desc: "Private Decision-Support App", icon: "/images/home/clarity-logo.png" },
    { id: 4, title: "Elder Connect+", link: "/products/elderconnect", desc: "App for Elders", icon: "/images/home/elder-logo.png" },
    { id: 5, title: "AI Caption Studio", link: "/products/aicaptionstudio", desc: "Real-time AI Caption", icon: "/images/home/ai-logo.png" }
  ];

  return (
    <div className={islength ? "pb-[80px] bg-main-dark" : "pb-[70px] bg-main-dark"}>

      {/* MOBILE OVERLAY */}
      <div
        className="black_overlay w-full h-full fixed lg:hidden z-40 duration-500 mt-[-10px]"
        onClick={() => setToggle(false)}
        style={{ opacity: toggle ? 1 : 0, visibility: toggle ? "visible" : "hidden" }}
      >
        {/* MOBILE NAV */}
        <nav
          onClick={(e) => e.stopPropagation()}
          className={"font-sans w-full h-fit bg-main-dark absolute duration-300 " + (toggle ? "top-[0%]" : "top-[-100%]")}
        >
          <div className={(islength ? "mt-[80px]" : "mt-[70px]") + " h-fit py-10 flex flex-col items-end justify-start px-6"}>
            
            <ul className="text-[16px] font-semibold w-full font-karla text-right">
              {nav_links.map((item, id) => {
                if (item.title === "Our Products") {
                  return (
                    <li key={id} className="m-4 text-right">
                      <div
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        className={`duration-300 px-4 py-1 rounded-lg cursor-pointer flex items-center justify-end gap-2 ${
                          pathname.includes("/ourproducts") && "border-white border-2"
                        }`}
                      >
                        {item.title}
                        <ChevronDown className={`w-4 h-4 duration-300 ${mobileProductsOpen && "rotate-180"}`} />
                      </div>

                      {/* MOBILE DROPDOWN */}
                      <div className={`overflow-hidden transition-all duration-300 ${mobileProductsOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                        <div className="bg-white/10 rounded-lg p-2 space-y-2">
                          {products.map(product => (
                            <Link
                              key={product.id}
                              href={product.link}
                              className="block px-4 py-2 rounded-lg hover:bg-white/20 duration-300 text-right"
                            >
                              <div className="font-semibold text-sm">{product.title}</div>
                              <div className="text-xs text-gray-300">{product.desc}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={id} className="m-4 text-right">
                    <Link href={item.link} className={`px-4 py-1 rounded-lg duration-300 ${item.link === pathname && "border-white border-2"}`}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}

              {/* ✅ MOBILE TALK TO SALES BUTTON */}
              <li className="m-4 text-right">
                <button
                  onClick={() => {
                    setShowModal(true);
                    setToggle(false);
                  }}
                  className="bg-white/20 cursor-pointer px-5 py-2 rounded-3xl text-white border border-white duration-500 font-medium"
                >
                  Talk to Sales
                </button>
              </li>

            </ul>
          </div>
        </nav>
      </div>

      {/* DESKTOP NAVBAR */}
      <nav className={(islength ? "h-[80px]" : "h-[70px]") + " w-full fixed bg-main-dark duration-500 z-40 shadow-2xl"}>
        <div className="h-full mx-auto flex items-center justify-between pl-2 lg:px-5 xl:px-5">

          {/* LOGO */}
          <div className="max-w-[180px] lg:pl-1">
            <Link href="/">
              <img src="/logo/logo.png" alt="Logo" className="cursor-pointer w-[100%]" />
            </Link>
          </div>

          {/* DESKTOP LINKS */}
          <ul className="list-none ml-auto gap-5 text-[15px] hidden lg:flex font-karla">
            {nav_links.map((item, id) => {
              if (item.title === "Our Products") {
                return (
                  <li
                    key={id}
                    className="relative flex items-center my-auto"
                    onMouseEnter={() => setShowProductsDropdown(true)}
                    onMouseLeave={() => setShowProductsDropdown(false)}
                  >
                    <div
                      className={`px-2 py-1 rounded-lg cursor-pointer flex items-center gap-1 leading-none duration-300 ${
                        pathname.includes("/ourproducts") && "border-white border-2"
                      }`}
                    >
                      {item.title}
                      <ChevronDown className={`w-4 h-4 duration-300 ${showProductsDropdown && "rotate-180"}`} />
                    </div>

                    {/* DESKTOP DROPDOWN */}
                    <div
                      className={`absolute right-0 top-12 ${showProductsDropdown ? "opacity-100 visible" : "opacity-0 invisible"} duration-300`}
                      style={{ marginRight: "20px" }}
                    >
                      <div className="w-[60vw] max-w-[900px] bg-[#0f0b14] border border-[#2d1b3c] rounded-b-2xl shadow-[0_12px_45px_rgba(0,0,0,0.6)] pt-6 pb-8 px-8">

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          {products.map(product => (
                            <Link
                              key={product.id}
                              href={product.link}
                              onClick={() => setShowProductsDropdown(false)}
                              className={`group p-4 rounded-xl border border-[#3b2950] bg-[#1a1122] hover:bg-[#261832] duration-200 cursor-pointer relative
                                ${product.link === pathname && "border-[#641171] bg-[#2a1836]"}`}
                            >
                              <div className="flex items-center justify-between mb-3">
                                <img src={product.icon} alt={product.title} className="w-10 h-10 object-contain rounded-lg" />
                                <ArrowRight className="w-5 h-5 text-white opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                              </div>

                              <div className="text-white text-base font-semibold tracking-wide">{product.title}</div>
                              <div className="text-sm text-gray-300 mt-1">{product.desc}</div>
                            </Link>
                          ))}
                        </div>

                      </div>
                    </div>

                  </li>
                );
              }

              return (
                <li key={id} className="my-auto">
                  <Link href={item.link} className={`px-2 py-1 rounded-lg duration-300 ${item.link === pathname && "border-white border-2"}`}>
                    {item.title}
                  </Link>
                </li>
              );
            })}

            {/* ✅ DESKTOP TALK TO SALES BUTTON */}
            <li>
              <button
                onClick={() => setShowModal(true)}
                className="bg-white/20 cursor-pointer px-5 py-1.5 rounded-3xl text-white border border-white duration-500 font-medium"
              >
                Talk to Sales
              </button>
            </li>

          </ul>

          {/* MOBILE TOGGLE */}
          <div className="cursor-pointer lg:hidden mr-4" onClick={() => setToggle(prev => !prev)}>
            {toggle ? <X className="text-2xl text-white" /> : <Menu className="text-4xl text-white" />}
          </div>

        </div>
      </nav>

    </div>
  );
};

const nav_links = [
  { id: 1, title: "Home", link: "/" },
  { id: 3, title: "Solutions", link: "/solutions" },
  { id: 2, title: "About Us", link: "/aboutus" },
  { id: 5, title: "Our Products", link: "/ourproducts" },
  { id: 6, title: "Contact", link: "/contact" }
];

export default Navbar;

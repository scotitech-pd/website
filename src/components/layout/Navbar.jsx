"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useModal } from "../ModalContext";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [islength, setlength] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const listentotop = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > 10) setlength(false);
    else setlength(true);
  };

  useEffect(() => {
    setToggle(false);
    window.addEventListener("scroll", listentotop);
  }, []);

  useEffect(() => {
    setToggle(false);
    setShowProductsDropdown(false);
    setMobileProductsOpen(false);
  }, [pathname]);

  const products = [
    {
      id: 1,
      title: "AppDeploy",
      link: "products/appdeploy",
      desc: "Effortless iOS App Distribution",
    },
    {
      id: 2,
      title: "Opsly",
      link: "/opsly",
      desc: "All-in-One Operations Platform",
    },
    {
      id: 3,
      title: "ClarityPath",
      link: "/claritypath",
      desc: "Private Decision-Support App",
    },
    {
      id: 4,
      title: "Elder Connect+",
      link: "/elderconnect",
      desc: "App for Elders",
    },
    {
      id: 5,
      title: "AI Caption Studio",
      link: "/aicaptionstudio",
      desc: "Real-time AI Caption",
    },
  ];

  return (
    <div className={islength ? "pb-[80px]" : "pb-[70px]"}>
      <div
        className={
          "black_overlay w-full h-full fixed lg:hidden z-40 duration-500 mt-[-10px]"
        }
        onClick={() => setToggle(false)}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        {/* Mobile Navbar */}
        <nav
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={" font-sans w-full h-fit bg-main-dark absolute duration-300 ".concat(
            toggle ? "top-[0%]" : "top-[-100%]"
          )}
        >
          <div
            className={(islength ? "mt-[80px]" : "mt-[70px]").concat(
              " h-fit py-10 flex flex-col items-center justify-center"
            )}
          >
            <div className="flex w-full">
              <ul className="text-[16px] pr-5 text-center h-fit mx-auto mt-auto font-semibold w-full">
                {nav_links.map((item, id) => {
                  if (item.title === "Our Products") {
                    return (
                      <li key={id} className="m-4">
                        <div
                          onClick={() =>
                            setMobileProductsOpen(!mobileProductsOpen)
                          }
                          className={`duration-300 px-4 py-1 rounded-lg cursor-pointer flex items-center justify-center gap-2 ${
                            pathname.includes("/ourproducts") &&
                            "border-white border-2 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                          }`}
                        >
                          {item.title}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              mobileProductsOpen ? "rotate-180" : ""
                            }`}
                          />
                        </div>

                        {/* Mobile Dropdown */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            mobileProductsOpen
                              ? "max-h-[500px] opacity-100 mt-2"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="bg-white/10 rounded-lg p-2 space-y-2">
                            {products.map((product) => (
                              <Link
                                key={product.id}
                                href={product.link}
                                className={`block px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 ${
                                  product.link === pathname &&
                                  "bg-white/30 border border-white/50"
                                }`}
                              >
                                <div className="font-semibold text-sm">
                                  {product.title}
                                </div>
                                <div className="text-xs text-gray-300 mt-0.5">
                                  {product.desc}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </li>
                    );
                  }

                  return (
                    <li key={id} className="m-4">
                      <Link
                        href={item.link}
                        className={`duration-300 px-4 py-1 rounded-lg ${
                          item.link == pathname &&
                          "border-white border-2 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <span
              onClick={() => {
                setToggle(false);
              }}
              className="bg-[#606062] cursor-pointer w-[80%] px-4 py-3 text-center rounded-3xl text-white font-bold duration-500 hover:bg-[#F58634] font-Poppins"
            >
              Talk to Sales
            </span>
          </div>
        </nav>
      </div>

      {/* Desktop Navbar */}
      <nav
        className={(islength ? "h-[80px]" : "h-[70px]").concat(
          " font-sans w-full left-0 top-0 fixed bg-main-dark align-middle duration-500 z-40 shadow-2xl"
        )}
      >
        <div className="h-full mx-auto my-auto flex items-center justify-between pl-2 lg:px-5 xl:px-5">
          <div className="max-w-[180px] lg:pl-1">
            <div className="relative min-w-[175px]">
              <Link
                href="/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <img
                  src="/logo/logo.png"
                  alt="Logo - Scotitech"
                  className="cursor-pointer w-[100%] h-auto"
                  loading="lazy"
                />
              </Link>
            </div>
          </div>

          <ul className="list-none ml-auto gap-4 min-[1050px]:gap-6 text-[15px] 2xl:text-[17px] hidden lg:flex">
            {nav_links.map((item, id) => {
              if (item.title === "Our Products") {
                return (
                  <li
                    key={id}
                    className="my-auto relative"
                    onMouseEnter={() => setShowProductsDropdown(true)}
                    onMouseLeave={() => setShowProductsDropdown(false)}
                  >
                    <div
                      className={`duration-300 px-1.5 py-0.5 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                        pathname.includes("/ourproducts") &&
                        "border-white border-2 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                      }`}
                    >
                      {item.title}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          showProductsDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {/* Desktop Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-[280px] bg-main-dark border border-white/20 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ${
                        showProductsDropdown
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      <div className="p-2">
                        {products.map((product) => (
                          <Link
                            key={product.id}
                            href={product.link}
                            className={`block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 group ${
                              product.link === pathname &&
                              "bg-white/20 border border-white/30"
                            }`}
                          >
                            <div className="font-semibold text-white group-hover:text-white transition-colors">
                              {product.title}
                            </div>
                            <div className="text-xs text-gray-400 mt-0.5 group-hover:text-gray-300 transition-colors">
                              {product.desc}
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Dropdown Arrow */}
                      <div className="absolute -top-2 left-4 w-4 h-4 bg-main-dark border-l border-t border-white/20 transform rotate-45"></div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={id} className="my-auto">
                  <Link
                    href={item.link}
                    className={`duration-300 px-1.5 py-0.5 rounded-lg transition-all ${
                      item.link == pathname &&
                      "border-white border-2 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}

            <li className="bg-white/20 cursor-pointer px-5 py-1.5 rounded-3xl text-white border border-white duration-500 font-medium mx-5 min-[1150px]:mx-10">
              Talk to Sales
            </li>
          </ul>

          {/* Toggle button for mobile navbar */}
          <div
            className="cursor-pointer lg:hidden mr-4"
            onClick={() => (toggle ? setToggle(false) : setToggle(true))}
          >
            {toggle ? (
              <X className="text-2xl font-thin text-white" />
            ) : (
              <Menu className="text-4xl text-white" />
            )}
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
  { id: 6, title: "Contact", link: "/contact" },
];

export default Navbar;

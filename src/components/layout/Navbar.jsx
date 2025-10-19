"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useModal } from "../ModalContext";
import { usePathname } from "next/navigation";
import { Menu, CrossIcon, Cross, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [islength, setlength] = useState(true);
  const [toggle, setToggle] = useState(false);

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
  }, [pathname]);

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
          <div className={(islength ? "mt-[80px]" : "mt-[70px]").concat(" h-fit py-10 flex flex-col items-center justify-center")}>
            <div className="flex w-full ">
              <ul className=" text-[16px] pr-5 text-center h-fit mx-auto mt-auto font-semibold">
                {nav_links.map((item, id) => {
                  return (
                    <li key={id} className="m-4">
                      <Link
                        href={item.link}
                        className={`duration-300  px-4 py-1 rounded-lg ${
                          item.link == pathname && "border-white border-2  shadow-[0_0_15px_rgba(255,255,255,0.5)] "
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

      {/* Navbar Code  */}
      <nav
        className={(islength ? "h-[80px]" : "h-[70px]").concat(
          " font-sans w-full left-0 top-0 fixed bg-main-dark  align-middle duration-500 z-40 shadow-2xl"
        )}
      >
        <div className=" h-full mx-auto my-auto flex items-center justify-between pl-2 lg:px-5 xl:px-5">
          <div className="max-w-[180px] lg:pl-1 ">
            <div className="relative  min-w-[175px]">
              {" "}
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
              return (
                <li key={id} className="my-auto">
                  <Link
                    href={item.link}
                    className={`duration-300 px-1.5 py-0.5 rounded-lg transition-all " ${
                      item.link == pathname && "border-white border-2  shadow-[0_0_15px_rgba(255,255,255,0.5)] "
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <li
            //   onClick={() => setShowModal(true)}
              className="bg-white/20 cursor-pointer px-5 py-1.5 rounded-3xl text-white border border-white duration-500 font-medium mx-5 min-[1150px]:mx-10"
            >
              Talk to Sales
            </li>
          </ul>

          {/* Toogle button for mobile navbar */}
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
  { id: 3, title: "Solution", link: "/solution" },
  { id: 2, title: "About Us", link: "/about-us" },
  { id: 5, title: "Our Products", link: "/ourproducts" },
  { id: 6, title: "Contact", link: "/contact" },
];
export default Navbar;

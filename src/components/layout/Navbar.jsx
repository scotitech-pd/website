"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useModal } from "@/components/ModalContext";

const navLinks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Products", link: "/products" },
  { id: 3, title: "Insights", link: "/insights" },
  { id: 4, title: "About Us", link: "/aboutus" },
  { id: 5, title: "Media", link: "/media" },
  { id: 6, title: "Contact", link: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { setShowModal } = useModal();

  const [isAtTop, setIsAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const listenToTop = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      setIsAtTop(winScroll <= 10);
    };

    window.addEventListener("scroll", listenToTop);
    return () => window.removeEventListener("scroll", listenToTop);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActiveLink = (link) => {
    if (link === "/products" || link === "/insights") {
      return pathname.startsWith(link);
    }
    return pathname === link;
  };

  return (
    <div className={isAtTop ? "pb-[80px] bg-main-dark" : "pb-[70px] bg-main-dark"}>
      <div
        className="black_overlay w-full h-full fixed lg:hidden z-[60] duration-500 bg-black/60 backdrop-blur-sm"
        onClick={() => setMenuOpen(false)}
        style={{
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
        }}
      >
        <nav
          onClick={(e) => e.stopPropagation()}
          className={`font-sans w-full max-w-[300px] h-full bg-main-dark absolute right-0 shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full py-16 flex flex-col items-center px-6">
            <ul className="text-lg font-semibold w-full font-karla space-y-6 text-white">
              {navLinks.map((item) => (
                <li key={item.id} className="m-4 text-right">
                  <Link
                    href={item.link}
                    className={`px-4 py-1 rounded-lg duration-300 text-white ${
                      isActiveLink(item.link) ? "border-white border-2" : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}

              <li className="m-4 text-right">
                <button
                  onClick={() => {
                    setShowModal(true);
                    setMenuOpen(false);
                  }}
                  className="bg-white/20 cursor-pointer px-5 py-2 rounded-3xl text-white border border-white duration-500 font-medium"
                >
                  Talk to Our Team
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <nav
        className={(isAtTop ? "h-[80px]" : "h-[70px]") +
          " w-full fixed bg-main-dark transition-all duration-300 z-50 shadow-[0_8px_20px_rgba(15,23,42,0.18)]"}
      >
        <div className="h-full mx-auto flex items-center justify-between pl-2 lg:px-5 xl:px-5">
          <div className="max-w-[180px] lg:pl-1">
            <Link href="/">
              <Image
                src="/logo/logo.png"
                alt="Logo"
                width={180}
                height={45}
                className="cursor-pointer"
              />
            </Link>
          </div>

          <ul className="list-none ml-auto gap-5 text-[15px] hidden lg:flex font-karla text-white">
            {navLinks.map((item) => (
              <li key={item.id} className="my-auto">
                <Link
                  href={item.link}
                  className={`px-2 py-1 rounded-lg duration-300 text-white ${
                    isActiveLink(item.link) ? "border-white border-2" : ""
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}

            <li>
              <button
                onClick={() => setShowModal(true)}
                className="bg-white cursor-pointer px-5 py-1.5 rounded-3xl text-main-dark border border-white duration-500 font-medium hover:bg-slate-100"
              >
                Talk to Our Team
              </button>
            </li>
          </ul>

          <div
            className="cursor-pointer lg:hidden mr-4 z-[70] transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <X className="text-3xl text-white" />
            ) : (
              <Menu className="text-4xl text-white" />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

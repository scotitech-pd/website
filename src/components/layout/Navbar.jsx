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
  { id: 3, title: "Solutions", link: "/solutions" },
  { id: 4, title: "About Us", link: "/aboutus" },
  { id: 5, title: "Contact", link: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { setShowModal } = useModal();

  const [isAtTop, setIsAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      setIsAtTop(winScroll <= 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActiveLink = (link) =>
    link === "/products" ? pathname.startsWith("/products") : pathname === link;

  const announcementHeight = announcementVisible ? "36px" : "0px";
  const navHeight = "64px";

  return (
    <div style={{ paddingTop: `calc(${announcementHeight} + ${navHeight})` }}>
      {/* Announcement bar */}
      <div
        className="w-full fixed top-0 left-0 z-[55] bg-[#0F172A] text-white text-sm overflow-hidden transition-all duration-300"
        style={{ height: announcementHeight }}
      >
        {announcementVisible && (
          <div className="h-full flex items-center justify-center gap-3 px-4">
            <span className="bg-white/15 text-white text-xs font-semibold px-2 py-0.5 rounded-full tracking-wide">
              NEW
            </span>
            <span className="text-white/90 font-karla text-sm">
              AppDeploy + AXOS — both available for rollout.{" "}
              <Link href="/products" className="underline underline-offset-2 hover:text-white transition-colors">
                See what&apos;s ready
              </Link>
            </span>
            <button
              onClick={() => setAnnouncementVisible(false)}
              className="absolute right-4 text-white/60 hover:text-white transition-colors cursor-pointer"
              aria-label="Dismiss"
            >
              <X size={14} />
            </button>
          </div>
        )}
      </div>

      {/* Mobile drawer overlay */}
      <div
        className="black_overlay w-full h-full fixed lg:hidden z-[60] duration-500 bg-black/40"
        onClick={() => setMenuOpen(false)}
        style={{
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
        }}
      >
        <nav
          onClick={(e) => e.stopPropagation()}
          className={`font-sans w-full max-w-[280px] h-full bg-white absolute right-0 shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full pt-20 pb-10 flex flex-col px-8">
            <ul className="text-base font-medium w-full font-karla space-y-1 text-slate-700">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className={`block px-3 py-2.5 rounded-lg transition-colors ${
                      isActiveLink(item.link)
                        ? "bg-slate-100 text-slate-900 font-semibold"
                        : "hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <button
                onClick={() => {
                  setShowModal(true);
                  setMenuOpen(false);
                }}
                className="w-full bg-[#0F172A] cursor-pointer px-5 py-2.5 rounded-lg text-white font-medium font-karla hover:bg-slate-800 transition-colors"
              >
                Talk to Our Team
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Main navbar */}
      <nav
        className="w-full fixed left-0 bg-white transition-all duration-300 z-50"
        style={{
          top: announcementHeight,
          height: navHeight,
          borderBottom: isAtTop ? "1px solid #e2e8f0" : "1px solid #e2e8f0",
          boxShadow: isAtTop ? "none" : "0 1px 12px rgba(15,23,42,0.07)",
        }}
      >
        <div className="h-full max-w-7xl mx-auto flex items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo/logo.png"
                alt="ScotiTech"
                width={160}
                height={40}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop nav links */}
          <ul className="list-none hidden lg:flex items-center gap-1 font-karla text-[14.5px] font-medium text-slate-600">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className={`relative px-3 py-1.5 rounded-md transition-colors hover:text-slate-900 hover:bg-slate-50 ${
                    isActiveLink(item.link)
                      ? "text-slate-900 font-semibold"
                      : ""
                  }`}
                >
                  {item.title}
                  {isActiveLink(item.link) && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#0F172A] rounded-full" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#0F172A] cursor-pointer px-4 py-2 rounded-lg text-white text-[14px] font-medium font-karla hover:bg-slate-800 transition-colors"
            >
              Talk to Our Team
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="cursor-pointer lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors z-[70]"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

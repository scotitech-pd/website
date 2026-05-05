"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useModal } from "@/components/ModalContext";

const navLinks = [
  { id: 1, title: "Products", link: "/products" },
  { id: 2, title: "Insights", link: "/insights" },
  { id: 3, title: "About", link: "/aboutus" },
  { id: 4, title: "Contact", link: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { setShowModal } = useModal();
  const [isAtTop, setIsAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      setIsAtTop(winScroll <= 8);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActiveLink = (link) => pathname === link || pathname.startsWith(`${link}/`);

  return (
    <div className={isAtTop ? "pb-[82px]" : "pb-[74px]"}>
      <div
        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-[3px] lg:hidden"
        onClick={() => setMenuOpen(false)}
        style={{
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
          transition: "opacity 220ms ease",
        }}
      >
        <nav
          onClick={(e) => e.stopPropagation()}
          className={`h-full w-full max-w-[320px] border-l border-white/10 bg-[#0E1116] px-6 py-14 shadow-[0_28px_80px_rgba(0,0,0,0.35)] transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } ml-auto`}
        >
          <ul className="space-y-6 text-right">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className={`font-karla text-lg font-semibold ${
                    isActiveLink(item.link) ? "text-white" : "text-slate-300"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <button
                onClick={() => {
                  setShowModal(true);
                  setMenuOpen(false);
                }}
                className="rounded-full bg-white px-5 py-2.5 font-karla text-sm font-semibold text-[#0E1116] shadow-[0_12px_24px_rgba(0,0,0,0.22)]"
              >
                Talk to sales
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <nav
        className={`fixed z-50 w-full border-b border-white/10 bg-[#0E1116]/95 backdrop-blur-xl transition-all ${
          isAtTop ? "h-[82px]" : "h-[74px] shadow-[0_16px_36px_rgba(0,0,0,0.22)]"
        }`}
      >
        <div className="mx-auto flex h-full max-w-8xl items-center justify-between px-4 min-[500px]:px-10 md:px-20">
          <Link href="/" className="flex items-center" aria-label="ScotiTech home">
            <Image
              src="/logo/logo.png"
              alt="ScotiTech logo"
              width={180}
              height={67}
              className="h-auto w-[150px] min-[450px]:w-[168px]"
              priority
            />
          </Link>

          <ul className="ml-auto hidden items-center gap-6 lg:flex">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className={`rounded-full px-3 py-2 font-karla text-[15px] font-semibold transition-colors ${
                    isActiveLink(item.link)
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => setShowModal(true)}
                className="rounded-full bg-white px-5 py-2.5 font-karla text-sm font-semibold text-[#0E1116] shadow-[0_12px_24px_rgba(0,0,0,0.22)] transition-colors hover:bg-slate-100"
              >
                Talk to sales
              </button>
            </li>
          </ul>

          <button
            className="mr-1 lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="size-7 text-white" />
            ) : (
              <Menu className="size-7 text-white" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useModal } from "@/components/ModalContext";

const productLinks = [
  {
    title: "AppDeploy",
    description: "Private iOS app rollout with redemption-code delivery",
    href: "/products/appdeploy",
    status: "Available · From £79/mo",
    color: "bg-[#EFF6FF] text-[#2563EB]",
    dot: "bg-[#2563EB]",
  },
  {
    title: "AXOS",
    description: "Mail, Calendar, Tasks, Files & AI in one private workspace",
    href: "/products/axos",
    status: "Private evaluation",
    color: "bg-[#ECFDF5] text-[#0F766E]",
    dot: "bg-[#0F766E]",
  },
  {
    title: "ClarityPath",
    description: "Mobile decision-support for complex choices",
    href: "/products/claritypath",
    status: "Included with AXOS",
    color: "bg-[#FEFCE8] text-[#854D0E]",
    dot: "bg-[#B7A84D]",
  },
];

const navLinks = [
  { id: 1, title: "Products", link: "/products", hasMenu: true },
  { id: 2, title: "Insights", link: "/insights" },
  { id: 3, title: "Media", link: "/media" },
  { id: 4, title: "About", link: "/aboutus" },
  { id: 5, title: "Contact", link: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { setShowModal } = useModal();
  const [isAtTop, setIsAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const productMenuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      setIsAtTop(winScroll <= 8);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setProductMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e) => {
      if (productMenuRef.current && !productMenuRef.current.contains(e.target)) {
        setProductMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActiveLink = (link) => pathname === link || pathname.startsWith(`${link}/`);

  return (
    <div className={isAtTop ? "pb-[82px]" : "pb-[74px]"}>
      {/* Mobile overlay */}
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
            {/* Mobile product sub-links */}
            <li>
              <p className="mb-3 text-right font-karla text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Products
              </p>
              <ul className="space-y-3">
                {productLinks.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="block text-right font-karla text-base font-semibold text-slate-300 hover:text-white">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="pt-3">
              <button
                onClick={() => { setShowModal(true); setMenuOpen(false); }}
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
            {navLinks.map((item) =>
              item.hasMenu ? (
                <li key={item.id} className="relative" ref={productMenuRef}>
                  <button
                    onClick={() => setProductMenuOpen((v) => !v)}
                    onMouseEnter={() => setProductMenuOpen(true)}
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-2 font-karla text-[15px] font-semibold transition-colors ${
                      isActiveLink(item.link)
                        ? "bg-white/10 text-white"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.title}
                    <ChevronDown
                      className={`size-3.5 transition-transform ${productMenuOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Product dropdown */}
                  {productMenuOpen && (
                    <div
                      onMouseLeave={() => setProductMenuOpen(false)}
                      className="absolute left-1/2 top-full z-50 mt-3 w-[340px] -translate-x-1/2 overflow-hidden rounded-[1.15rem] border border-white/10 bg-[#0E1116] shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
                    >
                      <div className="p-2">
                        {productLinks.map((p) => (
                          <Link
                            key={p.href}
                            href={p.href}
                            className="group flex items-start gap-3 rounded-[0.85rem] p-3 transition hover:bg-white/[0.06]"
                          >
                            <div className={`mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl ${p.color}`}>
                              <span className={`size-2 rounded-full ${p.dot}`} />
                            </div>
                            <div>
                              <p className="font-karla text-sm font-semibold text-white">
                                {p.title}
                              </p>
                              <p className="mt-0.5 font-lora text-xs leading-5 text-slate-400">
                                {p.description}
                              </p>
                              <span className="mt-1.5 inline-block rounded-full border border-white/10 px-2 py-0.5 font-karla text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                                {p.status}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-white/10 px-4 py-3">
                        <Link
                          href="/products"
                          className="font-karla text-xs font-semibold text-slate-400 transition hover:text-white"
                        >
                          View all products →
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
              ) : (
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
              )
            )}
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


const navLinks = [
  { id: 1, title: "Products", link: "/products" },
  { id: 2, title: "Insights", link: "/insights" },
  { id: 3, title: "Media", link: "/media" },
  { id: 4, title: "About", link: "/aboutus" },
  { id: 5, title: "Contact", link: "/contact" },
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

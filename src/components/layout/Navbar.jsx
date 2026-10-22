"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { VAMIQ_URL } from "@/lib/company";

const navLinks = [
  { title: "Vamiq", href: "/products/vamiq" },
  { title: "Products", href: "/products" },
  { title: "Services", href: "/#services" },
  { title: "Company", href: "/aboutus" },
  { title: "Insights", href: "/insights" },
  { title: "Trust", href: "/trust" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isActive = (href) => !href.includes("#") && pathname.startsWith(href);

  return (
    <div className="h-16">
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
          scrolled || menuOpen
            ? "border-hairline bg-surface-muted/90 backdrop-blur-md"
            : "border-transparent bg-surface-muted"
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center" aria-label="ScotiTech home">
            <Image
              src="/logo/scotitech-wordmark.png"
              alt="ScotiTech"
              width={538}
              height={150}
              priority
              className="h-7 w-auto brightness-0"
            />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-[14px] font-medium transition-colors",
                  isActive(item.href) ? "text-strong" : "text-body hover:text-strong"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={VAMIQ_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-1 rounded-md border border-hairline-strong bg-surface px-3.5 text-[14px] font-semibold text-strong transition-colors hover:bg-white"
            >
              Try Vamiq
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <Link
              href="/contact"
              className="inline-flex h-9 items-center rounded-md bg-brand px-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-brand-strong"
            >
              Talk to us
            </Link>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="-mr-2 rounded-md p-2 text-strong lg:hidden"
            onClick={() => setMenuOpen((p) => !p)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className={cn(
            "border-t border-hairline bg-surface-muted lg:hidden",
            menuOpen ? "block" : "hidden"
          )}
        >
          <ul className="mx-auto max-w-[1200px] px-4 py-3 sm:px-6">
            {navLinks.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-hairline py-3.5 text-[17px] font-medium text-strong"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li className="flex gap-3 py-4">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-11 flex-1 items-center justify-center rounded-lg bg-brand text-[15px] font-semibold text-white"
              >
                Talk to us
              </Link>
              <a
                href={VAMIQ_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 flex-1 items-center justify-center gap-1 rounded-lg border border-hairline-strong bg-surface text-[15px] font-semibold text-strong"
              >
                Try Vamiq
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

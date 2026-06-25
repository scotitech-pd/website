"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useModal } from "@/components/ModalContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Hybrid scroll-first nav:
 *  - "anchor" items smooth-scroll to a homepage section when on "/",
 *    and resolve to "/#section" from any other page.
 *  - The /aboutus and /insights routes still exist for SEO/deeper context;
 *    the top nav keeps the primary homepage journey focused.
 */
const navLinks = [
  { id: 1, title: "Products", type: "anchor", target: "products" },
  { id: 2, title: "Credibility", type: "anchor", target: "proof" },
  { id: 3, title: "Insights", type: "anchor", target: "insights" },
  { id: 4, title: "About", type: "route", link: "/aboutus" },
  { id: 5, title: "Media", type: "route", link: "/media" },
  { id: 6, title: "Contact", type: "anchor", target: "contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { setShowModal } = useModal();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      const top = document.body.scrollTop || document.documentElement.scrollTop;
      setScrolled(top > 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const hrefFor = (item) =>
    item.type === "route"
      ? item.link
      : isHome
        ? `#${item.target}`
        : `/#${item.target}`;

  const isActive = (item) =>
    item.type === "route" && pathname.startsWith(item.link);

  return (
    <div className="h-[72px]">
      {/* Mobile overlay + panel */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
        onClick={() => setMenuOpen(false)}
      >
        <nav
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "absolute right-0 h-full w-full max-w-[320px] bg-surface shadow-lift transition-transform duration-300",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex h-full flex-col px-7 pt-24 pb-10">
            <ul className="space-y-1">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    href={hrefFor(item)}
                    className={cn(
                      "block rounded-xl px-4 py-3 font-karla text-lg font-medium transition-colors",
                      isActive(item)
                        ? "bg-brand-soft text-brand-strong"
                        : "text-strong hover:bg-surface-sunken"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <Button
                className="w-full"
                size="lg"
                onClick={() => {
                  setShowModal(true);
                  setMenuOpen(false);
                }}
              >
                Talk to our team
              </Button>
            </div>
          </div>
        </nav>
      </div>

      {/* Bar */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-hairline bg-surface/90 shadow-soft backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-8xl items-center justify-between px-5 min-[500px]:px-10 md:px-20">
          <Link href="/" className="flex items-center" aria-label="ScotiTech home">
            <Image
              src="/logo/logo.png"
              alt="ScotiTech"
              width={168}
              height={42}
              priority
              className={cn(
                "h-9 w-auto transition-all duration-300",
                scrolled ? "brightness-0" : "brightness-0 invert"
              )}
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.id}
                href={hrefFor(item)}
                className={cn(
                  "relative rounded-full px-4 py-2 font-karla text-[15px] font-medium transition-colors",
                  isActive(item)
                    ? scrolled ? "text-brand-strong" : "text-white"
                    : scrolled
                      ? "text-body hover:text-strong"
                      : "text-white/90 hover:text-white"
                )}
              >
                {item.title}
                {isActive(item) && (
                  <span className="absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-brand" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              size="sm"
              variant={scrolled ? "default" : "onInkSolid"}
              onClick={() => setShowModal(true)}
            >
              Talk to our team
            </Button>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={cn(
              "z-[70] rounded-lg p-1 lg:hidden transition-colors",
              scrolled ? "text-strong" : "text-white"
            )}
            onClick={() => setMenuOpen((p) => !p)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={30} />}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

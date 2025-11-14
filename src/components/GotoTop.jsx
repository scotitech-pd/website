"use client";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const GotoTop = () => {
  const [Visible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listentotop = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > 500) setIsVisible(true);
    else setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listentotop);
    return () => {
      window.removeEventListener("scroll", listentotop);
    };
  }, []);

  return (
    <>
      {Visible && (
        <div
          className="z-50 fixed right-4 bottom-6 shadow-2xl bg-[#641171] rounded-full duration-300 hover:bg-[#E38DF0] text-white"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="
              relative 
              h-15 w-15 
              overflow-hidden 
              max-sm:h-12 max-sm:w-12    /* Smaller button on mobile */
            "
          >
            {/* First Arrow */}
            <div
              className={`absolute inset-0 transition-all duration-500 ${
                isHovered
                  ? "-translate-y-12 opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
            >
              <ArrowUp
                className="
                  cursor-pointer 
                  size-14 
                  max-sm:size-10   /* Smaller arrow on mobile */
                  mx-auto my-auto p-[2px] 
                  rounded-full duration-300 text-white
                "
                onClick={scrollToTop}
              />
            </div>

            {/* Second Arrow */}
            <div
              className={`absolute inset-0 transition-all duration-500 ${
                isHovered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <ArrowUp
                className="
                  cursor-pointer 
                  mx-auto my-auto 
                  size-14 
                  max-sm:size-10   /* Smaller arrow on mobile */
                  p-[2px] rounded-full 
                  duration-300 text-black
                "
                onClick={scrollToTop}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GotoTop;

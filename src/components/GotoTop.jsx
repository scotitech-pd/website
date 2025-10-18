"use client"
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const GotoTop = () => {
  const [Visible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const listentotop = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > 500) setIsVisible(true);
    else setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', listentotop);
    return () => {
      window.removeEventListener('scroll', listentotop);
    };
  }, []);

  return (
    <div
      className="fixed right-4 bottom-6 shadow-xl bg-[#F58634] rounded-full duration-300 hover:bg-[#606062] text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {Visible && (
        <div className="relative h-10 w-10 overflow-hidden ">
          {/* First Arrow */}
          <div
            className={`absolute inset-0 transition-all flex duration-500 ${
              isHovered ? '-translate-y-12 opacity-0' : 'translate-y-0 opacity-100'
            }`}
          >
            <FaArrowUp
              className="cursor-pointer text-3xl mx-auto my-auto p-[2px] rounded-full duration-300"
              onClick={scrollToTop}
            />
          </div>

          {/* Second Arrow */}
          <div
            className={`absolute inset-0 transition-all flex duration-500 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <FaArrowUp
              className="cursor-pointer mx-auto my-auto text-3xl p-[2px] rounded-full duration-300"
              onClick={scrollToTop}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GotoTop;
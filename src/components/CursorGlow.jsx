"use client";
import { useEffect, useState } from "react";

export default function CursorBall() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const click = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 200);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("click", click);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", click);
    };
  }, []);
//ok
  return (
    // Cursor glow element
    <div
      className="hidden lg:block fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-150 ease-out"
      style={{
        transform: `translate(${pos.x - 5}px, ${pos.y - 5}px)`,
      }}
    >
      <div
        className={`w-[12px] h-[12px] rounded-full bg-white shadow-[0_0_8px_2px_#641171] transition-all duration-200 ease-in-out 
  ${clicked ? "scale-150 opacity-90" : "scale-100 opacity-80"}`}
      ></div>
    </div>
  );
}

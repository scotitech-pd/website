"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[999] mx-auto max-w-2xl">
      <div className="flex flex-col gap-4 rounded-[1.15rem] border border-white/10 bg-[#0E1116] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.4)] sm:flex-row sm:items-center sm:gap-6">
        <p className="font-lora text-sm leading-6 text-slate-300">
          We use essential cookies to keep the site working.{" "}
          <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-white">
            Privacy policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={decline}
            className="rounded-full border border-white/15 px-4 py-2 font-karla text-xs font-semibold text-slate-400 transition hover:border-white/30 hover:text-white"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="rounded-full bg-white px-4 py-2 font-karla text-xs font-semibold text-[#0E1116] transition hover:bg-slate-100"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

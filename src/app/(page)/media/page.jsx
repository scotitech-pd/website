"use client";

import React, { useState, useEffect } from "react";

const IMAGES = [
  { src: "/images/home/p1.png", alt: "Pradeep Dahiya holding the award", caption: "Pradeep Dahiya,Co-Founder Scotitech, holding the award" },
  { src: "/images/home/p2.jpg", alt: "award", caption: "Forttuna Global Excellence Awards 2025, Dubai" },
  { src: "/images/home/p3.jpg", alt: "Close up of the award trophy", caption: "NextGen Innovator trophy, Forttuna Awards" },
  { src: "/images/home/p4.jpeg", alt: "Handshake with the co founder", caption: "Handshake, partnership moment" },
];

const VIDEO_SRC = "/images/home/pv1.mp4";

export default function PressRelease() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const onKey = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") setCurrentIndex((i) => Math.min(i + 1, IMAGES.length - 1));
      if (e.key === "ArrowLeft") setCurrentIndex((i) => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  const openLightbox = (i) => {
    setCurrentIndex(i);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((i) => Math.min(i + 1, IMAGES.length - 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((i) => Math.max(i - 1, 0));
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-5 md:px-10 py-12">
      {/* TITLE */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-karla font-semibold text-[#641171]">
          ScotiTech Founder Wins “NextGen Innovator of the Year” at Global Excellence Awards in Dubai
        </h1>
        <p className="mt-3 text-sm text-gray-600 font-lora">
          Dubai, UAE, December 2025
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* LEFT CONTENT */}
        <article className="lg:col-span-2 space-y-6">
          <p className="font-lora text-base text-gray-800">
            ScotiTech Solutions Limited is proud to announce that its Co-Founder and Director, Pradeep Dahiya,
            has been honored with the NextGen Innovator of the Year award at the Fortuna Global Excellence Awards 2025,
            held in Dubai, UAE.
          </p>

          {/* CENTERED VIDEO — spans full article width */}
          <div className="w-full flex justify-center">
            <div className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="p-4">
                <h4 className="font-karla text-sm text-[#641171] mb-3 text-center">Watch the highlight</h4>

                <div className="w-full aspect-[16/9]">
                  <video
                    src={VIDEO_SRC}
                    controls
                    playsInline
                    muted
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                <p className="mt-3 text-sm text-gray-600 font-karla text-center font-semibold">
                  A video Glimpse of the award ceremony in Dubai, December 2025.
                </p>
              </div>
            </div>
          </div>
          

          <h3 className="font-karla text-lg text-[#641171]">A Commitment to Innovation with Purpose</h3>
          

          <p className="font-lora text-base text-gray-800">
            ScotiTech, headquartered in Scotland, focuses on developing technologies that solve real-world challenges
            around digital trust, privacy, simplicity, and accessibility. AppDeploy enables secure internal distribution
            without reliance on app stores. Opsly introduces a private-cloud workspace with AI capabilities.
          </p>

          <blockquote className="border-l-4 border-[#641171] pl-4 italic text-gray-700">
            <p className="font-lora">
              “This recognition reflects not just my journey, but the collective effort, belief, and support behind
              ScotiTech. We build technology with the intention of making life simpler, safer, and more accessible. Receiving
              this award in Dubai strengthens our commitment to innovation that creates responsible impact.”
            </p>
            <footer className="mt-2 font-karla text-sm text-[#641171]">— Pradeep Dahiya</footer>
          </blockquote>

          <h4 className="font-karla text-md text-[#641171]">Global Recognition for a UK-Based Vision</h4>

          <p className="font-lora text-base text-gray-800">
            The ceremony brought together innovators from around the world. This category highlights exceptional creativity,
            leadership, and future potential.
          </p>

          <h4 className="font-karla text-md text-[#641171]">Looking Ahead</h4>

          <p className="font-lora text-base text-gray-800">
            With multiple products in development and an expanding partner network, ScotiTech is preparing for significant
            growth through 2026 and beyond.
          </p>

          {/* MEDIA CONTACT BLOCK */}
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <h5 className="font-karla text-sm text-[#641171] mb-2">Media Contact</h5>
            <p className="text-sm font-lora text-gray-700 leading-relaxed">
              ScotiTech Solutions Ltd<br />
              📍 Eurocentral, Scotland, UK<br />
              🌐 www.scotitech.com<br />
              📧 contact@scotitech.com
            </p>
          </div>
        </article>

        {/* RIGHT SIDEBAR: larger images, opens lightbox */}
        <aside className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <h4 className="font-karla text-sm text-[#641171] mb-3">Event gallery</h4>

            <div className="grid grid-cols-2 gap-4">
              {IMAGES.map((img, idx) => (
                <figure
                  key={img.src}
                  className="rounded-lg overflow-hidden bg-gray-50 border border-gray-100 cursor-pointer"
                  onClick={() => openLightbox(idx)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-48 md:h-56 object-cover transition-transform duration-200 hover:scale-105"
                  />
                  <figcaption className="p-3 text-sm text-gray-700 font-lora">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500 font-lora">
        ScotiTech Solutions Limited remains committed to ethical innovation and digital trust.
      </div>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4"
          onClick={closeLightbox}
        >
          <button
            aria-label="Close"
            className="absolute top-6 right-6 text-white bg-black/40 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            ✕
          </button>

          <button
            aria-label="Previous"
            className="absolute left-4 md:left-6 flex items-center justify-center text-white bg-black/30 rounded-full w-10 h-10"
            onClick={(e) => {
              e.stopPropagation();
              prevImage(e);
            }}
            disabled={currentIndex === 0}
          >
            ‹
          </button>

          <div
            className="max-w-[90vw] md:max-w-3xl lg:max-w-4xl max-h-[80vh] bg-transparent p-3 rounded"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={IMAGES[currentIndex].src}
              alt={IMAGES[currentIndex].alt}
              className="w-full h-full max-h-[74vh] object-contain rounded shadow-lg"
            />
            <div className="mt-3 text-center text-sm text-white font-lora">
              {currentIndex + 1} / {IMAGES.length} — {IMAGES[currentIndex].caption}
            </div>
          </div>

          <button
            aria-label="Next"
            className="absolute right-4 md:right-6 flex items-center justify-center text-white bg-black/30 rounded-full w-10 h-10"
            onClick={(e) => {
              e.stopPropagation();
              nextImage(e);
            }}
            disabled={currentIndex === IMAGES.length - 1}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}

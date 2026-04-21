"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/components/ModalContext";
import { 
  Calendar, 
  MapPin, 
  Share2, 
  ChevronLeft, 
  ChevronRight, 
  X,
  PlayCircle,
  Mail,
  Globe,
  Phone
} from "lucide-react";


const IMAGES = [
  { src: "/images/home/p1.png", alt: "Pradeep Dahiya holding the award", caption: "Pradeep Dahiya, Co-Founder ScotiTech, holding the award" },
  { src: "/images/home/p2.jpg", alt: "award", caption: "Forttuna Global Excellence Awards 2025, Dubai" },
  { src: "/images/home/p3.jpg", alt: "Close up of the award trophy", caption: "NextGen Innovator trophy, Forttuna Awards" },
  { src: "/images/home/p4.jpeg", alt: "Handshake with the co founder", caption: "Partnership and Excellence Celebration" },
  { src: "/images/home/award.jpg", alt: "NextGen Innovator Award Certificate", caption: "Official achievement certificate" },
  { src: "/images/home/forttuna.jpg", alt: "Forttuna Global Excellence Awards Branding", caption: "Event branding and celebration" },
];

const VIDEO_SRC = "/images/home/pv1.mp4";

const PressRelease = () => {
  const { setShowModal } = useModal();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((i) => (i + 1) % IMAGES.length);
    }, 5000); // Change bg every 5s
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
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

  const nextImage = () => {
    setCurrentIndex((i) => (i + 1) % IMAGES.length);
  };

  const prevImage = () => {
    setCurrentIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  };

  return (
    <main className="min-h-screen font-karla relative isolate">
      {/* BASE BACKGROUND */}
      <div className="fixed inset-0 bg-white -z-20" />

      {/* DYNAMIC BACKGROUND DECOR - HERO ONLY */}
      <div className="absolute top-0 left-0 w-full h-[650px] -z-10 pointer-events-none overflow-hidden select-none">
        <AnimatePresence mode="wait">
          <motion.div 
            key={bgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-top bg-no-repeat bg-cover"
            style={{ backgroundImage: `url('${IMAGES[bgIndex].src}')` }}
          />
        </AnimatePresence>
        {/* Soft, clean overlay gradient to fade out at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white" />
        {/* Soft blur to add depth without hiding the image */}
        <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_bottom,transparent,black_400px)]" />
      </div>

      {/* SECTION HEADER / HERO */}
      <section className="relative pt-20 pb-16 overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-transparent to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-[#641171] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
              Press Release
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
              ScotiTech Founder Wins <span className="text-[#641171]">“NextGen Innovator of the Year”</span> at the Global Excellence Awards
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 font-lora text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="size-4 text-[#641171]" />
                <span>December 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-[#641171]" />
                <span>Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-[#641171] transition-colors">
                <Share2 className="size-4" />
                <span>Share Story</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-10 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* MAIN ARTICLE BODY */}
          <motion.article 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 space-y-8"
          >
            <div className="prose prose-lg max-w-none text-gray-800 font-lora leading-relaxed">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed italic border-l-4 border-purple-200 pl-6">
                ScotiTech Solutions Limited is proud to announce that its Co-Founder and Director, Pradeep Dahiya,
                has been honored with the NextGen Innovator of the Year award at the Forttuna Global Excellence Awards 2025,
                held in Dubai, UAE.
              </p>

              {/* HIGHLIGHT VIDEO */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl mb-12 bg-black group"
              >
                <video
                  src={VIDEO_SRC}
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs flex items-center gap-2">
                  <PlayCircle className="size-4 text-purple-400" />
                  Glimpse of the Ceremony
                </div>
              </motion.div>

              <div className="space-y-6 text-base md:text-lg">
                <h3 className="font-karla font-bold text-2xl text-gray-900 pt-4">A Commitment to Innovation with Purpose</h3>
                <p>
                  ScotiTech, headquartered in Scotland, focuses on developing technologies that solve real-world challenges
                  around digital trust, privacy, simplicity, and accessibility. Products like AppDeploy enable secure internal distribution
                  through a clearer operational model, while AXOS introduces a private workspace with AI built directly into the tools teams use every day for secure operations and stronger data control.
                </p>

                <blockquote className="relative p-8 bg-purple-50 rounded-2xl border-none my-10">
                  <div className="absolute top-4 left-4 text-purple-200 text-6xl font-serif">“</div>
                  <p className="relative z-10 text-gray-700 font-medium">
                    This recognition reflects not just my journey, but the collective effort, belief, and support behind
                    ScotiTech. We build technology with the intention of making life simpler, safer, and more accessible. Receiving
                    this award in Dubai strengthens our commitment to innovation that creates responsible impact.
                  </p>
                  <footer className="mt-4 font-karla font-bold text-[#641171]">— Pradeep Dahiya</footer>
                </blockquote>

                <h3 className="font-karla font-bold text-2xl text-gray-900 pt-4">Global Recognition for a UK-Based Vision</h3>
                <p>
                  The ceremony brought together visionary leaders and disruptive innovators from across the globe. 
                  The "NextGen Innovator" category specifically highlights individuals who demonstrate exceptional creativity,
                  forward-thinking leadership, and the potential to reshape their respective industries.
                </p>

                <h3 className="font-karla font-bold text-2xl text-gray-900 pt-4">Looking Ahead</h3>
                <p>
                  With multiple products in active development and an ever-expanding global partner network, ScotiTech is 
                  preparing for an important next stage of growth. The company
                  remains focused on building practical digital products with a
                  stronger emphasis on trust, clarity, and operational control.
                </p>
              </div>
            </div>

            {/* TAGS / FOOTER OF ARTICLE */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {["Innovation", "Award", "ScotiTech", "Dubai2025", "NextGen"].map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-500 rounded-md text-sm hover:bg-purple-50 hover:text-[#641171] transition-colors cursor-pointer capitalize">
                  #{tag}
                </span>
              ))}
            </div>
          </motion.article>

          {/* SIDEBAR: GALLERY & INFO */}
          <aside className="lg:col-span-4 space-y-10">
            {/* GALLERY CARD */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-gray-100 p-6 shadow-xl shadow-purple-900/5 sticky top-24"
            >
              <h4 className="font-karla font-bold text-lg text-gray-900 mb-6 flex items-center gap-2">
                Event Gallery
                <span className="bg-purple-100 text-[#641171] text-[10px] px-2 py-0.5 rounded-full uppercase tracking-tighter">
                  {IMAGES.length} Shots
                </span>
              </h4>

              <div className="grid grid-cols-2 gap-3">
                {IMAGES.map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative"
                    onClick={() => openLightbox(idx)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full scale-50 group-hover:scale-100 transition-transform">
                        <ChevronRight className="size-4 text-[#641171]" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CONTACT INFO INTEGRATED */}
              <div className="mt-10 pt-8 border-t border-gray-100 space-y-4">
                <h5 className="font-karla font-bold text-gray-900">Media Contact</h5>
                <div className="space-y-3 text-sm text-gray-600 font-lora">
                  <div className="flex items-start gap-3">
                    <MapPin className="size-4 text-purple-400 mt-0.5 shrink-0" />
                    <span>Eurocentral, Scotland, UK</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="size-4 text-purple-400 shrink-0" />
                    <a href="https://www.scotitech.com" className="hover:text-[#641171]">www.scotitech.com</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="size-4 text-purple-400 shrink-0" />
                    <a href="mailto:info@scotitech.com" className="hover:text-[#641171]">info@scotitech.com</a>
                  </div>
                </div>
                <button 
                  onClick={() => setShowModal(true)}
                  className="w-full mt-4 bg-[#641171] text-white font-bold py-3 rounded-xl hover:bg-[#4d0d57] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="size-4" />
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </aside>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={closeLightbox}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 text-white hover:bg-white/10 rounded-full p-2 transition-colors z-[10001]"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              <X className="size-8" />
            </motion.button>

            <button
              className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-[10001]"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft className="size-12 md:size-16" />
            </button>

            <motion.div
              layoutId={`img-${currentIndex}`}
              className="relative max-w-5xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={IMAGES[currentIndex].src}
                alt={IMAGES[currentIndex].alt}
                className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl shadow-black/50"
              />
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-center"
              >
                <div className="text-white/60 text-xs tracking-widest uppercase mb-1">
                  Image {currentIndex + 1} of {IMAGES.length}
                </div>
                <div className="text-white text-lg font-lora max-w-2xl mx-auto">
                  {IMAGES[currentIndex].caption}
                </div>
              </motion.div>
            </motion.div>

            <button
              className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-[10001]"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight className="size-12 md:size-16" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default PressRelease;

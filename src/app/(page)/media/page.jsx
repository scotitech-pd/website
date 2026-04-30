"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/components/ModalContext";
import { 
  Calendar, 
  MapPin, 
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

const recognitionStories = [
  {
    label: "Recognition",
    title: "Indian Tech Society 2024",
    summary:
      "Recognised in London by the Indian Tech Society as a leading Indian talent in the UK digital technology sector.",
    date: "July 2024",
    location: "London, UK",
    tone: "amber",
  },
  {
    label: "Award",
    title: "NextGen Innovator of the Year",
    summary:
      "Pradeep Dahiya was recognised at the Forttuna Global Excellence Awards 2025 in Dubai.",
    date: "December 2025",
    location: "Dubai, UAE",
    tone: "purple",
  },
  {
    label: "Shortlist",
    title: "Scotland StartUp Awards 2026",
    summary:
      "ScotiTech was shortlisted in the Digital StartUp of the Year category at the Scotland regional final.",
    date: "June 2026",
    location: "Scotland, UK",
    tone: "teal",
  },
];

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
      <div className="fixed inset-0 bg-[#f7f7f5] -z-20" />

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
              Media and Recognition
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
              Company milestones, awards, and public recognition from the ScotiTech journey
            </h1>
            <p className="max-w-3xl mx-auto text-base md:text-xl text-gray-600 font-lora leading-8 mb-8">
              A focused view of the recognitions and public milestones that have
              marked ScotiTech’s early product journey.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 font-lora text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="size-4 text-[#641171]" />
                <span>2025 - 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-[#641171]" />
                <span>UK and international milestones</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-10 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {recognitionStories.map((story) => (
            <div
              key={story.title}
              className="rounded-[1.8rem] border border-slate-200 bg-white p-6 sm:p-7 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <span
                className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] ${
                  story.tone === "purple"
                    ? "bg-purple-100 text-[#641171]"
                    : story.tone === "teal"
                    ? "bg-cyan-100 text-[#0F766E]"
                    : "bg-amber-100 text-amber-800"
                }`}
              >
                {story.label}
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">
                {story.title}
              </h2>
              <p className="mt-3 text-slate-600 font-lora leading-8">
                {story.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-5 text-sm text-slate-500 font-lora">
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  <span>{story.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-4" />
                  <span>{story.location}</span>
                </div>
              </div>
            </div>
          ))}
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
                <h3 className="font-karla font-bold text-2xl text-gray-900 pt-4">Recognition for practical execution</h3>
                <p>
                  The award recognised practical product-building, disciplined execution, and founder-led progress from a young UK software company operating out of Scotland.
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

                <h3 className="font-karla font-bold text-2xl text-gray-900 pt-4">Global Recognition for a UK-Based Company</h3>
                <p>
                  The ceremony brought together founders, operators, and technology teams from different markets.
                  The "NextGen Innovator" category recognises product builders showing practical execution,
                  leadership, and consistent delivery.
                </p>

                <h3 className="font-karla font-bold text-2xl text-gray-900 pt-4">Why it matters</h3>
                <p>
                  For ScotiTech, the recognition marks an early milestone rather than a change in direction. The company remains focused on steady product execution, disciplined delivery, and building from Scotland with an international outlook.
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
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-slate-200 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-amber-800">
                Recognition
              </span>
              <h4 className="mt-4 font-karla font-bold text-2xl text-gray-900 leading-tight">
                Indian Tech Society 2024
              </h4>
              <p className="mt-3 text-slate-600 font-lora leading-8">
                Public recognition in London from the Indian Tech Society,
                highlighting Pradeep Dahiya as a leading Indian talent in the
                UK digital technology sector.
              </p>
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <div className="flex items-center gap-2 text-sm text-slate-600 font-lora">
                  <Calendar className="size-4 text-amber-700" />
                  <span>July 2024</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-slate-600 font-lora">
                  <MapPin className="size-4 text-amber-700" />
                  <span>London, UK</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-slate-200 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 mb-5">
                <img
                  src="/images/home/startup-awards-2026-shortlist.jpg"
                  alt="ScotiTech shortlisted for the Scotland StartUp Awards 2026"
                  className="w-full h-[240px] object-contain p-3"
                />
              </div>
              <span className="inline-flex rounded-full bg-cyan-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0F766E]">
                Shortlist
              </span>
              <h4 className="mt-4 font-karla font-bold text-2xl text-gray-900 leading-tight">
                Scotland StartUp Awards 2026
              </h4>
              <p className="mt-3 text-slate-600 font-lora leading-8">
                ScotiTech was shortlisted in the Digital StartUp of the Year
                category, reflecting the company’s early product traction and
                recognition within Scotland’s startup ecosystem.
              </p>
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <div className="flex items-center gap-2 text-sm text-slate-600 font-lora">
                  <Calendar className="size-4 text-[#0F766E]" />
                  <span>Tue 23 Jun 2026</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-slate-600 font-lora">
                  <MapPin className="size-4 text-[#0F766E]" />
                  <span>Scotland regional final</span>
                </div>
              </div>
            </motion.div>

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
                  className="w-full mt-4 bg-[#0F172A] text-white font-bold py-3 rounded-xl hover:bg-slate-900 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="size-4" />
                  Contact Our Team
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

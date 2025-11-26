"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  MessageSquare,
  CheckSquare,
  Image as ImgIcon,
  Mail,
  Notebook,
  Calendar,
  Users,
  Grid,
  Settings,
  Video,
  Bot,
  FileSearch,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function OpslyOverview() {
  const items = [
    { label: "Files", icon: FileText },
    { label: "Talk", icon: MessageSquare },
    { label: "Tasks", icon: CheckSquare },
    { label: "Photos", icon: ImgIcon },
    { label: "Mail", icon: Mail },
    { label: "Notes", icon: Notebook },
    { label: "Calendar", icon: Calendar },
    { label: "Contacts", icon: Users },
    { label: "Deck", icon: Grid },
    { label: "Settings", icon: Settings },
    { label: "Meet / Video", icon: Video },
    { label: "AI Assistant", icon: Bot },
    { label: "AI Chat About Files", icon: FileSearch },
  ];

  const descriptions = {
    Files: "Browse, sync, and manage documents",
    Talk: "Chat and call with your team",
    Tasks: "Create to-dos and kanban boards",
    Photos: "Organise your media",
    Mail: "Unified inbox for all email accounts",
    Notes: "Store ideas and documents",
    Calendar: "Manage events and reminders",
    Contacts: "Access personal and team contacts",
    Deck: "Build workflow boards",
    Settings: "Control privacy and security tools",
    "Meet / Video": "Host instant video meetings",
    "AI Assistant": "Ask anything and get instant answers",
    "AI Chat About Files": "Read and summarise your documents",
  };

  const screenshots = [
    "/images/products/opsly/1.jpeg",
    "/images/products/opsly/2.jpeg"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [screenshots.length]);

  return (
    <section className="bg-white py-16 md:py-20 font-karla text-gray-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-20">
        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D297A] relative inline-block pb-2">
            What Opsly Actually Is
            {/* <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-[3px] bg-main-dark rounded-full"></span> */}
          </h2>
          <p className="text-lg md:text-xl mt-6 max-w-3xl mx-auto text-gray-800 leading-relaxed">
            <span className="font-semibold text-main-dark">
              Built for People Who Want Control, Not Complexity.
            </span>{" "}
            Opsly brings together files, calendar, mail, notes, tasks, calls,
            contacts, workflows and AI in a self-hosted cloud platform designed
            for privacy and productivity.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          {items.slice(0, 12).map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.04 }}
                className="p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md bg-white text-center cursor-pointer"
              >
                <div className="mx-auto mb-2 w-9 h-9 flex items-center justify-center bg-main-dark text-white rounded-full">
                  <Icon size={19} />
                </div>
                <h4 className="font-semibold text-lg font-karla">{item.label}</h4>
                <p className="text-base text-gray-600 mt-1">
                  {descriptions[item.label]}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* SMOOTH FADE CAROUSEL */}
        <div className="relative max-w-6xl mx-auto overflow-hidden rounded-2xl border border-gray-200">
             <div className="text-center mb-5">
            <h2 className="font-karla text-4xl text-main-dark font-bold">
                A Quick View 
            </h2>
          </div>
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={screenshots[current]}
              alt={`Opsly Dashboard Screenshot ${current + 1}`}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full object-contain"
            />
          </AnimatePresence>
         
        </div>
      </div>
    </section>
  );
}

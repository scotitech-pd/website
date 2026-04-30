"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Calendar,
  CheckSquare,
  FileSearch,
  FileText,
  Grid,
  Image as ImgIcon,
  Mail,
  MessageSquare,
  Notebook,
  Settings,
  Users,
  Video,
} from "lucide-react";
import { useEffect, useState } from "react";

const modules = [
  { label: "Files", icon: FileText, desc: "Central documents, structured access, and internal sharing." },
  { label: "Cloud Storage", icon: FileText, desc: "Private storage for operational files, shared assets, and structured retrieval." },
  { label: "Talk", icon: MessageSquare, desc: "Team chat and discussion inside the same operating surface." },
  { label: "Tasks", icon: CheckSquare, desc: "Planning, ownership, and execution without switching systems." },
  { label: "Photos", icon: ImgIcon, desc: "Organised media access for team workflows and publishing." },
  { label: "Mail", icon: Mail, desc: "Inbox visibility alongside the rest of your workspace." },
  { label: "Notes", icon: Notebook, desc: "Persistent internal knowledge, meeting notes, and working drafts." },
  { label: "Calendar", icon: Calendar, desc: "Scheduling and event context connected to the workspace." },
  { label: "Contacts", icon: Users, desc: "Shared contact context for teams, projects, and clients." },
  { label: "Deck", icon: Grid, desc: "Boards and operational structures for organised execution." },
  { label: "Settings", icon: Settings, desc: "Policy, permissions, and environment-level control." },
  { label: "Meet / Video", icon: Video, desc: "Embedded meetings without pushing teams into another stack." },
  { label: "AI Assistant", icon: Bot, desc: "Workspace-aware assistance for answers, summaries, and routine actions." },
  { label: "AI File Chat", icon: FileSearch, desc: "Search, read, and extract useful answers from internal documents." },
];

const screenshots = [
  "/images/products/opsly/1.jpeg",
  "/images/products/opsly/2.jpeg",
];

export default function OpslyOverview() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screenshots.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#070B14] py-16 md:py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,79,207,0.16),transparent_26%)]" />

      <div className="relative z-10 max-w-8xl mx-auto px-5 sm:px-10 md:px-20">
        <div className="max-w-4xl mb-12">
          <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-slate-400 mb-3">
            Workspace Surface
          </p>
          <h2 className="text-3xl md:text-5xl font-karla font-semibold mb-5">
            The modules teams use every day, designed to live together
          </h2>
          <p className="text-base md:text-xl text-slate-300 font-lora leading-8">
            AXOS is structured as a complete workspace environment for teams
            that want core work modules and AI to live inside one controlled
            operating layer. The value comes from how the modules connect, not
            just from listing features one by one.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[44%_56%] gap-8 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {modules.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -4 }}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.2)]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 border border-white/10 text-[#34D3FF]">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-karla font-semibold text-white mb-2">
                    {item.label}
                  </h3>
                  <p className="text-sm font-lora text-slate-300 leading-7">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0b1220]/85 backdrop-blur-md overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
            <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-4">
              <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-slate-400 mb-2">
                Interface Preview
              </p>
              <h3 className="text-2xl sm:text-3xl font-karla font-semibold text-white">
                A modern workspace designed for secure, AI-assisted operations
              </h3>
            </div>

            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={screenshots[current]}
                alt={`AXOS workspace screenshot ${current + 1}`}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="w-full object-cover border-t border-white/8"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

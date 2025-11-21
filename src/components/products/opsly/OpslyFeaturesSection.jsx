"use client";
import { LayoutGrid, ShieldCheck, Layers, CheckCircle } from "lucide-react";

export default function OpslyFeaturesSection() {
  const features = [
    {
      title: "Real-Time Usage Dashboard",
      description:
        "Instantly see your entire SaaS inventory in one place. Track active users, login frequency, and feature adoption to make data-driven decisions about your software stack.",
      icon: "/images/products/opsly/dashboard.png",
    },
    {
      title: "Security & Compliance Monitoring",
      description:
        "Mitigate risk by tracking which employees have access to which applications. Easily conduct security audits and streamline employee on-boarding and off-boarding.",
      icon: "/images/products/opsly/security.png",
    },
    {
      title: "Seamless Platform Integration",
      description:
        "Opsly connects with your existing ecosystem, including Single Sign-On (SSO), HR, and finance systems to provide a single source of truth for all your SaaS data.",
      icon: "/images/products/opsly/platform.png",
    },
  ];

  // const miniFeatures = [
  //   {
  //     title: "Redundancy Alerts",
  //     description:
  //       "Get notified of overlapping applications with similar functionality.",
  //   },
  //   {
  //     title: "Renewal Management",
  //     description:
  //       "Never miss a renewal date with automated alerts and a 90-day timeline view.",
  //   },
  //   {
  //     title: "Contract Intelligence",
  //     description:
  //       "Store all your contracts and payment details in a secure, centralized vault.",
  //   },
  // ];

  const capabilities = [
  { label: "Files", desc: "browse, sync, and manage documents" },
  { label: "Talk", desc: "chat and call with your team" },
  { label: "Tasks", desc: "create to-dos and kanban boards" },
  { label: "Photos", desc: "organise your media" },
  { label: "Mail", desc: "unified inbox for all email accounts" },
  { label: "Notes", desc: "store ideas and documents" },
  { label: "Calendar", desc: "manage events and reminders" },
  { label: "Contacts", desc: "personal + team contacts" },
  { label: "Deck", desc: "workflow boards" },
  { label: "Settings", desc: "privacy & security tools" },
  { label: "Meet / Video", desc: "instant video meetings" },
  { label: "AI Assistant", desc: "ask anything, get instant answers" },
  { label: "AI Chat About Files", desc: "read and summarise your documents" },
];


  return (
    <section className="w-full pb-10 bg-white">
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 ">
        {/* Section Header */}
        <div className="lg:px-6 text-center">
          <h2 className="text-[40px] font-semibold text-main-dark mb-1 drop-shadow-2xl font-karla">
            What Opsly Actually Is
          </h2>
          <p className="text-black font-lora text-xl mb-14">
Built for People Who Want Control — Not Complexity
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center justify-center">
          {/* Left column */}
          <div className="flex flex-col space-y-5">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start ml-4 lg:ml-0 bg-white shadow-[0_0_5px_rgba(128,128,128,0.3)] rounded-2xl p-6 border border-gray-100 relative group
                     hover:shadow-[0_0_10px_rgba(140,82,255,0.9)] hover:scale-101 transform-gpu transition-all duration-300  text-black"
              >
                <div className="absolute bg-white rounded-full flex justify-center items-center shadow-[0_0_5px_rgba(128,128,128,0.6)] group-hover:shadow-[0_0_10px_rgba(140,82,255,0.9)] group-hover:scale-110 duration-300 top-1/2 -translate-1/2 left-0 size-12 transition-all">
                  <img src={feature.icon} alt="" className="size-6" />
                </div>
                <div className=" pl-5">
                  <h3 className="font-semibold text-xl font-karla">
                    {feature.title}
                  </h3>
                  <p className=" mt-1 text-sm font-lora">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right column gradient box */}
          <div className="bg-gradient-to-bl from-[#406E8F] to-[#3D297A] text-white rounded-xl p-10 shadow-lg">
            <h3 className="font-medium text-2xl font-karla mb-2">
      You get all your digital tools in one unified dashboard
            </h3>
            <p className="mb-6 font-lora leading-6">
              Opsly brings together files, calendar, mail, notes, tasks, calls, contacts, workflows, and AI — all on a self-hosted cloud platform designed for privacy and productivity.

            </p>
            <div className="font-lora">
              
 {capabilities.map((item, idx) => (
  <p key={idx} className="block pb-1">
    <CheckCircle className="inline size-4 text-green-400 mr-2" />
    <span className="font-semibold font-karla">{item.label}</span>
    {" — "}{item.desc}
  </p>
))}

              

            </div>

          
          </div>
        </div>
      </div>
    </section>
  );
}

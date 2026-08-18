"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  CalendarClock,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { meetingLinks } from "@/lib/scheduling";

const productPaths = [
  {
    name: "AppDeploy",
    eyebrow: "Private app rollout",
    description: "Branded internal app access, install guidance, and release control.",
    href: "/products/appdeploy",
    accent: "from-orange-500/20 via-amber-400/10 to-white/0",
  },
  {
    name: "AXOS",
    eyebrow: "Enterprise workspace",
    description:
      "Completed enterprise-only AI workspace with a limited testing platform for qualified organisations.",
    href: "/products/axos",
    accent: "from-cyan-500/20 via-emerald-400/10 to-white/0",
  },
  {
    name: "Partnerships",
    eyebrow: "Commercial fit",
    description: "Partner, client, vendor, or product-fit conversations with the ScotiTech team.",
    href: "mailto:info@scotitech.com",
    accent: "from-slate-500/20 via-orange-400/10 to-white/0",
  },
];

const operationalMapUrl =
  "https://www.google.com/maps/search/?api=1&query=Regus%20Lanarkshire%20Eurocentral%20Maxim%201%202%20Parklands%20Way%20Motherwell%20ML1%204WR";
const operationalMapEmbedUrl =
  "https://maps.google.com/maps?q=Regus%20Lanarkshire%20Eurocentral%2C%20Maxim%201%2C%202%20Parklands%20Way%2C%20Eurocentral%2C%20Motherwell%20ML1%204WR&t=&z=16&ie=UTF8&iwloc=&output=embed";

const contactRoutes = [
  {
    icon: Mail,
    label: "Email",
    value: "info@scotitech.com",
    href: "mailto:info@scotitech.com",
  },
  {
    icon: MapPin,
    label: "Registered office",
    value: "11 Caldervale Drive, Motherwell ML1 2GB, United Kingdom",
    href: "https://www.google.com/maps/search/?api=1&query=11%20Caldervale%20Drive%20Motherwell%20ML1%202GB%20UK",
  },
  {
    icon: Building2,
    label: "Operational office",
    value:
      "Regus - Lanarkshire Eurocentral, Maxim 1, 2 Parklands Way, Eurocentral, Motherwell ML1 4WR, United Kingdom",
    href: operationalMapUrl,
  },
  {
    icon: Clock,
    label: "Working hours",
    value: "Monday to Friday, 9:00 AM - 5:30 PM GMT",
    href: null,
  },
];

const responseStats = [
  { value: "1 day", label: "Typical first response" },
  { value: "3 paths", label: "Product, enterprise, partner" },
  { value: "Global", label: "Client conversations" },
];

const calendlyUrl = meetingLinks.calendly;

const initialForm = {
  name: "",
  email: "",
  company: "",
  interest: "AppDeploy",
  message: "",
};

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block font-karla text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </span>
      {children}
    </label>
  );
}

export default function ContactExperience() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      return;
    }

    const fd = new FormData();
    fd.append("access_key", "cc28a946-1d7c-46a4-aa9f-0bbaa38e5c77");
    fd.append("Name", formData.name);
    fd.append("Email", formData.email);
    fd.append("Company", formData.company);
    fd.append("Interest", formData.interest);
    fd.append("Message", formData.message);

    setStatus("sending");

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      setStatus("success");
      setFormData(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="overflow-hidden bg-[#f6f3ee] text-slate-950">
      <section className="relative isolate bg-[#111827] pt-28 pb-16 text-white md:pt-32 md:pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_10%,rgba(226,88,14,0.42),transparent_28%),radial-gradient(circle_at_82%_4%,rgba(20,184,166,0.28),transparent_24%),linear-gradient(135deg,#111827_0%,#172033_42%,#2f261f_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.18] bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:46px_46px]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f6f3ee] to-transparent" />

        <div className="relative mx-auto grid w-full max-w-8xl gap-12 px-5 min-[500px]:px-10 md:px-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 font-karla text-sm font-semibold text-white/80 backdrop-blur">
              <Sparkles size={15} className="text-orange-300" />
              Contact ScotiTech
            </div>
            <h1 className="mt-6 max-w-4xl font-karla text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Start the right conversation, not another generic enquiry.
            </h1>
            <p className="mt-6 max-w-2xl font-lora text-lg leading-8 text-white/72 md:text-xl">
              Tell us whether you are evaluating AppDeploy, requesting AXOS enterprise access, or exploring a partnership. We will route the conversation to the right product and commercial path.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="onInkSolid">
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                  Book a strategy call
                  <ArrowRight size={17} />
                </a>
              </Button>
              <Button asChild size="lg" variant="onInk">
                <a href="mailto:info@scotitech.com">
                  Email us directly
                  <Mail size={17} />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[2.5rem] bg-orange-500/15 blur-3xl" />
            <div className="relative rounded-xl border border-white/15 bg-white/[0.08] p-5 backdrop-blur-xl">
              <div className="rounded-lg border border-white/10 bg-black/25 p-5">
                <p className="font-karla text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
                  Conversation routes
                </p>
                <div className="mt-5 space-y-3">
                  {["AppDeploy access", "AXOS enterprise evaluation", "Partnership or delivery discussion"].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-lg bg-white/8 px-4 py-3">
                      <CheckCircle2 size={18} className="shrink-0 text-emerald-300" />
                      <span className="font-karla text-sm font-semibold text-white/88">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {responseStats.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-white/10 bg-white/8 p-4">
                    <p className="font-karla text-xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 font-karla text-xs leading-5 text-white/55">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-8 w-full max-w-8xl px-5 min-[500px]:px-10 md:px-20">
        <div className="grid gap-4 md:grid-cols-3">
          {productPaths.map((path) => (
            <Link
              key={path.name}
              href={path.href}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-shadow duration-300 hover:shadow-md"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${path.accent}`} />
              <div className="relative">
                <p className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-orange-700">
                  {path.eyebrow}
                </p>
                <h2 className="mt-3 font-karla text-2xl font-semibold text-slate-950">
                  {path.name}
                </h2>
                <p className="mt-3 min-h-[72px] font-lora text-sm leading-7 text-slate-600">
                  {path.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-karla text-sm font-semibold text-slate-950">
                  Open path
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-8xl gap-8 px-5 py-16 min-[500px]:px-10 md:px-20 lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-7">
            <p className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-orange-700">
              Direct details
            </p>
            <h2 className="mt-3 font-karla text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-4xl">
              Reach us the way that suits the decision.
            </h2>
            <div className="mt-7 space-y-4">
              {contactRoutes.map((route) => {
                const Icon = route.icon;
                const content = (
                  <div className="group flex gap-4 rounded-lg border border-slate-200 bg-[#fbfaf7] p-4 transition-colors hover:border-orange-300 hover:bg-white">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white transition-colors group-hover:bg-orange-600">
                      <Icon size={19} />
                    </span>
                    <span>
                      <span className="block font-karla text-sm font-semibold text-slate-950">
                        {route.label}
                      </span>
                      <span className="mt-1 block font-lora text-sm leading-6 text-slate-600">
                        {route.value}
                      </span>
                    </span>
                  </div>
                );

                if (!route.href) return <div key={route.label}>{content}</div>;
                return (
                  <a
                    key={route.label}
                    href={route.href}
                    target={route.href.startsWith("http") ? "_blank" : undefined}
                    rel={route.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl border border-slate-900 bg-slate-950 p-6 text-white md:p-7">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-white">
                <ShieldCheck size={22} />
              </span>
              <div>
                <p className="font-karla text-xl font-semibold">AXOS evaluation note</p>
                <p className="mt-2 font-lora text-sm leading-7 text-white/68">
                  AXOS is enterprise-only. Share your business profile, team size, workflow needs, and infrastructure preference so we can decide the right testing route.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 md:p-6">
          <div className="rounded-lg bg-[#f7f2e8] p-5 md:p-6">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
              <div>
                <p className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-orange-700">
                  Message
                </p>
                <h2 className="mt-3 font-karla text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-4xl">
                  Send the useful version.
                </h2>
                <p className="mt-3 max-w-xl font-lora text-sm leading-7 text-slate-600">
                  Give us the product, company context, and what you need to decide. We will come back with a practical next step.
                </p>
              </div>
              <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-orange-600 shadow-soft sm:flex">
                <MessageSquare size={24} />
              </span>
            </div>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={updateField}
                    placeholder="Your name"
                    className="h-11 w-full rounded-lg border border-slate-200 bg-white px-4 font-karla text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-orange-400"
                  />
                </Field>
                <Field label="Work email">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={updateField}
                    placeholder="you@company.com"
                    className="h-11 w-full rounded-lg border border-slate-200 bg-white px-4 font-karla text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-orange-400"
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Company">
                  <input
                    name="company"
                    value={formData.company}
                    onChange={updateField}
                    placeholder="Company name"
                    className="h-11 w-full rounded-lg border border-slate-200 bg-white px-4 font-karla text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-orange-400"
                  />
                </Field>
                <Field label="Interest">
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={updateField}
                    className="h-11 w-full rounded-lg border border-slate-200 bg-white px-4 font-karla text-sm text-slate-950 outline-none transition-colors focus:border-orange-400"
                  >
                    <option>AppDeploy</option>
                    <option>AXOS enterprise evaluation</option>
                    <option>ClarityPath</option>
                    <option>Partnership</option>
                    <option>General enquiry</option>
                  </select>
                </Field>
              </div>

              <Field label="What should we know?">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={updateField}
                  placeholder="Tell us about the product, team size, timeline, or business problem."
                  rows={6}
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-karla text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-orange-400"
                />
              </Field>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-lora text-sm text-slate-500">
                  Required: name, work email, and message.
                </p>
                <Button type="submit" size="lg" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send message"}
                  <Send size={17} />
                </Button>
              </div>

              {status === "success" && (
                <p className="rounded-lg bg-emerald-50 px-4 py-3 font-karla text-sm font-semibold text-emerald-700">
                  Message sent. We will reply with the right next step.
                </p>
              )}
              {status === "error" && (
                <p className="rounded-lg bg-red-50 px-4 py-3 font-karla text-sm font-semibold text-red-700">
                  Please add your name, email, and message before sending.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-8xl gap-6 px-5 pb-16 min-[500px]:px-10 md:px-20 lg:grid-cols-[0.8fr_1.2fr] lg:pb-24">
        <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-7">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-700">
            <CalendarClock size={22} />
          </span>
          <h2 className="mt-5 font-karla text-3xl font-semibold tracking-[-0.03em] text-slate-950">
            Prefer a call?
          </h2>
          <p className="mt-3 font-lora text-sm leading-7 text-slate-600">
            Book a focused session for product fit, AppDeploy rollout, AXOS enterprise evaluation, or partnership routes.
          </p>
          <Button asChild className="mt-6" variant="ink">
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              Book a session
              <ArrowRight size={16} />
            </a>
          </Button>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="grid min-h-[360px] lg:grid-cols-[0.34fr_0.66fr]">
            <div className="flex flex-col justify-between bg-slate-950 p-7 text-white md:p-8">
              <div>
                <Building2 size={28} className="text-orange-300" />
                <h2 className="mt-5 font-karla text-2xl font-semibold">
                  ScotiTech Solutions Limited
                </h2>
                <p className="mt-3 font-lora text-sm leading-7 text-white/65">
                  UK-registered technology and product company. Our operational
                  office is at Regus Lanarkshire Eurocentral, working with
                  clients and partners worldwide.
                </p>
              </div>
              <a
                href={operationalMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-karla text-sm font-semibold text-orange-200 hover:text-white"
              >
                Open map
                <ArrowRight size={16} />
              </a>
            </div>
            <iframe
              title="ScotiTech operational office map"
              src={operationalMapEmbedUrl}
              className="h-[360px] w-full lg:h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  CalendarClock,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { meetingLinks } from "@/lib/scheduling";

const productPaths = [
  {
    name: "Vamiq",
    eyebrow: "Private apps and Apple devices",
    description: "Branded app store, Apple device management, and build checks before each release.",
    href: "/products/vamiq",
    accent: "from-teal-500/20 via-teal-400/10 to-white/0",
  },
  {
    name: "AXOS",
    eyebrow: "Enterprise workspace",
    description:
      "AXOS is a completed core platform currently available for private enterprise evaluation.",
    href: "/products/axos",
    accent: "from-cyan-500/20 via-emerald-400/10 to-white/0",
  },
  {
    name: "Partnerships",
    eyebrow: "Commercial fit",
    description: "Partner, client, vendor, or product-fit conversations with the ScotiTech team.",
    href: "mailto:info@scotitech.com",
    accent: "from-slate-500/20 via-teal-400/10 to-white/0",
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
  interest: "Vamiq",
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
    <div className="overflow-hidden bg-[#f4f2ec] text-strong">
      <section className="relative bg-[#f4f2ec] pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="relative mx-auto grid w-full max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div>
            <p className="t-eyebrow reveal-now">Contact ScotiTech</p>
            <h1 className="t-display reveal-now mt-4">Tell us what you need.</h1>
            <p className="t-lead reveal-now mt-6 max-w-2xl">
              Evaluating Vamiq, planning an AXOS deployment, or need a hand with Apple Business? Send a
              message or book a call, and the team that builds the product will reply.
            </p>
            <div className="reveal-now mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                  Book a call
                  <ArrowRight size={17} />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="mailto:info@scotitech.com">
                  Email info@scotitech.com
                  <Mail size={17} />
                </a>
              </Button>
            </div>
            <dl className="reveal-now mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-hairline pt-6">
              {responseStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[13px] leading-5 text-muted">{stat.label}</dt>
                  <dd className="mt-1 text-[17px] font-semibold text-strong">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="reveal-now relative overflow-hidden rounded-2xl bg-[#002d35] shadow-lift">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/company/office-meeting-room.webp"
              alt="A meeting room at ScotiTech's office in Eurocentral, Motherwell"
              width={702}
              height={468}
              className="aspect-[4/3] w-full object-cover"
            />
            <span className="photo-tint absolute inset-0" aria-hidden="true" />
            <span className="photo-grade absolute inset-0" aria-hidden="true" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9fe0d4]">Our office</span>
              <span className="mt-2 block text-[1.15rem] font-semibold leading-snug">
                Maxim 1, 2 Parklands Way, Eurocentral, Motherwell ML1 4WR
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-0 w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {productPaths.map((path) => (
            <Link
              key={path.name}
              href={path.href}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-shadow duration-300 hover:shadow-md"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${path.accent}`} />
              <div className="relative">
                <p className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
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

      <section className="mx-auto grid w-full max-w-[1200px] gap-8 px-4 py-16 sm:px-6 lg:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-7">
            <p className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
              Direct details
            </p>
            <h2 className="mt-3 font-karla text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-4xl">
              Reach us the way that suits the decision.
            </h2>
            <div className="mt-7 space-y-4">
              {contactRoutes.map((route) => {
                const Icon = route.icon;
                const content = (
                  <div className="group flex gap-4 rounded-lg border border-slate-200 bg-[#fbfaf7] p-4 transition-colors hover:border-teal-300 hover:bg-white">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white transition-colors group-hover:bg-teal-600">
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
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-500 text-white">
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
                <p className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
                  Message
                </p>
                <h2 className="mt-3 font-karla text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-4xl">
                  Send the useful version.
                </h2>
                <p className="mt-3 max-w-xl font-lora text-sm leading-7 text-slate-600">
                  Give us the product, company context, and what you need to decide. We will come back with a practical next step.
                </p>
              </div>
              <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-teal-600 shadow-soft sm:flex">
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
                    className="h-11 w-full rounded-lg border border-slate-200 bg-white px-4 font-karla text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-teal-400"
                  />
                </Field>
                <Field label="Work email">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={updateField}
                    placeholder="you@company.com"
                    className="h-11 w-full rounded-lg border border-slate-200 bg-white px-4 font-karla text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-teal-400"
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
                    className="h-11 w-full rounded-lg border border-slate-200 bg-white px-4 font-karla text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-teal-400"
                  />
                </Field>
                <Field label="Interest">
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={updateField}
                    className="h-11 w-full rounded-lg border border-slate-200 bg-white px-4 font-karla text-sm text-slate-950 outline-none transition-colors focus:border-teal-400"
                  >
                    <option>Vamiq</option>
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
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-karla text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-teal-400"
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

      <section className="mx-auto grid w-full max-w-[1200px] gap-6 px-4 pb-16 sm:px-6 lg:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:pb-24">
        <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-7">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
            <CalendarClock size={22} />
          </span>
          <h2 className="mt-5 font-karla text-3xl font-semibold tracking-[-0.03em] text-slate-950">
            Prefer a call?
          </h2>
          <p className="mt-3 font-lora text-sm leading-7 text-slate-600">
            Book a focused session for product fit, Vamiq rollout, AXOS enterprise evaluation, or partnership routes.
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
                <Building2 size={28} className="text-teal-300" />
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
                className="mt-8 inline-flex items-center gap-2 font-karla text-sm font-semibold text-teal-200 hover:text-white"
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
    </div>
  );
}

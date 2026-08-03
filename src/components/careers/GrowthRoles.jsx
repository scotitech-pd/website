"use client";

import { useEffect, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Handshake,
  LoaderCircle,
  Megaphone,
  Network,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";

const accessKey = "cc28a946-1d7c-46a4-aa9f-0bbaa38e5c77";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  organisation: "",
  designation: "",
  linkedin: "",
  website: "",
  heardFrom: "",
  videoLink: "",
  message: "",
  confirm: false,
};

const growthRoles = [
  {
    title: "Business Growth Partner",
    type: "Commission-based",
    location: "Remote / worldwide",
    icon: Handshake,
    summary:
      "Introduce qualified companies, agencies, and enterprise teams to ScotiTech products where there is a real operational fit.",
    suitedFor:
      "People with an existing business network across technology, operations, healthcare, finance, education, or professional services.",
    outcomes: [
      "Qualified product introductions",
      "Discovery calls with decision-makers",
      "New AppDeploy, AXOS, or platform opportunities",
    ],
    detail:
      "Ideal for commercially minded connectors who can identify business-fit opportunities and make trusted introductions to decision-makers.",
    commission: {
      headline: "15–25% of first-year contract value on closed business",
      note: "Applies to AppDeploy and AXOS deals you originate and help close. Exact percentage varies with product, deal size, and cycle length.",
    },
    responsibilities: [
      "Identify companies where AppDeploy, AXOS, or ScotiTech platform work may solve a real operational problem.",
      "Make warm introductions to owners, founders, operators, IT leaders, or decision-makers.",
      "Help us understand the buyer context before the first discovery call.",
    ],
  },
  {
    title: "Partnerships & Channel Associate",
    type: "Commission-based",
    location: "Remote / worldwide",
    icon: Network,
    summary:
      "Build referral and channel relationships with consultants, agencies, IT providers, and business communities.",
    suitedFor:
      "Relationship-led people who can spot commercial partnerships and keep warm conversations moving professionally.",
    outcomes: [
      "Referral partner conversations",
      "Agency and consultant introductions",
      "Co-selling or channel opportunities",
    ],
    detail:
      "Best for people who can create long-term partner routes through consultants, agencies, technology providers, or business communities.",
    commission: {
      headline: "15–20% on partner-sourced closed deals, plus 5–10% on renewals within the attribution window",
      note: "Applies to co-selling and referral partnerships you originate. Recurring share applies while the partnership remains active per the written agreement.",
    },
    responsibilities: [
      "Find agencies, consultants, IT providers, and business communities that could refer or co-sell with ScotiTech.",
      "Open the first conversation and help qualify whether the partnership is serious.",
      "Support follow-up until there is a clear next step or a polite close.",
    ],
  },
  {
    title: "Product Outreach Representative",
    type: "Commission-based",
    location: "Remote / worldwide",
    icon: Megaphone,
    summary:
      "Run targeted outreach for AppDeploy and AXOS, focusing on practical buyer problems rather than generic sales scripts.",
    suitedFor:
      "People comfortable with outbound email, LinkedIn outreach, follow-ups, and clear CRM discipline.",
    outcomes: [
      "Qualified demos booked",
      "Relevant buyer conversations",
      "Pipeline for product-fit reviews",
    ],
    detail:
      "A good fit if you can research prospects, write clear outreach, follow up respectfully, and book useful product conversations.",
    commission: {
      headline: "Fixed fee per qualified demo booked, plus a conversion share",
      tracks: [
        {
          label: "Enterprise track",
          detail: "£99 per qualified enterprise demo booked, plus 5–10% on demos that convert to closed business.",
          scope: "AXOS and AppDeploy Enterprise",
        },
        {
          label: "SaaS track",
          detail: "£25 per qualified SaaS demo booked, plus 20% of first-year subscription value on demos that convert.",
          scope: "AppDeploy Business (from £79/mo)",
        },
      ],
      note: "A demo qualifies once ScotiTech accepts it as a real product-fit conversation. Conversion share is paid on the resulting first-year contract or subscription value.",
    },
    responsibilities: [
      "Research specific companies and buyer problems before outreach.",
      "Run respectful email or LinkedIn outreach using approved positioning.",
      "Book relevant product-fit conversations and keep outreach notes clear.",
    ],
  },
  {
    title: "Community & Campus Ambassador",
    type: "Referral / commission-based",
    location: "Remote / local community",
    icon: Users,
    summary:
      "Represent ScotiTech in founder, student, professional, and local business communities where relevant technology conversations happen.",
    suitedFor:
      "Students, early-career builders, community organisers, or connectors who want commercial exposure around real software products.",
    outcomes: [
      "Community introductions",
      "Event and ecosystem visibility",
      "Referral-led business conversations",
    ],
    detail:
      "Designed for energetic community builders who can create visibility and warm introductions without hard-selling.",
    commission: {
      headline: "£50–£150 per accepted introduction that reaches a discovery call, plus 10–15% on referrals that convert",
      note: "Introductions are accepted based on relevance and reach. The referral share applies to closed business originating from your introduction within the attribution window.",
    },
    responsibilities: [
      "Represent ScotiTech in relevant founder, student, business, or local technology communities.",
      "Create warm introductions through events, communities, and trusted peer networks.",
      "Share feedback from the market so we understand which messages resonate.",
    ],
  },
];

const commissionTransparency = [
  {
    title: "No salary or retainer",
    body: "These are commission-based growth opportunities. There is no fixed salary, hourly pay, retainer, or guaranteed income attached to these roles.",
  },
  {
    title: "Commission agreed before activity",
    body: "The commission rate, qualifying rules, payment trigger, and payment timing are agreed in writing before you start any outreach, referral, or partnership activity.",
  },
  {
    title: "Payment depends on outcome",
    body: "Commission is normally linked to an accepted qualified opportunity, a booked product-fit conversation, or closed business, depending on the written agreement for that role.",
  },
  {
    title: "No pay for noise",
    body: "Generic contact lists, spam outreach, unapproved claims, duplicate leads, or introductions with no real buyer context do not qualify for commission.",
  },
];

const supportProvided = [
  "Product positioning and approved outreach language.",
  "A clear explanation of which companies and sectors are worth approaching.",
  "Founder or team support for qualified discovery calls.",
  "Written commission terms before any live activity begins.",
];

const heardOptions = [
  "LinkedIn",
  "Friend / referral",
  "ScotiTech website",
  "Founder or team member",
  "College / university",
  "Event / community",
  "Other",
];

function TextField({ label, name, value, onChange, type = "text", required = false, placeholder }) {
  return (
    <label className="block">
      <span className="font-karla text-sm font-semibold text-strong">
        {label}
        {required && <span className="text-brand"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-hairline bg-surface px-4 py-3 font-karla text-sm text-strong outline-none transition-colors placeholder:text-muted/70 focus:border-brand"
      />
    </label>
  );
}

export default function GrowthRoles() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [modalMode, setModalMode] = useState("details");
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const openModal = (role, mode) => {
    setSelectedRole(role);
    setModalMode(mode);
    setStatus("idle");
    setErrorMessage("");
  };

  const closeModal = () => {
    setSelectedRole(null);
    setStatus("idle");
    setErrorMessage("");
  };

  const updateField = (event) => {
    const { name, type, checked, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (status !== "idle") setStatus("idle");
  };

  useEffect(() => {
    if (!selectedRole) return;

    const onKey = (event) => event.key === "Escape" && closeModal();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selectedRole]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.confirm) {
      setStatus("error");
      setErrorMessage("Please confirm the information is accurate before submitting.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    const submission = new FormData();
    submission.append("access_key", accessKey);
    submission.append("Subject", `Growth role application - ${selectedRole.title}`);
    submission.append("Role", selectedRole.title);
    submission.append("Role type", selectedRole.type);
    submission.append("Full name", formData.fullName);
    submission.append("Email", formData.email);
    submission.append("WhatsApp / Phone", formData.phone);
    submission.append("City / Location", formData.location || "Not provided");
    submission.append("College / Organisation", formData.organisation);
    submission.append("Degree & Year / Designation", formData.designation);
    submission.append("LinkedIn Profile URL", formData.linkedin || "Not provided");
    submission.append("Website / Portfolio", formData.website || "Not provided");
    submission.append("How they heard about this role", formData.heardFrom);
    submission.append("Screening video link", formData.videoLink);
    submission.append("Anything else", formData.message || "Not provided");
    submission.append("Confirmed accuracy", formData.confirm ? "Yes" : "No");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submission,
      });

      if (!response.ok) throw new Error("Submission failed");

      setStatus("success");
      setFormData(initialForm);
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please email join@scotitech.com with your application.");
    }
  };

  return (
    <>
      <div className="grid gap-5">
        {growthRoles.map((role, i) => {
          const Icon = role.icon;
          return (
            <Reveal key={role.title} delay={i * 0.06}>
              <article className="group overflow-hidden rounded-2xl border border-hairline bg-surface shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:p-7">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-sunken text-brand-strong">
                        <Icon size={19} />
                      </span>
                      <div>
                        <h3 className="font-karla text-2xl font-bold text-strong">
                          {role.title}
                        </h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <Badge variant="early">{role.type}</Badge>
                          <Badge variant="neutral">{role.location}</Badge>
                        </div>
                      </div>
                    </div>
                    <p className="mt-5 font-lora text-base leading-7 text-body">
                      {role.summary}
                    </p>
                    <p className="mt-4 font-karla text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                      Best suited for
                    </p>
                    <p className="mt-2 font-lora text-sm leading-7 text-body">
                      {role.suitedFor}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Button type="button" onClick={() => openModal(role, "apply")}>
                        Apply now
                        <ArrowRight size={16} />
                      </Button>
                      <Button type="button" variant="outline" onClick={() => openModal(role, "details")}>
                        Role details
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-xl border border-hairline bg-surface-muted p-5 md:w-64">
                    <p className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      Expected outcomes
                    </p>
                    <ul className="mt-4 space-y-3">
                      {role.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-2 font-lora text-sm leading-6 text-body">
                          <Sparkles className="mt-1 h-4 w-4 shrink-0 text-brand" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {selectedRole && modalMode === "details" && (
        <div
          className="fixed inset-x-0 bottom-0 top-[72px] z-[9999] flex items-start justify-center overflow-y-auto bg-ink/60 px-3 py-4 backdrop-blur-sm sm:px-6 sm:py-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Role details for ${selectedRole.title}`}
          onClick={closeModal}
        >
          <div
            className="relative max-h-[calc(100dvh-104px)] w-full max-w-3xl overflow-y-auto rounded-[1.25rem] border border-hairline bg-surface p-5 shadow-lift animate-scale-in sm:rounded-[1.75rem] sm:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close role details popup"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-surface text-muted shadow-soft transition-colors hover:bg-surface-sunken hover:text-strong"
            >
              <X size={18} />
            </button>

            <div className="pr-10">
              <div className="flex flex-wrap gap-2">
                <Badge variant="early">{selectedRole.type}</Badge>
                <Badge variant="neutral">{selectedRole.location}</Badge>
              </div>
              <h2 className="mt-4 font-karla text-3xl font-bold tracking-[-0.03em] text-strong">
                {selectedRole.title}
              </h2>
              <p className="mt-4 font-lora text-base leading-7 text-body">
                {selectedRole.detail}
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-hairline bg-surface-muted p-5">
              <p className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                What you will do
              </p>
              <ul className="mt-4 grid gap-3">
                {selectedRole.responsibilities.map((item) => (
                  <li key={item} className="flex gap-2 font-lora text-sm leading-6 text-body">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 rounded-2xl border border-hairline bg-surface-muted p-5">
              <p className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                What success looks like
              </p>
              <ul className="mt-4 grid gap-3">
                {selectedRole.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-2 font-lora text-sm leading-6 text-body">
                    <Sparkles className="mt-1 h-4 w-4 shrink-0 text-brand" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 rounded-2xl border border-brand/20 bg-brand-soft/40 p-5">
              <p className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-brand-strong">
                Commission for this role
              </p>
              {selectedRole.commission ? (
                <>
                  <p className="mt-3 font-karla text-base font-bold leading-6 text-strong">
                    {selectedRole.commission.headline}
                  </p>
                  {selectedRole.commission.tracks && (
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {selectedRole.commission.tracks.map((track) => (
                        <div
                          key={track.label}
                          className="rounded-xl border border-brand/15 bg-surface p-4"
                        >
                          <p className="font-karla text-xs font-semibold uppercase tracking-[0.14em] text-brand-strong">
                            {track.label}
                          </p>
                          <p className="mt-2 font-karla text-sm font-bold text-strong">
                            {track.scope}
                          </p>
                          <p className="mt-2 font-lora text-sm leading-6 text-body">
                            {track.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  <p className="mt-3 font-lora text-sm leading-6 text-body">
                    {selectedRole.commission.note}
                  </p>
                </>
              ) : (
                <p className="mt-3 font-lora text-sm leading-7 text-body">
                  Commission is linked to qualified opportunities, booked
                  discovery calls, or closed business.
                </p>
              )}
              <p className="mt-4 border-t border-brand/15 pt-3 font-karla text-xs leading-5 text-muted">
                Figures reflect market-standard ranges for similar roles.
                Exact rate, attribution window, and payment timing are
                confirmed in a written agreement before any live activity
                begins.
              </p>
            </div>

            <div className="mt-4 rounded-2xl border border-hairline bg-surface-muted p-5">
              <p className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-brand-strong">
                Commission transparency
              </p>
              <div className="mt-4 grid gap-3">
                {commissionTransparency.map((item) => (
                  <div key={item.title}>
                    <p className="font-karla text-sm font-bold text-strong">{item.title}</p>
                    <p className="mt-1 font-lora text-sm leading-6 text-body">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-hairline bg-surface p-5">
              <p className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                What ScotiTech provides
              </p>
              <ul className="mt-4 grid gap-3">
                {supportProvided.map((item) => (
                  <li key={item} className="flex gap-2 font-lora text-sm leading-6 text-body">
                    <Sparkles className="mt-1 h-4 w-4 shrink-0 text-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button type="button" onClick={() => setModalMode("apply")} className="w-full sm:w-auto">
                Apply for this role
                <ArrowRight size={16} />
              </Button>
              <Button type="button" variant="outline" onClick={closeModal} className="w-full sm:w-auto">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {selectedRole && modalMode === "apply" && (
        <div
          className="fixed inset-x-0 bottom-0 top-[72px] z-[9999] flex items-start justify-center overflow-y-auto bg-ink/60 px-3 py-4 backdrop-blur-sm sm:px-6 sm:py-6 lg:items-center"
          role="dialog"
          aria-modal="true"
          aria-label={`Apply for ${selectedRole.title}`}
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-[1.25rem] border border-hairline bg-surface shadow-lift animate-scale-in sm:rounded-[1.75rem] lg:grid lg:max-h-[calc(100dvh-104px)] lg:grid-cols-[0.78fr_1.22fr]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close application popup"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline bg-surface text-muted shadow-soft transition-colors hover:bg-surface-sunken hover:text-strong lg:right-5 lg:top-5"
            >
              <X size={18} />
            </button>

            <aside className="relative hidden max-h-[calc(100dvh-104px)] overflow-y-auto bg-ink p-8 text-on-ink lg:block lg:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_0%,rgba(226,88,14,0.30),transparent_62%)]" />
              <div className="relative z-10">
                <Badge variant="onInk">{selectedRole.type}</Badge>
                <h2 className="t-h2 mt-5 text-on-ink">{selectedRole.title}</h2>
                <p className="mt-4 font-karla leading-7 text-on-ink-muted">
                  {selectedRole.detail}
                </p>

                <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <p className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-on-ink-muted">
                    What we are looking for
                  </p>
                  <ul className="mt-4 space-y-3">
                    {selectedRole.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-2 font-karla text-sm leading-6 text-on-ink-muted">
                        <Sparkles className="mt-1 h-4 w-4 shrink-0 text-brand-soft" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-6 border-t border-white/10 pt-5 font-karla text-sm leading-7 text-on-ink-muted">
                  This is a commission-based opportunity. Commission terms are
                  agreed in writing before any live outreach, referral, or
                  partnership activity begins.
                </p>
              </div>
            </aside>

            <div className="px-5 pb-6 pt-14 sm:px-8 sm:pb-8 lg:max-h-[calc(100dvh-104px)] lg:overflow-y-auto lg:p-8">
              <div className="max-w-3xl">
                <span className="font-karla text-xs font-semibold uppercase tracking-[0.16em] text-brand-strong">
                  Apply now
                </span>
                <h2 className="mt-2 pr-10 font-karla text-3xl font-bold tracking-[-0.03em] text-strong sm:pr-0">
                  Apply for {selectedRole.title}
                </h2>
                <p className="mt-3 max-w-2xl font-lora text-sm leading-7 text-body">
                  Share enough context for us to understand your network, your
                  communication style, and where you could create qualified
                  business conversations for ScotiTech.
                </p>

                <div className="mt-4 rounded-2xl border border-hairline bg-surface-muted p-4 lg:hidden">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="early">{selectedRole.type}</Badge>
                    <Badge variant="neutral">{selectedRole.location}</Badge>
                  </div>
                  <p className="mt-3 font-lora text-sm leading-7 text-body">
                    {selectedRole.detail}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    <TextField label="Full name" name="fullName" value={formData.fullName} onChange={updateField} required />
                    <TextField label="Email" name="email" type="email" value={formData.email} onChange={updateField} required />
                    <TextField label="WhatsApp / Phone" name="phone" value={formData.phone} onChange={updateField} required />
                    <TextField label="City / Location" name="location" value={formData.location} onChange={updateField} />
                    <TextField label="Current organisation or college" name="organisation" value={formData.organisation} onChange={updateField} required />
                    <TextField label="Current role / course / year" name="designation" value={formData.designation} onChange={updateField} required />
                    <TextField label="LinkedIn profile URL" name="linkedin" type="url" value={formData.linkedin} onChange={updateField} placeholder="https://linkedin.com/in/..." />
                    <TextField label="Website / Portfolio" name="website" type="url" value={formData.website} onChange={updateField} placeholder="Optional" />
                  </div>

                  <label className="block">
                    <span className="font-karla text-sm font-semibold text-strong">
                      How did you hear about this role? <span className="text-brand">*</span>
                    </span>
                    <select
                      name="heardFrom"
                      value={formData.heardFrom}
                      onChange={updateField}
                      required
                      className="mt-2 w-full rounded-xl border border-hairline bg-surface px-4 py-3 font-karla text-sm text-strong outline-none transition-colors focus:border-brand"
                    >
                      <option value="">Select...</option>
                      {heardOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>

                  <div className="rounded-2xl border border-hairline bg-surface-muted p-5">
                    <p className="font-karla text-sm font-bold text-strong">
                      Conversation signal video <span className="text-brand">*</span>
                    </p>
                    <p className="mt-3 font-lora text-sm leading-7 text-body">
                      Record a short 45-75 second video. Do not read your CV.
                      Instead, tell us about one real moment where you opened a
                      door, earned trust, helped someone make a decision, or
                      created momentum from a cold conversation.
                    </p>
                    <p className="mt-3 font-karla text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      What we are listening for
                    </p>
                    <p className="mt-2 font-lora text-sm leading-7 text-body">
                      Clear thinking, natural confidence, useful energy, and a
                      sense that you can represent ScotiTech without sounding
                      scripted. A simple phone recording is completely fine if
                      the audio is clear.
                    </p>
                    <p className="mt-3 font-lora text-sm leading-7 text-body">
                      Share a Google Drive, Loom, or unlisted YouTube link with
                      access enabled.
                    </p>
                    <div className="mt-4">
                      <TextField label="Video Link" name="videoLink" type="url" value={formData.videoLink} onChange={updateField} required placeholder="https://..." />
                    </div>
                  </div>

                  <label className="block">
                    <span className="font-karla text-sm font-semibold text-strong">
                      Anything else you'd like us to know?
                    </span>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={updateField}
                      rows={4}
                      className="mt-2 w-full rounded-xl border border-hairline bg-surface px-4 py-3 font-karla text-sm text-strong outline-none transition-colors placeholder:text-muted/70 focus:border-brand"
                      placeholder="Tell us about your network, experience, or why this role fits you."
                    />
                  </label>

                  <label className="flex gap-3 rounded-xl border border-hairline bg-surface-muted p-4 font-lora text-sm leading-6 text-body">
                    <input
                      type="checkbox"
                      name="confirm"
                      checked={formData.confirm}
                      onChange={updateField}
                      required
                      className="mt-1 h-4 w-4 shrink-0 accent-brand"
                    />
                    <span>
                      I confirm the information provided is accurate, and I
                      understand this is a commission-based opportunity subject
                      to written agreement before any activity begins.
                    </span>
                  </label>

                  {status === "success" && (
                    <div className="flex gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-4 font-karla text-sm text-emerald-800">
                      <CheckCircle2 className="h-5 w-5 shrink-0" />
                      <span>Application submitted. We review growth-role applications on a rolling basis and aim to respond within 5 working days when there is a clear fit.</span>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="flex gap-2 rounded-xl border border-red-200 bg-red-50 p-4 font-karla text-sm text-red-800">
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      <span>{errorMessage || "Please complete all required fields."}</span>
                    </div>
                  )}

                  <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-fit">
                    {status === "sending" ? "Submitting..." : "Submit application"}
                    {status === "sending" ? (
                      <LoaderCircle size={17} className="animate-spin" />
                    ) : (
                      <ArrowRight size={17} />
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

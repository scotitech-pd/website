"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Layers3,
  Send,
  ShieldCheck,
} from "lucide-react";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  role: "",
  industry: "",
  teamSize: "",
  locations: "",
  deploymentModel: "",
  identityProvider: "",
  currentTools: "",
  dataSensitivity: "",
  aiUseCase: "",
  dataSources: "",
  complianceNeeds: "",
  timeline: "",
  message: "",
};

const requiredFields = [
  "name",
  "email",
  "company",
  "industry",
  "deploymentModel",
  "aiUseCase",
];

const selectOptions = {
  industry: [
    "Healthcare or care services",
    "Financial services or accounting",
    "Manufacturing or logistics",
    "Legal or professional services",
    "Education or public sector",
    "Technology or SaaS",
    "Other regulated operations",
  ],
  teamSize: ["1-25", "26-100", "101-500", "501-1,000", "1,000+"],
  deploymentModel: [
    "Hosted evaluation",
    "Private cloud",
    "Self-hosted",
    "On-premises or data centre",
    "Not sure yet",
  ],
  dataSensitivity: [
    "Internal business data",
    "Customer or client records",
    "Employee records",
    "Regulated or confidential data",
    "Mixed sensitivity",
  ],
  timeline: [
    "Immediate evaluation",
    "This quarter",
    "Next 3-6 months",
    "Planning for later",
  ],
};

const planningItems = [
  {
    title: "Deployment fit",
    description: "Hosted, private-cloud, self-hosted, or on-premises path.",
    icon: Layers3,
  },
  {
    title: "Security posture",
    description: "Identity, access, sensitive data, and compliance needs.",
    icon: ShieldCheck,
  },
  {
    title: "AI workflow",
    description: "The first business use case AXOS should support.",
    icon: ClipboardCheck,
  },
];

const textInputClass =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10";

const selectClass =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10";

const textareaClass =
  "min-h-[116px] w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10";

export default function AxosDeploymentDiscovery() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const validateForm = () => {
    const missingField = requiredFields.find((field) => !formData[field].trim());
    if (missingField) {
      return "Please complete the required rollout fields.";
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    if (!emailIsValid) {
      return "Please enter a valid business email address.";
    }

    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationError = validateForm();

    if (validationError) {
      setErrorMessage(validationError);
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const submission = new FormData();
    submission.append("access_key", "cc28a946-1d7c-46a4-aa9f-0bbaa38e5c77");
    submission.append("Subject", "AXOS rollout review request");
    submission.append("Product", "AXOS");
    submission.append("Name", formData.name);
    submission.append("Email", formData.email);
    submission.append("Phone", formData.phone || "Not provided");
    submission.append("Company", formData.company);
    submission.append("Role", formData.role || "Not provided");
    submission.append("Industry", formData.industry);
    submission.append("Team size", formData.teamSize || "Not provided");
    submission.append("Locations", formData.locations || "Not provided");
    submission.append("Preferred deployment model", formData.deploymentModel);
    submission.append("Identity provider", formData.identityProvider || "Not provided");
    submission.append("Current tools", formData.currentTools || "Not provided");
    submission.append("Data sensitivity", formData.dataSensitivity || "Not provided");
    submission.append("Primary AI use case", formData.aiUseCase);
    submission.append("Data sources", formData.dataSources || "Not provided");
    submission.append("Compliance needs", formData.complianceNeeds || "Not provided");
    submission.append("Timeline", formData.timeline || "Not provided");
    submission.append("Additional context", formData.message || "Not provided");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submission,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setFormData(initialFormState);
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "The request could not be sent. Please email info@scotitech.com with your AXOS rollout requirements."
      );
    }
  };

  return (
    <section id="axos-deployment-discovery" className="bg-[#F7F7F5] py-16">
      <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
        <div className="grid gap-8 xl:grid-cols-[34%_66%]">
          <aside className="space-y-5">
            <div className="rounded-[1.5rem] border border-[#111827]/10 bg-[#100E0C] p-7 text-white shadow-[0_28px_80px_rgba(16,14,12,0.18)] sm:p-8 xl:sticky xl:top-28">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#5EEAD4]">
                AXOS rollout review
              </p>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Plan a secure AI workspace around your business.
              </h2>
              <p className="mt-5 font-lora leading-8 text-slate-300">
                Use this brief to request a focused AXOS review. We use your
                answers to recommend a deployment path, first AI workflow, and
                the controls needed before rollout.
              </p>

              <div className="mt-8 grid gap-4">
                {planningItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                  >
                    <item.icon className="mb-3 size-5 text-[#5EEAD4]" />
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-1 font-lora text-sm leading-6 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="rounded-[1.5rem] border border-[#d9ded7] bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
            <div className="mb-8 flex flex-col gap-5 border-b border-slate-200 pb-7 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0F766E]">
                  Rollout brief
                </p>
                <h3 className="text-2xl font-semibold text-slate-950 md:text-4xl">
                  Tell us where AXOS should create value first.
                </h3>
              </div>
              <p className="max-w-md font-lora leading-7 text-slate-600">
                Keep it practical. A strong brief usually starts with one team,
                one sensitive workflow, and one clear AI use case.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-8">
              <FormSection
                number="01"
                title="Organisation"
                description="Basic details for the right commercial and technical follow-up."
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Full name" required>
                    <input
                      className={textInputClass}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Business email" required>
                    <input
                      className={textInputClass}
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                    />
                  </Field>
                  <Field label="Phone">
                    <input
                      className={textInputClass}
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44..."
                    />
                  </Field>
                  <Field label="Company" required>
                    <input
                      className={textInputClass}
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Organisation name"
                    />
                  </Field>
                  <Field label="Role">
                    <input
                      className={textInputClass}
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="Founder, CTO, Operations lead..."
                    />
                  </Field>
                  <SelectField
                    label="Industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    options={selectOptions.industry}
                    required
                  />
                </div>
              </FormSection>

              <FormSection
                number="02"
                title="Deployment context"
                description="The operating environment AXOS needs to fit into."
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <SelectField
                    label="Team size"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    options={selectOptions.teamSize}
                  />
                  <Field label="Locations or regions">
                    <input
                      className={textInputClass}
                      name="locations"
                      value={formData.locations}
                      onChange={handleChange}
                      placeholder="UK, EU, multi-site, remote..."
                    />
                  </Field>
                  <SelectField
                    label="Preferred deployment"
                    name="deploymentModel"
                    value={formData.deploymentModel}
                    onChange={handleChange}
                    options={selectOptions.deploymentModel}
                    required
                  />
                  <Field label="Identity provider">
                    <input
                      className={textInputClass}
                      name="identityProvider"
                      value={formData.identityProvider}
                      onChange={handleChange}
                      placeholder="Microsoft Entra ID, Google, Okta..."
                    />
                  </Field>
                  <Field label="Current tools">
                    <input
                      className={textInputClass}
                      name="currentTools"
                      value={formData.currentTools}
                      onChange={handleChange}
                      placeholder="Teams, Slack, Drive, Jira, SharePoint..."
                    />
                  </Field>
                  <SelectField
                    label="Data sensitivity"
                    name="dataSensitivity"
                    value={formData.dataSensitivity}
                    onChange={handleChange}
                    options={selectOptions.dataSensitivity}
                  />
                </div>
              </FormSection>

              <FormSection
                number="03"
                title="AI workflow"
                description="The first controlled AI use case AXOS should support."
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Primary AI use case" required>
                    <textarea
                      className={textareaClass}
                      name="aiUseCase"
                      value={formData.aiUseCase}
                      onChange={handleChange}
                      placeholder="Example: secure search across policies, summarising case notes, drafting operational reports..."
                    />
                  </Field>
                  <Field label="Business data sources">
                    <textarea
                      className={textareaClass}
                      name="dataSources"
                      value={formData.dataSources}
                      onChange={handleChange}
                      placeholder="Documents, CRM, ERP, file shares, ticketing, internal knowledge base..."
                    />
                  </Field>
                  <Field label="Compliance or security needs">
                    <textarea
                      className={textareaClass}
                      name="complianceNeeds"
                      value={formData.complianceNeeds}
                      onChange={handleChange}
                      placeholder="Data residency, audit logs, role-based access, retention, sector rules..."
                    />
                  </Field>
                  <div className="grid gap-4">
                    <SelectField
                      label="Target timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      options={selectOptions.timeline}
                    />
                    <Field label="Additional context">
                      <textarea
                        className="min-h-[70px] w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Anything else that would help us prepare?"
                      />
                    </Field>
                  </div>
                </div>
              </FormSection>

              {(status === "error" || status === "success") && (
                <div
                  className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${
                    status === "success"
                      ? "border-[#0F766E]/20 bg-[#ECFDF5] text-[#0F766E]"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {status === "success"
                    ? "AXOS rollout brief sent. We will review it and respond with the right next step."
                    : errorMessage}
                </div>
              )}

              <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-lora text-sm leading-6 text-slate-600">
                  Required fields are marked with an asterisk. No account is
                  created from this request.
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#100E0C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1C1714] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? "Sending..." : "Request rollout review"}
                  {status === "submitting" ? (
                    <Send className="size-4" />
                  ) : (
                    <ArrowRight className="size-4" />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormSection({ number, title, description, children }) {
  return (
    <section className="rounded-[1.25rem] border border-slate-200 bg-[#F8FAFC] p-4 sm:p-5">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
            {number}
          </p>
          <h4 className="mt-1 text-xl font-semibold text-slate-950">{title}</h4>
        </div>
        <p className="max-w-md font-lora text-sm leading-6 text-slate-600">
          {description}
        </p>
      </div>
      {children}
    </section>
  );
}

function Field({ label, required = false, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
        {required && <span className="text-[#0F766E]"> *</span>}
      </span>
      {children}
    </label>
  );
}

function SelectField({ label, name, value, onChange, options, required = false }) {
  return (
    <Field label={label} required={required}>
      <select className={selectClass} name={name} value={value} onChange={onChange}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Field>
  );
}

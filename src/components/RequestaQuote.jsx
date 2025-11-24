"use client";

import { useModal } from "@/components/ModalContext";
import { useState, useEffect } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { ArrowRight, X, Check } from "lucide-react";

export default function RequestaQuote() {
  const { showModal, setShowModal } = useModal();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const isPhoneValid = (val) =>
    /^\+?[1-9]\d{7,14}$/.test(val.replace(/\s+/g, ""));

  const services = [
    "AppDeploy",
    "Opsly",
    "ClarityPath",
    "Elder Connect+",
    "AI Caption Studio",
    "Other",
  ];

  // ✅ Close modal and reset all fields
  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setName("");
      setEmail("");
      setCompany("");
      setPhone("");
      setService("");
      setMessage("");
      setSending(false);
      setSuccess(false);
    }, 250);
  };

  // ✅ BACK BUTTON FIX FOR MOBILE + DESKTOP
  useEffect(() => {
    if (showModal) {
      window.history.pushState({ modalOpen: true }, "");
    }

    const handleBack = () => {
      if (showModal) {
        closeModal();
      }
    };

    window.addEventListener("popstate", handleBack);

    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, [showModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isPhoneValid(phone) || !service) return;

    setSending(true);

    const formData = new FormData();
    formData.append("access_key", "cc28a946-1d7c-46a4-aa9f-0bbaa38e5c77");
    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("Company", company);
    formData.append("phone", phone);
    formData.append("Service", service);
    formData.append("Message", message);

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    setSuccess(true);
    setSending(false);

    setTimeout(() => {
      closeModal();
    }, 1200);
  };

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={closeModal}
    >
      <div
        className="relative bg-white rounded-2xl w-full max-w-[420px] shadow-xl animate-scaleIn border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="bg-[#641171] px-6 py-4 rounded-t-2xl">
          <div className="flex justify-between">
            <div>
              <h2 className="text-white text-xl font-karla font-semibold">
                Talk to Sales
              </h2>
              <p className="text-purple-200 text-xs font-karla">
                Fill out the form and we will reach out shortly.
              </p>
            </div>

            <button onClick={closeModal}>
              <X className="text-white w-5 h-5" />
            </button>
          </div>
        </div>

        {/* SUCCESS OVERLAY */}
        {success && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-2xl z-50">
            <div className="flex flex-col items-center gap-3 animate-fadeIn">
              <div className="w-20 h-20 bg-[#641171] rounded-full flex items-center justify-center animate-scaleUp shadow-lg shadow-purple-300">
                <Check className="w-10 h-10 text-white animate-pop" />
              </div>
              <p className="font-karla text-[#641171] text-lg font-semibold">
                Message Sent!
              </p>
            </div>
          </div>
        )}

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="px-6 py-5 space-y-4 max-h-[75vh] overflow-y-auto font-karla"
        >
          <div>
            <label className="text-sm text-gray-700 font-semibold">Full Name *</label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm font-lora text-[#641171] outline-none focus:border-[#641171]"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 font-semibold">Email *</label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm font-lora text-[#641171] outline-none focus:border-[#641171]"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 font-semibold">Company *</label>
            <input
              type="text"
              required
              placeholder="Company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm font-lora text-[#641171] outline-none focus:border-[#641171]"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 font-semibold">Phone *</label>
            <PhoneInput
              defaultCountry="gb"
              value={phone}
              onChange={setPhone}
              inputProps={{
                name: "phone",
                required: true,
                className:
                  "w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm font-lora text-[#641171] outline-none focus:border-[#641171]",
              }}
              className="w-full phone-input-fix"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 font-semibold">Product *</label>
            <select
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm font-karla text-[#641171] outline-none focus:border-[#641171] bg-white"
            >
              <option value="">Select</option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-700 font-semibold">Message *</label>
            <textarea
              rows={3}
              required
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm font-lora text-[#641171] outline-none resize-none focus:border-[#641171]"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full bg-[#641171] hover:bg-[#7c27a1] text-white text-sm py-2 rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            {sending ? "Sending..." : "Send Message"}
            {!sending && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>
      </div>

      <style>{`
        .phone-input-fix .react-international-phone-input-container {
          width: 100%;
        }
        .phone-input-fix .react-international-phone-input {
          width: 100%;
        }
        .phone-input-fix .react-international-phone-country-selector-button {
          border: 1px solid #d1d5db;
          border-radius: 0.5rem 0 0 0.5rem;
          padding: 0.65rem;
          background: white;
          margin-right: 4px; /* ✅ GAP FIX */
        }

        /* Animations */
        .animate-scaleIn { animation: scaleIn .25s ease-out; }
        @keyframes scaleIn { from {transform:scale(.94);opacity:0;} to {transform:scale(1);opacity:1;} }

        .animate-fadeIn { animation: fadeIn .3s ease-out; }
        @keyframes fadeIn { from {opacity:0;} to {opacity:1;} }

        .animate-scaleUp { animation: scaleUp .35s ease-out; }
        @keyframes scaleUp { from {transform:scale(0.6);} to {transform:scale(1);} }

        .animate-pop { animation: pop .35s ease-out; }
        @keyframes pop { from {transform:scale(.4);opacity:0;} to {transform:scale(1);opacity:1;} }
      `}</style>
    </div>
  );
}

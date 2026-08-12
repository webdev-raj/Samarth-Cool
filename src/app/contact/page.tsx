"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, MapPin, Send, ExternalLink, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "AC Repair",
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Hi Samarth Cool, my name is ${formData.name || "Customer"}. I need ${formData.service} service in ${formData.location || "my area"}.${formData.phone ? ` Phone: ${formData.phone}.` : ""}${formData.message ? ` Details: ${formData.message}` : ""}`;

    trackEvent("contact_form_submit", {
      service: formData.service,
      location: formData.location,
    });

    const whatsappUrl = createWhatsAppLink({
      message: formattedMessage,
      source: "contact-form",
    });

    setSubmitted(true);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#F7FAFC]">
      {/* Header */}
      <section className="bg-[#061331] text-white pt-28 py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-blue-950 px-3.5 py-1.5 rounded-full border border-blue-800">
            Direct Service Enquiry
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mt-3">
            Let&apos;s Get Your Cooling Working Again.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-2 max-w-2xl mx-auto">
            Contact Pravin Chavan directly by phone, WhatsApp, or submit your requirement below.
          </p>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left - Contact Details & Map Callout */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">
                  Contact Information
                </h2>

                <div className="space-y-4 text-sm">
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="flex items-center p-4 rounded-2xl bg-blue-50/60 border border-blue-100 hover:bg-blue-100/60 transition-colors text-slate-900 font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-3 text-blue-600 shrink-0" />
                    <div>
                      <span className="text-xs text-slate-500 block font-normal">Call Directly</span>
                      <span>+91 {BUSINESS_INFO.phoneRaw}</span>
                    </div>
                  </a>

                  <a
                    href={createWhatsAppLink({ source: "contact-card" })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 hover:bg-emerald-100/60 transition-colors text-slate-900 font-semibold"
                  >
                    <MessageCircle className="w-5 h-5 mr-3 text-emerald-600 shrink-0 fill-current" />
                    <div>
                      <span className="text-xs text-slate-500 block font-normal">WhatsApp Chat</span>
                      <span>+91 {BUSINESS_INFO.phoneRaw}</span>
                    </div>
                  </a>

                  <div className="flex items-start p-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900">
                    <MapPin className="w-5 h-5 mr-3 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-slate-500 block font-normal">Coverage Areas</span>
                      <span className="font-semibold text-slate-900">Residential & Commercial in Mumbai & Pune</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-blue-600 hover:underline"
                  >
                    <MapPin className="w-4 h-4 mr-1.5" />
                    View Location on Google Maps <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>

              {/* Direct Support Trust Card */}
              <div className="bg-[#061331] text-white rounded-3xl p-7 border border-slate-800 shadow-md space-y-3">
                <div className="flex items-center space-x-2 text-cyan-400 text-xs font-bold uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Master Technician</span>
                </div>
                <h3 className="text-lg font-extrabold text-white">
                  Direct Reply from Pravin Chavan
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  23+ years of experience ensuring every service enquiry receives fast, professional assessment.
                </p>
              </div>
            </div>

            {/* Right - WhatsApp Form Generator */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md">
                <h2 className="text-2xl font-bold text-slate-900 mb-1">
                  Send a Quick Service Enquiry
                </h2>
                <p className="text-xs text-slate-500 mb-6">
                  Fill in your requirements below. Submitting will format your message and open WhatsApp directly.
                </p>

                {submitted && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
                    ✓ WhatsApp opened with your pre-filled message! If it did not open automatically, click the button again.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Raj Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm text-slate-900 outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98214 60883"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm text-slate-900 outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Service Required *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm text-slate-900 outline-none transition bg-white"
                      >
                        <option value="AC Repair">AC Repair</option>
                        <option value="AC Servicing">AC Servicing</option>
                        <option value="AC Installation">AC Installation</option>
                        <option value="Gas Charging">Gas Charging</option>
                        <option value="AC AMC / Maintenance">AC AMC / Maintenance</option>
                        <option value="Refrigerator Repair">Refrigerator Repair</option>
                        <option value="Commercial Refrigeration">Commercial Refrigeration</option>
                        <option value="Hotel & Studio Service">Hotel & Studio Service</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Your Location / Area *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Kandivali West, Mumbai"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm text-slate-900 outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Details / Symptoms (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. AC is not cooling properly and making a buzzing noise."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm text-slate-900 outline-none transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg shadow-emerald-900/20 transition-all flex items-center justify-center space-x-2 active:scale-[0.98]"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Enquiry via WhatsApp</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

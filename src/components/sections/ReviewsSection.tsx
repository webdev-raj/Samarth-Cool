"use client";

import React from "react";
import { Star, MapPin, ExternalLink, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { GSAPWrapper } from "../animations/GSAPWrapper";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { PREFILLED_MESSAGES } from "@/lib/whatsapp";

export function ReviewsSection() {
  return (
    <section className="py-24 bg-[#F7FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GSAPWrapper animation="fadeInUp">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center max-w-4xl mx-auto relative overflow-hidden glow-card">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 aura-cyan rounded-full pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-900 border border-amber-200/80 px-4 py-2 rounded-full text-xs font-black mb-6 shadow-sm">
                <div className="flex text-amber-500 space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                  ))}
                </div>
                <span>Verified Google Business Listing</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Trusted by Customers Across Mumbai & Pune
              </h2>

              <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
                We take pride in transparent diagnostics, punctual technician visits, and dependable AC & refrigeration servicing.
              </p>

              <div className="my-10 py-8 border-y border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="p-2">
                  <span className="text-4xl font-black gradient-text-blue block font-mono">23+</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 block">Years Experience</span>
                </div>
                <div className="p-2">
                  <span className="text-4xl font-black gradient-text-blue block font-mono">Direct</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 block">Pravin Chavan Support</span>
                </div>
                <div className="p-2">
                  <span className="text-4xl font-black gradient-text-blue block font-mono">100%</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 block">Honest Diagnosis</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center py-4 px-7 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/25 transition-all active:scale-[0.98] w-full sm:w-auto"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  View Google Reviews & Location
                  <ExternalLink className="w-3.5 h-3.5 ml-2" />
                </a>

                <WhatsAppButton
                  variant="secondary"
                  message={PREFILLED_MESSAGES.general}
                  source="reviews-cta"
                  className="w-full sm:w-auto text-sm py-4 px-7 bg-slate-100 hover:bg-slate-200 text-slate-900 border-slate-300"
                >
                  WhatsApp Service Enquiry
                </WhatsAppButton>
              </div>

              <div className="mt-6 flex items-center justify-center text-xs text-slate-400 font-semibold">
                <ShieldCheck className="w-4 h-4 mr-1 text-emerald-600" />
                <span>Authentic ratings directly on Google Maps</span>
              </div>
            </div>
          </div>
        </GSAPWrapper>
      </div>
    </section>
  );
}

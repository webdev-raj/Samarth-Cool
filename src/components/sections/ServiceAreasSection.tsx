"use client";

import React from "react";
import { MapPin, Check, ExternalLink } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { GSAPWrapper } from "../animations/GSAPWrapper";
import { WhatsAppButton } from "../ui/WhatsAppButton";

export function ServiceAreasSection() {
  const hubs = [
    "Mumbai Western Suburbs (Andheri, Kandivali, Malad, Bandra, Goregaon, Borivali)",
    "Mumbai Eastern Suburbs (Powai, Ghatkopar, Mulund, Thane, Vashi, Navi Mumbai)",
    "South Mumbai (Worli, Dadar, Lower Parel, Prabhadevi, Nariman Point)",
    "Pune Metropolitan Area (Kothrud, Viman Nagar, Hinjewadi, Baner, Wakad)",
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-[#061331] to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <GSAPWrapper animation="fadeInLeft">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-blue-950 px-3.5 py-1.5 rounded-full border border-blue-800">
                  Regional Coverage
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 tracking-tight">
                  Serving Mumbai & Pune
                </h2>
                <p className="text-base text-slate-300 leading-relaxed">
                  Looking for AC or refrigeration service in Mumbai or Pune? Contact us directly to confirm technician availability in your exact locality.
                </p>
              </GSAPWrapper>

              <GSAPWrapper animation="fadeInLeft" delay={0.1}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {hubs.map((hub, idx) => (
                    <div key={idx} className="flex items-start text-xs text-slate-300 bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                      <Check className="w-4 h-4 mr-2 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{hub}</span>
                    </div>
                  ))}
                </div>
              </GSAPWrapper>
            </div>

            <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl space-y-4 text-center">
              <GSAPWrapper animation="fadeInRight">
                <div className="w-12 h-12 rounded-xl bg-blue-600/30 text-cyan-400 flex items-center justify-center mx-auto mb-2 border border-blue-500/30">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  Check Service Slot in Your Locality
                </h3>
                <p className="text-xs text-slate-300">
                  Send your area name on WhatsApp for quick scheduling confirmation.
                </p>

                <div className="pt-2 space-y-3">
                  <WhatsAppButton
                    variant="primary"
                    message="Hi Samarth Cool, I am located in ______ (Mumbai/Pune). Do you have service availability today?"
                    source="service-areas"
                    className="w-full text-xs py-3"
                  >
                    Confirm Area on WhatsApp
                  </WhatsAppButton>

                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-cyan-400 hover:underline pt-1"
                  >
                    View on Google Maps <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </GSAPWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

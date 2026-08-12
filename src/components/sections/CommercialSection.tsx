"use client";

import React from "react";
import { COMMERCIAL_SECTORS } from "@/lib/services-data";
import { CommercialCard } from "../ui/CommercialCard";
import { GSAPWrapper } from "../animations/GSAPWrapper";
import { WhatsAppButton } from "../ui/WhatsAppButton";

export function CommercialSection() {
  return (
    <section id="commercial" className="py-20 bg-[#061331] text-white relative overflow-hidden">
      {/* Ambient motif background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <GSAPWrapper animation="fadeInUp">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-blue-950 px-3.5 py-1.5 rounded-full border border-blue-800">
              Commercial & Institutional Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 tracking-tight">
              More Than Just Home AC Service.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
              Professional AC & refrigeration support tailored for high-demand commercial environments, hotels, studios, offices, and retail businesses.
            </p>
          </div>
        </GSAPWrapper>

        {/* 4 Commercial Sector Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMERCIAL_SECTORS.map((sector, idx) => (
            <GSAPWrapper key={sector.title} animation="fadeInUp" delay={idx * 0.08}>
              <CommercialCard sector={sector} />
            </GSAPWrapper>
          ))}
        </div>

        {/* Commercial Banner & CTA */}
        <GSAPWrapper animation="fadeInUp" delay={0.4}>
          <div className="mt-14 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-2xl p-8 border border-blue-700/60 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block mb-1">
                Custom Commercial Contracts & Maintenance
              </span>
              <h3 className="text-2xl font-bold text-white">
                Have a large facility or multi-unit commercial project?
              </h3>
              <p className="text-slate-300 text-sm mt-1 max-w-2xl">
                We handle scheduled preventive maintenance, rapid breakdown visits, and complete unit installations for hotels, studios, and corporate offices.
              </p>
            </div>

            <WhatsAppButton
              variant="primary"
              message="Hi Samarth Cool, I need AC/refrigeration service for a commercial space. Please contact me."
              source="commercial-section-cta"
              className="shrink-0 text-sm py-3.5 px-6 shadow-xl"
            >
              Discuss Your Commercial Requirement
            </WhatsAppButton>
          </div>
        </GSAPWrapper>
      </div>
    </section>
  );
}

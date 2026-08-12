"use client";

import React from "react";
import { SERVICES_LIST } from "@/lib/services-data";
import { ServiceCard } from "../ui/ServiceCard";
import { GSAPWrapper } from "../animations/GSAPWrapper";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { PREFILLED_MESSAGES } from "@/lib/whatsapp";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#F7FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <GSAPWrapper animation="fadeInUp">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Complete Cooling Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 tracking-tight">
              AC & Refrigeration Services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              From routine maintenance to urgent repairs, we&apos;ve got your cooling covered across homes, hotels, studios, and commercial spaces.
            </p>
          </div>
        </GSAPWrapper>

        {/* 8 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service, idx) => (
            <GSAPWrapper key={service.id} animation="fadeInUp" delay={idx * 0.05}>
              <ServiceCard service={service} />
            </GSAPWrapper>
          ))}
        </div>

        {/* Bottom Callout */}
        <GSAPWrapper animation="fadeInUp" delay={0.4}>
          <div className="mt-14 bg-blue-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-blue-800">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Need customized cooling service or AMC for your building?
              </h3>
              <p className="text-sm text-blue-200">
                Talk directly to Pravin Chavan for honest assessment and clear pricing.
              </p>
            </div>

            <WhatsAppButton
              variant="primary"
              message={PREFILLED_MESSAGES.general}
              source="services-bottom"
              className="shrink-0 text-sm py-3 px-6 shadow-lg"
            >
              WhatsApp Samarth Cool
            </WhatsAppButton>
          </div>
        </GSAPWrapper>
      </div>
    </section>
  );
}

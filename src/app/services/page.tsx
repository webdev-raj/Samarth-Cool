import React from "react";
import { Metadata } from "next";
import { SERVICES_LIST } from "@/lib/services-data";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CallButton } from "@/components/ui/CallButton";
import { CheckCircle2, AlertCircle, Wrench } from "lucide-react";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "AC & Refrigeration Services | Samarth Cool Mumbai & Pune",
  description:
    "Explore professional AC installation, repair, servicing, gas charging, AMC, and commercial refrigeration services by Pravin Chavan with 23+ years experience.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-28 pb-safe-bottom bg-[#F7FAFC]">
      {/* Page Header */}
      <section className="bg-[#061331] text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-blue-950 px-3.5 py-1.5 rounded-full border border-blue-800">
            23+ Years Field Expertise
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mt-4">
            AC & Refrigeration Services
          </h1>
          <p className="text-lg text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Detailed breakdown of our residential and commercial cooling solutions across Mumbai & Pune.
          </p>
        </div>
      </section>

      {/* Services List Deep-Dive */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm scroll-mt-32 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2">
                  <span className="text-xs font-bold font-mono text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-md">
                    Service 0{index + 1}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 font-medium text-base">
                    {service.shortDescription}
                  </p>
                </div>

                <WhatsAppButton
                  variant="primary"
                  message={service.whatsappMessage}
                  source={`services-page-${service.id}`}
                  className="w-full lg:w-auto text-sm py-3 px-6 shrink-0"
                >
                  Enquire on WhatsApp
                </WhatsAppButton>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                    What This Service Involves
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <div className="space-y-2 pt-2">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center text-xs font-semibold text-slate-800">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-blue-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-4">
                  <div>
                    <div className="flex items-center text-xs font-bold uppercase text-amber-900 mb-1">
                      <AlertCircle className="w-4 h-4 mr-1.5 text-amber-600" />
                      <span>When to Contact a Technician</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-snug pl-5">
                      {service.whenToCall}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-semibold">Need urgent service?</span>
                    <CallButton variant="compact" source={`services-page-${service.id}`}>
                      Call Pravin
                    </CallButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTASection />
    </main>
  );
}

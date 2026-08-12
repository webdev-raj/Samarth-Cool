import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { COMMERCIAL_SECTORS } from "@/lib/services-data";
import { CommercialCard } from "@/components/ui/CommercialCard";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CallButton } from "@/components/ui/CallButton";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "Commercial AC & Refrigeration Service | Hotels, Studios & Offices | Samarth Cool",
  description:
    "Professional AC & refrigeration support for commercial environments, hotels, production studios, offices, and businesses in Mumbai & Pune.",
};

export default function CommercialPage() {
  return (
    <main className="min-h-screen pt-28 pb-safe-bottom bg-[#061331] text-white">
      {/* Header */}
      <section className="py-16 border-b border-slate-800 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-blue-950 px-3.5 py-1.5 rounded-full border border-blue-800">
            Commercial & B2B Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mt-4">
            AC & Refrigeration Support for Commercial Spaces
          </h1>
          <p className="text-lg text-slate-300 mt-3 max-w-3xl mx-auto leading-relaxed">
            Reliable HVAC maintenance, urgent repair, and refrigeration service for Hotels, Shooting Studios, Production Spaces, Offices, and Retail Outlets.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton
              variant="primary"
              message="Hi Samarth Cool, I found your commercial page and would like to discuss AC/refrigeration service for our business."
              source="commercial-page-hero"
              className="w-full sm:w-auto text-sm py-3.5 px-6"
            >
              Discuss Your Requirement on WhatsApp
            </WhatsAppButton>

            <CallButton variant="secondary" source="commercial-page-hero" className="w-full sm:w-auto text-sm py-3.5 px-6">
              Call Direct Support
            </CallButton>
          </div>
        </div>
      </section>

      {/* Target Sectors */}
      <section className="py-16 bg-[#071A45]/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-white">
              Specialized Commercial Sectors
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              Heavy-duty cooling and refrigeration tailored for your exact operational requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMMERCIAL_SECTORS.map((sector) => (
              <CommercialCard key={sector.title} sector={sector} />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Capabilities Highlight */}
      <section className="py-16 bg-[#061331]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-blue-500/30">
              <Image
                src="/images/commercial-cooling.png"
                alt="Commercial AC Maintenance Hotel & Studio"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Commercial Capability
              </span>
              <h2 className="text-3xl font-black text-white leading-tight">
                Preventive Contracts & Emergency Breakdown Response
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Cooling failures in hotels, sound stages, or food refrigeration units can result in severe business disruption. Samarth Cool provides scheduled preventive checkups and fast emergency attendance.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-cyan-400 shrink-0" />
                  <span>Ductable, Cassette, Tower & VRF AC servicing</span>
                </div>
                <div className="flex items-center text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-cyan-400 shrink-0" />
                  <span>Commercial Visi-Chillers & Deep Freezer repair</span>
                </div>
                <div className="flex items-center text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-cyan-400 shrink-0" />
                  <span>Custom annual maintenance contracts (AMC) for businesses</span>
                </div>
                <div className="flex items-center text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-cyan-400 shrink-0" />
                  <span>Direct consultation with Pravin Chavan (23+ Yrs Exp)</span>
                </div>
              </div>

              <div className="pt-4">
                <WhatsAppButton
                  variant="primary"
                  message="Hi Samarth Cool, I would like to schedule a commercial site inspection or get an AMC proposal."
                  source="commercial-capability"
                  className="py-3.5 px-6 text-sm"
                >
                  Request Site Visit on WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </main>
  );
}

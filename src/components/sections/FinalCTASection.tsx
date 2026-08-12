"use client";

import React from "react";
import { BUSINESS_INFO } from "@/lib/constants";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { CallButton } from "../ui/CallButton";
import { PREFILLED_MESSAGES } from "@/lib/whatsapp";
import { GSAPWrapper } from "../animations/GSAPWrapper";
import { ShieldCheck } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#061331] to-[#071A45] text-white relative overflow-hidden border-t border-slate-800">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <GSAPWrapper animation="fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-blue-900/60 border border-blue-500/30 px-4 py-1.5 rounded-full text-xs font-bold text-cyan-300">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Direct Support • Fast Response</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-4">
            Need AC or Refrigeration Service?
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-medium mt-3 leading-relaxed">
            Don&apos;t wait for a small problem to become an expensive repair. Get expert diagnosis from Pravin Chavan today.
          </p>
        </GSAPWrapper>

        <GSAPWrapper animation="fadeInUp" delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <WhatsAppButton
              variant="primary"
              message={PREFILLED_MESSAGES.hero}
              source="final-cta"
              className="w-full sm:w-auto text-base py-4 px-8 shadow-2xl"
            >
              WhatsApp Samarth Cool
            </WhatsAppButton>

            <CallButton
              variant="secondary"
              source="final-cta"
              className="w-full sm:w-auto text-base py-4 px-8"
            >
              Call {BUSINESS_INFO.phone}
            </CallButton>
          </div>

          <p className="text-xs text-slate-400 font-semibold tracking-wider uppercase mt-6">
            23+ Years Experience • Mumbai & Pune Coverage
          </p>
        </GSAPWrapper>
      </div>
    </section>
  );
}

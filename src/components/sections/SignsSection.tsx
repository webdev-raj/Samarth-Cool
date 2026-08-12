"use client";

import React from "react";
import { SIGNS_LIST } from "@/lib/services-data";
import { SignCard } from "../ui/SignCard";
import { GSAPWrapper } from "../animations/GSAPWrapper";
import { WhatsAppButton } from "../ui/WhatsAppButton";

export function SignsSection() {
  return (
    <section className="py-20 bg-[#F7FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GSAPWrapper animation="fadeInUp">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-200">
              Troubleshooting Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 tracking-tight">
              5 Signs Your AC Needs Servicing
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Don&apos;t ignore early symptoms. Spotting these signs early prevents major compressor damage and keeps energy bills under control.
            </p>
          </div>
        </GSAPWrapper>

        {/* 5 Signs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SIGNS_LIST.map((sign, idx) => (
            <GSAPWrapper key={sign.number} animation="fadeInUp" delay={idx * 0.08}>
              <SignCard sign={sign} />
            </GSAPWrapper>
          ))}

          {/* CTA Card fillers */}
          <GSAPWrapper animation="fadeInUp" delay={0.4}>
            <div className="bg-gradient-to-br from-[#061331] to-blue-950 rounded-2xl p-7 text-white flex flex-col justify-between h-full shadow-lg border border-blue-900">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  Quick Technical Advice
                </span>
                <h3 className="text-2xl font-black text-white mt-2 mb-3">
                  Still Having Problems?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Get direct advice from Pravin Chavan with 23+ years of experience before booking a service visit.
                </p>
              </div>

              <WhatsAppButton
                variant="primary"
                message="Hi Samarth Cool, my AC is showing warning signs. I need technical advice."
                source="signs-cta-card"
                className="w-full text-sm py-3"
              >
                Get Your AC Checked
              </WhatsAppButton>
            </div>
          </GSAPWrapper>
        </div>
      </div>
    </section>
  );
}

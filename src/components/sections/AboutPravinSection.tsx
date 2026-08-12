"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, MessageCircle } from "lucide-react";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { GSAPWrapper } from "../animations/GSAPWrapper";

export function AboutPravinSection() {
  return (
    <section id="about" className="py-20 bg-[#F7FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left - Large Photo */}
          <div className="lg:col-span-5">
            <GSAPWrapper animation="fadeInLeft">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                  <Image
                    src="/images/pravin-chavan.png"
                    alt="Pravin Chavan - Founder & Senior AC Technician"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061331]/90 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 shadow-xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                      Founder & Master Technician
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900">
                      Pravin Chavan
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      23+ Years Field Experience in Mumbai & Pune
                    </p>
                  </div>
                </div>
              </div>
            </GSAPWrapper>
          </div>

          {/* Right - Bio Story & Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <GSAPWrapper animation="fadeInRight">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                The Person Behind Samarth Cool
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 tracking-tight">
                Meet Pravin Chavan
              </h2>
              <p className="text-lg font-medium text-slate-700 leading-relaxed mt-2">
                &ldquo;With 23+ years of hands-on experience in AC and refrigeration service, Pravin Chavan has built Samarth Cool around practical expertise, reliable service and direct customer support.&rdquo;
              </p>
            </GSAPWrapper>

            <GSAPWrapper animation="fadeInRight" delay={0.1}>
              <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <p>
                  Pravin began his technical journey over two decades ago, working directly on complex HVAC systems, split air conditioners, cassette units, and commercial refrigeration setups.
                </p>
                <p>
                  Unlike large call-center aggregators where sub-contracted technicians change every visit, Pravin personally oversees operations, ensures proper diagnosis, and maintains direct communication with clients.
                </p>
                <p>
                  Today, Samarth Cool combines that deep experience with modern service efficiency to make it effortless for residential and commercial customers across Mumbai and Pune to get dependable cooling support.
                </p>
              </div>
            </GSAPWrapper>

            {/* Experience Spectrum & Timeline */}
            <GSAPWrapper animation="fadeInRight" delay={0.2}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Proven Experience Across
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold text-slate-800">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-1.5 text-blue-600 shrink-0" />
                    <span>Homes & Apartments</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-1.5 text-blue-600 shrink-0" />
                    <span>Hotels & Dining</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-1.5 text-blue-600 shrink-0" />
                    <span>Studios & Shoots</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-1.5 text-blue-600 shrink-0" />
                    <span>Offices & Retail</span>
                  </div>
                </div>
              </div>
            </GSAPWrapper>

            <GSAPWrapper animation="fadeInRight" delay={0.3}>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <WhatsAppButton
                  variant="primary"
                  message="Hi Pravin, I saw your profile on Samarth Cool website and would like to consult you about AC service."
                  source="about-pravin"
                  className="py-3.5 px-6 text-sm"
                >
                  <MessageCircle className="w-5 h-5 mr-2 fill-current" />
                  Talk to Pravin on WhatsApp
                </WhatsAppButton>

                <div className="flex items-center text-xs text-slate-500 font-medium">
                  <ShieldCheck className="w-4 h-4 mr-1.5 text-emerald-600 shrink-0" />
                  <span>Direct technician reply • No call center delays</span>
                </div>
              </div>
            </GSAPWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

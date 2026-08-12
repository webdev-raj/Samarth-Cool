"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, MapPin, Clock, ArrowRight, Award } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { CallButton } from "../ui/CallButton";
import { PREFILLED_MESSAGES } from "@/lib/whatsapp";
import { GSAPWrapper } from "../animations/GSAPWrapper";

export function HeroSection() {
  return (
    <section className="relative bg-[#061331] text-white pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-slate-800">
      {/* Background Cooling Motif Elements */}
      <div className="absolute inset-0 cooling-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <GSAPWrapper animation="fadeInUp" delay={0.1}>
              {/* Trust Highlight Badge */}
              <div className="inline-flex items-center space-x-2 bg-blue-900/60 border border-blue-500/30 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-bold tracking-wide uppercase text-cyan-300">
                  {BUSINESS_INFO.differentiator}
                </span>
              </div>
            </GSAPWrapper>

            <GSAPWrapper animation="fadeInUp" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                23+ YEARS OF KEEPING{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  MUMBAI & PUNE
                </span>{" "}
                COOL.
              </h1>
            </GSAPWrapper>

            <GSAPWrapper animation="fadeInUp" delay={0.3}>
              <p className="text-lg sm:text-xl font-medium text-slate-300 max-w-2xl leading-relaxed">
                Professional AC & Refrigeration Service for Homes, Hotels, Studios & Businesses.
              </p>
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-2 leading-relaxed">
                From everyday AC servicing to complex refrigeration and commercial cooling requirements, Samarth Cool brings more than two decades of hands-on experience by Pravin Chavan.
              </p>
            </GSAPWrapper>

            {/* CTAs Group */}
            <GSAPWrapper animation="fadeInUp" delay={0.4}>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <WhatsAppButton
                  variant="primary"
                  message={PREFILLED_MESSAGES.hero}
                  source="hero-main"
                  className="w-full sm:w-auto text-base py-3.5 px-6 shadow-xl"
                >
                  WhatsApp for Service
                </WhatsAppButton>

                <CallButton
                  variant="secondary"
                  source="hero-main"
                  className="w-full sm:w-auto text-base py-3.5 px-6"
                >
                  Call {BUSINESS_INFO.phone}
                </CallButton>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center text-sm font-semibold text-slate-300 hover:text-cyan-400 py-3 px-4 transition-colors"
                >
                  View Services <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </GSAPWrapper>

            {/* Hero Trust Badges Grid */}
            <GSAPWrapper animation="fadeInUp" delay={0.5}>
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-900/50 text-cyan-400 flex items-center justify-center border border-blue-500/20 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold block text-white">23+ Years</span>
                    <span className="text-[11px] text-slate-400 block">Experience</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-900/50 text-cyan-400 flex items-center justify-center border border-blue-500/20 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold block text-white">Homes + B2B</span>
                    <span className="text-[11px] text-slate-400 block">Commercial</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-900/50 text-cyan-400 flex items-center justify-center border border-blue-500/20 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold block text-white">Mumbai & Pune</span>
                    <span className="text-[11px] text-slate-400 block">Coverage</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-900/50 text-cyan-400 flex items-center justify-center border border-blue-500/20 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold block text-white">Quick Response</span>
                    <span className="text-[11px] text-slate-400 block">Direct Tech</span>
                  </div>
                </div>
              </div>
            </GSAPWrapper>
          </div>

          {/* Right Column - Pravin Chavan Photo & Service Visual Card */}
          <div className="lg:col-span-5 relative">
            <GSAPWrapper animation="fadeInRight" delay={0.3}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Visual Card Container */}
                <div className="relative rounded-3xl overflow-hidden border border-blue-500/30 bg-slate-900/80 shadow-2xl p-2 navy-card-glow">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/pravin-chavan.png"
                      alt="Pravin Chavan - Senior AC & Refrigeration Specialist"
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061331] via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#061331]/90 backdrop-blur-md border border-slate-700/80">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-base font-extrabold text-white">
                            Pravin Chavan
                          </h3>
                          <p className="text-xs text-cyan-400 font-medium">
                            Founder & Senior Cooling Specialist
                          </p>
                        </div>
                        <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-inner">
                          23+ Yrs Exp
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Supporting Trust Badge Overlay */}
                  <div className="p-4 bg-slate-900/90 rounded-xl mt-2 flex items-center justify-between text-xs border border-slate-800">
                    <div className="flex items-center space-x-2 text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>Available for Urgent Service Enquiries</span>
                    </div>
                    <span className="font-semibold text-cyan-400">Direct Contact</span>
                  </div>
                </div>
              </div>
            </GSAPWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

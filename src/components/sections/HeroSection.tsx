"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, MapPin, Clock, ArrowRight, Award, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { CallButton } from "../ui/CallButton";
import { PREFILLED_MESSAGES } from "@/lib/whatsapp";
import { GSAPWrapper } from "../animations/GSAPWrapper";

export function HeroSection() {
  return (
    <section className="relative bg-[#061331] text-white pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden border-b border-slate-800/80">
      {/* Ambient Micro-Grid & Aura Glows */}
      <div className="absolute inset-0 cooling-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] aura-cyan rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-[600px] h-[600px] aura-blue rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <GSAPWrapper animation="fadeInUp" delay={0.1}>
              {/* Trust Badge Pill */}
              <div className="inline-flex items-center space-x-2.5 bg-slate-900/90 border border-cyan-500/30 px-4 py-2 rounded-full shadow-lg backdrop-blur-md">
                <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-bold tracking-wide uppercase text-cyan-300">
                  {BUSINESS_INFO.differentiator}
                </span>
              </div>
            </GSAPWrapper>

            <GSAPWrapper animation="fadeInUp" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
                23+ YEARS OF KEEPING{" "}
                <span className="gradient-text-cyan">
                  MUMBAI & PUNE
                </span>{" "}
                COOL.
              </h1>
            </GSAPWrapper>

            <GSAPWrapper animation="fadeInUp" delay={0.3}>
              <p className="text-lg sm:text-xl font-medium text-slate-200 max-w-2xl leading-relaxed">
                Professional AC & Refrigeration Service for Homes, Hotels, Studios & Businesses.
              </p>
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-2 leading-relaxed">
                From everyday AC servicing to complex refrigeration and commercial cooling requirements, Samarth Cool brings more than two decades of hands-on experience by Pravin Chavan.
              </p>
            </GSAPWrapper>

            {/* CTAs Group */}
            <GSAPWrapper animation="fadeInUp" delay={0.4}>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <WhatsAppButton
                  variant="primary"
                  message={PREFILLED_MESSAGES.hero}
                  source="hero-main"
                  showPulse
                  className="w-full sm:w-auto text-base py-4 px-5 shadow-xl shadow-emerald-900/40"
                >
                  WhatsApp for Service
                </WhatsAppButton>

                <CallButton
                  variant="secondary"
                  source="hero-main"
                  className="w-full sm:w-auto text-base py-4 px-5 bg-slate-800/90 hover:bg-slate-800 text-white border-slate-700"
                >
                  Call {BUSINESS_INFO.phone}
                </CallButton>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center text-sm font-semibold text-slate-300 hover:text-cyan-400 py-3 px-4 transition-colors group"
                >
                  View Services <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </GSAPWrapper>

            {/* Hero Trust Badges Grid */}
            <GSAPWrapper animation="fadeInUp" delay={0.5}>
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex items-center space-x-3 bg-slate-900/60 p-3 rounded-2xl border border-slate-800/80">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center border border-blue-500/30 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold block text-white">23+ Years</span>
                    <span className="text-[11px] text-slate-400 block">Experience</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-slate-900/60 p-3 rounded-2xl border border-slate-800/80">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center border border-blue-500/30 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold block text-white">Homes + B2B</span>
                    <span className="text-[11px] text-slate-400 block">Commercial</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-slate-900/60 p-3 rounded-2xl border border-slate-800/80">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center border border-blue-500/20 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold block text-white">Mumbai & Pune</span>
                    <span className="text-[11px] text-slate-400 block">Coverage</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-slate-900/60 p-3 rounded-2xl border border-slate-800/80">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center border border-blue-500/20 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold block text-white">Quick Response</span>
                    <span className="text-[11px] text-slate-400 block">Direct Tech</span>
                  </div>
                </div>
              </div>
            </GSAPWrapper>
          </div>

          {/* Right Column - Pravin Chavan Photo Card with Floating Glass Stat Cards */}
          <div className="lg:col-span-5 relative">
            <GSAPWrapper animation="fadeInRight" delay={0.3}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Visual Card Container */}
                <div className="relative rounded-3xl overflow-hidden p-2 dark-glow-card">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/pravin-chavan.jpeg"
                      alt="Pravin Chavan - Senior AC & Refrigeration Specialist"
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover object-top hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061331] via-transparent to-transparent opacity-85" />

                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#061331]/95 backdrop-blur-md border border-cyan-500/30 shadow-2xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-extrabold text-white">
                            Pravin Chavan
                          </h3>
                          <p className="text-xs text-cyan-400 font-medium">
                            Founder & Master Cooling Technician
                          </p>
                        </div>
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-inner">
                          23+ Yrs Exp
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Supporting Trust Badge Overlay */}
                  <div className="p-4 bg-slate-950/80 rounded-xl mt-2 flex items-center justify-between text-xs border border-slate-800">
                    <div className="flex items-center space-x-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Direct Technician Attendance • No Agents</span>
                    </div>
                    <span className="font-bold text-cyan-400">Available</span>
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

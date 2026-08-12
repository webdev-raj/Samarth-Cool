"use client";

import React from "react";
import { WHY_SAMARTH_COOL } from "@/lib/services-data";
import { Award, SearchCheck, Home, MessageSquare, MapPin, CheckCircle2, LucideIcon } from "lucide-react";
import { GSAPWrapper } from "../animations/GSAPWrapper";

const iconMap: Record<string, LucideIcon> = {
  Award,
  SearchCheck,
  Home,
  MessageSquare,
  MapPin,
  CheckCircle2,
};

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GSAPWrapper animation="fadeInUp">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Proven Local Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 tracking-tight">
              Experience You Can Count On.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              Built on 23+ years of real-world field experience, honest diagnostics, and direct technician support.
            </p>
          </div>
        </GSAPWrapper>

        {/* Highlight 23+ Banner */}
        <GSAPWrapper animation="fadeInUp" delay={0.1}>
          <div className="bg-gradient-to-r from-[#061331] via-blue-950 to-[#061331] rounded-3xl p-8 lg:p-10 text-white mb-12 shadow-xl border border-blue-900 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-block bg-blue-600/40 text-cyan-300 text-xs font-bold uppercase px-3 py-1 rounded-full border border-blue-500/30">
                Core Differentiator
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                23+ Years of Hands-on Experience
              </h3>
              <p className="text-slate-300 text-sm max-w-xl">
                We focus on solving the root cooling problem, not quick temporary fixes. Every job is handled with technical precision.
              </p>
            </div>

            <div className="bg-blue-600/30 border border-blue-400/40 rounded-2xl px-8 py-5 text-center shrink-0">
              <span className="text-4xl sm:text-5xl font-black text-cyan-400 block font-mono">
                2003 – 2026
              </span>
              <span className="text-xs text-slate-300 font-semibold uppercase tracking-wider mt-1 block">
                Serving Mumbai & Pune
              </span>
            </div>
          </div>
        </GSAPWrapper>

        {/* 6 Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_SAMARTH_COOL.map((item, idx) => {
            const Icon = iconMap[item.iconName] || CheckCircle2;
            return (
              <GSAPWrapper key={item.title} animation="fadeInUp" delay={idx * 0.07}>
                <div className="bg-[#F7FAFC] rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 hover:bg-white transition-all duration-300 shadow-sm flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </GSAPWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

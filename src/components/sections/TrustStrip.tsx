"use client";

import React from "react";
import { Award, Home, MapPin, ShieldCheck } from "lucide-react";
import { GSAPWrapper } from "../animations/GSAPWrapper";

export function TrustStrip() {
  const stats = [
    {
      icon: Award,
      title: "23+ Years",
      subtitle: "Hands-on Experience",
    },
    {
      icon: Home,
      title: "Homes + Commercial",
      subtitle: "Residential & B2B Service",
    },
    {
      icon: MapPin,
      title: "Mumbai + Pune",
      subtitle: "Complete Area Coverage",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Service",
      subtitle: "Honest & Direct Support",
    },
  ];

  return (
    <section className="bg-white border-b border-slate-200/80 py-8 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <GSAPWrapper key={idx} animation="fadeInUp" delay={idx * 0.1}>
                <div className="flex items-center space-x-4 pt-4 md:pt-0 md:pl-6 first:pl-0">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-inner">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                      {stat.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">
                      {stat.subtitle}
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

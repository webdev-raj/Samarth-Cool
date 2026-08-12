"use client";

import React from "react";
import {
  Wrench,
  Settings,
  Wind,
  Gauge,
  ShieldCheck,
  Snowflake,
  Building2,
  Film,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { ServiceItem } from "@/lib/services-data";
import { WhatsAppButton } from "./WhatsAppButton";
import Link from "next/link";

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  Settings,
  Wind,
  Gauge,
  ShieldCheck,
  Snowflake,
  Building2,
  Clapboard: Film,
  Film,
};

interface ServiceCardProps {
  service: ServiceItem;
  showLearnMore?: boolean;
}

export function ServiceCard({ service, showLearnMore = true }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Wrench;

  return (
    <div className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-cyan-400/60 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-cyan-400 text-blue-600 group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-inner">
            <IconComponent className="w-6 h-6 stroke-[2.2]" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
            Verified Service
          </span>
        </div>

        <h3 className="text-xl font-extrabold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        {service.id === "gas-charging" && (
          <div className="mb-6 bg-amber-50/90 border-l-4 border-amber-400 p-3 rounded-r-xl text-xs text-amber-900 leading-snug">
            <strong className="font-semibold block mb-0.5">Diagnostic Note:</strong>
            Gas refilling is performed only after verifying and fixing physical coil/pipe leaks.
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {showLearnMore && (
          <Link
            href={`/services#${service.id}`}
            className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors group/link"
          >
            Learn details <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        )}
        <WhatsAppButton
          variant="compact"
          message={service.whatsappMessage}
          source={`service-${service.id}`}
          className="w-full sm:w-auto text-xs py-2.5 px-4 rounded-xl"
        >
          Enquire on WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  );
}

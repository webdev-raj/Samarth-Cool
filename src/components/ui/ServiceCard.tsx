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
    <div className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-inner">
            <IconComponent className="w-6 h-6 stroke-[2]" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
            Verified Service
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        {service.id === "gas-charging" && (
          <div className="mb-6 bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r-lg text-xs text-amber-900 leading-snug">
            <strong className="font-semibold block mb-0.5">Diagnostic Note:</strong>
            Gas refilling is performed only after verifying and fixing physical coil/pipe leaks.
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {showLearnMore && (
          <Link
            href="/services"
            className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
          >
            Learn details <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        )}
        <WhatsAppButton
          variant="compact"
          message={service.whatsappMessage}
          source={`service-${service.id}`}
          className="w-full sm:w-auto text-xs py-2 px-3.5"
        >
          Enquire on WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  );
}

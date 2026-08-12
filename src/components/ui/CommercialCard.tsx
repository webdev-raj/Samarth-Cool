"use client";

import React from "react";
import { Hotel, Film, Building, Store, LucideIcon } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const iconMap: Record<string, LucideIcon> = {
  Hotel,
  Film,
  Building,
  Store,
};

interface CommercialCardProps {
  sector: {
    title: string;
    description: string;
    iconName: string;
    whatsappMessage: string;
  };
}

export function CommercialCard({ sector }: CommercialCardProps) {
  const IconComponent = iconMap[sector.iconName] || Building;

  return (
    <div className="bg-slate-900/90 rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between h-full text-white shadow-xl">
      <div>
        <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-cyan-400 border border-blue-500/30 flex items-center justify-center mb-5">
          <IconComponent className="w-6 h-6 stroke-[2]" />
        </div>

        <h3 className="text-xl font-bold mb-3 text-white">
          {sector.title}
        </h3>

        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {sector.description}
        </p>
      </div>

      <WhatsAppButton
        variant="secondary"
        message={sector.whatsappMessage}
        source={`commercial-${sector.title.toLowerCase().replace(/\s+/g, "-")}`}
        className="w-full text-sm py-2.5 bg-blue-600/30 hover:bg-blue-600 text-white border-blue-500/40"
      >
        Discuss Requirement
      </WhatsAppButton>
    </div>
  );
}

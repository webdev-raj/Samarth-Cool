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
    <div className="dark-glow-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between h-full text-white relative overflow-hidden group">
      <div>
        <div className="w-13 h-13 rounded-2xl bg-blue-600/20 text-cyan-400 border border-blue-500/40 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg">
          <IconComponent className="w-6 h-6 stroke-[2]" />
        </div>

        <h3 className="text-xl font-extrabold mb-3 text-white group-hover:text-cyan-400 transition-colors">
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
        className="w-full text-xs py-3 bg-blue-600/30 hover:bg-blue-600 text-white border-blue-500/40 rounded-xl"
      >
        Discuss Requirement
      </WhatsAppButton>
    </div>
  );
}

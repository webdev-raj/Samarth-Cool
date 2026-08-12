"use client";

import React from "react";
import {
  ThermometerSnowflake,
  Wind,
  VolumeX,
  Droplets,
  Zap,
  LucideIcon,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { SignCardItem } from "@/lib/services-data";

const iconMap: Record<string, LucideIcon> = {
  ThermometerSnowflake,
  Wind,
  VolumeX,
  Droplets,
  Zap,
};

interface SignCardProps {
  sign: SignCardItem;
}

export function SignCard({ sign }: SignCardProps) {
  const IconComponent = iconMap[sign.iconName] || AlertCircle;

  return (
    <div className="glow-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between h-full relative overflow-hidden">
      <div>
        <div className="flex items-center justify-between mb-5">
          <span className="text-4xl font-black gradient-text-blue font-mono tracking-tight">
            {sign.number}
          </span>
          <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner">
            <IconComponent className="w-5 h-5 stroke-[2.2]" />
          </div>
        </div>

        <h3 className="text-xl font-extrabold text-slate-900 mb-2.5">
          {sign.title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {sign.description}
        </p>

        <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
          <div className="bg-emerald-50/80 p-3.5 rounded-2xl border border-emerald-200/60">
            <div className="flex items-center font-bold text-emerald-900 mb-1">
              <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-600 shrink-0" />
              <span>Safe Check:</span>
            </div>
            <p className="text-emerald-800 leading-snug pl-5 font-medium">{sign.whatToCheck}</p>
          </div>

          <div className="bg-amber-50/80 p-3.5 rounded-2xl border border-amber-200/60">
            <div className="flex items-center font-bold text-amber-900 mb-1">
              <AlertCircle className="w-4 h-4 mr-1.5 text-amber-600 shrink-0" />
              <span>When to call technician:</span>
            </div>
            <p className="text-amber-800 leading-snug pl-5 font-medium">{sign.whenToCall}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

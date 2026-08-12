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
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl font-black text-blue-600/30 font-mono tracking-tighter">
            {sign.number}
          </span>
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <IconComponent className="w-5 h-5 stroke-[2]" />
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2">
          {sign.title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          {sign.description}
        </p>

        <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
            <div className="flex items-center font-semibold text-slate-700 mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-blue-600 shrink-0" />
              <span>Safe Check:</span>
            </div>
            <p className="text-slate-600 leading-snug pl-5">{sign.whatToCheck}</p>
          </div>

          <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-200/50">
            <div className="flex items-center font-semibold text-amber-900 mb-1">
              <AlertCircle className="w-3.5 h-3.5 mr-1.5 text-amber-600 shrink-0" />
              <span>When to call technician:</span>
            </div>
            <p className="text-amber-800 leading-snug pl-5">{sign.whenToCall}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { PhoneCall } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

interface CallButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "compact";
  className?: string;
  source?: string;
  showIcon?: boolean;
}

export function CallButton({
  children = "Call Now",
  variant = "secondary",
  className = "",
  source = "general",
  showIcon = true,
}: CallButtonProps) {
  const handleClick = () => {
    trackEvent("call_click", { source, phone: BUSINESS_INFO.phone });
  };

  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded-xl active:scale-[0.98]";

  let variantStyles = "";
  if (variant === "primary") {
    variantStyles =
      "bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 text-base shadow-lg shadow-blue-900/20 font-semibold";
  } else if (variant === "secondary") {
    variantStyles =
      "bg-slate-100 hover:bg-slate-200 text-slate-900 px-5 py-3 text-base font-semibold border border-slate-300";
  } else if (variant === "outline") {
    variantStyles =
      "border-2 border-blue-600 text-blue-700 hover:bg-blue-50/50 px-4 py-2.5 text-sm font-semibold";
  } else if (variant === "compact") {
    variantStyles =
      "bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-2 text-sm font-medium shadow-sm";
  }

  return (
    <a
      href={BUSINESS_INFO.phoneTel}
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {showIcon && <PhoneCall className="w-5 h-5 mr-2 shrink-0" />}
      <span>{children}</span>
    </a>
  );
}

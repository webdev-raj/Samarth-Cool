"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { createWhatsAppLink, WhatsAppOptions } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

interface WhatsAppButtonProps extends WhatsAppOptions {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "compact" | "badge";
  className?: string;
  showIcon?: boolean;
  showPulse?: boolean;
}

export function WhatsAppButton({
  message,
  source = "general",
  service,
  location,
  children = "WhatsApp Now",
  variant = "primary",
  className = "",
  showIcon = true,
  showPulse = false,
}: WhatsAppButtonProps) {
  const href = createWhatsAppLink({ message, source, service, location });

  const handleClick = () => {
    trackEvent("whatsapp_click", { source, service, location });
  };

  const baseStyles =
    "group relative inline-flex items-center justify-center font-bold tracking-tight transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 rounded-xl active:scale-[0.97]";

  let variantStyles = "";
  if (variant === "primary") {
    variantStyles =
      "bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white px-5 py-3.5 text-base shadow-lg shadow-emerald-900/25 hover:shadow-emerald-500/35 border border-emerald-400/30";
  } else if (variant === "secondary") {
    variantStyles =
      "bg-white/10 hover:bg-white/20 text-white border border-emerald-400/40 backdrop-blur-md px-5 py-3.5 text-base shadow-md";
  } else if (variant === "outline") {
    variantStyles =
      "border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white px-4 py-2.5 text-sm";
  } else if (variant === "compact") {
    variantStyles =
      "bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white px-4 py-2 text-sm shadow-md border border-emerald-400/30";
  } else if (variant === "badge") {
    variantStyles =
      "bg-emerald-500/10 text-emerald-700 border border-emerald-500/30 hover:bg-emerald-500/20 px-3 py-1 text-xs font-semibold rounded-full";
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {showPulse && (
        <span className="relative flex h-2.5 w-2.5 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-300" />
        </span>
      )}
      {showIcon && <MessageCircle className="w-5 h-5 mr-2 shrink-0 fill-current group-hover:rotate-6 transition-transform duration-300" />}
      <span>{children}</span>
    </a>
  );
}

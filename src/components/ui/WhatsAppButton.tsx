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
}: WhatsAppButtonProps) {
  const href = createWhatsAppLink({ message, source, service, location });

  const handleClick = () => {
    trackEvent("whatsapp_click", { source, service, location });
  };

  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 rounded-xl active:scale-[0.98]";

  let variantStyles = "";
  if (variant === "primary") {
    variantStyles =
      "bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 text-base shadow-lg shadow-emerald-900/20 hover:shadow-emerald-600/30 font-semibold";
  } else if (variant === "secondary") {
    variantStyles =
      "bg-white/10 hover:bg-white/20 text-white border border-emerald-400/30 px-5 py-3 text-base font-semibold backdrop-blur-sm";
  } else if (variant === "outline") {
    variantStyles =
      "border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white px-4 py-2.5 text-sm font-semibold";
  } else if (variant === "compact") {
    variantStyles =
      "bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 text-sm shadow-md font-medium";
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
      {showIcon && <MessageCircle className="w-5 h-5 mr-2 shrink-0 fill-current" />}
      <span>{children}</span>
    </a>
  );
}

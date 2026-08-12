"use client";

import React from "react";
import { PhoneCall, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { createWhatsAppLink, PREFILLED_MESSAGES } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export function MobileBottomBar() {
  const whatsappHref = createWhatsAppLink({
    message: PREFILLED_MESSAGES.hero,
    source: "sticky-mobile-bar",
  });

  const handleCallClick = () => {
    trackEvent("call_click", { source: "sticky-mobile-bar" });
  };

  const handleWhatsAppClick = () => {
    trackEvent("whatsapp_click", { source: "sticky-mobile-bar" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#061331]/95 backdrop-blur-md border-t border-slate-800 p-3 shadow-2xl safe-area-bottom">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
        {/* Call Button */}
        <a
          href={BUSINESS_INFO.phoneTel}
          onClick={handleCallClick}
          className="flex items-center justify-center py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm shadow-md transition-colors active:scale-[0.98]"
        >
          <PhoneCall className="w-4 h-4 mr-2 text-cyan-400 shrink-0" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="flex items-center justify-center py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-900/30 transition-colors active:scale-[0.98]"
        >
          <MessageCircle className="w-4 h-4 mr-2 fill-current shrink-0" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

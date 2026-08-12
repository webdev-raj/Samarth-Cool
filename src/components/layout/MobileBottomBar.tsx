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
    <div className="fixed bottom-3 left-3 right-3 z-40 lg:hidden safe-area-bottom">
      <div className="max-w-md mx-auto bg-[#061331]/95 backdrop-blur-xl border border-slate-700/80 p-2.5 rounded-2xl shadow-2xl grid grid-cols-2 gap-2.5">
        {/* Call Button */}
        <a
          href={BUSINESS_INFO.phoneTel}
          onClick={handleCallClick}
          className="flex items-center justify-center py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs shadow-md transition-all active:scale-[0.97]"
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
          className="flex items-center justify-center py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs shadow-md shadow-emerald-900/40 transition-all active:scale-[0.97]"
        >
          <MessageCircle className="w-4 h-4 mr-2 fill-current shrink-0" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

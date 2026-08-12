"use client";

import React from "react";
import Link from "next/link";
import { X, Phone, ShieldCheck, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { PREFILLED_MESSAGES } from "@/lib/whatsapp";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#061331] text-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-slate-800">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent block">
                SAMARTH COOL
              </span>
              <span className="text-xs text-cyan-400 font-semibold block">
                23+ Years Experience
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-6 space-y-4">
            <Link
              href="/"
              onClick={onClose}
              className="block py-2.5 px-4 rounded-xl text-base font-semibold text-white hover:bg-slate-800/80 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={onClose}
              className="block py-2.5 px-4 rounded-xl text-base font-semibold text-slate-200 hover:bg-slate-800/80 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              onClick={onClose}
              className="block py-2.5 px-4 rounded-xl text-base font-semibold text-slate-200 hover:bg-slate-800/80 hover:text-white transition-colors"
            >
              About Pravin
            </Link>
            <Link
              href="/commercial"
              onClick={onClose}
              className="block py-2.5 px-4 rounded-xl text-base font-semibold text-slate-200 hover:bg-slate-800/80 hover:text-white transition-colors"
            >
              Commercial Services
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className="block py-2.5 px-4 rounded-xl text-base font-semibold text-slate-200 hover:bg-slate-800/80 hover:text-white transition-colors"
            >
              Contact & Location
            </Link>
          </nav>
        </div>

        {/* Bottom CTA Block */}
        <div className="pt-6 border-t border-slate-800 space-y-4">
          <div className="space-y-2 text-xs text-slate-400">
            <div className="flex items-center">
              <ShieldCheck className="w-4 h-4 mr-2 text-cyan-400 shrink-0" />
              <span>Residential & Commercial Cooling</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-cyan-400 shrink-0" />
              <span>Serving {BUSINESS_INFO.coverageText}</span>
            </div>
          </div>

          <WhatsAppButton
            message={PREFILLED_MESSAGES.hero}
            source="mobile-menu"
            className="w-full justify-center py-3 text-sm font-bold shadow-lg"
          >
            WhatsApp Now
          </WhatsAppButton>

          <a
            href={BUSINESS_INFO.phoneTel}
            className="flex items-center justify-center w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-colors"
          >
            <Phone className="w-4 h-4 mr-2 text-blue-400" />
            Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

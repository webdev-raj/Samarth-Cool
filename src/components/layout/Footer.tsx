"use client";

import React from "react";
import Link from "next/link";
import { Snowflake, Phone, MapPin, ExternalLink, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { PREFILLED_MESSAGES } from "@/lib/whatsapp";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#061331] text-white border-t border-slate-800 pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-xl p-0.5 shadow-lg group-hover:scale-105 transition-all duration-300">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="/images/logo.png"
                    alt="Samarth Cool Logo"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </div>

              <div>
                <span className="text-xl font-black tracking-tight text-white block">
                  SAMARTH COOL
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 block">
                  AC & REFRIGERATION SERVICE
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed">
              &ldquo;{BUSINESS_INFO.tagline}&rdquo;
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Founded and operated by Pravin Chavan with more than 23+ years of real-world experience across residential, hotel, studio, and commercial cooling environments.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-pink-600/30 hover:text-pink-400 text-slate-300 flex items-center justify-center transition-colors border border-slate-700/60"
                aria-label="Samarth Cool Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600/30 hover:text-cyan-400 text-slate-300 flex items-center justify-center transition-colors border border-slate-700/60"
                aria-label="Samarth Cool Google Maps Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4 pb-2 border-b border-slate-800/80">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  AC & Refrigeration Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  About Pravin Chavan (23+ Yrs)
                </Link>
              </li>
              <li>
                <Link href="/commercial" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Commercial & B2B Cooling
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4 pb-2 border-b border-slate-800/80">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  AC Installation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  AC Repair & Diagnostics
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  AC Jet Servicing & Washing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Refrigerator Repair
                </Link>
              </li>
              <li>
                <Link href="/commercial" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Hotel & Studio Cooling Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4 pb-2 border-b border-slate-800/80">
              Contact & Coverage
            </h3>

            <div className="space-y-3 text-sm">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex items-center text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 mr-2.5 text-cyan-400 shrink-0" />
                <span>+91 {BUSINESS_INFO.phoneRaw}</span>
              </a>

              <div className="flex items-start text-slate-300">
                <MapPin className="w-4 h-4 mr-2.5 text-cyan-400 shrink-0 mt-1" />
                <span>Serving residential & commercial clients in {BUSINESS_INFO.coverageText}</span>
              </div>

              <div className="flex items-center text-slate-400 text-xs pt-1">
                <ShieldCheck className="w-4 h-4 mr-2 text-emerald-400 shrink-0" />
                <span>Direct Support by Pravin Chavan</span>
              </div>
            </div>

            <div className="pt-2">
              <WhatsAppButton
                variant="compact"
                message={PREFILLED_MESSAGES.general}
                source="footer"
                className="w-full text-xs py-2.5"
              >
                Quick WhatsApp Enquiry
              </WhatsAppButton>
            </div>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-cyan-400 hover:underline pt-1"
            >
              View on Google Maps <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Samarth Cool. All rights reserved. Managed by Pravin Chavan.</p>
          <p className="text-slate-400">
            Professional AC & Refrigeration Service • Mumbai & Pune
          </p>
        </div>
      </div>
    </footer>
  );
}

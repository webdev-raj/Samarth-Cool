"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Snowflake, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { MobileMenu } from "./MobileMenu";
import { PREFILLED_MESSAGES } from "@/lib/whatsapp";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-3 shadow-xl border-b border-slate-800/80"
            : "bg-[#061331] py-4 border-b border-slate-800/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-md group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-[#061331] rounded-[10px] flex items-center justify-center">
                  <Snowflake className="w-5 h-5 text-cyan-400 stroke-[2.5]" />
                </div>
              </div>

              <div>
                <span className="text-xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors block leading-none">
                  SAMARTH COOL
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400/90 block mt-1">
                  AC & Refrigeration • 23+ Yrs Exp
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-7">
              <Link
                href="/services"
                className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="/commercial"
                className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
              >
                Commercial
              </Link>
              <Link
                href="/#work"
                className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
              >
                Our Work
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex items-center text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700/60 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                {BUSINESS_INFO.phone}
              </a>

              <WhatsAppButton
                variant="compact"
                message={PREFILLED_MESSAGES.hero}
                source="desktop-header"
                className="shadow-md"
              >
                WhatsApp Now
              </WhatsAppButton>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Snowflake, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { MobileMenu } from "./MobileMenu";
import { PREFILLED_MESSAGES } from "@/lib/whatsapp";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Commercial", href: "/commercial" },
    { name: "Our Work", href: "/#work" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
            ? "glass-nav-modern py-3 shadow-2xl"
            : "bg-[#061331]/95 backdrop-blur-md py-4 border-b border-slate-800/60"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
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
                <span className="text-xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors block leading-none">
                  SAMARTH COOL
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400/90 block mt-1">
                  AC & REFRIGERATION • 23+ YRS EXP
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-sm font-semibold transition-colors duration-200 py-1 ${isActive ? "text-cyan-400 font-bold" : "text-slate-300 hover:text-white"
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full shadow-sm shadow-cyan-400" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex items-center text-xs font-semibold text-slate-300 hover:text-white px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition-all"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                {BUSINESS_INFO.phone}
              </a>

              <WhatsAppButton
                variant="compact"
                message={PREFILLED_MESSAGES.hero}
                source="desktop-header"
                showPulse
                className="shadow-lg shadow-emerald-900/30"
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

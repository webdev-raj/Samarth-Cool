import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Award, CheckCircle2, ShieldCheck, HeartHandshake, PhoneCall } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PREFILLED_MESSAGES } from "@/lib/whatsapp";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "About Pravin Chavan | 23+ Years Experience AC Specialist Samarth Cool",
  description:
    "Learn about Pravin Chavan, founder of Samarth Cool with 23+ years of hands-on experience in AC and refrigeration service across Mumbai & Pune.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-28 pb-safe-bottom bg-white">
      {/* Header */}
      <section className="bg-[#061331] text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-blue-950 px-3.5 py-1.5 rounded-full border border-blue-800">
            Meet The Master Technician
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mt-4">
            About Pravin Chavan & Samarth Cool
          </h1>
          <p className="text-lg text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Built on 23+ years of hands-on technical experience, honest diagnostic practices, and direct local support.
          </p>
        </div>
      </section>

      {/* Main Profile Story */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-900">
                <Image
                  src="/images/pravin-chavan.jpeg"
                  alt="Pravin Chavan Founder Samarth Cool"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase text-blue-600 tracking-wider">
                  Founder & Senior Technician
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1">
                  Pravin Chavan
                </h2>
                <p className="text-sm font-bold text-slate-500 mt-0.5">
                  23+ Years Active Field Experience • Mumbai & Pune
                </p>
              </div>

              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  &ldquo;With 23+ years of hands-on experience in AC and refrigeration service, Pravin Chavan has built Samarth Cool around practical expertise, reliable service and direct customer support.&rdquo;
                </p>
                <p>
                  Pravin started working on air conditioning and commercial refrigeration systems over two decades ago. Over the years, he has successfully diagnosed and serviced thousands of cooling units across residential apartments, hotels, shooting studios, offices, and retail businesses.
                </p>
                <p>
                  Unlike large aggregator platforms where unverified sub-contractors change every time you call, Pravin provides direct accountability. When you contact Samarth Cool, you get technical guidance straight from an experienced specialist.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <WhatsAppButton
                  variant="primary"
                  message={PREFILLED_MESSAGES.hero}
                  source="about-page-main"
                  className="py-3.5 px-6 text-sm"
                >
                  Talk to Samarth Cool on WhatsApp
                </WhatsAppButton>

                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="inline-flex items-center justify-center py-3.5 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm transition-colors border border-slate-300"
                >
                  <PhoneCall className="w-4 h-4 mr-2 text-blue-600" />
                  Call {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Core Service Values Grid */}
          <div className="mt-16 pt-16 border-t border-slate-200">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl font-black text-slate-900">
                Our Service Philosophy
              </h3>
              <p className="text-slate-600 text-sm mt-2">
                The core principles that guide every AC repair, installation, and servicing job we perform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#F7FAFC] p-7 rounded-2xl border border-slate-200 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Honest Diagnostics</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We inspect and explain the actual root cause of cooling issues. No false claims of gas leakage or unnecessary part replacements.
                </p>
              </div>

              <div className="bg-[#F7FAFC] p-7 rounded-2xl border border-slate-200 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Practical Experience</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  23+ years of real field experience means we know how to handle complex compressor issues, old wiring, and modern inverter AC circuits.
                </p>
              </div>

              <div className="bg-[#F7FAFC] p-7 rounded-2xl border border-slate-200 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Direct Customer Care</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Direct connection with Pravin Chavan ensures fast response times and dependable local support in Mumbai & Pune.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </main>
  );
}

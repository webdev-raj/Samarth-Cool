"use client";

import React from "react";
import { Check, ShieldAlert, Sparkles, Wrench } from "lucide-react";
import { GSAPWrapper } from "../animations/GSAPWrapper";
import { WhatsAppButton } from "../ui/WhatsAppButton";

export function ServiceComparison() {
  return (
    <section className="py-20 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GSAPWrapper animation="fadeInUp">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Clear Customer Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Servicing vs. Repair
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Knowing the difference helps you choose the right service and save on unnecessary expenses.
            </p>
          </div>
        </GSAPWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* SERVICING CARD */}
          <GSAPWrapper animation="fadeInLeft">
            <div className="bg-[#F7FAFC] rounded-3xl p-8 border-2 border-blue-200 shadow-lg h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center space-x-3.5 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 text-white flex items-center justify-center shadow-md">
                    <Sparkles className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">AC SERVICING</h3>
                    <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider">
                      Preventive Care
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Routine preventive maintenance to keep your AC clean, efficient, and operating smoothly before breakdown issues occur.
                </p>

                <ul className="space-y-3.5 text-sm text-slate-800 mb-8 font-medium">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>High-pressure foam jet coil washing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Air filter, blower & drain pipe flushing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Full system electrical & current load check</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Helps catch small wear issues early</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-100/70 p-4 rounded-2xl text-xs text-blue-950 font-bold border border-blue-200/60">
                💡 Recommended every 3–6 months to maintain indoor air purity & lower electricity bills.
              </div>
            </div>
          </GSAPWrapper>

          {/* REPAIR CARD */}
          <GSAPWrapper animation="fadeInRight">
            <div className="bg-slate-900 text-white rounded-3xl p-8 border-2 border-slate-800 shadow-xl h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center space-x-3.5 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 text-cyan-400 border border-slate-700 flex items-center justify-center shadow-md">
                    <Wrench className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">AC REPAIR</h3>
                    <span className="text-xs font-extrabold text-cyan-400 uppercase tracking-wider">
                      Troubleshooting & Fix
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Diagnosing and repairing active malfunction issues when your AC isn&apos;t cooling, leaking water, or tripping breakers.
                </p>

                <ul className="space-y-3.5 text-sm text-slate-200 mb-8 font-medium">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                      <ShieldAlert className="w-3.5 h-3.5" />
                    </div>
                    <span>No cooling or warm air blowing from vents</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                      <ShieldAlert className="w-3.5 h-3.5" />
                    </div>
                    <span>Water leaking indoors from casing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                      <ShieldAlert className="w-3.5 h-3.5" />
                    </div>
                    <span>Loud rattling, buzzing or compressor grinding</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                      <ShieldAlert className="w-3.5 h-3.5" />
                    </div>
                    <span>Electrical circuit fault & capacitor replacement</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/90 p-4 rounded-2xl text-xs text-slate-300 font-bold border border-slate-700">
                🔧 Diagnostics performed on-site by Pravin Chavan to pinpoint exact component failures.
              </div>
            </div>
          </GSAPWrapper>
        </div>

        {/* Bottom Banner */}
        <GSAPWrapper animation="fadeInUp" delay={0.3}>
          <div className="mt-14 text-center max-w-3xl mx-auto bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 border border-blue-200 rounded-3xl p-8 shadow-sm">
            <p className="text-base font-bold text-slate-900 mb-4">
              &ldquo;Regular servicing can help identify small issues before they become bigger, more expensive repairs.&rdquo;
            </p>

            <WhatsAppButton
              variant="primary"
              message="Hi Samarth Cool, I am not sure what my AC needs. Please advise me."
              source="servicing-vs-repair"
              className="text-sm py-3 px-6"
            >
              Not sure what your AC needs? WhatsApp us
            </WhatsAppButton>
          </div>
        </GSAPWrapper>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Check, ShieldAlert, Sparkles, Wrench } from "lucide-react";
import { GSAPWrapper } from "../animations/GSAPWrapper";
import { WhatsAppButton } from "../ui/WhatsAppButton";

export function ServiceComparison() {
  return (
    <section className="py-16 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GSAPWrapper animation="fadeInUp">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Understand Your AC Needs
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-3 tracking-tight">
              Servicing vs. Repair
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Knowing the difference helps you choose the right service and save money.
            </p>
          </div>
        </GSAPWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* SERVICING CARD */}
          <GSAPWrapper animation="fadeInLeft">
            <div className="bg-slate-50 rounded-2xl p-7 border-2 border-blue-200 shadow-sm h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">AC SERVICING</h3>
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                      Preventive Maintenance
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Preventive care to keep your AC clean, efficient and performing properly before breakdowns happen.
                </p>

                <ul className="space-y-3 text-sm text-slate-700 mb-6">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 mr-2.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>Regular high-pressure coil washing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 mr-2.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>Deep filter & blower wheel cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 mr-2.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>System inspection & current load check</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 mr-2.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>Helps identify small issues early</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-100/60 p-3.5 rounded-xl text-xs text-blue-900 font-medium">
                Recommended every 3–6 months for optimal cooling & lower power bills.
              </div>
            </div>
          </GSAPWrapper>

          {/* REPAIR CARD */}
          <GSAPWrapper animation="fadeInRight">
            <div className="bg-slate-50 rounded-2xl p-7 border-2 border-slate-200 shadow-sm h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-md">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">AC REPAIR</h3>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Problem Diagnostics & Fix
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Fixing an existing problem when your AC isn&apos;t working correctly, tripping power, or failing to cool.
                </p>

                <ul className="space-y-3 text-sm text-slate-700 mb-6">
                  <li className="flex items-start">
                    <ShieldAlert className="w-4 h-4 mr-2.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>No cooling or warm air blowing</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldAlert className="w-4 h-4 mr-2.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>Indoor unit water leakage</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldAlert className="w-4 h-4 mr-2.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>Unusual loud grinding or buzzing noise</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldAlert className="w-4 h-4 mr-2.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>Electrical breakdown & capacitor failure</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-200/80 p-3.5 rounded-xl text-xs text-slate-800 font-medium">
                Requires accurate diagnostic tools to locate exact component failures.
              </div>
            </div>
          </GSAPWrapper>
        </div>

        {/* Bottom Banner */}
        <GSAPWrapper animation="fadeInUp" delay={0.3}>
          <div className="mt-12 text-center max-w-3xl mx-auto bg-blue-50 border border-blue-200/80 rounded-2xl p-6">
            <p className="text-sm sm:text-base font-semibold text-slate-800 mb-4">
              &ldquo;Regular servicing can help identify small issues before they become bigger, more expensive problems.&rdquo;
            </p>

            <WhatsAppButton
              variant="primary"
              message="Hi Samarth Cool, I am not sure what my AC needs. Please advise me."
              source="servicing-vs-repair"
              className="text-sm py-2.5 px-5"
            >
              Not sure what your AC needs? WhatsApp us
            </WhatsAppButton>
          </div>
        </GSAPWrapper>
      </div>
    </section>
  );
}

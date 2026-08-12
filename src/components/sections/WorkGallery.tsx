"use client";

import React, { useState } from "react";
import Image from "next/image";
import { WORK_SAMPLES } from "@/lib/services-data";
import { MapPin, Tag } from "lucide-react";
import { GSAPWrapper } from "../animations/GSAPWrapper";
import { WhatsAppButton } from "../ui/WhatsAppButton";

export function WorkGallery() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "AC Servicing", "Hotel & Studio", "Refrigerator", "Diagnosis & AMC"];

  const filteredItems =
    filter === "All"
      ? WORK_SAMPLES
      : WORK_SAMPLES.filter((item) => item.category === filter);

  return (
    <section id="work" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GSAPWrapper animation="fadeInUp">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Real Work & Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 tracking-tight">
              Our Work Showcase
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Recent service execution across residential apartments, commercial buildings, and studio environments in Mumbai & Pune.
            </p>
          </div>
        </GSAPWrapper>

        {/* Filter Pills */}
        <GSAPWrapper animation="fadeInUp" delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </GSAPWrapper>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <GSAPWrapper key={item.id} animation="fadeInUp" delay={idx * 0.08}>
              <div className="group bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061331]/90 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white px-2.5 py-1 rounded-md shadow-md">
                      <Tag className="w-3 h-3 mr-1" />
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-xs text-slate-500 mt-1">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-blue-600" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </GSAPWrapper>
          ))}
        </div>

        {/* Callout Footer */}
        <GSAPWrapper animation="fadeInUp" delay={0.3}>
          <div className="mt-10 text-center bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
            <p className="text-sm font-semibold text-slate-700">
              📷 More real work photos coming soon as we update our job archives!
            </p>
            <div className="mt-4">
              <WhatsAppButton
                variant="outline"
                message="Hi Samarth Cool, I would like to see recent service photos or book an appointment."
                source="gallery-more-work"
                className="text-xs py-2 px-4"
              >
                Enquire About Our Recent Jobs
              </WhatsAppButton>
            </div>
          </div>
        </GSAPWrapper>
      </div>
    </section>
  );
}

import React from "react";
import {
  GraduationCap,
  Layers,
  Brain,
  Microscope,
  CheckCircle2,
  Calendar,
  Compass,
} from "lucide-react";
import { journeyData } from "../data/journey";

const typeIcons = {
  Learning: GraduationCap,
  Building: Layers,
  Research: Microscope,
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Compass className="w-3.5 h-3.5" />
            <span>05 // JOURNEY & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Academic & Engineering Path
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A transparent timeline of core education, full-stack systems engineering,
            and specialized artificial intelligence research.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Glowing Timeline Bar */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-500 opacity-30" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {journeyData.map((item, index) => {
              const isEven = index % 2 === 0;
              const IconComp = typeIcons[item.type] || Layers;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Center Node Marker */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 z-20 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-slate-900 border-2 border-cyan-400/80 shadow-lg shadow-cyan-500/20 flex items-center justify-center text-cyan-300">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Content Card (Left or Right on desktop) */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className="glass-card rounded-2xl p-6 border border-slate-800/90 hover:border-slate-700 transition-all space-y-3">
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span
                          className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}
                        >
                          {item.type}
                        </span>
                        <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                      </div>

                      {/* Header */}
                      <div>
                        <h3 className="text-lg font-display font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-cyan-400 font-medium">
                          {item.subtitle}
                        </p>
                      </div>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {item.summary}
                      </p>

                      {/* Key Highlights */}
                      <div className="space-y-1.5 pt-2 border-t border-slate-800/60">
                        {item.highlights.map((h, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-xs text-slate-400"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

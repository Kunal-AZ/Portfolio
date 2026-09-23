import React from "react";
import {
  Code,
  Terminal,
  Database,
  Layers,
  Sparkles,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";
import { skillsData } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Layers className="w-3.5 h-3.5" />
            <span>02 // CORE TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Key Technologies & Tools
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Practical full-stack engineering skills centered on the MERN stack, Java,
            relational databases, and modern web development.
          </p>
        </div>

        {/* Clean Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className={`glass-card rounded-2xl p-6 border flex flex-col justify-between transition-all duration-300 ${
                skill.highlight
                  ? "border-cyan-500/40 bg-gradient-to-br from-slate-900/90 via-cyan-950/20 to-slate-900/90 shadow-lg shadow-cyan-500/10"
                  : skill.isLearning
                  ? "border-purple-500/30 bg-gradient-to-br from-slate-900/90 via-purple-950/20 to-slate-900/90"
                  : "border-slate-800/80 hover:border-slate-700"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-display font-bold text-white">
                    {skill.name}
                  </h3>
                  <span
                    className={`text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${
                      skill.isLearning
                        ? "bg-purple-500/10 text-purple-300 border-purple-500/30"
                        : skill.highlight
                        ? "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
                        : "bg-slate-800/90 text-slate-300 border-slate-700/80"
                    }`}
                  >
                    {skill.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {skill.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>{skill.category}</span>
                {skill.isLearning ? (
                  <span className="text-purple-400 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    Actively Exploring
                  </span>
                ) : (
                  <span className="text-emerald-400/90 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Applied in Projects
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
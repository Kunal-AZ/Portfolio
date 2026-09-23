import React from "react";
import {
  Github,
  ExternalLink,
  Info,
  Layers,
  Cpu,
  Brain,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, onOpenDetails }) {
  const isBuilding = project.status.includes("Building");
  const isResearch = project.status.includes("Research");

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="glass-card rounded-2xl border border-slate-800/90 overflow-hidden flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
    >
      <div>
        {/* Visual Top Header */}
        <div className="relative h-44 bg-gradient-to-br from-slate-900 via-[#0a0f1d] to-[#070b14] p-5 flex flex-col justify-between border-b border-slate-800/80 overflow-hidden">
          {/* Subtle Graphic Glow Pattern */}
          <div
            className={`absolute -top-10 -right-10 w-36 h-36 rounded-full blur-2xl opacity-30 ${
              isBuilding
                ? "bg-amber-500"
                : isResearch
                ? "bg-purple-500"
                : "bg-cyan-500"
            }`}
          />

          {/* Top Badges */}
          <div className="flex items-center justify-between relative z-10">
            <span
              className={`text-xs font-mono font-medium px-2.5 py-1 rounded-full border flex items-center gap-1.5 backdrop-blur-md ${
                isBuilding
                  ? "bg-amber-500/10 text-amber-300 border-amber-500/30"
                  : isResearch
                  ? "bg-purple-500/10 text-purple-300 border-purple-500/30"
                  : "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
              }`}
            >
              {isBuilding && <AlertTriangle className="w-3.5 h-3.5" />}
              {isResearch && <Brain className="w-3.5 h-3.5" />}
              {!isBuilding && !isResearch && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
              <span>{project.badge}</span>
            </span>

            <span className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
              {project.category}
            </span>
          </div>

          {/* Center Graphic & Meta */}
          <div className="relative z-10">
            <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              {project.stats.type} // {project.stats.automation || project.stats.orchestration || project.stats.methods}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            {project.shortDescription}
          </p>

          {/* Problem Solved Box */}
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300">
            <span className="font-mono text-cyan-400 font-medium block mb-1">
              Problem Solved:
            </span>
            <p className="text-slate-400 text-[11px] leading-relaxed line-clamp-2">
              {project.problemStatement}
            </p>
          </div>

          {/* Key Features List Preview */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
              Core Capabilities:
            </span>
            {project.features.slice(0, 3).map((feat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-xs text-slate-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>

          {/* Technologies Chips */}
          <div className="pt-2">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                >
                  {t}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-800/40 text-slate-400 border border-slate-800">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between gap-2">
        <button
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-colors"
        >
          <Info className="w-3.5 h-3.5 text-cyan-400" />
          <span>View Details</span>
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label={`GitHub code for ${project.title}`}
            >
              <Github className="w-4 h-4" />
            </a>
          ) : null}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:text-white transition-colors"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <span
              title="Live deployment in progress"
              className="p-2 rounded-xl bg-slate-900/50 border border-slate-800 text-slate-600 cursor-not-allowed"
            >
              <ExternalLink className="w-4 h-4" />
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

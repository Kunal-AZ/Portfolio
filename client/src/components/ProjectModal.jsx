import React, { useEffect } from "react";
import {
  X,
  Github,
  ExternalLink,
  Layers,
  Cpu,
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  Workflow,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, isOpen, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-4xl bg-[#0b0f19] border border-slate-700/80 rounded-2xl shadow-2xl z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-slate-800 bg-[#0d121f]">
            <div className="space-y-1 pr-6">
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className={`text-xs font-mono font-medium px-2.5 py-0.5 rounded-full border ${
                    project.status.includes("Building")
                      ? "bg-amber-500/10 text-amber-300 border-amber-500/30"
                      : project.status.includes("Research")
                      ? "bg-purple-500/10 text-purple-300 border-purple-500/30"
                      : "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                  }`}
                >
                  {project.status}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {project.category}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-cyan-400 font-medium">
                {project.tagline}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
            {/* Quick Actions (GitHub & Demo) */}
            <div className="flex flex-wrap items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub Repository</span>
                </a>
              ) : null}

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800">
                  <span className="w-2 h-2 rounded-full bg-slate-500" />
                  <span>Live Deployment: In Progress / Sandbox</span>
                </div>
              )}
            </div>

            {/* Problem & Solution Dual Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-semibold uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>Problem Statement</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  <span>Engineered Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* System Architecture */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                <Workflow className="w-4 h-4" />
                <span>Architecture & Data Flow</span>
              </h3>
              <div className="p-4 rounded-xl bg-[#090d16] border border-slate-800 text-xs sm:text-sm text-slate-300 font-mono leading-relaxed">
                {project.architecture}
              </div>
            </div>

            {/* Planned AI Agents (If applicable) */}
            {project.plannedAgents && (
              <div className="space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider text-purple-400 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span>Planned Multi-Agent Ensemble</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.plannedAgents.map((agent) => (
                    <div
                      key={agent.name}
                      className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1"
                    >
                      <h4 className="text-xs font-semibold text-white flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-purple-400" />
                        {agent.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {agent.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Key Features & Capabilities</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/50 border border-slate-800/80 text-xs text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Challenges & Roadmap */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400">
                  Engineering Challenges
                </h4>
                <ul className="space-y-2 text-xs text-slate-400">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Future Roadmap
                </h4>
                <ul className="space-y-2 text-xs text-slate-400">
                  {project.futureImprovements.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

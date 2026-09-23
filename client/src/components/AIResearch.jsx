import React from "react";
import {
  Brain,
  Cpu,
  Layers,
  Sparkles,
  GitBranch,
  Search,
  Eye,
  FileCheck,
  BookOpen,
} from "lucide-react";
import ArchitectureDiagram from "./ArchitectureDiagram";
import { researchConcept } from "../data/aiResearch";

const researchPillars = [
  {
    title: "Multi-Agent Systems",
    icon: GitBranch,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    description:
      "Autonomous agent ensembles executing distributed specialized tasks, cooperating via structured communication protocols to avoid single-point prompt failures.",
  },
  {
    title: "Generative AI & LLMs",
    icon: Brain,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
    description:
      "Context-aware prompting, few-shot reasoning, chain-of-thought orchestration, and structured schema generation for reliable software integration.",
  },
  {
    title: "Retrieval-Augmented Generation",
    icon: Search,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    description:
      "Grounding LLM reasoning in authoritative domain corpora through dense vector embeddings and semantic search, drastically minimizing hallucinations.",
  },
  {
    title: "Explainable AI (XAI)",
    icon: Eye,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    description:
      "Unlocking neural network transparency using Grad-CAM heatmaps and SHAP pixel attributions, making deep learning decisions verifiable and clinically inspectable.",
  },
];

export default function AIResearch() {
  return (
    <section id="ai-research" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400">
            <Brain className="w-3.5 h-3.5" />
            <span>04 // AI & RESEARCH SPOTLIGHT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Artificial Intelligence & Multi-Agent Research
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Investigating advanced architectures where autonomous agents, large language
            models, and explainability frameworks solve complex real-world workflows.
          </p>
        </div>

        {/* Featured Research Banner */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-purple-500/30 relative overflow-hidden">
          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/15 border border-purple-500/30 text-xs font-mono text-purple-300">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Research Initiative</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white leading-snug">
              "{researchConcept.title}"
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {researchConcept.overview}
            </p>
          </div>
        </div>

        {/* Interactive Architecture Diagram */}
        <ArchitectureDiagram />

        {/* Core AI Research Pillars Grid */}
        <div className="space-y-6">
          <h3 className="text-lg font-display font-semibold text-white text-center">
            Key Technical Domains of Investigation
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {researchPillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="glass-card rounded-xl p-5 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div
                      className={`w-10 h-10 rounded-lg ${pillar.bg} border flex items-center justify-center ${pillar.color}`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-semibold text-white">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
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

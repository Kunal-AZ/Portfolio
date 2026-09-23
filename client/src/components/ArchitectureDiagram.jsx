import React, { useState } from "react";
import {
  User,
  Bot,
  FileText,
  Target,
  MessageSquareCode,
  Compass,
  ArrowDown,
  Sparkles,
  CheckCircle,
  Database,
  Cpu,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { researchConcept } from "../data/aiResearch";

export default function ArchitectureDiagram() {
  const [selectedAgent, setSelectedAgent] = useState("resume-agent");

  const currentAgent =
    researchConcept.agents.find((a) => a.id === selectedAgent) ||
    researchConcept.agents[0];

  return (
    <div className="space-y-8">
      {/* Visual Pipeline Container */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/90 relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Pipeline Title */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-800/80">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Interactive System Architecture
            </span>
            <h3 className="text-lg sm:text-xl font-display font-bold text-white mt-1">
              Autonomous Multi-Agent Pipeline
            </h3>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Parallel Agent Execution
          </span>
        </div>

        {/* Diagram Flow */}
        <div className="max-w-3xl mx-auto flex flex-col items-center space-y-4">
          {/* STEP 1: USER */}
          <div className="w-full max-w-md p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-lg flex items-center justify-between group hover:border-cyan-400/50 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                  Input Layer
                </span>
                <h4 className="text-sm font-semibold text-white">
                  User (Candidate Profile, Resume & Target Roles)
                </h4>
              </div>
            </div>
            <span className="text-xs font-mono text-slate-500">Step 01</span>
          </div>

          {/* Connector Arrow */}
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-6 bg-gradient-to-b from-cyan-500 to-blue-500" />
            <ArrowDown className="w-4 h-4 text-blue-400 -mt-1" />
          </div>

          {/* STEP 2: AI CAREER ASSISTANT ORCHESTRATOR */}
          <div className="w-full max-w-lg p-5 rounded-xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/40 shadow-xl flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 flex items-center justify-center">
                <Bot className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400">
                    Coordinator & Gateway
                  </span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 font-mono">
                    RAG + State
                  </span>
                </div>
                <h4 className="text-base font-bold text-white">
                  AI Career Assistant (Central Orchestrator)
                </h4>
                <p className="text-[11px] text-slate-400 font-mono">
                  State Manager • Task Decomposition • Vector Knowledge Retrieval
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-indigo-400">Step 02</span>
          </div>

          {/* Connector Arrow */}
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-6 bg-gradient-to-b from-indigo-500 to-purple-500" />
            <ArrowDown className="w-4 h-4 text-purple-400 -mt-1" />
          </div>

          {/* STEP 3: MULTI-AGENT ENSEMBLE BOX */}
          <div className="w-full p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#070b14] border-2 border-purple-500/30 shadow-2xl relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold">
                  Autonomous Multi-Agent Ensemble Layer (Concurrent Execution)
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                Click an agent to inspect
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {researchConcept.agents.map((agent) => {
                const isSelected = selectedAgent === agent.id;
                let AgentIcon = FileText;
                if (agent.id === "skill-gap-agent") AgentIcon = Target;
                if (agent.id === "interview-agent") AgentIcon = MessageSquareCode;
                if (agent.id === "career-agent") AgentIcon = Compass;

                return (
                  <button
                    key={agent.id}
                    onClick={() => setSelectedAgent(agent.id)}
                    className={`p-4 rounded-xl text-left transition-all relative overflow-hidden border ${
                      isSelected
                        ? "bg-slate-800/90 border-cyan-400 shadow-lg shadow-cyan-500/10 scale-[1.02]"
                        : "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400">
                        <AgentIcon className="w-4 h-4" />
                      </div>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      )}
                    </div>
                    <h5 className="text-xs font-bold text-white tracking-tight">
                      {agent.name}
                    </h5>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                      {agent.role}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Selected Agent Live Inspector Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentAgent.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="mt-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-cyan-300 font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Agent Spec: {currentAgent.name}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    Role: {currentAgent.role}
                  </span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {currentAgent.description}
                </p>
                <div className="pt-2 border-t border-slate-900 flex items-center gap-2 font-mono text-[11px] text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Deterministic Output: {currentAgent.output}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Connector Arrow */}
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-6 bg-gradient-to-b from-purple-500 to-emerald-500" />
            <ArrowDown className="w-4 h-4 text-emerald-400 -mt-1" />
          </div>

          {/* STEP 4: PERSONALIZED RECOMMENDATIONS */}
          <div className="w-full max-w-lg p-5 rounded-xl bg-slate-900/90 border border-emerald-500/30 shadow-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                  Synthesis & Aggregation Layer
                </span>
                <h4 className="text-sm font-bold text-white">
                  Personalized Recommendations (Role Delta Synthesis)
                </h4>
                <p className="text-[11px] text-slate-400">
                  Cross-agent arbitration, confidence scoring & gap prioritization
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400">Step 04</span>
          </div>

          {/* Connector Arrow */}
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-6 bg-gradient-to-b from-emerald-500 to-cyan-400" />
            <ArrowDown className="w-4 h-4 text-cyan-400 -mt-1" />
          </div>

          {/* STEP 5: FINAL OUTPUT */}
          <div className="w-full max-w-xl p-5 rounded-xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-purple-950/40 border border-cyan-500/40 shadow-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-semibold">
                  Actionable Candidate Deliverable
                </span>
                <h4 className="text-base font-bold text-white">
                  Learning Roadmap + Placement Readiness Score
                </h4>
                <p className="text-[11px] text-slate-300 font-mono">
                  Curated Syllabus • Mock Feedback • Interview Readiness Index
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-cyan-400">Outcome</span>
          </div>
        </div>
      </div>
    </div>
  );
}

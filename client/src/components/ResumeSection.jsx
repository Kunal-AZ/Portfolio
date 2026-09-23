import React, { useState } from "react";
import {
  FileText,
  Download,
  Eye,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Layers,
  GraduationCap,
  X,
  Award,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResumeSection() {
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const resumeUrl = "/resume/Kunal-Resume.pdf";

  return (
    <section id="resume" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <FileText className="w-3.5 h-3.5" />
            <span>06 // CURRICULUM VITAE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Resume & Official Credentials
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Download or view my resume detailing academic qualifications, verified IBM
            and Oracle certifications, production MERN apps, and AI systems engineering.
          </p>
        </div>

        {/* Resume Hub Card */}
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-6 sm:p-10 border border-slate-800/90 relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Column: Quick Snapshot */}
            <div className="md:col-span-7 space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Official Candidate Resume
                </span>
                <h3 className="text-2xl font-display font-bold text-white">
                  Kunal Sharma — SDE & AI Systems
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Computer Engineering student at Vishwakarma University, Pune. Available for Software Engineer, Full-Stack Developer, and AI/ML internship or entry-level positions.
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    B.E. in Computer Engineering — Vishwakarma University, Pune (2023–2027)
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>
                    IBM Full Stack Software Developer Professional Certificate (Coursera)
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    Oracle Database SQL Certified Associate (HackerRank)
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>
                    Price Drop Watcher (Live on Vercel) & AI Video Call Deepfake Detector
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={resumeUrl}
                  download="Kunal-Sharma-Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>

                <button
                  onClick={() => setShowPreviewModal(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-all hover:-translate-y-0.5"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>View Resume</span>
                </button>
              </div>
            </div>

            {/* Right Column: Visual Document Preview Card */}
            <div className="md:col-span-5">
              <div
                onClick={() => setShowPreviewModal(true)}
                className="cursor-pointer group relative rounded-xl bg-slate-900/90 border border-slate-700/70 p-5 shadow-2xl hover:border-cyan-400/50 transition-all"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <FileText className="w-3.5 h-3.5" />
                    Kunal-Resume.pdf
                  </span>
                  <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-emerald-400">
                    Verified
                  </span>
                </div>

                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    Kunal Sharma • Pune, Maharashtra
                  </div>
                  <p className="text-[11px] text-slate-500 font-mono">
                    vishwakarma-university // comp-eng
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>+91 8767528776</span>
                  <span className="text-cyan-400 group-hover:underline">Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Resume Preview Modal */}
      <AnimatePresence>
        {showPreviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPreviewModal(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-[#0b0f19] border border-slate-700 rounded-2xl shadow-2xl z-10 overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-[#0d121f]">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-display font-bold text-white">
                    Kunal Sharma — Resume Document Viewer
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={resumeUrl}
                    download="Kunal-Sharma-Resume.pdf"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>

                  <button
                    onClick={() => setShowPreviewModal(false)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Document Frame / Fallback Display */}
              <div className="flex-1 bg-slate-950 p-4 overflow-y-auto min-h-[500px] flex flex-col items-center justify-center">
                <iframe
                  src={resumeUrl}
                  title="Kunal Sharma Resume Preview"
                  className="w-full h-[600px] rounded-lg border border-slate-800 shadow-inner bg-white"
                />
                <div className="mt-3 text-xs text-slate-400 flex items-center gap-2">
                  <span>Resume loaded from</span>
                  <code className="text-cyan-300 font-mono bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    /resume/Kunal-Sharma-Resume.pdf
                  </code>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
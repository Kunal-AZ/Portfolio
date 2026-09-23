import React from "react";
import {
  Github,
  GitBranch,
  Star,
  GitFork,
  ExternalLink,
  Code2,
  Terminal,
  Activity,
  Layers,
} from "lucide-react";

const repos = [
  {
    name: "price-drop-watcher",
    fullName: "Kunal-AZ/price-drop-watcher",
    description:
      "Full-stack MERN price monitoring system with Redis caching, scheduled background cron workers, and automated email alerts. Deployed on Vercel.",
    language: "JavaScript / React / Node",
    url: "https://github.com/Kunal-AZ/price-drop-watcher.git",
    stars: "Live App",
    topics: ["mern-stack", "redis", "web-scraping", "cron-jobs", "jwt-auth"],
  },
  {
    name: "ai-human-detector-video-call",
    fullName: "Kunal-AZ/ai-human-detector-video-call",
    description:
      "Computer vision application detecting AI-generated synthetic faces during live video calls by analyzing facial dynamics, blinking, and visual artifacts.",
    language: "Python / OpenCV",
    url: "https://github.com/Kunal-AZ",
    stars: "Computer Vision",
    topics: ["opencv", "machine-learning", "deepfake-detection", "video-stream"],
  },
  {
    name: "farmer-loan-subsidy-management",
    fullName: "Kunal-AZ/farmer-loan-subsidy-management",
    description:
      "Cloud platform modernizing agricultural finance: automated farmer loan processing, government subsidy disbursements, and multi-role RBAC verification.",
    language: "React / Node / MongoDB",
    url: "https://github.com/Kunal-AZ",
    stars: "In Progress",
    topics: ["cloud-systems", "agritech", "mern-stack", "rbac-auth"],
  },
  {
    name: "ai-career-placement-assistant",
    fullName: "Kunal-AZ/ai-career-placement-assistant",
    description:
      "Multi-agent generative AI framework for automated placement readiness assessment, RAG retrieval, and company-tailored interview simulations.",
    language: "Python / MERN / LLMs",
    url: "https://github.com/Kunal-AZ",
    stars: "In Progress",
    topics: ["multi-agent-ai", "rag", "llm-orchestration", "nlp"],
  },
];

export default function DeveloperSection() {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-slate-800/90 relative overflow-hidden">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-800/80">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Github className="w-4 h-4" />
                <span>GITHUB ECOSYSTEM // @Kunal-AZ</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                Open Source & Engineering Repositories
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Explore real projects, full-stack architectures, and AI codebases on GitHub.
              </p>
            </div>

            <a
              href="https://github.com/Kunal-AZ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all hover:-translate-y-0.5 self-start sm:self-auto"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>Visit @Kunal-AZ</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Repositories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {repos.map((repo) => (
              <div
                key={repo.name}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-400 font-semibold group-hover:underline truncate max-w-[140px]">
                      <GitBranch className="w-3.5 h-3.5 shrink-0" />
                      {repo.name}
                    </span>
                    <span className="text-[10px] bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60 shrink-0">
                      {repo.stars}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal line-clamp-3">
                    {repo.description}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {repo.topics.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-slate-500">
                    {repo.language}
                  </span>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    <span>Inspect</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
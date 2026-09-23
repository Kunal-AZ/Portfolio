import React, { useState, useEffect } from "react";
import { FolderGit2, Sparkles, Filter, CheckCircle2, Clock } from "lucide-react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { getProjects } from "../services/api";
import { projectsData } from "../data/projects";

export default function Projects() {
  const [projects, setProjects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    // Attempt to fetch from API, falls back cleanly to local data
    getProjects().then((data) => {
      if (data && data.length) {
        setProjects(data);
      }
    });
  }, []);

  const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "completed", label: "Completed", icon: CheckCircle2 },
    { id: "in_progress", label: "In Progress (Active)", icon: Clock },
    { id: "Full-Stack & Systems", label: "Full-Stack & Cloud" },
    { id: "AI & Computer Vision", label: "Computer Vision" },
    { id: "AI & Multi-Agent Systems", label: "Multi-Agent AI" },
    { id: "AI & Deep Learning Research", label: "Research & XAI" },
  ];

  const filtered = projects.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "completed") return p.status === "Completed";
    if (activeFilter === "in_progress") return p.status.includes("Progress") || p.status.includes("Building");
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03 // FEATURED ENGINEERING WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Flagship Projects & AI Systems
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Deployed full-stack MERN web platforms, real-time computer vision deepfake
            detection, multi-agent AI frameworks, and cloud management systems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const IconComp = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeFilter === tab.id
                    ? "bg-slate-800 text-cyan-300 border border-slate-700 shadow-md shadow-cyan-500/10"
                    : "text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800/80 hover:bg-slate-800/40"
                }`}
              >
                {IconComp && <IconComp className="w-3 h-3 text-cyan-400" />}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((proj) => (
            <ProjectCard
              key={proj.id}
              project={proj}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
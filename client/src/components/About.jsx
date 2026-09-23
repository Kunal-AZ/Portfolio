import React from "react";
import {
  Code2,
  Brain,
  Rocket,
  Layers,
  Database,
  TerminalSquare,
  Sparkles,
  Award,
  GraduationCap,
  ExternalLink,
  ShieldCheck,
  HeartHandshake,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    label: "Degree & Major",
    value: "B.E. Comp Eng",
    subtext: "Vishwakarma University (23-27)",
    icon: GraduationCap,
    color: "text-cyan-400",
  },
  {
    label: "Professional Certs",
    value: "IBM & Oracle",
    subtext: "Full Stack & SQL Certified",
    icon: Award,
    color: "text-amber-400",
  },
  {
    label: "Core Stack",
    value: "MERN + Java",
    subtext: "React, Node, Mongo, SQL",
    icon: Layers,
    color: "text-blue-400",
  },
  {
    label: "Live Deployments",
    value: "Vercel / Cloud",
    subtext: "Price Drop Watcher Live",
    icon: Rocket,
    color: "text-emerald-400",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <TerminalSquare className="w-3.5 h-3.5" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Building reliable full-stack web applications with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              MERN, Java & modern tools
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A Computer Engineering student at Vishwakarma University, Pune,
            dedicated to full-stack engineering, clean architecture, and continuous learning.
          </p>
        </div>

        {/* Narrative & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Main Story & Technical Focus */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 space-y-6">
            {/* Bio Introduction */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-slate-800">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-md shadow-cyan-500/10 shrink-0">
                <img
                  src="/images/kunal-sharma.jpg"
                  alt="Kunal Sharma"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-white">
                  Kunal Sharma
                </h3>
                <p className="text-xs sm:text-sm text-cyan-400 font-mono">
                  B.E. in Computer Engineering | Vishwakarma University, Pune
                </p>
                <p className="text-xs text-slate-400">
                  Pune, Maharashtra • +91 8767528776 • kunalsharma9637@gmail.com
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a motivated and detail-oriented <strong className="text-white">Computer Science & Engineering student</strong> at{" "}
                <strong className="text-cyan-300">Vishwakarma University, Pune</strong> (2023–2027), with a strong foundation in software development, data structures, algorithms, and web technologies.
              </p>
              <p>
                My development experience centers around building robust full-stack applications using the{" "}
                <strong className="text-white">MERN Stack (MongoDB, Express.js, React.js, Node.js)</strong>, along with core languages such as{" "}
                <span className="text-cyan-300 font-medium">Java, C, JavaScript</span>, and <span className="text-cyan-300 font-medium">SQL</span>. I have designed and deployed production web applications, notably the live{" "}
                <strong className="text-cyan-300">Price Drop Watcher</strong> on Vercel featuring automated price tracking, email alerts, secure JWT authentication, and RESTful APIs.
              </p>
              <p>
                I have a strong interest in <strong className="text-purple-300 font-medium">Artificial Intelligence and Machine Learning</strong>. Rather than claiming mastery, I am actively learning foundational machine learning and computer vision concepts. I developed an AI-powered human detector on live video calls using computer vision techniques to analyze facial dynamics and blinking patterns, and I am currently exploring AI career guidance workflows.
              </p>
              <p>
                I enjoy solving technical challenges, writing clean and maintainable code, and collaborating on real-world projects. Beyond programming, I have organized technical and cultural events at my university and volunteered in community drives.
              </p>
            </div>

            {/* Core Competency Badges */}
            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-3">
                Core Competencies & Tools
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "MERN Stack Development",
                  "React.js & Tailwind CSS",
                  "Node.js & Express.js",
                  "MongoDB & MySQL DBMS",
                  "Java Programming (OOP)",
                  "Data Structures & Algorithms",
                  "RESTful APIs & JWT Auth",
                  "Git & Collaborative Version Control",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Statistics, Verified Certifications & Extra-Curricular */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => {
                const IconComponent = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    whileHover={{ scale: 1.02 }}
                    className="glass-card rounded-xl p-5 border border-slate-800/80 relative overflow-hidden group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-slate-400 font-mono">
                        {s.label}
                      </span>
                      <IconComponent
                        className={`w-4 h-4 ${s.color} group-hover:scale-110 transition-transform`}
                      />
                    </div>
                    <div className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                      {s.value}
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{s.subtext}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Verified Certifications Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800/90 space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Verified Certifications</span>
              </h4>

              <div className="space-y-3">
                {/* IBM Certificate */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h5 className="text-xs font-semibold text-white">
                      IBM Full Stack Software Developer Professional Certificate
                    </h5>
                    <span className="text-[10px] font-mono text-cyan-400 shrink-0 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
                      Coursera
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Completed Oct 2025 • Full stack web development, cloud-native apps, and containerization.
                  </p>
                  <a
                    href="https://coursera.org/verify/professional-cert/AUH8K438K6GW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:underline pt-0.5"
                  >
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>Verify Credential: AUH8K438K6GW</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                {/* Oracle SQL Certificate */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <h5 className="text-xs font-semibold text-white">
                      Oracle Database SQL Certified Associate
                    </h5>
                    <span className="text-[10px] font-mono text-amber-400 shrink-0 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                      HackerRank
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Relational schema design, SQL queries, table joins, and database constraints.
                  </p>
                </div>
              </div>
            </div>

            {/* Extra-Curricular & Community */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800/90 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <HeartHandshake className="w-4 h-4" />
                <span>Leadership & Community</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>Organized annual college technical and cultural events at Vishwakarma University</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                  <span>Volunteered in Blood Donation Camps & Tree Plantation Drives</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                  <span>Represented university in technical workshops and engineering seminars</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
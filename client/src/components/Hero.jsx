import React, { useState } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Terminal,
  Layers,
  ExternalLink,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Bio & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Pill & Location */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-medium text-slate-300 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span>Vishwakarma University • Computer Engineering (2023–2027)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Pune, Maharashtra</span>
              </div>
            </div>

            {/* Greeting & Headline */}
            <div className="space-y-2">
              <p className="text-cyan-400 font-mono text-sm sm:text-base tracking-wide uppercase font-semibold">
                Hi, I'm Kunal Sharma
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.14]">
                Software Engineer building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                  full-stack web applications
                </span>{" "}
                with MERN & Java.
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Computer Engineering student specializing in the{" "}
              <strong className="text-white font-semibold">MERN stack</strong> (MongoDB, Express, React, Node.js),{" "}
              <strong className="text-white font-semibold">Java</strong>, and{" "}
              <strong className="text-white font-semibold">SQL</strong>. Passionate about building real-world products while actively learning and exploring Artificial Intelligence fundamentals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume/Kunal-Resume.pdf"
                download="Kunal-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social & Contact Direct Links (GitHub, LinkedIn, X, Gmail, Phone) */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-slate-400">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-500 mr-1">
                Connect:
              </span>

              {/* GitHub */}
              <a
                href="https://github.com/Kunal-AZ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                title="GitHub: Kunal-AZ"
              >
                <Github className="w-4 h-4 text-cyan-400" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kunal-sharma-8309a6287/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                title="LinkedIn: Kunal Sharma"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/Kunal019816966"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Profile"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                title="X (Twitter): @kunal_sharma"
              >
                <Twitter className="w-4 h-4 text-slate-200" />
              </a>

              {/* Email */}
              <a
                href="mailto:kunalsharma9637@gmail.com"
                aria-label="Direct Email"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:text-purple-400 hover:border-purple-500/40 hover:bg-slate-800 transition-all"
                title="Email: kunalsharma9637@gmail.com"
              >
                <Mail className="w-4 h-4 text-purple-400" />
              </a>

              {/* Phone */}
              <a
                href="tel:+918767528776"
                aria-label="Direct Phone"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-slate-800 transition-all"
                title="Phone: +91 8767528776"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Developer Hub with Photo & Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-indigo-500/20 to-purple-600/30 blur-xl opacity-70" />

              {/* Terminal / Profile Card */}
              <div className="relative rounded-2xl bg-[#0b0f19] border border-slate-800/90 shadow-2xl overflow-hidden backdrop-blur-xl">
                {/* Header with Navigation Tabs */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0d121f] border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      kunal-sharma // dev
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveTab("profile")}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                        activeTab === "profile"
                          ? "bg-slate-800 text-cyan-300 border border-slate-700"
                          : "text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      profile.jpg
                    </button>
                    <button
                      onClick={() => setActiveTab("dev")}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                        activeTab === "dev"
                          ? "bg-slate-800 text-cyan-300 border border-slate-700"
                          : "text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      developer.ts
                    </button>
                    <button
                      onClick={() => setActiveTab("stack")}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                        activeTab === "stack"
                          ? "bg-slate-800 text-cyan-300 border border-slate-700"
                          : "text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      stack.json
                    </button>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 bg-[#080c14]/90 min-h-[320px] flex flex-col justify-center">
                  {activeTab === "profile" ? (
                    <div className="space-y-4">
                      {/* Photo & Quick Info */}
                      <div className="flex items-center gap-4">
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-cyan-400/80 shadow-lg shadow-cyan-500/20 shrink-0">
                          <img
                            src="/images/kunal-sharma.jpg"
                            alt="Kunal Sharma"
                            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="space-y-1">
                          
                          <h3 className="text-lg font-display font-bold text-white">
                            Kunal Sharma
                          </h3>
                          <p className="text-xs text-slate-300 font-mono">
                            B.E. Computer Engineering
                          </p>
                          <p className="text-[11px] text-slate-400">
                            Vishwakarma University, Pune
                          </p>
                          <div className="pt-1 flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                              2023 – 2027
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                              IBM Certified
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Contact Badges */}
                      <div className="pt-3 border-t border-slate-800/80 space-y-2 text-xs font-mono">
                        <div className="flex items-center justify-between text-slate-400">
                          <span className="text-slate-500">Email:</span>
                          <a
                            href="mailto:kunalsharma9637@gmail.com"
                            className="text-slate-200 hover:text-cyan-300 transition-colors"
                          >
                            kunalsharma9637@gmail.com
                          </a>
                        </div>
                        <div className="flex items-center justify-between text-slate-400">
                          <span className="text-slate-500">Phone:</span>
                          <a
                            href="tel:+918767528776"
                            className="text-slate-200 hover:text-cyan-300 transition-colors"
                          >
                            +91 8767528776
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : activeTab === "dev" ? (
                    <div className="font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 space-y-1.5">
                      <p className="text-slate-500">
                        // Developer Configuration & Interests
                      </p>
                      <p>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-cyan-300">kunalSharma</span> = &#123;
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">education:</span>{" "}
                        <span className="text-amber-300">"B.E. Computer Engineering"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">university:</span>{" "}
                        <span className="text-amber-300">"Vishwakarma University, Pune"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">coreStack:</span> [
                        <span className="text-cyan-400">"React.js"</span>,{" "}
                        <span className="text-cyan-400">"Node.js"</span>,{" "}
                        <span className="text-cyan-400">"Express.js"</span>,{" "}
                        <span className="text-cyan-400">"MongoDB"</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">languages:</span> [
                        <span className="text-emerald-400">"Java"</span>,{" "}
                        <span className="text-emerald-400">"JavaScript"</span>,{" "}
                        <span className="text-emerald-400">"C"</span>,{" "}
                        <span className="text-emerald-400">"SQL"</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">currentlyLearning:</span> [
                        <span className="text-purple-300">"AI & Machine Learning Basics"</span>,{" "}
                        <span className="text-purple-300">"Computer Vision (OpenCV)"</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">status:</span>{" "}
                        <span className="text-emerald-400 font-semibold">
                          "Ready for SDE & Full-Stack Roles"
                        </span>
                      </p>
                      <p>&#125;;</p>
                    </div>
                  ) : (
                    <div className="font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 space-y-1.5">
                      <p className="text-slate-500">// Technical Stack</p>
                      <p className="text-purple-400">&#123;</p>
                      <p className="pl-4">
                        <span className="text-cyan-300">"mern_stack"</span>: [
                        <span className="text-amber-300">"MongoDB"</span>,{" "}
                        <span className="text-amber-300">"Express.js"</span>,{" "}
                        <span className="text-amber-300">"React.js"</span>,{" "}
                        <span className="text-amber-300">"Node.js"</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-cyan-300">"core_languages"</span>: [
                        <span className="text-amber-300">"Java"</span>,{" "}
                        <span className="text-amber-300">"JavaScript"</span>,{" "}
                        <span className="text-amber-300">"C"</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-cyan-300">"databases"</span>: [
                        <span className="text-amber-300">"MongoDB"</span>,{" "}
                        <span className="text-amber-300">"MySQL / SQL"</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-cyan-300">"web_technologies"</span>: [
                        <span className="text-amber-300">"HTML5"</span>,{" "}
                        <span className="text-amber-300">"CSS3"</span>,{" "}
                        <span className="text-amber-300">"Tailwind CSS"</span>]
                      </p>
                      <p className="text-purple-400">&#125;</p>
                    </div>
                  )}
                </div>

                {/* Bottom Quick Feature Highlights */}
                <div className="grid grid-cols-3 divide-x divide-slate-800 border-t border-slate-800/80 bg-[#0d121f] text-center py-2.5 text-xs text-slate-400">
                  <div className="flex flex-col items-center justify-center gap-0.5">
                    <span className="text-cyan-400 font-semibold font-mono">MERN</span>
                    <span className="text-[10px] text-slate-400">Full Stack</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-0.5">
                    <span className="text-blue-400 font-semibold font-mono">Java & SQL</span>
                    <span className="text-[10px] text-slate-400">Engineering</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-0.5">
                    <span className="text-purple-400 font-semibold font-mono">AI Exploration</span>
                    <span className="text-[10px] text-slate-400">Still Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
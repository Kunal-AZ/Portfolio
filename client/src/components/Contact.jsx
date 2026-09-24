import React, { useState } from "react";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  Twitter,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sendContactMessage } from "../services/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Transmitting Message...");
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: '' }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status) setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields before submitting.",
      });
      return;
    }

    setLoading(true);
    setLoadingText("Transmitting Message...");
    setStatus(null);

    // Progressive status updates in case server is waking up from free-tier sleep
    const timer1 = setTimeout(() => {
      setLoadingText("Waking up cloud server (free tier)...");
    }, 2500);

    const timer2 = setTimeout(() => {
      setLoadingText("Almost there, establishing connection...");
    }, 7000);

    let result;
    try {
      result = await sendContactMessage(formData);
    } finally {
      clearTimeout(timer1);
      clearTimeout(timer2);
      setLoading(false);
    }

    if (result.success) {
      setStatus({
        type: "success",
        message:
          result.data?.message ||
          "Message sent successfully! Kunal has received your message and will respond promptly.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus({
        type: "error",
        message:
          result.message ||
          "Could not send your message right now. Please try again or reach out directly via email.",
      });
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Mail className="w-3.5 h-3.5" />
            <span>07 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Let's build something meaningful together.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether you have an internship opportunity, a software engineering role,
            an AI collaboration, or simply want to connect — my inbox is always open.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-5xl mx-auto">
          {/* Left Info Panel */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/90 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Open for opportunities
                </span>
                <h3 className="text-xl font-display font-bold text-white mt-1">
                  Connect with Kunal
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Actively available for Software Engineer, Full-Stack Developer,
                  and AI/ML internship or entry-level positions.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-3">
                {/* Email */}
                <a
                  href="mailto:kunalsharma9637@gmail.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">Direct Email</span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors font-mono">
                      kunalsharma9637@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918767528776"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-800/80 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">Phone & WhatsApp</span>
                    <span className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors font-mono">
                      +91 8767528776
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">Location</span>
                    <span className="text-sm font-semibold text-white">
                      Pune, Maharashtra, India
                    </span>
                  </div>
                </div>

                {/* Social Quick Row (GitHub, LinkedIn, X) */}
                <div className="pt-2 flex items-center gap-2.5">
                  <a
                    href="https://github.com/Kunal-AZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/kunal-sharma-8309a6287/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://x.com/Kunal019816966"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-600 text-xs font-mono text-slate-300 hover:text-white transition-all"
                  >
                    <Twitter className="w-4 h-4 text-slate-200" />
                    <span>X</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/90">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Status Alert */}
              <AnimatePresence>
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-xl text-xs sm:text-sm flex items-start gap-3 border ${
                      status.type === "success"
                        ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                        : "bg-rose-500/10 text-rose-300 border-rose-500/30"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">{status.message}</div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono font-medium text-slate-300"
                  >
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono font-medium text-slate-300"
                  >
                    Your Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono font-medium text-slate-300"
                >
                  Subject <span className="text-cyan-400">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  maxLength={200}
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Software Engineer / AI Internship Opportunity"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-xs font-mono font-medium text-slate-300"
                >
                  Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={3000}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message to Me ..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-all resize-none"
                />
                <div className="flex justify-end text-[11px] text-slate-500 font-mono">
                  {formData.message.length} / 3000 chars
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                    <span>{loadingText}</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
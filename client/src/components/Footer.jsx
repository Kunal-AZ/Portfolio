import React from "react";
import { ArrowUp, Terminal, Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#06080d] py-12 relative z-10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Headline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-display font-bold text-white text-sm">
                Kunal Sharma
              </span>
              <p className="text-[11px] text-slate-500 font-mono">
                Computer Engineering • Vishwakarma University, Pune
              </p>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Kunal-AZ"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/kunal-sharma-8309a6287/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-cyan-400 hover:border-slate-700 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="https://x.com/Kunal019816966"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="X Profile"
              title="X"
            >
              <Twitter className="w-4 h-4" />
            </a>

            <a
              href="mailto:kunalsharma9637@gmail.com"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-purple-400 hover:border-slate-700 transition-colors"
              aria-label="Email Kunal"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 hover:bg-slate-800 hover:text-cyan-300 transition-all ml-2"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-center gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Kunal Sharma. Pune, Maharashtra • +91 8767528776
          </div>
  
        </div>
      </div>
    </footer>
  );
}
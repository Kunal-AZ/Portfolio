import React, { useEffect } from "react";
import BackgroundEffects from "./components/BackgroundEffects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import DeveloperSection from "./components/DeveloperSection";
import ResumeSection from "./components/ResumeSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { prewarmBackend } from "./services/api";

export default function App() {
  useEffect(() => {
    // Silently pre-warm backend to avoid cold-start delay
    prewarmBackend();
  }, []);
  return (
    <div className="relative min-h-screen bg-[#07090E] text-slate-100 font-sans selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Background Visual Layer */}
      <BackgroundEffects />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <DeveloperSection />
        <ResumeSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
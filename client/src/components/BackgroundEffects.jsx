import React from "react";
import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.25]" />

      {/* Radial Gradient Glow - Top Left Cyan */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[130px]" />

      {/* Radial Gradient Glow - Center Indigo */}
      <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full bg-indigo-600/10 blur-[150px]" />

      {/* Radial Gradient Glow - Bottom Purple */}
      <div className="absolute -bottom-40 left-1/4 w-[700px] h-[700px] rounded-full bg-purple-600/10 blur-[160px]" />

      {/* Subtle Floating Code Particle Nodes */}
      <motion.div
        animate={{
          y: [-10, 15, -10],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-[15%] w-2 h-2 rounded-full bg-cyan-400 blur-[1px]"
      />
      <motion.div
        animate={{
          y: [15, -15, 15],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-2/3 right-[18%] w-2.5 h-2.5 rounded-full bg-purple-400 blur-[1px]"
      />
      <motion.div
        animate={{
          y: [-8, 12, -8],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-[45%] w-1.5 h-1.5 rounded-full bg-blue-400 blur-[1px]"
      />
    </div>
  );
}

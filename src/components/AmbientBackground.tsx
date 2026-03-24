"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AmbientBackground() {
  const reduced = useReducedMotion();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          top: "10%",
          right: "5%",
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          opacity: 0.025,
        }}
        animate={
          reduced
            ? {}
            : {
                x: [0, 60, -30, 0],
                y: [0, -40, 20, 0],
                scale: [1, 1.08, 0.95, 1],
              }
        }
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          bottom: "20%",
          left: "0%",
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          opacity: 0.018,
        }}
        animate={
          reduced
            ? {}
            : {
                x: [0, -50, 40, 0],
                y: [0, 30, -50, 0],
                scale: [1, 1.12, 0.97, 1],
              }
        }
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          top: "55%",
          right: "25%",
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          opacity: 0.015,
        }}
        animate={
          reduced
            ? {}
            : {
                x: [0, 30, -60, 0],
                y: [0, -70, 25, 0],
              }
        }
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

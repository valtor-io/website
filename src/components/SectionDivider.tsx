"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-8">
      <motion.div
        className="h-px bg-border"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
}

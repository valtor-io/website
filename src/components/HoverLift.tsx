"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function HoverLift({
  children,
  className = "",
  distance = -3,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  return (
    <motion.div
      whileHover={{ y: distance }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

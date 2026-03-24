"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useMotionValue, useSpring, useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  target: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function CountUp({
  target,
  suffix = "",
  prefix = "",
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? String(target) : "0");

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 50,
    damping: 15,
    restDelta: 0.5,
  });

  const handleChange = useCallback((v: number) => {
    setDisplay(String(Math.round(v)));
  }, []);

  useEffect(() => {
    if (isInView && !reduced) {
      motionValue.set(target);
    }
  }, [isInView, target, motionValue, reduced]);

  useEffect(() => {
    const unsubscribe = spring.on("change", handleChange);
    return unsubscribe;
  }, [spring, handleChange]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {reduced ? String(target) : display}
      {suffix}
    </span>
  );
}

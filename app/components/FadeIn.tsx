"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { memo } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
}

const VIEWPORT_MARGIN = "-80px";

const FadeIn = memo(function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 40,
  className = "",
}: FadeInProps) {
  const directions: Record<string, { y: number; x: number }> = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { y: 0, x: distance },
    right: { y: 0, x: -distance },
    none: { y: 0, x: 0 },
  };

  const { y, x } = directions[direction];

  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: VIEWPORT_MARGIN }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

export default FadeIn;

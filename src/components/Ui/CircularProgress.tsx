"use client";

import { motion, useScroll, useTransform } from "motion/react";

const R = 22;
const CIRC = 2 * Math.PI * R;

/** Anel de progresso do scroll da página inteira (canto inferior direito da HOME). */
export default function CircularProgress() {
  const { scrollYProgress } = useScroll();
  const dashoffset = useTransform(scrollYProgress, [0, 1], [CIRC, 0]);

  return (
    <svg width="56" height="56" viewBox="0 0 56 56" className="-rotate-90">
      <circle
        cx="28"
        cy="28"
        r={R}
        fill="none"
        stroke="var(--color-muted)"
        strokeOpacity="0.35"
        strokeWidth="2"
      />
      <motion.circle
        cx="28"
        cy="28"
        r={R}
        fill="none"
        stroke="var(--color-white)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray={CIRC}
        style={{ strokeDashoffset: dashoffset }}
      />
    </svg>
  );
}

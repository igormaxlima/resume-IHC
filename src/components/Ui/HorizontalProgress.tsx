"use client";

import { motion, useTransform, type MotionValue } from "motion/react";

interface HorizontalProgressProps {
  progress: MotionValue<number>;
}

/** Barra de progresso horizontal (base da seção EXPERIÊNCIAS). */
export default function HorizontalProgress({
  progress,
}: HorizontalProgressProps) {
  const width = useTransform(progress, [0, 1], ["0%", "100%"]);
  return (
    <div className="absolute inset-x-8 bottom-8 z-20 h-[3px] bg-white/15">
      <motion.div style={{ width }} className="h-full bg-white" />
    </div>
  );
}

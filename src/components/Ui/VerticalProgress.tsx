"use client";

import { motion, useTransform, type MotionValue } from "motion/react";

interface VerticalProgressProps {
  progress: MotionValue<number>;
}

/** Linha de progresso vertical (lateral esquerda da seção PROJETOS). */
export default function VerticalProgress({ progress }: VerticalProgressProps) {
  const height = useTransform(progress, [0, 1], ["0%", "100%"]);
  return (
    <div className="relative h-[60vh] w-[3px] bg-white/15">
      <motion.div
        style={{ height }}
        className="absolute left-0 top-0 w-full bg-white"
      />
    </div>
  );
}

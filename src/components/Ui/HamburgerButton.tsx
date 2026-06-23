"use client";

import { motion } from "motion/react";

interface HamburgerButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

/** Botão de 3 barras que anima para um "X" quando aberto. */
export default function HamburgerButton({
  isOpen,
  onToggle,
}: HamburgerButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      aria-expanded={isOpen}
      className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
    >
      <motion.span
        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="block h-0.5 w-8 bg-white"
      />
      <motion.span
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="block h-0.5 w-8 bg-white"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="block h-0.5 w-8 bg-white"
      />
    </button>
  );
}

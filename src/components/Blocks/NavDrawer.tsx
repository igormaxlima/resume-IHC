"use client";

import { AnimatePresence, motion } from "motion/react";
import NavItem from "@/components/Ui/NavItem";

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ITEMS = [
  { label: "HOME", href: "#home" },
  { label: "EXPERIÊNCIAS", href: "#experiencias" },
  { label: "PROJETOS", href: "#projetos" },
  { label: "CONTATO", href: "#contato" },
];

/** Overlay fullscreen que desliza da direita. */
export default function NavDrawer({ isOpen, onClose }: NavDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-40 flex flex-col items-start justify-center gap-1 bg-dark px-12"
        >
          {ITEMS.map((item) => (
            <NavItem
              key={item.href}
              label={item.label}
              href={item.href}
              onClick={onClose}
            />
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

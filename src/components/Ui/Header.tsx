"use client";

import HamburgerButton from "@/components/Ui/HamburgerButton";

interface HeaderProps {
  isOpen: boolean;
  onToggle: () => void;
}

/** Barra superior persistente. O hambúrguer fica visível em todas as seções. */
export default function Header({ isOpen, onToggle }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-end px-6 py-4">
      <HamburgerButton isOpen={isOpen} onToggle={onToggle} />
    </header>
  );
}

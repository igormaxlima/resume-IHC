import type { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  variant?: "filled" | "outline";
  className?: string;
}

/**
 * Título grande de seção.
 * - `filled`: preenchido em cream com sombra deslocada (estilo 3D) — EXPERIÊNCIAS.
 * - `outline`: vazado com stroke branco — PROJETOS.
 */
export default function SectionTitle({
  children,
  variant = "filled",
  className = "",
}: SectionTitleProps) {
  if (variant === "outline") {
    return (
      <h2 className={`text-outline font-archivo ${className}`}>{children}</h2>
    );
  }

  return (
    <h2
      className={`font-archivo text-cream ${className}`}
      style={{ textShadow: "4px 5px 0 rgba(0, 0, 0, 0.55)" }}
    >
      {children}
    </h2>
  );
}

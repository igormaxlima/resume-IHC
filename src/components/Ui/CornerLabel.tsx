interface CornerLabelProps {
  label: string;
}

/** Rótulo minúsculo no canto superior esquerdo de cada seção. */
export default function CornerLabel({ label }: CornerLabelProps) {
  return (
    <span className="pointer-events-none absolute left-4 top-3 z-30 select-none text-xs tracking-wide text-muted">
      {label}
    </span>
  );
}

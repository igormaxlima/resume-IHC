interface GlobeLogoProps {
  className?: string;
}

/** Logo "template": globo (grade) com uma faísca de 4 pontas no centro. */
export default function GlobeLogo({ className = "" }: GlobeLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden
      fill="none"
      stroke="currentColor"
    >
      {/* grade do globo */}
      <circle cx="50" cy="50" r="46" strokeWidth="1.5" />
      <line x1="4" y1="50" x2="96" y2="50" strokeWidth="1.5" />
      <ellipse cx="50" cy="50" rx="20" ry="46" strokeWidth="1.5" />
      {/* faísca central de 4 pontas */}
      <path
        d="M50 22 C 52 42, 58 48, 78 50 C 58 52, 52 58, 50 78 C 48 58, 42 52, 22 50 C 42 48, 48 42, 50 22 Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

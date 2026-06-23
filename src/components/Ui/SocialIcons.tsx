interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
}

const SOCIALS = [
  {
    label: "GitHub",
    href: "#",
    path: "M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.79 1.08.79 2.18v3.23c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z",
  },
  {
    label: "Gmail",
    href: "#",
    path: "M3 5h18a1 1 0 0 1 1 1v.4l-10 6.25L2 6.4V6a1 1 0 0 1 1-1zM2 8.06l9.47 5.92a1 1 0 0 0 1.06 0L22 8.06V18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8.06z",
  },
];

/** Linha de ícones sociais (GitHub, LinkedIn, Gmail). Reutilizado no footer. */
export default function SocialIcons({
  className = "",
  iconClassName = "h-6 w-6",
}: SocialIconsProps) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          className="text-white transition-opacity hover:opacity-60"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className={iconClassName}>
            <path d={s.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}

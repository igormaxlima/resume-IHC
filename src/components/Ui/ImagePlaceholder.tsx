interface ImagePlaceholderProps {
  className?: string;
  style?: React.CSSProperties;
}

/** Quadrado cream que representa uma imagem ainda não definida. */
export default function ImagePlaceholder({
  className = "",
  style,
}: ImagePlaceholderProps) {
  return <div className={`bg-cream ${className}`} style={style} />;
}

"use client";

import { useEffect, useState } from "react";

/**
 * Retorna se a media query bate no momento.
 *
 * `defaultValue` é o valor usado na renderização do servidor e no primeiro
 * paint do cliente (antes do efeito rodar) — mantemos `true` por padrão para
 * favorecer o layout desktop (desktop-first) e evitar flash no caso comum.
 */
export function useMediaQuery(query: string, defaultValue = true): boolean {
  const [matches, setMatches] = useState(defaultValue);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

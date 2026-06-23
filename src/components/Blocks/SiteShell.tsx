"use client";

import { useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Header from "@/components/Ui/Header";
import NavDrawer from "@/components/Blocks/NavDrawer";
import HomeBlock from "@/components/Blocks/HomeBlock";
import ExperienceBlock from "@/components/Blocks/ExperienceBlock";
import ProjectsBlock from "@/components/Blocks/ProjectsBlock";
import FooterBlock from "@/components/Blocks/FooterBlock";

/**
 * Orquestrador de nível de página.
 * - Detém o estado da navegação (drawer) — persistente em todas as seções.
 * - Decide entre layout desktop (transições com scroll hijack/overlap) e
 *   mobile "reels" (painéis 100svh com scroll-snap).
 */
export default function SiteShell() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Header isOpen={drawerOpen} onToggle={() => setDrawerOpen((v) => !v)} />
      <NavDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <main
        className={
          isDesktop
            ? "relative"
            : "reels-scroll h-svh overflow-y-auto overflow-x-hidden"
        }
      >
        <HomeBlock isDesktop={isDesktop} />
        <ExperienceBlock isDesktop={isDesktop} />
        <ProjectsBlock isDesktop={isDesktop} />
        <FooterBlock />
      </main>
    </>
  );
}

"use client";

import CornerLabel from "@/components/Ui/CornerLabel";
import SocialIcons from "@/components/Ui/SocialIcons";
import CodeBackground from "@/components/Ui/CodeBackground";
import HeroContent from "@/components/Ui/HeroContent";
import CircularProgress from "@/components/Ui/CircularProgress";

interface HomeBlockProps {
  isDesktop: boolean;
}

/** HOME — hero de apresentação. */
export default function HomeBlock({ isDesktop }: HomeBlockProps) {
  return (
    <section
      id="home"
      className={`relative h-svh overflow-hidden bg-dark ${
        isDesktop ? "" : "reels-panel"
      }`}
    >
      <CornerLabel label="Home Page" />
      <SocialIcons className="absolute left-6 top-12 z-20" />

      <CodeBackground />
      <HeroContent isDesktop={isDesktop} />

      {/* barra inferior: atribuição + progresso circular */}
      <div className="absolute inset-x-6 bottom-6 z-20 flex items-end justify-between">
        <a
          href="#"
          className="font-montserrat text-sm text-muted underline-offset-4 hover:underline"
        >
          ® Template made by Me
        </a>
        <CircularProgress />
      </div>
    </section>
  );
}

import GlobeLogo from "@/components/Ui/GlobeLogo";

interface HeroContentProps {
  isDesktop: boolean;
}

/**
 * Conteúdo central da HOME: "USER" / "NAME" vazado, globo à direita e botão de
 * download do currículo.
 */
export default function HeroContent({ isDesktop }: HeroContentProps) {
  if (!isDesktop) {
    return (
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-10 px-6 text-center">
        <GlobeLogo className="h-28 w-28 text-white" />
        <div className="font-archivo text-6xl leading-none">
          <span className="text-outline block">USER</span>
          <span className="text-outline block">NAME</span>
        </div>
        <DownloadButton />
      </div>
    );
  }

  return (
    <div className="relative z-10 h-full">
      <div className="absolute left-16 top-1/2 flex -translate-y-1/2 flex-col gap-10">
        <div className="font-archivo leading-none">
          <span className="text-outline block text-[8rem]">USER</span>
          <span className="text-outline block text-[8rem]">NAME</span>
        </div>
        <DownloadButton />
      </div>

      <GlobeLogo className="absolute right-[14%] top-1/2 h-56 w-56 -translate-y-1/2 text-white" />
    </div>
  );
}

function DownloadButton() {
  return (
    <a
      href="#"
      className="w-fit border border-white px-8 py-4 font-montserrat text-sm uppercase tracking-widest text-white transition-colors duration-200 hover:bg-white hover:text-dark"
    >
      Download Currículo
    </a>
  );
}

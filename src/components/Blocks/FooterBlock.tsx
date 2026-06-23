import SocialIcons from "@/components/Ui/SocialIcons";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Experiências", href: "#experiencias" },
  { label: "Projetos", href: "#projetos" },
];

/** Footer simples: navegação entre seções + redes sociais + copyright. */
export default function FooterBlock() {
  return (
    <footer
      id="contato"
      className="relative z-20 border-t border-white/10 bg-dark px-8 py-14"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <nav className="flex flex-wrap gap-6 font-montserrat text-sm uppercase tracking-widest text-muted">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <SocialIcons iconClassName="h-5 w-5" />
      </div>
      <p className="mx-auto mt-10 max-w-5xl font-montserrat text-xs text-muted">
        © 2026 User Name. Todos os direitos reservados.
      </p>
    </footer>
  );
}

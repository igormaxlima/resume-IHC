import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

// Canto inferior esquerdo "dobrado" via clip-path.
const FOLDED_CORNER =
  "polygon(0 0, 100% 0, 100% 100%, 2.5rem 100%, 0 calc(100% - 2.5rem))";

/** Card de projeto: texto + título no rodapé, com canto dobrado. */
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="flex min-h-[15rem] flex-col justify-between bg-white/[0.04] p-8"
      style={{ clipPath: FOLDED_CORNER }}
    >
      <p className="max-w-xs font-montserrat text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <p className="self-end font-montserrat text-base text-white">
        {project.title}
      </p>
    </article>
  );
}

import ImagePlaceholder from "@/components/Ui/ImagePlaceholder";
import type { Experience } from "@/data/experiences";

interface ExperienceCardProps {
  experience: Experience;
  imageSize?: string;
}

/** Entrada de experiência: imagem à esquerda + textos à direita. */
export default function ExperienceCard({
  experience,
  imageSize = "18vw",
}: ExperienceCardProps) {
  return (
    <div className="flex gap-8">
      <ImagePlaceholder
        className="shrink-0"
        style={{ width: imageSize, height: imageSize }}
      />
      <div className="flex max-w-[22vw] flex-col gap-4 text-cream">
        <div>
          <h3 className="font-montserrat text-3xl font-extrabold leading-tight">
            {experience.title}
          </h3>
          <p className="font-montserrat text-base font-bold">
            {experience.period}
          </p>
        </div>
        <p className="font-montserrat text-sm font-semibold leading-snug">
          <span className="font-extrabold">Descrição: </span>
          {experience.description}
        </p>
        <p className="font-montserrat text-sm font-semibold leading-snug">
          <span className="font-extrabold">Hard e Soft Skills: </span>
          {experience.skills}
        </p>
      </div>
    </div>
  );
}

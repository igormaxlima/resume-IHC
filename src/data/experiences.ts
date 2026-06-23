export interface Experience {
  title: string;
  period: string;
  description: string;
  skills: string;
}

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat fringilla odio, non facilisis risus malesuada eu.";

/** Conteúdo placeholder — trocar pelos dados reais depois. */
export const experiences: Experience[] = [
  {
    title: "Projeto Novo",
    period: "Duração/Data: Lorem Ipsum",
    description: LOREM,
    skills: LOREM,
  },
  {
    title: "Projeto",
    period: "Duração/Data: Lorem Ipsum",
    description: LOREM,
    skills: LOREM,
  },
  {
    title: "Projeto Menor",
    period: "Duração/Data: Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skills: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Projeto Antigo",
    period: "Duração/Data: Lorem Ipsum",
    description: LOREM,
    skills: LOREM,
  },
];

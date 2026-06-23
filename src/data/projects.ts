export interface Project {
  title: string;
  description: string;
}

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat fringilla odio, non facilisis risus malesuada eu. Nullam varius, dui in pharetra tincidunt, quam ante rhoncus mi, vel porta arcu metus ac risus. Fusce feugiat elit a tristique rhoncus. Etiam commodo sit amet urna convallis convallis.";

/** Conteúdo placeholder — trocar pelos dados reais depois. */
export const projects: Project[] = Array.from({ length: 6 }, () => ({
  title: "Project title",
  description: LOREM,
}));

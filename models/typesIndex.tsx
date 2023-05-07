export type articleSkills = {
  mobileVersion: boolean;
};
export type itemsSkills = {
  titles: string[];
  colors: string[];
  delays: string[];
};

export type FrontSkills = {
  uiUX: string[];
  perfOpti: string[];
  stateManagement: string[];
  SEO: string[];
};

export type itemsProjects = {
  image: string;
  link: string;
  title: string;
  marginBottom: boolean;
  description: string;
  frontEnd: string;
  backEnd: string;
  linkwebsite: string;
  linkRepoGithub: string;
  id: number;
  imageTailwind: string;
  goal: string;
};

export type ItemProjectProps = {
  image: string;
  link: string;
  title: string;
  marginBottom: boolean;
  isInView: boolean;
  id: number;
};

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export type articleSkills = {
  mobileVersion: boolean;
};
export type itemsSkills = {
  titles: string[];
  colors: string[];
  delays: string[];
};

export type itemsProjects = {
  image: string;
  link: string;
  title: string;
  marginBottom: boolean;
};

export type ItemProjectProps = {
  image: string;
  link: string;
  title: string;
  marginBottom: boolean;
  isInView:boolean
}
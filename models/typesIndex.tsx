import { Url } from "next/dist/shared/lib/router/router";

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
  description: string;
  frontEnd: string;
  backEnd: string;
  linkwebsite: string;
  id: number;
  imageTailwind: string;
};

export type ItemProjectProps = {
  image: string;
  link: string;
  title: string;
  marginBottom: boolean;
  isInView: boolean;
  id: number;
};

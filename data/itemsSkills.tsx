import { itemsSkills } from "../models/typesIndex";

export const frontEndSkills: { [key: string]: itemsSkills } = {
  uiUX: {
    titles: ["FIGMA", "CSS", "SASS", "TAILWIND"],
    colors: ["text-purple-400", "text-blue-500", "text-pink-500", "text-blue-600"],
    delays: ["0.1s", "0.2s", "0.3s", "0.4s"],
  },
  perfOpti: {
    titles: ["REACT", "REACT-ROUTER", "RAECT-QUERY"],
    colors: ["text-blue-500", "text-red-500", "text-blue-600"],
    delays: ["0.1s", "0.2s", "0.3s"],
  },
  stateManagement: {
    titles: ["REDUX", "REDUX-TOOLKIT", "CONTEXT-API"],
    colors: ["text-blue-500", "text-blue-500", "text-gray-500"],
    delays: ["0.1s", "0.2s", "0.3s"],
  },
  SEO: {
    titles: ["NEXT.JS"],
    colors: ["text-gray-500"],
    delays: ["0.1s"],
  },
};

export const API: itemsSkills = {
  titles: ["NODEJS", "EXPRESS.JS"],
  colors: ["text-green-500", "text-gray-500"],
  delays: ["0.1s", "0.2s"],
};
export const cleanCode: itemsSkills = {
  titles: ["TYPE-SCRIPT"],
  colors: ["text-blue-500"],
  delays: ["0.1s"],
};
export const versioning: itemsSkills = {
  titles: ["GIT", "GITHUB", "AZURE"],
  colors: ["text-orange-100", "text-gray-500", "text-blue-500"],
  delays: ["0.1s", "0.2s", "0.3s"],
};

import { itemsSkills } from "../models/typesIndex";

export const frontEndSkills: { [key: string]: itemsSkills } = {
  uiUX: {
    titles: ["FIGMA", "CSS", "SASS", "TAILWIND", "MUI"],
    colors: ["#FF77FF", "#1572B6", "#CC6699", "#38B2AC", "#0081CB"],
    delays: ["0.1s", "0.2s", "0.3s", "0.4s", "0.5s"],
  },
  perfOpti: {
    titles: ["REACT", "REACT-ROUTER", "RAECT-QUERY"],
    colors: ["#61DAFB", "#CA4245", "#FF4154"],
    delays: ["0.1s", "0.2s", "0.3s"],
  },
  stateManagement: {
    titles: ["REDUX", "REDUX-TOOLKIT", "CONTEXT-API"],
    colors: ["#764ABC", "#764ABC", "#0081CB"],
    delays: ["0.1s", "0.2s", "0.3s"],
  },
  SEO: {
    titles: ["NEXT.JS"],
    colors: ["#333333"],
    delays: ["0.1s"],
  },
};

export const API: itemsSkills = {
  titles: ["NODEJS", "EXPRESS.JS"],
  colors: [" #6BBF47", "#808080"],
  delays: ["0.1s", "0.2s"],
};
export const cleanCode: itemsSkills = {
  titles: ["TYPE-SCRIPT"],
  colors: ["#6EB6FF"],
  delays: ["0.1s"],
};
export const versioning: itemsSkills = {
  titles: ["GIT", "GITHUB", "AZURE"],
  colors: ["#F05032", "#808080", "#0089D6"],
  delays: ["0.1s", "0.2s", "0.3s"],
};

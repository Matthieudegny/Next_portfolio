import { itemsProjects } from "../models/typesIndex";

export const projectsItems: itemsProjects[] = [
  {
    image: "/dalleAssistant.png",
    link: "/projects/1",
    title: "Dall-e assistant",
    marginBottom: true,
    description:
      "This web app utilizes the DALL-E API to create unique and personalized images based on user inputs. With a cloud-based storage feature and a visually appealing gallery, users can easily save, share, and browse their creations. Whether for personal use or for sharing with others, this app provides a fun and creative outlet for generating truly original images",
    frontEnd: "React, Tailwind CSS, react-toastify, react-router-dom",
    backEnd: "Node.js, Express.js, MongoDB,openAI API, cloudinary API",
    linkwebsite: "https://dalle-app.vercel.app/",
    id: 1,
    imageTailwind: "bg-dalleAssistant",
  },
  {
    image: "/shareYourPrompt.png",
    link: "/projects/2",
    title: "Share your Prompt",
    marginBottom: true,
    description:
      "Share your Prompt is a social app that enables users to share and discover creative prompts through pictures. With features like liking and saving posts, users can easily build their own libraries of inspiring content. Share your Prompt is the perfect platform to discover and share new ideas",
    frontEnd: "React, Next.js, Tailwind CSS, react-spinner",
    backEnd: "Next.js, Supabase",
    linkwebsite: "https://share-your-prompt.vercel.app/",
    id: 2,
    imageTailwind: "bg-shareYourPrompt",
  },
  {
    image: "/myDashboard.png",
    link: "/projects/3",
    title: "My Dashboard",
    marginBottom: false,
    description:
      "My Dashboard is a trading app that provides users with a clear view of their positions and allows them to draw insights from the data. With features like performance tracking and market comparison, traders can easily monitor their investments and make informed decisions.My Dashboard provides a comprehensive view of your portfolio and the global marke.  A V2 version is planned for September, which includes a new UI, a new structure built with Next.js and Supabase, TypeScript support, and unit testing with Jest",
    frontEnd: "React, react-query, SASS, react-chartJS, JsonwebToken, react-router-dom",
    backEnd: "Node.js, Express.js, MongoDB, bcryptjs",
    linkwebsite: "https://my-dash-board-md.vercel.app/",
    id: 3,
    imageTailwind: "bg-myDashboard",
  },
];

import { itemsProjects } from "../models/typesIndex";

export const projectsItems: itemsProjects[] = [
  {
    image: "/dalleAssistant.png",
    link: "/projects/1",
    title: "Dall-e assistant",
    marginBottom: true,
    description:
      "Please be informed that the app is still available, but the generation of pictures is currently not functional due to the end of the free access to the API. I apologize for any inconvenience this may cause. This web app utilizes the DALL-E API to create unique and personalized images based on user inputs. With a cloud-based storage feature and a visually appealing gallery.",
    goal: "Create a full-stack web app using the MERN stack and implement a cloud-based storage feature.",
    frontEnd: "Vite, React, Tailwind CSS, react-toastify, useContext",
    backEnd: "Node.js, Express.js, MongoDB, openAI API, cloudinary API",
    linkwebsite: "https://dalle-app.vercel.app/",
    linkRepoGithub: "https://github.com/Matthieudegny/MERN-IA-App-Front",
    id: 1,
    imageTailwind: "bg-dalleAssistant",
  },
  {
    image: "/shareYourPrompt.png",
    link: "/projects/2",
    title: "Share your Prompt",
    marginBottom: true,
    description:
      "Share your Prompt is a social web app that enables users to share, like, comment and discover creative prompts through pictures. With features like liking and saving posts, users can easily build their own libraries of inspiring content.",
    goal: "Create a dynamic full-stack web application using Next.js and integrate PSQL with Supabase to incorporate primary and foreign keys into the data structure.",
    frontEnd: "React, Next.js, Tailwind CSS, react-spinner",
    backEnd: "Next.js, Supabase",
    linkwebsite: "https://share-your-prompt.vercel.app/",
    linkRepoGithub: "https://github.com/Matthieudegny/supabase-social-app",
    id: 2,
    imageTailwind: "bg-shareYourPrompt",
  },
  {
    image: "/myDashboard.png",
    link: "/projects/3",
    title: "My Dashboard",
    marginBottom: true,
    description:
      "My Dashboard is a trading desktop (no responsive) app that provides users with a clear view of their positions and allows them to draw insights from the data. With features like performance tracking and market comparison, traders can easily monitor their investments and make informed decisions. A version 2 is planned for September, which includes a new UI, a new structure built with Next.js and Supabase, TypeScript support, and unit testing with Jest",
    goal: "Build a full-stack web application using the MERN stack that allows the front-end to synthesize data and display it using Chart.js data visualization library. Have some world financial market data with the free API : twelvedata.",
    frontEnd: "React, react-query, SASS, react-chart JS, JsonwebToken, useContext",
    backEnd: "Node.js, Express.js, MongoDB, bcryptjs",
    linkwebsite: "https://my-dash-board-md.vercel.app/",
    linkRepoGithub: "https://github.com/Matthieudegny/MERN-MyDashboard-front",
    id: 3,
    imageTailwind: "bg-myDashboard",
  },
  {
    image: "/myPortfolio.png",
    link: "/projects/4",
    title: "My portfolio",
    marginBottom: true,
    description:
      "I created this portfolio to showcase my work and give a glimpse into my personality. Through this project, I hope to connect with like-minded individuals and potential collaborators.",
    goal: "Create Next.js web application with strong SEO and use TypeScript for the structural development. Implement smooth animations for the transition page using Framer Motion for a better UX, all other animations are homemade.",
    frontEnd: "React, Type-script, Framer-motion, Tailwind",
    backEnd: "Next.js, Nodemailer",
    linkwebsite: "",
    linkRepoGithub: "https://github.com/Matthieudegny/portfolio_next",
    id: 4,
    imageTailwind: "bg-myPortfolio",
  },
  {
    image: "/next3.jpg",
    link: "/projects/5",
    title: "My prompts",
    marginBottom: false,
    description:
      "This app is designed to help users discover, create, and share creative prompts, with the aim of improving the relationship between artificial intelligence (AI) tools and users. The app is currently in development.",
    goal: "Improve my skills in Next.js, by using features such as next-auth, App Folder Structure, Client and Server Components, and File-based Routing (including dynamic and nested routes)",
    frontEnd: "React, Type-script, Tailwind",
    backEnd: "Next.js, bcryptjs, MongoDB, next-auth",
    linkwebsite: "",
    linkRepoGithub: "https://github.com/Matthieudegny/Next_MyPrompts",
    id: 5,
    imageTailwind: "nextJs",
  },
];

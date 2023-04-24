import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { motion, useInView } from "framer-motion";
import { projectsItems } from "@/data/itemsProjects";

const project = () => {
  const router = useRouter();
  const [displayPicture, setdisplayPicture] = useState(false);
  const [indexProject, setindexProject] = useState(0);
  const [onlyAtMountParamsRoute, setonlyAtMountParamsRoute] = useState(true);
  const [projectObject, setprojectObject] = useState({
    image: "",
    link: "",
    title: "",
    marginBottom: false,
    description: "",
    frontEnd: "",
    backEnd: "",
    linkwebsite: "",
    id: 0,
    imageTailwind: "",
  });
  const [titleNextProject, settitleNextProject] = useState("");

  // i need to save an initial value for router.query.id
  //because when i leave the page,evrything is crush but the animation take some times to execute, and during this time,
  //the value of router.query.id is undefined and make crash the app
  //onlyAtMountParamsRoute
  //is used to change the value of indexProject only at the end of the animation (when the new page is loaded)
  useEffect(() => {
    if (router.query.id) {
      setindexProject(Number(router.query.id));
      if (onlyAtMountParamsRoute) {
        setprojectObject(projectsItems[Number(router.query.id) - 1]);
        settitleNextProject(
          projectsItems[Number(router.query.id) === projectsItems.length ? 0 : Number(router.query.id)].title
        );
        setonlyAtMountParamsRoute(false);
      }
    }
  }, [router]);

  const project = useRef<HTMLInputElement>(null);
  const isInViewproject = useInView(project, {
    amount: 0.1,
    once: true,
  });

  const returnAnimation = (delay: number, axe: string) => {
    return {
      opacity: isInViewproject ? "1" : "0",
      transform: `scale${axe}(${isInViewproject ? 1 : 0})`,
      transition: `transform 1s ease-in-out ${delay}s,opacity 1s ease-in-out ${delay}s,background-color 0.3s ease-in-out 0.1s`,
    };
  };
  const animationStyleTitle = returnAnimation(1.4, "y");
  const animationStyleDescription = returnAnimation(1.6, "y");
  const animationStyleFrontEndTitle = returnAnimation(1.8, "x");
  const animationStyleFrontEnd = returnAnimation(2.2, "x");
  const animationStyleBackEndTitle = returnAnimation(2.4, "x");
  const animationStyleBackEnd = returnAnimation(2.6, "x");
  const animationStyleLinkWebsite = returnAnimation(2.8, "x");

  const id = router.query.id ?? indexProject;
  const indexProjectNext = +id === projectsItems.length ? 1 : +id + 1;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setdisplayPicture(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <motion.main
      animate={{ x: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ x: "100%" }}
      transition={{
        duration: 1,
        ease: "linear",
      }}
      className="fixed top-0 left-0 w-full h-screen  overflow-y-auto"
    >
      <main className="relative bg-primary-color text-gray-900 min-h-screen w-screen  overflow-y-auto  font-Montserrat_regular">
        <div className={`md:h-screen w-full  flex flex-col md:flex-row justify-center items-center text-7xl`}>
          <div className={`w-full md:w-3/6 h-screen relative`}>
            {projectObject.image ? (
              <img className="h-full w-full" src={projectObject.image} alt="my_image" />
            ) : (
              ""
            )}
            <div
              ref={project}
              style={{
                width: displayPicture ? "0%" : "100%",
                transition: "width 1.3s ease-out 0s",
              }}
              className="absolute  top-0 left-0 w-full h-screen bg-primary-color"
            ></div>
          </div>

          <div className="`w-full min-h-screen md:w-3/6  flex flex-col justify-evenly ">
            <div
              style={animationStyleTitle}
              className="w-3/5 md:w-4/5 pl-2 md:pl-5 mb-6 md:mb-0 mt-6 md:mt-0 text-2xl md:text-4xl"
            >
              {projectObject.title}:
            </div>
            <div
              style={animationStyleDescription}
              className="w-3/5 md:w-4/5 pl-2  md:pl-5  text-xl  xl:pr-14  leading-7 xl:leading-10"
            >
              {projectObject.description}.
            </div>
            <div className="text-2xl p-5">
              <span style={animationStyleFrontEndTitle} className="block text-2xl">
                Front-end :
              </span>
              <div style={animationStyleFrontEnd} className="lg:p-5 text-xl  tracking-widest ">
                {projectObject.frontEnd}.
              </div>
            </div>
            <div className="text-2xl p-5">
              <span style={animationStyleBackEndTitle} className="block text-2xl">
                Back-end :
              </span>
              <div style={animationStyleBackEnd} className="lg:p-5 text-xl  tracking-widest ">
                {projectObject.backEnd}.
              </div>
            </div>

            {projectObject.linkwebsite ? (
              <a
                className="text-3xl p-5 text-center"
                target="_blank"
                href={projectObject.linkwebsite}
                rel="noopener noreferrer"
                style={animationStyleLinkWebsite}
              >
                visit website
              </a>
            ) : (
              "cest quoi ce bordel"
            )}
          </div>
        </div>

        <Link
          href={{
            pathname: `/projects/${indexProjectNext}`,
          }}
          passHref
          className="mt-20 md:mt-0 h-44 w-full flex flex-wrap justify-center text-center items-center text-3xl md:text-5xl  hover:bg-gray-200 hover:shadow-2xl ease-in-out duration-300 "
        >
          Next Project: {titleNextProject}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-14 h-14 ml-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
      </main>
    </motion.main>
  );
};

export default project;

import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { motion, useInView } from "framer-motion";
import { projectsItems } from "@/data/itemsProjects";

const project = () => {
  const router = useRouter();
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
    amount: 0.825,
    once: true,
  });

  const returnAnimation = (delay: number, axe: string) => {
    return {
      opacity: isInViewproject ? "1" : "0",
      transform: `scale${axe}(${isInViewproject ? 1 : 0})`,
      transition: `transform 1s ease-in-out ${delay}s,opacity 1s ease-in-out ${delay}s,background-color 0.3s ease-in-out 0.1s`,
    };
  };
  const animationStyleTitle = returnAnimation(0.8, "y");
  const animationStyleDescription = returnAnimation(1, "y");
  const animationStyleFrontEndTitle = returnAnimation(1.3, "x");
  const animationStyleFrontEnd = returnAnimation(1.6, "x");
  const animationStyleBackEndTitle = returnAnimation(1.8, "x");
  const animationStyleBackEnd = returnAnimation(2, "x");
  const animationStyleLinkWebsite = returnAnimation(2.2, "x");
  const animationStyleNextProjectTitle = returnAnimation(2.4, "x");

  const id = router.query.id ?? indexProject;
  const indexProjectNext = +id === projectsItems.length ? 1 : +id + 1;
  // const titleNextProject = projectsItems[indexProjectNext - 1].title;

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
      <main className="relative bg-primary-color text-gray-900 min-h-screen w-screen  font-Montserrat_regular">
        <div ref={project} className={`h-screen w-full  flex justify-center items-center text-7xl`}>
          <div className={`w-3/6 h-full relative`}>
            {projectObject.image ? (
              <img className="h-full w-full" src={projectObject.image} alt="my_image" />
            ) : (
              ""
            )}
            <div
              style={{
                width: isInViewproject ? "0%" : "100%",
                transition: "width 1s ease-out 0s",
              }}
              className="absolute top-0 left-0 w-0 h-full bg-primary-color"
            ></div>
          </div>

          <div className="w-3/6 h-full flex flex-col justify-evenly ">
            <div style={animationStyleTitle} className="p-5 text-6xl">
              {projectObject.title}:
            </div>
            <div style={animationStyleDescription} className="w-4/5 pl-5 text-2xl p-5 leading-10">
              {projectObject.description}.
            </div>
            <div className="text-2xl p-5">
              <span style={animationStyleFrontEndTitle} className="block text-3xl">
                Front-end :
              </span>
              <div style={animationStyleFrontEnd} className="p-5 tracking-widest ">
                {projectObject.frontEnd}.
              </div>
            </div>
            <div className="text-2xl p-5">
              <span style={animationStyleBackEndTitle} className="block text-3xl">
                Back-end :
              </span>
              <div style={animationStyleBackEnd} className="p-5 tracking-widest ">
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
          className="h-44 w-full flex justify-center items-center text-5xl  bg-primary-color hover:bg-slate-100 ease-in-out duration-300"
          style={animationStyleNextProjectTitle}
        >
          Next Project: {titleNextProject}
        </Link>
      </main>
    </motion.main>
  );
};

export default project;

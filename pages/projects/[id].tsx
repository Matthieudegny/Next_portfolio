import React, { useRef } from "react";
import { useRouter } from "next/router";

import { motion, useInView } from "framer-motion";
import { projectsItems } from "@/data/itemsProjects";

const project = () => {
  const router = useRouter();
  const { stringId } = router.query;
  const id = stringId ? +stringId : 0;
  const project = useRef<HTMLInputElement>(null);
  const isInViewproject = useInView(project, {
    amount: 0.825,
    once: true,
  });

  const { image, title, description, frontEnd, backEnd, linkwebsite } = projectsItems[id];
  return (
    <motion.main
      animate={{ x: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ x: "100%" }}
      transition={{
        duration: 1.5,
        ease: "linear",
      }}
      className="fixed top-0 left-0 w-full h-screen  overflow-y-auto"
    >
      <main className="relative bg-orange-100 text-gray-900 min-h-screen w-screen  font-Montserrat_regular pb-36">
        <div
          ref={project}
          className={`h-screen w-full  flex justify-center bg-red-500 items-center text-7xl`}
        >
          <div className={`w-3/6 h-full relative bg-footer-texture`}>
            <div
              style={{
                width: isInViewproject ? "0%" : "100%",
                transition: "width 1.5s ease-in-out 0s",
              }}
              className="absolute top-0 left-0 w-0 h-full bg-red-400"
            ></div>
          </div>

          <div className="w-3/6 h-full flex flex-col justify-evenly bg-red-400 ">
            <div className="p-5 text-6xl">{title}</div>
            <div className="w-4/5 pl-5 text-2xl p-5">{description}.</div>
            <div className="text-2xl p-5">
              <span className="block text-3xl">Front-end :</span>
              <div className="p-5 tracking-widest ">{frontEnd}</div>
            </div>
            <div className="text-2xl p-5">
              <span className="block text-3xl">Back-end :</span>
              <div className="p-5 tracking-widest ">{backEnd}</div>
            </div>

            {linkwebsite ? (
              <a
                className="text-5xl p-5 text-center"
                target="_blank"
                href={linkwebsite}
                rel="noopener noreferrer"
              >
                visit website
              </a>
            ) : (
              "cest quoi ce bordel"
            )}
          </div>
        </div>
      </main>
    </motion.main>
  );
};

export default project;

"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

//components
import LayoutText from "../components/LayoutText";
import ItemProject from "../components/Projects/ItemProject";
import Item_Numero_SideBar_Project from "@/components/Projects/Item_Numero_SideBar_Project";

//data
import { projectsItems } from "../data/itemsProjects";

const projects = () => {
  const refSectionProjects = useRef<HTMLInputElement>(null);
  const isInViewSectionProjects = useInView(refSectionProjects, {
    margin: "0px 0px 0px 0px",
    amount: 0.25,
  });

  const project1 = useRef<HTMLInputElement>(null);
  const isInViewproject1 = useInView(project1, {
    margin: "-210px 100px -180px 0px",
    amount: 0.7,
  });

  const project2 = useRef<HTMLInputElement>(null);
  const isInViewproject2 = useInView(project2, {
    margin: "-210px 100px -210px 0px",
    amount: 0.7,
  });

  const project3 = useRef<HTMLInputElement>(null);
  const isInViewproject3 = useInView(project3, {
    margin: "-210px 100px -210px 0px",
    amount: 0.4,
  });

  useEffect(() => {
    console.log("isInViewproject1", isInViewproject1);
  }, [isInViewproject1]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          transform: !isInViewSectionProjects ? "translateX(200%)" : "translateX(0%)",
          transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
        className="fixed -right-5 md:right-5 top-14 h-screen z-40 pb-24"
      >
        <div className="h-full flex flex-col justify-center items-center ">
          <Item_Numero_SideBar_Project isInView={isInViewproject1} number={1} />
          <Item_Numero_SideBar_Project isInView={isInViewproject2} number={2} />
          <Item_Numero_SideBar_Project isInView={isInViewproject3} number={3} />
        </div>
      </div>

      <motion.div
        animate={{ y: "0%" }}
        exit={{ opacity: 1 }}
        initial={{ y: "100%" }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="fixed top-0 left-0 w-full h-screen  overflow-y-auto"
      >
        <main className="relative bg-primary-color text-gray-900 min-h-screen w-screen  font-Montserrat_regular pb-44">
          <h1 className="font-NotoSansGeorgian min-h-60v mb-20 xl:mb-0 w-4/5 lg:w-3/5   md:tracking-widest text-2xl p-1 pr-8 sm:pr-0 md:text-3xl pl-5  sm:px-5rem px-24 pt-14 ">
            <LayoutText delay={0.5} timeAnimation={0.02} animationColor={false}>
              As a web developer, I thrive on combining purposeful design with powerful user interfaces,
              continually pushing the boundaries of what's possible through my deep understanding of
              JavaScript concepts and my ability to work on full-stack projects.
            </LayoutText>
          </h1>

          <section ref={refSectionProjects} className="w-screen relative pb-32">
            <ItemProject
              ref={project1}
              isInView={isInViewproject1}
              key={projectsItems[0].title}
              image={projectsItems[0].image}
              link={projectsItems[0].link}
              title={projectsItems[0].title}
              marginBottom={projectsItems[0].marginBottom}
              id={projectsItems[0].id}
            />

            <ItemProject
              ref={project2}
              isInView={isInViewproject2}
              key={projectsItems[1].title}
              image={projectsItems[1].image}
              link={projectsItems[1].link}
              title={projectsItems[1].title}
              marginBottom={projectsItems[1].marginBottom}
              id={projectsItems[1].id}
            />

            <ItemProject
              ref={project3}
              isInView={isInViewproject3}
              key={projectsItems[2].title}
              image={projectsItems[2].image}
              link={projectsItems[2].link}
              title={projectsItems[2].title}
              marginBottom={projectsItems[2].marginBottom}
              id={projectsItems[2].id}
            />
          </section>
        </main>
      </motion.div>
    </>
  );
};

export default projects;

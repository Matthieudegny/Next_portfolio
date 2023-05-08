import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Head from "next/head";

//components
import LayoutText from "../components/LayoutText";
import ItemProject from "../components/Projects/ItemProject";
import Item_Numero_SideBar_Project from "@/components/Projects/Item_Numero_SideBar_Project";
import Footer from "@/components/Footer";

//data
import { projectsItems } from "../data/itemsProjects";
import { userAgent } from "next/server";

const projects = () => {
  const [sizescreen, setsizescreen] = useState("");
  const refSectionProjects = useRef<HTMLInputElement>(null);
  const isInViewSectionProjects = useInView(refSectionProjects, {
    margin: "0px 0px 0px 0px",
    amount: 0.25,
  });

  useEffect(() => {
    //evet lsitener on width screen
    const handleResize = () => {
      if (window.innerWidth > 1700) {
        setsizescreen("3xl");
      }
      if (window.innerWidth < 1700 && window.innerWidth > 1536) {
        setsizescreen("2xl");
      }
      if (window.innerWidth < 1536 && window.innerWidth > 1280) {
        setsizescreen("xl");
      }
      if (window.innerWidth < 1280 && window.innerWidth > 1024) {
        setsizescreen("lg");
      }
      if (window.innerWidth < 1024 && window.innerWidth > 768) {
        setsizescreen("md");
      }
      if (window.innerWidth < 768 && window.innerWidth > 640) {
        setsizescreen("sm");
      }
      if (window.innerWidth < 640 && window.innerWidth > 400) {
        setsizescreen("xs");
      }
      if (window.innerWidth < 400) {
        setsizescreen("2xs");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(sizescreen);
  }, [sizescreen]);

  let marginUpdate;
  switch (sizescreen) {
    case "3xl":
      marginUpdate = "-190px 0px -250px 0px";
      break;
    case "2xl":
      marginUpdate = "-50px 0px -280px 0px";
      break;
    case "xl":
      marginUpdate = "-20px 0px -280px 0px";
      break;
    case "lg":
      marginUpdate = "-30px 0px -280px 0px";
      break;
    case "md":
      marginUpdate = "-120px 0px -280px 0px";
      break;
    case "sm":
      marginUpdate = "-90px 0px -280px 0px";
      break;
    case "xs":
      marginUpdate = "-200px 0px -200px 0px";
      break;
    case "2xs":
      marginUpdate = "-150px 0px -200px 0px";
      break;
    default:
      marginUpdate = "-200px 0px -280px 0px";
      break;
  }

  const amountProjects = {
    margin: marginUpdate,
    amount: 0.7,
  };

  const project1 = useRef<HTMLInputElement>(null);
  const isInViewproject1 = useInView(project1, amountProjects);

  const project2 = useRef<HTMLInputElement>(null);
  const isInViewproject2 = useInView(project2, amountProjects);

  const project3 = useRef<HTMLInputElement>(null);
  const isInViewproject3 = useInView(project3, amountProjects);

  const project4 = useRef<HTMLInputElement>(null);
  const isInViewproject4 = useInView(project4, amountProjects);

  const project5 = useRef<HTMLInputElement>(null);
  const isInViewproject5 = useInView(project5, amountProjects);

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
          <Item_Numero_SideBar_Project isInView={isInViewproject4} number={4} />
          <Item_Numero_SideBar_Project isInView={isInViewproject5} number={5} />
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
        className="fixed top-0 left-0 w-full h-screen  overflow-y-auto bg-primary-color text-gray-900"
      >
        <main className="relative  min-h-screen w-screen  font-Montserrat_regular pb-0">
          <Head>
            <title>Projects - Matthieu Degny Portfolio</title>
          </Head>
          <h5 className="font-NotoSansGeorgian min-h-60v mb-20 xl:mb-0 w-4/5 lg:w-3/5   md:tracking-widest text-xl sm:text-2xl p-1 pr-8 sm:pr-0 md:text-3xl pl-5  sm:px-5rem px-24 pt-14 ">
            <LayoutText delay={0.5} timeAnimation={0.02} animationColor={false}>
              As a web developer, I thrive on combining purposeful design with powerful user interfaces,
              continually pushing the boundaries of what's possible through my deep understanding of
              JavaScript concepts and my ability to work on full-stack projects.
            </LayoutText>
          </h5>

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

            <ItemProject
              ref={project4}
              isInView={isInViewproject4}
              key={projectsItems[3].title}
              image={projectsItems[3].image}
              link={projectsItems[3].link}
              title={projectsItems[3].title}
              marginBottom={projectsItems[3].marginBottom}
              id={projectsItems[3].id}
            />

            <ItemProject
              ref={project5}
              isInView={isInViewproject5}
              key={projectsItems[4].title}
              image={projectsItems[4].image}
              link={projectsItems[4].link}
              title={projectsItems[4].title}
              marginBottom={projectsItems[4].marginBottom}
              id={projectsItems[4].id}
            />
          </section>
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default projects;

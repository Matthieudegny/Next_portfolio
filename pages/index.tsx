import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/router";
import React, { useRef } from "react";

//components
import LayoutText from "../components/LayoutText";
import ArticleSkillsComponent from "@/components/ArticleSkillFrontEnd";
import ContainerLinkAnimated from "@/components/ContainerLinkAnimated";
import Footer from "@/components/Footer";

import {
  dataSkills,
  dataSkillsBackend,
  dataSkillsStructure,
  dataSkillsVersionning,
} from "@/utils/skillsData";

import { articleSkills } from "@/models/typesIndex";

export default function Home({ mobilVersion }: { mobilVersion: boolean }) {
  const router = useRouter();

  const refSkillsLines = useRef<HTMLInputElement>(null);
  const isInViewSkillstLines = useInView(refSkillsLines, { once: true });

  const refSkillsTexts = useRef<HTMLInputElement>(null);
  const isInViewSkillstTexts = useInView(refSkillsTexts, { once: true });

  return (
    <motion.main
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className="text-gray-900 fixed top-0 left-0 w-full h-screen bg-primary-color overflow-y-auto"
    >
      <Head>
        <title>PortFolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" relative min-h-screen w-screen flex flex-col justify-center bg-primary-color font-Montserrat_regular  sm:px-16 xl:px-48  ">
        <div className="h-screen flex flex-col justify-between sm:justify-evenly">
          <div className="font-NotoSansGeorgian tracking-widest text-3xl w-full p-2 md:text-4xl  xl:w-3/5  ">
            <LayoutText delay={0.5} timeAnimation={0.02}>
              Hello, I'm Matthieu, a front-end developer specialized, with
              modern technologies built around the Javascript framework.
            </LayoutText>
          </div>

          <div className="min-w-full p-2  md:pl-20 xl:pl-80 text-2xl md:text-3xl">
            <LayoutText delay={1} timeAnimation={0.008}>
              As a front-end developer with expertise in React, Next.js, and
              TypeScript, I'm passionate about crafting user-friendly interfaces
              that bring ideas to life.
            </LayoutText>
          </div>

          <div className="mb-5 p-2 text-xl md:text-3xl sm:mb-0">
            <LayoutText delay={1.2} timeAnimation={0.005}>
              What i can bring to you:
            </LayoutText>
          </div>
        </div>

        {dataSkills?.map((skill: articleSkills, index) => {
          return (
            <ArticleSkillsComponent
              key={index}
              title={skill.title}
              image={skill.image}
              text={skill.text}
              mobilVersion={mobilVersion}
            />
          );
        })}

        <div
          ref={refSkillsTexts}
          className="w-full md:h-75v flex flex-col md:flex-row "
        >
          <div
            className="relative h-full  pt-4 pb-4 flex flex-col justify-center"
            style={{
              transform: isInViewSkillstTexts ? "none" : "translateX(-200px)",
              opacity: isInViewSkillstTexts ? 1 : 0,
              transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
          >
            <h3>Back-end:</h3>
            <h4>
              API creation: Experienced in building robust and scalable APIs
              using Node.js and Express.js, with a deep understanding of RESTful
              API design principles and best practices.
            </h4>
            <h4>
              Database basics: Familiar with designing and implementing database
              schemas and queries using SQL. Experienced in working with
              PostgreSQL, SupaBase (relational database) and MongoDB(document
              database), ensuring efficient and optimized data storage and
              retrieval.
            </h4>
            {/* border bottom-left hozyzontale */}
            <div
              className="absolute  md:w-full h-px  bottom-0 left-0 bg-slate-400 z-50 transition-all duration-1000"
              style={{
                transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
                transformOrigin: "right",
                transform: isInViewSkillstLines ? "scaleY(1)" : "scaleY(0)",
              }}
            ></div>
          </div>
          <div className="relative h-full">
            <div
              className="relative h-2/5  pt-4 pb-4 flex flex-col justify-center"
              style={{
                transform: isInViewSkillstTexts ? "none" : "translateX(200px)",
                opacity: isInViewSkillstTexts ? 1 : 0,
                transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
            >
              <h3>Structure:</h3>
              <h4>
                Clean coding: Skilled in writing maintainable and scalable code
                using the MVC design pattern and TypeScript, ensuring code
                reliability and type safety.
              </h4>
            </div>
            <div
              className="relative h-3/5   pt-4 pb-4 flex flex-col justify-center"
              style={{
                transform: isInViewSkillstTexts ? "none" : "translateX(200px)",
                opacity: isInViewSkillstTexts ? 1 : 0,
                transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
            >
              <h3>Versionning:</h3>
              <h4>
                Experienced in using Git, GitHub, and Azur for version control,\
                ensuring efficient collaboration with team members and \
                maintaining codebase integrity. Proficient in managing \
                repositories, branches, and pull requests.
              </h4>
              {/* border middle hozyzontale */}
              <div
                className="absolute  md:h-px  top-0 left-0 bg-slate-400 z-50 transition-all duration-1000"
                style={{
                  transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",

                  width: isInViewSkillstLines ? "100%" : "0%",
                }}
              ></div>
            </div>
            {/* border middle vertical */}
            <div
              ref={refSkillsLines}
              className="absolute w-px md:h-full  bottom-0 left-0 bg-slate-400 z-50 transition-all duration-1000"
              style={{
                transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
                transformOrigin: "top",
                transform: isInViewSkillstLines ? "scaleY(1)" : "scaleY(0)",
              }}
            ></div>
            {/* border bottom-right horyzontal */}
            <div
              ref={refSkillsLines}
              className="absolute md:w-full h-px bottom-0 left-0 bg-slate-400 transition-all duration-1000"
              style={{
                transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
                transformOrigin: "left",
                transform: isInViewSkillstLines ? "scaleY(1)" : "scaleY(0)",
              }}
            ></div>
          </div>
        </div>

        <div className="md:mt-14 mb-14">
          <h3 className="xl:text-center">Current Focus:</h3>
          <h4>
            working on improving my skills in Continuous Integration and
            Deployment (CI/CD) by learning Docker and how to use it to create
            and manage containers for various applications.
          </h4>
          <h4>Unit testing with the Jest library.</h4>
        </div>

        <div className="mt-20 mb-20">
          <ContainerLinkAnimated
            title={"Projects / works"}
            linkImage={"/homeMin.png"}
            index={1}
          />
          <ContainerLinkAnimated
            title={"Contact"}
            linkImage={"/homeMin.png"}
            index={2}
          />
        </div>
        <Footer />
      </main>
    </motion.main>
  );
}

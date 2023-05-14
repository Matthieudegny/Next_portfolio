import Link from "next/link";
import Head from "next/head";
import { motion, useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";

//components
import LayoutText from "../components/LayoutText";
import ArticleSkillsComponent from "@/components/Home/ArticleSkillFrontEnd";
import ContainerLinkAnimated from "@/components/Home/ContainerLinkAnimated";
import Footer from "@/components/Footer";
import DiplayContainerh4 from "@/components/Home/DisplayContainerh4";

//data
import { API, cleanCode, versioning } from "@/data/itemsSkills";

export default function Home({
  mobileVersion,
  setHideNav,
  setlightTemeNav,
  setcurrentPage,
}: {
  mobileVersion: boolean;
  setHideNav: Function;
  setlightTemeNav: Function;
  setcurrentPage: Function;
}) {
  const refSkillsLines = useRef<HTMLInputElement>(null);
  const isInViewSkillstLines = useInView(refSkillsLines, { once: true });

  const refSkillsTexts = useRef<HTMLInputElement>(null);
  const isInViewSkillstTexts = useInView(refSkillsTexts, { once: true });

  const refSkillsStructureSkill = useRef<HTMLInputElement>(null);
  const isInViewStructureSkill = useInView(refSkillsStructureSkill, { once: true });

  const refSkillsTextsVersioning = useRef<HTMLInputElement>(null);
  const isInViewSkillstTextsVersioning = useInView(refSkillsTextsVersioning, {
    once: true,
  });

  const refTitle2 = useRef<HTMLDivElement>(null);
  const isInViewrefTitle2 = useInView(refTitle2, {
    amount: 0.3,
    once: true,
  });

  const refSection3 = useRef<HTMLDivElement>(null);
  const isInViewrefSection3 = useInView(refSection3, {
    amount: mobileVersion ? 0.1 : 0.3,
    margin: mobileVersion ? "200px 0px 0px 0px" : "",
  });

  const refBottomPage = useRef<HTMLDivElement>(null);
  const isInViewBottomPage = useInView(refBottomPage, {
    amount: 0.8,
  });

  useEffect(() => {
    if (isInViewBottomPage) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
  }, [isInViewBottomPage]);

  useEffect(() => {
    setlightTemeNav(isInViewrefSection3);
  }, [isInViewrefSection3]);

  return (
    <motion.main
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="fixed top-0 left-0 w-screen h-screen max-w-full-vw overflow-y-auto"
    >
      <main
        className={`${
          isInViewrefSection3
            ? "text-white bg-black duration-200"
            : "text-gray-900 bg-primary-color duration-200"
        } relative text-gray-900   min-h-screen w-screen flex flex-col justify-center  font-Montserrat_regular  sm:px-5rem xl:px-44`}
        style={{
          willChange: "background-color",
          transition: `background-color ${
            mobileVersion ? "0.2" : "1.7"
          }s cubic-bezier(0.17, 0.55, 0.55, 1) 0s, color ${
            mobileVersion ? "0.2" : "0.7"
          }s cubic-bezier(0.17, 0.55, 0.55, 1)  ${mobileVersion ? "0" : "0.3"}s`,
        }}
      >
        <Head>
          <title>Home - Matthieu Degny Portfolio</title>
        </Head>
        <section className="min-h-screen lg:h-screen  flex flex-col justify-evenly">
          <h1 className="font-NotoSansGeorgian tracking-widest  w-full p-2 pr-16 sm:pr-0 text-xl sm:text-2xl md:text-3xl  2xl:w-3/5  ">
            <LayoutText delay={0.5} timeAnimation={0.04} animationColor={true}>
              Hello, I'm Matthieu, a front end Developer / in progress to be full stack, specialized with
              modern technologies built around Javascript.
            </LayoutText>
          </h1>
          <h1>
            <strong className="opacity-0">Matthieu DEGNY Full stack developer</strong>
          </h1>

          <h2 className="min-w-full p-2 font-Montserrat_thin pr-16 sm:pr-0  md:pl-20 2xl:pl-30vw text-xl sm:text-2xl  md:text-3xl ">
            <LayoutText delay={1.3} timeAnimation={0.03} animationColor={false}>
              As a futur full stack developer with expertise in React, Node.js, Next.js, and TypeScript. I'm
              passionate about crafting user-friendly interfaces that bring ideas to life. What i can bring to
              you:
            </LayoutText>
          </h2>
          <h1 className="opacity-0">React , Next.js, Type script</h1>
        </section>

        <section className="2xl:min-h-screen 2xl:-mt-8 mt-5 pb-8 flex flex-col ">
          <h5
            ref={refTitle2}
            style={{
              transform: isInViewrefTitle2 ? "translateX(0)" : "translateX(-200px)",
              opacity: isInViewrefTitle2 ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
            }}
            className="pt-10 pb-14"
          >
            FRONT-END:
          </h5>
          <ArticleSkillsComponent mobileVersion={mobileVersion} isInViewrefSection3={isInViewrefSection3} />
        </section>

        <section ref={refSection3}>
          <div className="h-screen flex flex-col  justify-center items-center m-auto ">
            <div
              className="relative w-full   md:h-60v lg:h-50v xl:h-50v flex flex-col md:flex-row "
              ref={refSkillsTexts}
            >
              {/* border top horyzontale */}
              <div
                className="absolute h-px md:w-98%  top-0 left-0 bg-slate-400 z-50 scale-0"
                style={{
                  transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
                  transformOrigin: "center",
                  transform: isInViewSkillstLines ? "scaleX(1)" : "scaleX(0)",
                }}
              ></div>
              <div
                className="relative md:h-full pt-4 pb-4 xl:pr-10  flex flex-col "
                style={{
                  transform: isInViewSkillstTexts ? "none" : "translateX(-200px)",
                  opacity: isInViewSkillstTexts ? 1 : 0,
                  transition:
                    "transform 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s, opacity 0.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
                }}
              >
                <h5>Back-end:</h5>
                <DiplayContainerh4
                  title={"API creation:"}
                  text={
                    "Experienced in building scalable APIs using Node.js and Express.js, with RESTful API design principles and good practices."
                  }
                  items={API}
                  isInViewrefSection3={isInViewrefSection3}
                />
                {/* border bottom-left hozyzontale */}
                <div
                  className="absolute  md:w-full h-px  bottom-0 left-0 bg-slate-400 z-50 transition-all duration-1000"
                  style={{
                    transition: "transform 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s",
                    transformOrigin: "right",
                    transform: isInViewSkillstLines ? "scaleY(1)" : "scaleY(0)",
                  }}
                ></div>
              </div>
              <div className="relative h-full">
                <div
                  ref={refSkillsStructureSkill}
                  className="relative md:h-45% lg:h-45% xl:h-3/6 pt-4   flex flex-col "
                  style={{
                    transform: isInViewStructureSkill ? "none" : "translateX(200px)",
                    opacity: isInViewStructureSkill ? 1 : 0,
                    transition:
                      "transform 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s,opacity 0.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
                  }}
                >
                  <h5>Structure:</h5>
                  <DiplayContainerh4
                    title={"Clean coding:"}
                    text={
                      "Skilled in writing maintainable and scalable code using the MVC design pattern and TypeScript, ensuring code reliability and type safety."
                    }
                    items={cleanCode}
                    isInViewrefSection3={isInViewrefSection3}
                  />
                </div>
                <div
                  ref={refSkillsTextsVersioning}
                  className="relative h-4/6 xl:h-3/4  md:mb-0  pt-4 pb-4 flex flex-col "
                  style={{
                    transform: isInViewSkillstTextsVersioning
                      ? "none"
                      : `translateX(${mobileVersion ? "-200" : "200"}px)`,
                    opacity: isInViewSkillstTextsVersioning ? 1 : 0,
                    transition:
                      "transform 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s,opacity 0.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
                  }}
                >
                  <h5>Versioning:</h5>
                  <DiplayContainerh4
                    title={"version control:"}
                    text={
                      " Experienced in using Git, GitHub, and Azure for version control, ensuring collaboration with team members and maintaining codebase integrity. Proficient in managing repositories, branches, and pull requests."
                    }
                    items={versioning}
                    isInViewrefSection3={isInViewrefSection3}
                  />
                  {/* border middle hozyzontale */}
                  <div
                    className="absolute  md:h-px  top-0 left-0 bg-slate-400 z-50 transition-transform duration-1000"
                    style={{
                      transition: "width 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",

                      width: isInViewSkillstLines ? "98%" : "0%",
                    }}
                  ></div>
                </div>
                {/* border middle vertical */}
                <div
                  ref={refSkillsLines}
                  className="absolute w-px md:h-full  bottom-0 left-0 bg-slate-400 z-50 transition-transform duration-1000"
                  style={{
                    transition: "transform 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    transformOrigin: "top",
                    transform: isInViewSkillstLines ? "scaleY(1)" : "scaleY(0)",
                  }}
                ></div>
                {/* border bottom-right horyzontal */}
                <div
                  ref={refSkillsLines}
                  className="absolute md:w-98% h-px bottom-0 left-0 bg-slate-400 transition-all duration-1000"
                  style={{
                    transition: "transform 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s",
                    transformOrigin: "left",
                    transform: isInViewSkillstLines ? "scaleY(1)" : "scaleY(0)",
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div ref={refBottomPage} className="mt-52 mb-52">
            <Link
              href="/projects"
              onClick={() => {
                setcurrentPage("/projects");
              }}
            >
              <ContainerLinkAnimated
                title={"Projects / works"}
                linkImage={"/wave.png"}
                index={1}
                mobileVersion={mobileVersion}
              />
            </Link>
            <Link
              href="/contact"
              onClick={() => {
                setcurrentPage("/contact");
              }}
            >
              <ContainerLinkAnimated
                title={"Contact"}
                linkImage={"/bubble.png"}
                index={2}
                mobileVersion={mobileVersion}
              />
            </Link>
          </div>

          <Footer />
        </section>
      </main>
    </motion.main>
  );
}

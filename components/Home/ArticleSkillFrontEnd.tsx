import React, { useRef } from "react";
import { useInView } from "framer-motion";

import CubeSkillFront from "@/components/Home/CubeSkillFront";

import { frontSkills } from "@/data/itemsSkills";

const ArticleSkillsComponent = ({
  mobileVersion,
  isInViewrefSection3,
}: {
  mobileVersion: boolean;
  isInViewrefSection3: boolean;
}) => {
  const refskill1 = useRef<HTMLInputElement>(null);
  const isInViewSkill1 = useInView(refskill1, { amount: 0.7, once: true });
  const refskill2 = useRef<HTMLInputElement>(null);
  const isInViewSkill2 = useInView(refskill2, { amount: 0.7, once: true });
  const refskill3 = useRef<HTMLInputElement>(null);
  const isInViewSkill3 = useInView(refskill3, { amount: 0.7, once: true });
  const refskill4 = useRef<HTMLInputElement>(null);
  const isInViewSkill4 = useInView(refskill4, { amount: 0.7, once: true });

  function getAnimationStyle(isInView: boolean, X: number) {
    if (!mobileVersion) {
      return {
        willChange: "transform opacity",
        transform: isInView ? "none" : `translateX(${X}px)`,
        opacity: isInView ? 1 : 0,
        transition: `
          transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0s,
          opacity 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s`,
      };
    } else {
      return {};
    }
  }

  return (
    <section className="group relative max-w-full-vw overflow-hidden flex flex-col w-full justify-evenly mb-28 sm:mb-0">
      <div className="flex flex-col items-center">
        {/* top */}
        <div ref={refskill1} style={getAnimationStyle(isInViewSkill1, -200)} className="2xl:mr-35rem z-20 ">
          <CubeSkillFront
            mobileVersion={mobileVersion}
            isInViewrefSection3={isInViewrefSection3}
            transformCube={
              "perspective(95000px) rotateY(0deg) rotateX(-90deg) translateZ(160px) translateX(0px) translateY(0px)"
            }
            transformFace={"rotateX(90deg) translateZ(150px) translateY(-150px)"}
            secondColor={"#8717e8"}
            background={"#0e0218"}
            title={"UI/UX and responsive design:"}
            text={"Experienced in creating visually appealing and user-friendly interfaces."}
            listItems={frontSkills.uiUX}
          />
        </div>
        {/* right */}
        <div ref={refskill2} style={getAnimationStyle(isInViewSkill2, 200)} className="2xl:ml-35rem">
          <CubeSkillFront
            mobileVersion={mobileVersion}
            isInViewrefSection3={isInViewrefSection3}
            transformCube={
              "perspective(95000px) rotateY(-90deg) rotateX(0deg) translateZ(300px) translateX(0px) translateY(0px)"
            }
            transformFace={"rotateY(90deg) translateZ(300px) translateX(300px)"}
            secondColor={"#0741ec"}
            background={"#04072a"}
            title={"Performance optimization:"}
            text={
              "Skilled in optimizing application performance with React and dynamic DOM, including reusable components and dynamic updates."
            }
            listItems={frontSkills.perfOpti}
          />
        </div>
        {/* bottom */}
        <div ref={refskill3} style={getAnimationStyle(isInViewSkill3, -200)} className="2xl:mr-35rem">
          <CubeSkillFront
            mobileVersion={mobileVersion}
            isInViewrefSection3={isInViewrefSection3}
            transformCube={
              "perspective(95000px) rotateY(0deg) rotateX(90deg) translateZ(150px) translateX(0px) translateY(0px)"
            }
            transformFace={"rotateX(-90deg) translateZ(150px) translateY(150px)"}
            secondColor={"#00a0f4"}
            background={"#032232"}
            title={"State management:"}
            text={
              "Proficient in managing application state using Redux, Redux Toolkit, and the useContext hook, allowing for efficient and scalable management of complex data."
            }
            listItems={frontSkills.stateManagement}
          />
        </div>
        {/* left */}
        <div ref={refskill4} style={getAnimationStyle(isInViewSkill4, 200)} className="2xl:ml-35rem sm:mt-8">
          <CubeSkillFront
            mobileVersion={mobileVersion}
            isInViewrefSection3={isInViewrefSection3}
            transformCube={
              "perspective(95000px) rotateY(90deg) rotateX(0deg) translateZ(300px) translateX(0px) translateY(0px)"
            }
            transformFace={"rotateY(-90deg) translateZ(300px) translateX(-300px)"}
            secondColor={"#0cc16c"}
            background={"#03301b"}
            title={"SEO:"}
            text={
              "Skilled in optimizing website content for search engines using Next.js and server-side rendering to ensure optimal performance and search engine rankings."
            }
            listItems={frontSkills.SEO}
          />
        </div>
      </div>
    </section>
  );
};

export default ArticleSkillsComponent;

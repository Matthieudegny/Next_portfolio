import React, { useRef } from "react";
import { useInView } from "framer-motion";

import CubeSkillFront from "@/components/Home/CubeSkillFront";

import { frontSkills } from "@/data/itemsSkills";

const ArticleSkillsComponent = ({
  mobilVersion,
  isInViewrefSection2,
  isInViewrefSection3,
}: {
  mobilVersion: boolean;
  isInViewrefSection2: boolean;
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
    return {
      transform: isInView ? "none" : `translateX(${X}px)`,
      opacity: isInView ? 1 : 0,
      transition: `
        transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0s,
        opacity 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s`,
    };
  }

  return (
    <section className="group relative flex flex-col w-full justify-evenly">
      <div className="flex flex-col items-center">
        {/* top */}
        <div ref={refskill1} style={getAnimationStyle(isInViewSkill1, -200)} className="mr-64">
          <CubeSkillFront
            isInViewrefSection3={isInViewrefSection3}
            transformCube={
              "perspective(95000px) rotateY(0deg) rotateX(-90deg) translateZ(160px) translateX(0px) translateY(0px)"
            }
            transformFace={"rotateX(90deg) translateZ(150px) translateY(-150px)"}
            secondColor={"#5300fa"}
            gradientColor={"linear-gradient(45deg, rgba(52,13,61,1) 30%, rgba(83,0,250,1) 71%)"}
            title={"UI/UX and responsive design:"}
            text={"Experienced in creating visually appealing and user-friendly interfaces."}
            listItems={frontSkills.uiUX}
          />
        </div>
        {/* right */}
        <div ref={refskill2} style={getAnimationStyle(isInViewSkill2, 200)} className="ml-64">
          <CubeSkillFront
            isInViewrefSection3={isInViewrefSection3}
            transformCube={
              "perspective(95000px) rotateY(-90deg) rotateX(0deg) translateZ(300px) translateX(0px) translateY(0px)"
            }
            transformFace={"rotateY(90deg) translateZ(300px) translateX(300px)"}
            secondColor={"#0717ec"}
            gradientColor={"linear-gradient(45deg, rgba(27,31,75,1) 30%, rgba(7,23,236,1) 71%)"}
            title={"Performance optimization:"}
            text={
              "Skilled in optimizing application performance with React and dynamic DOM, including reusable components and dynamic updates."
            }
            listItems={frontSkills.perfOpti}
          />
        </div>
        {/* bottom */}
        <div ref={refskill3} style={getAnimationStyle(isInViewSkill3, -200)} className="mr-64">
          <CubeSkillFront
            isInViewrefSection3={isInViewrefSection3}
            transformCube={
              "perspective(95000px) rotateY(0deg) rotateX(90deg) translateZ(150px) translateX(0px) translateY(0px)"
            }
            transformFace={"rotateX(-90deg) translateZ(150px) translateY(150px)"}
            secondColor={"#00a0f4"}
            gradientColor={" linear-gradient(45deg, rgba(13,77,110,1) 30%, rgba(14,138,203,1) 71%)"}
            title={"State management:"}
            text={
              "Proficient in managing application state using Redux, Redux Toolkit, and the useContext hook, allowing for efficient and scalable management of complex data."
            }
            listItems={frontSkills.stateManagement}
          />
        </div>
        {/* left */}
        <div ref={refskill4} style={getAnimationStyle(isInViewSkill4, 200)} className="ml-64 mt-8">
          <CubeSkillFront
            isInViewrefSection3={isInViewrefSection3}
            transformCube={
              "perspective(95000px) rotateY(90deg) rotateX(0deg) translateZ(300px) translateX(0px) translateY(0px)"
            }
            transformFace={"rotateY(-90deg) translateZ(300px) translateX(-300px)"}
            secondColor={"#00f985"}
            gradientColor={"linear-gradient(45deg, rgba(20,92,58,1) 30%, rgba(8,182,101,1) 71%)"}
            title={"SEO:"}
            text={
              "Skilled in optimizing website content for search engines using Next.js and server-side rendering to ensure optimal performance and search engine rankings."
            }
            listItems={frontSkills.SEO}
          />
        </div>
      </div>
      {/* image card */}
      {/* mobile version => no card 3d animation */}
      {/* <div
        ref={refFrontImage}
        style={{
          transform: isInViewFrontImage ? "none" : "translateX(400px)",
          opacity: isInViewFrontImage ? 1 : 0,
          transition:
            "transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s,opacity 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
        className="m-auto  p-14  md:p-0"
      >
        {!mobilVersion ? (
          <div
            className=" relative m-14 cursor-pointer"
            style={{
              perspective: "1000px",
              perspectiveOrigin: "50% 50%",
              transform: "rotate3d(0, 0.8, 0, 34deg)",
              width: "650px",
              height: "650px",
            }}
            onMouseMove={(event) => {
              setoffsetY(event.nativeEvent.offsetY);
              setoffsetX(event.nativeEvent.offsetX);
            }}
            onMouseLeave={() => {
              setoffsetY(250);
              setoffsetX(205);
            }}
          >
            <img
              src="/frontEnd_skills.png"
              alt="my_image"
              style={{
                borderRadius: "10px",
                transform: `rotateX(${indiceRotationX}deg) rotateY(${indiceRotationY}deg)`,
                transition: "all 0.3s ease",
              }}
            />
          </div>
        ) : (
          <img
            src="/frontEnd_skills.png"
            alt="my_image"
            style={{
              borderRadius: "10px",
              transition: "all 0.5s ease",
              width: "100%",
            }}
          />
        )}
      </div> */}
    </section>
  );
};

export default ArticleSkillsComponent;

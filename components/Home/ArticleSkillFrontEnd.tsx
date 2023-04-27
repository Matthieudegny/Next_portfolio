import React, { useState, useRef } from "react";
import { useInView } from "framer-motion";

import LayoutH3 from "../LayoutH3";
import DiplayContainerh4 from "./DisplayContainerh4";

import { frontEndSkills } from "@/data/itemsSkills";

const ArticleSkillsComponent = ({
  mobilVersion,
  isInViewrefSection2,
  isInViewrefSection3,
}: {
  mobilVersion: boolean;
  isInViewrefSection2: boolean;
  isInViewrefSection3: boolean;
}) => {
  const [offsetY, setoffsetY] = useState<number>(250);
  const [offsetX, setoffsetX] = useState<number>(205);

  const refFrontImage = useRef<HTMLInputElement>(null);
  const isInViewFrontImage = useInView(refFrontImage, { amount: 0.7, once: true });

  let indiceRotationX = (offsetY - 250) / -25;
  let indiceRotationY = (offsetX - 210) / -20.75;

  const getDivStyles = (delay: number) => ({
    transform: isInViewrefSection2 ? "none" : "translateX(-200px)",
    opacity: isInViewrefSection2 ? 1 : 0,
    transition: `transform 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s,
                 opacity 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
  });

  return (
    <section className="group relative flex flex-col w-full justify-evenly">
      <main className=" flex flex-col  justify-center mt-6 xl:mt-0 rounded-2xl p-6 pb-0 ">
        <div
          style={{
            transform: isInViewrefSection2 ? "none" : "translatey(50px)",
            opacity: isInViewrefSection2 ? 1 : 0,
            transition: `
            transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0s, opacity 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s`,
          }}
        >
          <LayoutH3>Front-end:</LayoutH3>
        </div>

        <div className="mt-8" style={getDivStyles(0.4)}>
          <DiplayContainerh4
            title={"UI/UX and responsive design:"}
            text={
              "Experienced in creating visually appealing and user-friendly interfaces using Figma and CSS (SASS, Tailwind, MUI)."
            }
            items={frontEndSkills.uiUX}
            isInViewrefSection3={isInViewrefSection3}
          />
        </div>
        <div className="mt-4" style={getDivStyles(0.8)}>
          <DiplayContainerh4
            title={"Performance optimization:"}
            text={
              "Skilled in optimizing application performance with React and dynamic DOM, including reusable components and dynamic updates."
            }
            items={frontEndSkills.perfOpti}
            isInViewrefSection3={isInViewrefSection3}
          />
        </div>

        <div className="mt-4" style={getDivStyles(1.2)}>
          <DiplayContainerh4
            title={"State management:"}
            text={
              "Proficient in managing application state using Redux, Redux Toolkit, and the useContext hook, allowing for efficient and scalable management of complex data."
            }
            items={frontEndSkills.stateManagement}
            isInViewrefSection3={isInViewrefSection3}
          />
        </div>
        <div className="mt-4" style={getDivStyles(1.6)}>
          <DiplayContainerh4
            title={"SEO:"}
            text={
              "Skilled in optimizing website content for search engines using Next.js and server-side rendering to ensure optimal performance and search engine rankings."
            }
            items={frontEndSkills.SEO}
            isInViewrefSection3={isInViewrefSection3}
          />
        </div>
      </main>
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

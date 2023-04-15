import React, { useState, ReactNode } from "react";

import { articleSkills } from "@/models/typesIndex";
import LayoutH3 from "../components/LayoutH3";

const DiplayContainerh4 = ({
  title,
  text,
  children,
}: {
  title: string;
  text: string;
  children?: ReactNode;
}) => {
  return (
    <div className="group/item cursor-pointer  rounded-xl overflow-hidden">
      <h4>
        <span className="block">{title}</span>
        {text}
      </h4>
      <div className="leading-7 h-7 ">{children}</div>
    </div>
  );
};

const ArticleSkillsComponent = ({
  mobilVersion,
  isInViewrefSection2,
}: {
  mobilVersion: boolean;
  isInViewrefSection2: boolean;
}) => {
  const [offsetY, setoffsetY] = useState<number>(250);
  const [offsetX, setoffsetX] = useState<number>(205);

  let indiceRotationX = (offsetY - 250) / -25;
  let indiceRotationY = (offsetX - 210) / -20.75;

  const displaylanguagesSkills = (text: string, hoverReference: string, color: string, delay: string) => {
    return (
      <span
        className={`inline-block text-lg group-hover/${hoverReference}:-translate-y-1 translate-y-7  ${color}  ml-6`}
        style={{
          transition: `transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)${delay}`,
        }}
      >
        {text}
      </span>
    );
  };

  return (
    <article className="group relative flex flex-col w-full justify-evenly  2xl:flex-row 2xl:justify-between">
      <main
        className=" flex flex-col  justify-center opacity-0 mt-6 xl:mt-0 rounded-2xl p-6 2xl:w-1/2"
        style={{
          transform: isInViewrefSection2 ? "none" : "translateX(-200px)",
          opacity: isInViewrefSection2 ? 1 : 0,
          transition:
            "transform 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s,opacity 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
        }}
      >
        <LayoutH3>Front-end:</LayoutH3>

        <DiplayContainerh4
          title={"UI/UX and responsive design:"}
          text={
            "Experienced in creating visually appealing and user-friendly interfaces using Figma and CSS (SASS, Tailwind, MUI)"
          }
        >
          {displaylanguagesSkills("FIGMA", "item", "text-purple-400", "0.1s")}
          {displaylanguagesSkills("CSS", "item", "text-blue-500", "0.2s")}
          {displaylanguagesSkills("SASS", "item", "text-pink-500", "0.3s")}
          {displaylanguagesSkills("TAILWIND", "item", "text-blue-600", "0.4s")}
          {displaylanguagesSkills("MUI", "item", "text-blue-700", "0.5s")}
        </DiplayContainerh4>
        <DiplayContainerh4
          title={"Performance optimization:"}
          text={
            "Skilled in optimizing application performance with React and dynamic DOM, including reusable components and dynamic updates."
          }
        >
          {displaylanguagesSkills("REACT", "item", "text-blue-600", "0.1s")}
          {displaylanguagesSkills("REACT-ROUTER", "item", "text-red-500", "0.2s")}
          {displaylanguagesSkills("REACT-QUERY", "item", "text-blue-500", "0.3s")}
        </DiplayContainerh4>
        <DiplayContainerh4
          title={"State management:"}
          text={
            "Proficient in managing application state using Redux, Redux Toolkit, and the useContext hook, allowing for efficient and scalable management of complex data."
          }
        >
          {displaylanguagesSkills("REDUX", "item", "text-blue-500", "0.1s")}
          {displaylanguagesSkills("REDUX-DEV-TOOLS", "item", "text-blue-600", "0.2s")}
          {displaylanguagesSkills("USE-CONTEXT", "item", "text-blue-800", "0.3s")}
        </DiplayContainerh4>
        <DiplayContainerh4
          title={"SEO:"}
          text={
            "Skilled in optimizing website content for search engines using Next.js and server-side rendering to ensure optimal performance and search engine rankings."
          }
        >
          {displaylanguagesSkills("NEXT.JS", "item", "text-gray-500", "0.1s")}
        </DiplayContainerh4>
      </main>

      <div
        style={{
          transform: isInViewrefSection2 ? "none" : "translateX(200px)",
          opacity: isInViewrefSection2 ? 1 : 0,
          transition:
            "transform 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s,opacity 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
        }}
        className="m-auto  p-14  md:p-0"
      >
        {/* mobile version => no card 3d animation */}
        {!mobilVersion ? (
          <div
            className=" relative m-14 cursor-pointer"
            style={{
              perspective: "1000px",
              perspectiveOrigin: "50% 50%",
              transform: "rotate3d(0, 0.8, 0, 34deg)",
              width: "500px",
              height: "500px",
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
      </div>
    </article>
  );
};

export default ArticleSkillsComponent;

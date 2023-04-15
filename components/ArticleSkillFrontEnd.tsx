import React, { useState } from "react";

import { articleSkills } from "@/models/typesIndex";
import LayoutH3 from "../components/LayoutH3";

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
        <h4>
          UI/UX and responsive design: Experienced in creating visually
          appealing and user-friendly interfaces using Figma and CSS (SASS,
          Tailwind, MUI).
        </h4>
        <h4>
          Performance optimization: Skilled in optimizing application
          performance with React and dynamic DOM, including reusable components
          and dynamic updates.
        </h4>
        <h4>
          State management: Proficient in managing application state using
          Redux, Redux Toolkit, and the useContext hook, allowing for efficient
          and scalable management of complex data.
        </h4>
        <h4>
          SEO: Skilled in optimizing website content for search engines using
          Next.js and server-side rendering to ensure optimal performance and
          search engine rankings.,
        </h4>
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
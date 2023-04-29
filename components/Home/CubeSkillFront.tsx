import React, { useState, useEffect } from "react";

const CubeSkillFront = ({
  isInViewrefSection3,
  transformCube,
  transformFace,
  secondColor,
  gradientColor,
  title,
  text,
  listItems,
}: {
  isInViewrefSection3: boolean;
  transformCube: string;
  transformFace: string;
  secondColor: string;
  gradientColor: string;
  title: string;
  text: string;
  listItems: string[];
}) => {
  const [animationOn, setAnimationOn] = useState(false);

  const turnAnimationOff = () => {
    const timeOut = setTimeout(() => {
      setAnimationOn(false);
    }, 400);
    return () => clearTimeout(timeOut);
  };

  return (
    <div
      onMouseEnter={() => {
        setAnimationOn(true);
      }}
      onMouseLeave={() => {
        turnAnimationOff();
      }}
      style={{
        transformStyle: "preserve-3d",
        transform: animationOn ? transformCube : "perspective(1000px)",
        transition: "transform 1s",
      }}
      className="relative w-600px h-300px m-14 cursor-pointer "
    >
      <div
        style={{
          transform: "translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
          color: secondColor,
          transition:
            "background-color 1.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0s, color 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
        className={`absolute w-600px h-300px ${
          isInViewrefSection3
            ? "text-white bg-black duration-200"
            : "text-gray-900 bg-primary-color duration-200"
        } `}
      >
        <div className="h-full flex text-center justify-center items-center text-6xl">{title}</div>
      </div>
      <div
        style={{
          transform: transformFace,

          background: gradientColor,
        }}
        className="absolute w-600px h-300px rounded-md"
      >
        <div className="h-full p-3 text-white underline-offset-8 flex flex-col text-center justify-center items-center text-2xl">
          <div
            style={{
              textShadow: "0px 0px 4px black",
            }}
            className="leading-10"
          >
            {text}
          </div>
          <div className="flex mt-5">
            {listItems.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    color: secondColor,
                    boxShadow: "0px 0px 6px white",
                  }}
                  className="p-1 m-2 bg-primary-color rounded-lg text-xl font-semibold "
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CubeSkillFront;

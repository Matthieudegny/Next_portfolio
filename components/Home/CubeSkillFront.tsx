import React, { useState, useEffect } from "react";

const CubeSkillFront = ({
  isInViewrefSection3,
  transformCube,
  transformFace,
  secondColor,
  background,
  title,
  text,
  listItems,
}: {
  isInViewrefSection3: boolean;
  transformCube: string;
  transformFace: string;
  secondColor: string;
  background: string;
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
    // cube
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
      {/* front faace */}
      <div
        style={{
          transform: "translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
          color: !animationOn ? secondColor : background,
          transition:
            "background-color 1.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0s, color 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
        className={`absolute w-600px h-300px bg-primary-color`}
      >
        <div className="h-full flex text-center justify-center items-center text-6xl">{title}</div>
      </div>
      {/* other */}
      <div
        style={{
          transform: transformFace,
          background: animationOn ? secondColor : background,
          transition: `${animationOn ? "2.5" : "1"}s background 0s`,
        }}
        className="absolute w-600px h-300px rounded-md animate-[gradient_7s_ease_infinite]"
      >
        <div className="h-full p-3 text-white flex flex-col text-center justify-center items-center text-2xl">
          <div className="leading-10">{text}</div>
          <div className="flex mt-5">
            {listItems.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    color: secondColor,
                    boxShadow: "0px 0px 6px white",
                  }}
                  className="p-1 m-2 bg-primary-color hover:bg-white duration-200 hover:scale-110 rounded-lg text-xl font-semibold "
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
